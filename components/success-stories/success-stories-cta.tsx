import * as React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/shared/container";
import { LinkButton } from "@/components/ui/link-button";

export function SuccessStoriesCta() {
  return (
    <section
      aria-labelledby="stories-cta-heading"
      className="py-16 sm:py-20 lg:py-24 bg-white text-[#0F0A1A] border-t border-cyan-100 relative overflow-hidden"
    >
      <Container width="wide">
        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0891B2]/10 border border-cyan-200 text-[#0891B2] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Enterprise Viability Diagnostic</span>
          </div>

          <h2
            id="stories-cta-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#181226] tracking-tight leading-tight"
          >
            Ready to structure measurable outcomes for your enterprise?
          </h2>

          <p className="text-[#475569] text-sm sm:text-base md:text-lg leading-relaxed font-sans">
            Connect with our senior consultants to evaluate collateral-free scheme eligibility,
            DPR viability, or statutory certification roadmaps with zero upfront commitment.
          </p>

          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#475569]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0891B2] shrink-0" />
              <span>Zero fabricated outcome projections</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0891B2] shrink-0" />
              <span>Confidential engagement under NDA</span>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <LinkButton
              href="/contact"
              variant="primary"
              size="lg"
              className="shadow-glow-teal"
            >
              <span>Request Diagnostic Assessment</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </LinkButton>

            <Link
              href="/services"
              className="text-sm font-medium text-[#475569] hover:text-[#0891B2] transition-colors underline-offset-4 hover:underline px-2 py-1"
            >
              Explore Practice Catalog &rarr;
            </Link>
          </div>
        </div>

        {/* Ambient glow decoration */}
        <div
          aria-hidden="true"
          className="absolute -right-20 -bottom-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"
        />
      </Container>
    </section>
  );
}
