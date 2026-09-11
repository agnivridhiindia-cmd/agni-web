import * as React from "react";
import Link from "next/link";
import { UserCheck, ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/motion";

export function FounderTransition() {
  return (
    <section
      aria-labelledby="leadership-transition-heading"
      className="relative py-18 sm:py-24 lg:py-28 bg-slate-950 text-slate-100 border-t border-slate-800/80 overflow-hidden"
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
        <FadeIn direction="up" distance={16} delay={0.05}>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-950/80 backdrop-blur-md border border-amber-500/40 text-xs font-mono tracking-widest text-amber-300 uppercase shadow-xs mx-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <UserCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>PRINCIPAL-LED ADVISORY &bull; DIRECT ENGAGEMENT</span>
            </div>

            <h2
              id="leadership-transition-heading"
              className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-white tracking-tight leading-snug"
            >
              Direct Advisory Accountability at{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 italic font-normal font-editorial">
                Every Stage of Scale.
              </span>
            </h2>

            <p className="type-body text-slate-300 font-sans leading-relaxed">
              Unlike broad consulting practices that delegate critical client files to junior teams, Agnivridhi India is built on hands-on principal involvement. Every debt proposal, Detailed Project Report (DPR), and compliance audit strategy is structured and reviewed directly by practice leads who understand the realities of Indian manufacturing and lending frameworks.
            </p>

            <div className="pt-2 flex items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold border border-amber-300/40 shadow-[0_8px_24px_rgba(245,158,11,0.35)] hover:from-amber-300 hover:to-amber-500 hover:shadow-[0_12px_32px_rgba(245,158,11,0.5)] transition-all text-sm font-sans"
              >
                <span>Engage Our Advisory Desk</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
