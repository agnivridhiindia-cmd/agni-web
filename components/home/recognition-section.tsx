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

  React.useEffect(() => {
    if (prefersReduced || isPaused || verifiedItems.length < 2) return;
    const timer = window.setInterval(() => {
      showCard(activeIndex + 1);
    }, 5000);
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
      className="relative bg-nocturnal-jewel text-white py-20 sm:py-26 lg:py-32 border-b border-slate-800/80 overflow-hidden"
    >
      {/* Ambient background decoration with royal purple, gold, and cyan spotlights */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
      >
        <div className="absolute top-1/3 -right-24 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.15)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 -left-24 h-[540px] w-[540px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.12)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[360px] bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.08)_0%,transparent_70%)] blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-dot-matrix-dark opacity-25 [mask-image:radial-gradient(ellipse_85%_75%_at_50%_50%,#000_65%,transparent_100%)]" />
        {/* Subtle corner crosshairs */}
        <div className="absolute top-8 left-8 font-mono text-xs text-amber-400/30 select-none">+</div>
        <div className="absolute top-8 right-8 font-mono text-xs text-cyan-400/30 select-none">+</div>
      </div>

      <Container width="wide" className="relative z-10 space-y-10 sm:space-y-12">
        {/* Header Row: Title on Left, Carousel Controls on Right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <FadeIn direction="up" distance={16} delay={0.04} className="max-w-2xl space-y-3.5">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-950/80 backdrop-blur-md border border-amber-500/40 text-amber-300 text-xs font-mono tracking-widest uppercase shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>AWARDS &amp; ACHIEVEMENTS &bull; ACCREDITATIONS</span>
            </div>

            <h2
              id="recognition-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-[-0.03em] text-white !leading-[1.14]"
            >
              Recognized for Catalyzing Enterprise Growth
            </h2>

            <p className="font-sans text-sm sm:text-base text-slate-300 leading-[1.7]">
              External citations, industry conclave commendations, and sector
              publications honoring our institutional advisory rigor across sovereign
              guarantees, statutory certifications, and modern enterprise governance.
            </p>
          </FadeIn>

          {/* Apple Liquid Glass Carousel Arrows */}
          <FadeIn direction="up" distance={16} delay={0.08} className="shrink-0 flex items-center gap-3">
            <button
              type="button"
              onClick={() => showCard(activeIndex - 1)}
              className="w-12 h-12 rounded-full border border-white/20 bg-white/[0.08] hover:bg-white/[0.18] backdrop-blur-2xl text-white hover:text-amber-300 hover:border-amber-400/60 disabled:opacity-25 flex items-center justify-center transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_10px_25px_rgba(0,0,0,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 cursor-pointer hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.95] [transform:translateZ(0)]"
              aria-label="Scroll citations left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => showCard(activeIndex + 1)}
              className="w-12 h-12 rounded-full border border-white/20 bg-white/[0.08] hover:bg-white/[0.18] backdrop-blur-2xl text-white hover:text-amber-300 hover:border-amber-400/60 disabled:opacity-25 flex items-center justify-center transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_10px_25px_rgba(0,0,0,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 cursor-pointer hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.95] [transform:translateZ(0)]"
              aria-label="Scroll citations right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </FadeIn>
        </div>

        {/* ============================================================
            EDITORIAL HORIZONTAL CARD DECK (Scroll & Drag Responsive Carousel)
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
          className="flex max-w-5xl items-stretch justify-center gap-4 overflow-hidden pb-4 pt-2 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-auto lg:px-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-4"
        >
          {visibleItems.map(({ item, offset }) => {
            const meta = getRecognitionMeta(item.type);
            const Icon = meta.icon;

            return (
              <div
                key={`${item.id}-${offset}`}
                className={`w-full max-w-[360px] shrink-0 h-full ${offset !== 0 ? "hidden lg:block lg:opacity-60 lg:scale-[0.94]" : ""}`}
              >
                <SpotlightCard
                  glowVariant="teal"
                  className="h-[360px] sm:h-[400px] p-0 bg-transparent border border-slate-700/60 hover:border-sky-400/60 transition-all duration-300 shadow-[0_12px_32px_rgba(0,0,0,0.6)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.8),0_0_20px_rgba(14,165,233,0.2)] [transform:translateZ(0)]"
                  innerClassName="!p-0 justify-end bg-gradient-to-b from-[#111D3A]/90 via-[#0D162D]/95 to-[#0B1329]/98 text-white rounded-3xl overflow-hidden border border-slate-700/50"
                >
                  {item.logoImage ? (
                    <Image
                      src={item.logoImage}
                      alt={`${item.publicationOrOrg} recognition`}
                      fill
                      sizes="(max-width: 640px) calc(100vw - 2rem), 360px"
                      className="object-cover transition-transform duration-700 group-hover/spotlight:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#132042] via-[#0E1833] to-[#0B1329]">
                      <Icon className="h-16 w-16 text-amber-400" aria-hidden="true" />
                    </div>
                  )}

                  <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-[#0B1329] via-[#0B1329]/90 to-transparent px-5 pb-5 pt-28 sm:px-6 sm:pb-6">
                    <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-amber-400 font-semibold">
                      {item.publicationOrOrg} &bull; {item.year}
                    </span>
                    <h3 className="font-heading text-xl font-semibold leading-snug text-white sm:text-2xl line-clamp-2">
                      {item.title}
                    </h3>

                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs tracking-wider text-sky-400 underline decoration-sky-400/50 underline-offset-4 transition-colors hover:text-sky-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                        aria-label={`Read coverage: ${item.title} (opens in a new tab)`}
                      >
                        <span>Read Coverage</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </SpotlightCard>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-2" aria-label="Choose recognition card">
          {verifiedItems.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => showCard(verifiedItems.length + index)}
              aria-label={`Show ${item.publicationOrOrg} recognition`}
              aria-current={activeIndex === index ? "true" : undefined}
              className={`h-2 rounded-full transition-all cursor-pointer ${activeIndex === index ? "w-8 bg-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.6)]" : "w-2 bg-slate-700 hover:bg-slate-500"}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
