"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Cpu,
  Landmark,
  Building2,
  Award,
} from "lucide-react";
import type { CaseStudyFrontmatter, DealTombstoneMatrix } from "@/types/case-study";
import { cn } from "@/lib/utils";

export interface StoryCardProps {
  study: CaseStudyFrontmatter;
  featured?: boolean;
  className?: string;
}

/**
 * Fallback Deal Tombstone parameters if not explicitly provided in frontmatter
 */
function getDealTombstone(study: CaseStudyFrontmatter): DealTombstoneMatrix {
  if (study.dealTombstone) {
    return study.dealTombstone;
  }

  if (study.slug === "cgtmse-cnc-expansion") {
    return {
      industryVertical: "PRECISION AUTOMOTIVE TOOLING",
      highlightMetric: "₹ 2.40 CRORE",
      highlightSubtitle: "SANCTIONED UNDER CGTMSE 85% SOVEREIGN COVER",
      lenderCategory: "Nationalized Scheduled Commercial Bank",
      collateralPledged: "₹0.00",
      capexUtilization: "5-Axis CNC Machining Infrastructure",
      syndicateRole: "Lead Debt Syndication & Underwriting Advisory",
    };
  }

  if (study.slug === "heavy-fabrication-iso-compliance") {
    return {
      industryVertical: "RAIL INFRASTRUCTURE & STRUCTURAL STEEL",
      highlightMetric: "100% PASS (0 NCs)",
      highlightSubtitle: "ACCREDITED UNDER ISO 9001:2015 & ISO 14001",
      lenderCategory: "Accredited International Registrar & NABCB",
      collateralPledged: "Zero Deviation Mandate",
      capexUtilization: "12-Bay QMS Overhaul & Shop-Floor Calibration",
      syndicateRole: "Statutory Quality Assurance Desk",
    };
  }

  if (study.slug === "pmegp-agro-food-processing") {
    return {
      industryVertical: "AGRI-PROCESSING & COLD-PRESS EXTRACTION",
      highlightMetric: "35% CAPITAL SUBSIDY",
      highlightSubtitle: "NON-REFUNDABLE CAPITAL MARGIN MONEY LOCKED IN",
      lenderCategory: "Public Sector Bank & KVIC Channel",
      collateralPledged: "₹0.00 (KVIC Escrow Margin Security)",
      capexUtilization: "Expeller Plant & High-Speed Retail Packaging Bay",
      syndicateRole: "DLTFC Project Formulation & KVIC Margin Syndication",
    };
  }

  return {
    industryVertical: study.category.toUpperCase(),
    highlightMetric: study.statValue || "VERIFIED MANDATE",
    highlightSubtitle: study.statContext || "COMPLETED TRANSACTION",
    lenderCategory: "Scheduled Commercial Bank",
    collateralPledged: "₹0.00",
    capexUtilization: "Industrial Infrastructure",
    syndicateRole: "Lead Institutional Advisory",
  };
}

/**
 * Authentic Duotone CAD Blueprint / Industrial Machinery Graphic
 */
function IndustrialGraphicBackground() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden opacity-20 mix-blend-screen"
      aria-hidden="true"
    >
      <svg
        className="w-full h-full text-teal-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 320"
        fill="none"
      >
        <defs>
          <pattern
            id="cad-grid"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 24 0 L 0 0 0 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeOpacity="0.4"
            />
          </pattern>
        </defs>

        {/* CAD Grid Mesh */}
        <rect width="100%" height="100%" fill="url(#cad-grid)" />

        {/* Isometric CNC Axis / Tooling Silhouette */}
        <g stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.6">
          {/* Spindle & Bed Coordinate Wireframes */}
          <path d="M 50 260 L 200 180 L 350 260 L 200 340 Z" />
          <path d="M 50 260 L 50 240 L 200 160 L 350 240 L 350 260" />
          <path d="M 200 60 L 200 180" strokeDasharray="3 3" />

          {/* Precision Crosshair Target */}
          <circle cx="200" cy="180" r="18" strokeDasharray="4 2" />
          <circle cx="200" cy="180" r="6" fill="currentColor" fillOpacity="0.3" />
          <line x1="175" y1="180" x2="225" y2="180" />
          <line x1="200" y1="155" x2="200" y2="205" />

          {/* Coordinate Telemetry Marks */}
          <path d="M 280 90 L 320 90 L 320 130" />
          <path d="M 320 100 L 350 100" strokeDasharray="2 2" />
        </g>
      </svg>
    </div>
  );
}

/**
 * Investment Banking "Deal Tombstone" Card
 */
