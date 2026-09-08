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
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [activeRenderIndex, setActiveRenderIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  // Gated: strictly filter out unverified items
  const verifiedItems = React.useMemo(() => {
    return (siteConfig.recognition ?? []).filter(
      (item): item is RecognitionItem => item.verified !== false
    );
  }, []);

  const renderedItems = React.useMemo(
    () => [...verifiedItems, ...verifiedItems, ...verifiedItems],
    [verifiedItems]
  );

  const checkScroll = React.useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;
    const cards = Array.from(el.children) as HTMLElement[];
    const viewportCenter = el.scrollLeft + el.clientWidth / 2;
    let nearestIndex = cards.reduce((nearest, card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const nearestCenter = cards[nearest].offsetLeft + cards[nearest].offsetWidth / 2;
      return Math.abs(cardCenter - viewportCenter) < Math.abs(nearestCenter - viewportCenter)
        ? index
        : nearest;
    }, 0);

    const itemCount = verifiedItems.length;
    if (itemCount > 0 && (nearestIndex < itemCount || nearestIndex >= itemCount * 2)) {
      const normalizedIndex = (nearestIndex % itemCount) + itemCount;
      const normalizedCard = cards[normalizedIndex];
      if (normalizedCard) {
        const targetLeft = normalizedCard.offsetLeft - (el.clientWidth - normalizedCard.offsetWidth) / 2;
        el.scrollTo({ left: Math.max(0, targetLeft), behavior: "auto" });
        nearestIndex = normalizedIndex;
      }
    }

    setActiveRenderIndex(nearestIndex);
    setActiveIndex(itemCount > 0 ? nearestIndex % itemCount : 0);
  }, [verifiedItems.length]);

  React.useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [checkScroll]);

  const showCard = React.useCallback((index: number, behavior: ScrollBehavior = "smooth") => {
    const el = carouselRef.current;
    const itemCount = verifiedItems.length;
    if (!el || itemCount === 0) return;

    let nextIndex = index;
    if (nextIndex < itemCount) nextIndex += itemCount;
    if (nextIndex >= itemCount * 2) nextIndex = itemCount * 2;

    const card = el.children[nextIndex] as HTMLElement | undefined;
    if (!card) return;
    setActiveRenderIndex(nextIndex);
    setActiveIndex(nextIndex % itemCount);
    const targetLeft = card.offsetLeft - (el.clientWidth - card.offsetWidth) / 2;
    el.scrollTo({
      left: Math.max(0, targetLeft),
      behavior: prefersReduced ? "auto" : behavior,
    });

    if (!prefersReduced && (nextIndex === itemCount * 2 || nextIndex === itemCount - 1)) {
      window.setTimeout(() => {
        const resetIndex = nextIndex === itemCount * 2 ? itemCount : itemCount * 2 - 1;
        const resetCard = el.children[resetIndex] as HTMLElement | undefined;
        if (!resetCard) return;
        const resetLeft = resetCard.offsetLeft - (el.clientWidth - resetCard.offsetWidth) / 2;
        el.scrollTo({ left: Math.max(0, resetLeft), behavior: "auto" });
        setActiveRenderIndex(resetIndex);
      }, 700);
    }
  }, [prefersReduced, verifiedItems.length]);

  React.useEffect(() => {
    if (verifiedItems.length > 0) {
      showCard(verifiedItems.length, "auto");
    }
  }, [showCard, verifiedItems.length]);

  React.useEffect(() => {
    if (prefersReduced || isPaused || verifiedItems.length < 2) return;
    const timer = window.setInterval(() => {
      showCard(activeRenderIndex + 1);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [activeRenderIndex, isPaused, prefersReduced, showCard, verifiedItems.length]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showCard(activeRenderIndex - 1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      showCard(activeRenderIndex + 1);
    }
  };

  if (verifiedItems.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="recognition-heading"
      className="relative bg-gradient-to-b from-[#FAF8FE] via-[#F5F1FB] to-[#FAF8FE] text-[#181226] py-20 sm:py-28 lg:py-36 border-b border-cyan-100/80 overflow-hidden"
    >
      {/* Ambient background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
      >
        <div className="absolute top-1/2 -right-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.06)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 -left-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.04)_0%,transparent_70%)] blur-3xl" />
      </div>

      <Container width="wide" className="relative z-10 space-y-10 sm:space-y-12">
        {/* Header Row: Title on Left, Carousel Controls on Right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <FadeIn direction="up" distance={16} delay={0.04} className="max-w-2xl space-y-3.5">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-cyan-200/90 text-[#0891B2] text-xs font-mono tracking-widest uppercase shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0891B2]" />
              <span>AWARDS &amp; ACHIEVEMENTS &bull; ACCREDITATIONS</span>
            </div>

            <h2
              id="recognition-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-normal tracking-[-0.015em] text-[#181226] !leading-[1.15]"
            >
              Recognized for Catalyzing Enterprise Growth
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#475569] leading-[1.7]">
              External citations, industry conclave commendations, and sector
              publications honoring our institutional advisory rigor across sovereign
              guarantees, statutory certifications, and modern enterprise governance.
            </p>
          </FadeIn>

          {/* Carousel Arrows */}
          <FadeIn direction="up" distance={16} delay={0.08} className="shrink-0 flex items-center gap-3">
            <button
              type="button"
              onClick={() => showCard(activeIndex - 1)}
              className="w-11 h-11 rounded-full border border-cyan-200/90 bg-white text-[#475569] hover:border-[#0891B2] hover:text-[#0891B2] disabled:opacity-25 flex items-center justify-center transition-all shadow-xs hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0891B2] cursor-pointer"
              aria-label="Scroll citations left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => showCard(activeIndex + 1)}
              className="w-11 h-11 rounded-full border border-cyan-200/90 bg-white text-[#475569] hover:border-[#0891B2] hover:text-[#0891B2] disabled:opacity-25 flex items-center justify-center transition-all shadow-xs hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0891B2] cursor-pointer"
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
          ref={carouselRef}
          onScroll={checkScroll}
          onKeyDown={handleKeyDown}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          tabIndex={0}
          role="region"
          aria-label="Awards and accreditations carousel"
          className="flex max-w-5xl items-stretch gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 pt-2 -mx-4 px-[calc((100%-320px)/2+1rem)] sm:gap-6 sm:-mx-6 sm:px-[calc((100%-380px)/2+1.5rem)] lg:mx-auto lg:px-[calc((100%-440px)/2)] no-scrollbar focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0891B2] focus-visible:ring-offset-4"
        >
          {renderedItems.map((item, renderedIndex) => {
            const meta = getRecognitionMeta(item.type);
            const Icon = meta.icon;

            return (
              <div
                key={`${item.id}-${renderedIndex}`}
                className="w-[calc(100vw-2rem)] max-w-[360px] sm:w-[320px] lg:w-[440px] lg:max-w-[440px] shrink-0 snap-center h-full"
              >
                <SpotlightCard
                  glowVariant="purple"
                  className="h-[360px] sm:h-[400px] p-0 bg-transparent border border-cyan-200/90 hover:border-[#06B6D4]/50 transition-all duration-300 shadow-[0_8px_24px_-6px_rgba(88,28,135,0.06),0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_-8px_rgba(88,28,135,0.12)]"
                  innerClassName="!p-0 justify-end bg-transparent text-white rounded-3xl"
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
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cyan-100 via-white to-emerald-100">
                      <Icon className="h-16 w-16 text-[#0891B2]" aria-hidden="true" />
                    </div>
                  )}

                  <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/90 via-black/65 to-transparent px-5 pb-5 pt-24 sm:px-6 sm:pb-6">
                    <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-200">
                      {item.publicationOrOrg} &bull; {item.year}
                    </span>
                    <h3 className="font-serif text-xl font-medium leading-snug text-white sm:text-2xl">
                      {item.title}
                    </h3>

                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs tracking-wider text-white underline decoration-cyan-300 underline-offset-4 transition-colors hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
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
              className={`h-2 rounded-full transition-all ${activeIndex === index ? "w-8 bg-[#0891B2]" : "w-2 bg-cyan-200 hover:bg-cyan-400"}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
