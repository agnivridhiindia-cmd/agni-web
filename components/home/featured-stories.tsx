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
    alt: "Aadhithya filling station and clean energy retail outlet",
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
  "cgtmse-goldi-kirana": {
    src: "/img/practice-growth.jpg",
    alt: "Goldi Kirana Store retail facility",
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

function StoryCard({
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
      className="group relative min-w-0 flex flex-col"
    >
      <Link
        href={`/success-stories/${study.slug}`}
        className="relative flex flex-col justify-between h-full min-h-[440px] rounded-2xl border border-slate-700/60 bg-gradient-to-b from-[#111D3A] via-[#0D162D] to-[#0B1329] overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-400/60 hover:shadow-[0_20px_45px_-12px_rgba(14,165,233,0.25)] [transform:translateZ(0)]"
      >
        {/* Top Half: Cinematic Architectural Photography with Edge Gradient */}
        <div className="relative h-52 w-full overflow-hidden shrink-0">
          <Image
            src={imageInfo.src}
            alt={imageInfo.alt}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D162D] via-[#0D162D]/40 to-transparent" />
          <div className="absolute inset-0 bg-noise pointer-events-none opacity-20" />

          {/* Floating Badges */}
          <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
            <span className="px-2.5 py-1 rounded-md bg-slate-950/90 border border-slate-800 text-[10px] font-mono tracking-widest text-amber-400 uppercase font-bold shadow-xs">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-950/90 border border-slate-800 text-[10px] font-mono text-sky-300 shadow-xs font-semibold">
              <CategoryIcon category={study.category} className="w-3.5 h-3.5 text-sky-400" />
              <span>{sector}</span>
            </div>
          </div>
        </div>

        {/* Bottom Half: Editorial Typography, Metric, & Action */}
        <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 gap-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="text-amber-400/90 font-medium">{study.client}</span>
              <span className="text-[10px] uppercase tracking-wider text-slate-500">Case Study</span>
            </div>

            <h3 className="font-heading text-xl font-semibold text-white leading-snug group-hover:text-amber-300 transition-colors line-clamp-2">
              {study.title}
            </h3>

            <p className="text-xs text-slate-300 line-clamp-2 font-sans leading-relaxed">
              {study.summary}
            </p>
          </div>

          {/* Metric Highlight Box */}
          <div className="pt-3 border-t border-slate-700/60 flex items-end justify-between gap-3">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-sky-300/80 block">
                {metricSub}
              </span>
              <p className="font-heading text-2xl sm:text-3xl text-amber-400 leading-none mt-1 font-bold tabular-nums">
                {metric}
              </p>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-sky-400 group-hover:bg-amber-500 group-hover:text-slate-950 group-hover:border-amber-400 transition-all text-xs font-mono font-medium shrink-0">
              <span className="text-[11px]">Read Case</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Link>
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
      className="relative py-14 sm:py-20 lg:py-26 border-b border-[#CBDDEB] overflow-hidden bg-gradient-to-b from-[#F1F5F9] via-[#EBF3F9] to-[#F1F5F9]"
    >
      {/* Precision architectural ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
      >
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-300/70 to-transparent" />
        <div className="absolute inset-0 [background-image:radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:32px_32px] opacity-40 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_40%,#000_50%,transparent_100%)]" />
        <div className="absolute top-1/4 -right-28 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.06)_0%,rgba(14,165,233,0.01)_45%,transparent_70%)]" />
        <div className="absolute bottom-10 -left-28 h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.04)_0%,rgba(245,158,11,0.01)_45%,transparent_70%)]" />
      </div>
      <Container width="wide" className="space-y-14 sm:space-y-20 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#CBDDEB] pb-8">
          <div className="space-y-3.5 max-w-2xl">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-xs font-mono tracking-widest text-slate-800 shadow-2xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span>PROVEN ENTERPRISE DELIVERABLES &bull; EDITORIAL CASE ARCHIVE</span>
            </div>

            <h2
              id="featured-stories-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-slate-900 !leading-[1.14]"
            >
              Real Businesses.{' '}
              <br />
              <span className="text-amber-600 font-bold font-heading">
                Real Structural Momentum.
              </span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed">
              Measurable capital sanctions, accredited quality standards, and statutory
              subsidy realizations executed for North Indian manufacturing and
              engineering enterprises.
            </p>
          </div>

          <div className="shrink-0">
            <LinkButton
              href="/success-stories"
              variant="outline"
              className="rounded-full px-7 py-3 border border-white bg-white/80 hover:bg-white text-slate-800 hover:text-slate-950 backdrop-blur-xl group inline-flex items-center gap-2 transition-all text-xs font-mono tracking-wider uppercase shadow-[inset_0_1px_2px_rgba(255,255,255,1),0_8px_20px_rgba(15,23,42,0.06)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
              aria-label="View all enterprise success stories"
            >
              <span>View All Success Stories</span>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-slate-950 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={1.5} />
            </LinkButton>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {stories.map((study, idx) => (
            <StoryCard
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
