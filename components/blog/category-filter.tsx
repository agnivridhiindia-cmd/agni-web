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
    <div className="border-b border-cyan-100 pb-4 mb-10 sm:mb-12">
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
                "relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all shrink-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0891B2] cursor-pointer [transform:translateZ(0)]",
                isActive
                  ? "bg-white/90 text-[#0891B2] border border-[#0891B2]/60 font-semibold backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_2px_8px_rgba(8,145,178,0.12)]"
                  : "bg-white/70 text-[#475569] hover:text-[#0F0A1A] hover:bg-white/95 border border-cyan-100/90 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_2px_6px_rgba(0,0,0,0.02)] hover:-translate-y-0.5"
              )}
            >
              <span>{cat.label}</span>
              <span
                className={cn(
                  "px-1.5 py-0.2 rounded-full text-[11px] font-mono leading-none",
                  isActive
                    ? "bg-[#0891B2]/20 text-[#0891B2] font-bold"
                    : "bg-cyan-50 text-[#64748B]"
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
