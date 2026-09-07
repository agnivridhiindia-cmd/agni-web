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
      className="border-b border-purple-100 pb-4 mb-8 sm:mb-12"
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
                "relative inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer select-none",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2",
                isActive
                  ? "bg-purple-50 text-[#0F0A1A] border border-[#581C87]/60 shadow-xs font-semibold"
                  : "bg-white text-[#A8A29E] border border-purple-100 hover:bg-purple-50 hover:text-[#0F0A1A] hover:border-purple-200"
              )}
            >
              <span>{cat.label}</span>
              <span
                className={cn(
                  "px-1.5 py-0.5 rounded text-[11px] font-mono leading-none font-semibold",
                  isActive
                    ? "bg-[#581C87]/20 text-[#581C87]"
                    : "bg-purple-50 text-[#64748B]"
                )}
              >
                {cat.count}
              </span>

              {/* Active gold underline indicator */}
              {isActive && (
                <span
                  aria-hidden="true"
                  className="absolute -bottom-4 inset-x-2 h-0.5 bg-[#581C87] rounded-full"
                />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
