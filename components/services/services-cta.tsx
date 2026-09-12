import * as React from "react";
import { FlagshipCta } from "@/components/shared/flagship-cta";

export function ServicesCta() {
  return (
    <FlagshipCta
      id="services-cta-heading"
      eyebrow="MULTI-DISCIPLINARY DIAGNOSTIC • ADVISORY TRIAGE"
      title={
        <>
          Not sure which advisory pathway{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 font-bold">
            fits your enterprise?
          </span>
        </>
      }
      description="Our principal consultants perform comprehensive DPR feasibility reviews, Udyam compliance audits, and loan eligibility evaluations to identify the highest leverage pathway for your enterprise."
      primaryButtonText="Request Diagnostic Consultation"
      primaryButtonHref="/contact"
      secondaryButtonText="Review Client Impact Stories"
      secondaryButtonHref="/success-stories"
    />
  );
}
