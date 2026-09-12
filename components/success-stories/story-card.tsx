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
  "cgtmse-george-martin-jose": {
    src: "/img/practice-capital.jpg",
    alt: "George Martin Jose enterprise facility",
  },
  "cgtmse-cnc-expansion": {
    src: "/img/practice-capital.jpg",
    alt: "George Martin Jose enterprise facility",
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
  "pal-and-sons-agro": {
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
  "cgtmse-goldi-kirana": {
    src: "/img/practice-growth.jpg",
    alt: "Goldi Kirana Store retail facility",
  },
  "goldi-kirana-store": {
    src: "/img/practice-growth.jpg",
    alt: "Goldi Kirana Store retail facility",
  },
};

function CategoryIcon({ category }: { category: string }) {
  if (category === "funding") return <TrendingUp className="h-3.5 w-3.5 text-amber-600" />;
  if (category === "compliance") return <ShieldCheck className="h-3.5 w-3.5 text-amber-600" />;
  if (category === "digital") return <Layers className="h-3.5 w-3.5 text-amber-600" />;
  return <Award className="h-3.5 w-3.5 text-amber-600" />;
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
        "group relative min-w-0 rounded-3xl overflow-hidden border border-white/90 bg-white/80 shadow-[0_16px_40px_rgba(15,23,42,0.12)] [transform:translateZ(0)] transition-all duration-300 hover:shadow-[0_24px_50px_rgba(14,165,233,0.2)] hover:border-amber-400/60",
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
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1329]/95 via-[#0B1329]/40 to-transparent transition-opacity duration-500 group-hover:opacity-60" />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
        </div>

        {/* Top-Right Category Pill (Fixed, floating on top corner) */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md border border-[#A6CCEA] text-slate-800 shadow-sm">
            <CategoryIcon category={study.category} />
            <span>{study.category}</span>
          </span>
        </div>

        {/* Layer 2: Resting State at Bottom (Visible on picture before hover) */}
        <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6 text-left transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-0 group-hover:translate-y-4 group-focus-within:opacity-0 group-focus-within:translate-y-4 pointer-events-none">
          <div className="space-y-2">
            <p className="text-[11px] font-mono tracking-widest text-amber-400 uppercase font-semibold">
              {sector}
            </p>
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white leading-snug line-clamp-2 drop-shadow-md">
              {study.title}
            </h3>

            {/* Resting Metric Pill */}
            <div className="pt-2 flex items-center justify-between">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-amber-500/40 text-amber-300 font-mono text-xs font-bold shadow-xs">
                <span>{metric}</span>
                <span className="text-[10px] uppercase font-normal text-amber-300/80">&bull; Verified</span>
              </span>

              <span className="text-[11px] font-mono text-amber-300 flex items-center gap-1">
                <span>Hover for details</span>
                <span className="animate-bounce">&uarr;</span>
              </span>
            </div>
          </div>
        </div>

        {/* Layer 3: Slide-Up Content Drawer (Slides from lower to up on hover!) */}
        <div className="absolute inset-x-0 bottom-0 z-20 transform transition-transform duration-500 ease-out translate-y-full group-hover:translate-y-0 group-focus-within:translate-y-0 p-5 sm:p-6 text-left rounded-t-3xl bg-white/95 backdrop-blur-xl border-t border-[#A6CCEA] shadow-[0_-10px_30px_rgba(15,23,42,0.15)] max-h-[85%] overflow-y-auto no-scrollbar text-slate-900">
          <div className="space-y-3.5">
            {/* Header in Drawer */}
            <div className="flex items-center justify-between gap-3 border-b border-slate-200 pb-2.5">
              <span className="text-[10px] font-mono tracking-widest text-amber-700 uppercase font-bold">
                {sector}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-amber-800 font-bold px-2 py-0.5 rounded-full bg-amber-50 border border-amber-300">
                Verified Mandate
              </span>
            </div>

            {/* Headline */}
            <h3 className="font-serif text-lg sm:text-xl font-bold leading-snug text-slate-900">
              {study.title}
            </h3>

            {/* Highlight Metric Card */}
            <div className="flex items-end justify-between gap-4 rounded-xl border border-slate-200/90 bg-slate-50/90 p-3">
              <div>
                <span className="block text-[10px] font-mono uppercase tracking-widest text-slate-500 font-semibold">
                  {study.statLabel ?? "Verified Mandate"}
                </span>
                <p className="mt-0.5 font-serif text-2xl sm:text-3xl font-bold leading-none text-amber-700">
                  {metric}
                </p>
              </div>
              <span className="text-[10px] font-mono text-slate-600 font-semibold">
                {study.client || "Confidential Enterprise"}
              </span>
            </div>

            {/* Executive Summary */}
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700 font-sans line-clamp-3 font-medium">
              {study.summary}
            </p>

            {/* Primary Verified Outcome */}
            {study.outcomes?.[0] && (
              <p className="line-clamp-2 border-l-4 border-amber-500 pl-2.5 text-xs leading-relaxed text-slate-800 font-sans font-medium bg-amber-50/60 py-1 rounded-r-lg">
                {study.outcomes[0]}
              </p>
            )}

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href={`/success-stories/${study.slug}`}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-b from-slate-900/90 via-slate-900/95 to-slate-950/95 text-white text-xs font-bold tracking-wide font-sans border border-white/20 shadow-sm hover:border-white/40 transition-all hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 [transform:translateZ(0)]"
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

