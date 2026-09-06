import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Award,
  Layers,
} from "lucide-react";
import { getFeaturedCaseStudies } from "@/lib/mdx";
import type { CaseStudyFrontmatter } from "@/types/case-study";
import { Container } from "@/components/shared/container";
import { Eyebrow } from "@/components/ui/badge";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/link-button";

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

function getCategoryBadge(category: string) {
  switch (category) {
    case "funding":
      return { variant: "primary" as const, label: "CGTMSE Sovereign Debt" };
    case "compliance":
      return { variant: "accent" as const, label: "Statutory Compliance" };
    case "digital":
      return { variant: "default" as const, label: "Enterprise Digital" };
    default:
      return { variant: "outline" as const, label: "Corporate Advisory" };
  }
}

function DemoGridCard({ study }: { study: CaseStudyFrontmatter }) {
  const badgeInfo = getCategoryBadge(study.category);
  const metric = study.statValue || study.dealTombstone?.highlightMetric || "Verified Mandate";
  const metricSub = study.statLabel || study.dealTombstone?.highlightSubtitle || "Disbursed / Compliant";

  // Extract concise tag chips
  const tags: string[] = [];
  if (study.dealTombstone?.collateralPledged) {
    tags.push(`Collateral: ${study.dealTombstone.collateralPledged}`);
  }
  if (study.dealTombstone?.lenderCategory) {
    tags.push(study.dealTombstone.lenderCategory.split(" ")[0]);
  } else if (study.category === "funding") {
    tags.push("Scheduled Bank");
  }
  if (study.outcomes && study.outcomes.length > 0) {
    tags.push(study.outcomes[0].slice(0, 24) + "...");
  }

  return (
    <div className="group relative flex flex-col justify-between h-full rounded-3xl bg-gradient-to-b from-white via-white to-slate-50/70 border border-slate-200/90 hover:border-teal-500/50 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_32px_-8px_rgba(8,145,178,0.12)] hover:-translate-y-2 transition-all duration-300 overflow-hidden">
      {/* ============================================================
          TOP MEDIA / THUMBNAIL FRAME (Bconsult Demo Style)
          ============================================================ */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-teal-950 p-5 flex flex-col justify-between">
        {/* Subtle CAD / Blueprint Geometric Background Grid */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-15 [background-image:linear-gradient(to_right,#5eead4_1px,transparent_1px),linear-gradient(to_bottom,#5eead4_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"
        />

        {/* Ambient Glow */}
        <div
          aria-hidden="true"
          className="absolute -top-12 -right-12 w-40 h-40 bg-teal-500/20 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500"
        />

        {/* Top Header Row: Category Badge + Icon */}
        <div className="relative z-10 flex items-center justify-between gap-2">
          <Badge
            variant={badgeInfo.variant}
            className="text-[11px] font-semibold tracking-wide shadow-xs"
          >
            {badgeInfo.label}
          </Badge>

          <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-teal-300 flex items-center justify-center shrink-0">
            <CategoryIcon category={study.category} className="w-4 h-4" />
          </div>
        </div>

        {/* Bottom Prominent Metric Overlay */}
        <div className="relative z-10 space-y-0.5 pt-4">
          <span className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight block leading-none drop-shadow-xs">
            {metric}
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-teal-300 font-sans block truncate">
            {metricSub}
          </span>
        </div>

        {/* Hover Overlay Reveal (Bconsult "View Demo" Pattern) */}
        <Link
          href={`/success-stories/${study.slug}`}
          className="absolute inset-0 z-20 bg-slate-950/70 backdrop-blur-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
          aria-label={`View case study: ${study.title}`}
        >
          <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal-600 hover:bg-teal-500 text-white text-sm font-semibold shadow-elevated">
              <span>View Case Study</span>
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>
        </Link>
      </div>

      {/* ============================================================
          CARD BODY: Tags, Title, Summary, Action
          ============================================================ */}
      <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-4">
        <div className="space-y-3">
          {/* Industry Vertical Eyebrow */}
          <span className="text-xs font-bold tracking-wider text-teal-800 uppercase block font-sans">
            {study.dealTombstone?.industryVertical || study.category}
          </span>

          {/* Title */}
          <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-950 leading-snug group-hover:text-teal-800 transition-colors line-clamp-2">
            <Link
              href={`/success-stories/${study.slug}`}
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded"
            >
              {study.title}
            </Link>
          </h3>

          {/* Excerpt */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans line-clamp-2">
            {study.summary}
          </p>
        </div>

        {/* Short Tag List (Deliverable Highlights) */}
        <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[11px] font-medium font-sans px-2.5 py-1 rounded-full bg-slate-100 text-slate-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Card Footer Link */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
          <span className="text-slate-500 font-sans flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Executed Mandate</span>
          </span>

          <Link
            href={`/success-stories/${study.slug}`}
            className="inline-flex items-center gap-1 text-teal-700 hover:text-teal-900 font-semibold group-hover:translate-x-0.5 transition-transform"
          >
            <span>Read Study</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
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
      className="relative bg-white py-16 sm:py-20 lg:py-28 border-b border-slate-200/80"
    >
      <Container width="wide" className="space-y-12 sm:space-y-14">
        {/* Section Header with Action Button (Bconsult Style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/70 text-teal-800">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
              <Eyebrow
                accent={false}
                className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase font-sans text-teal-800"
              >
                PROVEN ENTERPRISE DELIVERABLES &bull; CASE STUDIES
              </Eyebrow>
            </div>

            <h2
              id="featured-stories-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 !leading-[1.18]"
            >
              Real Businesses. Real Structural Momentum.
            </h2>

            <p className="type-body text-slate-600 leading-relaxed">
              Measurable capital sanctions, accredited quality standards, and statutory
              subsidy realizations executed for North Indian manufacturing and
              engineering enterprises.
            </p>
          </div>

          <div className="shrink-0">
            <LinkButton
              href="/success-stories"
              variant="outline"
              className="rounded-full h-11 px-5 border-slate-200 bg-white hover:border-teal-500 hover:text-teal-700 text-slate-800 group inline-flex items-center gap-2 shadow-xs transition-all"
              aria-label="View all enterprise success stories"
            >
              <span>View All Success Stories</span>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-teal-600 transition-transform duration-200 group-hover:translate-x-1" />
            </LinkButton>
          </div>
        </div>

        {/* ============================================================
            BCONSULT 3-COLUMN HOMEPAGE DEMO GRID
            ============================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {stories.map((study) => (
            <div key={study.slug} className="h-full">
              <DemoGridCard study={study} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
