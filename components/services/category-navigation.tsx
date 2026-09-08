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
      className="sticky top-[68px] sm:top-[76px] z-30 bg-white/90 backdrop-blur-xl border-b border-cyan-100 shadow-2xs transition-colors py-3"
    >
      <Container width="wide">
        <div className="flex items-center justify-between gap-4 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {/* Linear-Style Segmented Dock with Frosted Glassmorphic Styling */}
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-white/80 backdrop-blur-md border border-cyan-200/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_4px_16px_rgba(8,145,178,0.06)] [transform:translateZ(0)] shrink-0">
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
                    "group relative inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors select-none whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0891B2] focus-visible:ring-offset-1 focus-visible:ring-offset-white"
                  )}
                >
                  {/* Framer Motion Gliding Pill Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-xl bg-white/95 backdrop-blur-sm shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_2px_8px_rgba(8,145,178,0.12)] border border-cyan-200/90 [transform:translateZ(0)]"
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
                        isActive ? "text-[#0891B2]" : "text-[#64748B]"
                      )}
                    >
                      0{idx + 1}
                    </span>

                    {/* Category Icon */}
                    <Icon
                      className={cn(
                        "w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 transition-colors",
                        isActive
                          ? "text-[#06B6D4]"
                          : "text-[#64748B] group-hover:text-[#0F0A1A]"
                      )}
                      aria-hidden="true"
                    />

                    {/* Desk Name */}
                    <span
                      className={cn(
                        "transition-colors",
                        isActive
                          ? "text-[#0F0A1A] font-semibold tracking-tight"
                          : "text-[#64748B] group-hover:text-[#0F0A1A]"
                      )}
                    >
                      {config.shortName}
                    </span>

                    {/* Micro-Counter Badge */}
                    <span
                      className={cn(
                        "font-mono text-[10px] tracking-tight px-1.5 py-0.5 rounded transition-colors hidden md:inline-block",
                        isActive
                          ? "bg-white/[0.08] text-[#06B6D4] border border-white/[0.12] font-semibold"
                          : "bg-white/[0.04] text-[#64748B] group-hover:text-[#64748B]"
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
          <div className="hidden xl:flex items-center gap-2 text-xs font-mono text-[#64748B] shrink-0 pr-1">
            <span className="w-2 h-2 rounded-full bg-[#0891B2] animate-pulse" />
            <span>
              {categories.length} Practice Desks &bull; {totalServicesCount} Specialized Programs
            </span>
          </div>
        </div>
      </Container>
    </nav>
  );
}
