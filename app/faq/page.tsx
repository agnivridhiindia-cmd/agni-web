import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
 HelpCircle,
 Landmark,
 ShieldCheck,
 Cpu,
 ArrowRight,
 Clock,
 Lock,
} from "lucide-react";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/shared/container";
import { FaqAccordion } from "@/components/faq/faq-accordion";
import { FlagshipCta } from "@/components/shared/flagship-cta";

export const metadata: Metadata = createPageMetadata({
 title: "Frequently Asked Questions (FAQ) | Agnivridhi India",
 description:
 "Find answers to common questions about CGTMSE collateral-free loans, PMEGP subsidies, ISO certifications, and our advisory process.",
 path: "/faq",
});

interface FaqCategory {
 id: string;
 title: string;
 description: string;
 icon: React.ElementType;
 faqs: {
 question: string;
 answer: string;
 }[];
}

const FAQ_CATEGORIES: FaqCategory[] = [
 {
 id: "engagement",
 title: "Advisory Engagement & Process",
 description: "How our consultation, onboarding, and client advisory workflows operate.",
 icon: HelpCircle,
 faqs: [
 {
 question: "What is the process to get started with Agnivridhi?",
 answer:
 "It's simple: 1) Contact us for a free, no-obligation consultation. 2) We discuss your goals and determine your eligibility. 3) We create a clear roadmap and document checklist. 4) We handle the application and follow-up process from start to finish.",
 },
 {
 question: "Can you help me if I don't have a business plan or financial projections?",
 answer:
 "Absolutely. We build a robust, bank-ready business plan and detailed financial projections that align with your vision and meet lender requirements.",
 },
 {
 question: "Why should I hire you instead of applying for schemes myself?",
 answer:
 "The process is complex, time-consuming, and vulnerable to rejection from minor errors. Our expertise makes your application professional, accurate, and strategically positioned for approval.",
 },
 {
 question: "What are the key benefits of a Startup India Certificate?",
 answer:
 "The DPIIT Startup India certificate can provide a potential three-year tax holiday, self-certification for compliance, eligibility for government tenders, and access to funding opportunities.",
 },
 {
 question: "How much do you charge for your services?",
 answer:
 "Our fees depend on the complexity and type of service required. We discuss transparent and fair pricing during the initial consultation, with a focus on delivering a strong return on your investment.",
 },
 ],
 },
 {
 id: "funding",
 title: "Government Funding & Debt Syndication",
 description: "CGTMSE collateral-free loans, PMEGP capital subsidies, and institutional credit.",
 icon: Landmark,
 faqs: [
 {
 question: "What is a CGTMSE loan, and why is collateral-free important?",
 answer:
 "CGTMSE stands for Credit Guarantee Fund Trust for Micro and Small Enterprises. It provides a guarantee cover to banks so they can offer loans to MSMEs without requiring collateral.",
 },
 {
 question: "I don't have any property or collateral. Can I still get a business loan?",
 answer:
 "Yes. We specialize in helping clients access collateral-free loans through government schemes like CGTMSE and MUDRA.",
 },
 {
 question: "What capital subsidy is available under the PMEGP scheme?",
 answer:
 "Under the Prime Minister's Employment Generation Programme (PMEGP), eligible manufacturing units (up to ₹50 Lakh project cost) and service units (up to ₹20 Lakh) can access government capital margin subsidies ranging from 15% to 35% depending on urban/rural location and promoter category.",
 },
 {
 question: "What is the difference between MUDRA and CGTMSE loans?",
 answer:
 "MUDRA (PMMY) caters primarily to micro-enterprises with funding tiers up to ₹20 Lakh (Shishu, Kishore, Tarun). CGTMSE caters to larger micro and small businesses requiring up to ₹5 Crore in working capital or machinery term loans.",
 },
 {
 question: "What documents are required to initiate project finance syndication?",
 answer:
 "Typical requirements include 3 years of audited balance sheets (for existing units), ITR returns, GST returns, provisional DPR, promoter KYC, and quotation/estimates for proposed capital machinery.",
 },
 ],
 },
 {
 id: "compliance",
 title: "Compliance & Statutory Certifications",
 description: "ISO standards, MSME Udyam registration, and Startup India DPIIT recognition.",
 icon: ShieldCheck,
 faqs: [
 {
 question: "Why should an MSME obtain ISO 9001 / 14001 / 27001 certifications?",
 answer:
 "ISO accreditations validate process quality, environmental safety, and data security. They are frequently mandatory qualifications for institutional government tenders, corporate OEM vendor empanelment, and global export contracts.",
 },
 {
 question: "How does MSME Udyam Registration benefit my enterprise?",
 answer:
 "Udyam registration legally unlocks statutory benefits under the MSMED Act, including mandatory protection against delayed payments (with interest), priority sector bank lending, concessions on electricity tariffs, and fee waivers on trademark filings.",
 },
 {
 question: "What advantages does Startup India (DPIIT) recognition offer?",
 answer:
 "DPIIT-recognized startups gain access to Section 80-IAC three-year income tax holidays, Angel Tax exemptions under Section 56(2)(viib), relaxed public procurement criteria, and eligibility for the Startup India Seed Fund Scheme (up to ₹50 Lakh).",
 },
 {
 question: "How long does it take to obtain an ISO certification?",
 answer:
 "Depending on standard clauses and internal process documentation, ISO certifications typically take between 20 to 30 business days across gap analysis, SOP manual drafting, internal audit, and registrar assessment.",
 },
 ],
 },
 {
 id: "technology",
 title: "Technology & Software Engineering",
 description: "Bespoke software systems, ERP implementations, and high-performance web platforms.",
 icon: Cpu,
 faqs: [
 {
 question: "Does Agnivridhi build custom software or configure existing tools?",
 answer:
 "We offer both. We architect custom proprietary software and mobile applications with 100% IP ownership for clients, as well as deploy lightweight ERP, CRM, and workflow automations to streamline factory shop floors.",
 },
 {
 question: "Do we own the source code and intellectual property (IP)?",
 answer:
 "Yes, 100%. Upon project completion, all source code, repository access, architecture documentation, and deployment infrastructure keys are fully handed over with zero vendor lock-in.",
 },
 {
 question: "Can you modernize our existing legacy website or software?",
 answer:
 "Yes. We specialize in migrating legacy websites and fragmented database spreadsheets to high-performance headless stacks (Next.js, TypeScript, Tailwind) with sub-second page loads and optimized search rankings.",
 },
 ],
 },
];

