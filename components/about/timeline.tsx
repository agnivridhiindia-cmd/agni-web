"use client";

import * as React from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import {
  Rocket,
  TrendingUp,
  Cpu,
  Building2,
  LucideIcon,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { companyTimeline, type TimelineMilestone } from "@/data/timeline";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/motion";
import { useReducedMotionPreference } from "@/components/shared/motion/motion-config";

/**
 * Lucide icon mapping aligned with institutional phase narratives:
 * - 2011 (Origin): Rocket
 * - 2016 (Expansion): TrendingUp
 * - 2020 (Modernization): Cpu
 * - 2024 (Institutional Scale): Building2
 */
const milestoneIcons: Record<string, LucideIcon> = {
  "2011": Rocket,
  "2016": TrendingUp,
  "2020": Cpu,
  "2024": Building2,
};

// Normalized baseline scroll activation thresholds
const DEFAULT_THRESHOLDS = [0.12, 0.38, 0.64, 0.9];

/* ==========================================================================
   REUSABLE MILESTONE CARD WITH STRUCTURAL ACHIEVEMENT PILLAR
   ========================================================================== */

interface MilestoneCardProps {
  milestone: TimelineMilestone;
  isActive: boolean;
  isFinalPhase: boolean;
}

function MilestoneCard({
  milestone,
  isActive,
  isFinalPhase,
}: MilestoneCardProps) {
  return (
    <div
      className={`p-7 rounded-3xl bg-gradient-to-b from-teal-900/80 via-[#043331]/95 to-teal-950/95 backdrop-blur-md border transition-all duration-300 ${
        isActive
          ? isFinalPhase
            ? "border-teal-400/80 shadow-[0_16px_40px_rgba(0,0,0,0.6),0_0_25px_rgba(20,184,166,0.25)] ring-1 ring-amber-400/40"
            : "border-teal-400/80 shadow-[0_16px_40px_rgba(0,0,0,0.6),0_0_20px_rgba(20,184,166,0.2)] ring-1 ring-amber-400/30"
          : "border-teal-500/30 hover:border-teal-400/60 shadow-md"
      }`}
    >
      {/* Badge & Pillar Tag */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded border text-amber-300 bg-amber-950/80 border-amber-500/40 shadow-xs">
          {milestone.badge}
        </span>
        <span className="text-[11px] font-mono text-teal-200/70 font-medium">
          {milestone.pillarTag}
        </span>
      </div>

      {/* Subtitle & Title */}
      <div>
        <span className="text-xs font-mono font-semibold text-amber-400 uppercase tracking-wider block">
          {milestone.subtitle}
        </span>
        <h3 className="font-serif text-2xl font-medium text-amber-300 leading-snug mt-1">
          {milestone.title}
        </h3>
      </div>

      {/* Narrative Description */}
      <p className="text-xs sm:text-sm text-teal-100/85 font-sans leading-relaxed mt-3">
        {milestone.description}
      </p>

      {/* Structural Achievement Callout */}
      <div className="mt-5 p-4 rounded-2xl border bg-teal-950/90 border-teal-500/30 shadow-xs">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <span
              className={`w-2 h-2 rounded-full ${
                isActive
                  ? "bg-amber-400 animate-pulse"
                  : "bg-slate-600"
              }`}
            />
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider font-bold text-teal-200/80">
              {milestone.metricLabel}
            </span>
          </div>

          <div className="font-mono text-sm sm:text-base font-bold tabular-nums px-2.5 py-0.5 rounded bg-amber-950/80 text-amber-300 border border-amber-500/40">
            {milestone.metric}
          </div>
        </div>

        <div className="pt-2 flex items-start gap-1.5 text-xs font-sans text-teal-100/85 font-medium leading-snug">
          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
          <span>{milestone.achievementHighlight}</span>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   DESKTOP MILESTONE ROW (>= lg)
   ========================================================================== */

interface DesktopMilestoneRowProps {
  milestone: TimelineMilestone;
  isEven: boolean;
  progress: MotionValue<number>;
  threshold: number;
  prefersReduced: boolean;
  nodeRef: (el: HTMLDivElement | null) => void;
}

function DesktopMilestoneRow({
  milestone,
  isEven,
  progress,
  threshold,
  prefersReduced,
  nodeRef,
}: DesktopMilestoneRowProps) {
  const Icon = milestoneIcons[milestone.year] || Building2;
  const isFinalPhase = milestone.year === "2024";

  // Calibrate reveal window (start reveal ~10% before reaching node)
  const revealStart = Math.max(0, threshold - 0.1);
  const opacity = useTransform(progress, [revealStart, threshold], [0, 1]);
  const cardX = useTransform(
    progress,
    [revealStart, threshold],
    [isEven ? -28 : 28, 0]
  );
  const cardScale = useTransform(progress, [revealStart, threshold], [0.95, 1]);
  const yearX = useTransform(
    progress,
    [revealStart, threshold],
    [isEven ? 20 : -20, 0]
  );
  const nodeScale = useTransform(progress, [revealStart, threshold], [0.75, 1]);

  // Reactive node activation state
  const [isActive, setIsActive] = React.useState(prefersReduced);

  React.useEffect(() => {
    if (prefersReduced) return;
    const unsubscribe = progress.on("change", (latest) => {
      setIsActive(latest >= threshold - 0.02);
    });
    return () => unsubscribe();
  }, [progress, threshold, prefersReduced]);

  return (
    <div className="relative grid grid-cols-12 items-center gap-6 lg:gap-8 py-8 lg:py-12">
      {/* Left Column (5 cols) */}
      <div className={`col-span-5 ${isEven ? "text-right" : "text-right pr-6"}`}>
        {isEven ? (
          <motion.div
            style={
              prefersReduced
                ? undefined
                : {
                    opacity,
                    x: cardX,
                    scale: cardScale,
                  }
            }
            className="w-full text-left"
          >
            <MilestoneCard
              milestone={milestone}
              isActive={isActive}
              isFinalPhase={isFinalPhase}
            />
          </motion.div>
        ) : (
          <motion.div
            style={
              prefersReduced
                ? undefined
                : {
                    opacity,
                    x: yearX,
                  }
            }
            className="space-y-1 select-none"
          >
            <span className="text-5xl lg:text-6xl font-serif font-medium text-white block tracking-tight">
              {milestone.year}
            </span>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-amber-400 block">
              PHASE {milestone.phaseNumber} &bull; {milestone.badge}
            </span>
            <span className="font-mono text-[11px] text-slate-400 block">
              {milestone.pillarTag}
            </span>
          </motion.div>
        )}
      </div>

      {/* Center Node Column (2 cols) */}
      <div className="col-span-2 flex items-center justify-center relative">
        <div
          ref={nodeRef}
          className={`relative z-10 flex items-center justify-center ${
            isEven ? "-translate-x-10 lg:-translate-x-12" : "translate-x-10 lg:translate-x-12"
          }`}
        >
          <motion.div
            style={prefersReduced ? undefined : { scale: nodeScale }}
            className={`w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center transition-all duration-300 border-2 ${
              isActive
                ? "border-amber-400 shadow-[0_0_24px_rgba(245,158,11,0.6)] ring-4 ring-amber-400/20"
                : "border-slate-800 shadow-sm"
            }`}
          >
            {/* Active Radiant Pulse Ring */}
            {isActive && !prefersReduced && (
              <span
                className="absolute inset-0 rounded-full animate-ping opacity-45 bg-amber-400"
                style={{ animationDuration: "2.5s" }}
                aria-hidden="true"
              />
            )}

            {/* Node Icon */}
            <Icon
              className={`w-5 h-5 relative z-10 transition-colors duration-300 ${
                isActive
                  ? "text-amber-400"
                  : "text-slate-500"
              }`}
            />
          </motion.div>
        </div>
      </div>

      {/* Right Column (5 cols) */}
      <div className={`col-span-5 ${!isEven ? "text-left" : "text-left pl-6"}`}>
        {!isEven ? (
          <motion.div
            style={
              prefersReduced
                ? undefined
                : {
                    opacity,
                    x: cardX,
                    scale: cardScale,
                  }
            }
            className="w-full text-left"
          >
            <MilestoneCard
              milestone={milestone}
              isActive={isActive}
              isFinalPhase={isFinalPhase}
            />
          </motion.div>
        ) : (
          <motion.div
            style={
              prefersReduced
                ? undefined
                : {
                    opacity,
                    x: yearX,
                  }
            }
            className="space-y-1 select-none"
          >
            <span className="text-5xl lg:text-6xl font-serif font-medium text-white block tracking-tight">
              {milestone.year}
            </span>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-amber-400 block">
              PHASE {milestone.phaseNumber} &bull; {milestone.badge}
            </span>
            <span className="font-mono text-[11px] text-slate-400 block">
              {milestone.pillarTag}
            </span>
          </motion.div>
        )}
      </div>
    </div>
  );
}

/* ==========================================================================
   MOBILE MILESTONE ROW (< lg)
   ========================================================================== */

interface MobileMilestoneRowProps {
  milestone: TimelineMilestone;
  progress: MotionValue<number>;
  threshold: number;
  prefersReduced: boolean;
  nodeRef: (el: HTMLDivElement | null) => void;
}

function MobileMilestoneRow({
  milestone,
  progress,
  threshold,
  prefersReduced,
  nodeRef,
}: MobileMilestoneRowProps) {
  const Icon = milestoneIcons[milestone.year] || Building2;
  const isFinalPhase = milestone.year === "2024";

  const revealStart = Math.max(0, threshold - 0.08);
  const opacity = useTransform(progress, [revealStart, threshold], [0, 1]);
  const y = useTransform(progress, [revealStart, threshold], [20, 0]);

  const [isActive, setIsActive] = React.useState(prefersReduced);

  React.useEffect(() => {
    if (prefersReduced) return;
    const unsubscribe = progress.on("change", (latest) => {
      setIsActive(latest >= threshold - 0.02);
    });
    return () => unsubscribe();
  }, [progress, threshold, prefersReduced]);

  return (
    <div className="relative flex items-start gap-4 sm:gap-6 py-4">
      {/* Node Anchor */}
      <div
        ref={nodeRef}
        className="relative z-10 flex-shrink-0 pt-1"
      >
        <div
          className={`w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center transition-all duration-300 border-2 ${
            isActive
              ? "border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.5)] ring-2 ring-amber-400/20"
              : "border-slate-800 shadow-sm"
          }`}
        >
          {isActive && !prefersReduced && (
            <span
              className="absolute inset-0 rounded-full animate-ping opacity-35 bg-amber-400"
              style={{ animationDuration: "2.5s" }}
              aria-hidden="true"
            />
          )}
          <Icon
            className={`w-4 h-4 transition-colors duration-300 ${
              isActive
                ? "text-amber-400"
                : "text-slate-500"
            }`}
          />
        </div>
      </div>

      {/* Content */}
      <motion.div
        style={prefersReduced ? undefined : { opacity, y }}
        className="flex-1 space-y-3 pb-4"
      >
        {/* Year Header */}
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="text-2xl font-serif font-medium text-white">
            {milestone.year}
          </span>
          <span
            className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${
              isActive
                ? "text-amber-300 bg-amber-950/60 border-amber-500/40"
                : "text-slate-400 bg-slate-900 border-slate-800"
            }`}
          >
            PHASE {milestone.phaseNumber} &bull; {milestone.badge}
          </span>
        </div>

        {/* Card with Structural Achievements */}
        <MilestoneCard
          milestone={milestone}
          isActive={isActive}
          isFinalPhase={isFinalPhase}
        />
      </motion.div>
    </div>
  );
}

/* ==========================================================================
   MAIN COMPANY TIMELINE EXPORT: INTERACTIVE MILESTONES SPINE
   ========================================================================== */

export function CompanyTimeline() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const desktopTimelineRef = React.useRef<HTMLDivElement>(null);
  const mobileTimelineRef = React.useRef<HTMLDivElement>(null);

  const desktopNodeRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const mobileNodeRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  const prefersReduced = useReducedMotionPreference();

  // Scroll Progress Tracking for the Timeline Section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end 65%"],
  });

  // Smooth spring-interpolated progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  });

  // State for Desktop Snaking Path Coordinates
  const [desktopPathData, setDesktopPathData] = React.useState<{
    pathD: string;
    startX: number;
    endX: number;
    endY: number;
    thresholds: number[];
  }>({
    pathD: "",
    startX: 0,
    endX: 0,
    endY: 0,
    thresholds: DEFAULT_THRESHOLDS,
  });

  // State for Mobile Rail Coordinates
  const [mobilePathData, setMobilePathData] = React.useState<{
    pathD: string;
    thresholds: number[];
  }>({
    pathD: "",
    thresholds: DEFAULT_THRESHOLDS,
  });

  // Calculate Responsive Desktop Snaking Path
  const calculateDesktopPath = React.useCallback(() => {
    const container = desktopTimelineRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const width = containerRect.width;
    const height = containerRect.height;
    if (width === 0 || height === 0) return;

    const coords: { x: number; y: number }[] = [];
    desktopNodeRefs.current.forEach((el) => {
      if (el) {
        const rect = el.getBoundingClientRect();
        coords.push({
          x: rect.left - containerRect.left + rect.width / 2,
          y: rect.top - containerRect.top + rect.height / 2,
        });
      }
    });

    if (coords.length < 2) return;

    const startX = width / 2;
    const c0 = coords[0];
    let d = `M ${startX} 0`;

    // Smooth Bezier from Top Center to Node 0
    d += ` C ${startX} ${c0.y * 0.4}, ${c0.x} ${c0.y * 0.6}, ${c0.x} ${c0.y}`;

    // Smooth Cubic Bezier Curves between alternating nodes
    for (let i = 0; i < coords.length - 1; i++) {
      const curr = coords[i];
      const next = coords[i + 1];
      const dy = next.y - curr.y;
      d += ` C ${curr.x} ${curr.y + dy * 0.5}, ${next.x} ${next.y - dy * 0.5}, ${next.x} ${next.y}`;
    }

    // Terminal curve past last node
    const last = coords[coords.length - 1];
    const endX = width / 2;
    const endY = last.y + 70;
    d += ` C ${last.x} ${last.y + 35}, ${endX} ${last.y + 50}, ${endX} ${endY}`;

    // Compute precise scroll arrival thresholds based on relative Y positions
    const thresholds = coords.map((c) =>
      Math.min(0.92, Math.max(0.08, c.y / height))
    );

    setDesktopPathData({
      pathD: d,
      startX,
      endX,
      endY,
      thresholds,
    });
  }, []);

  // Calculate Responsive Mobile Left Rail Path
  const calculateMobilePath = React.useCallback(() => {
    const container = mobileTimelineRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const height = containerRect.height;
    if (containerRect.width === 0 || height === 0) return;

    const coords: { x: number; y: number }[] = [];
    mobileNodeRefs.current.forEach((el) => {
      if (el) {
        const rect = el.getBoundingClientRect();
        coords.push({
          x: rect.left - containerRect.left + rect.width / 2,
          y: rect.top - containerRect.top + rect.height / 2,
        });
      }
    });

    if (coords.length === 0) return;

    const startX = coords[0].x;
    let d = `M ${startX} 0`;
    for (let i = 0; i < coords.length; i++) {
      d += ` L ${startX} ${coords[i].y}`;
    }
    const last = coords[coords.length - 1];
    d += ` L ${startX} ${last.y + 40}`;

    const thresholds = coords.map((c) =>
      Math.min(0.92, Math.max(0.08, c.y / height))
    );

    setMobilePathData({
      pathD: d,
      thresholds,
    });
  }, []);

  // Attach Resize Observers and recalculate coordinates
  React.useEffect(() => {
    calculateDesktopPath();
    calculateMobilePath();

    const handleResize = () => {
      calculateDesktopPath();
      calculateMobilePath();
    };

    window.addEventListener("resize", handleResize);

    let desktopObserver: ResizeObserver | null = null;
    let mobileObserver: ResizeObserver | null = null;

    if (typeof ResizeObserver !== "undefined") {
      if (desktopTimelineRef.current) {
        desktopObserver = new ResizeObserver(calculateDesktopPath);
        desktopObserver.observe(desktopTimelineRef.current);
      }
      if (mobileTimelineRef.current) {
        mobileObserver = new ResizeObserver(calculateMobilePath);
        mobileObserver.observe(mobileTimelineRef.current);
      }
    }

    const timer = setTimeout(() => {
      calculateDesktopPath();
      calculateMobilePath();
    }, 150);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (desktopObserver) desktopObserver.disconnect();
      if (mobileObserver) mobileObserver.disconnect();
      clearTimeout(timer);
    };
  }, [calculateDesktopPath, calculateMobilePath]);

  return (
    <section
      ref={sectionRef}
      id="company-timeline"
      aria-labelledby="timeline-heading"
      className="relative py-16 sm:py-20 lg:py-28 bg-slate-950 text-slate-100 border-b border-slate-800/80 overflow-hidden"
    >
      {/* Ambient Blueprint Grid */}
      <div
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-blueprint-grid-dark opacity-25 [mask-image:radial-gradient(ellipse_85%_70%_at_50%_50%,#000_65%,transparent_100%)]" />
        <div className="absolute top-1/3 -right-28 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.12)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute bottom-10 -left-28 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.10)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute top-8 left-8 font-mono text-xs text-amber-500/30 select-none">+</div>
        <div className="absolute top-8 right-8 font-mono text-xs text-cyan-400/30 select-none">+</div>
      </div>

      <Container width="wide" className="relative z-10 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <FadeIn direction="up" distance={16} delay={0.05}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-950/80 backdrop-blur-md border border-amber-500/40 text-xs font-mono tracking-widest text-amber-300 uppercase shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                EVOLUTION &amp; MILESTONES • INSTITUTIONAL ELEVATION
              </div>
              <h2 id="timeline-heading" className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                A Chronology of <span className="italic bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">Institutional Elevation</span>.
              </h2>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                From our origins in capital restructuring to multi-pillar advisory convergence across 28 Indian states, our trajectory reflects an uncompromising standard of regulatory rigor and technical execution.
              </p>
            </div>

            {/* Real-Time Interactive Badge */}
            <div className="hidden lg:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-950/60 text-amber-300 border border-amber-500/30 shadow-xs self-start lg:self-auto">
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              <span className="font-mono text-xs font-semibold text-amber-300">
                Interactive Milestones Spine
              </span>
            </div>
          </div>
        </FadeIn>

        {/* ============================================================
            DESKTOP / TABLET (>= lg): Interactive Illuminated Milestones Spine
            ============================================================ */}
        <div
          ref={desktopTimelineRef}
          className="hidden lg:block relative pt-4 pb-12"
        >
          {/* SVG Connector Layer: Illuminated Gold/Teal Light Spine */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
            aria-hidden="true"
          >
            <defs>
              {/* Cyan into Gold Brand Gradient */}
              <linearGradient
                id="timeline-gradient-desktop"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#06B6D4" />
                <stop offset="35%" stopColor="#38BDF8" />
                <stop offset="70%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#D97706" />
              </linearGradient>

              {/* Spine Radiant Light Halo Filter */}
              <filter
                id="spine-glow-desktop"
                x="-30%"
                y="-30%"
                width="160%"
                height="160%"
              >
                <feGaussianBlur stdDeviation="4.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Background Faint Dashed Path */}
            {desktopPathData.pathD && (
              <path
                d={desktopPathData.pathD}
                stroke="#334155"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                fill="none"
                strokeLinecap="round"
              />
            )}

            {/* Outer Radiant Light Halo (fills with glowing light as user scrolls) */}
            {desktopPathData.pathD && (
              <motion.path
                d={desktopPathData.pathD}
                stroke="url(#timeline-gradient-desktop)"
                strokeWidth="10"
                strokeOpacity="0.4"
                fill="none"
                strokeLinecap="round"
                filter="url(#spine-glow-desktop)"
                style={{
                  pathLength: prefersReduced ? 1 : smoothProgress,
                }}
              />
            )}

            {/* Core Intense Laser Light Stroke */}
            {desktopPathData.pathD && (
              <motion.path
                d={desktopPathData.pathD}
                stroke="url(#timeline-gradient-desktop)"
                strokeWidth="3.5"
                fill="none"
                strokeLinecap="round"
                style={{
                  pathLength: prefersReduced ? 1 : smoothProgress,
                }}
              />
            )}

            {/* Top Anchor Dot */}
            {desktopPathData.startX > 0 && (
              <circle
                cx={desktopPathData.startX}
                cy={0}
                r="5"
                fill="#06B6D4"
                className="transition-opacity"
              />
            )}

            {/* Bottom Terminal Cap */}
            {desktopPathData.endX > 0 && (
              <circle
                cx={desktopPathData.endX}
                cy={desktopPathData.endY}
                r="5"
                fill="#F59E0B"
                className="transition-opacity"
              />
            )}
          </svg>

          {/* Milestone Rows */}
          <div className="relative z-10 space-y-4">
            {companyTimeline.map((milestone, idx) => {
              const isEven = idx % 2 === 0;
              const threshold =
                desktopPathData.thresholds[idx] ?? DEFAULT_THRESHOLDS[idx];

              return (
                <DesktopMilestoneRow
                  key={milestone.year}
                  milestone={milestone}
                  isEven={isEven}
                  progress={smoothProgress}
                  threshold={threshold}
                  prefersReduced={prefersReduced}
                  nodeRef={(el) => {
                    desktopNodeRefs.current[idx] = el;
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* ============================================================
            MOBILE ONLY (< lg): Scroll-Driven Illuminated Vertical Rail
            ============================================================ */}
        <div
          ref={mobileTimelineRef}
          className="lg:hidden relative pt-2 pb-6"
        >
          {/* SVG Mobile Rail Layer */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="timeline-gradient-mobile"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#06B6D4" />
                <stop offset="40%" stopColor="#38BDF8" />
                <stop offset="75%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#D97706" />
              </linearGradient>

              <filter
                id="spine-glow-mobile"
                x="-30%"
                y="-30%"
                width="160%"
                height="160%"
              >
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Background Faint Dashed Rail */}
            {mobilePathData.pathD && (
              <path
                d={mobilePathData.pathD}
                stroke="#334155"
                strokeWidth="2"
                strokeDasharray="5 5"
                fill="none"
                strokeLinecap="round"
              />
            )}

            {/* Radiant Mobile Glow Halo */}
            {mobilePathData.pathD && (
              <motion.path
                d={mobilePathData.pathD}
                stroke="url(#timeline-gradient-mobile)"
                strokeWidth="8"
                strokeOpacity="0.4"
                fill="none"
                strokeLinecap="round"
                filter="url(#spine-glow-mobile)"
                style={{
                  pathLength: prefersReduced ? 1 : smoothProgress,
                }}
              />
            )}

            {/* Core Scroll-Driven Mobile Rail */}
            {mobilePathData.pathD && (
              <motion.path
                d={mobilePathData.pathD}
                stroke="url(#timeline-gradient-mobile)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                style={{
                  pathLength: prefersReduced ? 1 : smoothProgress,
                }}
              />
            )}
          </svg>

          {/* Milestone List */}
          <div className="relative z-10 space-y-4">
            {companyTimeline.map((milestone, idx) => {
              const threshold =
                mobilePathData.thresholds[idx] ?? DEFAULT_THRESHOLDS[idx];

              return (
                <MobileMilestoneRow
                  key={milestone.year}
                  milestone={milestone}
                  progress={smoothProgress}
                  threshold={threshold}
                  prefersReduced={prefersReduced}
                  nodeRef={(el) => {
                    mobileNodeRefs.current[idx] = el;
                  }}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
