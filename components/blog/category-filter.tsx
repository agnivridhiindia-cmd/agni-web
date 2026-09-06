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
    <div className="border-b border-[#232727] pb-4 mb-10 sm:mb-12">
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
                  ? "bg-[#181A1A] text-[#F3EFE7] border border-[#C79A4A]/60 font-semibold shadow-xs"
                  : "bg-[#111313] text-[#A8A29E] hover:text-[#F3EFE7] hover:bg-[#181A1A] border border-[#232727]"
              )}
            >
              <span>{cat.label}</span>
              <span
                className={cn(
                  "px-1.5 py-0.2 rounded-full text-[11px] font-mono leading-none",
                  isActive
                    ? "bg-[#C79A4A]/20 text-[#C79A4A] font-bold"
                    : "bg-[#181A1A] text-[#8E8B82]"
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
