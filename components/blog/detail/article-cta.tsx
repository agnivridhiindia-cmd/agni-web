import * as React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { LinkButton } from "@/components/ui/link-button";

interface ArticleCtaProps {
  category: string;
  title: string;
}

export function ArticleCta({ category, title }: ArticleCtaProps) {
  const isFunding = category.toLowerCase().includes("funding");

  return (
    <section
      aria-labelledby="article-cta-heading"
      className="mt-14 p-5 sm:p-8 md:p-10 rounded-2xl bg-slate-900 text-white shadow-floating relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-gold-500 via-teal-500 to-teal-400"
      />

      <div className="relative z-10 space-y-4 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Strategic Implementation Desk</span>
        </div>

        <h3 id="article-cta-heading" className="font-serif text-xl sm:text-2xl md:text-3xl font-semibold text-white tracking-tight leading-snug">
          {isFunding
            ? "Need assistance syndicating collateral-free MSME credit?"
            : "Preparing your enterprise for statutory accreditation?"}
        </h3>

        <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
          {isFunding
            ? "Agnivridhi's senior debt desk assists emerging manufacturers with institutional DPR modeling, CMA data preparation, and end-to-end bank committee representation."
            : "Our compliance practice provides gap assessments, internal auditor coaching, and documentation calibration to clear Stage 1 and Stage 2 audits without non-conformances."}
        </p>

        <div className="pt-3 flex flex-wrap items-center gap-4">
          <LinkButton
            href={`/contact?subject=${encodeURIComponent(`Advisory Consultation: ${title}`)}`}
            variant="primary"
            size="default"
            className="shadow-glow-teal max-w-full text-center"
          >
            <span>Request Strategic Assessment</span>
            <ArrowRight className="w-4 h-4 ml-1.5 shrink-0" aria-hidden="true" />
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
