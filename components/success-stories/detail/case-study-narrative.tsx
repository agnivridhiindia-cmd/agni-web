import * as React from "react";
import { CheckCircle2, AlertCircle, Sparkles, Quote, Milestone } from "lucide-react";
import type { CaseStudyFrontmatter } from "@/types/case-study";

interface CaseStudyNarrativeProps {
  study: CaseStudyFrontmatter;
  rawContent?: string;
}

export function CaseStudyNarrative({ study }: CaseStudyNarrativeProps) {
  return (
    <article className="space-y-12 sm:space-y-16">
      {/* 1. Structural Barrier & Challenge */}
      <section aria-labelledby="section-challenge" className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#581C87]">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" aria-hidden="true" />
          <span>The Structural Challenge</span>
        </div>

        <h2
          id="section-challenge"
          className="font-serif text-2xl sm:text-3xl font-semibold text-[#0F0A1A] tracking-tight leading-snug"
        >
          Operational &amp; Financial Bottleneck
        </h2>

        <div className="rounded-2xl border border-purple-200 bg-[#161411] p-6 sm:p-7 space-y-4">
          <p className="type-body-lg text-[#0F0A1A] font-sans leading-relaxed">
            {study.challenge}
          </p>
        </div>
      </section>

      {/* 2. Advisory Intervention & Strategy Delivered */}
      <section aria-labelledby="section-solution" className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#581C87]">
          <Sparkles className="w-4 h-4 text-teal-600 shrink-0" aria-hidden="true" />
          <span>Agnivridhi Advisory Solution</span>
        </div>

        <h2
          id="section-solution"
          className="font-serif text-2xl sm:text-3xl font-semibold text-[#0F0A1A] tracking-tight leading-snug"
        >
          Tailored Strategy &amp; Institutional Execution
        </h2>

        <div className="rounded-2xl border border-purple-100 bg-white p-6 sm:p-7 space-y-4 shadow-xl">
          <p className="type-body-lg text-[#475569] font-sans leading-relaxed">
            {study.solution}
          </p>
        </div>
      </section>

      {/* 3. Execution Roadmap (if verified process array exists) */}
      {study.process && study.process.length > 0 && (
        <section aria-labelledby="section-process" className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#475569]">
            <Milestone className="w-4 h-4 text-[#64748B] shrink-0" aria-hidden="true" />
            <span>Execution Roadmap</span>
          </div>

          <h2
            id="section-process"
            className="font-serif text-2xl sm:text-3xl font-semibold text-[#0F0A1A] tracking-tight leading-snug"
          >
            Engagement Milestones
          </h2>

          <ol className="grid grid-cols-1 gap-4">
            {study.process.map((step, idx) => (
              <li
                key={idx}
                className="flex items-start gap-4 p-4 rounded-xl border border-purple-100 bg-white"
              >
                <span className="font-mono text-xs font-bold px-2 py-1 rounded bg-purple-50 text-[#581C87] border border-purple-100 shrink-0">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <p className="text-sm text-[#475569] font-sans leading-relaxed pt-0.5">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* 4. Measurable Deliverables & Business Outcomes */}
      {study.outcomes && study.outcomes.length > 0 && (
        <section aria-labelledby="section-outcomes" className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#581C87]">
            <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" aria-hidden="true" />
            <span>Verified Results</span>
          </div>

          <h2
            id="section-outcomes"
            className="font-serif text-2xl sm:text-3xl font-semibold text-[#0F0A1A] tracking-tight leading-snug"
          >
            Measurable Deliverables &amp; Enterprise Momentum
          </h2>

          <div className="rounded-2xl border border-[#2DD4BF]/30 bg-[#0F1413] p-6 sm:p-8 space-y-4 shadow-xl">
            <ul className="space-y-4">
              {study.outcomes.map((outcome, idx) => (
                <li key={idx} className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#2DD4BF]/20 text-[#581C87] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                  <span className="text-sm sm:text-base font-medium text-[#0F0A1A] font-sans leading-relaxed">
                    {outcome}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* 5. Verified Client Quote (rendered ONLY if quote exists) */}
      {study.quote && study.quote.text && (
        <section aria-label="Client Perspective" className="pt-4">
          <blockquote className="relative rounded-2xl border border-purple-300 bg-[#14120E] p-6 sm:p-8 space-y-4">
            <Quote className="w-8 h-8 text-gold-500/40 absolute top-6 right-6" aria-hidden="true" />
            <p className="font-serif text-lg sm:text-xl italic text-[#0F0A1A] leading-relaxed">
              &ldquo;{study.quote.text}&rdquo;
            </p>
            {(study.quote.author || study.quote.role) && (
              <footer className="text-xs font-sans text-[#64748B] font-medium">
                {study.quote.author && <strong className="text-[#0F0A1A]">{study.quote.author}</strong>}
                {study.quote.author && study.quote.role && <span> &bull; </span>}
                {study.quote.role && <span>{study.quote.role}</span>}
              </footer>
            )}
          </blockquote>
        </section>
      )}
    </article>
  );
}
