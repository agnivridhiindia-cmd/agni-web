import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, ShieldCheck } from "lucide-react";
import { Container } from "@/components/shared/container";
import { siteConfig } from "@/lib/site-config";

export function InstitutionalNarrative() {
  const { founder } = siteConfig;

  return (
    <section
      aria-labelledby="institutional-narrative-heading"
      className="relative py-20 sm:py-26 lg:py-36 border-b border-[#A6CCEA] overflow-hidden bg-gradient-to-b from-[#D5E7F4] via-[#C6E0F2] to-[#B8D7EE]"
    >
      {/* Precision architectural ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
      >
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-300/80 to-transparent" />
        <div className="absolute inset-0 [background-image:radial-gradient(#94A3B8_1px,transparent_1px)] [background-size:32px_32px] opacity-35 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_40%,#000_50%,transparent_100%)]" />
        <div className="absolute top-1/4 -left-32 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.1)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.05)_0%,transparent_70%)] blur-3xl" />
      </div>

      <Container width="wide" className="relative z-10 space-y-8 sm:space-y-10">
        {/* Section Eyebrow & Main Statement */}
        <div className="space-y-3.5 max-w-3xl">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#A6CCEA] text-xs font-mono tracking-widest text-slate-800 shadow-2xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span>ABOUT AGNIVRIDHI &bull; INSTITUTIONAL LEADERSHIP</span>
          </div>

          <h2
            id="institutional-narrative-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-[-0.03em] text-slate-900 !leading-[1.14]"
          >
            Built on Conviction.
            <br />
            <span className="text-amber-600 font-bold font-heading">
              &ldquo;Structure is what turns ambition into scale.&rdquo;
            </span>
          </h2>
        </div>

        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Founder Photo */}
          <div className="lg:col-span-5 space-y-4 max-w-md mx-auto lg:max-w-none w-full">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-950 shadow-[0_20px_50px_rgba(0,0,0,0.25)] [transform:translateZ(0)] group">
              {/* Corner Blueprint Crosshairs */}
              <div className="absolute top-2 left-2 font-mono text-xs text-cyan-400/60 z-30 select-none">+</div>
              <div className="absolute bottom-2 right-2 font-mono text-xs text-cyan-400/60 z-30 select-none">+</div>

              <div className="relative aspect-[4/4.5] w-full bg-slate-950 overflow-hidden">
                {/* Fallback ambient artwork & branding while image decodes */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#132042] via-[#0E1833] to-[#0B1329] text-center p-6 select-none" aria-hidden="true">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-3 shadow-inner">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="font-heading text-sm font-semibold text-slate-200">
                    {founder.name}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-amber-400/80 mt-0.5">
                    India Business Awards 2025 &bull; New Delhi
                  </span>
                </div>

                <Image
                  src="/img/award-team-1.jpeg"
                  alt={`${founder.name} receiving India Business Awards 2025`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover object-top transform transition-transform duration-1000 group-hover:scale-[1.02] relative z-10"
                />

                {/* Dark cinematic vignette — intentionally kept dark */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080909]/90 via-[#080909]/20 to-transparent pointer-events-none z-20" />
                <div className="absolute inset-0 bg-noise pointer-events-none z-20" />
              </div>

              {/* Bottom Attribution Bar */}
              <div className="p-5 bg-slate-950/95 border-t border-slate-800 shadow-[0_8px_24px_rgba(0,0,0,0.6)] space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-base sm:text-lg font-medium text-white">
                      {founder.name}
                    </h3>
                    <p className="text-[11px] font-mono text-amber-400 uppercase tracking-wider font-semibold">
                      {founder.role} &bull; Agnivridhi India
                    </p>
                  </div>

                  <div className="w-9 h-9 rounded-xl bg-amber-950/60 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>India Business Awards 2025</span>
                  <span className="text-amber-400 font-medium">New Delhi</span>
                </div>
              </div>
            </div>

            {/* Leadership Verification Pill */}
            <div className="p-4 rounded-2xl bg-white/95 border border-[#A6CCEA] shadow-[0_4px_16px_rgba(15,23,42,0.04)] [transform:translateZ(0)] flex items-center justify-between text-xs font-mono text-slate-700">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-500" />
                <span>Executive Member</span>
              </div>
              <span className="text-slate-900 font-semibold">MSME Growth Council</span>
            </div>
          </div>

          {/* Right Column: Institutional Narrative */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">
            <p className="font-sans text-sm sm:text-base lg:text-[1.05rem] text-slate-800 leading-[1.8] font-medium">
              Agnivridhi India bridges the critical gap between ambitious MSMEs and commercial banking committees. We replace informal middlemen with audit-grade financial modeling, statutory compliance, and enterprise technology under one roof.
            </p>

            {/* The Three Operating Principles in Apple Frosted Glass Bento Shell */}
            <div className="space-y-4 pt-1">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#0369A1] font-bold pl-1">
                OUR OPERATING PRINCIPLES
              </h3>

              <div className="rounded-[2rem] border border-white/80 bg-white/60 backdrop-blur-xl p-6 sm:p-7 shadow-[inset_0_1px_2px_rgba(255,255,255,0.95),0_20px_45px_-12px_rgba(14,165,233,0.08)] ring-1 ring-slate-900/5 divide-y divide-slate-200/60">
                <div className="pb-4 space-y-1.5 first:pt-0">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs text-amber-600 font-semibold">01</span>
                    <h4 className="font-heading text-lg sm:text-xl text-slate-900 font-semibold">
                      Direct Institutional Syndication
                    </h4>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-slate-700 leading-[1.7] pl-6">
                    Zero middlemen—audit-grade credit dossiers and TEV reports formulated for direct submission to scheduled commercial bank committees.
                  </p>
                </div>

                <div className="py-4 space-y-1.5">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs text-amber-600 font-semibold">02</span>
                    <h4 className="font-heading text-lg sm:text-xl text-slate-900 font-semibold">
                      Sovereign Collateral-Free Credit
                    </h4>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-slate-700 leading-[1.7] pl-6">
                    Prioritizing sovereign guarantee backstops (CGTMSE up to ₹5 Cr, PMEGP 35% subsidies) to unlock capex without pledging promoter property.
                  </p>
                </div>

                <div className="pt-4 space-y-1.5 last:pb-0">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs text-amber-600 font-semibold">03</span>
                    <h4 className="font-heading text-lg sm:text-xl text-slate-900 font-semibold">
                      Quad-Desk Execution Synchronization
                    </h4>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-slate-700 leading-[1.7] pl-6">
                    Synchronized project finance, regulatory compliance, custom software, and digital marketing operating under one unified desk.
                  </p>
                </div>
              </div>
            </div>

            {/* Apple Liquid Glass CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-b from-slate-900/90 via-slate-900/95 to-slate-950/95 backdrop-blur-xl text-white font-sans font-semibold text-xs tracking-wider uppercase border border-white/20 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.35),0_10px_24px_-4px_rgba(15,23,42,0.25)] hover:border-white/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all group [transform:translateZ(0)]"
              >
                <span>Read Full Story</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/75 hover:bg-white/95 backdrop-blur-xl border border-white text-xs font-mono tracking-wider uppercase text-slate-800 shadow-[inset_0_1px_2px_rgba(255,255,255,1),0_8px_20px_rgba(15,23,42,0.06)] hover:border-white hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all"
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