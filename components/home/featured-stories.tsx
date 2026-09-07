import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Layers,
  Award,
} from "lucide-react";
import { getFeaturedCaseStudies } from "@/lib/mdx";
import type { CaseStudyFrontmatter } from "@/types/case-study";
import { Container } from "@/components/shared/container";
import { LinkButton } from "@/components/ui/link-button";
import { cn } from "@/lib/utils";

const storyImages: Record<string, { src: string; alt: string }> = {
  "cgtmse-cnc-expansion": {
    src: "/img/practice-capital.jpg",
    alt: "Indian automated CNC machining plant financed via sovereign debt",
  },
  "aadhithya-energy-digital-launch": {
    src: "/img/practice-growth.jpg",
    alt: "Clean energy commercial retailer executive boardroom strategy",
  },
  "heavy-fabrication-iso-compliance": {
    src: "/img/practice-compliance.jpg",
    alt: "Indian industrial fabrication quality testing and ISO certification inspection",
  },
  "pmegp-agro-food-processing": {
    src: "/img/practice-capital.jpg",
    alt: "Agro food processing facility modern production line",
  },
};

function CategoryIcon({ category, className }: { category: string; className?: string }) {
  switch (category) {
    case "funding":
      return <TrendingUp className={className} />;
    case "compliance":
      return <ShieldCheck className={className} />;
    case "digital":
      return <Layers className={className} />;
    default:
      return <Award className={className} />;
  }
}

