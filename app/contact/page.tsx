import * as React from "react";
import type { Metadata } from "next";
import { Suspense } from "react";
import { createPageMetadata } from "@/lib/seo";
import { Container } from "@/components/shared/container";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactInfo } from "@/components/contact/contact-info";
import { EngagementProtocol } from "@/components/contact/engagement-protocol";
import { ContactFaq } from "@/components/contact/contact-faq";
import { MapLocation } from "@/components/contact/map-location";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = createPageMetadata({
  title: "Contact & Preliminary Consultation",
  description:
    "Schedule a confidential preliminary diagnostic with Agnivridhi India. Connect with MSME funding and compliance advisors in Noida, UP.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* 1. Editorial Hero */}
      <ContactHero />

      {/* 2. Main Consultation & Engagement Layout */}
      <div className="py-12 sm:py-16 lg:py-20">
        <Container width="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Firm Profile, Protocol, FAQs & Location (7 cols) */}
            <div className="lg:col-span-7 space-y-12">
              <ContactInfo />
              <EngagementProtocol />
              <ContactFaq />
              <MapLocation />
            </div>

            {/* Right Column: Sticky Inbound Diagnostic Form (5 cols) */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28 space-y-6">
                <Suspense
                  fallback={
                    <div className="h-96 rounded-2xl bg-slate-100 animate-pulse flex items-center justify-center text-slate-400 text-sm">
                      Loading consultation form...
                    </div>
                  }
                >
                  <ContactForm />
                </Suspense>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
