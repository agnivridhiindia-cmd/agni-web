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
 const spanRef = React.useRef<HTMLSpanElement>(null);
 const hasAnimated = React.useRef(false);

 React.useEffect(() => {
 if (prefersReduced) {
 if (spanRef.current) {
 spanRef.current.textContent = target.toLocaleString("en-IN");
 }
 return;
 }

 if (!trigger || hasAnimated.current) return;
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

 if (spanRef.current) {
 spanRef.current.textContent = current.toLocaleString("en-IN");
 }

 if (progress < 1) {
 animationFrameId = window.requestAnimationFrame(step);
 } else {
 if (spanRef.current) {
 spanRef.current.textContent = target.toLocaleString("en-IN");
 }
 }
 };

 animationFrameId = window.requestAnimationFrame(step);

 return () => {
 if (animationFrameId) {
 window.cancelAnimationFrame(animationFrameId);
 }
 };
 }, [trigger, target, duration, prefersReduced]);

 return (
 <span ref={spanRef}>
 {prefersReduced ? target.toLocaleString("en-IN") : "0"}
 </span>
 );
}

interface StatCardProps {
 stat: StatMetric;
 indexNumber: string;
 isInView: boolean;
 animate?: boolean;
}

function StatCard({ stat, indexNumber, isInView, animate = true }: StatCardProps) {
 const Icon = statIconMap[stat.id] || Landmark;
 const formattedStaticValue =
 stat.numericValue !== null && stat.numericValue !== undefined
 ? stat.numericValue.toLocaleString("en-IN")
 : stat.value;

 return (
 <div className="w-[300px] sm:w-[340px] lg:w-[360px] shrink-0 px-3 h-full">
 <SpotlightCard
 glowVariant="teal"
 className="h-full border-slate-700/60 bg-gradient-to-b from-[#111D3A] to-[#0D162D] transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-400/60 hover:shadow-[0_20px_45px_-12px_rgba(14,165,233,0.25)]"
 innerClassName="p-6 sm:p-7 flex flex-col justify-between h-full min-h-[300px] bg-gradient-to-b from-[#132042] via-[#0E1833] to-[#0B1329] text-white rounded-2xl border border-slate-700/50"
 >
 <div className="space-y-4">
 {/* Top Row: Icon Container + Step Number */}
 <div className="flex items-center justify-between gap-3">
 <div className="w-11 h-11 rounded-xl bg-slate-800/80 border border-slate-700 text-sky-400 flex items-center justify-center shadow-xs group-hover/spotlight:bg-amber-500 group-hover/spotlight:text-slate-950 transition-all duration-300">
 <Icon className="w-5 h-5" />
 </div>

 <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700 text-slate-300 group-hover/spotlight:bg-amber-500 group-hover/spotlight:text-slate-950 transition-colors">
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
              <span className="font-heading text-2xl sm:text-3xl text-amber-400 font-bold mr-0.5 leading-none">
 {stat.prefix}
 </span>
 )}
 <span className="font-heading text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-white tracking-tight leading-none tabular-nums">
 {animate && stat.numericValue !== null && stat.numericValue !== undefined ? (
 <StatCountUp
 target={stat.numericValue}
 trigger={isInView}
 duration={1.4}
 />
 ) : (
 formattedStaticValue
 )}
 </span>
 {stat.suffix && (
 <span className="text-base sm:text-lg font-sans font-normal text-slate-300 ml-1.5 leading-none">
 {stat.suffix.trim()}
 </span>
 )}
 </div>

 {/* Stat Label */}
 <h3 className="font-heading text-base sm:text-lg font-semibold text-white leading-snug group-hover/spotlight:text-amber-300 transition-colors line-clamp-1">
 {stat.label}
 </h3>

 {/* Short Description */}
 <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans line-clamp-3">
 {stat.description}
 </p>
 </div>

 {/* Bottom Verification Footer */}
 <div className="mt-5 pt-3.5 border-t border-slate-700/50 flex items-center justify-between text-[11px] font-mono text-slate-400">
 <span className="inline-flex items-center gap-1.5 text-amber-400 font-medium">
 <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
 Verified Metric
 </span>
 <span className="text-slate-400 uppercase tracking-wider">
 Mandate Standard
 </span>
 </div>
 </SpotlightCard>
 </div>
 );
}

