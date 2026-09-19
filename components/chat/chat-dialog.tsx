"use client";

import * as React from "react";
import {
  Send,
  X,
  RotateCcw,
  Bot,
  Sparkles,
  ChevronRight,
  PhoneCall,
} from "lucide-react";
import { ChatMessage as ChatMessageType, QuickPrompt, SuggestedAction } from "@/types/chat";
import { DEFAULT_QUICK_PROMPTS } from "@/lib/chat/knowledge-base";
import { ChatMessage } from "./chat-message";
import { siteConfig } from "@/lib/site-config";

interface ChatDialogProps {
  isOpen: boolean;
  onClose: () => void;
  messages: ChatMessageType[];
  isLoading: boolean;
  onSendMessage: (text: string) => void;
  onResetChat: () => void;
}

export function ChatDialog({
  isOpen,
  onClose,
  messages,
  isLoading,
  onSendMessage,
  onResetChat,
}: ChatDialogProps) {
  const [input, setInput] = React.useState("");
  const messagesEndRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      // Auto-focus input on open (desktop)
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [isOpen, messages, isLoading]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;
    onSendMessage(trimmed);
    setInput("");
  };

  const handlePromptClick = (prompt: QuickPrompt) => {
    if (isLoading) return;
    onSendMessage(prompt.query);
  };

  const handleActionClick = (action: SuggestedAction) => {
    if (action.payload) {
      onSendMessage(action.payload);
    }
  };

  if (!isOpen) return null;

  const isInitialState = messages.length <= 1;

  return (
    <div
      role="dialog"
      aria-label="Agnivridhi AI Assistant"
      className="fixed bottom-20 right-4 sm:right-6 z-50 w-[92vw] sm:w-[410px] h-[580px] max-h-[82vh] bg-white rounded-2xl shadow-2xl border border-slate-200/90 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-250 font-sans"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-[#164E63] text-white px-4 py-3.5 flex items-center justify-between shadow-md shrink-0">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-9 h-9 rounded-full bg-[#0B1528] border border-slate-700 flex items-center justify-center p-1.5 text-white shadow-inner">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo1.png"
                alt="Agnivridhi Logo"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Live pulsing online dot */}
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-slate-900 rounded-full animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="font-semibold text-sm tracking-tight text-white">
                Agnivridhi AI Assistant
              </h3>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-medium">
                Gemini
              </span>
            </div>
            <p className="text-xs text-slate-300 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
              Online • Instant MSME Guidance
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          {/* Reset button */}
          <button
            type="button"
            onClick={onResetChat}
            aria-label="Restart chat"
            title="Restart conversation"
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close chat"
            title="Close"
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-slate-50/60 scroll-smooth">
        {messages.map((msg) => (
          <ChatMessage
            key={msg.id}
            message={msg}
            onActionClick={handleActionClick}
          />
        ))}

        {/* Pre-recorded Questions section in initial state */}
        {isInitialState && (
          <div className="pt-2 animate-in fade-in duration-300">
            <div className="flex items-center gap-1.5 mb-2.5 px-1">
              <Sparkles className="w-3.5 h-3.5 text-[#0891B2]" />
              <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Frequently Asked Questions
              </span>
            </div>
            <div className="space-y-1.5">
              {DEFAULT_QUICK_PROMPTS.map((prompt) => (
                <button
                  key={prompt.id}
                  type="button"
                  onClick={() => handlePromptClick(prompt)}
                  disabled={isLoading}
                  className="w-full text-left px-3 py-2 rounded-xl bg-white hover:bg-cyan-50/60 text-slate-700 hover:text-[#0891B2] border border-slate-200/80 hover:border-cyan-300/80 text-xs font-medium transition-all flex items-center justify-between group shadow-xs active:scale-[0.99]"
                >
                  <span className="line-clamp-1">{prompt.label}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0891B2] shrink-0 ml-2 group-hover:translate-x-0.5 transition-transform" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Typing indicator */}
        {isLoading && (
          <div className="flex items-center gap-2 text-slate-500 text-xs pl-9 animate-in fade-in duration-200">
            <div className="bg-white border border-slate-200 rounded-2xl px-3 py-2 flex items-center gap-1.5 shadow-xs">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0891B2] animate-bounce [animation-delay:-0.3s]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#0891B2] animate-bounce [animation-delay:-0.15s]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#0891B2] animate-bounce" />
              <span className="ml-1 text-[11px] text-slate-500 font-medium">
                Reviewing advisory data...
              </span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Quick Prompts Drawer (Compact view after chat has started) */}
      {!isInitialState && (
        <div className="px-3 py-1.5 bg-slate-100/80 border-t border-slate-200/60 flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0">
          <span className="text-[10px] text-slate-400 uppercase font-semibold shrink-0 pl-1">
            Quick:
          </span>
          {DEFAULT_QUICK_PROMPTS.slice(0, 3).map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => handlePromptClick(p)}
              disabled={isLoading}
              className="text-[11px] shrink-0 whitespace-nowrap px-2.5 py-1 rounded-full bg-white text-slate-700 hover:text-[#0891B2] border border-slate-200 hover:border-cyan-300 transition-colors shadow-2xs"
            >
              {p.label}
            </button>
          ))}
        </div>
      )}

      {/* Input Form */}
      <form
        onSubmit={handleSubmit}
        className="p-3 bg-white border-t border-slate-200 shrink-0"
      >
        <div className="relative flex items-center">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about loans, eligibility, compliance..."
            disabled={isLoading}
            maxLength={350}
            className="w-full pr-11 pl-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0891B2] focus:border-transparent text-slate-800 placeholder:text-slate-400 transition-all disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            aria-label="Send message"
            className="absolute right-1.5 p-2 rounded-lg bg-[#0891B2] hover:bg-[#0e7490] text-white disabled:opacity-40 disabled:hover:bg-[#0891B2] transition-colors shadow-xs"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Footer info & Direct Hotline */}
        <div className="mt-2 flex items-center justify-between text-[10.5px] text-slate-400 px-1">
          <span>Official Agnivridhi Virtual Desk</span>
          {siteConfig.contact.phone && (
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="inline-flex items-center gap-1 text-slate-600 hover:text-[#0891B2] font-medium transition-colors"
            >
              <PhoneCall className="w-2.5 h-2.5 text-emerald-600" />
              Direct Call: {siteConfig.contact.phone}
            </a>
          )}
        </div>
      </form>
    </div>
  );
}
