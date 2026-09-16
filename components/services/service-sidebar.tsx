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
 type LucideIcon,
} from "lucide-react";
import type { Service } from "@/types/service";

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
 const maxLimit = service.dealSummary?.maxLimit || "₹5.00 Crore";
 const collateral = service.dealSummary?.collateral || "0% (Zero Collateral)";
 const turnaround =
 service.dealSummary?.turnaround ||
 service.timeline ||
 "30 to 45 Days";

 // Client-side DPR Checklist Download Handler
 const handleDownloadDprChecklist = () => {
 const checklistContent = `===================================================================
AGNIVRIDHI INDIA • INSTITUTIONAL APPRAISAL & DPR CHECKLIST
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
 aria-label="Deal Summary Dock"
 className="lg:col-span-4"
 >
 {/* Deal Summary Dock */}
 <div className="space-y-6">
 {/* Deal Summary Card */}
 <div className="rounded-3xl bg-gradient-to-b from-[#131D38]/95 via-[#0E162B]/98 to-[#0A1020]/98 border border-slate-700/70 shadow-[0_20px_50px_rgba(0,0,0,0.6)]  [transform:translateZ(0)] overflow-hidden">
 {/* Header Bar */}
 <div className="p-6 bg-slate-900/80 border-b border-slate-700/60 space-y-2 relative overflow-hidden">
 <div className="flex items-center justify-between">
 <div className="flex items-center gap-2">
 <div className="w-8 h-8 rounded-lg bg-amber-950/60 border border-amber-500/40 flex items-center justify-center text-amber-400">
 <CategoryIcon className="w-4 h-4" />
 </div>
 <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-400">
 Deal Summary Dock
 </span>
 </div>

 <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-[10px] font-mono font-bold">
 <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
 <span>Active Mandate</span>
 </div>
 </div>

 <h3 className="font-serif text-lg font-semibold text-white tracking-tight leading-snug pt-1">
 {service.name}
 </h3>
 </div>

 {/* Structured Deal Metric Rows */}
 <div className="p-6 space-y-3.5 text-xs font-sans">
 {/* Metric 1: Max Limit */}
 <div className="flex items-center justify-between pb-3 border-b border-slate-800">
 <div className="space-y-0.5">
 <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 block">
 Max Limit / Scale
 </span>
 <span className="text-slate-500 text-xs">Statutory Scheme Cap</span>
 </div>
 <div className="font-mono text-base font-bold text-amber-400 tabular-nums text-right">
 {maxLimit}
 </div>
 </div>

 {/* Metric 2: Security Structure */}
 <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-800 text-xs">
 <div className="space-y-0.5">
 <span className="block text-slate-400 font-mono text-[11px] font-semibold uppercase tracking-wider">
 Collateral Obligation
 </span>
 <span className="block text-slate-500 text-xs">Primary Property Pledge</span>
 </div>
 <span className="font-semibold text-right text-slate-200">
 {collateral}
 </span>
 </div>

 {/* Metric 3: Underwriting SLA */}
 <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-800 text-xs">
 <div className="space-y-0.5">
 <span className="block text-slate-400 font-mono text-[11px] font-semibold uppercase tracking-wider">
 Processing SLA
 </span>
 <span className="block text-slate-500 text-xs">Sanction / Filing Timeline</span>
 </div>
 <span className="font-semibold text-right text-slate-200">
 {turnaround}
 </span>
 </div>

 {/* Target Enterprise Tier */}
 {(service.dealSummary?.eligibility || (service.audience && service.audience.length > 0)) && (
 <div className="flex items-start justify-between gap-3 text-xs pt-1">
 <div className="space-y-0.5">
 <span className="block text-slate-400 font-mono text-[11px] font-semibold uppercase tracking-wider">
 Target Eligibility
 </span>
 <span className="block text-slate-500 text-xs">Enterprise Entity Tier</span>
 </div>
 <span className="font-semibold text-right text-slate-200 max-w-[55%]">
 {service.dealSummary?.eligibility || service.audience?.[0]}
 </span>
 </div>
 )}
 </div>

 {/* Quick Action Buttons */}
 <div className="p-6 pt-3 bg-slate-900/80 border-t border-slate-800 space-y-3">
 {/* Quick Button 1: Download DPR Checklist */}
 <button
 type="button"
 onClick={handleDownloadDprChecklist}
 className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-amber-300 font-mono text-xs font-semibold tracking-wide border border-slate-700 hover:border-amber-400/60 shadow-xs transition-all hover:-translate-y-0.5 cursor-pointer [transform:translateZ(0)]"
 >
 <FileDown className="w-4 h-4 text-amber-400 shrink-0" />
 <span>Download DPR Checklist (TXT)</span>
 </button>

 {/* Primary Advisory Desk Link */}
 <Link
 href={`/contact?service=${encodeURIComponent(service.slug)}`}
 className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-sans text-xs font-bold tracking-wide border border-amber-300/40 shadow-[0_8px_24px_rgba(245,158,11,0.35)] hover:shadow-[0_12px_32px_rgba(245,158,11,0.5)] transition-all hover:-translate-y-0.5 cursor-pointer [transform:translateZ(0)]"
 >
 <span>Schedule Principal Diagnostic</span>
 <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
 </Link>
 </div>

 {/* Institutional Assurances */}
 <div className="px-6 py-4 bg-slate-900/90 border-t border-slate-800 space-y-2 text-[11px] text-slate-400 font-sans">
 <div className="flex items-center gap-2">
 <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
 <span>Direct review by accredited banking underwriters</span>
 </div>
 <div className="flex items-center gap-2">
 <Lock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
 <span>Strict enterprise confidentiality protected under NDA</span>
 </div>
 </div>
 </div>

 {/* Practice Desk Navigation Anchor */}
 <div className="p-5 rounded-2xl border border-slate-700/60 bg-gradient-to-b from-[#131D38]/90 via-[#0E162B]/95 to-[#0A1020]/95 shadow-[0_16px_40px_rgba(0,0,0,0.4)]  [transform:translateZ(0)] text-xs space-y-2.5">
 <span className="font-mono text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
 Dedicated Practice Desk
 </span>
 <p className="text-slate-300 leading-relaxed font-sans">
 Delivered under Agnivridhi&apos;s <strong className="text-white">{categoryLabel}</strong> practice desk.
 </p>
 <Link
 href={`/services#${service.category}`}
 className="inline-flex items-center gap-1 font-semibold text-amber-400 hover:text-amber-300 font-mono text-xs transition-colors pt-1"
 >
 <span>Explore all {categoryLabel} programs</span>
 <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </aside>
  );
}
