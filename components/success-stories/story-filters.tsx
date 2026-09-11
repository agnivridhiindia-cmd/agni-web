"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface FilterCategory {
  id: string;
  label: string;
  count: number;
}

interface StoryFiltersProps {
  categories: FilterCategory[];
  activeCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export function StoryFilters({
  categories,
  activeCategory,
  onSelectCategory,
}: StoryFiltersProps) {
  return (
    <nav
      aria-label="Filter case studies by practice category"
      className="border-b border-slate-800/80 pb-4 mb-8 sm:mb-12"
    >
      <div className="flex items-center gap-2 overflow-x-auto pb-1 -mb-1 scrollbar-none touch-pan-x">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelectCategory(cat.id)}
              aria-pressed={isActive}
              className={cn(
                "relative inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer select-none [transform:translateZ(0)]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2",
                isActive
                  ? "bg-amber-950/80 text-amber-300 border border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.2)] font-semibold backdrop-blur-md"
                  : "bg-slate-900/70 text-slate-300 border border-slate-800 hover:bg-slate-800/90 hover:text-white hover:border-amber-500/30 backdrop-blur-md hover:-translate-y-0.5"
              )}
            >
              <span>{cat.label}</span>
              <span
                className={cn(
                  "px-1.5 py-0.5 rounded text-[11px] font-mono leading-none font-semibold",
                  isActive
                    ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                    : "bg-slate-800 text-slate-400"
                )}
              >
                {cat.count}
              </span>

              {/* Active gold underline indicator */}
              {isActive && (
                <span
                  aria-hidden="true"
                  className="absolute -bottom-4 inset-x-2 h-0.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full"
                />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
