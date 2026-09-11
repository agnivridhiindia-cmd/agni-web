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

const categoryDockConfig: Record<
  string,
  { shortName: string; counterLabel: string }
> = {
  funding: {
    shortName: "Government Debt",
    counterLabel: "4 Programs",
  },
  compliance: {
    shortName: "Compliance",
    counterLabel: "4 Accreditations",
  },
  digital: {
    shortName: "Digital Growth",
    counterLabel: "2 Solutions",
  },
  it: {
    shortName: "Custom Software",
    counterLabel: "2 Systems",
  },
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
            Math.abs(a.boundingClientRect.top - 140) -
            Math.abs(b.boundingClientRect.top - 140)
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
      aria-label="Service Practices Navigation Dock"
      className="sticky top-[68px] sm:top-[76px] z-30 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/80 shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-colors py-3"
    >
      <Container width="wide">
        <div className="flex items-center justify-between gap-4 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {/* Linear-Style Segmented Dock with Frosted Glassmorphic Styling */}
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-800 shadow-[0_4px_16px_rgba(0,0,0,0.6)] [transform:translateZ(0)] shrink-0">
            {categories.map((cat, idx) => {
              const isActive = activeCategory === cat.id;
              const Icon = categoryIconMap[cat.id] || Landmark;
              const config = categoryDockConfig[cat.id] || {
                shortName: cat.name,
                counterLabel: "Active",
              };

              return (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  onClick={(e) => scrollToCategory(cat.id, e)}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "group relative inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors select-none whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-1 focus-visible:ring-offset-slate-950"
                  )}
                >
                  {/* Framer Motion Gliding Pill Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-xl bg-amber-950/80 backdrop-blur-sm shadow-[0_0_15px_rgba(245,158,11,0.2)] border border-amber-500/50 [transform:translateZ(0)]"
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
                        isActive ? "text-amber-400" : "text-slate-400"
                      )}
                    >
                      0{idx + 1}
                    </span>

                    {/* Category Icon */}
                    <Icon
                      className={cn(
                        "w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 transition-colors",
                        isActive
                          ? "text-amber-400"
                          : "text-slate-400 group-hover:text-slate-200"
                      )}
                      aria-hidden="true"
                    />

                    {/* Desk Name */}
                    <span
                      className={cn(
                        "transition-colors",
                        isActive
                          ? "text-amber-300 font-semibold tracking-tight"
                          : "text-slate-300 group-hover:text-white"
                      )}
                    >
                      {config.shortName}
                    </span>

                    {/* Micro-Counter Badge */}
                    <span
                      className={cn(
                        "font-mono text-[10px] tracking-tight px-1.5 py-0.5 rounded transition-colors hidden md:inline-block",
                        isActive
                          ? "bg-amber-900/60 text-amber-300 border border-amber-500/40 font-semibold"
                          : "bg-slate-800 text-slate-400 group-hover:text-slate-300"
                      )}
                    >
                      [{config.counterLabel}]
                    </span>
                  </span>
                </a>
              );
            })}
          </div>

          {/* Right Institutional Scope Badge */}
          <div className="hidden xl:flex items-center gap-2 text-xs font-mono text-slate-400 shrink-0 pr-1">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-slate-300">
              {categories.length} Practice Desks &bull; {totalServicesCount} Specialized Programs
            </span>
          </div>
        </div>
      </Container>
    </nav>
  );
}