const ENGAGEMENT_STEPS = [
 {
 number: "01",
 title: "Preliminary Scheme Feasibility & Eligibility Check",
 description:
 "Our practice analysts cross-reference your turnover, borrowing limit, and Udyam classification against official criteria (CGTMSE, PMEGP, MUDRA) within 24 hours.",
 },
 {
 number: "02",
 title: "Direct Technical Consultation & Diagnostic Call",
 description:
 "A structured diagnostic session with a practice lead to review financial modeling assumptions, DSCR metrics, or statutory audit gap analysis.",
 },
 {
 number: "03",
 title: "Execution Roadmap & Document Calibration",
 description:
 "Delivery of an actionable proposal, institutional CMA data preparation schedule, and formal bank or audit committee representation plan.",
 },
];

export default function FaqPage() {
 return (
 <div className="min-h-screen text-slate-100 selection:bg-amber-500/20 selection:text-amber-200">
 {/* 1. Editorial Hero */}
 <section className="relative border-b border-slate-700/60 text-white pb-14 pt-32 sm:pb-16 sm:pt-36 lg:pb-20 lg:pt-40 overflow-hidden bg-[radial-gradient(circle_at_15%_25%,_rgba(245,158,11,0.12),transparent_38%),radial-gradient(circle_at_85%_20%,_rgba(14,165,233,0.16),transparent_32%),radial-gradient(circle_at_50%_90%,_rgba(14,116,144,0.12),transparent_42%),linear-gradient(180deg,#0B1329_0%,#0F1A34_45%,#0B1329_100%)]">
 {/* Ambient Blueprint Grid & Glowing Orbs */}
 <div
 className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
 aria-hidden="true"
 >
 <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,#06B6D4_1px,transparent_1px),linear-gradient(to_bottom,#06B6D4_1px,transparent_1px)] [background-size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_60%,transparent_100%)]" />
 <div className="absolute -top-20 right-[-5%] h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.18)_0%,rgba(14,116,144,0.08)_45%,transparent_70%)]" />
 <div className="absolute top-[38%] left-[-12%] h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.15)_0%,rgba(217,119,6,0.06)_45%,transparent_72%)]" />
 <div className="absolute top-8 left-8 font-mono text-xs text-amber-500/30 select-none">+</div>
 <div className="absolute top-8 right-8 font-mono text-xs text-cyan-400/30 select-none">+</div>
 </div>

 <Container width="wide" className="relative z-10">
 <div className="max-w-3xl space-y-6">
 <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-950/90  border border-amber-500/40 text-xs font-mono tracking-widest text-amber-300 uppercase shadow-xs">
 <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
 <span>KNOWLEDGE BASE &bull; FREQUENTLY ASKED QUESTIONS</span>
 </div>

 <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.12] tracking-tight text-white">
 Frequently Asked{" "}
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 font-bold">
 Questions
 </span>
 </h1>

 <p className="max-w-2xl font-sans text-base sm:text-lg leading-relaxed text-slate-300">
 Clear, practical answers about collateral-free funding, statutory accreditations,
 technology implementations, and how our advisory practice works.
 </p>
 </div>
 </Container>
 </section>

 <div className="hairline-rule-brass" />

 {/* 2. Middle Sections: Engagement Lifecycle & Categorized FAQs in Home Page Light Mode */}
 <div className="grow bg-gradient-to-b from-[#D5E7F4] via-[#C6E0F2] to-[#B8D7EE] text-slate-900 border-b border-[#A6CCEA] relative overflow-hidden">
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

 <div className="relative z-10">
 {/* Engagement Lifecycle Protocol Section */}
 <section className="py-12 sm:py-16">
 <Container width="wide" className="space-y-8">
 <div className="max-w-2xl space-y-3">
 <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/85  border border-amber-400/50 text-xs font-mono tracking-widest text-amber-900 uppercase shadow-xs">
 <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
 <span>CONSULTATION LIFECYCLE &bull; 3-STAGE PROTOCOL</span>
 </div>
 <h2 className="font-serif text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
 What Happens After You Inquire?
 </h2>
 <p className="font-sans text-sm sm:text-base text-slate-700">
 Our 3-step structured advisory roadmap ensures rapid turnaround and zero guesswork.
 </p>
 </div>

 <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
 {ENGAGEMENT_STEPS.map((step) => (
 <div
 key={step.number}
 className="group relative space-y-3 rounded-3xl border border-white/90 bg-white/85 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.08)]  transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-400/60 hover:shadow-[0_24px_50px_rgba(14,165,233,0.18)] [transform:translateZ(0)]"
 >
 <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-300 bg-amber-100 font-mono text-sm font-bold text-amber-900 shadow-2xs">
 {step.number}
 </div>
 <h3 className="font-serif text-lg font-bold leading-snug text-slate-900 group-hover:text-amber-700 transition-colors">
 {step.title}
 </h3>
 <p className="text-xs leading-relaxed text-slate-600 sm:text-sm font-sans">
 {step.description}
 </p>
 </div>
 ))}
 </div>

 <div className="flex flex-wrap items-center gap-6 border-t border-[#A6CCEA]/80 pt-4 text-xs font-mono text-slate-600">
 <div className="flex items-center gap-2">
 <Clock className="h-4 w-4 text-amber-600" />
 <span>24-Hour SLA Response Time</span>
 </div>
 <div className="flex items-center gap-2">
 <Lock className="h-4 w-4 text-amber-600" />
 <span>Bilateral NDA Protected</span>
 </div>
 </div>
 </Container>
 </section>

 <div className="hairline-rule-cyan" />

 {/* Categorized FAQ Sections */}
 <section className="py-14 sm:py-20 lg:py-24">
 <Container width="wide" className="space-y-16">
 {FAQ_CATEGORIES.map((category) => {
 const Icon = category.icon;
 return (
 <div
 key={category.id}
 id={category.id}
 className="grid grid-cols-1 items-start gap-8 border-t border-[#A6CCEA]/80 pt-8 first:border-t-0 first:pt-0 lg:grid-cols-12 lg:gap-12"
 >
 {/* Category Header */}
 <div className="space-y-3 lg:col-span-4">
 <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-300 bg-amber-100 text-amber-800 shadow-2xs">
 <Icon className="h-5 w-5" />
 </div>
 <h2 className="font-serif text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
 {category.title}
 </h2>
 <p className="font-sans text-sm leading-relaxed text-slate-700">
 {category.description}
 </p>
 </div>

 {/* Category Accordion */}
 <div className="rounded-3xl border border-white/90 bg-white/80 p-4 shadow-[0_20px_50px_rgba(15,23,42,0.08)]  [transform:translateZ(0)] sm:p-6 lg:col-span-8 lg:p-8">
 <FaqAccordion items={category.faqs} />
 </div>
 </div>
 );
 })}
 </Container>
 </section>
 </div>
 </div>

 <div className="hairline-rule-brass" />

 {/* 4. Flagship Bottom Conversion CTA */}
 <FlagshipCta
 id="faq-bottom-cta-heading"
 eyebrow="ADVISORY SUPPORT • INQUIRY TRIAGE"
 title={
 <>
 Have a question{" "}
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 font-bold">
 not listed here?
 </span>
 </>
 }
 description="Connect directly with our practice leads. We provide preliminary project feasibility assessments and scheme eligibility diagnostics at zero obligation."
 primaryButtonText="Submit Your Inquiry"
 primaryButtonHref="/contact"
 secondaryButtonText="Explore All Practices"
 secondaryButtonHref="/services"
      />
    </div>
  );
}
