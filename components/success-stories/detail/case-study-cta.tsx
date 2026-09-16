import * as React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2, Shield } from "lucide-react";
import { Container } from "@/components/shared/container";
import { LinkButton } from "@/components/ui/link-button";

interface CaseStudyCtaProps {
 caseStudyTitle?: string;
}

export function CaseStudyCta({ caseStudyTitle }: CaseStudyCtaProps) {
 return (
 <section
 aria-labelledby="case-study-cta-title"
 className="py-18 sm:py-24 lg:py-28 bg-slate-950 text-slate-100 border-t border-slate-800/80 relative overflow-hidden"
 >
 {/* Ambient background grid & radiant orbs */}
 <div
 aria-hidden="true"
 className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
 >
 <div className="absolute inset-0 bg-blueprint-grid-dark opacity-25" />
 <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-amber-500/12 rounded-full" />
 <div className="absolute -left-24 -top-24 w-96 h-96 bg-cyan-500/10 rounded-full" />
 <div className="absolute top-8 left-8 font-mono text-xs text-amber-500/30 select-none">+</div>
 <div className="absolute top-8 right-8 font-mono text-xs text-cyan-400/30 select-none">+</div>
 </div>

 <Container width="wide" className="relative z-10">
 <div className="relative z-10 max-w-3xl space-y-6">
 <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-950/80  border border-amber-500/40 text-xs font-mono tracking-widest text-amber-300 uppercase shadow-xs">
 <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
 <Sparkles className="w-3.5 h-3.5 text-amber-400" />
 <span>ENTERPRISE ADVISORY DESK &bull; DIRECT ENGAGEMENT</span>
 </div>

 <h2
 id="case-study-cta-title"
 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight"
 >
 Facing a similar{" "}
 <span className="italic bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
 operational, funding, or compliance hurdle
 </span>
 ?
 </h2>

 <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-sans">
 Connect directly with our senior advisory principals. We evaluate your balance sheet,
 DPR feasibility, and scheme eligibility with zero upfront commitment.
 </p>

 <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
 <div className="flex items-center gap-2">
 <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
 <span>Strict non-disclosure (NDA) protected</span>
 </div>
 <div className="flex items-center gap-2">
 <Shield className="w-4 h-4 text-amber-400 shrink-0" />
 <span>Institutional banking &amp; accreditation expertise</span>
 </div>
 </div>

 <div className="pt-4 flex flex-wrap items-center gap-4">
 <Link
 href={
 caseStudyTitle
 ? `/contact?subject=Case%20Study%20Inquiry:%20${encodeURIComponent(caseStudyTitle)}`
 : "/contact"
 }
 className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold border border-amber-300/40 shadow-[0_8px_24px_rgba(245,158,11,0.35)] hover:from-amber-300 hover:to-amber-500 hover:shadow-[0_12px_32px_rgba(245,158,11,0.5)] transition-all text-sm font-sans"
 >
 <span>Schedule Strategy Discussion</span>
 <ArrowRight className="w-4 h-4 ml-1" />
 </Link>

 <Link
 href="/success-stories"
 className="text-sm font-mono font-semibold text-amber-400 hover:text-amber-300 transition-colors underline-offset-4 hover:underline px-2 py-1"
 >
 Explore All Case Studies &rarr;
 </Link>
 </div>
 </div>

 {/* Subtle decorative ambient gradient */}
 <div
 aria-hidden="true"
 className="absolute -right-24 -bottom-24 w-96 h-96 bg-amber-500/10 rounded-full  pointer-events-none"
        />
      </Container>
    </section>
  );
}
