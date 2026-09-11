import * as React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/shared/container";
import { LinkButton } from "@/components/ui/link-button";

export function SuccessStoriesCta() {
  return (
    <section
      aria-labelledby="stories-cta-heading"
      className="py-18 sm:py-24 lg:py-28 bg-slate-950 text-slate-100 border-t border-slate-800/80 relative overflow-hidden"
    >
      {/* Ambient background grid & radiant orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
      >
        <div className="absolute inset-0 bg-blueprint-grid-dark opacity-25" />
        <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-amber-500/12 rounded-full blur-3xl" />
        <div className="absolute -left-24 -top-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-8 left-8 font-mono text-xs text-amber-500/30 select-none">+</div>
        <div className="absolute top-8 right-8 font-mono text-xs text-cyan-400/30 select-none">+</div>
      </div>

      <Container width="wide" className="relative z-10">
        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-950/80 backdrop-blur-md border border-amber-500/40 text-xs font-mono tracking-widest text-amber-300 uppercase shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>ENTERPRISE VIABILITY &bull; PRELIMINARY DIAGNOSTIC</span>
          </div>

          <h2
            id="stories-cta-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight"
          >
            Ready to structure{" "}
            <span className="italic bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              measurable outcomes
            </span>{" "}
            for your enterprise?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-sans">
            Connect with our senior consultants to evaluate collateral-free scheme eligibility,
            DPR viability, or statutory certification roadmaps with zero upfront commitment.
          </p>

          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Zero fabricated outcome projections</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Confidential engagement under NDA</span>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold border border-amber-300/40 shadow-[0_8px_24px_rgba(245,158,11,0.35)] hover:from-amber-300 hover:to-amber-500 hover:shadow-[0_12px_32px_rgba(245,158,11,0.5)] transition-all text-sm font-sans"
            >
              <span>Request Diagnostic Assessment</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>

            <Link
              href="/services"
              className="text-sm font-mono font-semibold text-amber-400 hover:text-amber-300 transition-colors underline-offset-4 hover:underline px-2 py-1"
            >
              Explore Practice Catalog &rarr;
            </Link>
          </div>
        </div>

        {/* Ambient glow decoration */}
        <div
          aria-hidden="true"
          className="absolute -right-20 -bottom-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"
        />
      </Container>
    </section>
  );
}
