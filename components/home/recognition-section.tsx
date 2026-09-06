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
        iconBg: "bg-[#C79A4A]/10 border-[#C79A4A]/30",
        iconColor: "text-[#C79A4A]",
      };
    case "press":
    case "media":
      return {
        icon: Newspaper,
        badgeVariant: "primary",
        label: "Press Citation",
        iconBg: "bg-white/[0.05] border-white/10",
        iconColor: "text-[#DFC286]",
      };
    case "magazine":
      return {
        icon: Bookmark,
        badgeVariant: "default",
        label: "Sector Analysis",
        iconBg: "bg-white/[0.04] border-white/[0.08]",
        iconColor: "text-[#A5A29A]",
      };
    case "recognition":
    default:
      return {
        icon: ShieldCheck,
        badgeVariant: "outline",
        label: "Accreditation",
        iconBg: "bg-[#C79A4A]/10 border-[#C79A4A]/25",
        iconColor: "text-[#C79A4A]",
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
      className="relative bg-[#080909] text-[#F3EFE7] py-20 sm:py-28 lg:py-36 border-b border-white/[0.08] overflow-hidden"
    >
      {/* Ambient background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
      >
        <div className="absolute top-1/2 -right-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(199,154,74,0.04)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 -left-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(140,59,36,0.04)_0%,transparent_70%)] blur-3xl" />
      </div>

      <Container width="wide" className="relative z-10 space-y-10 sm:space-y-12">
        {/* Header Row: Title on Left, Carousel Controls on Right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <FadeIn direction="up" distance={16} delay={0.04} className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[#C79A4A] text-xs font-mono tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C79A4A]" />
              <span>AWARDS &amp; ACHIEVEMENTS &bull; ACCREDITATIONS</span>
            </div>

            <h2
              id="recognition-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#F3EFE7] !leading-[1.15]"
            >
              Recognized for Catalyzing Enterprise Growth
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#A5A29A] leading-relaxed">
              External citations, industry conclave commendations, and sector
              publications honoring our institutional advisory rigor across sovereign
              guarantees, statutory certifications, and modern enterprise governance.
            </p>
          </FadeIn>

          {/* Carousel Arrows */}
          <FadeIn direction="up" distance={16} delay={0.08} className="shrink-0 flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollByAmount(-380)}
              disabled={!canScrollLeft}
              className="w-11 h-11 rounded-full border border-white/10 bg-[#111313] text-[#A5A29A] hover:border-[#C79A4A] hover:text-[#DFC286] disabled:opacity-20 flex items-center justify-center transition-all shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C79A4A]"
              aria-label="Scroll citations left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollByAmount(380)}
              disabled={!canScrollRight}
              className="w-11 h-11 rounded-full border border-white/10 bg-[#111313] text-[#A5A29A] hover:border-[#C79A4A] hover:text-[#DFC286] disabled:opacity-20 flex items-center justify-center transition-all shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C79A4A]"
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
                  className="h-full bg-[#111313] border border-white/[0.08] hover:border-[#C79A4A]/40 transition-all duration-300 shadow-xl"
                  innerClassName="p-6 sm:p-7 justify-between bg-[#111313]"
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

                      <span className="font-mono text-xs font-medium px-2.5 py-1 rounded-full bg-white/[0.04] text-[#8E8D86] border border-white/[0.08]">
                        {item.year}
                      </span>
                    </div>

                    {/* Publication Label */}
                    <div className="pt-2 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C79A4A]" />
                        <span className="text-xs font-mono font-medium tracking-widest text-[#DFC286] uppercase">
                          {item.publicationOrOrg}
                        </span>
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#F3EFE7] leading-snug group-hover/spotlight:text-[#DFC286] transition-colors pt-1">
                        {item.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#A5A29A] leading-relaxed font-sans line-clamp-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Verification Footer */}
                  <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-[#A5A29A]">
                    <span className="inline-flex items-center gap-1.5 font-medium text-[#DFC286]">
                      <CheckCircle2 className="w-4 h-4 text-[#C79A4A] shrink-0" />
                      <span>Verified Citation</span>
                    </span>

                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#C79A4A] hover:text-[#DFC286] font-mono text-xs tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C79A4A] rounded transition-colors"
                        aria-label={`Read coverage: ${item.title} (opens in a new tab)`}
                      >
                        <span>Read Coverage</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#DFC286]" />
                      </a>
                    ) : (
                      <span className="text-[11px] text-[#8E8D86] font-mono">
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
