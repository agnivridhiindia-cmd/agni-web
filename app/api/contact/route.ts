import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations/contact-form";
import { getAllServices } from "@/data/services";
import { siteConfig } from "@/lib/site-config";

/**
 * POST /api/contact
 *
 * Receives inbound advisory inquiries from the public contact form and
 * delivers them by email via the Resend API (https://resend.com).
 *
 * ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ SETUP ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬
 * 1. Create a free Resend account and API key: https://resend.com/api-keys
 * 2. Verify a sending domain (or use their shared onboarding domain while
 *    testing): https://resend.com/domains
 * 3. Add these to your environment (.env.local for dev, and your host's
 *    env settings for production ÃƒÂ¢Ã¢â€šÂ¬ - Â e.g. Vercel Project Settings > Env Vars):
 *
 *      RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx
 *      CONTACT_FROM_EMAIL=inquiries@your-verified-domain.com
 *      CONTACT_TO_EMAIL=advisory@agnivridhiindia.com   (where leads land)
 *
 * If RESEND_API_KEY is not set, the route still validates and logs the
 * submission server-side (visible in your deploy logs) so nothing throws
 * in local/demo environments ÃƒÂ¢Ã¢â€šÂ¬ - Â but no email is actually sent. Configure
 * the env vars above before relying on this in production.
 *
 * Swap the `sendViaResend` call below for any other provider (SendGrid,
 * Postmark, SES, nodemailer + SMTP, etc.) if you prefer ÃƒÂ¢Ã¢â€šÂ¬ - Â the validation,
 * rate limiting, and response shape can stay the same.
 * ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬ÃƒÂ¢ - ÂÃ¢â€šÂ¬
 */

// --- Extremely lightweight in-memory rate limiting (per server instance) ---
// Note: this resets on redeploy/cold start and is NOT shared across
// serverless instances. It's a basic deterrent against rapid-fire abuse,
// not a substitute for a real rate limiter (e.g. Upstash Ratelimit) if
// this endpoint starts attracting spam.
const submissionLog = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX_REQUESTS = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (submissionLog.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  timestamps.push(now);
  submissionLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX_REQUESTS;
}

async function sendViaResend(params: {
  name: string;
  email: string;
  phone: string;
  company?: string;
  serviceName: string;
  message: string;
  referenceCode: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? siteConfig.contact.email;

  if (!apiKey || !fromEmail || !toEmail) {
    // Not configured yet ÃƒÂ¢Ã¢â€šÂ¬ - Â log so the submission isn't silently lost,
    // and surface a clear signal in server logs for the site operator.
    console.warn(
      "[contact-api] RESEND_API_KEY / CONTACT_FROM_EMAIL / CONTACT_TO_EMAIL not fully configured ÃƒÂ¢Ã¢â€šÂ¬ - Â " +
        "email was NOT sent. Submission was:",
      params
    );
    return { delivered: false as const };
  }

  const html = `
    <h2>New Enterprise Diagnostic / Advisory Request ÃƒÂ¢Ã¢â€šÂ¬ - Â ${params.referenceCode}</h2>
    <p><strong>Name:</strong> ${escapeHtml(params.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(params.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(params.phone)}</p>
    <p><strong>Enterprise:</strong> ${escapeHtml(params.company || "ÃƒÂ¢Ã¢â€šÂ¬ - Â")}</p>
    <p><strong>Practice Area:</strong> ${escapeHtml(params.serviceName)}</p>
    <p><strong>Executive Notes / Scope:</strong></p>
    <p>${escapeHtml(params.message).replace(/\n/g, "<br/>")}</p>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: toEmail,
      reply_to: params.email,
      subject: `New Advisory Inquiry (${params.referenceCode}) ÃƒÂ¢Ã¢â€šÂ¬ - Â ${params.serviceName}`,
      html,
    }),
  });

  if (!res.ok) {
    const errorBody = await res.text().catch(() => "");
    throw new Error(`Resend API error (${res.status}): ${errorBody}`);
  }

  return { delivered: true as const };
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      req.headers.get("x-real-ip") ??
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again in a few minutes." },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    // Honeypot field: real users never fill this (it's visually hidden in
    // the form). Bots that auto-fill every field will trip it.
    if (typeof body.website === "string" && body.website.trim() !== "") {
      // Pretend success so bots don't learn the honeypot was detected.
      return NextResponse.json({ success: true, referenceCode: makeReferenceCode() });
    }

    const parsed = contactFormSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed.", issues: parsed.error.flatten().fieldErrors },
        { status: 422 }
      );
    }

    const data = parsed.data;
    const service = getAllServices().find((s) => s.slug === data.service);
    const referenceCode = makeReferenceCode();

    await sendViaResend({
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company,
      serviceName: service?.name ?? data.service,
      message: data.message,
      referenceCode,
    });

    return NextResponse.json({ success: true, referenceCode });
  } catch (error) {
    console.error("[contact-api] Failed to process submission:", error);
    return NextResponse.json(
      { error: "Something went wrong while submitting your inquiry. Please try again." },
      { status: 500 }
    );
  }
}

function makeReferenceCode(): string {
  return `AGNI-${Math.floor(100000 + Math.random() * 900000)}`;
}