import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, CheckCircle2, ShieldCheck } from "lucide-react";
import { Container } from "@/components/shared/container";
import { siteConfig } from "@/lib/site-config";

export function InstitutionalNarrative() {
  const { founder } = siteConfig;

  return (
    <section
      aria-labelledby="institutional-narrative-heading"
      className="relative bg-gradient-to-b from-[#FFFFFF] via-[#FAF8FE] to-[#FFFFFF] text-[#181226] pt-14 pb-16 sm:pt-18 sm:pb-20 lg:pt-20 lg:pb-24 border-b border-cyan-100/80 overflow-hidden"
    >
      {/* Ambient background lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
      >
        <div className="absolute top-1/4 -left-32 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.06)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.04)_0%,transparent_70%)] blur-3xl" />
      </div>

      <Container width="wide" className="relative z-10 space-y-8 sm:space-y-10">
        {/* Section Eyebrow & Main Statement */}
        <div className="space-y-3.5 max-w-3xl">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-cyan-200/90 text-[#0891B2] text-xs font-mono tracking-widest uppercase shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0891B2]" />
            <span>ABOUT AGNIVRIDHI &bull; INSTITUTIONAL LEADERSHIP</span>
          </div>

          <h2
            id="institutional-narrative-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-normal tracking-[-0.015em] text-[#181226] !leading-[1.18]"
          >
            Built on Conviction.
            <br />
            <span className="text-[#0891B2] italic font-normal font-editorial">
              &ldquo;Structure is what turns ambition into scale.&rdquo;
            </span>
          </h2>
        </div>

        {/* 2-Column Split: Centered Vertically in the Middle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Authentic Founder / Award Staging (5 cols) */}
          <div className="lg:col-span-5 space-y-4 max-w-md mx-auto lg:max-w-none w-full">
            <div className="relative rounded-3xl overflow-hidden border border-white/60 bg-white/85 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_20px_50px_rgba(8,145,178,0.1)] [transform:translateZ(0)] group">
              {/* Corner Blueprint Crosshairs */}
              <div className="absolute top-2 left-2 font-mono text-xs text-[#0891B2]/60 z-30 select-none">+</div>
              <div className="absolute bottom-2 right-2 font-mono text-xs text-[#0891B2]/60 z-30 select-none">+</div>

              <div className="relative aspect-[4/4.5] w-full">
                <Image
                  src="/img/award-team-1.jpeg"
                  alt={`${founder.name} receiving India Business Awards 2025`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover object-top transform transition-transform duration-1000 group-hover:scale-[1.02]"
                />

                {/* Dark cinematic vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080909]/90 via-[#080909]/20 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-noise pointer-events-none" />
              </div>

              {/* Bottom Attribution Bar */}
              <div className="p-5 bg-white/90 border-t border-cyan-100/90 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-base sm:text-lg font-medium text-[#181226]">
                      {founder.name}
                    </h3>
                    <p className="text-[11px] font-mono text-[#0891B2] uppercase tracking-wider font-semibold">
                      {founder.role} &bull; Agnivridhi India
                    </p>
                  </div>

                  <div className="w-9 h-9 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-[#0891B2] shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                </div>

                <div className="pt-2 border-t border-cyan-100/90 flex items-center justify-between text-[11px] font-mono text-[#64748B]">
                  <span>India Business Awards 2025</span>
                  <span className="text-[#0891B2] font-medium">New Delhi</span>
                </div>
              </div>
            </div>

            {/* Leadership Verification Pill */}
            <div className="p-4 rounded-2xl bg-white/85 border border-white/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_4px_16px_rgba(8,145,178,0.05)] [transform:translateZ(0)] flex items-center justify-between text-xs font-mono text-[#475569]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0891B2]" />
                <span>Executive Member</span>
              </div>
              <span className="text-[#181226] font-semibold">MSME Growth Council</span>
            </div>
          </div>

          {/* Right Column: Balanced Institutional Narrative & Principles (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">
            <p className="font-sans text-sm sm:text-base lg:text-[1.05rem] text-[#334155] leading-[1.8]">
              Agnivridhi India bridges the critical gap between ambitious MSMEs and commercial banking committees. We replace informal middlemen with audit-grade financial modeling, statutory compliance, and enterprise technology under one roof.
            </p>

            {/* The Three Operating Principles */}
            <div className="space-y-4 pt-1">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#0891B2] font-semibold">
                OUR OPERATING PRINCIPLES
              </h3>

              <div className="divide-y divide-cyan-100/90 border-y border-cyan-100/90">
                <div className="py-4 sm:py-4.5 space-y-1.5">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs text-[#0891B2] font-semibold">01</span>
                    <h4 className="font-serif text-lg sm:text-xl text-[#181226] font-medium">
                      Direct Institutional Syndication
                    </h4>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-[#475569] leading-[1.7] pl-6">
                    Zero middlemen—audit-grade credit dossiers and TEV reports formulated for direct submission to scheduled commercial bank committees.
                  </p>
                </div>

                <div className="py-4 sm:py-4.5 space-y-1.5">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs text-[#0891B2] font-semibold">02</span>
                    <h4 className="font-serif text-lg sm:text-xl text-[#181226] font-medium">
                      Sovereign Collateral-Free Credit
                    </h4>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-[#475569] leading-[1.7] pl-6">
                    Prioritizing sovereign guarantee backstops (CGTMSE up to ₹5 Cr, PMEGP 35% subsidies) to unlock capex without pledging promoter property.
                  </p>
                </div>

                <div className="py-4 sm:py-4.5 space-y-1.5">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs text-[#0891B2] font-semibold">03</span>
                    <h4 className="font-serif text-lg sm:text-xl text-[#181226] font-medium">
                      Quad-Desk Execution Synchronization
                    </h4>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-[#475569] leading-[1.7] pl-6">
                    Synchronized project finance, regulatory compliance, custom software, and digital marketing operating under one unified desk.
                  </p>
                </div>
              </div>
            </div>

            {/* Link to Full About Page */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-b from-[#0AA5C7]/90 via-[#0891B2]/95 to-[#0E7490]/95 backdrop-blur-md border border-white/25 text-white font-sans font-semibold text-xs tracking-wider uppercase transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_4px_16px_rgba(8,145,178,0.22)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_8px_24px_rgba(8,145,178,0.32)] hover:-translate-y-0.5 group [transform:translateZ(0)]"
              >
                <span>Read Full Story</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-cyan-200/90 hover:border-[#0891B2] text-[#181226] hover:text-[#0891B2] bg-white/80 backdrop-blur-md hover:bg-white/95 text-xs font-mono tracking-wider uppercase transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.85),0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_4px_14px_rgba(8,145,178,0.12)] hover:-translate-y-0.5 [transform:translateZ(0)]"
              >
                <span>Consult Leadership</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
