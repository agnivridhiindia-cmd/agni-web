import * as React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/shared/container";
import { LinkButton } from "@/components/ui/link-button";

export function SuccessStoriesCta() {
  return (
    <section
      aria-labelledby="stories-cta-heading"
      className="py-16 sm:py-20 lg:py-24 bg-[#0B0C0C] text-[#F3EFE7] border-t border-[#232727] relative overflow-hidden"
    >
      <Container width="wide">
        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C79A4A]/10 border border-[#C79A4A]/30 text-[#C79A4A] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Enterprise Viability Diagnostic</span>
          </div>

          <h2
            id="stories-cta-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight"
          >
            Ready to structure measurable outcomes for your enterprise?
          </h2>

          <p className="text-[#D1CBC1] text-sm sm:text-base md:text-lg leading-relaxed font-sans">
            Connect with our senior consultants to evaluate collateral-free scheme eligibility,
            DPR viability, or statutory certification roadmaps with zero upfront commitment.
          </p>

          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#D1CBC1]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0" />
              <span>Zero fabricated outcome projections</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0" />
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
              className="text-sm font-medium text-[#D1CBC1] hover:text-white transition-colors underline-offset-4 hover:underline px-2 py-1"
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
