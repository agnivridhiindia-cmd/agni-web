import * as React from "react";
import Link from "next/link";
import { ShieldCheck, ArrowRight, CheckCircle2, Lock, ExternalLink } from "lucide-react";
import type { CaseStudyFrontmatter } from "@/types/case-study";
import { OutcomeStats } from "@/components/success-stories/outcome-stats";
import { LinkButton } from "@/components/ui/link-button";
import { getServiceBySlug } from "@/data/services";

interface CaseStudySidebarProps {
  study: CaseStudyFrontmatter;
}

export function CaseStudySidebar({ study }: CaseStudySidebarProps) {
  const primaryStat = study.statistics?.[0] || (
    study.statValue && study.statLabel
      ? { value: study.statValue, label: study.statLabel, context: study.statContext }
      : null
  );

  const relatedServiceSlug = study.services[0];
  const relatedService = relatedServiceSlug ? getServiceBySlug(relatedServiceSlug) : null;

  return (
    <aside aria-label="Case Study Specifications" className="space-y-6">
      {/* Sticky container */}
      <div className="sticky top-28 space-y-6">
        {/* 1. Primary Highlight Metric */}
        {primaryStat && (
          <div className="rounded-2xl border border-teal-200/80 bg-linear-to-b from-teal-50/50 to-white p-5 shadow-xs">
            <span className="text-[11px] font-bold uppercase tracking-wider text-teal-800 font-sans block mb-3">
              Verified Headline Outcome
            </span>
            <OutcomeStats
              value={primaryStat.value}
              label={primaryStat.label}
              context={primaryStat.context}
              size="large"
              variant="teal"
              className="bg-white border-teal-200/60 shadow-xs"
            />
          </div>
        )}

        {/* 2. Engagement Profile Card */}
        <div className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs space-y-5">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100 text-xs font-bold uppercase tracking-wider text-slate-700">
            <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
            <span>Engagement Specification</span>
          </div>

          <dl className="space-y-4 text-xs font-sans">
            {study.client && (
              <div>
                <dt className="text-slate-500 font-medium">Enterprise Sector</dt>
                <dd className="font-semibold text-slate-900 mt-0.5 leading-snug">
                  {study.client}
                </dd>
              </div>
            )}

            <div>
              <dt className="text-slate-500 font-medium">Advisory Practice</dt>
              <dd className="font-semibold text-slate-900 mt-0.5 capitalize">
                {study.category === "funding"
                  ? "Government & Debt Funding"
                  : study.category === "compliance"
                  ? "Compliance & Certifications"
                  : study.category === "digital"
                  ? "Digital Transformation"
                  : "Custom Software & IT"}
              </dd>
            </div>

            <div>
              <dt className="text-slate-500 font-medium">Audit &amp; Validation Status</dt>
              <dd className="inline-flex items-center gap-1.5 font-semibold text-teal-700 mt-0.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Deliverable</span>
              </dd>
            </div>

            {relatedService && (
              <div className="pt-2 border-t border-slate-100">
                <dt className="text-slate-500 font-medium mb-1">Associated Practice Desk</dt>
                <dd>
                  <Link
                    href={`/services/${relatedService.slug}`}
                    className="inline-flex items-center gap-1.5 font-semibold text-teal-700 hover:text-teal-900 transition-colors group"
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
              <span>Schedule Diagnostic Desk</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </LinkButton>
          </div>

          {/* NDA Note */}
          <div className="flex items-start gap-2 pt-2 text-[11px] text-slate-500 leading-tight">
            <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
            <span>
              All client project data is handled under institutional NDA protocols.
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
