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

  // Derive deal summary metrics
  const maxLimit = service.dealSummary?.maxLimit || "ÃƒÂ¢ - Å¡Ã‚Â¹5.00 Crore";
  const collateral = service.dealSummary?.collateral || "0% (Zero Collateral)";
  const turnaround =
    service.dealSummary?.turnaround ||
    service.timeline ||
    "30 to 45 Days";

  // Client-side DPR Checklist Download Handler
  const handleDownloadDprChecklist = () => {
    const checklistContent = `===================================================================
AGNIVRIDHI INDIA ÃƒÂ¢Ã¢â€šÂ¬ - Â INSTITUTIONAL APPRAISAL & DPR CHECKLIST
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

  return (
    <aside
      aria-label="Sticky Deal Summary Dock"
      className="lg:col-span-4"
    >
      {/* Sticky Deal Summary Dock */}
      <div className="sticky top-28 space-y-6">
        {/* Deal Summary Card */}
        <div className="rounded-2xl bg-white/85 border border-white/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_12px_36px_rgba(8,145,178,0.08)] [transform:translateZ(0)] overflow-hidden">
          {/* Header Bar */}
          <div className="p-6 bg-[#FFFFFF] text-[#0F0A1A] border-b border-cyan-100 space-y-2 relative overflow-hidden">
            <div
              className="absolute top-0 right-0 w-32 h-32 bg-[#0891B2]/10 rounded-full blur-2xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-cyan-100 flex items-center justify-center text-[#0891B2]">
                  <CategoryIcon className="w-4 h-4" />
                </div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0891B2]">
                  Deal Summary Dock
                </span>
              </div>

              <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#0891B2]/15 border border-cyan-200 text-[#06B6D4] text-[10px] font-mono font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0891B2] animate-pulse" />
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

            {/* Metric 2: Security Structure */}
            <div className="flex items-start justify-between gap-3 pb-3 border-b border-cyan-100/60 text-xs">
              <div className="space-y-0.5">
                <span className="block text-[#64748B] font-medium">Collateral Obligation</span>
                <span className="block font-mono text-[10px] text-[#556070]">Primary Property Pledge</span>
              </div>
              <span className="font-semibold text-right text-[#0F0A1A]">
                {collateral}
              </span>
            </div>

            {/* Metric 3: Underwriting SLA */}
            <div className="flex items-start justify-between gap-3 pb-3 border-b border-cyan-100/60 text-xs">
              <div className="space-y-0.5">
                <span className="block text-[#64748B] font-medium">Processing SLA</span>
                <span className="block font-mono text-[10px] text-[#556070]">Sanction / Filing Timeline</span>
              </div>
              <span className="font-semibold text-right text-[#0F0A1A]">
                {turnaround}
              </span>
            </div>

            {/* Target Enterprise Tier */}
            {(service.dealSummary?.eligibility || (service.audience && service.audience.length > 0)) && (
              <div className="flex items-start justify-between gap-3 text-xs">
                <div className="space-y-0.5">
                  <span className="block text-[#64748B] font-medium">Target Eligibility</span>
                  <span className="block font-mono text-[10px] text-[#556070]">Enterprise Entity Tier</span>
                </div>
                <span className="font-semibold text-right text-[#0F0A1A] max-w-[55%]">
                  {service.dealSummary?.eligibility || service.audience?.[0]}
                </span>
              </div>
            )}
          </div>

          {/* Quick Action Buttons */}
          <div className="p-6 pt-2 bg-cyan-50/70 border-t border-cyan-100 space-y-2.5">
            {/* Quick Button 1: Download DPR Checklist */}
            <button
              type="button"
              onClick={handleDownloadDprChecklist}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/80 backdrop-blur-md hover:bg-white/95 text-[#0F0A1A] font-sans text-xs font-semibold tracking-wide border border-cyan-200/90 hover:border-[#0891B2]/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.85),0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_4px_14px_rgba(8,145,178,0.12)] transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0891B2] [transform:translateZ(0)]"
            >
              <FileDown className="w-4 h-4 text-[#0891B2] shrink-0" />
              <span>Download DPR Checklist (PDF)</span>
            </button>

            {/* Primary Advisory Desk Link */}
            <Link
              href={`/contact?service=${encodeURIComponent(service.slug)}`}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-b from-[#0AA5C7]/90 via-[#0891B2]/95 to-[#0E7490]/95 backdrop-blur-md border border-white/25 text-white font-sans text-xs font-bold tracking-wide shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_4px_16px_rgba(8,145,178,0.22)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_8px_24px_rgba(8,145,178,0.32)] transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0891B2] [transform:translateZ(0)]"
            >
              <span>Schedule Principal Diagnostic</span>
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </Link>
          </div>

          {/* Institutional Assurances */}
          <div className="px-6 py-4 bg-cyan-50/60 border-t border-cyan-100 space-y-2 text-[11px] text-[#475569] font-sans">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0891B2] shrink-0" />
              <span>Direct review by accredited banking underwriters</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-[#0891B2] shrink-0" />
              <span>Strict enterprise confidentiality protected under NDA</span>
            </div>
          </div>
        </div>

        {/* Practice Desk Navigation Anchor */}
        <div className="p-5 rounded-2xl border border-white/60 bg-white/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_6px_20px_rgba(8,145,178,0.06)] [transform:translateZ(0)] text-xs space-y-2.5">
          <span className="font-mono text-[11px] font-bold text-[#64748B] uppercase tracking-wider block">
            Dedicated Practice Desk
          </span>
          <p className="text-[#475569] leading-relaxed font-sans">
            Delivered under Agnivridhi&apos;s <strong>{categoryLabel}</strong> practice desk.
          </p>
          <Link
            href={`/services#${service.category}`}
            className="inline-flex items-center gap-1 font-semibold text-[#0891B2] hover:text-[#06B6D4] transition-colors pt-1"
          >
            <span>Explore all {categoryLabel} programs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </aside>
  );
}
