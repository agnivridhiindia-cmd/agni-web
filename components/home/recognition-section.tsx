"use client";

import * as React from "react";
import Image from "next/image";
import {
  Award,
  Newspaper,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import type { RecognitionItem, RecognitionType } from "@/lib/site-config";
import { Container } from "@/components/shared/container";
import { Eyebrow } from "@/components/ui/badge";
import { Badge } from "@/components/ui/badge";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import {
  FadeIn,
  useReducedMotionPreference,
} from "@/components/shared/motion";
import { cn } from "@/lib/utils";

function getRecognitionMeta(type: RecognitionType): {
  icon: LucideIcon;
  badgeVariant: "accent" | "primary" | "outline" | "default";
  label: string;
  iconBg: string;
  iconColor: string;
} {
  switch (type) {
    case "award":
      return {
        icon: Award,
        badgeVariant: "accent",
        label: "Industry Award",
        iconBg: "bg-cyan-100/70 border-cyan-200",
        iconColor: "text-[#0891B2]",
      };
    case "press":
    case "media":
      return {
        icon: Newspaper,
        badgeVariant: "primary",
        label: "Press Citation",
        iconBg: "bg-cyan-50 border-cyan-200/60",
        iconColor: "text-[#0891B2]",
      };
    case "magazine":
      return {
        icon: Bookmark,
        badgeVariant: "default",
        label: "Sector Analysis",
        iconBg: "bg-cyan-50/50 border-cyan-200/40",
        iconColor: "text-[#475569]",
      };
    case "recognition":
    default:
      return {
        icon: ShieldCheck,
        badgeVariant: "outline",
        label: "Accreditation",
        iconBg: "bg-cyan-100/70 border-cyan-200",
        iconColor: "text-[#0891B2]",
      };
  }
}

export function RecognitionSection() {
  const prefersReduced = useReducedMotionPreference();
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  // Gated: strictly filter out unverified items
  const verifiedItems = React.useMemo(() => {
    return (siteConfig.recognition ?? []).filter(
      (item): item is RecognitionItem => item.verified !== false
    );
  }, []);

  const showCard = React.useCallback((index: number) => {
    const itemCount = verifiedItems.length;
    if (itemCount === 0) return;
    const nextIndex = ((index % itemCount) + itemCount) % itemCount;
    setActiveIndex(nextIndex);
  }, [verifiedItems.length]);

  // 3-second auto-rotation interval as requested
  React.useEffect(() => {
    if (prefersReduced || isPaused || verifiedItems.length < 2) return;
    const timer = window.setInterval(() => {
      showCard(activeIndex + 1);
    }, 3000);
    return () => window.clearInterval(timer);
  }, [activeIndex, isPaused, prefersReduced, showCard, verifiedItems.length]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showCard(activeIndex - 1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      showCard(activeIndex + 1);
    }
  };

  if (verifiedItems.length === 0) {
    return null;
  }

  const visibleItems = [-1, 0, 1].map((offset) => ({
    item: verifiedItems[(activeIndex + offset + verifiedItems.length) % verifiedItems.length],
    offset,
  }));

  return (
    <section
      aria-labelledby="recognition-heading"
      className="relative py-14 sm:py-18 lg:py-22 border-b border-[#CBDDEB] overflow-hidden bg-gradient-to-b from-[#EBF3F9] via-[#F2F7FB] to-[#EBF3F9] text-slate-900"
    >
      {/* Precision architectural ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
      >
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-300/80 to-transparent" />
        <div className="absolute inset-0 [background-image:radial-gradient(#94A3B8_1px,transparent_1px)] [background-size:32px_32px] opacity-35 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_40%,#000_50%,transparent_100%)]" />
        <div className="absolute top-1/4 -right-28 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.08)_0%,rgba(14,165,233,0.01)_45%,transparent_70%)]" />
        <div className="absolute bottom-10 -left-28 h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.06)_0%,rgba(245,158,11,0.01)_45%,transparent_70%)]" />
        {/* Subtle corner crosshairs */}
        <div className="absolute top-8 left-8 font-mono text-xs text-slate-400/40 select-none">+</div>
        <div className="absolute top-8 right-8 font-mono text-xs text-slate-400/40 select-none">+</div>
      </div>

      <Container width="wide" className="relative z-10 space-y-10 sm:space-y-12">
        {/* Header Row: Title on Left, Carousel Controls on Right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#CBDDEB] pb-8">
          <FadeIn direction="up" distance={16} delay={0.04} className="max-w-2xl space-y-3.5">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-xs font-mono tracking-widest text-slate-800 shadow-2xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              <span>AWARDS &amp; ACHIEVEMENTS &bull; ACCREDITATIONS</span>
            </div>

            <h2
              id="recognition-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-[-0.03em] text-slate-900 !leading-[1.14]"
            >
              Recognized for{" "}
              <span className="text-amber-600 font-bold font-heading">
                Catalyzing Enterprise Growth.
              </span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-slate-600 leading-[1.7]">
              External citations, industry conclave commendations, and sector
              publications honoring our institutional advisory rigor across sovereign
              guarantees, statutory certifications, and modern enterprise governance.
            </p>
          </FadeIn>

          {/* Carousel Arrows in Clean Light Style */}
          <FadeIn direction="up" distance={16} delay={0.08} className="shrink-0 flex items-center gap-3">
            <button
              type="button"
              onClick={() => showCard(activeIndex - 1)}
              className="w-12 h-12 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 hover:text-amber-600 hover:border-amber-400 disabled:opacity-25 flex items-center justify-center transition-all shadow-[0_4px_12px_rgba(15,23,42,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 cursor-pointer hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.95] [transform:translateZ(0)]"
              aria-label="Scroll citations left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => showCard(activeIndex + 1)}
              className="w-12 h-12 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 hover:text-amber-600 hover:border-amber-400 disabled:opacity-25 flex items-center justify-center transition-all shadow-[0_4px_12px_rgba(15,23,42,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 cursor-pointer hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.95] [transform:translateZ(0)]"
              aria-label="Scroll citations right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </FadeIn>
        </div>

        {/* ============================================================
            3 COMPLETE CARDS - MIDDLE ONE HIGHLIGHTED
            ============================================================ */}
        <div
          onKeyDown={handleKeyDown}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          tabIndex={0}
          role="region"
          aria-label="Awards and accreditations carousel"
          className="w-full max-w-6xl mx-auto px-2 sm:px-4 lg:px-6 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-3xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center">
            {visibleItems.map(({ item, offset }) => {
              const isMiddle = offset === 0;
              const meta = getRecognitionMeta(item.type);
              const Icon = meta.icon;

              return (
                <div
                  key={`${item.id}-${offset}`}
                  onClick={!isMiddle ? () => showCard(activeIndex + offset) : undefined}
                  className={cn(
                    "w-full transition-all duration-500 ease-out",
                    !isMiddle && "hidden md:block"
                  )}
                >
                  <SpotlightCard
                    glowVariant={isMiddle ? "amber" : "teal"}
                    borderBeam={isMiddle}
                    className={cn(
                      "h-[400px] sm:h-[440px] p-0 rounded-3xl transition-all duration-500 ease-out [transform:translateZ(0)] relative",
                      isMiddle
                        ? "bg-slate-950 border-2 border-amber-400 shadow-[0_20px_50px_-10px_rgba(245,158,11,0.35),0_0_30px_rgba(245,158,11,0.2)] ring-4 ring-amber-400/20 scale-100 md:scale-105 z-20"
                        : "bg-slate-950/90 border border-slate-700/60 shadow-[0_12px_32px_rgba(15,23,42,0.15)] hover:border-sky-400/60 scale-[0.95] md:scale-[0.96] opacity-70 hover:opacity-95 z-10 cursor-pointer"
                    )}
                    innerClassName="!p-0 justify-end bg-gradient-to-b from-[#111D3A]/90 via-[#0D162D]/95 to-[#0B1329]/98 text-white rounded-3xl overflow-hidden border border-slate-700/50 relative"
                  >
                    {isMiddle && (
                      <div className="absolute top-4 right-4 z-20 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-[10px] font-mono font-bold tracking-widest uppercase shadow-md animate-pulse">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-950" />
                        <span>FEATURED</span>
                      </div>
                    )}

                    {item.logoImage ? (
                      <Image
                        src={item.logoImage}
                        alt={`${item.publicationOrOrg} recognition`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
                        className="object-cover object-top transition-transform duration-700 group-hover/spotlight:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#132042] via-[#0E1833] to-[#0B1329]">
                        <Icon className="h-16 w-16 text-amber-400" aria-hidden="true" />
                      </div>
                    )}

                    <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-[#0B1329] via-[#0B1329]/95 to-transparent px-5 pb-5 pt-28 sm:px-6 sm:pb-6">
                      {isMiddle ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500/20 border border-amber-400/40 text-amber-300 font-mono text-[10px] uppercase tracking-[0.16em] font-semibold mb-2.5">
                          <span className="w-1 h-1 rounded-full bg-amber-400" />
                          {item.publicationOrOrg} &bull; {item.year}
                        </span>
                      ) : (
                        <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400 font-semibold">
                          {item.publicationOrOrg} &bull; {item.year}
                        </span>
                      )}

                      <h3
                        className={cn(
                          "font-heading font-semibold leading-snug text-white line-clamp-2",
                          isMiddle ? "text-xl sm:text-2xl" : "text-lg sm:text-xl text-slate-200"
                        )}
                      >
                        {item.title}
                      </h3>

                      {item.url && (
                        isMiddle ? (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3.5 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-mono text-xs font-bold tracking-wider uppercase transition-all shadow-[0_0_16px_rgba(245,158,11,0.4)] hover:shadow-[0_0_24px_rgba(245,158,11,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 cursor-pointer"
                            aria-label={`Read coverage: ${item.title} (opens in a new tab)`}
                          >
                            <span>Read Coverage</span>
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                        ) : (
                          <div className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs tracking-wider text-sky-400/80 transition-colors group-hover/spotlight:text-sky-300">
                            <span>Click to view</span>
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </div>
                        )
                      )}
                    </div>
                  </SpotlightCard>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pagination indicators */}
        <div className="flex items-center justify-center gap-2 pt-2" aria-label="Choose recognition card">
          {verifiedItems.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => showCard(index)}
              aria-label={`Show ${item.publicationOrOrg} recognition`}
              aria-current={activeIndex === index ? "true" : undefined}
              className={cn(
                "h-2 rounded-full transition-all cursor-pointer",
                activeIndex === index
                  ? "w-8 bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              )}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
