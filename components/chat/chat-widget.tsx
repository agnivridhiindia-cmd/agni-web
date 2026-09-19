"use client";

import * as React from "react";
import { X } from "lucide-react";
import { ChatMessage, ChatResponsePayload } from "@/types/chat";
import { ChatDialog } from "./chat-dialog";
import { siteConfig } from "@/lib/site-config";

const INITIAL_MESSAGE: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content:
    "Namaste! Welcome to **Agnivridhi India**.\n\n" +
    "I am your virtual advisory assistant. How can I assist you today?\n" +
    "• **Government & Debt Funding:** CGTMSE collateral-free loans up to ₹5 Cr, MUDRA, PMEGP\n" +
    "• **Compliance & Certifications:** ISO 9001/14001, MSME Udyam, GST, Pvt Ltd/LLP incorporation\n" +
    "• **Digital & Tech Growth:** Custom web & software engineering\n\n" +
    "Choose a popular question below or ask me anything directly!",
  timestamp: Date.now(),
  suggestedActions: [
    {
      label: "Book Free Consultation",
      href: "/contact",
      actionType: "link",
    },
    {
      label: "Call +91 92895 55190",
      href: `tel:${siteConfig.contact.phone}`,
      actionType: "call",
    },
  ],
};

export function ChatWidget() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [hasInteracted, setHasInteracted] = React.useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
    if (!hasInteracted) {
      setHasInteracted(true);
    }
  };

  const handleSendMessage = async (userText: string) => {
    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: userText,
      timestamp: Date.now(),
    };

    const newHistory = [...messages, userMessage];
    setMessages(newHistory);
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newHistory.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!res.ok && res.status !== 429) {
        throw new Error(`Chat API responded with status ${res.status}`);
      }

      const data = (await res.json()) as ChatResponsePayload;

      const assistantMessage: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content:
          data.reply ||
          "Thank you for reaching out! For detailed advisory tailored to your firm, please connect with our team directly.",
        timestamp: Date.now(),
        suggestedActions: data.suggestedActions,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      console.error("Chat error:", err);
      const fallbackMessage: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content:
          "I'm temporarily experiencing connectivity issues with the AI advisory server. However, our human advisory team is available right now!",
        timestamp: Date.now(),
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
      };
      setMessages((prev) => [...prev, fallbackMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        ...INITIAL_MESSAGE,
        timestamp: Date.now(),
      },
    ]);
  };

  return (
    <>
      {/* Floating Chat Dialog */}
      <ChatDialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        messages={messages}
        isLoading={isLoading}
        onSendMessage={handleSendMessage}
        onResetChat={handleResetChat}
      />

      {/* Floating Launcher Button */}
      <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50">
        <button
          type="button"
          onClick={toggleOpen}
          aria-label={isOpen ? "Close AI Chat" : "Open Agnivridhi AI Chat"}
          title={isOpen ? "Close chat" : "Chat with Agnivridhi AI"}
          className="group relative flex items-center justify-center w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-[#0B1528] hover:bg-[#070D18] text-white shadow-2xl shadow-slate-950/50 hover:shadow-cyan-900/40 hover:scale-105 active:scale-95 transition-all duration-200 border border-slate-700/80 hover:border-amber-400/50 cursor-pointer"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white transition-transform duration-200 group-hover:rotate-90" />
          ) : (
            <div className="relative w-8 h-8 sm:w-8.5 sm:h-8.5 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo1.png"
                alt="Agnivridhi Logo"
                className="w-full h-full object-contain p-0.5 select-none pointer-events-none drop-shadow-sm group-hover:scale-110 transition-transform duration-200"
              />
              {/* Live green active ping dot */}
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-[#0B1528]" />
              </span>
            </div>
          )}
        </button>
      </div>
    </>
  );
}
