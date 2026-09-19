"use client";

import * as React from "react";
import Link from "next/link";
import { Bot, User, ArrowUpRight, Phone, Sparkles } from "lucide-react";
import { ChatMessage as ChatMessageType, SuggestedAction } from "@/types/chat";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: ChatMessageType;
  onActionClick?: (action: SuggestedAction) => void;
}

/**
 * Lightweight safe markdown-like formatting for message text:
 * handles bold (**text**), bullet lines (• or -), numbered lines (1. ), and line breaks.
 */
function FormattedContent({ content }: { content: string }) {
  const lines = content.split("\n");

  const renderFormattedLine = (line: string, keyPrefix: string) => {
    // Split by bold segments: **text**
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={`${keyPrefix}-${i}`} className="font-semibold text-slate-900">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return <React.Fragment key={`${keyPrefix}-${i}`}>{part}</React.Fragment>;
    });
  };

  return (
    <div className="space-y-1.5 text-[13.5px] leading-relaxed">
      {lines.map((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed) {
          return <div key={idx} className="h-1.5" />;
        }

        // Bullet point detection (• or - or *)
        if (trimmed.startsWith("•") || trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
          const text = trimmed.replace(/^[•\-\*]\s*/, "");
          return (
            <div key={idx} className="flex items-start gap-2 pl-1">
              <span className="text-[#0891B2] mt-1 font-bold text-xs select-none">•</span>
              <span className="flex-1">{renderFormattedLine(text, `b-${idx}`)}</span>
            </div>
          );
        }

        // Numbered list detection (e.g. "1. ")
        const numberedMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
        if (numberedMatch) {
          const num = numberedMatch[1];
          const text = numberedMatch[2];
          return (
            <div key={idx} className="flex items-start gap-2 pl-1">
              <span className="text-[#0891B2] font-semibold text-xs min-w-4 select-none">
                {num}.
              </span>
              <span className="flex-1">{renderFormattedLine(text, `n-${idx}`)}</span>
            </div>
          );
        }

        return <p key={idx}>{renderFormattedLine(trimmed, `p-${idx}`)}</p>;
      })}
    </div>
  );
}

export function ChatMessage({ message, onActionClick }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={cn(
        "flex w-full gap-2.5 animate-in fade-in slide-in-from-bottom-1 duration-200",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      {/* Bot Avatar */}
      {!isUser && (
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#0891B2] to-[#0e7490] flex items-center justify-center text-white shrink-0 mt-1 shadow-sm">
          <Bot className="w-4 h-4" />
        </div>
      )}

      <div
        className={cn(
          "max-w-[84%] rounded-2xl px-3.5 py-2.5 shadow-sm transition-all",
          isUser
            ? "bg-[#0891B2] text-white rounded-br-xs"
            : "bg-slate-50 text-slate-700 border border-slate-200/90 rounded-bl-xs"
        )}
      >
        {isUser ? (
          <p className="text-[13.5px] leading-relaxed whitespace-pre-wrap select-text">
            {message.content}
          </p>
        ) : (
          <FormattedContent content={message.content} />
        )}

        {/* Action buttons attached to message */}
        {!isUser && message.suggestedActions && message.suggestedActions.length > 0 && (
          <div className="mt-3 pt-2.5 border-t border-slate-200/70 flex flex-wrap gap-1.5">
            {message.suggestedActions.map((action, i) => {
              if (action.actionType === "call" && action.href) {
                return (
                  <a
                    key={i}
                    href={action.href}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/80 hover:bg-emerald-100 transition-colors"
                  >
                    <Phone className="w-3 h-3" />
                    {action.label}
                  </a>
                );
              }

              if (action.href) {
                return (
                  <Link
                    key={i}
                    href={action.href}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-cyan-50 text-[#0891B2] border border-cyan-200 hover:bg-cyan-100 transition-colors"
                  >
                    {action.label}
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                );
              }

              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => onActionClick?.(action)}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-300 hover:bg-slate-200 transition-colors"
                >
                  <Sparkles className="w-3 h-3 text-[#0891B2]" />
                  {action.label}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* User Avatar */}
      {isUser && (
        <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center shrink-0 mt-1">
          <User className="w-4 h-4" />
        </div>
      )}
    </div>
  );
}
