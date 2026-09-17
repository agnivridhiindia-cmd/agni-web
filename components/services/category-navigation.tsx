"use client";

import * as React from "react";
import { motion } from "framer-motion";
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

const categoryDockLabels: Record<string, { shortName: string; suffix: string }> = {
  funding: {
    shortName: "Government Debt",
    suffix: "Programs",
  },
  compliance: {
    shortName: "Compliance",
    suffix: "Accreditations",
  },
  digital: {
    shortName: "Digital Growth",
    suffix: "Solutions",
  },
  it: {
    shortName: "Custom Software",
    suffix: "Systems",
  },
};

interface CategoryNavigationProps {
  categories: readonly ServiceCategoryMeta[];
  totalServicesCount?: number;
  categoryCounts?: Record<string, number>;
}

export function CategoryNavigation({
  categories,
  totalServicesCount = 16,
  categoryCounts = {
    funding: 4,
    compliance: 4,
    digital: 3,
    it: 5,
  },
}: CategoryNavigationProps) {
  const [activeCategory, setActiveCategory] = React.useState<string>("funding");

  // Scroll-spy: observe category sections when scrolling
  React.useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);
      if (visibleEntries.length > 0) {
        // Sort by proximity to viewport top offset (100px)
        visibleEntries.sort(
          (a, b) =>
            Math.abs(a.boundingClientRect.top - 100) -
            Math.abs(b.boundingClientRect.top - 100)
        );
        setActiveCategory(visibleEntries[0].target.id);
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: "-80px 0px -50% 0px",
      threshold: [0.05, 0.2, 0.5],
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
      aria-label="Service Practices Navigation Dock"
      className="sticky top-0 z-30 bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-[0_4px_20px_rgba(15,23,42,0.06)] transition-all py-2.5 sm:py-3"
    >
      <Container width="wide">
        <div className="flex items-center justify-between gap-4">
          {/* Linear-Style Segmented Dock with Frosted Glassmorphic Styling */}
          <div className="grid w-full grid-cols-2 items-center gap-1.5 rounded-2xl bg-slate-100/80 p-1.5 border border-slate-200 shadow-inner [transform:translateZ(0)] lg:inline-flex lg:w-auto lg:gap-1">
            {categories.map((cat, idx) => {
              const isActive = activeCategory === cat.id;
              const Icon = categoryIconMap[cat.id] || Landmark;
              const labelInfo = categoryDockLabels[cat.id] || {
                shortName: cat.name,
                suffix: "Programs",
              };
              const count = categoryCounts[cat.id] ?? 4;
              const counterLabel = `${count} ${labelInfo.suffix}`;

              return (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  onClick={(e) => scrollToCategory(cat.id, e)}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "group relative inline-flex min-w-0 items-center justify-center gap-2 rounded-xl px-2.5 py-2 text-center text-xs sm:px-4 sm:text-sm font-medium transition-colors select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-1 focus-visible:ring-offset-white lg:whitespace-nowrap"
                  )}
                >
                  {/* Framer Motion Gliding Pill Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-xl bg-amber-500 shadow-[0_2px_12px_rgba(245,158,11,0.35)] border border-amber-400 [transform:translateZ(0)]"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}

                  {/* Content Container (Layered above animated pill) */}
                  <span className="relative z-10 flex items-center gap-2">
                    {/* Index Number */}
                    <span
                      className={cn(
                        "font-mono text-[11px] font-bold transition-colors",
                        isActive ? "text-slate-950" : "text-slate-500"
                      )}
                    >
                      0{idx + 1}
                    </span>

                    {/* Category Icon */}
                    <Icon
                      className={cn(
                        "w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 transition-colors",
                        isActive
                          ? "text-slate-950"
                          : "text-slate-600 group-hover:text-slate-900"
                      )}
                      aria-hidden="true"
                    />

                    {/* Desk Name */}
                    <span
                      className={cn(
                        "transition-colors",
                        isActive
                          ? "text-slate-950 font-bold tracking-tight"
                          : "text-slate-700 group-hover:text-slate-950 font-medium"
                      )}
                    >
                      {labelInfo.shortName}
                    </span>

                    {/* Micro-Counter Badge */}
                    <span
                      className={cn(
                        "font-mono text-[10px] tracking-tight px-1.5 py-0.5 rounded transition-colors hidden md:inline-block font-semibold",
                        isActive
                          ? "bg-black/15 text-slate-950 border border-black/10"
                          : "bg-white text-slate-600 group-hover:text-slate-800 border border-slate-200/80 shadow-2xs"
                      )}
                    >
                      [{counterLabel}]
                    </span>
                  </span>
                </a>
              );
            })}
          </div>

          {/* Right Institutional Scope Badge */}
          <div className="hidden xl:flex items-center gap-2 text-xs font-mono text-slate-700 shrink-0 font-medium">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shrink-0" />
            <span className="text-slate-800 whitespace-nowrap">
              {categories.length} Desks &bull; {totalServicesCount} Programs
            </span>
          </div>
        </div>
      </Container>
    </nav>
  );
}
