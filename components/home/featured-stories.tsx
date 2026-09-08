import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
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

function StoryFlipCard({
  study,
  index,
  total,
}: {
  study: CaseStudyFrontmatter;
  index: number;
  total: number;
}) {
  const imageInfo = storyImages[study.slug] || {
    src: "/img/hero-enterprise.jpg",
    alt: study.title,
  };

  const metric = study.statValue || study.dealTombstone?.highlightMetric || "Verified Mandate";
  const metricSub = study.statLabel || study.dealTombstone?.highlightSubtitle || "Verified outcome";
  const sector = study.dealTombstone?.industryVertical || study.category.toUpperCase();

  return (
    <article
      aria-label={`Case Study: ${study.title}`}
      className="group relative min-w-0 [perspective:1200px]"
    >
      <div className="relative min-h-[430px] transition-transform duration-700 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)] rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        {/* FRONT FACE */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl border border-white/20 bg-[#111313] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] [backface-visibility:hidden]">
          <Image
            src={imageInfo.src}
            alt={imageInfo.alt}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080909] via-[#080909]/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <div className="flex items-center justify-between gap-3 mb-3">
              <span className="text-[10px] font-mono tracking-widest text-[#22D3EE] uppercase font-bold">
                {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
              <CategoryIcon category={study.category} className="w-4 h-4 text-[#67E8F9]" />
            </div>
            <p className="text-[10px] font-mono tracking-widest text-[#67E8F9] uppercase mb-2">{sector}</p>
            <h3 className="font-serif text-xl sm:text-2xl text-white leading-[1.12] line-clamp-3 font-semibold">
              {study.title}
            </h3>
            <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/70 group-hover:text-[#67E8F9] transition-colors">
                Hover to flip &bull; 3D view
              </span>
              <p className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#67E8F9] group-hover:text-white transition-colors">
                <span>Read memorandum</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </p>
            </div>
          </div>
        </div>

        {/* BACK FACE (180deg Rotated in 3D) */}
        <div className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-2xl border border-white/70 bg-white/90 p-5 sm:p-6 text-left [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.95),0_10px_30px_rgba(8,145,178,0.12)]">
          <div>
            <div className="border-b border-cyan-100 pb-3">
              <div>
                <p className="text-[10px] font-mono tracking-widest text-[#0891B2] uppercase font-bold">{sector}</p>
                <h3 className="mt-1 font-serif text-xl sm:text-2xl text-[#181226] leading-[1.12] line-clamp-2 font-semibold">
                  {study.title}
                </h3>
              </div>
              <p className="mt-1 text-xs font-sans text-[#64748B]">{study.client}</p>
            </div>

            <div className="mt-4 flex items-end justify-between gap-4 p-3 rounded-xl bg-white/70 border border-cyan-100 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#64748B] block">
                  {metricSub}
                </span>
                <p className="font-serif text-3xl sm:text-4xl text-[#0891B2] leading-none mt-1 font-bold">
                  {metric}
                </p>
              </div>
              <span className="px-2 py-0.5 rounded bg-cyan-100 text-[#0E7490] text-[10px] font-mono font-bold uppercase tracking-wider border border-cyan-200">
                Verified
              </span>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-[#475569] leading-relaxed line-clamp-4 font-sans">
              {study.summary}
            </p>
            {study.outcomes?.[0] && (
              <p className="mt-3 border-l-2 border-[#0891B2] pl-3 text-xs text-[#181226] leading-relaxed line-clamp-2">
                {study.outcomes[0]}
              </p>
            )}
          </div>

          <Link
            href={`/success-stories/${study.slug}`}
            className="mt-4 inline-flex items-center justify-between gap-3 border-t border-cyan-200 pt-3 text-xs font-mono uppercase tracking-wider text-[#0891B2] hover:text-[#0E7490] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0891B2] transition-colors"
          >
            <span className="font-bold">Read Full Memorandum</span>
            <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
          </Link>
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
      className="relative bg-gradient-to-b from-[#FFFFFF] via-[#FAFEFE] to-[#F2FCFD] text-[#181226] py-20 sm:py-28 lg:py-36 border-b border-cyan-100"
    >
      <Container width="wide" className="space-y-14 sm:space-y-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-cyan-100 pb-8">
          <div className="space-y-3.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-[#0891B2] text-xs font-mono tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0891B2]" />
              <span>PROVEN ENTERPRISE DELIVERABLES &bull; EDITORIAL CASE ARCHIVE</span>
            </div>

            <h2
              id="featured-stories-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#181226] !leading-[1.15]"
            >
              Real Businesses.
              <br />
              <span className="text-[#0891B2] italic font-light">Real Structural Momentum.</span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#475569] leading-relaxed">
              Measurable capital sanctions, accredited quality standards, and statutory
              subsidy realizations executed for North Indian manufacturing and
              engineering enterprises.
            </p>
          </div>

          <div className="shrink-0">
            <LinkButton
              href="/success-stories"
              variant="outline"
              className="rounded-full h-11 px-6 border-cyan-200/90 text-[#181226] hover:text-[#0891B2] group inline-flex items-center gap-2 transition-all text-xs font-mono tracking-wider uppercase"
              aria-label="View all enterprise success stories"
            >
              <span>View All Success Stories</span>
              <ArrowRight className="w-4 h-4 text-[#64748B] group-hover:text-[#0891B2] transition-transform duration-200 group-hover:translate-x-1" />
            </LinkButton>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {stories.map((study, idx) => (
            <StoryFlipCard
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
