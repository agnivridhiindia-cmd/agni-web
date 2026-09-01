"use client";

import * as React from "react";
import { Landmark, ShieldCheck, Globe, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/shared/container";
import type { ServiceCategoryMeta } from "@/types/service";

const categoryIconMap: Record<string, React.ElementType> = {
  funding: Landmark,
  compliance: ShieldCheck,
  digital: Globe,
  it: Cpu,
};

const categoryShortNames: Record<string, string> = {
  funding: "Govt & Debt Funding",
  compliance: "Compliance & ISO",
  digital: "Digital Growth",
  it: "Custom Software & IT",
};

interface CategoryNavigationProps {
  categories: readonly ServiceCategoryMeta[];
  totalServicesCount?: number;
}

export function CategoryNavigation({
  categories,
  totalServicesCount = 12,
}: CategoryNavigationProps) {
  const [activeCategory, setActiveCategory] = React.useState<string>("funding");

  // Scroll-spy: observe category sections when scrolling
  React.useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);
      if (visibleEntries.length > 0) {
        // Sort by proximity to header offset (140px)
        visibleEntries.sort(
          (a, b) =>
            Math.abs(a.boundingClientRect.top - 140) - Math.abs(b.boundingClientRect.top - 140)
        );
        setActiveCategory(visibleEntries[0].target.id);
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: "-120px 0px -40% 0px",
      threshold: [0.1, 0.25, 0.5],
    });

    categories.forEach((cat) => {
      const el = document.getElementById(cat.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [categories]);

  const scrollToCategory = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveCategory(id);
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <nav
      aria-label="Service Practices Navigation"
      className="sticky top-[68px] sm:top-[76px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs transition-colors"
    >
      <Container width="wide">
        <div className="flex items-center justify-between gap-4 py-2.5 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-500 hidden xl:inline-block pr-2">
              Practice Desks:
            </span>

            {categories.map((cat, idx) => {
              const isActive = activeCategory === cat.id;
              const Icon = categoryIconMap[cat.id] || Landmark;
              const shortName = categoryShortNames[cat.id] || cat.name;

              return (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  onClick={(e) => scrollToCategory(cat.id, e)}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "group inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all select-none whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-1",
                    isActive
                      ? "bg-teal-700 text-white font-semibold shadow-xs"
                      : "text-slate-600 hover:text-slate-950 hover:bg-slate-100/90"
                  )}
                >
                  <span
                    className={cn(
                      "font-mono text-[11px]",
                      isActive ? "text-teal-200" : "text-slate-500"
                    )}
                  >
                    0{idx + 1}
                  </span>
                  <Icon
                    className={cn(
                      "w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0",
                      isActive ? "text-teal-200" : "text-slate-500 group-hover:text-slate-700"
                    )}
                    aria-hidden="true"
                  />
                  <span>{shortName}</span>
                </a>
              );
            })}
          </div>

          <div className="hidden xl:flex items-center text-xs font-mono text-slate-500 shrink-0">
            <span>
              {categories.length} Practice Desks &bull; {totalServicesCount} Specialized Programs
            </span>
          </div>
        </div>
      </Container>
    </nav>
  );
}
