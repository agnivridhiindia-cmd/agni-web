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
      className="relative bg-gradient-to-b from-[#F5F1FB] via-[#FAF8FE] to-[#F5F1FB] text-[#181226] py-20 sm:py-28 lg:py-36 border-b border-purple-100/80 overflow-hidden"
    >
      {/* Background ambient architectural lines & glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.07)_0%,rgba(168,85,247,0.03)_50%,transparent_70%)] blur-3xl" />
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,#581C87_1px,transparent_1px),linear-gradient(to_bottom,#581C87_1px,transparent_1px)] [background-size:6rem_6rem] opacity-[0.025]" />
      </div>

      <Container width="wide" className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-10">
          {/* Editorial Category Tag */}
          <FadeIn direction="up" distance={14}>
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-purple-200/90 text-xs font-mono tracking-widest text-[#581C87] uppercase shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#581C87]" />
              <span>THE AGNI DOCTRINE &bull; ENTERPRISE PHILOSOPHY</span>
            </div>
          </FadeIn>

          {/* Large Editorial Statement */}
          <FadeIn direction="up" distance={18} delay={0.08}>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-normal tracking-[-0.02em] text-[#181226] leading-[1.2] max-w-3xl mx-auto">
              &ldquo;Growth becomes sustainable when ambition is supported by{" "}
              <span className="text-[#581C87] italic font-normal font-editorial">structure</span>.&rdquo;
            </h2>
          </FadeIn>

          {/* Concise Human Paragraph */}
          <FadeIn direction="up" distance={16} delay={0.15}>
            <p className="font-sans text-base sm:text-lg text-[#475569] max-w-2xl mx-auto leading-[1.75] font-normal">
              Most Indian enterprises do not stall for lack of vision—they stall
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-purple-200/90 hover:border-[#581C87] text-xs font-mono tracking-wider uppercase text-[#581C87] hover:text-[#4C1D95] shadow-xs hover:shadow-sm transition-all hover:-translate-y-0.5 group"
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
