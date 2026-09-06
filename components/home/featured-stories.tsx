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
      className="group relative rounded-3xl bg-[#111313] border border-white/[0.08] hover:border-[#C79A4A]/30 transition-all duration-500 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-8 lg:p-12">
        {/* ============================================================
            PHOTOGRAPHIC FRAME (Alternates Left / Right on Desktop)
            ============================================================ */}
        <div
          className={cn(
            "lg:col-span-6 relative aspect-[16/10] sm:aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/10 bg-[#080909]",
            isReversed ? "lg:order-2" : "lg:order-1"
          )}
        >
          {/* Blueprint Corner Crosshairs */}
          <div className="absolute top-2 left-2 font-mono text-xs text-[#C79A4A]/60 z-30 select-none">+</div>
          <div className="absolute bottom-2 right-2 font-mono text-xs text-[#C79A4A]/60 z-30 select-none">+</div>

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
            <span className="px-3 py-1 rounded-md bg-[#080909]/85 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#F3EFE7] uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C79A4A]" />
              <span>CASE {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
            </span>
          </div>

          {/* Bottom Mandate Realization Overlay */}
          <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between gap-2">
            <div className="px-3 py-1.5 rounded-md bg-[#080909]/90 backdrop-blur-md border border-white/10 text-xs font-mono text-[#DFC286]">
              <span className="font-semibold text-white">{study.client}</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#080909]/90 backdrop-blur-md border border-white/10 text-[#C79A4A] flex items-center justify-center shrink-0">
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
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#C79A4A] font-semibold">
              {sector}
            </span>
            <span className="text-xs font-mono text-[#8E8D86]">
              ESTABLISHED MANDATE
            </span>
          </div>

          {/* Metric Headline */}
          <div className="space-y-1">
            <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#F3EFE7] tracking-tight leading-none">
              {metric}
            </div>
            <p className="text-xs font-mono uppercase tracking-wider text-[#C79A4A]">
              {metricSub}
            </p>
          </div>

          {/* Title */}
          <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#F3EFE7] leading-snug group-hover:text-[#DFC286] transition-colors">
            {study.title}
          </h3>

          {/* 3-Tier Execution Matrix: Challenge -> Structure -> Outcome */}
          <div className="space-y-3 pt-2">
            {/* The Challenge */}
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1">
              <span className="text-[10px] font-mono tracking-widest text-[#8E8D86] uppercase block">
                THE CHALLENGE
              </span>
              <p className="text-xs text-[#A5A29A] font-sans leading-relaxed line-clamp-2">
                {study.challenge}
              </p>
            </div>

            {/* The Structure */}
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1">
              <span className="text-[10px] font-mono tracking-widest text-[#C79A4A] uppercase block">
                THE STRUCTURE
              </span>
              <p className="text-xs text-[#A5A29A] font-sans leading-relaxed line-clamp-2">
                {study.solution}
              </p>
            </div>

            {/* The Outcome */}
            {study.outcomes && study.outcomes.length > 0 && (
              <div className="p-3.5 rounded-xl bg-[#C79A4A]/[0.06] border border-[#C79A4A]/20 space-y-1">
                <span className="text-[10px] font-mono tracking-widest text-[#DFC286] uppercase block">
                  THE OUTCOME
                </span>
                <p className="text-xs text-[#F3EFE7] font-sans font-medium leading-relaxed">
                  {study.outcomes[0]}
                </p>
              </div>
            )}
          </div>

          {/* Bottom Action Row */}
          <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 text-xs text-[#8E8D86] font-mono">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C79A4A]" />
              <span>Full Audit Documentation Verified</span>
            </span>

            <Link
              href={`/success-stories/${study.slug}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.04] hover:bg-[#C79A4A] text-[#F3EFE7] hover:text-[#080909] border border-white/10 hover:border-[#C79A4A] text-xs font-mono tracking-wider uppercase transition-all"
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
      className="relative bg-[#080909] text-[#F3EFE7] py-20 sm:py-28 lg:py-36 border-b border-white/[0.08]"
    >
      <Container width="wide" className="space-y-14 sm:space-y-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <div className="space-y-3.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[#C79A4A] text-xs font-mono tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C79A4A]" />
              <span>PROVEN ENTERPRISE DELIVERABLES &bull; EDITORIAL CASE ARCHIVE</span>
            </div>

            <h2
              id="featured-stories-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#F3EFE7] !leading-[1.15]"
            >
              Real Businesses.
              <br />
              <span className="text-[#C79A4A] italic font-light">Real Structural Momentum.</span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#A5A29A] leading-relaxed">
              Measurable capital sanctions, accredited quality standards, and statutory
              subsidy realizations executed for North Indian manufacturing and
              engineering enterprises.
            </p>
          </div>

          <div className="shrink-0">
            <LinkButton
              href="/success-stories"
              variant="outline"
              className="rounded-full h-11 px-6 border-white/15 bg-white/[0.03] hover:border-[#C79A4A] hover:text-[#DFC286] text-[#F3EFE7] group inline-flex items-center gap-2 transition-all text-xs font-mono tracking-wider uppercase"
              aria-label="View all enterprise success stories"
            >
              <span>View All Success Stories</span>
              <ArrowRight className="w-4 h-4 text-[#A5A29A] group-hover:text-[#DFC286] transition-transform duration-200 group-hover:translate-x-1" />
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
