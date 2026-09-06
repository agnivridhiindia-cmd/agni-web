"use client";

import * as React from "react";
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
        iconBg: "bg-gold-50 border-gold-200/80",
        iconColor: "text-gold-700",
      };
    case "press":
    case "media":
      return {
        icon: Newspaper,
        badgeVariant: "primary",
        label: "Press Citation",
        iconBg: "bg-teal-50 border-teal-200/80",
        iconColor: "text-teal-700",
      };
    case "magazine":
      return {
        icon: Bookmark,
        badgeVariant: "default",
        label: "Sector Analysis",
        iconBg: "bg-slate-100 border-slate-200",
        iconColor: "text-slate-700",
      };
    case "recognition":
    default:
      return {
        icon: ShieldCheck,
        badgeVariant: "outline",
        label: "Accreditation",
        iconBg: "bg-teal-50/70 border-teal-200/60",
        iconColor: "text-teal-800",
      };
  }
}

export function RecognitionSection() {
  const prefersReduced = useReducedMotionPreference();
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  // Gated: strictly filter out unverified items
  const verifiedItems = React.useMemo(() => {
    return (siteConfig.recognition ?? []).filter(
      (item): item is RecognitionItem => item.verified !== false
    );
  }, []);

  const checkScroll = React.useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
  }, []);

  React.useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [checkScroll]);

  const scrollByAmount = (distance: number) => {
    const el = carouselRef.current;
    if (!el) return;
    el.scrollBy({ left: distance, behavior: prefersReduced ? "auto" : "smooth" });
    setTimeout(checkScroll, 350);
  };

  if (verifiedItems.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="recognition-heading"
      className="relative bg-slate-50/70 py-16 sm:py-20 lg:py-24 border-b border-slate-200/80 overflow-hidden"
    >
      {/* Ambient background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
      >
        <div className="absolute top-1/2 -right-24 h-96 w-96 rounded-full bg-teal-400/5 blur-3xl" />
        <div className="absolute bottom-0 -left-24 h-96 w-96 rounded-full bg-gold-400/5 blur-3xl" />
      </div>

      <Container width="wide" className="relative z-10 space-y-10 sm:space-y-12">
        {/* Header Row: Title on Left, Carousel Controls on Right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <FadeIn direction="up" distance={16} delay={0.04} className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-xs text-teal-800">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
              <Eyebrow
                accent={false}
                className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase font-sans text-teal-800"
              >
                AWARDS &amp; ACHIEVEMENTS &bull; ACCREDITATIONS
              </Eyebrow>
            </div>

            <h2
              id="recognition-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 !leading-[1.18]"
            >
              Recognized for Catalyzing Enterprise Growth
            </h2>

            <p className="type-body text-slate-600 leading-relaxed">
              External citations, industry conclave commendations, and sector
              publications honoring our institutional advisory rigor across sovereign
              guarantees, statutory certifications, and modern enterprise governance.
            </p>
          </FadeIn>

          {/* Carousel Arrows (Bconsult Style Navigation) */}
          <FadeIn direction="up" distance={16} delay={0.08} className="shrink-0 flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollByAmount(-380)}
              disabled={!canScrollLeft}
              className="w-11 h-11 rounded-full border border-slate-200 bg-white text-slate-700 hover:border-teal-500 hover:text-teal-700 hover:shadow-subtle disabled:opacity-35 disabled:hover:border-slate-200 disabled:hover:text-slate-700 flex items-center justify-center transition-all shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
              aria-label="Scroll citations left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollByAmount(380)}
              disabled={!canScrollRight}
              className="w-11 h-11 rounded-full border border-slate-200 bg-white text-slate-700 hover:border-teal-500 hover:text-teal-700 hover:shadow-subtle disabled:opacity-35 disabled:hover:border-slate-200 disabled:hover:text-slate-700 flex items-center justify-center transition-all shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
              aria-label="Scroll citations right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </FadeIn>
        </div>

        {/* ============================================================
            BCONSULT HORIZONTAL CARD DECK (Scroll & Drag Responsive Carousel)
            ============================================================ */}
        <div
          ref={carouselRef}
          onScroll={checkScroll}
          className="flex items-stretch gap-6 overflow-x-auto pb-4 pt-2 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 no-scrollbar scroll-smooth snap-x snap-mandatory"
        >
          {verifiedItems.map((item) => {
            const meta = getRecognitionMeta(item.type);
            const Icon = meta.icon;

            return (
              <div
                key={item.id}
                className="w-[320px] sm:w-[380px] lg:w-[420px] shrink-0 snap-start h-full"
              >
                <SpotlightCard
                  glowVariant="amber"
                  className="h-full hover:-translate-y-2 transition-all duration-300 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_32px_-8px_rgba(217,119,6,0.12)]"
                  innerClassName="p-6 sm:p-7 justify-between bg-gradient-to-b from-white via-white to-slate-50/70"
                >
                  <div className="space-y-4">
                    {/* Top Row: Icon Container + Category Tag + Year Pill */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-11 h-11 rounded-2xl ${meta.iconBg} ${meta.iconColor} border flex items-center justify-center shadow-xs group-hover/spotlight:scale-105 transition-transform duration-300`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <Badge variant={meta.badgeVariant} className="text-xs font-semibold">
                          {meta.label}
                        </Badge>
                      </div>

                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100/80 text-slate-600 border border-slate-200/60">
                        {item.year}
                      </span>
                    </div>

                    {/* Publication Logo or Label */}
                    <div className="pt-2 space-y-2">
                      {item.logoImage ? (
                        <div className="h-10 flex items-center">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={item.logoImage}
                            alt={item.publicationOrOrg}
                            className="h-8 max-w-[160px] object-contain opacity-85 group-hover/spotlight:opacity-100 transition-opacity"
                          />
                        </div>
                      ) : (
                        <span className="text-xs font-bold tracking-wider text-teal-800 uppercase block font-sans">
                          {item.publicationOrOrg}
                        </span>
                      )}

                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-950 leading-snug group-hover/spotlight:text-amber-950 transition-colors pt-1">
                        {item.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans line-clamp-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Verification Footer */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1.5 font-medium text-emerald-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Verified Citation</span>
                    </span>

                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-teal-700 hover:text-amber-700 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded transition-colors"
                        aria-label={`Read coverage: ${item.title} (opens in a new tab)`}
                      >
                        <span>Read Coverage</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-amber-600" />
                      </a>
                    ) : (
                      <span className="text-[11px] text-slate-400 font-sans">
                        Registry Mandate
                      </span>
                    )}
                  </div>
                </SpotlightCard>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
