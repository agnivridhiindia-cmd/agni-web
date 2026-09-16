import * as React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/shared/container";
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
 className="py-16 sm:py-20 lg:py-24 bg-slate-950 text-slate-100 border-t border-slate-800/80 relative overflow-hidden"
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
 <div className="max-w-3xl space-y-6">
 <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-950/80  border border-amber-500/40 text-xs font-mono tracking-widest text-amber-300 uppercase shadow-xs">
 <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
 <Sparkles className="w-3.5 h-3.5 text-amber-400" />
 <span>STRATEGIC IMPLEMENTATION DESK</span>
 </div>

 <h2
 id="article-cta-heading"
 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight"
 >
 {isFunding ? (
 <>
 Need assistance syndicating{" "}
 <span className="italic bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
 collateral-free MSME credit
 </span>
 ?
 </>
 ) : (
 <>
 Preparing your enterprise for{" "}
 <span className="italic bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
 statutory accreditation &amp; audits
 </span>
 ?
 </>
 )}
 </h2>

 <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-sans">
 {isFunding
 ? "Agnivridhi's senior debt desk assists emerging manufacturers with institutional DPR modeling, CMA data preparation, and end-to-end bank committee representation."
 : "Our compliance practice provides gap assessments, internal auditor coaching, and documentation calibration to clear Stage 1 and Stage 2 audits without non-conformances."}
 </p>

 <div className="pt-2 flex flex-wrap items-center gap-4">
 <LinkButton
 href={`/contact?subject=${encodeURIComponent(`Advisory Consultation: ${title}`)}`}
 variant="glass-gold"
 size="lg"
 className="max-w-full text-center"
 >
 <span>Request Strategic Assessment</span>
 <ArrowRight className="w-4 h-4 ml-1.5 shrink-0" aria-hidden="true" />
            </LinkButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
