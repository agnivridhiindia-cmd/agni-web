import * as React from "react";
import Link from "next/link";
import { Landmark, ShieldCheck, Building2, Laptop, Calendar, ArrowRight } from "lucide-react";
import type { CaseStudyFrontmatter } from "@/types/case-study";
import { Container } from "@/components/shared/container";

interface CaseStudyHeroProps {
  study: CaseStudyFrontmatter;
}

function getCategoryDisplay(category: string) {
  switch (category) {
    case "funding":
      return {
        label: "Government & Debt Funding",
        badgeClass: "bg-amber-950/80 border-amber-500/40 text-amber-300",
        icon: <Landmark className="w-3.5 h-3.5 text-amber-400 shrink-0" aria-hidden="true" />,
      };
    case "compliance":
      return {
        label: "Compliance & Certifications",
        badgeClass: "bg-amber-950/80 border-amber-500/40 text-amber-300",
        icon: <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" aria-hidden="true" />,
      };
    case "digital":
      return {
        label: "Digital Transformation",
        badgeClass: "bg-amber-950/80 border-amber-500/40 text-amber-300",
        icon: <Building2 className="w-3.5 h-3.5 text-amber-400 shrink-0" aria-hidden="true" />,
      };
    case "it":
    default:
      return {
        label: "Custom Software & IT Services",
        badgeClass: "bg-amber-950/80 border-amber-500/40 text-amber-300",
        icon: <Laptop className="w-3.5 h-3.5 text-amber-400 shrink-0" aria-hidden="true" />,
      };
  }
}

export function CaseStudyHero({ study }: CaseStudyHeroProps) {
  const categoryInfo = getCategoryDisplay(study.category);
  const formattedDate = new Date(study.publishedAt).toLocaleDateString("en-IN", {
    month: "long",
    year: "numeric",
  });

  return (
    <section
      aria-labelledby="case-study-hero-title"
      className="relative border-b border-slate-800/80 bg-slate-950 text-slate-100 py-12 sm:py-16 lg:py-20 overflow-hidden"
    >
      {/* Ambient Blueprint Grid & Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
      >
        <div className="absolute inset-0 bg-blueprint-grid-dark opacity-25" />
        <div className="absolute top-1/4 -right-28 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.12)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute bottom-10 -left-28 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.10)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute top-8 left-8 font-mono text-xs text-amber-500/30 select-none">+</div>
        <div className="absolute top-8 right-8 font-mono text-xs text-cyan-400/30 select-none">+</div>
      </div>

      <Container width="wide" className="relative z-10">
        <div className="max-w-4xl space-y-6">
          {/* Metadata badges */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <span
              className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono font-semibold border ${categoryInfo.badgeClass}`}
            >
              {categoryInfo.icon}
              <span>{categoryInfo.label}</span>
            </span>

            {study.client && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-900/80 border border-amber-500/30 text-amber-300 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" aria-hidden="true" />
                <span>{study.client}</span>
              </span>
            )}

            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono text-slate-400 bg-transparent">
              <Calendar className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" />
              <span>{formattedDate}</span>
            </span>
          </div>

          {/* Editorial Fraunces Title */}
          <h1
            id="case-study-hero-title"
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-semibold text-white tracking-tight leading-[1.18]"
          >
            {study.title}
          </h1>

          {/* Executive Summary */}
          <p className="text-slate-300 font-sans leading-relaxed max-w-3xl text-base sm:text-lg">
            {study.summary}
          </p>

          {/* Hero Actions */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold border border-amber-300/40 shadow-[0_8px_24px_rgba(245,158,11,0.35)] hover:from-amber-300 hover:to-amber-500 transition-all text-sm font-sans"
            >
              <span>Consult on Similar Engagement</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>

            <span className="text-xs text-slate-400 font-mono">
              100% Confidential &bull; Non-Disclosure Protected
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
