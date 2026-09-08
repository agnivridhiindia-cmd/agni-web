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
      className="border-b border-cyan-100 pb-4 mb-8 sm:mb-12"
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
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0891B2] focus-visible:ring-offset-2",
                isActive
                  ? "bg-white/90 text-[#0891B2] border border-[#0891B2]/60 shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_2px_8px_rgba(8,145,178,0.12)] font-semibold backdrop-blur-md"
                  : "bg-white/70 text-[#475569] border border-cyan-100 hover:bg-white/95 hover:text-[#0F0A1A] hover:border-cyan-200 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_2px_6px_rgba(0,0,0,0.02)] hover:-translate-y-0.5"
              )}
            >
              <span>{cat.label}</span>
              <span
                className={cn(
                  "px-1.5 py-0.5 rounded text-[11px] font-mono leading-none font-semibold",
                  isActive
                    ? "bg-[#0891B2]/20 text-[#0891B2]"
                    : "bg-cyan-50 text-[#64748B]"
                )}
              >
                {cat.count}
              </span>

              {/* Active gold underline indicator */}
              {isActive && (
                <span
                  aria-hidden="true"
                  className="absolute -bottom-4 inset-x-2 h-0.5 bg-[#0891B2] rounded-full"
                />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
