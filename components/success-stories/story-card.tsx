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
  "cgtmse-cnc-expansion": { src: "/img/practice-capital.jpg", alt: "Indian automated CNC machining plant" },
  "aadhithya-energy-digital-launch": { src: "/img/practice-growth.jpg", alt: "Clean energy commercial retailer strategy session" },
  "heavy-fabrication-iso-compliance": { src: "/img/practice-compliance.jpg", alt: "Industrial quality testing and ISO certification inspection" },
  "pmegp-agro-food-processing": { src: "/img/practice-capital.jpg", alt: "Agro food processing facility" },
};

function CategoryIcon({ category }: { category: string }) {
  if (category === "funding") return <TrendingUp className="h-4 w-4 text-[#C79A4A]" />;
  if (category === "compliance") return <ShieldCheck className="h-4 w-4 text-[#C79A4A]" />;
  if (category === "digital") return <Layers className="h-4 w-4 text-[#C79A4A]" />;
  return <Award className="h-4 w-4 text-[#C79A4A]" />;
}

export function StoryCard({ study, featured = false, className }: StoryCardProps) {
  const imageInfo = storyImages[study.slug] ?? { src: "/img/hero-enterprise.jpg", alt: study.title };
  const metric = study.statValue ?? study.dealTombstone?.highlightMetric ?? "Verified Outcome";

  return (
    <article
      className={cn(
        "group relative min-w-0",
        className
      )}
      aria-label={`Case study: ${study.title}`}
    >
      <div className="relative min-h-[430px] overflow-hidden rounded-2xl border border-cyan-100 bg-white shadow-[0_10px_30px_rgba(8,145,178,0.12)]">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={imageInfo.src}
            alt={imageInfo.alt}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className="object-cover object-center transition-[filter,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:blur-[4px] group-focus-within:scale-105 group-focus-within:blur-[4px] motion-reduce:transition-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080909] via-[#080909]/40 to-transparent" />
          <div className="absolute inset-0 bg-[#080909]/0 transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-[#080909]/15 group-focus-within:bg-[#080909]/15 motion-reduce:transition-none" />
        </div>

        <div className="absolute inset-x-0 bottom-0 z-10 translate-y-full border-t border-cyan-200 bg-white/85 p-5 text-left backdrop-blur-md transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-focus-within:translate-y-0 sm:p-6 motion-reduce:transition-none">
          <div className="space-y-4">
            <div className="mb-3 flex items-center justify-between gap-3">
              <span className="text-[11px] font-mono tracking-widest text-[#0891B2] uppercase font-bold">
                {study.category}
              </span>
              <CategoryIcon category={study.category} />
            </div>

            <p className="mb-2 text-[11px] font-mono tracking-widest text-[#0E7490] uppercase">
              {study.dealTombstone?.industryVertical ?? study.category}
            </p>

            <h3 className="line-clamp-3 font-serif text-xl sm:text-2xl leading-[1.14] text-[#181226] font-semibold">
              {study.title}
            </h3>

            <div className="flex items-end justify-between gap-4 rounded-xl border border-cyan-100 bg-cyan-50/70 p-3.5">
              <div>
                <span className="block text-[10px] font-mono uppercase tracking-widest text-[#64748B]">
                  {study.statLabel ?? "Verified Mandate"}
                </span>
                <p className="mt-1 font-serif text-3xl font-bold leading-none text-[#0891B2] sm:text-4xl">
                  {metric}
                </p>
              </div>
              <span className="rounded border border-cyan-200 bg-cyan-100 px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-[#0E7490]">
                Verified
              </span>
            </div>

            <p className="line-clamp-4 text-xs sm:text-sm leading-relaxed text-[#475569] font-sans">
              {study.summary}
            </p>

            {study.outcomes?.[0] && (
              <p className="line-clamp-2 border-l-2 border-[#0891B2] pl-3 text-xs leading-relaxed text-[#181226]">
                {study.outcomes[0]}
              </p>
            )}
          </div>

          <Link
            href={`/success-stories/${study.slug}`}
            className="mt-4 inline-flex items-center justify-between gap-3 border-t border-cyan-200 pt-3.5 text-xs font-mono uppercase tracking-wider text-[#0891B2] hover:text-[#0E7490] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0891B2] transition-colors"
          >
            <span className="font-bold">Read Full Memorandum</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
