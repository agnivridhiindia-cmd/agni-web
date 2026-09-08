"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileSpreadsheet,
  Building,
  ShieldCheck,
  Coins,
  ArrowRight,
  CheckCircle2,
  FileText,
  AlertTriangle,
  Clock,
  ExternalLink,
} from "lucide-react";
import { Container } from "@/components/shared/container";
import { Eyebrow } from "@/components/ui/badge";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { useReducedMotionPreference } from "@/components/shared/motion/motion-config";

export interface PipelineStage {
  id: string;
  number: string;
  title: string;
  phase: string;
  timeline: string;
  sla: string;
  icon: React.ElementType;
  description: string;
  promoterHandover: {
    title: string;
    description: string;
  }[];
  agnivridhiExecutes: {
    title: string;
    description: string;
  }[];
  riskMitigated: string;
  statHighlight: {
    label: string;
    value: string;
  };
}

export const pipelineStages: PipelineStage[] = [
  {
    id: "tev-dpr",
    number: "01",
    title: "TEV & DPR Formulation",
    phase: "Phase 1: Financial Architecture",
    timeline: "Days 1  -  10",
    sla: "10 Working Days SLA",
    icon: FileSpreadsheet,
    description:
      "Quantitative financial modeling, CMA compilation, DSCR sensitivity benchmarking, and an institutional Detailed Project Report formulated to eliminate initial credit desk rejection.",
    promoterHandover: [
      {
        title: "3-Year Audited Financials & ITR",
        description:
          "Balance sheets, profit & loss, and 3CA/3CD tax audit reports for existing business entities.",
      },
      {
        title: "Plant & Machinery Quotations",
        description:
          "Proforma invoices with certified vendor technical specifications and required electricity load.",
      },
      {
        title: "Industrial Land / Shed Allotment",
        description:
          "Registry deed, UPSIDA/NOIDA allotment letter, or registered lease deed for the production unit.",
      },
      {
        title: "Promoter KYC & Net Worth",
        description:
          "PAN, Aadhaar, CA-certified net worth statement, and operational credit facility disclosures.",
      },
    ],
    agnivridhiExecutes: [
      {
        title: "Bank-Compliant 7-Year DPR",
        description:
          "Complete project viability modeling, IRR calculations, and debt servicing sensitivity matrix.",
      },
      {
        title: "Comprehensive CMA Data Matrix",
        description:
          "Maximum Permissible Bank Finance (MPBF) calculation and dynamic working capital cycle modeling.",
      },
      {
        title: "Scheme Optimization (CGTMSE / PMEGP)",
        description:
          "Structuring project cost to lock 100% collateral waiver or up to 35% capital subsidy entitlement.",
      },
      {
        title: "Pre-Scrutiny Committee Audit",
        description:
          "Internal underwriting simulation to ensure compliance with Lead Bank credit lending thresholds.",
      },
    ],
    riskMitigated:
      "Immediate desk rejection due to unviable debt service coverage ratio (DSCR < 1.35) or misclassified capital expenditure.",
    statHighlight: {
      label: "Audit-Ready Dossier",
      value: "Day 10",
    },
  },
  {
    id: "bank-sanction",
    number: "02",
    title: "Lead Bank In-Principle Sanction",
    phase: "Phase 2: Credit Appraisal Defense",
    timeline: "Days 15  -  30",
    sla: "15 Working Days SLA",
    icon: Building,
    description:
      "Direct institutional syndication across consortium and scheduled commercial banks, actively defending the financial structure before the Zonal Credit Committee.",
    promoterHandover: [
      {
        title: "Promoter Banker Interface",
        description:
          "Promoter physical or virtual attendance during credit appraisal interview with Bank Chief Manager.",
      },
      {
        title: "Operational Bank Statements",
        description:
          "Past 12 months primary commercial bank statements demonstrating GST turnover velocity.",
      },
      {
        title: "Statutory Enterprise Filings",
        description:
          "Active Udyam certificate, GSTR-1 and GSTR-3B filings, and regulatory compliance records.",
      },
      {
        title: "Query Sign-off Authorization",
        description:
          "Prompt authorization of written clarifications requested by bank risk management teams.",
      },
    ],
    agnivridhiExecutes: [
      {
        title: "Zonal Credit Head Liaison",
        description:
          "Direct technical defense with SME Loan Centers across SBI, PNB, BoB, Canara, and leading private lenders.",
      },
      {
        title: "24-Hour Query Resolution Memorandum",
        description:
          "Immediate turnaround of bank credit risk queries, justification notes, and supplementary schedules.",
      },
      {
        title: "In-Principle Sanction Letter",
        description:
          "Securing formal institutional sanction specifying sanctioned Term Loan and Cash Credit boundaries.",
      },
      {
        title: "Interest & Fee Concession Structuring",
        description:
          "Negotiating competitive EBLR/MCLR lending spreads and institutional processing fee concessions.",
      },
    ],
    riskMitigated:
      "Credit file stalled indefinitely at branch level or unwarranted demands for collateral on eligible CGTMSE facilities.",
    statHighlight: {
      label: "Formal Sanction Term Sheet",
      value: "Day 30",
    },
  },
  {
    id: "legal-valuation",
    number: "03",
    title: "Legal Search & Asset Valuation",
    phase: "Phase 3: Asset Due Diligence",
    timeline: "Days 30  -  45",
    sla: "12 Working Days SLA",
    icon: ShieldCheck,
    description:
      "Coordination with bank-empaneled advocates and structural engineers to ensure non-encumbered title clearance and fair market asset valuation.",
    promoterHandover: [
      {
        title: "30-Year Chain of Title Documents",
        description:
          "Original title deeds, prior link deeds, mutation records, and Non-Encumbrance Certificate (NEC).",
      },
      {
        title: "Factory Site Physical Access",
        description:
          "Facilitating physical inspection by bank-approved valuer and structural engineering inspectors.",
      },
      {
        title: "Statutory Layout & Environmental Approvals",
        description:
          "Approved building blueprint, electrical inspectorate clearance, and Pollution Control Board CTE/CTO.",
      },
      {
        title: "Machinery Vendor Contracts",
        description:
          "Final equipment commercial agreements, warranty guarantees, and milestone payment schedules.",
      },
    ],
    agnivridhiExecutes: [
      {
        title: "Legal Search Report (LSR) Resolution",
        description:
          "Proactive coordination with bank-empaneled advocate to resolve title ambiguities and boundary searches.",
      },
      {
        title: "Technical Valuation Briefing",
        description:
          "Briefing approved valuers on Fair Market Value (FMV) and Realizable Value to prevent asset haircut.",
      },
      {
        title: "Sanction Compliance Docket",
        description:
          "Turnkey drafting of the 18 standard pre-disbursement covenants required for final disbursement sanction.",
      },
      {
        title: "Final Branch Sanction Clearance",
        description:
          "Securing formal Zonal sign-off authorizing the branch to proceed directly to loan documentation.",
      },
    ],
    riskMitigated:
      "Surprise legal title defects, drastic valuation haircuts on project assets, or delays from missing municipal NOCs.",
    statHighlight: {
      label: "Clean Title Clearances",
      value: "100%",
    },
  },
  {
    id: "disbursal-subsidy",
    number: "04",
    title: "Disbursal & Subsidy Portal Tagging",
    phase: "Phase 4: Capital Release & Sovereign Lock-in",
    timeline: "Days 45  -  60",
    sla: "10 Working Days SLA",
    icon: Coins,
    description:
      "Loan agreement execution, vendor escrow disbursals, sovereign guarantee fee generation, and mandatory pre-drawdown subsidy portal lock-in.",
    promoterHandover: [
      {
        title: "Promoter Equity Margin Deposit",
        description:
          "Deposit of required 10%  -  25% equity margin into the designated bank project escrow account.",
      },
      {
        title: "Loan Security Agreement Execution",
        description:
          "Executing loan covenants, demand promissory notes, and personal guarantee instruments.",
      },
      {
        title: "Vendor Direct Payment Mandate",
        description:
          "Direct RTGS transfer authorization letters and verified bank credentials for equipment manufacturers.",
      },
      {
        title: "Equipment Delivery Acknowledgments",
        description:
          "Signing machinery installation certificates, transport bills, and factory commissioning invoices.",
      },
    ],
    agnivridhiExecutes: [
      {
        title: "CGTMSE Guarantee Locking",
        description:
          "Generating sovereign demand notice and locking the collateral-free guarantee cover on the CGTMSE portal.",
      },
      {
        title: "Mandatory Pre-Disbursal Subsidy Tagging",
        description:
          "Crucial timely tagging on PMEGP / National Portal / State Policy portals prior to first loan drawdown.",
      },
      {
        title: "Tranche-Based Vendor Disbursal Oversight",
        description:
          "Supervising smooth stage-wise fund releases directly to machinery vendors without project bottlenecks.",
      },
      {
        title: "Post-Disbursement Audit Dossier",
        description:
          "Delivering complete compliance file, TDR lock-in proof, and government subsidy audit tracking dossier.",
      },
    ],
    riskMitigated:
      "Permanent loss of government subsidy entitlement (up to 35%) caused by failing to lock the subsidy portal prior to loan disbursal.",
    statHighlight: {
      label: "Sovereign Guarantee in Effect",
      value: "Day 60",
    },
  },
];

