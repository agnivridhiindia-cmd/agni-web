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
              "group relative cursor-pointer select-none overflow-hidden rounded-2xl border transition-all duration-300",
              isOpen
                ? "border-amber-400/80 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.08)]"
                : "border-white/90 bg-white/70 hover:border-amber-400/50 hover:bg-white/90 shadow-2xs"
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
                "absolute bottom-0 left-0 top-0 w-1 origin-top bg-gradient-to-b from-amber-500 to-amber-600 transition-all duration-300",
                isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
              )}
              aria-hidden="true"
            />

            {/* Question Header */}
            <div className="flex items-center justify-between gap-4 p-4 sm:p-5">
              <span
                className={cn(
                  "pr-2 font-serif text-base leading-snug transition-colors duration-300 sm:text-lg",
                  isOpen
                    ? "font-bold text-amber-900"
                    : "font-semibold text-slate-900 group-hover:text-amber-800"
                )}
              >
                {item.question}
              </span>

              <div className="flex items-center gap-2 shrink-0">
                {isPinned && (
                  <span className="hidden rounded-md border border-amber-300 bg-amber-100 px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-amber-900 sm:inline-block shadow-2xs">
                    Pinned
                  </span>
                )}
                <motion.div
                  animate={{
                    rotate: isOpen ? 180 : 0,
                    color: isOpen ? "#B45309" : "#475569",
                  }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-100 border border-slate-300 group-hover:border-amber-400 shadow-2xs"
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
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-sm sm:text-base text-slate-700 font-sans leading-relaxed border-t border-slate-200/80 pt-3">
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