export function StatsBar() {
 const sectionRef = React.useRef<HTMLElement>(null);
 const isInView = useInView(sectionRef, { once: true, margin: "150px 0px" });
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
 className="relative py-14 sm:py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F2F7FB] to-[#EBF3F9] border-b border-[#CBDDEB]"
 >
 <Container width="wide">
 {/* Precision Sovereign Data Console Chassis - Apple Specular Hardware Enclosure */}
 <div className="relative overflow-hidden rounded-[3rem] border border-white/15 border-t-white/35 bg-[#10172B] p-6 sm:p-10 lg:p-12 text-white shadow-[0_32px_80px_-20px_rgba(0,0,0,0.8),inset_0_1px_2px_rgba(255,255,255,0.25)] ring-1 ring-white/10">
 {/* Ambient Technical Blueprint Grid & Atmospheric Orbs */}
 <div
 aria-hidden="true"
 className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
 >
 <div className="absolute inset-0 bg-blueprint-grid-dark opacity-25 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,#000_65%,transparent_100%)]" />
 <div className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.12)_0%,rgba(14,165,233,0.03)_45%,transparent_70%)]" />
 <div className="absolute -bottom-32 -right-32 w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.12)_0%,rgba(245,158,11,0.03)_45%,transparent_70%)]" />
 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[360px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.08)_0%,rgba(14,165,233,0.02)_45%,transparent_70%)]" />
 {/* Architectural coordinates */}
 <div className="absolute top-6 left-6 font-mono text-xs text-sky-400/40 select-none">+</div>
 <div className="absolute top-6 right-6 font-mono text-xs text-amber-400/40 select-none">+</div>
 </div>

 <div className="relative z-10 space-y-8 sm:space-y-10">
 {/* Section Heading */}
 <FadeIn direction="up" distance={16} delay={0.05}>
 <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
 <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.08]  border border-white/15 text-xs font-mono tracking-widest text-sky-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
 <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
 <span>OUR CORE ADVANTAGES &bull; INSTITUTIONAL PARAMETERS</span>
 </div>

 <h2
 id="stats-heading"
 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-[-0.03em] text-white !leading-[1.14]"
 >
 Engineered for{" "}
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 font-bold">
 Exponential Enterprise Scale.
 </span>
 </h2>

 <p className="font-sans text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-[1.7]">
 Verified institutional metrics establishing sovereign debt
 leverage, statutory compliance execution, and scalable technology architectures.
 </p>
 </div>
 </FadeIn>

 {/* INFINITE HORIZONTAL MARQUEE */}
 <div className="relative w-full overflow-hidden mt-6 sm:mt-8 group">
 {/* Soft edge gradient masks matched to chassis interior */}
 <div
 className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 lg:w-36 z-20 bg-gradient-to-r from-[#0B1329] via-[#0B1329]/90 to-transparent"
 aria-hidden="true"
 />
 <div
 className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 lg:w-36 z-20 bg-gradient-to-l from-[#0B1329] via-[#0B1329]/90 to-transparent"
 aria-hidden="true"
 />

 {/* Marquee Track Container */}
 <div
 className={cn(
 "flex w-max items-stretch py-2 [transform:translateZ(0)] will-change-transform",
 prefersReduced && "overflow-x-auto max-w-full px-4 scrollbar-none"
 )}
 >
 {/* Primary Track */}
 <div
 className={cn(
 "flex shrink-0 items-stretch [transform:translateZ(0)]",
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
 animate={true}
 />
 ))}
 </div>

 {/* Secondary Track for perfectly seamless wrapping */}
 {!prefersReduced && (
 <div
 className="flex shrink-0 items-stretch [transform:translateZ(0)] animate-marquee-loop group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]"
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
                        isInView={false}
                        animate={false}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