function MagazineStorySpread({
  study,
  index,
  total,
}: {
  study: CaseStudyFrontmatter;
  index: number;
  total: number;
}) {
  const isReversed = index % 2 === 1;
  const imageInfo = storyImages[study.slug] || {
    src: "/img/hero-enterprise.jpg",
    alt: study.title,
  };

  const metric = study.statValue || study.dealTombstone?.highlightMetric || "Verified Mandate";
  const metricSub = study.statLabel || study.dealTombstone?.highlightSubtitle || "Institutional Structure";
  const sector = study.dealTombstone?.industryVertical || study.category.toUpperCase();

  return (
    <article
      aria-label={`Case Study: ${study.title}`}
      className="group relative rounded-3xl bg-white border border-purple-200/90 hover:border-[#7C3AED]/60 transition-all duration-500 overflow-hidden shadow-[0_12px_40px_-10px_rgba(88,28,135,0.08),0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_-12px_rgba(88,28,135,0.14)]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-8 lg:p-12">
        {/* ============================================================
            PHOTOGRAPHIC FRAME (Alternates Left / Right on Desktop)
            ============================================================ */}
        <div
          className={cn(
            "lg:col-span-6 relative aspect-[16/10] sm:aspect-[4/3] w-full rounded-2xl overflow-hidden border border-purple-200/80 bg-purple-50",
            isReversed ? "lg:order-2" : "lg:order-1"
          )}
        >
          {/* Blueprint Corner Crosshairs */}
          <div className="absolute top-2 left-2 font-mono text-xs text-[#581C87]/40 z-30 select-none">+</div>
          <div className="absolute bottom-2 right-2 font-mono text-xs text-[#581C87]/40 z-30 select-none">+</div>

          <Image
            src={imageInfo.src}
            alt={imageInfo.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 600px"
            className="object-cover object-center transform transition-transform duration-1000 group-hover:scale-[1.03]"
          />

          {/* Cinematic Luminance Mask */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080909]/85 via-transparent to-[#080909]/20 pointer-events-none" />
          <div className="absolute inset-0 bg-noise pointer-events-none" />

          {/* Pinned Top Badge */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-md bg-white/95 backdrop-blur-md border border-purple-100/90 text-[10px] font-mono text-[#181226] uppercase tracking-wider flex items-center gap-1.5 shadow-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#581C87]" />
              <span>CASE {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
            </span>
          </div>

          {/* Bottom Mandate Realization Overlay */}
          <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between gap-2">
            <div className="px-3 py-1.5 rounded-md bg-white/95 backdrop-blur-md border border-purple-100/90 text-xs font-mono text-[#581C87] shadow-xs">
              <span className="font-semibold text-[#181226]">{study.client}</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-white/95 backdrop-blur-md border border-purple-100/90 text-[#581C87] flex items-center justify-center shrink-0 shadow-xs">
              <CategoryIcon category={study.category} className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* ============================================================
            EDITORIAL CONTENT COLUMN (Text, 3-tier Breakdown, CTA)
            ============================================================ */}
        <div
          className={cn(
            "lg:col-span-6 space-y-6 text-left",
            isReversed ? "lg:order-1" : "lg:order-2"
          )}
        >
          {/* Eyebrow & Index */}
          <div className="flex items-center justify-between border-b border-purple-100/90 pb-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#581C87] font-semibold">
              {sector}
            </span>
            <span className="text-xs font-mono text-[#64748B]">
              ESTABLISHED MANDATE
            </span>
          </div>

          {/* Metric Headline */}
          <div className="space-y-1">
            <div className="font-serif text-4xl sm:text-5xl lg:text-[3.25rem] font-medium text-[#181226] tracking-tight leading-none">
              {metric}
            </div>
            <p className="text-xs font-mono uppercase tracking-wider text-[#581C87] font-medium">
              {metricSub}
            </p>
          </div>

          {/* Title */}
          <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#181226] leading-snug group-hover:text-[#581C87] transition-colors">
            {study.title}
          </h3>

          {/* 3-Tier Execution Matrix: Challenge -> Structure -> Outcome */}
          <div className="space-y-3 pt-2">
            {/* The Challenge */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#FAF7FD] border border-purple-200/70 space-y-1">
              <span className="text-xs font-mono tracking-wider text-[#64748B] uppercase block font-semibold">
                THE CHALLENGE
              </span>
              <p className="text-xs sm:text-sm text-[#475569] font-sans leading-relaxed line-clamp-3">
                {study.challenge}
              </p>
            </div>

            {/* The Structure */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#F5EFFB] border border-purple-200/80 space-y-1">
              <span className="text-xs font-mono tracking-wider text-[#581C87] uppercase block font-semibold">
                THE STRUCTURE
              </span>
              <p className="text-xs sm:text-sm text-[#374151] font-sans leading-relaxed line-clamp-3">
                {study.solution}
              </p>
            </div>

            {/* The Outcome */}
            {study.outcomes && study.outcomes.length > 0 && (
              <div className="p-3.5 sm:p-4 rounded-xl bg-purple-50 border border-purple-200/90 space-y-1">
                <span className="text-xs font-mono tracking-wider text-[#581C87] uppercase block font-bold">
                  THE OUTCOME
                </span>
                <p className="text-xs sm:text-sm text-[#181226] font-sans font-medium leading-relaxed">
                  {study.outcomes[0]}
                </p>
              </div>
            )}
          </div>

          {/* Bottom Action Row */}
          <div className="pt-4 border-t border-purple-100/90 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 text-xs text-[#556070] font-mono">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#581C87]" />
              <span>Full Audit Documentation Verified</span>
            </span>

            <Link
              href={`/success-stories/${study.slug}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-[#581C87] text-[#181226] hover:text-white border border-purple-200/90 hover:border-[#581C87] text-xs font-mono tracking-wider uppercase transition-all shadow-xs hover:-translate-y-0.5"
            >
              <span>Read Case Study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export async function FeaturedStories() {
  const stories = await getFeaturedCaseStudies(3);

  if (!stories || stories.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="featured-stories-heading"
      className="relative bg-gradient-to-b from-[#FFFFFF] via-[#FAF8FE] to-[#FFFFFF] text-[#181226] py-20 sm:py-28 lg:py-36 border-b border-purple-100/80"
    >
      <Container width="wide" className="space-y-14 sm:space-y-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-purple-100/80 pb-8">
          <div className="space-y-3.5 max-w-2xl">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-purple-200/90 text-[#581C87] text-xs font-mono tracking-widest uppercase shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#581C87]" />
              <span>PROVEN ENTERPRISE DELIVERABLES &bull; EDITORIAL CASE ARCHIVE</span>
            </div>

            <h2
              id="featured-stories-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-normal tracking-[-0.015em] text-[#181226] !leading-[1.15]"
            >
              Real Businesses.
              <br />
              <span className="text-[#581C87] italic font-normal font-editorial">Real Structural Momentum.</span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#475569] leading-[1.7]">
              Measurable capital sanctions, accredited quality standards, and statutory
              subsidy realizations executed for North Indian manufacturing and
              engineering enterprises.
            </p>
          </div>

          <div className="shrink-0">
            <LinkButton
              href="/success-stories"
              variant="outline"
              className="rounded-xl h-11 px-6 border-purple-200/90 bg-white hover:border-[#581C87] hover:text-[#581C87] text-[#181226] group inline-flex items-center gap-2 transition-all text-xs font-mono tracking-wider uppercase shadow-xs hover:-translate-y-0.5"
              aria-label="View all enterprise success stories"
            >
              <span>View All Success Stories</span>
              <ArrowRight className="w-4 h-4 text-[#475569] group-hover:text-[#581C87] transition-transform duration-200 group-hover:translate-x-1" />
            </LinkButton>
          </div>
        </div>

        {/* ============================================================
            IMMERSIVE ALTERNATING MAGAZINE SPREADS
            ============================================================ */}
        <div className="space-y-12 sm:space-y-16">
          {stories.map((study, idx) => (
            <MagazineStorySpread
              key={study.slug}
              study={study}
              index={idx}
              total={stories.length}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
