import * as React from "react";
import { FlagshipCta } from "@/components/shared/flagship-cta";

export function SuccessStoriesCta() {
  return (
    <FlagshipCta
      id="stories-cta-heading"
      eyebrow="ENTERPRISE VIABILITY • PRELIMINARY DIAGNOSTIC"
      title={
        <>
          Ready to structure{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 font-bold">
            measurable outcomes
          </span>{" "}
          for your enterprise?
        </>
      }
      description="Connect with our senior consultants to evaluate collateral-free scheme eligibility, DPR viability, or statutory certification roadmaps with zero upfront commitment."
      primaryButtonText="Request Diagnostic Assessment"
      primaryButtonHref="/contact"
      secondaryButtonText="Explore Practice Catalog"
      secondaryButtonHref="/services"
    />
  );
}
