import * as React from "react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/motion";

export function CompanyStory() {
  return (
    <section
      aria-labelledby="company-story-heading"
      className="py-16 sm:py-20 lg:py-28 bg-[#FFFFFF] border-b border-purple-100"
    >
      <Container width="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Problem Diagnosis & Editorial Highlight (5 cols) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <FadeIn direction="up" distance={16} delay={0.05}>
              <SectionHeading
                id="company-story-heading"
                eyebrow="WHY WE EXIST"
                eyebrowAccent
                title="The Structural Divide in Enterprise Capital."
                align="left"
              />

              <div className="p-6 rounded-2xl bg-white border border-purple-100 space-y-3 mt-6">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#581C87] block">
                  The Core Reality
                </span>
                <blockquote className="font-serif text-lg sm:text-xl font-medium text-[#0F0A1A] leading-snug italic">
                  &ldquo;Indian entrepreneurs excel on the shop floor. But in bank credit appraisal and statutory scrutiny, operational grit alone does not guarantee institutional access.&rdquo;
                </blockquote>
                <p className="text-xs text-[#64748B] font-sans leading-relaxed pt-1">
                  Central programs provide sovereign risk coverage up to 85%, yet thousands of deserving enterprises miss out due to documentation and compliance misalignment.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: In-Depth Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-8 font-sans text-[#475569]">
            <FadeIn direction="up" distance={16} delay={0.1}>
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-bold text-[#0F0A1A] leading-snug">
                  01. The Problem: Operational Strength vs. Institutional Legibility
                </h3>
                <p className="type-body leading-relaxed">
                  Across North Indian manufacturing belts, from heavy fabrication and automotive tooling to agro-processing, entrepreneurs run resilient, cash-generating operations. However, when seeking capital expansion or statutory accreditations, they encounter a significant structural wall.
                </p>
                <p className="type-body leading-relaxed">
                  Lenders, state authorities, and certification auditors operate strictly on standardized documentation frameworks: Debt Service Coverage Ratios (DSCR), Credit Monitoring Arrangement (CMA) data, Udyam classifications, and quality management protocols. A single formatting discrepancy or misclassified NIC code can delay critical fund releases for months.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" distance={16} delay={0.15}>
              <div className="space-y-4 pt-4 border-t border-purple-100">
                <h3 className="font-serif text-2xl font-bold text-[#0F0A1A] leading-snug">
                  02. Our Role: The Embedded Strategic Translator
                </h3>
                <p className="type-body leading-relaxed">
                  Agnivridhi India was established to serve as the institutional bridge. Rather than operating as transactional brokers or aggressive middlemen, we function as an embedded advisory partner for business owners.
                </p>
                <p className="type-body leading-relaxed">
                  We translate shop-floor capacity, machinery bills, and expansion visions into audit-grade Detailed Project Reports (DPRs) that meet the exacting standards of bank credit appraisal committees. We de-risk the lending proposal before it ever reaches the underwriter&apos;s desk.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" distance={16} delay={0.2}>
              <div className="space-y-4 pt-4 border-t border-purple-100">
                <h3 className="font-serif text-2xl font-bold text-[#0F0A1A] leading-snug">
                  03. The Result: Measurable Balance Sheet Momentum
                </h3>
                <p className="type-body leading-relaxed">
                  By bringing professional rigor to debt syndication, ISO standardizations, and statutory registrations, we help enterprises lock in sovereign credit guarantee coverage up to ₹5 Crore, realize 15% to 35% non-refundable margin subsidies, and achieve tier-1 corporate vendor eligibility.
                </p>
                <p className="type-body leading-relaxed">
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
