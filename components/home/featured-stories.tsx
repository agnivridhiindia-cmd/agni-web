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
      <div className="relative min-h-[430px] transition-transform duration-700 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)] rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.6)]">
        {/* FRONT FACE */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-950 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] [backface-visibility:hidden]">
          <Image
            src={imageInfo.src}
            alt={imageInfo.alt}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1329] via-[#0B1329]/65 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <div className="flex items-center justify-between gap-3 mb-3">
              <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase font-bold">
                {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
              <CategoryIcon category={study.category} className="w-4 h-4 text-sky-400" />
            </div>
            <p className="text-[10px] font-mono tracking-widest text-sky-300 uppercase mb-2 font-semibold">{sector}</p>
            <h3 className="font-heading text-xl sm:text-2xl text-white leading-[1.14] line-clamp-3 font-semibold group-hover:text-amber-300 transition-colors">
              {study.title}
            </h3>
            <div className="mt-4 flex items-center justify-between border-t border-slate-700/60 pt-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-300 group-hover:text-white transition-colors">
                Hover to flip &bull; 3D view
              </span>
              <p className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-sky-400 group-hover:text-sky-300 transition-colors font-medium">
                <span>Read memorandum</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={1.5} />
              </p>
            </div>
          </div>
        </div>

        {/* BACK FACE (180deg Rotated in 3D) */}
        <div className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-700/60 bg-gradient-to-b from-[#111D3A] via-[#0D162D] to-[#0B1329] p-5 sm:p-6 text-left [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-[0_12px_32px_rgba(15,23,42,0.4)]">
          <div>
            <div className="border-b border-slate-700/60 pb-3">
              <div>
                <p className="text-[10px] font-mono tracking-widest text-sky-300 uppercase font-bold">{sector}</p>
                <h3 className="mt-1 font-heading text-xl sm:text-2xl text-white leading-[1.14] line-clamp-2 font-semibold">
                  {study.title}
                </h3>
              </div>
              <p className="mt-1 text-xs font-sans text-slate-300">{study.client}</p>
            </div>

            <div className="mt-4 flex items-end justify-between gap-4 p-3 rounded-xl bg-[#0B1329]/95 border border-slate-700/60 shadow-xs">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-sky-300/80 block">
                  {metricSub}
                </span>
                <p className="font-heading text-3xl sm:text-4xl text-amber-400 leading-none mt-1 font-bold tabular-nums">
                  {metric}
                </p>
              </div>
              <span className="px-2 py-0.5 rounded bg-amber-950/80 text-amber-300 text-[10px] font-mono font-bold uppercase tracking-wider border border-amber-500/40">
                Verified
              </span>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-4 font-sans">
              {study.summary}
            </p>
            {study.outcomes?.[0] && (
              <p className="mt-3 border-l-2 border-amber-400 pl-3 text-xs text-slate-200 leading-relaxed line-clamp-2">
                {study.outcomes[0]}
              </p>
            )}
          </div>

          <Link
            href={`/success-stories/${study.slug}`}
            className="mt-auto inline-flex items-center justify-between gap-3 border-t border-slate-700/60 pt-3 text-xs font-mono uppercase tracking-wider text-sky-400 hover:text-sky-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 transition-colors"
          >
            <span className="font-bold">Read Full Memorandum</span>
            <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
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
      className="relative py-20 sm:py-28 lg:py-36 border-b border-[#BDD8EB] overflow-hidden bg-gradient-to-b from-[#EBF3F9] via-[#E0EEF7] to-[#D5E7F4]"
    >
      {/* Precision architectural ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
      >
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-300/70 to-transparent" />
        <div className="absolute inset-0 [background-image:radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:32px_32px] opacity-40 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_40%,#000_50%,transparent_100%)]" />
        <div className="absolute top-1/4 -right-28 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.06)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute bottom-10 -left-28 h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.04)_0%,transparent_70%)] blur-3xl" />
      </div>
      <Container width="wide" className="space-y-14 sm:space-y-20 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#BDD8EB] pb-8">
          <div className="space-y-3.5 max-w-2xl">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-xs font-mono tracking-widest text-slate-800 shadow-2xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span>PROVEN ENTERPRISE DELIVERABLES &bull; EDITORIAL CASE ARCHIVE</span>
            </div>

            <h2
              id="featured-stories-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-slate-900 !leading-[1.14]"
            >
              Real Businesses.
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
