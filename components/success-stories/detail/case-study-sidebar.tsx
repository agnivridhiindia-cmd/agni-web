import * as React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Lock,
  ExternalLink,
  Landmark,
  Cpu,
} from "lucide-react";
import type { CaseStudyFrontmatter, DealTombstoneMatrix } from "@/types/case-study";
import { LinkButton } from "@/components/ui/link-button";
import { getServiceBySlug } from "@/data/services";

interface CaseStudySidebarProps {
  study: CaseStudyFrontmatter;
}

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

export function CaseStudySidebar({ study }: CaseStudySidebarProps) {
  const tombstone = getDealTombstone(study);
  const relatedServiceSlug = study.services[0];
  const relatedService = relatedServiceSlug ? getServiceBySlug(relatedServiceSlug) : null;

  return (
    <aside aria-label="Case Study Specifications" className="space-y-6">
      {/* Sticky container */}
      <div className="sticky top-28 space-y-6">
        {/* Deal Tombstone Summary Dock */}
        <div className="rounded-2xl border border-slate-800 bg-slate-950 text-white shadow-elevated overflow-hidden">
          {/* Top Metallic Accent Bar */}
          <div className="px-5 py-2.5 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-gold-500/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-gold-300 truncate">
                {tombstone.industryVertical}
              </span>
            </div>
            <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">
              Tombstone
            </span>
          </div>

          <div className="p-5 sm:p-6 space-y-5">
            {/* Massive Highlight Metric */}
            <div className="p-4 rounded-xl bg-white/[0.04] border border-purple-100 space-y-1">
              <span className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight tabular-nums block">
                {tombstone.highlightMetric}
              </span>
              <span className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-gold-400 block leading-tight">
                {tombstone.highlightSubtitle}
              </span>
            </div>

            {/* Transaction Structure Matrix */}
            <div className="space-y-2.5 text-xs font-mono">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                Transaction Structure Matrix
              </span>

              <div className="rounded-lg bg-slate-900/90 border border-slate-800 p-3 space-y-2.5">
                <div className="flex items-center justify-between gap-2 border-b border-white/5 pb-2">
                  <span className="text-slate-400 uppercase text-[10px] tracking-wider shrink-0 flex items-center gap-1.5">
                    <Landmark className="w-3 h-3 text-gold-400" />
                    <span>Lender Category</span>
                  </span>
                  <span className="text-slate-200 font-semibold text-right truncate">
                    {tombstone.lenderCategory}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-2 border-b border-white/5 pb-2">
                  <span className="text-slate-400 uppercase text-[10px] tracking-wider shrink-0 flex items-center gap-1.5">
                    <Lock className="w-3 h-3 text-teal-400" />
                    <span>Collateral Pledged</span>
                  </span>
                  <span className="text-emerald-400 font-bold tabular-nums text-right">
                    {tombstone.collateralPledged}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <span className="text-slate-400 uppercase text-[10px] tracking-wider shrink-0 flex items-center gap-1.5">
                    <Cpu className="w-3 h-3 text-cyan-400" />
                    <span>Capex Utilization</span>
                  </span>
                  <span className="text-slate-200 font-semibold text-right truncate max-w-[190px]">
                    {tombstone.capexUtilization}
                  </span>
                </div>
              </div>
            </div>

            {/* Engagement Details */}
            <dl className="space-y-3 pt-3 border-t border-slate-800 text-xs font-sans">
              <div>
                <dt className="text-slate-400 font-medium">Syndicate Role</dt>
                <dd className="font-semibold text-slate-200 mt-0.5 font-mono text-[11px]">
                  {tombstone.syndicateRole || "Sole Debt Structuring Advisor"}
                </dd>
              </div>

              <div>
                <dt className="text-slate-400 font-medium">Validation Status</dt>
                <dd className="inline-flex items-center gap-1.5 font-semibold text-emerald-400 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>100% Audit Cleared &bull; Non-Recourse Backstop</span>
                </dd>
              </div>

              {relatedService && (
                <div className="pt-2 border-t border-slate-800/80">
                  <dt className="text-slate-400 font-medium mb-1">Associated Practice Desk</dt>
                  <dd>
                    <Link
                      href={`/services/${relatedService.slug}`}
                      className="inline-flex items-center gap-1.5 font-semibold text-teal-400 hover:text-teal-300 transition-colors group"
                    >
                      <span>{relatedService.name}</span>
                      <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </dd>
                </div>
              )}
            </dl>

            {/* Action Button */}
            <div className="pt-2">
              <LinkButton
                href="/contact"
                variant="primary"
                size="default"
                className="w-full justify-center shadow-glow-teal"
              >
                <span>Consult on Similar Mandate</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </LinkButton>
            </div>

            {/* NDA Note */}
            <div className="flex items-start gap-2 pt-2 text-[11px] text-slate-400 leading-tight">
              <Lock className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
              <span>
                All client transaction data is handled under institutional NDA protocols.
              </span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
