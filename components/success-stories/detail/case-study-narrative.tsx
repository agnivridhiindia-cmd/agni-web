import * as React from "react";
import { CheckCircle2, AlertCircle, Sparkles, Quote, Milestone } from "lucide-react";
import type { CaseStudyFrontmatter } from "@/types/case-study";

interface CaseStudyNarrativeProps {
 study: CaseStudyFrontmatter;
 rawContent?: string;
}

export function CaseStudyNarrative({ study }: CaseStudyNarrativeProps) {
 return (
 <article className="space-y-12 sm:space-y-16 text-slate-900">
 {/* 1. Structural Barrier & Challenge */}
 <section aria-labelledby="section-challenge" className="space-y-4">
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-xs font-mono font-bold uppercase tracking-wider text-amber-900 shadow-2xs">
 <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" aria-hidden="true" />
 <span>The Structural Challenge</span>
 </div>

 <h2
 id="section-challenge"
 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-snug"
 >
 Operational &amp; Financial Bottleneck
 </h2>

 <p className="text-base sm:text-lg text-slate-700 font-sans leading-relaxed max-w-4xl">
 {study.challenge}
 </p>
 </section>

 {/* 2. Advisory Intervention & Strategy Delivered */}
 <section aria-labelledby="section-solution" className="space-y-4">
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-xs font-mono font-bold uppercase tracking-wider text-amber-900 shadow-2xs">
 <Sparkles className="w-4 h-4 text-amber-600 shrink-0" aria-hidden="true" />
 <span>Agnivridhi Advisory Solution</span>
 </div>

 <h2
 id="section-solution"
 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-snug"
 >
 Tailored Strategy &amp; Institutional Execution
 </h2>

 <p className="text-base sm:text-lg text-slate-700 font-sans leading-relaxed max-w-4xl">
 {study.solution}
 </p>
 </section>

 {/* 3. Execution Roadmap (if verified process array exists) */}
 {study.process && study.process.length > 0 && (
 <section aria-labelledby="section-process" className="space-y-6">
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-xs font-mono font-bold uppercase tracking-wider text-amber-900 shadow-2xs">
 <Milestone className="w-4 h-4 text-amber-600 shrink-0" aria-hidden="true" />
 <span>Execution Roadmap</span>
 </div>

 <h2
 id="section-process"
 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-snug"
 >
 Engagement Milestones
 </h2>

 <ol className="grid grid-cols-1 gap-4">
 {study.process.map((step, idx) => (
 <li
 key={idx}
 className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl border border-white/90 bg-white/85 shadow-[0_10px_30px_rgba(15,23,42,0.06)]  hover:shadow-[0_16px_40px_rgba(14,165,233,0.12)] transition-all"
 >
 <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-amber-100 text-amber-900 border border-amber-300 shrink-0">
 {String(idx + 1).padStart(2, "0")}
 </span>
 <p className="text-sm sm:text-base text-slate-700 font-sans leading-relaxed pt-0.5">
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
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-xs font-mono font-bold uppercase tracking-wider text-amber-900 shadow-2xs">
 <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" aria-hidden="true" />
 <span>Verified Results</span>
 </div>

 <h2
 id="section-outcomes"
 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-snug"
 >
 Measurable Deliverables &amp; Enterprise Momentum
 </h2>

 <ul className="space-y-4 max-w-4xl">
 {study.outcomes.map((outcome, idx) => (
 <li key={idx} className="flex items-start gap-3.5">
 <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-1" aria-hidden="true" />
 <span className="text-sm sm:text-base font-medium text-slate-800 font-sans leading-relaxed">
 {outcome}
 </span>
 </li>
 ))}
 </ul>
 </section>
 )}

 {/* 5. Verified Client Quote (rendered ONLY if quote exists) */}
 {study.quote && study.quote.text && (
 <section aria-label="Client Perspective" className="pt-4">
 <blockquote className="relative rounded-3xl border border-white/90 bg-white/85 p-6 sm:p-8 space-y-4 shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
 <Quote className="w-8 h-8 text-amber-500/40 absolute top-6 right-6" aria-hidden="true" />
 <p className="font-serif text-lg sm:text-xl italic text-slate-900 leading-relaxed">
 &ldquo;{study.quote.text}&rdquo;
 </p>
 {(study.quote.author || study.quote.role) && (
 <footer className="text-xs font-sans text-slate-600 font-medium">
 {study.quote.author && <strong className="text-slate-950">{study.quote.author}</strong>}
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
