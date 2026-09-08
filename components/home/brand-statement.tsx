"use client";

import * as React from "react";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function BrandStatement() {
  return (
    <section
      aria-label="Brand Philosophy"
      className="relative overflow-hidden border-b border-cyan-100/80 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.12),transparent_22%),radial-gradient(circle_at_bottom,_rgba(45,212,191,0.14),transparent_28%),linear-gradient(180deg,#f4fdff_0%,#fafdff_18%,#f0fbfa_100%)] py-20 text-[#181226] sm:py-28 lg:py-36"
    >
      {/* Background ambient architectural lines & glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
      >
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(8,145,178,0.15)_0%,rgba(45,212,191,0.08)_48%,transparent_72%)] blur-3xl" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#0891B2_1px,transparent_1px),linear-gradient(to_bottom,#0891B2_1px,transparent_1px)] [background-size:6rem_6rem]" />
      </div>

      <Container width="wide" className="relative z-10">
        <div className="mx-auto max-w-4xl space-y-8 sm:space-y-10">
          {/* Editorial Category Tag */}
          <FadeIn direction="up" distance={14}>
            <div className="inline-flex items-center gap-2.5 text-xs font-mono tracking-widest text-[#0891B2] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0891B2]" />
              <span>THE AGNI DOCTRINE &bull; ENTERPRISE PHILOSOPHY</span>
            </div>
          </FadeIn>

          {/* Large Editorial Statement */}
          <FadeIn direction="up" distance={18} delay={0.08}>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-normal tracking-[-0.02em] text-[#181226] leading-[1.2] max-w-3xl mx-auto">
              &ldquo;Growth becomes sustainable when ambition is supported by{" "}
              <span className="text-[#0891B2] italic font-normal font-editorial">structure</span>.&rdquo;
            </h2>
          </FadeIn>

          {/* Concise Human Paragraph */}
          <FadeIn direction="up" distance={16} delay={0.15}>
            <p className="font-sans text-base sm:text-lg text-[#475569] max-w-2xl mx-auto leading-[1.75] font-normal">
              Most Indian enterprises do not stall for lack of vision  -  they stall
              in the friction between capital access, statutory compliance, and modern
              technology. Agnivridhi India provides the disciplined institutional
              scaffolding that turns industrial ambition into enduring enterprise value.
            </p>
          </FadeIn>

          {/* Discreet Action Anchor */}
          <FadeIn direction="up" distance={12} delay={0.22}>
            <div className="pt-2 flex items-center justify-center gap-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-cyan-200/90 hover:border-[#0891B2] text-xs font-mono tracking-wider uppercase text-[#0891B2] hover:text-[#0E7490] shadow-xs hover:shadow-sm transition-all hover:-translate-y-0.5 group"
              >
                <span>Read Institutional Thesis</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
