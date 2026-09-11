import * as React from "react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/motion";

export function CompanyStory() {
  return (
    <section
      aria-labelledby="company-story-heading"
      className="relative py-16 sm:py-20 lg:py-28 bg-tech-obsidian text-white border-b border-slate-800/80 overflow-hidden"
    >
      {/* Ambient Warm & Cyan Texture */}
      <div
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-blueprint-grid-dark opacity-25 [mask-image:radial-gradient(ellipse_85%_70%_at_50%_50%,#000_65%,transparent_100%)]" />
        <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.12)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute bottom-10 -right-32 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.10)_0%,transparent_70%)] blur-3xl" />
      </div>

      <Container width="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Problem Diagnosis & Editorial Highlight (5 cols) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <FadeIn direction="up" distance={16} delay={0.05}>
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-950/80 backdrop-blur-md border border-amber-500/40 text-xs font-mono tracking-widest text-amber-300 uppercase shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  <span>WHY WE EXIST &bull; THE DIVIDE</span>
                </div>

                <h2
                  id="company-story-heading"
                  className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-medium tracking-tight text-white leading-[1.18]"
                >
                  The Structural Divide in{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 italic font-normal font-editorial">
                    Enterprise Capital.
                  </span>
                </h2>
              </div>

              <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-teal-900/80 via-[#043331]/95 to-teal-950/95 border border-teal-500/30 backdrop-blur-md shadow-[0_16px_40px_rgba(0,0,0,0.6),0_0_20px_rgba(20,184,166,0.15)] space-y-3 mt-6">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-400 block">
                  The Core Reality
                </span>
                <blockquote className="font-serif text-lg sm:text-xl font-medium text-amber-300 leading-snug italic">
                  &ldquo;Indian entrepreneurs excel on the shop floor. But in bank credit appraisal and statutory scrutiny, operational grit alone does not guarantee institutional access.&rdquo;
                </blockquote>
                <p className="text-xs text-teal-100/85 font-sans leading-relaxed pt-1">
                  Central programs provide sovereign risk coverage up to 85%, yet thousands of deserving enterprises miss out due to documentation and compliance misalignment.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: In-Depth Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-8 font-sans text-slate-300">
            <FadeIn direction="up" distance={16} delay={0.1}>
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-bold text-white leading-snug">
                  <span className="text-amber-400 font-mono font-normal">01.</span> The Problem: Operational Strength vs. Institutional Legibility
                </h3>
                <p className="type-body leading-relaxed text-slate-300">
                  Across North Indian manufacturing belts, from heavy fabrication and automotive tooling to agro-processing, entrepreneurs run resilient, cash-generating operations. However, when seeking capital expansion or statutory accreditations, they encounter a significant structural wall.
                </p>
                <p className="type-body leading-relaxed text-slate-400">
                  Lenders, state authorities, and certification auditors operate strictly on standardized documentation frameworks: Debt Service Coverage Ratios (DSCR), Credit Monitoring Arrangement (CMA) data, Udyam classifications, and quality management protocols. A single formatting discrepancy or misclassified NIC code can delay critical fund releases for months.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" distance={16} delay={0.15}>
              <div className="space-y-4 pt-6 border-t border-slate-800/80">
                <h3 className="font-serif text-2xl font-bold text-white leading-snug">
                  <span className="text-amber-400 font-mono font-normal">02.</span> Our Role: The Embedded Strategic Translator
                </h3>
                <p className="type-body leading-relaxed text-slate-300">
                  Agnivridhi India was established to serve as the institutional bridge. Rather than operating as transactional brokers or aggressive middlemen, we function as an embedded advisory partner for business owners.
                </p>
                <p className="type-body leading-relaxed text-slate-400">
                  We translate shop-floor capacity, machinery bills, and expansion visions into audit-grade Detailed Project Reports (DPRs) that meet the exacting standards of bank credit appraisal committees. We de-risk the lending proposal before it ever reaches the underwriter&apos;s desk.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" distance={16} delay={0.2}>
              <div className="space-y-4 pt-6 border-t border-slate-800/80">
                <h3 className="font-serif text-2xl font-bold text-white leading-snug">
                  <span className="text-amber-400 font-mono font-normal">03.</span> The Result: Measurable Balance Sheet Momentum
                </h3>
                <p className="type-body leading-relaxed text-slate-300">
                  By bringing professional rigor to debt syndication, ISO standardizations, and statutory registrations, we help enterprises lock in sovereign credit guarantee coverage up to ₹5 Crore, realize 15% to 35% non-refundable margin subsidies, and achieve tier-1 corporate vendor eligibility.
                </p>
                <p className="type-body leading-relaxed text-slate-400">
                  We treat compliance and funding not as isolated administrative tasks, but as interlocking pillars that build enduring enterprise valuation.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
