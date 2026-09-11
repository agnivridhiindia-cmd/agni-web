import * as React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/shared/container";
import { LinkButton } from "@/components/ui/link-button";
import { FadeIn } from "@/components/shared/motion";

export function ServicesCta() {
  return (
    <section
      aria-labelledby="services-cta-heading"
      className="py-20 sm:py-24 lg:py-28 bg-slate-950 text-white border-t border-slate-800/80 relative overflow-hidden"
    >
      {/* Ambient background grid & radiant orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
      >
        <div className="absolute inset-0 bg-blueprint-grid-dark opacity-30" />
        <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute -left-24 -top-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <Container width="wide" className="relative z-10">
        <FadeIn direction="up" distance={18} delay={0.05}>
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-950/80 backdrop-blur-md border border-amber-500/40 text-xs font-mono tracking-widest text-amber-300 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>MULTI-DISCIPLINARY DIAGNOSTIC &bull; ADVISORY TRIAGE</span>
            </div>

            <h2
              id="services-cta-heading"
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight leading-tight"
            >
              Not sure which advisory pathway{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 italic font-light">
                fits your enterprise?
              </span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-sans">
              Our principal consultants perform comprehensive DPR feasibility reviews, Udyam compliance
              audits, and loan eligibility evaluations to identify the highest leverage pathway for your
              enterprise.
            </p>

            {/* Advisory assurances */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Zero speculation on unverified funding outcomes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Synchronized filing across legal, bank &amp; tech desks</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-5">
              <LinkButton
                href="/contact"
                variant="primary"
                size="lg"
                className="rounded-full px-8 py-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold border border-amber-300/40 shadow-[0_8px_24px_rgba(245,158,11,0.35)] hover:shadow-[0_12px_32px_rgba(245,158,11,0.5)] hover:-translate-y-0.5 transition-all text-xs font-mono uppercase tracking-wider"
              >
                <span>Request Diagnostic Consultation</span>
                <ArrowRight className="w-4 h-4 ml-2 text-slate-950" />
              </LinkButton>
              <Link
                href="/success-stories"
                className="text-xs font-mono font-semibold text-amber-400 hover:text-amber-300 uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
              >
                <span>Review Client Impact Stories</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
