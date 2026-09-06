import * as React from "react";
import { Landmark, ShieldCheck, Building2, Laptop, Calendar, ArrowRight } from "lucide-react";
import type { CaseStudyFrontmatter } from "@/types/case-study";
import { Container } from "@/components/shared/container";
import { LinkButton } from "@/components/ui/link-button";

interface CaseStudyHeroProps {
  study: CaseStudyFrontmatter;
}

function getCategoryDisplay(category: string) {
  switch (category) {
    case "funding":
      return {
        label: "Government & Business Funding",
        badgeClass: "bg-[#181A1A] border-[#232727] text-[#2DD4BF]",
        icon: <Landmark className="w-3.5 h-3.5 text-teal-700 shrink-0" aria-hidden="true" />,
      };
    case "compliance":
      return {
        label: "Compliance & Certifications",
        badgeClass: "bg-[#181A1A] border-[#232727] text-[#C79A4A]",
        icon: <ShieldCheck className="w-3.5 h-3.5 text-gold-700 shrink-0" aria-hidden="true" />,
      };
    case "digital":
      return {
        label: "Digital Transformation",
        badgeClass: "bg-[#181A1A] border-[#232727] text-[#F3EFE7]",
        icon: <Building2 className="w-3.5 h-3.5 text-slate-700 shrink-0" aria-hidden="true" />,
      };
    case "it":
    default:
      return {
        label: "Custom Software & IT Services",
        badgeClass: "bg-[#181A1A] border-[#232727] text-[#F3EFE7]",
        icon: <Laptop className="w-3.5 h-3.5 text-slate-700 shrink-0" aria-hidden="true" />,
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
      className="relative border-b border-[#232727] bg-[#080909] py-12 sm:py-16 lg:py-20 overflow-hidden"
    >
      <Container width="wide">
        <div className="max-w-4xl space-y-6">
          {/* Metadata badges */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold border ${categoryInfo.badgeClass}`}
            >
              {categoryInfo.icon}
              <span>{categoryInfo.label}</span>
            </span>

            {study.client && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-[#181A1A] border border-[#232727] text-[#D1CBC1] shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-600" aria-hidden="true" />
                <span>{study.client}</span>
              </span>
            )}

            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-sans text-[#8E8B82] bg-transparent">
              <Calendar className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
              <span>{formattedDate}</span>
            </span>
          </div>

          {/* Editorial Fraunces Title */}
          <h1
            id="case-study-hero-title"
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-semibold text-[#F3EFE7] tracking-tight leading-[1.18]"
          >
            {study.title}
          </h1>

          {/* Executive Summary */}
          <p className="type-body-lg text-[#D1CBC1] font-sans leading-relaxed max-w-3xl">
            {study.summary}
          </p>

          {/* Hero Actions */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <LinkButton
              href="/contact"
              variant="primary"
              size="default"
              className="shadow-glow-teal"
            >
              <span>Consult on Similar Engagement</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </LinkButton>

            <span className="text-xs text-[#8E8B82] font-sans">
              100% Confidential &bull; Non-Disclosure Protected
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
