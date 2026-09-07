"use client";

import * as React from "react";
import Link from "next/link";
import {
  Landmark,
  ShieldCheck,
  Globe,
  Cpu,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  FileDown,
  Lock,
  Building,
  Clock,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/types/service";
import { siteConfig } from "@/lib/site-config";

const categoryLabels: Record<string, string> = {
  funding: "Government & Debt Funding",
  compliance: "Compliance & Certifications",
  digital: "Digital Transformation",
  it: "Custom Software & IT",
};

const iconMap: Record<string, LucideIcon> = {
  funding: Landmark,
  compliance: ShieldCheck,
  digital: Globe,
  it: Cpu,
};

interface ServiceSidebarProps {
  service: Service;
}

export function ServiceSidebar({ service }: ServiceSidebarProps) {
  const categoryLabel = categoryLabels[service.category] || service.category;
  const CategoryIcon = iconMap[service.category] || Landmark;
  const whatsappNumber = siteConfig.contact.whatsapp;

  // Derive deal summary metrics
  const maxLimit = service.dealSummary?.maxLimit || "₹5.00 Crore";
  const collateral = service.dealSummary?.collateral || "0% (Zero Collateral)";
  const turnaround =
    service.dealSummary?.turnaround ||
    service.timeline ||
    "30 to 45 Days";

  // Client-side DPR Checklist Download Handler
  const handleDownloadDprChecklist = () => {
    const checklistContent = `===================================================================
AGNIVRIDHI INDIA — INSTITUTIONAL APPRAISAL & DPR CHECKLIST
Program: ${service.name.toUpperCase()}
Category: ${categoryLabel.toUpperCase()}
Document Reference: AGNI-DPR-${service.slug.toUpperCase()}-2026
===================================================================

MANDATE APPRAISAL SUMMARY:
- Maximum Borrowing / Facility Cap: ${maxLimit}
- Collateral / Security Requirement: ${collateral}
- Underwriting SLA Turnaround: ${turnaround}
- Governing Body / Scheme: Ministry of MSME / CGTMSE / RBI Framework

REQUIRED STATUTORY & FINANCIAL DOSSIER (UNDERWRITING CHECKLIST):
[ ] 1. Official Udyam Registration Certificate with matching NIC Codes
[ ] 2. PAN & Aadhaar of all Promoters / Directors / Partners
[ ] 3. GST Registration Certificate & Last 12 Months GSTR-3B & GSTR-1 Filings
[ ] 4. Audited Financial Statements with CA Attestation (Last 3 Financial Years)
[ ] 5. Detailed Project Report (DPR) incorporating DSCR and Break-Even Analysis
[ ] 6. Comprehensive CMA Data (Credit Monitoring Arrangement Format)
[ ] 7. Proforma Invoices / Official Vendor Quotations for Plant, Machinery & Capex
[ ] 8. Factory / Unit Lease Agreement, Electricity Sanction, or Title Deed
[ ] 9. Bank Statement of Primary Operative Current Account (Last 12 Months)
[ ] 10. Net Worth Statements of Key Promoters
[ ] 11. Environmental / Pollution Control Clearance (if applicable to industrial unit)
[ ] 12. Resolution for Borrowing Power under Section 179 of Companies Act (for Pvt Ltd)

NEXT STEPS FOR SANCTION:
1. Compile the documents above into a single confidential folder.
2. Submit dossier directly to Agnivridhi India's Executive Advisory Desk.
3. Review preliminary diagnostic viability model within 48 hours.

Corporate Advisory Desk:
Agnivridhi India | Sector 62, Noida, Uttar Pradesh 201309
Phone: +91 98188 16654 | Web: https://agnivridhi.com/contact
===================================================================`;

    const blob = new Blob([checklistContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${service.slug}-DPR-Checklist.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Agnivridhi India, I am reviewing the ${service.name} program and would like to schedule an underwriting eligibility review.`
  );

  return (
    <aside
      aria-label="Sticky Deal Summary Dock"
      className="lg:col-span-4"
    >
      {/* Sticky Deal Summary Dock */}
      <div className="sticky top-28 space-y-6">
        {/* Deal Summary Card */}
        <div className="rounded-2xl bg-white border border-purple-100 shadow-2xl overflow-hidden">
          {/* Header Bar */}
          <div className="p-6 bg-[#FFFFFF] text-[#0F0A1A] border-b border-purple-100 space-y-2 relative overflow-hidden">
            <div
              className="absolute top-0 right-0 w-32 h-32 bg-[#581C87]/10 rounded-full blur-2xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-purple-100 flex items-center justify-center text-[#581C87]">
                  <CategoryIcon className="w-4 h-4" />
                </div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#581C87]">
                  Deal Summary Dock
                </span>
              </div>

              <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#581C87]/15 border border-purple-200 text-[#7C3AED] text-[10px] font-mono font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#581C87] animate-pulse" />
                <span>Active Mandate</span>
              </div>
            </div>

            <h3 className="font-serif text-lg font-bold text-[#0F0A1A] tracking-tight leading-snug pt-1">
              {service.name}
            </h3>
          </div>

          {/* Structured Deal Metric Rows */}
          <div className="p-6 divide-y divide-[#232727] space-y-3.5 text-xs font-sans">
            {/* Metric 1: Max Limit */}
            <div className="flex items-center justify-between pt-1">
              <div className="space-y-0.5">
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#64748B] block">
                  Max Limit / Scale
                </span>
                <span className="text-[#475569]">Statutory Scheme Cap</span>
              </div>
              <div className="font-mono text-base font-bold text-[#0F0A1A] tabular-nums text-right">
                {maxLimit}
              </div>
            </div>

            {/* Metric 2: Collateral Requirement */}
            <div className="flex items-center justify-between pt-3.5">
              <div className="space-y-0.5">
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#64748B] block">
                  Collateral Pledged
                </span>
                <span className="text-[#475569]">Third-Party Guarantee</span>
              </div>
              <div className="font-mono text-sm font-bold text-[#7C3AED] bg-[#581C87]/10 px-2.5 py-1 rounded-md border border-purple-200 text-right">
                {collateral}
              </div>
            </div>

            {/* Metric 3: Underwriting Turnaround */}
            <div className="flex items-center justify-between pt-3.5">
              <div className="space-y-0.5">
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#64748B] block">
                  Underwriting Turnaround
                </span>
                <span className="text-[#475569]">DPR to Sanction SLA</span>
              </div>
              <div className="font-mono text-sm font-bold text-[#0F0A1A] text-right flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#581C87]" />
                <span>{turnaround}</span>
              </div>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="p-6 pt-2 bg-purple-50/70 border-t border-purple-100 space-y-2.5">
            {/* Quick Button 1: Download DPR Checklist */}
            <button
              type="button"
              onClick={handleDownloadDprChecklist}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-purple-50/60 hover:bg-[#1C1F1F] text-[#0F0A1A] font-sans text-xs font-semibold tracking-wide border border-purple-100 hover:border-purple-300 shadow-2xs transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#581C87]"
            >
              <FileDown className="w-4 h-4 text-[#581C87] shrink-0" />
              <span>Download DPR Checklist (PDF)</span>
            </button>

            {/* Quick Button 2: Inquire on WhatsApp */}
            {whatsappNumber && whatsappNumber.trim() !== "" && (
              <a
                href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-sans text-xs font-semibold tracking-wide transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
              >
                <PhoneCall className="w-4 h-4 fill-white shrink-0" />
                <span>Inquire on WhatsApp</span>
              </a>
            )}

            {/* Primary Advisory Desk Link */}
            <Link
              href={`/contact?service=${encodeURIComponent(service.slug)}`}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#581C87] hover:bg-[#4C1D95] text-white font-sans text-xs font-bold tracking-wide transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#581C87]"
            >
              <span>Schedule Principal Diagnostic</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#080909]" />
            </Link>
          </div>

          {/* Institutional Assurances */}
          <div className="px-6 py-4 bg-purple-50/60 border-t border-purple-100 space-y-2 text-[11px] text-[#475569] font-sans">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#581C87] shrink-0" />
              <span>Direct review by accredited banking underwriters</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-[#581C87] shrink-0" />
              <span>Strict enterprise confidentiality protected under NDA</span>
            </div>
          </div>
        </div>

        {/* Practice Desk Navigation Anchor */}
        <div className="p-5 rounded-2xl border border-purple-100 bg-white text-xs space-y-2.5 shadow-xs">
          <span className="font-mono text-[11px] font-bold text-[#64748B] uppercase tracking-wider block">
            Dedicated Practice Desk
          </span>
          <p className="text-[#475569] leading-relaxed font-sans">
            Delivered under Agnivridhi&apos;s <strong>{categoryLabel}</strong> practice desk.
          </p>
          <Link
            href={`/services#${service.category}`}
            className="inline-flex items-center gap-1 font-semibold text-[#581C87] hover:text-[#7C3AED] transition-colors pt-1"
          >
            <span>Explore all {categoryLabel} programs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </aside>
  );
}
