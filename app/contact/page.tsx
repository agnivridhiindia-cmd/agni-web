import * as React from "react";
import type { Metadata } from "next";
import { Suspense } from "react";
import { createPageMetadata } from "@/lib/seo";
import { Container } from "@/components/shared/container";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactInfo } from "@/components/contact/contact-info";
import { MapLocation } from "@/components/contact/map-location";
import { ContactForm } from "@/components/contact/contact-form";
import { FlagshipCta } from "@/components/shared/flagship-cta";

export const metadata: Metadata = createPageMetadata({
 title: "Contact & Preliminary Consultation",
 description:
 "Schedule a confidential preliminary diagnostic with Agnivridhi India. Connect with MSME funding and compliance advisors in Noida, UP.",
 path: "/contact",
});

export default function ContactPage() {
 return (
 <div className="min-h-screen text-slate-100 selection:bg-amber-500/20 selection:text-amber-200">
 {/* 1. Editorial Hero (Dark) */}
 <ContactHero />

 <div className="hairline-rule-brass" />

 {/* 2. Main Consultation & Engagement Layout in Home Page Light Mode */}
 <div className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#D5E7F4] via-[#C6E0F2] to-[#B8D7EE] text-slate-900 border-b border-[#A6CCEA] relative overflow-hidden">
 {/* Precision architectural ambient background matching home page institutional narrative */}
 <div
 aria-hidden="true"
 className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
 >
 <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-300/80 to-transparent" />
 <div className="absolute inset-0 [background-image:radial-gradient(#94A3B8_1px,transparent_1px)] [background-size:32px_32px] opacity-35 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_40%,#000_65%,transparent_100%)]" />
 <div className="absolute top-1/4 -left-32 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.1)_0%,transparent_70%)]" />
 <div className="absolute bottom-1/4 -right-32 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.06)_0%,transparent_70%)]" />
 </div>

 <Container width="wide" className="relative z-10">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
 {/* Left Column: Firm Profile, Protocol & Location (7 cols) */}
 <div className="lg:col-span-7 space-y-12">
 <ContactInfo />
 <MapLocation />
 </div>

 {/* Right Column: Inbound Diagnostic Form (5 cols) */}
 <div className="lg:col-span-5">
 <div className="space-y-6">
 <Suspense
 fallback={
 <div className="h-96 rounded-2xl bg-white/70 animate-pulse flex items-center justify-center text-slate-500 text-sm">
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

 <div className="hairline-rule-brass" />

 {/* 3. Closing Flagship Consultation CTA (Dark) */}
 <FlagshipCta
 id="contact-bottom-cta-heading"
 eyebrow="INSTITUTIONAL DIRECTORY • NATIONWIDE COVERAGE"
 title={
 <>
 Ready to structure{" "}
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 font-bold">
 sovereign credit or statutory accreditations
 </span>
 ?
 </>
 }
 description="Our advisory desk directly interfaces with nationalized banks, SIDBI, and accredited certification registrars across all industrial corridors in India."
 primaryButtonText="Explore Advisory Practice Catalog"
 primaryButtonHref="/services"
 secondaryButtonText="Read Client Case Studies"
 secondaryButtonHref="/success-stories"
      />
    </div>
  );
}
