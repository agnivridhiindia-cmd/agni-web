import * as React from "react";
import { FlagshipCta } from "@/components/shared/flagship-cta";

export function BlogCta() {
  return (
    <FlagshipCta
      id="blog-cta-heading"
      eyebrow="READY TO TRANSFORM YOUR BUSINESS?"
      title="Ready to Transform Your Business?"
      description="Book a free consultation to discuss your specific needs and find the perfect solutions with our senior debt syndication, regulatory compliance, and technology engineering directors."
      primaryButtonText="Schedule Free Consultation"
      primaryButtonHref="/contact?type=consultation"
      secondaryButtonText="Explore Our Services"
      secondaryButtonHref="/services"
    />
  );
}

