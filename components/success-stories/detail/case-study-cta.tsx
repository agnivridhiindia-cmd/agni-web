import * as React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2, Shield } from "lucide-react";
import { Container } from "@/components/shared/container";
import { LinkButton } from "@/components/ui/link-button";

interface CaseStudyCtaProps {
  caseStudyTitle?: string;
}

export function CaseStudyCta({ caseStudyTitle }: CaseStudyCtaProps) {
  return (
    <section
      aria-labelledby="case-study-cta-title"
      className="py-16 sm:py-20 lg:py-24 bg-slate-900 text-white relative overflow-hidden"
    >
      <Container width="wide">
        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Enterprise Advisory Desk</span>
          </div>

          <h2
            id="case-study-cta-title"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight"
          >
            Facing a similar operational, funding, or compliance hurdle?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-sans">
            Connect directly with our senior advisory principals. We evaluate your balance sheet,
            DPR feasibility, and scheme eligibility with zero upfront commitment.
          </p>

          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" aria-hidden="true" />
              <span>Strict non-disclosure (NDA) protected</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-teal-400 shrink-0" aria-hidden="true" />
              <span>Institutional banking &amp; accreditation expertise</span>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <LinkButton
              href={
                caseStudyTitle
                  ? `/contact?subject=Case%20Study%20Inquiry:%20${encodeURIComponent(caseStudyTitle)}`
                  : "/contact"
              }
              variant="primary"
              size="lg"
              className="shadow-glow-teal"
            >
              <span>Schedule Strategy Discussion</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </LinkButton>

            <Link
              href="/success-stories"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors underline-offset-4 hover:underline px-2 py-1"
            >
              Explore All Case Studies &rarr;
            </Link>
          </div>
        </div>

        {/* Subtle decorative ambient gradient */}
        <div
          aria-hidden="true"
          className="absolute -right-24 -bottom-24 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"
        />
      </Container>
    </section>
  );
}
