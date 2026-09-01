import * as React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { createPageMetadata } from "@/lib/seo";
import { LegalHeader } from "@/components/legal/legal-header";
import { LegalNav } from "@/components/legal/legal-nav";
import { LegalLayout } from "@/components/legal/legal-layout";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy and data governance practices of Agnivridhi India. Learn how enterprise metrics, DPR data, and client records are protected.",
  path: "/privacy",
});

export default function PrivacyPage() {
  const { city, state, country } = siteConfig.company.location;

  return (
    <div className="min-h-screen bg-background">
      {/* 1. Compact Editorial Header */}
      <LegalHeader
        eyebrow="GOVERNANCE & TRUST"
        title="Privacy Policy"
        subtitle="How Agnivridhi India safeguards corporate information, financial models, and client communication."
        lastUpdated="August 2024"
      />

      {/* 2. Legal Navigation Bar */}
      <LegalNav currentPage="privacy" />

      {/* 3. Structured Legal Reading Body */}
      <LegalLayout>
        <section aria-labelledby="section-governance" className="space-y-3.5">
          <h2
            id="section-governance"
            className="font-serif text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight"
          >
            1. Commitment to Data Governance
          </h2>
          <p>
            Agnivridhi India (&ldquo;Agnivridhi&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or
            &ldquo;us&rdquo;) operates with strict institutional protocols regarding corporate,
            financial, and promoter data. When emerging enterprises, manufacturing units, or startups
            submit financial metrics, Detailed Project Reports (DPRs), or inquiry parameters through
            our website, all records are safeguarded by administrative and technical measures.
          </p>
        </section>

        <section aria-labelledby="section-collection" className="space-y-3.5">
          <h2
            id="section-collection"
            className="font-serif text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight"
          >
            2. Information Collection &amp; Purpose
          </h2>
          <p>
            We collect information provided directly by enterprise representatives through our
            consultation intake forms and diagnostic channels. This data may include:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 marker:text-teal-600">
            <li>
              <strong>Business Contact Details:</strong> Representative name, corporate email address,
              and direct telephone number.
            </li>
            <li>
              <strong>Enterprise Credentials:</strong> Entity name, Udyam registration classification,
              and industry operational sector.
            </li>
            <li>
              <strong>Project Scope:</strong> Borrowing requirements, machinery expansion details,
              statutory ISO accreditation scope, or software engineering objectives.
            </li>
          </ul>
          <p>
            This information is utilized solely to assess scheme eligibility under central guidelines
            (such as CGTMSE, PMEGP, and MUDRA), prepare credit appraisal files, and schedule
            preliminary diagnostic consultations with practice leads.
          </p>
        </section>

        <section aria-labelledby="section-nda" className="space-y-3.5">
          <h2
            id="section-nda"
            className="font-serif text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight"
          >
            3. Non-Disclosure &amp; Institutional Confidentiality
          </h2>
          <p>
            All financial statements, Credit Monitoring Arrangement (CMA) projections, balance sheets,
            and proprietary manufacturing blueprints transmitted to Agnivridhi are handled under
            professional non-disclosure governance. Access to sensitive documentation is restricted
            strictly to empanelled practice heads and designated credit analysts working directly on
            the engagement.
          </p>
        </section>

        <section aria-labelledby="section-sharing" className="space-y-3.5">
          <h2
            id="section-sharing"
            className="font-serif text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight"
          >
            4. Third-Party Sharing Restrictions
          </h2>
          <p>
            Agnivridhi maintains an unconditional zero-sale policy: we do not sell, rent, lease, or
            trade client information to external marketing brokers, lead aggregators, or unauthorized
            third parties.
          </p>
          <p>
            Client project records and DPR dossiers are transmitted to Member Lending Institutions
            (scheduled commercial banks, SIDBI, NBFCs) or statutory accreditation bodies only upon
            explicit written authorization and mandate from the client enterprise.
          </p>
        </section>

        <section aria-labelledby="section-session" className="space-y-3.5">
          <h2
            id="section-session"
            className="font-serif text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight"
          >
            5. Technical Safeguards &amp; Session Data
          </h2>
          <p>
            Our website employs standard transport encryption (HTTPS/TLS) to ensure that form
            submissions and browsing sessions are protected against unauthorized interception. We do
            not deploy invasive advertising trackers, third-party pixel beacons, or behavioral
            surveillance mechanisms.
          </p>
        </section>

        <section aria-labelledby="section-rights" className="space-y-3.5">
          <h2
            id="section-rights"
            className="font-serif text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight"
          >
            6. Client Data Rights &amp; Advisory Inquiries
          </h2>
          <p>
            Enterprise promoters have the right to request a summary of information held in connection
            with their inquiry, request corrections to company parameters, or request the deletion of
            preliminary consultation records where no formal ongoing engagement exists.
          </p>
          <p>
            For privacy inquiries or data governance requests, connect with our advisory desk at our
            registered location in {city}, {state}, {country}.
          </p>
        </section>

        <section aria-labelledby="section-updates" className="space-y-3.5">
          <h2
            id="section-updates"
            className="font-serif text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight"
          >
            7. Policy Modifications
          </h2>
          <p>
            Agnivridhi India reserves the right to update this Privacy Policy periodically to reflect
            changes in statutory data protection regulations or internal governance procedures. The
            effective date at the top of this document indicates the most recent calibration.
          </p>
        </section>
      </LegalLayout>
    </div>
  );
}
