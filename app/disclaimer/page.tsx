import * as React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { LegalHeader } from "@/components/legal/legal-header";
import { LegalNav } from "@/components/legal/legal-nav";
import { LegalLayout } from "@/components/legal/legal-layout";

export const metadata: Metadata = {
  title: "Regulatory Disclaimer | Agnivridhi India",
  description:
    "Official regulatory disclaimer and institutional consulting status of Agnivridhi India regarding government schemes, loans, and subsidies.",
  alternates: {
    canonical: "https://agnivridhi.com/disclaimer",
  },
  openGraph: {
    title: "Regulatory Disclaimer | Agnivridhi India",
    description:
      "Official regulatory disclaimer and institutional consulting status of Agnivridhi India regarding government schemes, loans, and subsidies.",
    url: "https://agnivridhi.com/disclaimer",
    siteName: "Agnivridhi India",
    type: "website",
  },
};

export default function DisclaimerPage() {
  const { city, state, country } = siteConfig.company.location;

  return (
    <div className="min-h-screen bg-background">
      {/* 1. Compact Editorial Header */}
      <LegalHeader
        eyebrow="REGULATORY DISCLOSURES"
        title="Regulatory Disclaimer"
        subtitle="Important information regarding our independent consulting status, scheme parameters, and sanction policies."
        lastUpdated="August 2024"
      />

      {/* 2. Legal Navigation Bar */}
      <LegalNav currentPage="disclaimer" />

      {/* 3. Structured Legal Reading Body */}
      <LegalLayout>
        <section aria-labelledby="section-independence" className="space-y-3.5">
          <h2
            id="section-independence"
            className="font-serif text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight"
          >
            1. Independent Advisory Firm
          </h2>
          <p>
            Agnivridhi India (&ldquo;Agnivridhi&rdquo;) is an independent corporate management and debt
            syndication consulting firm based in {city}, {state}, {country}.
          </p>
          <p>
            Agnivridhi is not an affiliate, subsidiary, empaneled agency, or representative of the
            Ministry of Micro, Small &amp; Medium Enterprises (MSME), Small Industries Development Bank
            of India (SIDBI), the Credit Guarantee Fund Trust for Micro and Small Enterprises
            (CGTMSE), Khadi and Village Industries Commission (KVIC), or any scheduled commercial bank
            or Non-Banking Financial Company (NBFC).
          </p>
        </section>

        <section aria-labelledby="section-no-guarantee" className="space-y-3.5">
          <h2
            id="section-no-guarantee"
            className="font-serif text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight"
          >
            2. Strict No-Guarantee Policy on Loan Sanctions &amp; Subsidies
          </h2>
          <p>
            In compliance with Reserve Bank of India (RBI) regulations and institutional consulting
            ethics, Agnivridhi India does not promise, advertise, or charge fees for guaranteed loan
            approvals, guaranteed interest subventions, or guaranteed government subsidies.
          </p>
          <p>
            The decision to sanction credit facilities, determine margin requirements, apply risk
            premiums, and release loan disbursements rests solely with the competent credit committees
            of member lending institutions (MLIs) based on independent risk appraisal, debt service
            coverage ratios (DSCR), and borrower creditworthiness. Agnivridhi assists clients by
            structuring institutional-grade DPRs, CMA projections, and ensuring regulatory compliance.
          </p>
        </section>

        <section aria-labelledby="section-gazette-accuracy" className="space-y-3.5">
          <h2
            id="section-gazette-accuracy"
            className="font-serif text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight"
          >
            3. Informational Nature of Online Scheme Metrics
          </h2>
          <p>
            Statutory scheme ceilings, interest subsidy bands, and guarantee percentages referenced on
            this website (such as the CGTMSE ₹5 Crore sovereign guarantee ceiling or PMEGP subsidy
            allocations) reflect publicly available gazette notifications and circulars issued by
            statutory authorities.
          </p>
          <p>
            Government departments and credit trusts periodically revise eligibility thresholds,
            guarantee fee schedules, and scheme validity periods. While Agnivridhi endeavors to keep
            all website materials aligned with current circulars, readers should verify applicable
            terms with official gazette releases before finalizing capital commitments.
          </p>
        </section>

        <section aria-labelledby="section-due-diligence" className="space-y-3.5">
          <h2
            id="section-due-diligence"
            className="font-serif text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight"
          >
            4. Professional Due Diligence &amp; Diagnostic Purpose
          </h2>
          <p>
            Content published across our website, case studies, and insights repository is provided
            strictly for informational and preliminary diagnostic evaluation. It does not constitute
            formal financial underwriting, legal opinion, or chartered accounting certification.
            Enterprises should seek independent advice from certified financial planners, chartered
            accountants, and legal counsel prior to executing binding commercial agreements.
          </p>
        </section>

        <section aria-labelledby="section-contact" className="space-y-3.5">
          <h2
            id="section-contact"
            className="font-serif text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight"
          >
            5. Verification &amp; Inquiries
          </h2>
          <p>
            For questions regarding our institutional scope, regulatory compliance framework, or to
            request verification of advisory credentials, connect directly with our advisory desk at
            our registered location in {city}, {state}, {country}.
          </p>
        </section>
      </LegalLayout>
    </div>
  );
}
