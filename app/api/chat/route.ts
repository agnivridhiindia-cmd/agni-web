import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import {
  buildSystemInstruction,
  getLocalFallbackResponse,
} from "@/lib/chat/knowledge-base";
import { ChatRequestPayload, ChatResponsePayload, SuggestedAction } from "@/types/chat";
import { siteConfig } from "@/lib/site-config";

// --- In-memory rate limiter per IP to protect the 15 RPM free tier limit ---
const rateLimitMap = new Map<string, number[]>();
const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_MINUTE = 12; // Safety cap below 15 RPM

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const history = (rateLimitMap.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (history.length >= MAX_REQUESTS_PER_MINUTE) {
    return false;
  }
  history.push(now);
  rateLimitMap.set(ip, history);
  return true;
}

function extractSmartActions(text: string): SuggestedAction[] {
  const lower = text.toLowerCase();
  const actions: SuggestedAction[] = [];

  if (lower.includes("cgtmse") || lower.includes("collateral") || lower.includes("mudra") || lower.includes("loan")) {
    actions.push({
      label: "View CGTMSE Details",
      href: "/services/cgtmse-funding",
      actionType: "link",
    });
  }

  if (lower.includes("iso") || lower.includes("compliance") || lower.includes("udyam")) {
    actions.push({
      label: "Compliance Services",
      href: "/services#compliance",
      actionType: "link",
    });
  }

  // Always offer expert consultation or direct call
  actions.push({
    label: "Book Free Consultation",
    href: "/contact",
    actionType: "link",
  });

  if (siteConfig.contact.phone) {
    actions.push({
      label: `Call ${siteConfig.contact.phone}`,
      href: `tel:${siteConfig.contact.phone}`,
      actionType: "call",
    });
  }

  // Cap at 3 actions
  return actions.slice(0, 3);
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    if (!checkRateLimit(ip)) {
      const response: ChatResponsePayload = {
        reply:
          "You have reached the temporary query limit for this minute. Our consultants are available right now to assist you directly!",
        suggestedActions: [
          {
            label: "Speak with Advisor",
            href: `tel:${siteConfig.contact.phone}`,
            actionType: "call",
          },
          {
            label: "Book Consultation",
            href: "/contact",
            actionType: "link",
          },
        ],
      };
      return NextResponse.json(response, { status: 429 });
    }

    const body = (await req.json()) as ChatRequestPayload;
    if (!body || !Array.isArray(body.messages) || body.messages.length === 0) {
      return NextResponse.json(
        { error: "Invalid request: messages array is required." },
        { status: 400 }
      );
    }

    const messages = body.messages.filter(
      (m) => m && typeof m.content === "string" && m.content.trim().length > 0
    );

    if (messages.length === 0) {
      return NextResponse.json(
        { error: "No valid message content provided." },
        { status: 400 }
      );
    }

    const lastUserMessage = messages[messages.length - 1];
    const apiKey = process.env.GEMINI_API_KEY;

    // If API key is not configured, gracefully fall back to local knowledge base
    if (!apiKey || apiKey === "your_gemini_api_key_here") {
      const fallback = getLocalFallbackResponse(lastUserMessage.content);
      return NextResponse.json({
        reply: fallback.reply,
        suggestedActions: fallback.suggestedActions,
      });
    }

    // Call Gemini API via GoogleGenAI SDK
    try {
      const ai = new GoogleGenAI({ apiKey });
      const primaryModel = process.env.GEMINI_MODEL || "gemini-flash-latest";

      // Include up to last 6 messages for context
      const contents = messages.slice(-6).map((m) => ({
        role: m.role === "assistant" ? ("model" as const) : ("user" as const),
        parts: [{ text: m.content.slice(0, 1000) }],
      }));

      let replyText = "";

      try {
        const result = await ai.models.generateContent({
          model: primaryModel,
          contents,
          config: {
            systemInstruction: buildSystemInstruction(),
            temperature: 0.6,
            maxOutputTokens: 800,
          },
        });
        replyText = result.text?.trim() || "";
      } catch (firstErr) {
        // If primary model was unavailable, try gemini-3.6-flash as fallback
        console.warn(`Primary model ${primaryModel} failed, trying gemini-3.6-flash...`, firstErr);
        const result = await ai.models.generateContent({
          model: "gemini-3.6-flash",
          contents,
          config: {
            systemInstruction: buildSystemInstruction(),
            temperature: 0.6,
            maxOutputTokens: 800,
          },
        });
        replyText = result.text?.trim() || "";
      }

      if (!replyText) {
        throw new Error("Empty response returned from Gemini API");
      }

      const actions = extractSmartActions(replyText + " " + lastUserMessage.content);

      const response: ChatResponsePayload = {
        reply: replyText,
        suggestedActions: actions,
      };

      return NextResponse.json(response);
    } catch (apiError: unknown) {
      console.warn(
        "Gemini API request failed or rate-limited; switching to grounded local fallback:",
        apiError
      );

      // Safe fallback prevents broken user experience
      const fallback = getLocalFallbackResponse(lastUserMessage.content);
      return NextResponse.json({
        reply: fallback.reply,
        suggestedActions: fallback.suggestedActions,
      });
    }
  } catch (err: unknown) {
    console.error("Chat API route error:", err);
    return NextResponse.json(
      {
        reply:
          "We are experiencing high advisory volume. Please connect with our team directly for instant support.",
        suggestedActions: [
          {
            label: "Call +91 92895 55190",
            href: `tel:${siteConfig.contact.phone}`,
            actionType: "call",
          },
          {
            label: "Book Consultation",
            href: "/contact",
            actionType: "link",
          },
        ],
      },
      { status: 500 }
    );
  }
}
