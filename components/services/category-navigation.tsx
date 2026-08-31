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
  compliance: "Compliance & Certifications",
  digital: "Digital Growth",
  it: "Custom Software & IT",
};

interface CategoryNavigationProps {
  categories: readonly ServiceCategoryMeta[];
}

export function CategoryNavigation({ categories }: CategoryNavigationProps) {
  const [activeCategory, setActiveCategory] = React.useState<string>("funding");

  // Scroll-spy: observe category sections when scrolling
  React.useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      // Find the entry that has the highest intersection ratio or is currently intersecting
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);
      if (visibleEntries.length > 0) {
        // Sort by how close the top of bounding rect is to top of viewport
        visibleEntries.sort(
          (a, b) => Math.abs(a.boundingClientRect.top - 120) - Math.abs(b.boundingClientRect.top - 120)
        );
        setActiveCategory(visibleEntries[0].target.id);
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: "-100px 0px -50% 0px",
      threshold: [0.1, 0.3, 0.6],
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
      aria-label="Services Category Navigation"
      className="sticky top-[68px] sm:top-[76px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-colors"
    >
      <Container width="wide">
        <div className="flex items-center justify-between gap-4 py-2.5 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-500 hidden md:inline-block pr-2">
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
                  className={cn(
                    "group inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all select-none whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600",
                    isActive
                      ? "bg-teal-700 text-white font-semibold shadow-xs"
                      : "text-slate-600 hover:text-slate-950 hover:bg-slate-100/90"
                  )}
                >
                  <span className={cn("font-mono text-[11px]", isActive ? "text-teal-200" : "text-slate-600")}>
                    0{idx + 1}
                  </span>
                  <Icon
                    className={cn(
                      "w-3.5 h-3.5 sm:w-4 sm:h-4",
                      isActive ? "text-teal-200" : "text-slate-600 group-hover:text-slate-700"
                    )}
                  />
                  <span>{shortName}</span>
                </a>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center text-xs font-mono text-slate-600">
            <span>4 Practices &bull; 12 Specialized Programs</span>
          </div>
        </div>
      </Container>
    </nav>
  );
}