export function StoryCard({ study, featured = false, className }: StoryCardProps) {
  const tombstone = getDealTombstone(study);

  return (
    <Link
      href={`/success-stories/${study.slug}`}
      className={cn(
        "group relative flex flex-col justify-between rounded-2xl bg-slate-950 text-white overflow-hidden border border-slate-800 transition-all duration-300",
        "shadow-[0_4px_20px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.12)]",
        "hover:border-gold-500/50 hover:shadow-[0_16px_44px_-8px_rgba(184,137,31,0.25)] hover:-translate-y-1 motion-reduce:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2",
        featured ? "lg:col-span-2" : "",
        className
      )}
      aria-label={`Inspect Deal Tombstone: ${study.title}`}
    >
      {/* Authentic Duotone Industrial Machinery Background */}
      <IndustrialGraphicBackground />

      {/* Subtle Radial Atmosphere */}
      <div
        className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 space-y-6">
        {/* ============================================================
            1. TOP METALLIC BAR (Brushed Accent Banner)
            ============================================================ */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-2.5 bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border-b border-gold-500/30">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-gold-300 truncate max-w-[240px] sm:max-w-[320px]">
              {tombstone.industryVertical}
            </span>
          </div>

          <div className="flex items-center gap-1 text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider shrink-0">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
            <span className="hidden sm:inline">Closed Mandate</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="px-6 sm:px-8 space-y-6">
          {/* Client & Title Header */}
          <div className="space-y-2">
            {study.client && (
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                {study.client}
              </span>
            )}
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white leading-snug group-hover:text-gold-200 transition-colors">
              {study.title}
            </h3>
          </div>

          {/* ============================================================
              2. MASSIVE HIGHLIGHT METRIC (Deal Tombstone Centerpiece)
              ============================================================ */}
          <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm space-y-1 relative overflow-hidden group-hover:border-gold-500/40 transition-colors">
            <div className="flex items-baseline justify-between flex-wrap gap-2">
              <span className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-white tracking-tight tabular-nums drop-shadow-sm">
                {tombstone.highlightMetric}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 text-[10px] font-mono font-bold uppercase tracking-wider border border-teal-500/30">
                Verified
              </span>
            </div>

            <p className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gold-400 leading-snug pt-0.5">
              {tombstone.highlightSubtitle}
            </p>
          </div>

          {/* ============================================================
              3. TRANSACTION STRUCTURE MATRIX (Financial Ledger)
              ============================================================ */}
          <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-4 space-y-2.5 text-xs font-mono">
            {/* Row 1: Lender Category */}
            <div className="flex items-center justify-between gap-2 border-b border-white/5 pb-2">
              <span className="text-slate-400 uppercase text-[10px] tracking-wider shrink-0 flex items-center gap-1.5">
                <Landmark className="w-3 h-3 text-gold-400" />
                <span>Lender Category</span>
              </span>
              <span className="text-slate-200 font-semibold text-right truncate">
                {tombstone.lenderCategory}
              </span>
            </div>

            {/* Row 2: Collateral Pledged */}
            <div className="flex items-center justify-between gap-2 border-b border-white/5 pb-2">
              <span className="text-slate-400 uppercase text-[10px] tracking-wider shrink-0 flex items-center gap-1.5">
                <Lock className="w-3 h-3 text-teal-400" />
                <span>Collateral Pledged</span>
              </span>
              <span className="text-emerald-400 font-bold tabular-nums text-right">
                {tombstone.collateralPledged}
              </span>
            </div>

            {/* Row 3: Capex Utilization */}
            <div className="flex items-center justify-between gap-2">
              <span className="text-slate-400 uppercase text-[10px] tracking-wider shrink-0 flex items-center gap-1.5">
                <Cpu className="w-3 h-3 text-cyan-400" />
                <span>Capex Utilization</span>
              </span>
              <span className="text-slate-200 font-semibold text-right truncate max-w-[210px] sm:max-w-[280px]">
                {tombstone.capexUtilization}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
          4. TOMBSTONE FOOTER & MEMORANDUM LINK
          ============================================================ */}
      <div className="relative z-10 px-6 sm:px-8 py-4 mt-6 bg-slate-900/90 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
        <span className="text-slate-400 truncate max-w-[200px] sm:max-w-[280px]">
          {tombstone.syndicateRole || "Agnivridhi Corporate Advisory"}
        </span>

        <div className="flex items-center gap-1.5 text-gold-300 font-bold group-hover:text-white transition-colors shrink-0">
          <span>Inspect Memorandum</span>
          <ArrowUpRight className="w-4 h-4 text-gold-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
