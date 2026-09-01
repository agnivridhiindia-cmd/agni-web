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
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" aria-hidden="true" />
          <span>The Structural Challenge</span>
        </div>

        <h2
          id="section-challenge"
          className="font-serif text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight leading-snug"
        >
          Operational &amp; Financial Bottleneck
        </h2>

        <div className="rounded-2xl border border-amber-200/70 bg-amber-50/40 p-6 sm:p-7 space-y-4">
          <p className="type-body-lg text-slate-800 font-sans leading-relaxed">
            {study.challenge}
          </p>
        </div>
      </section>

      {/* 2. Advisory Intervention & Strategy Delivered */}
      <section aria-labelledby="section-solution" className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-800">
          <Sparkles className="w-4 h-4 text-teal-600 shrink-0" aria-hidden="true" />
          <span>Agnivridhi Advisory Solution</span>
        </div>

        <h2
          id="section-solution"
          className="font-serif text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight leading-snug"
        >
          Tailored Strategy &amp; Institutional Execution
        </h2>

        <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 space-y-4 shadow-xs">
          <p className="type-body-lg text-slate-700 font-sans leading-relaxed">
            {study.solution}
          </p>
        </div>
      </section>

      {/* 3. Execution Roadmap (if verified process array exists) */}
      {study.process && study.process.length > 0 && (
        <section aria-labelledby="section-process" className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
            <Milestone className="w-4 h-4 text-slate-600 shrink-0" aria-hidden="true" />
            <span>Execution Roadmap</span>
          </div>

          <h2
            id="section-process"
            className="font-serif text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight leading-snug"
          >
            Engagement Milestones
          </h2>

          <ol className="grid grid-cols-1 gap-4">
            {study.process.map((step, idx) => (
              <li
                key={idx}
                className="flex items-start gap-4 p-4 rounded-xl border border-slate-200/80 bg-slate-50/60"
              >
                <span className="font-mono text-xs font-bold px-2 py-1 rounded bg-teal-100 text-teal-900 shrink-0">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <p className="text-sm text-slate-700 font-sans leading-relaxed pt-0.5">
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
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-800">
            <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" aria-hidden="true" />
            <span>Verified Results</span>
          </div>

          <h2
            id="section-outcomes"
            className="font-serif text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight leading-snug"
          >
            Measurable Deliverables &amp; Enterprise Momentum
          </h2>

          <div className="rounded-2xl border border-teal-200/90 bg-linear-to-b from-teal-50/30 to-white p-6 sm:p-8 space-y-4 shadow-xs">
            <ul className="space-y-4">
              {study.outcomes.map((outcome, idx) => (
                <li key={idx} className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                  <span className="text-sm sm:text-base font-medium text-slate-900 font-sans leading-relaxed">
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
          <blockquote className="relative rounded-2xl border border-gold-200 bg-gold-50/40 p-6 sm:p-8 space-y-4">
            <Quote className="w-8 h-8 text-gold-500/40 absolute top-6 right-6" aria-hidden="true" />
            <p className="font-serif text-lg sm:text-xl italic text-slate-800 leading-relaxed">
              &ldquo;{study.quote.text}&rdquo;
            </p>
            {(study.quote.author || study.quote.role) && (
              <footer className="text-xs font-sans text-slate-600 font-medium">
                {study.quote.author && <strong className="text-slate-900">{study.quote.author}</strong>}
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
