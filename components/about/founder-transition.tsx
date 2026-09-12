import * as React from "react";
import { FlagshipCta } from "@/components/shared/flagship-cta";

export function FounderTransition() {
  return (
    <FlagshipCta
      id="leadership-transition-heading"
      eyebrow="PRINCIPAL-LED ADVISORY • DIRECT ENGAGEMENT"
      title={
        <>
          Direct Advisory Accountability at{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 font-bold">
            Every Stage of Scale.
          </span>
        </>
      }
      description="Unlike broad consulting practices that delegate critical client files to junior teams, Agnivridhi India is built on hands-on principal involvement. Every debt proposal, Detailed Project Report (DPR), and compliance audit strategy is structured and reviewed directly by practice leads."
      primaryButtonText="Engage Our Advisory Desk"
      primaryButtonHref="/contact"
      secondaryButtonText="Explore All Practices"
      secondaryButtonHref="/services"
    />
  );
}