export function SyndicationPipeline() {
  const [activeStageIndex, setActiveStageIndex] = React.useState(0);
  const prefersReduced = useReducedMotionPreference();
  const currentStage = pipelineStages[activeStageIndex];

  return (
    <section
      id="syndication-pipeline"
      aria-labelledby="syndication-pipeline-heading"
      className="relative bg-[#080909] text-[#F3EFE7] py-20 sm:py-28 lg:py-36 border-b border-white/[0.08] overflow-hidden"
    >
      {/* Background CAD / Blueprint Grid Accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(to right, #F3EFE7 1px, transparent 1px), linear-gradient(to bottom, #F3EFE7 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <Container width="wide" className="relative z-10 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3.5 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono tracking-widest text-[#C79A4A] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C79A4A] animate-pulse" />
              <span>DEBT SYNDICATION ARCHITECTURE &bull; 4-STAGE MILESTONES</span>
            </div>

            <h2
              id="syndication-pipeline-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#F3EFE7] !leading-[1.15]"
            >
              The Sovereign Credit Lifecycle: DPR to Disbursal.
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#A5A29A] leading-relaxed max-w-2xl">
              Bank debt syndication and government subsidy allocations engineered into
              a transparent, predictable 4-stage pipeline. We eliminate banking friction,
              mitigate credit committee rejections, and lock sovereign guarantees before
              machinery purchase.
            </p>
          </div>

          {/* Quick Metrics Badge */}
          <div className="shrink-0 flex items-center gap-4 bg-[#111313] p-4 rounded-2xl border border-white/[0.08] shadow-xs">
            <div className="space-y-0.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#8E8D86] font-bold block">
                Average End-to-End Cycle
              </span>
              <div className="font-serif text-2xl font-normal text-[#F3EFE7]">
                45  -  60 <span className="text-xs font-sans font-medium text-[#A5A29A]">Business Days</span>
              </div>
            </div>
            <div className="w-px h-10 bg-white/10" aria-hidden="true" />
            <div className="space-y-0.5 pl-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#C79A4A] font-bold block">
                Sanction Approval Rate
              </span>
              <div className="font-serif text-2xl font-normal text-[#C79A4A]">
                98.4%
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================
            INTERACTIVE STEPPER / SCRUBBER BAR
            ============================================================ */}
        <div className="space-y-4">
          {/* Progress Connecting Line (Desktop) */}
          <div className="relative">
            <div
              className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-white/10"
              aria-hidden="true"
            >
              <div
                className="h-full bg-gradient-to-r from-[#C79A4A] via-[#DFC286] to-[#C79A4A] transition-all duration-500 ease-out"
                style={{
                  width: `${(activeStageIndex / (pipelineStages.length - 1)) * 100}%`,
                }}
              />
            </div>

            {/* Stepper Buttons Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 relative z-10">
              {pipelineStages.map((stage, idx) => {
                const isActive = idx === activeStageIndex;
                const isPast = idx < activeStageIndex;
                const Icon = stage.icon;

                return (
                  <button
                    key={stage.id}
                    onClick={() => setActiveStageIndex(idx)}
                    className={`group relative text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0891B2] [transform:translateZ(0)] ${
                      isActive
                        ? "bg-[#171918]/95 backdrop-blur-md border-[#0891B2]/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_24px_-6px_rgba(8,145,178,0.25)] ring-1 ring-[#0891B2]/25 -translate-y-1"
                        : isPast
                        ? "bg-[#111313]/80 backdrop-blur-md border-white/10 hover:border-white/20 hover:bg-[#141615]/95 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] text-[#A5A29A]"
                        : "bg-[#0E1010]/75 backdrop-blur-md border-white/[0.06] hover:border-white/15 hover:bg-[#111313]/90 text-[#8E8D86]"
                    }`}
                    aria-selected={isActive}
                    role="tab"
                    id={`stage-tab-${stage.id}`}
                    aria-controls={`stage-panel-${stage.id}`}
                  >
                    {/* Top Row: Icon + Step Badge + Timeline */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? "bg-[#C79A4A] text-[#080909] shadow-xs scale-105"
                            : isPast
                            ? "bg-white/[0.06] text-[#DFC286] border border-white/10"
                            : "bg-white/[0.03] text-[#8E8D86] border border-white/[0.06]"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>

                      <span
                        className={`font-mono text-[11px] font-medium px-2 py-0.5 rounded transition-colors ${
                          isActive
                            ? "bg-[#C79A4A]/15 text-[#DFC286] border border-[#C79A4A]/30"
                            : isPast
                            ? "bg-white/[0.04] text-[#A5A29A] border border-white/[0.08]"
                            : "bg-white/[0.02] text-[#8E8D86] border border-white/[0.05]"
                        }`}
                      >
                        {stage.timeline}
                      </span>
                    </div>

                    {/* Step Stage & Title */}
                    <div className="space-y-1">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#8E8D86] block">
                        STAGE {stage.number}
                      </span>
                      <h3
                        className={`font-serif text-sm sm:text-base font-normal leading-snug transition-colors line-clamp-1 ${
                          isActive ? "text-[#F3EFE7]" : "text-[#A5A29A] group-hover:text-[#F3EFE7]"
                        }`}
                      >
                        {stage.title}
                      </h3>
                    </div>

                    {/* Active Accent Bar */}
                    {isActive && (
                      <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-[#C79A4A] to-[#DFC286] rounded-t-full" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ============================================================
            MAIN INTERACTIVE WORKFLOW CARD (SpotlightCard + Dual Matrix)
            ============================================================ */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStage.id}
            initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReduced ? { opacity: 1 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            id={`stage-panel-${currentStage.id}`}
            role="tabpanel"
            aria-labelledby={`stage-tab-${currentStage.id}`}
          >
            <SpotlightCard
              glowVariant="amber"
              className="w-full bg-[#111313]/90 backdrop-blur-xs border border-white/15 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_24px_64px_rgba(0,0,0,0.5)] [transform:translateZ(0)]"
              innerClassName="p-6 sm:p-8 lg:p-10 space-y-8 bg-[#111313]/95"
            >
              {/* Header inside Card: Stage Name, SLA & Overview */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-white/[0.08] text-[#F3EFE7] uppercase tracking-wider border border-white/10">
                      STAGE {currentStage.number}
                    </span>
                    <span className="font-mono text-xs font-semibold text-[#C79A4A] uppercase tracking-wide">
                      {currentStage.phase}
                    </span>
                    <span className="text-[#8E8D86] font-mono" aria-hidden="true">&bull;</span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#A5A29A] bg-white/[0.04] px-2.5 py-0.5 rounded border border-white/[0.08]">
                      <Clock className="w-3.5 h-3.5 text-[#C79A4A]" />
                      {currentStage.sla}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#F3EFE7] tracking-tight">
                    {currentStage.title}
                  </h3>

                  <p className="font-sans text-sm sm:text-base text-[#A5A29A] max-w-3xl leading-relaxed">
                    {currentStage.description}
                  </p>
                </div>

                {/* Target Metric Badge */}
                <div className="shrink-0 lg:text-right bg-[#171918] border border-[#C79A4A]/30 rounded-2xl p-4 self-start lg:self-auto">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#C79A4A] font-bold block">
                    {currentStage.statHighlight.label}
                  </span>
                  <span className="font-mono text-xl sm:text-2xl font-bold text-[#DFC286]">
                    {currentStage.statHighlight.value}
                  </span>
                </div>
              </div>

              {/* ========================================================
                  DUAL-COLUMN MATRIX: PROMOTER HANDOVER VS AGNIVRIDHI EXECUTION
                  ======================================================== */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                {/* Column A: Promoter Handover (What You Provide) */}
                <div className="space-y-4 rounded-2xl bg-[#141615]/90 border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] p-5 sm:p-6 [transform:translateZ(0)]">
                  <div className="flex items-center justify-between gap-3 pb-3 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-[#A5A29A]" />
                      <h4 className="font-sans text-sm sm:text-base font-semibold text-[#F3EFE7] uppercase tracking-wide">
                        1. Promoter Document Handover
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider bg-white/[0.06] text-[#A5A29A] px-2 py-0.5 rounded border border-white/10">
                      Client Responsibility
                    </span>
                  </div>

                  <div className="space-y-3.5">
                    {currentStage.promoterHandover.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3 rounded-xl bg-[#0B0C0C] border border-white/[0.06]"
                      >
                        <div className="w-5 h-5 rounded-full bg-white/[0.06] text-[#A5A29A] font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </div>
                        <div className="space-y-0.5">
                          <h5 className="font-sans text-xs sm:text-sm font-semibold text-[#F3EFE7] leading-snug">
                            {item.title}
                          </h5>
                          <p className="text-xs text-[#A5A29A] leading-relaxed font-sans">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column B: Agnivridhi Mandate Execution (What We Deliver) */}
                <div className="space-y-4 rounded-2xl bg-[#171918]/90 border border-[#C79A4A]/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] p-5 sm:p-6 [transform:translateZ(0)]">
                  <div className="flex items-center justify-between gap-3 pb-3 border-b border-[#C79A4A]/25">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#C79A4A]" />
                      <h4 className="font-sans text-sm sm:text-base font-semibold text-[#DFC286] uppercase tracking-wide">
                        2. Agnivridhi Institutional Execution
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider bg-[#C79A4A]/20 text-[#DFC286] px-2 py-0.5 rounded border border-[#C79A4A]/30">
                      Agnivridhi Mandate
                    </span>
                  </div>

                  <div className="space-y-3.5">
                    {currentStage.agnivridhiExecutes.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3 rounded-xl bg-[#0B0C0C] border border-[#C79A4A]/15"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#C79A4A] shrink-0 mt-0.5" />
                        <div className="space-y-0.5">
                          <h5 className="font-sans text-xs sm:text-sm font-semibold text-[#F3EFE7] leading-snug">
                            {item.title}
                          </h5>
                          <p className="text-xs text-[#A5A29A] leading-relaxed font-sans">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Callout: Risk Mitigation & Direct Action Bar */}
              <div className="pt-6 border-t border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-5 bg-[#141615] -mx-6 sm:-mx-8 lg:-mx-10 -mb-6 sm:-mb-8 lg:-mb-10 p-6 sm:p-8 rounded-b-3xl">
                <div className="flex items-start gap-3 max-w-2xl">
                  <div className="w-8 h-8 rounded-xl bg-[#C79A4A]/10 border border-[#C79A4A]/30 flex items-center justify-center text-[#C79A4A] shrink-0 mt-0.5">
                    <AlertTriangle className="w-4 h-4 text-[#C79A4A]" />
                  </div>
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#C79A4A] block">
                      Critical Risk Mitigated at this Stage
                    </span>
                    <p className="text-xs sm:text-sm text-[#A5A29A] font-sans leading-relaxed">
                      {currentStage.riskMitigated}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-3">
                  <Link
                    href="/contact?service=cgtmse-funding"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#0AA5C7]/90 via-[#0891B2]/95 to-[#0E7490]/95 backdrop-blur-md border border-white/25 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_4px_16px_rgba(8,145,178,0.22)] font-sans text-xs sm:text-sm font-semibold transition-all hover:scale-[1.02] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_6px_20px_rgba(8,145,178,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0891B2] [transform:translateZ(0)]"
                  >
                    <span>Initiate Stage 01 Audit</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </Link>

                  <Link
                    href="/services/cgtmse-funding"
                    className="hidden sm:inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 hover:bg-white/15 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] font-sans text-xs font-semibold transition-all [transform:translateZ(0)]"
                  >
                    <span>Scheme Specs</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-300" />
                  </Link>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
