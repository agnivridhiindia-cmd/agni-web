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
    <nav
      aria-label="Filter articles by topic"
      className="border-b border-[#A6CCEA]/80 pb-4 mb-10 sm:mb-12"
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
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2",
                isActive
                  ? "bg-amber-500 text-slate-950 border border-amber-400 shadow-[0_2px_12px_rgba(245,158,11,0.35)] font-bold backdrop-blur-md"
                  : "bg-white/80 text-slate-700 border border-[#A6CCEA] hover:bg-white hover:text-slate-950 hover:border-amber-500/40 backdrop-blur-md shadow-2xs hover:-translate-y-0.5"
              )}
            >
              <span>{cat.label}</span>
              <span
                className={cn(
                  "px-1.5 py-0.5 rounded text-[11px] font-mono leading-none font-semibold",
                  isActive
                    ? "bg-black/15 text-slate-950 border border-black/10"
                    : "bg-slate-100 text-slate-600 border border-slate-200"
                )}
              >
                {cat.count}
              </span>

              {/* Active gold underline indicator */}
              {isActive && (
                <span
                  aria-hidden="true"
                  className="absolute -bottom-4 inset-x-2 h-0.5 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"
                />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
