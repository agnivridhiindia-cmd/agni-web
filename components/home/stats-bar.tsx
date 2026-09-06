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
  Pause,
  Play,
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
        glowVariant="amber"
        className="h-full hover:-translate-y-1.5 transition-all duration-300 shadow-[0_12px_30px_-8px_rgba(0,0,0,0.8)] border-white/[0.08] bg-[#111313] hover:border-[#C79A4A]/40"
        innerClassName="p-6 sm:p-7 flex flex-col justify-between h-full min-h-[300px] bg-[#111313] text-[#F3EFE7]"
      >
        <div className="space-y-4">
          {/* Top Row: Icon Container + Step Number */}
          <div className="flex items-center justify-between gap-3">
            <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 text-[#C79A4A] flex items-center justify-center shadow-xs group-hover/spotlight:bg-[#C79A4A] group-hover/spotlight:text-[#080909] transition-all duration-300">
              <Icon className="w-5 h-5" />
            </div>

            <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded-md bg-white/[0.03] text-[#A5A29A] group-hover/spotlight:text-[#C79A4A] transition-colors">
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
              <span className="font-serif text-2xl sm:text-3xl text-[#C79A4A] font-light mr-0.5 leading-none">
                {stat.prefix}
              </span>
            )}
            <span className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-normal text-[#F3EFE7] tracking-tight leading-none tabular-nums">
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
              <span className="text-base sm:text-lg font-sans font-normal text-[#A5A29A] ml-1.5 leading-none">
                {stat.suffix.trim()}
              </span>
            )}
          </div>

          {/* Stat Label */}
          <h3 className="font-sans text-base sm:text-lg font-semibold text-[#F3EFE7] leading-snug group-hover/spotlight:text-[#DFC286] transition-colors line-clamp-1">
            {stat.label}
          </h3>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-[#A5A29A] leading-relaxed font-sans line-clamp-3">
            {stat.description}
          </p>
        </div>

        {/* Bottom Verification Footer */}
        <div className="mt-5 pt-3.5 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#8E8D86]">
          <span className="inline-flex items-center gap-1.5 text-[#C79A4A]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#C79A4A] shrink-0" />
            Verified Metric
          </span>
          <span className="text-[#8E8D86] uppercase tracking-wider">
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
  const [isPaused, setIsPaused] = React.useState(false);

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

  // Duplicate stats for seamless 2-track infinite loop
  const duplicatedSet = [...verifiedStats, ...verifiedStats];

  return (
    <section
      ref={sectionRef}
      aria-labelledby="stats-heading"
      className="relative bg-[#080909] text-[#F3EFE7] py-16 sm:py-20 lg:py-24 border-b border-white/[0.08] overflow-hidden"
    >
      <Container width="wide" className="space-y-8 sm:space-y-10">
        {/* Section Heading */}
        <FadeIn direction="up" distance={16} delay={0.05}>
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[#C79A4A]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C79A4A]" />
              <Eyebrow
                accent={false}
                className="text-[11px] sm:text-xs font-mono tracking-widest uppercase text-[#C79A4A]"
              >
                OUR CORE ADVANTAGES &bull; INSTITUTIONAL PARAMETERS
              </Eyebrow>
            </div>

            <h2
              id="stats-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#F3EFE7] !leading-[1.15]"
            >
              Engineered for Exponential Enterprise Scale
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#A5A29A] max-w-2xl mx-auto leading-relaxed">
              Verified institutional metrics establishing sovereign debt
              leverage, statutory compliance execution, and scalable technology architectures.
            </p>

            {/* Interaction hint & pause toggle */}
            <div className="flex items-center justify-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#A5A29A] bg-white/[0.03] px-3 py-1 rounded-full border border-white/10">
                <span className="w-2 h-2 rounded-full bg-[#C79A4A] animate-pulse" />
                Hover any card to inspect &amp; pause
              </span>

              <button
                type="button"
                onClick={() => setIsPaused((prev) => !prev)}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#A5A29A] hover:text-[#F3EFE7] bg-white/[0.03] hover:bg-white/[0.08] px-2.5 py-1 rounded-full border border-white/10 transition-colors"
                aria-label={isPaused ? "Resume metric ticker" : "Pause metric ticker"}
                title={isPaused ? "Resume metric ticker" : "Pause metric ticker"}
              >
                {isPaused ? (
                  <>
                    <Play className="w-3 h-3 text-[#C79A4A] fill-[#C79A4A]" />
                    <span>Resume</span>
                  </>
                ) : (
                  <>
                    <Pause className="w-3 h-3 text-[#A5A29A] fill-[#A5A29A]" />
                    <span>Pause</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </FadeIn>
      </Container>

      {/* ============================================================
          INFINITE HORIZONTAL MARQUEE (Single row, pauses on hover)
          ============================================================ */}
      <div className="relative w-full overflow-hidden mt-8 sm:mt-10 group">
        {/* Soft edge gradient masks */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 lg:w-48 z-20 bg-gradient-to-r from-[#080909] via-[#080909]/90 to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 lg:w-48 z-20 bg-gradient-to-l from-[#080909] via-[#080909]/90 to-transparent"
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
            style={{
              animationPlayState: isPaused ? "paused" : undefined,
            }}
          >
            {duplicatedSet.map((stat, idx) => (
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
              style={{
                animationPlayState: isPaused ? "paused" : undefined,
              }}
              aria-hidden="true"
            >
              {duplicatedSet.map((stat, idx) => (
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
