import * as React from "react";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { BlogHero } from "@/components/blog/blog-hero";
import { LiveServiceCards } from "@/components/blog/live-service-cards";
import { BlogCta } from "@/components/blog/blog-cta";

export const metadata: Metadata = createPageMetadata({
  title: "Services & Strategic Insights | Agnivridhi India",
  description:
    "Comprehensive solutions for business growth, government funding schemes (CGTMSE, MUDRA, PMEGP), statutory compliance, and technology engineering.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <div className="min-h-screen text-slate-100 flex flex-col selection:bg-amber-500/20 selection:text-amber-200">
      {/* 1. TOP SECTION (Dark Mode): Signature Luxury Hero */}
      <BlogHero />

      {/* Luminous Brass Hairline Transition */}
      <div className="hairline-rule-brass w-full" aria-hidden="true" />

      {/* 2. MIDDLE SECTION (White Mode): Live Service Cards */}
      <LiveServiceCards />

      {/* Luminous Multi-Tone Hairline Divider */}
      <div className="hairline-rule-multi w-full" aria-hidden="true" />

      {/* 3. LAST SECTION (Dark Mode): Signature Closing Advisory CTA */}
      <BlogCta />
    </div>
  );
}

