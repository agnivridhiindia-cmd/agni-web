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
      className="relative bg-[#080909] text-[#F3EFE7] py-20 sm:py-28 lg:py-36 border-b border-white/[0.08] overflow-hidden"
    >
      {/* Background ambient architectural lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 select-none opacity-[0.03]"
      >
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:6rem_6rem]" />
      </div>

      <Container width="wide" className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-10">
          {/* Editorial Category Tag */}
          <FadeIn direction="up" distance={14}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono tracking-widest text-[#C79A4A] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C79A4A]" />
              <span>THE AGNI DOCTRINE &bull; ENTERPRISE PHILOSOPHY</span>
            </div>
          </FadeIn>

          {/* Large Editorial Statement */}
          <FadeIn direction="up" distance={18} delay={0.08}>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-[#F3EFE7] leading-[1.15]">
              &ldquo;Growth becomes sustainable when ambition is supported by{" "}
              <span className="text-[#C79A4A] italic font-light">structure</span>.&rdquo;
            </h2>
          </FadeIn>

          {/* Concise Human Paragraph */}
          <FadeIn direction="up" distance={16} delay={0.15}>
            <p className="font-sans text-base sm:text-lg text-[#A5A29A] max-w-2xl mx-auto leading-relaxed font-normal">
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
                className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#C79A4A] hover:text-[#DFC286] transition-colors group"
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
