"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Layers, ShieldCheck, TrendingUp } from "lucide-react";
import type { CaseStudyFrontmatter } from "@/types/case-study";
import { cn } from "@/lib/utils";

export interface StoryCardProps {
  study: CaseStudyFrontmatter;
  featured?: boolean;
  className?: string;
}

const storyImages: Record<string, { src: string; alt: string }> = {
  "cgtmse-cnc-expansion": {
    src: "/img/practice-capital.jpg",
    alt: "Indian automated CNC machining plant",
  },
  "aadhithya-energy-digital-launch": {
    src: "/img/aaditthya_filling_station.png",
    alt: "Aaditthya filling station and clean energy retail outlet",
  },
  "heavy-fabrication-iso-compliance": {
    src: "/img/practice-compliance.jpg",
    alt: "Industrial quality testing and ISO certification inspection",
  },
  "pmegp-agro-food-processing": {
    src: "/img/pal_and_sons.png",
    alt: "Pal and Sons Agro food processing facility",
  },
  "vedanta-cosmetics-pmegp": {
    src: "/img/vedanta_cosmetic.jpg",
    alt: "Vedanta cosmetics manufacturing plant",
  },
  "vishwam-pandya-enterprises": {
    src: "/img/vishwam_enterprises.jpg",
    alt: "Vishwam Pandya enterprise facility",
  },
};

function CategoryIcon({ category }: { category: string }) {
  if (category === "funding") return <TrendingUp className="h-3.5 w-3.5 text-[#0891B2]" />;
  if (category === "compliance") return <ShieldCheck className="h-3.5 w-3.5 text-[#0891B2]" />;
  if (category === "digital") return <Layers className="h-3.5 w-3.5 text-[#0891B2]" />;
  return <Award className="h-3.5 w-3.5 text-[#0891B2]" />;
}

export function StoryCard({ study, className }: StoryCardProps) {
  const imageInfo = storyImages[study.slug] ?? {
    src: study.coverImage || "/img/hero-enterprise.jpg",
    alt: study.title,
  };
  const metric = study.statValue ?? study.dealTombstone?.highlightMetric ?? "Verified Outcome";
  const sector = study.dealTombstone?.industryVertical ?? study.category.toUpperCase();

  return (
    <article
      className={cn(
        "group relative min-w-0 rounded-2xl overflow-hidden border border-white/60 bg-white/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_10px_30px_rgba(8,145,178,0.12)] [transform:translateZ(0)] transition-all duration-300 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_18px_40px_rgba(8,145,178,0.18)] hover:border-cyan-300",
        className
      )}
      aria-label={`Case study: ${study.title}`}
    >
      <div className="relative h-[480px] sm:h-[500px] w-full overflow-hidden">
        {/* Layer 1: Prominent Clear Picture */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={imageInfo.src}
            alt={imageInfo.alt}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 motion-reduce:transition-none"
          />
          {/* Subtle bottom vignette so resting title/badge is crisp, but 70% of image stays crystal clear */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080909]/90 via-[#080909]/30 to-transparent transition-opacity duration-500 group-hover:opacity-60" />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
        </div>

        {/* Top-Right Category Pill (Fixed, floating on top corner) */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md border border-white/60 text-[#0891B2] shadow-sm">
            <CategoryIcon category={study.category} />
            <span>{study.category}</span>
          </span>
        </div>

        {/* Layer 2: Resting State at Bottom (Visible on picture before hover) */}
        <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6 text-left transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-0 group-hover:translate-y-4 group-focus-within:opacity-0 group-focus-within:translate-y-4 pointer-events-none">
          <div className="space-y-2">
            <p className="text-[11px] font-mono tracking-widest text-cyan-300 uppercase font-semibold">
              {sector}
            </p>
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white leading-snug line-clamp-2 drop-shadow-md">
              {study.title}
            </h3>

            {/* Resting Metric Pill */}
            <div className="pt-2 flex items-center justify-between">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-white font-mono text-xs font-bold shadow-xs">
                <span>{metric}</span>
                <span className="text-[10px] uppercase font-normal text-white/80">&bull; Verified</span>
              </span>

              <span className="text-[11px] font-mono text-cyan-200 flex items-center gap-1">
                <span>Hover for details</span>
                <span className="animate-bounce">&uarr;</span>
              </span>
            </div>
          </div>
        </div>

        {/* Layer 3: Slide-Up Content Drawer (Slides from lower to up on hover!) */}
        <div className="absolute inset-x-0 bottom-0 z-20 transform transition-transform duration-500 ease-out translate-y-full group-hover:translate-y-0 group-focus-within:translate-y-0 p-5 sm:p-6 text-left rounded-t-2xl bg-white/95 backdrop-blur-md border-t border-white/80 shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_-10px_30px_rgba(0,0,0,0.18)] max-h-[85%] overflow-y-auto no-scrollbar">
          <div className="space-y-3.5">
            {/* Header in Drawer */}
            <div className="flex items-center justify-between gap-3 border-b border-cyan-100 pb-2.5">
              <span className="text-[10px] font-mono tracking-widest text-[#0891B2] uppercase font-bold">
                {sector}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-700 font-semibold px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200">
                Verified Mandate
              </span>
            </div>

            {/* Headline */}
            <h3 className="font-serif text-lg sm:text-xl font-bold leading-snug text-[#181226]">
              {study.title}
            </h3>

            {/* Highlight Metric Card */}
            <div className="flex items-end justify-between gap-4 rounded-xl border border-cyan-100 bg-cyan-50/70 p-3">
              <div>
                <span className="block text-[10px] font-mono uppercase tracking-widest text-[#64748B]">
                  {study.statLabel ?? "Verified Mandate"}
                </span>
                <p className="mt-0.5 font-serif text-2xl sm:text-3xl font-bold leading-none text-[#0891B2]">
                  {metric}
                </p>
              </div>
              <span className="text-[10px] font-mono text-[#0E7490] font-semibold">
                {study.client || "Confidential Enterprise"}
              </span>
            </div>

            {/* Executive Summary */}
            <p className="text-xs sm:text-sm leading-relaxed text-[#475569] font-sans line-clamp-3">
              {study.summary}
            </p>

            {/* Primary Verified Outcome */}
            {study.outcomes?.[0] && (
              <p className="line-clamp-2 border-l-2 border-[#0891B2] pl-2.5 text-xs leading-relaxed text-[#181226] font-sans">
                {study.outcomes[0]}
              </p>
            )}

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href={`/success-stories/${study.slug}`}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#0AA5C7]/90 via-[#0891B2]/95 to-[#0E7490]/95 backdrop-blur-md border border-white/25 text-white text-xs font-semibold tracking-wide font-sans shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_4px_16px_rgba(8,145,178,0.22)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_6px_20px_rgba(8,145,178,0.32)] transition-all hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0891B2] [transform:translateZ(0)]"
              >
                <span>Read Full Memorandum</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
