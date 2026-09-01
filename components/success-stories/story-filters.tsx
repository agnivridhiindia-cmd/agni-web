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
      className="border-b border-slate-200/90 pb-4 mb-8 sm:mb-12"
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
                  ? "bg-slate-900 text-white shadow-xs font-semibold"
                  : "bg-slate-100/80 text-slate-700 hover:bg-slate-200/80 hover:text-slate-900"
              )}
            >
              <span>{cat.label}</span>
              <span
                className={cn(
                  "px-1.5 py-0.5 rounded text-[11px] font-mono leading-none font-semibold",
                  isActive
                    ? "bg-gold-500/20 text-gold-300"
                    : "bg-slate-200 text-slate-600"
                )}
              >
                {cat.count}
              </span>

              {/* Active gold underline indicator */}
              {isActive && (
                <span
                  aria-hidden="true"
                  className="absolute -bottom-4 inset-x-2 h-0.5 bg-gold-600 rounded-full"
                />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
