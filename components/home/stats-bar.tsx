"use client";

import * as React from "react";
import {
  Landmark,
  ShieldCheck,
  Layers,
  FileCheck2,
  type LucideIcon,
  CheckCircle2,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import type { StatMetric } from "@/lib/site-config";
import { Container } from "@/components/shared/container";
import { Eyebrow } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/section-heading";
import { useInView } from "framer-motion";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  useReducedMotionPreference,
} from "@/components/shared/motion";

const statIconMap: Record<string, LucideIcon> = {
  "max-guarantee-sanction": Landmark,
  "sovereign-coverage": ShieldCheck,
  "advisory-practices": Layers,
  "programs-covered": FileCheck2,
};

const statIndexMap: Record<string, string> = {
  "max-guarantee-sanction": "01",
  "sovereign-coverage": "02",
  "advisory-practices": "03",
  "programs-covered": "04",
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

export function StatsBar() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-40px" });

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
      className="relative bg-slate-100/80 py-16 sm:py-20 lg:py-24 border-b border-slate-200/80"
    >
      <Container width="wide" className="space-y-12 sm:space-y-16">
        {/* Section Heading matching Bconsult's "Core Advantages" intro */}
        <FadeIn direction="up" distance={16} delay={0.05}>
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/70 text-teal-800">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
              <Eyebrow
                accent={false}
                className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase font-sans text-teal-800"
              >
                OUR CORE ADVANTAGES &bull; INSTITUTIONAL PARAMETERS
              </Eyebrow>
            </div>

            <h2
              id="stats-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 !leading-[1.18]"
            >
              Engineered for Exponential Enterprise Scale
            </h2>

            <p className="type-body text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Four verified institutional parameters establishing sovereign debt
              leverage, regulatory certainty, and turnkey compliance execution across
              Indian industrial hubs.
            </p>
          </div>
        </FadeIn>

        {/* ============================================================
            BCONSULT 4-CARD FEATURE GRID PATTERN (Equal-width, hover lift)
            ============================================================ */}
        <StaggerContainer
          inView={true}
          staggerDelay={0.08}
          delayChildren={0.1}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 items-stretch"
        >
          {verifiedStats.map((stat) => {
            const Icon = statIconMap[stat.id] || Landmark;
            const indexNumber = statIndexMap[stat.id] || "01";

            return (
              <StaggerItem key={stat.id} className="h-full">
                <div className="group relative h-full flex flex-col justify-between rounded-3xl bg-white p-6 sm:p-7 border border-slate-200/90 hover:border-teal-500/50 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_32px_-8px_rgba(8,145,178,0.12)] hover:-translate-y-2 transition-all duration-300">
                  <div className="space-y-4">
                    {/* Top Row: Icon Container + Step Number */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/90 text-teal-700 flex items-center justify-center shadow-xs group-hover:bg-teal-600 group-hover:text-white group-hover:scale-105 group-hover:border-teal-600 transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>

                      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-md bg-slate-100/80 text-slate-500 group-hover:bg-teal-50 group-hover:text-teal-700 transition-colors">
                        {indexNumber}
                      </span>
                    </div>

                    {/* Large Animated Metric Display */}
                    <div
                      className="pt-2 flex items-baseline flex-wrap"
                      aria-label={`${stat.prefix ?? ""}${stat.value}${
                        stat.suffix ?? ""
                      }: ${stat.label}`}
                    >
                      {stat.prefix && (
                        <span className="font-serif text-2xl sm:text-3xl text-teal-700 font-bold mr-0.5 leading-none">
                          {stat.prefix}
                        </span>
                      )}
                      <span className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-slate-950 tracking-tight leading-none tabular-nums">
                        {stat.numericValue !== null &&
                        stat.numericValue !== undefined ? (
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
                        <span className="text-base sm:text-lg font-sans font-medium text-slate-600 ml-1 leading-none">
                          {stat.suffix.trim()}
                        </span>
                      )}
                    </div>

                    {/* Stat Label */}
                    <h3 className="font-sans text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-teal-800 transition-colors">
                      {stat.label}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans line-clamp-3">
                      {stat.description}
                    </p>
                  </div>

                  {/* Bottom Verification Footer */}
                  <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-sans text-slate-500">
                    <span className="inline-flex items-center gap-1.5 font-medium text-emerald-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      Verified
                    </span>
                    <span className="font-mono text-[10px] text-slate-400 uppercase">
                      Mandate Standard
                    </span>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
