import * as React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { createPageMetadata } from "@/lib/seo";
import { LegalHeader } from "@/components/legal/legal-header";
import { LegalNav } from "@/components/legal/legal-nav";
import { LegalLayout } from "@/components/legal/legal-layout";

export const metadata: Metadata = createPageMetadata({
  title: "Terms of Service",
  description:
    "Terms and conditions governing the use of Agnivridhi India website, preliminary advisory diagnostics, and consulting services.",
  path: "/terms",
});

export default function TermsPage() {
  const { state, country } = siteConfig.company.location;

  return (
    <div className="min-h-screen bg-background">
      {/* 1. Compact Editorial Header */}
      <LegalHeader
        eyebrow="LEGAL & GOVERNANCE"
        title="Terms of Service"
        subtitle="Terms governing preliminary inquiries, digital diagnostics, and formal consulting engagements."
        lastUpdated="August 2024"
      />

      {/* 2. Legal Navigation Bar */}
      <LegalNav currentPage="terms" />

      {/* 3. Structured Legal Reading Body */}
      <LegalLayout>
        <section aria-labelledby="section-scope" className="space-y-3.5">
          <h2
            id="section-scope"
            className="font-serif text-xl sm:text-2xl font-semibold text-[#F3EFE7] tracking-tight"
          >
            1. Advisory Scope &amp; Formal Mandates
          </h2>
          <p>
            Agnivridhi India (&ldquo;Agnivridhi&rdquo;) provides professional management consulting,
            debt syndication advisory, Detailed Project Report (DPR) structuring, statutory compliance
            enablement, and digital engineering services.
          </p>
          <p>
            General information provided on this website is for preliminary diagnostic and educational
            purposes. Formal consulting engagements, milestone deliverables, professional fees, and
            representation rights are governed exclusively by written engagement agreements executed
            between Agnivridhi and the client enterprise.
          </p>
        </section>

        <section aria-labelledby="section-status" className="space-y-3.5">
          <h2
            id="section-status"
            className="font-serif text-xl sm:text-2xl font-semibold text-[#F3EFE7] tracking-tight"
          >
            2. Institutional Status &amp; Non-Banking Disclaimer
          </h2>
          <p>
            Agnivridhi India is an independent management consulting firm. We are not a bank,
            non-banking financial company (NBFC), credit rating agency, or statutory government body.
          </p>
          <p>
            Credit sanctions, debt guarantee issuances under CGTMSE, subsidy approvals under PMEGP,
            and statutory certifications are subject exclusively to the independent underwriting
            authority of scheduled commercial banks, member lending institutions, and government
            accreditation committees.
          </p>
        </section>

        <section aria-labelledby="section-authenticity" className="space-y-3.5">
          <h2
            id="section-authenticity"
            className="font-serif text-xl sm:text-2xl font-semibold text-[#F3EFE7] tracking-tight"
          >
            3. Client Responsibility &amp; Information Authenticity
          </h2>
          <p>
            Clients agree to furnish authentic, complete, and verifiable financial records, balance
            sheets, GST filings, and business plans. Agnivridhi constructs financial models, CMA
            projections, and project reports based on data supplied and verified by the client
            promoter and their statutory auditors. Agnivridhi assumes no liability for errors or
            sanction rejections resulting from inaccurate or fabricated client submissions.
          </p>
        </section>

        <section aria-labelledby="section-ip" className="space-y-3.5">
          <h2
            id="section-ip"
            className="font-serif text-xl sm:text-2xl font-semibold text-[#F3EFE7] tracking-tight"
          >
            4. Intellectual Property &amp; Advisory Deliverables
          </h2>
          <p>
            All website architecture, editorial content, brand identifiers, financial modeling
            methodologies, and advisory frameworks are the intellectual property of Agnivridhi India.
            Clients retain ownership of their proprietary enterprise data, while Agnivridhi retains
            the rights to its underlying consulting templates, modeling tools, and engineering code.
          </p>
        </section>

        <section aria-labelledby="section-gazette" className="space-y-3.5">
          <h2
            id="section-gazette"
            className="font-serif text-xl sm:text-2xl font-semibold text-[#F3EFE7] tracking-tight"
          >
            5. Government Schemes &amp; Regulatory Changes
          </h2>
          <p>
            Information regarding central schemes (such as the CGTMSE ÃƒÂ¢ - Å¡Ã‚Â¹5 Crore collateral waiver ceiling
            or PMEGP capital subsidies) is grounded in published guidelines from the Ministry of MSME,
            SIDBI, and KVIC. Central policies and subsidy caps are subject to periodic amendment by
            the Government of India. Agnivridhi is not responsible for policy modifications enacted by
            statutory authorities.
          </p>
        </section>

        <section aria-labelledby="section-liability" className="space-y-3.5">
          <h2
            id="section-liability"
            className="font-serif text-xl sm:text-2xl font-semibold text-[#F3EFE7] tracking-tight"
          >
            6. Limitation of Liability
          </h2>
          <p>
            In no event shall Agnivridhi India, its principals, or its consultants be liable for any
            indirect, consequential, or incidental losses arising from business decisions made by
            enterprises, delays in bank committee appraisal timelines, or independent rejection of
            credit proposals by lending institutions.
          </p>
        </section>

        <section aria-labelledby="section-jurisdiction" className="space-y-3.5">
          <h2
            id="section-jurisdiction"
            className="font-serif text-xl sm:text-2xl font-semibold text-[#F3EFE7] tracking-tight"
          >
            7. Governing Law &amp; Jurisdiction
          </h2>
          <p>
            These Terms of Service and any formal advisory engagements shall be governed by and
            construed in accordance with the laws of {country}. Any dispute or claim arising out of or
            in connection with our services shall be subject to the exclusive jurisdiction of the
            competent courts in {state}, {country}.
          </p>
        </section>

        <section aria-labelledby="section-amendments" className="space-y-3.5">
          <h2
            id="section-amendments"
            className="font-serif text-xl sm:text-2xl font-semibold text-[#F3EFE7] tracking-tight"
          >
            8. Amendments &amp; Communication
          </h2>
          <p>
            Agnivridhi reserves the right to modify these Terms at any time. Continued use of this
            website following notice of changes constitutes acceptance of the modified Terms.
          </p>
        </section>
      </LegalLayout>
    </div>
  );
}
