"use client";

import * as React from "react";
import {
  Landmark,
  ShieldCheck,
  Layers,
  FileCheck2,
  TrendingUp,
  Building2,
  Award,
  Users,
  BadgeCheck,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import type { StatMetric } from "@/lib/site-config";
import { Container } from "@/components/shared/container";
import { Eyebrow } from "@/components/ui/badge";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { useInView } from "framer-motion";
import {
  FadeIn,
  useReducedMotionPreference,
} from "@/components/shared/motion";
import { cn } from "@/lib/utils";

const statIconMap: Record<string, LucideIcon> = {
  "max-guarantee-sanction": Landmark,
  "sovereign-coverage": ShieldCheck,
  "advisory-practices": Layers,
  "programs-covered": FileCheck2,
  "funding-facilitated": TrendingUp,
  "businesses-supported": Building2,
  "years-experience": Award,
  "clients-served": Users,
  "certifications-projects": BadgeCheck,
};

function StatCountUp({
  target,
  trigger = true,
  duration = 1.4,
}: {
  target: number;
  trigger: boolean;
  duration?: number;
}) {
  const prefersReduced = useReducedMotionPreference();
  const [count, setCount] = React.useState(0);
  const hasAnimated = React.useRef(false);

  React.useEffect(() => {
    if (!trigger || hasAnimated.current || prefersReduced) return;
    hasAnimated.current = true;

    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / (duration * 1000);
      const progress = Math.min(elapsed, 1);
      // Smooth ease-out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(easeOut * target);

      setCount(current);

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);

    return () => {
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [trigger, target, duration, prefersReduced]);

  if (prefersReduced) {
    return <span>{target}</span>;
  }

  return <span>{count}</span>;
}

interface StatCardProps {
  stat: StatMetric;
  indexNumber: string;
  isInView: boolean;
}

function StatCard({ stat, indexNumber, isInView }: StatCardProps) {
  const Icon = statIconMap[stat.id] || Landmark;

  return (
    <div className="w-[300px] sm:w-[340px] lg:w-[360px] shrink-0 px-3 h-full">
      <SpotlightCard
        glowVariant="teal"
        className="h-full border-cyan-100 bg-white/90 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#06B6D4]/60 hover:shadow-[0_18px_40px_-18px_rgba(8,145,178,0.18)]"
        innerClassName="p-6 sm:p-7 flex flex-col justify-between h-full min-h-[300px] bg-white text-[#181226]"
      >
        <div className="space-y-4">
          {/* Top Row: Icon Container + Step Number */}
          <div className="flex items-center justify-between gap-3">
            <div className="w-11 h-11 rounded-xl bg-cyan-50 border border-cyan-200/70 text-[#0891B2] flex items-center justify-center shadow-xs group-hover/spotlight:bg-[#0891B2] group-hover/spotlight:text-white transition-all duration-300">
              <Icon className="w-5 h-5" />
            </div>

            <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-cyan-50 border border-cyan-200/70 text-[#0891B2] group-hover/spotlight:bg-[#0891B2] group-hover/spotlight:text-white transition-colors">
              {indexNumber}
            </span>
          </div>

          {/* Large Animated Metric Display */}
          <div
            className="pt-1 flex items-baseline flex-wrap"
            aria-label={`${stat.prefix ?? ""}${stat.value}${
              stat.suffix ?? ""
            }: ${stat.label}`}
          >
            {stat.prefix && (
              <span className="font-serif text-2xl sm:text-3xl text-[#0891B2] font-normal mr-0.5 leading-none">
                {stat.prefix}
              </span>
            )}
            <span className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] font-medium text-[#181226] tracking-tight leading-none tabular-nums">
              {stat.numericValue !== null && stat.numericValue !== undefined ? (
                <StatCountUp
                  target={stat.numericValue}
                  trigger={isInView}
                  duration={1.4}
                />
              ) : (
                stat.value
              )}
            </span>
            {stat.suffix && (
              <span className="text-base sm:text-lg font-sans font-normal text-[#475569] ml-1.5 leading-none">
                {stat.suffix.trim()}
              </span>
            )}
          </div>

          {/* Stat Label */}
          <h3 className="font-sans text-base sm:text-lg font-semibold text-[#181226] leading-snug group-hover/spotlight:text-[#0891B2] transition-colors line-clamp-1">
            {stat.label}
          </h3>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-sans line-clamp-3">
            {stat.description}
          </p>
        </div>

        {/* Bottom Verification Footer */}
        <div className="mt-5 pt-3.5 border-t border-cyan-100/90 flex items-center justify-between text-[11px] font-mono text-[#64748B]">
          <span className="inline-flex items-center gap-1.5 text-[#0891B2] font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#0891B2] shrink-0" />
            Verified Metric
          </span>
          <span className="text-[#64748B] uppercase tracking-wider">
            Mandate Standard
          </span>
        </div>
      </SpotlightCard>
    </div>
  );
}

export function StatsBar() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-40px" });
  const prefersReduced = useReducedMotionPreference();

  // Extract strictly verified statistics from authoritative configuration
  const verifiedStats = React.useMemo(() => {
    return Object.values(siteConfig.stats).filter(
      (stat): stat is StatMetric =>
        Boolean(stat.verified) &&
        (stat.value !== null ||
          (stat.numericValue !== null && stat.numericValue !== undefined))
    );
  }, []);

  if (verifiedStats.length === 0) {
    return null;
  }

  return (
    <section
      ref={sectionRef}
      aria-labelledby="stats-heading"
      className="relative overflow-hidden border-b border-cyan-100/80 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.14),transparent_18%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.12),transparent_18%),linear-gradient(180deg,#f9feff_0%,#ffffff_22%,#f2fafb_100%)] py-16 text-[#181226] sm:py-20 lg:py-24"
    >
      <Container width="wide" className="space-y-8 sm:space-y-10">
        {/* Section Heading */}
        <FadeIn direction="up" distance={16} delay={0.05}>
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-cyan-200/90 text-[#0891B2] shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0891B2]" />
              <Eyebrow
                accent={false}
                className="text-[11px] sm:text-xs font-mono tracking-widest uppercase text-[#0891B2]"
              >
                OUR CORE ADVANTAGES &bull; INSTITUTIONAL PARAMETERS
              </Eyebrow>
            </div>

            <h2
              id="stats-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-normal tracking-[-0.015em] text-[#181226] !leading-[1.18]"
            >
              Engineered for Exponential Enterprise Scale
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#475569] max-w-2xl mx-auto leading-[1.7]">
              Verified institutional metrics establishing sovereign debt
              leverage, statutory compliance execution, and scalable technology architectures.
            </p>

            {/* Interaction hint removed from homepage */}
          </div>
        </FadeIn>
      </Container>

      {/* ============================================================
          INFINITE HORIZONTAL MARQUEE (Single row, pauses on hover)
          ============================================================ */}
      <div className="relative w-full overflow-hidden mt-8 sm:mt-10 group">
        {/* Soft edge gradient masks */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 lg:w-48 z-20 bg-gradient-to-r from-[#FAF8FE] via-[#FAF8FE]/90 to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 lg:w-48 z-20 bg-gradient-to-l from-[#FAF8FE] via-[#FAF8FE]/90 to-transparent"
          aria-hidden="true"
        />

        {/* Marquee Track Container */}
        <div
          className={cn(
            "flex w-max items-stretch py-2",
            prefersReduced && "overflow-x-auto max-w-full px-4 scrollbar-none"
          )}
        >
          {/* Primary Track */}
          <div
            className={cn(
              "flex shrink-0 items-stretch",
              !prefersReduced &&
                "animate-marquee-loop group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]"
            )}
          >
            {verifiedStats.map((stat, idx) => (
              <StatCard
                key={`stat-a-${stat.id}-${idx}`}
                stat={stat}
                indexNumber={String((idx % verifiedStats.length) + 1).padStart(
                  2,
                  "0"
                )}
                isInView={isInView}
              />
            ))}
          </div>

          {/* Secondary Track for perfectly seamless wrapping */}
          {!prefersReduced && (
            <div
              className="flex shrink-0 items-stretch animate-marquee-loop group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]"
              aria-hidden="true"
            >
              {verifiedStats.map((stat, idx) => (
                <StatCard
                  key={`stat-b-${stat.id}-${idx}`}
                  stat={stat}
                  indexNumber={String((idx % verifiedStats.length) + 1).padStart(
                    2,
                    "0"
                  )}
                  isInView={isInView}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
