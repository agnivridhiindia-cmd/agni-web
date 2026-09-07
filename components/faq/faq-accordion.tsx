"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: readonly FaqItem[];
  defaultOpenIndex?: number | null;
  className?: string;
}

export function FaqAccordion({
  items,
  defaultOpenIndex = null,
  className,
}: FaqAccordionProps) {
  // Pinned item index: locked open only when explicitly clicked
  const [pinnedIndex, setPinnedIndex] = React.useState<number | null>(defaultOpenIndex);
  // Hovered item index: temporarily open on hover, collapses on mouse leave
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  const handleClick = (idx: number) => {
    if (pinnedIndex === idx) {
      // If clicking an already pinned item, close & unpin it
      setPinnedIndex(null);
      setHoveredIndex(null);
    } else {
      // Pin this item permanently until closed or another clicked
      setPinnedIndex(idx);
    }
  };

  const handleMouseEnter = (idx: number) => {
    setHoveredIndex(idx);
  };

  const handleMouseLeave = (idx: number) => {
    // Only clear hover if this item isn't pinned
    setHoveredIndex((prev) => (prev === idx ? null : prev));
  };

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item, idx) => {
        const isPinned = pinnedIndex === idx;
        const isHovered = hoveredIndex === idx;
        const isOpen = isPinned || isHovered;

        return (
          <div
            key={idx}
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={() => handleMouseLeave(idx)}
            onClick={() => handleClick(idx)}
            className={cn(
              "group relative rounded-xl border transition-all duration-300 overflow-hidden cursor-pointer select-none",
              isOpen
                ? "bg-[#141616] border-[#C79A4A]/50 shadow-[0_8px_24px_rgba(0,0,0,0.5)]"
                : "bg-[#111313]/90 border-[#232727] hover:border-[#C79A4A]/30 hover:bg-[#141616]/60"
            )}
            role="button"
            tabIndex={0}
            aria-expanded={isOpen}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleClick(idx);
              }
            }}
          >
            {/* Left Accent indicator when open */}
            <div
              className={cn(
                "absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#DFC286] to-[#C79A4A] transition-all duration-300 origin-top",
                isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
              )}
              aria-hidden="true"
            />

            {/* Question Header */}
            <div className="flex items-center justify-between gap-4 p-4 sm:p-5">
              <span
                className={cn(
                  "font-serif text-base sm:text-lg font-medium transition-colors duration-300 pr-2 leading-snug",
                  isOpen
                    ? "text-[#DFC286]"
                    : "text-[#F3EFE7] group-hover:text-[#C79A4A]"
                )}
              >
                {item.question}
              </span>

              <div className="flex items-center gap-2 shrink-0">
                {isPinned && (
                  <span className="hidden sm:inline-block text-[10px] font-mono uppercase tracking-wider text-[#C79A4A] bg-[#C79A4A]/10 px-2 py-0.5 rounded border border-[#C79A4A]/30">
                    Pinned
                  </span>
                )}
                <motion.div
                  animate={{
                    rotate: isOpen ? 180 : 0,
                    color: isOpen ? "#C79A4A" : "#8E8B82",
                  }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center justify-center w-7 h-7 rounded-full bg-white/[0.04] border border-white/[0.06] group-hover:border-[#C79A4A]/40"
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </div>
            </div>

            {/* Smooth Collapsible Answer with AnimatePresence */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                    transition: {
                      height: {
                        duration: 0.38,
                        ease: [0.16, 1, 0.3, 1],
                      },
                      opacity: {
                        duration: 0.28,
                        delay: 0.08,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    },
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: {
                        duration: 0.28,
                        ease: [0.16, 1, 0.3, 1],
                      },
                      opacity: {
                        duration: 0.18,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    },
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-sm sm:text-base text-[#D1CBC1] font-sans leading-relaxed border-t border-white/[0.06] pt-3">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
