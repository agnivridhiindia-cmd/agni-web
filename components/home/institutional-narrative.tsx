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
      className="relative bg-gradient-to-b from-[#FFFFFF] via-[#FAF8FE] to-[#FFFFFF] text-[#181226] py-20 sm:py-28 lg:py-36 border-b border-cyan-100/80 overflow-hidden"
    >
      {/* Ambient background lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
      >
        <div className="absolute top-1/4 -left-32 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.06)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.04)_0%,transparent_70%)] blur-3xl" />
      </div>

      <Container width="wide" className="relative z-10 space-y-16 sm:space-y-20">
        {/* Section Eyebrow & Main Statement */}
        <div className="space-y-4 max-w-3xl">
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

        {/* 2-Column Split: Authentic Leadership Frame vs Methodology */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Authentic Founder / Award Staging (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden border border-cyan-200/90 bg-white shadow-[0_20px_50px_-12px_rgba(88,28,135,0.12),0_2px_8px_rgba(0,0,0,0.04)] group">
              {/* Corner Blueprint Crosshairs */}
              <div className="absolute top-2 left-2 font-mono text-xs text-[#0891B2]/60 z-30 select-none">+</div>
              <div className="absolute bottom-2 right-2 font-mono text-xs text-[#0891B2]/60 z-30 select-none">+</div>

              <div className="relative aspect-[4/5] w-full">
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
              <div className="p-5 bg-[#FAF8FE] border-t border-cyan-100/90 space-y-2">
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
            <div className="p-4 rounded-2xl bg-white border border-cyan-200/80 shadow-xs flex items-center justify-between text-xs font-mono text-[#475569]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0891B2]" />
                <span>Executive Member</span>
              </div>
              <span className="text-[#181226] font-semibold">MSME Growth Council</span>
            </div>
          </div>

          {/* Right Column: In-Depth Institutional Narrative & 3 Principles (7 cols) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4 font-sans text-sm sm:text-base text-[#475569] leading-[1.75]">
              <p>
                In an advisory ecosystem frequently clouded by unverified brokers and predatory commissions, Agnivridhi India was founded with a clear institutional doctrine: Indian MSMEs do not fail because of insufficient ambition or poor technical grit  -  they stall in the documentation and regulatory friction between commercial banking credit committees and statutory departments.
              </p>
              <p>
                Headquartered in Noida Sector 62, our multidisciplinary desk brings audit-grade financial modeling, regulatory certification rigor, enterprise software engineering, and high-performance digital marketing under one unified execution platform.
              </p>
            </div>

            {/* The Three Operating Principles */}
            <div className="space-y-4 pt-2">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#0891B2] font-semibold">
                OUR OPERATING PRINCIPLES
              </h3>

              <div className="divide-y divide-cyan-100/90 border-y border-cyan-100/90">
                <div className="py-4 space-y-1.5">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs text-[#0891B2] font-semibold">01</span>
                    <h4 className="font-serif text-lg sm:text-xl text-[#181226] font-medium">
                      Zero Unregulated Intermediation
                    </h4>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-[#475569] leading-[1.7] pl-6">
                    Every credit dossier, TEV report, and subsidy claim is formulated for direct submission to scheduled commercial bank committees and central statutory portals, eliminating informal middlemen.
                  </p>
                </div>

                <div className="py-4 space-y-1.5">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs text-[#0891B2] font-semibold">02</span>
                    <h4 className="font-serif text-lg sm:text-xl text-[#181226] font-medium">
                      Sovereign Leverage Before Promoter Property
                    </h4>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-[#475569] leading-[1.7] pl-6">
                    We prioritize government credit guarantee trust backstops (CGTMSE up to   -  5 Cr, PMEGP 35% subsidies) to unlock project capex without pledging personal residential or commercial real estate.
                  </p>
                </div>

                <div className="py-4 space-y-1.5">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs text-[#0891B2] font-semibold">03</span>
                    <h4 className="font-serif text-lg sm:text-xl text-[#181226] font-medium">
                      Quad-Desk Execution Synchronization
                    </h4>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-[#475569] leading-[1.7] pl-6">
                    Funding without statutory compliance creates tax liability; digital expansion without software robustness creates churn. Our four desks deliver synchronized enterprise momentum.
                  </p>
                </div>
              </div>
            </div>

            {/* Link to Full About Page */}
            <div className="pt-2 flex items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0891B2] hover:bg-[#0E7490] text-white font-sans font-semibold text-xs tracking-wider uppercase transition-all shadow-[0_4px_16px_rgba(88,28,135,0.22)] hover:shadow-[0_8px_24px_rgba(88,28,135,0.3)] hover:-translate-y-0.5 group"
              >
                <span>Read Full Institutional Story</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-cyan-200/90 hover:border-[#0891B2] text-[#181226] hover:text-[#0891B2] bg-white hover:bg-cyan-50 text-xs font-mono tracking-wider uppercase transition-all shadow-xs hover:-translate-y-0.5"
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
