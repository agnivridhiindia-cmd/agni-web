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
      className="border-b border-[#232727] pb-4 mb-8 sm:mb-12"
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
                  ? "bg-[#181A1A] text-[#F3EFE7] border border-[#C79A4A]/60 shadow-xs font-semibold"
                  : "bg-[#111313] text-[#A8A29E] border border-[#232727] hover:bg-[#181A1A] hover:text-[#F3EFE7] hover:border-[#333737]"
              )}
            >
              <span>{cat.label}</span>
              <span
                className={cn(
                  "px-1.5 py-0.5 rounded text-[11px] font-mono leading-none font-semibold",
                  isActive
                    ? "bg-[#C79A4A]/20 text-[#C79A4A]"
                    : "bg-[#181A1A] text-[#8E8B82]"
                )}
              >
                {cat.count}
              </span>

              {/* Active gold underline indicator */}
              {isActive && (
                <span
                  aria-hidden="true"
                  className="absolute -bottom-4 inset-x-2 h-0.5 bg-[#C79A4A] rounded-full"
                />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
