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
 * Lucide icon mapping aligned with institutional phase steps:
 * - 01 (Assessment & Planning): Rocket
 * - 02 (Loans & Subsidies): TrendingUp
 * - 03 (Licenses & Quality): Cpu
 * - 04 (Software & Scaling): Building2
 */
const milestoneIcons: Record<string, LucideIcon> = {
 "01": Rocket,
 "02": TrendingUp,
 "03": Cpu,
 "04": Building2,
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
 className={`p-7 sm:p-8 rounded-3xl  border transition-all duration-500 shadow-[0_16px_40px_rgba(15,23,42,0.08)] ${
        isActive
          ? isFinalPhase
            ? "bg-white/95 border-amber-500/80 shadow-[0_20px_50px_rgba(245,158,11,0.2)] ring-2 ring-amber-400/40"
 : "bg-white/95 border-amber-500/60 shadow-[0_20px_45px_rgba(14,165,233,0.16)] ring-2 ring-amber-400/30"
 : "bg-white/75 border-white/90 hover:border-amber-400/50"
 }`}
    >
      {/* Badge & Pillar Tag */}
      <div className="flex items-center justify-between gap-2 mb-3">
 <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded border text-amber-800 bg-amber-50 border-amber-300 shadow-2xs">
 Stage {milestone.phaseNumber} &bull; {milestone.badge}
 </span>
 <span className="text-[11px] font-mono text-slate-600 font-medium">
 {milestone.pillarTag}
 </span>
 </div>

 {/* Workflow Step Identifier */}
 {milestone.workflowStep && (
 <div className="text-[11px] font-mono font-bold text-amber-700 uppercase tracking-wide mb-1 flex items-center gap-1.5">
 <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
 <span>{milestone.workflowStep}</span>
 </div>
 )}

 {/* Subtitle & Title */}
 <div>
 <span className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider block">
 {milestone.subtitle}
 </span>
 <h3 className="font-serif text-2xl font-bold text-slate-900 leading-snug mt-1">
 {milestone.title}
 </h3>
 </div>

 {/* Narrative Description */}
 <p className="text-xs sm:text-sm text-slate-700 font-sans leading-relaxed mt-3">
 {milestone.description}
 </p>

 {/* Structural Achievement Callout */}
 <div className="mt-5 p-4 rounded-2xl border bg-white/95 border-[#A6CCEA]/70 shadow-2xs">
 <div className="flex items-center justify-between gap-3 flex-wrap">
 <div className="flex items-center gap-2">
 <span
 className={`w-2 h-2 rounded-full ${
                isActive
                  ? "bg-amber-500 animate-pulse"
 : "bg-slate-400"
 }`}
            />
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider font-bold text-slate-700">
 {milestone.metricLabel}
 </span>
 </div>

 <div className="font-mono text-sm sm:text-base font-bold tabular-nums px-2.5 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-300">
 {milestone.metric}
 </div>
 </div>

 <div className="pt-2 flex items-start gap-1.5 text-xs font-sans text-slate-800 font-medium leading-snug">
 <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
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
 const Icon = milestoneIcons[milestone.phaseNumber] || Building2;
 const isFinalPhase = milestone.phaseNumber === "04";

 // Smooth progressive reveal as scroll line arrives at this threshold
 const revealStart = Math.max(0, threshold - 0.12);
 const opacity = useTransform(progress, [revealStart, threshold], [0.35, 1]);
 const nodeScale = useTransform(progress, [revealStart, threshold], [0.85, 1]);

 // Reactive node activation state
 const [isActive, setIsActive] = React.useState(prefersReduced);

 React.useEffect(() => {
 if (prefersReduced) return;
 const unsubscribe = progress.on("change", (latest) => {
 const nextActive = latest >= threshold - 0.02;
 setIsActive((prev) => (prev !== nextActive ? nextActive : prev));
 });
 return () => unsubscribe();
 }, [progress, threshold, prefersReduced]);

 return (
 <div className="relative grid grid-cols-12 items-center gap-6 lg:gap-8 py-8 lg:py-12">
 {/* Left Column (5 cols) */}
 <div className={`col-span-5 relative ${isEven ? "text-right" : "text-right pr-6"}`}>
 {isEven ? (
 <motion.div
 style={
 prefersReduced
 ? undefined
 : {
 opacity,
 }
 }
 className="w-full text-left relative"
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
 }
 }
 className="space-y-1 select-none"
 >
 <span className="text-5xl lg:text-6xl font-serif font-bold text-slate-900 block tracking-tight">
 Step {milestone.phaseNumber}
 </span>
 <span className="font-mono text-xs font-bold uppercase tracking-widest text-amber-700 block">
 {milestone.badge}
 </span>
 <span className="font-mono text-xs text-slate-600 font-medium block">
 {milestone.pillarTag}
 </span>
 </motion.div>
 )}
 </div>

 {/* Center Node Column (2 cols) — Aligned Dead Center on the Straight Line */}
 <div className="col-span-2 flex items-center justify-center relative">
 {/* Horizontal Connector Hairline to Card */}
 <div
 aria-hidden="true"
 className={`hidden lg:block absolute top-1/2 -translate-y-1/2 h-[2px] transition-all duration-500 pointer-events-none ${
            isEven
              ? "right-1/2 mr-6 w-12 sm:w-16 bg-gradient-to-l"
 : "left-1/2 ml-6 w-12 sm:w-16 bg-gradient-to-r"
 } ${
 isActive
 ? "from-amber-500/80 to-amber-400/20 shadow-[0_0_8px_rgba(245,158,11,0.5)]"
 : "from-slate-300/60 to-transparent"
 }`}
        />

        <div
          ref={nodeRef}
          className="relative z-10 flex items-center justify-center"
 >
 <motion.div
 style={prefersReduced ? undefined : { scale: nodeScale }}
 className={`w-12 h-12 rounded-full bg-white flex items-center justify-center transition-all duration-300 border-2 ${
              isActive
                ? "border-amber-500 shadow-[0_0_24px_rgba(245,158,11,0.45)] ring-4 ring-amber-400/25"
 : "border-slate-300 shadow-sm"
 }`}
          >
            {/* Active Radiant Pulse Ring */}
            {isActive && !prefersReduced && (
              <span
                className="absolute inset-0 rounded-full animate-ping opacity-40 bg-amber-400"
 style={{ animationDuration: "2.5s" }}
 aria-hidden="true"
 />
 )}

 {/* Node Icon */}
 <Icon
 className={`w-5 h-5 relative z-10 transition-colors duration-300 ${
                isActive
                  ? "text-amber-600"
 : "text-slate-400"
 }`}
            />
          </motion.div>
        </div>
      </div>

      {/* Right Column (5 cols) */}
      <div className={`col-span-5 relative ${!isEven ? "text-left" : "text-left pl-6"}`}>
 {!isEven ? (
 <motion.div
 style={
 prefersReduced
 ? undefined
 : {
 opacity,
 }
 }
 className="w-full text-left relative"
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
 }
 }
 className="space-y-1 select-none"
 >
 <span className="text-5xl lg:text-6xl font-serif font-bold text-slate-900 block tracking-tight">
 Step {milestone.phaseNumber}
 </span>
 <span className="font-mono text-xs font-bold uppercase tracking-widest text-amber-700 block">
 {milestone.badge}
 </span>
 <span className="font-mono text-xs text-slate-600 font-medium block">
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
 const Icon = milestoneIcons[milestone.phaseNumber] || Building2;
 const isFinalPhase = milestone.phaseNumber === "04";

 const revealStart = Math.max(0, threshold - 0.08);
 const opacity = useTransform(progress, [revealStart, threshold], [0.35, 1]);

 const [isActive, setIsActive] = React.useState(prefersReduced);

 React.useEffect(() => {
 if (prefersReduced) return;
 const unsubscribe = progress.on("change", (latest) => {
 const nextActive = latest >= threshold - 0.02;
 setIsActive((prev) => (prev !== nextActive ? nextActive : prev));
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
 className={`w-10 h-10 rounded-full bg-white flex items-center justify-center transition-all duration-300 border-2 ${
            isActive
              ? "border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.4)] ring-2 ring-amber-400/20"
 : "border-slate-300 shadow-sm"
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
                ? "text-amber-600"
 : "text-slate-400"
 }`}
          />
        </div>
      </div>

      {/* Content */}
      <motion.div
        style={prefersReduced ? undefined : { opacity }}
        className="flex-1 space-y-3 pb-4"
 >
 {/* Step Header */}
 <div className="flex flex-wrap items-center gap-2.5">
 <span className="text-2xl font-serif font-bold text-slate-900">
 Step {milestone.phaseNumber}
 </span>
 <span
 className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded border ${
              isActive
                ? "text-amber-800 bg-amber-50 border-amber-300 shadow-2xs"
 : "text-slate-600 bg-white border-slate-300 shadow-2xs"
 }`}
          >
            {milestone.badge}
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
  const timelineContainerRef = React.useRef<HTMLDivElement>(null);
  const desktopTimelineRef = React.useRef<HTMLDivElement>(null);
  const mobileTimelineRef = React.useRef<HTMLDivElement>(null);

  const desktopNodeRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const mobileNodeRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  const prefersReduced = useReducedMotionPreference();

  // Scroll Progress Tracking directly on the Timeline Container for pixel precision
  const { scrollYProgress } = useScroll({
    target: timelineContainerRef,
    offset: ["start 65%", "end 65%"],
 });

 // Fast, instant responsive progress for lag-free straight line tracking
 const smoothProgress = useSpring(scrollYProgress, {
 stiffness: 350,
 damping: 35,
 restDelta: 0.001,
 });

 // State for Desktop Straight Line Coordinates
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

 // State for Mobile Left Rail Coordinates
 const [mobilePathData, setMobilePathData] = React.useState<{
 pathD: string;
 thresholds: number[];
 }>({
 pathD: "",
 thresholds: DEFAULT_THRESHOLDS,
 });

 // Calculate Responsive Desktop Straight Line Path
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

 // Pure straight vertical line down the exact center
 const startX = width / 2;
 const last = coords[coords.length - 1];
 const endY = last.y + 60;

 const d = `M ${startX} 0 L ${startX} ${endY}`;

 // Compute precise scroll arrival thresholds based on relative Y positions
 const thresholds = coords.map((c) =>
 Math.min(0.95, Math.max(0.05, c.y / height))
 );

 setDesktopPathData({
 pathD: d,
 startX,
 endX: startX,
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
 const last = coords[coords.length - 1];
 const endY = last.y + 40;

 const d = `M ${startX} 0 L ${startX} ${endY}`;

 const thresholds = coords.map((c) =>
 Math.min(0.95, Math.max(0.05, c.y / height))
 );

 setMobilePathData({
 pathD: d,
 thresholds,
 });
 }, []);

 // Traveling Glowing Tip Y-coordinate for Desktop
 const tipY = useTransform(
 smoothProgress,
 [0, 1],
 [0, desktopPathData.endY || 1000]
 );
 const tipOpacity = useTransform(
 smoothProgress,
 [0, 0.02, 0.98, 1],
 [0, 1, 1, 0.8]
 );

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
 className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-[#D5E7F4] via-[#C6E0F2] to-[#B8D7EE] text-slate-900 border-b border-[#A6CCEA] overflow-hidden"
 >
 {/* Precision architectural ambient background matching home page institutional narrative */}
 <div
 className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
 aria-hidden="true"
 >
 <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-300/80 to-transparent" />
 <div className="absolute inset-0 [background-image:radial-gradient(#94A3B8_1px,transparent_1px)] [background-size:32px_32px] opacity-35 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_40%,#000_50%,transparent_100%)]" />
 <div className="absolute top-1/4 -left-32 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.1)_0%,transparent_70%)]" />
 <div className="absolute bottom-1/4 -right-32 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.06)_0%,transparent_70%)]" />
 </div>

 <Container width="wide" className="relative z-10 space-y-12 sm:space-y-16">
 {/* Section Header */}
 <FadeIn direction="up" distance={16} delay={0.05}>
 <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
 <div className="max-w-3xl space-y-4">
 <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#A6CCEA] text-xs font-mono tracking-widest text-slate-800 uppercase shadow-2xs font-semibold">
 <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
 EVOLUTION &amp; MILESTONES • INSTITUTIONAL ELEVATION
 </div>
 <h2 id="timeline-heading" className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
 A Simple, 4-Step <span className="italic text-amber-600 font-serif">Company Workflow</span>.
 </h2>
 <p className="text-base sm:text-lg text-slate-800 max-w-2xl leading-relaxed font-medium">
 Here is exactly how we work with your business: from initial financial planning and collateral-free bank loans to legal compliance and digital sales growth.
 </p>
 </div>

 {/* Real-Time Interactive Badge */}
 <div className="hidden lg:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/90 text-amber-700 border border-[#A6CCEA] shadow-2xs self-start lg:self-auto">
 <Sparkles className="w-4 h-4 text-amber-600 animate-pulse" />
 <span className="font-mono text-xs font-bold text-amber-700">
 Straight-Line Workflow Spine
 </span>
 </div>
 </div>
 </FadeIn>

 {/* ============================================================
 CONTAINER WRAPPER: Unified scroll-tracking anchor
 ============================================================ */}
 <div ref={timelineContainerRef} className="relative">
 {/* ============================================================
 DESKTOP / TABLET (>= lg): Straight-Line Illuminated Workflow Spine
 ============================================================ */}
 <div
 ref={desktopTimelineRef}
 className="hidden lg:block relative pt-4 pb-12"
 >
 {/* SVG Connector Layer: Illuminated Straight Vertical Light Spine */}
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
 <stop offset="0%" stopColor="#0284C7" />
 <stop offset="35%" stopColor="#0EA5E9" />
 <stop offset="70%" stopColor="#D97706" />
 <stop offset="100%" stopColor="#B45309" />
 </linearGradient>
 </defs>

 {/* Background Faint Dashed Straight Line Track */}
 {desktopPathData.pathD && (
 <path
 d={desktopPathData.pathD}
 stroke="#94A3B8"
 strokeWidth="2.5"
 strokeDasharray="6 6"
 fill="none"
 strokeLinecap="round"
 />
 )}

 {/* Outer Radiant Light Halo (fills with glowing light as user scrolls down) */}
 {desktopPathData.pathD && (
 <motion.path
 d={desktopPathData.pathD}
 stroke="url(#timeline-gradient-desktop)"
 strokeWidth="9"
 strokeOpacity="0.22"
 fill="none"
 strokeLinecap="round"
 style={{
 pathLength: prefersReduced ? 1 : smoothProgress,
 }}
 />
 )}

 {/* Core Intense Straight Laser Light Stroke */}
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

 {/* Traveling Glowing Beacon that moves straight down along the line */}
 {!prefersReduced && desktopPathData.endY > 0 && (
 <motion.circle
 cx={desktopPathData.startX}
 cy={tipY}
 r="6"
 fill="#D97706"
 className="drop-shadow-[0_0_8px_rgba(217,119,6,0.7)]"
 style={{
 opacity: tipOpacity,
 }}
 />
 )}

 {/* Top Anchor Dot */}
 {desktopPathData.startX > 0 && (
 <circle
 cx={desktopPathData.startX}
 cy={0}
 r="5"
 fill="#0284C7"
 className="transition-opacity"
 />
 )}

 {/* Bottom Terminal Cap */}
 {desktopPathData.endX > 0 && (
 <circle
 cx={desktopPathData.endX}
 cy={desktopPathData.endY}
 r="5"
 fill="#D97706"
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
 key={milestone.phaseNumber}
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
 MOBILE ONLY (< lg): Straight-Line Left Rail Workflow
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
 <stop offset="0%" stopColor="#0284C7" />
 <stop offset="40%" stopColor="#0EA5E9" />
 <stop offset="75%" stopColor="#D97706" />
 <stop offset="100%" stopColor="#B45309" />
 </linearGradient>

 </defs>

 {/* Background Faint Dashed Rail */}
 {mobilePathData.pathD && (
 <path
 d={mobilePathData.pathD}
 stroke="#94A3B8"
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
 strokeWidth="7"
 strokeOpacity="0.22"
 fill="none"
 strokeLinecap="round"
 style={{
 pathLength: prefersReduced ? 1 : smoothProgress,
 }}
 />
 )}

 {/* Core Scroll-Driven Mobile Straight Rail */}
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
                    key={milestone.phaseNumber}
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
        </div>
      </Container>
    </section>
  );
}
