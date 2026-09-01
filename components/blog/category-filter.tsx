import * as React from "react";
import { cn } from "@/lib/utils";

export interface BlogFilterCategory {
  readonly id: string;
  readonly label: string;
  readonly count: number;
}

interface CategoryFilterProps {
  categories: readonly BlogFilterCategory[];
  activeCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export function CategoryFilter({
  categories,
  activeCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <div className="border-b border-slate-200/90 pb-4 mb-10 sm:mb-12">
      <nav
        aria-label="Filter articles by topic"
        className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 -my-1 touch-pan-x"
      >
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelectCategory(cat.id)}
              aria-pressed={isActive}
              className={cn(
                "relative inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all shrink-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-600",
                isActive
                  ? "bg-slate-900 text-white font-semibold shadow-xs"
                  : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 border border-slate-200/80"
              )}
            >
              <span>{cat.label}</span>
              <span
                className={cn(
                  "px-1.5 py-0.2 rounded-full text-[11px] font-mono leading-none",
                  isActive
                    ? "bg-gold-500/30 text-gold-300 font-bold"
                    : "bg-slate-100 text-slate-500"
                )}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
