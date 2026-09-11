import * as React from "react";
import { Container } from "@/components/shared/container";

export function ContactHero() {
  return (
    <section
      aria-labelledby="contact-hero-heading"
      className="relative border-b border-slate-800/80 bg-slate-950 text-slate-100 pt-32 pb-12 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-20 overflow-hidden"
    >
      {/* Ambient Blueprint Grid & Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
      >
        <div className="absolute inset-0 bg-blueprint-grid-dark opacity-25 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_60%,transparent_100%)]" />
        <div className="absolute top-1/4 -right-28 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.12)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute bottom-10 -left-28 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.10)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute top-8 left-8 font-mono text-xs text-amber-500/30 select-none">+</div>
        <div className="absolute top-8 right-8 font-mono text-xs text-cyan-400/30 select-none">+</div>
      </div>

      <Container width="wide" className="relative z-10">
        <div className="max-w-3xl space-y-5">
          {/* Standardized Amber Bullet Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-950/80 backdrop-blur-md border border-amber-500/40 text-xs font-mono tracking-widest text-amber-300 uppercase shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span>DIRECT ENGAGEMENT &bull; CONFIDENTIAL INQUIRY DESK</span>
          </div>

          {/* Fraunces Headline H1 */}
          <h1
            id="contact-hero-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.14]"
          >
            Have questions? We&apos;re here to{" "}
            <span className="italic bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              grow your enterprise
            </span>
            .
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed max-w-2xl">
            Connect with our team to discuss debt funding, statutory compliance, quality certifications, and institutional growth solutions tailored to your balance sheet.
          </p>
        </div>
      </Container>
    </section>
  );
}
