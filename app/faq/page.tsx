import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  HelpCircle,
  Landmark,
  ShieldCheck,
  Cpu,
  ArrowRight,
  MessageSquare,
  Clock,
  Lock,
} from "lucide-react";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/shared/container";
import { FaqAccordion } from "@/components/faq/faq-accordion";

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
        question: "What is the turnaround time for an initial inquiry review?",
        answer:
          "Our advisory desk reviews borrowing capacity and regulatory scope within 24 business hours. A practice lead evaluates your eligibility and coordinates a direct preliminary discussion.",
      },
      {
        question: "Is our financial and company documentation kept confidential?",
        answer:
          "Yes, unconditionally. All enterprise discussions, Detailed Project Reports (DPRs), balance sheets, and proprietary models are handled under strict non-disclosure agreement (NDA) standards.",
      },
      {
        question: "Do you guarantee loan sanctions or government subsidies?",
        answer:
          "Under statutory banking norms, credit sanctions and subsidy releases are strictly determined by Member Lending Institutions (MLIs) and government sanctioning authorities. We prepare institutional-grade DPRs, CMA data, and ensure full scheme compliance to maximize your approval probability.",
      },
      {
        question: "Which geographic regions across India do you serve?",
        answer:
          "Headquartered in Noida, Uttar Pradesh, Agnivridhi advises enterprises across Delhi NCR, Uttar Pradesh, Haryana, Rajasthan, Maharashtra, and industrial manufacturing clusters pan-India.",
      },
      {
        question: "What are your fee structures for consulting engagements?",
        answer:
          "Our fee structures are transparent and milestone-linked depending on the scope—whether sovereign debt syndication, ISO accreditation, or enterprise software development. Scope and commercials are outlined clearly prior to formal engagement.",
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
        question: "What is the maximum loan limit under CGTMSE?",
        answer:
          "Eligible micro and small enterprises can secure collateral-free credit facilities up to ₹5.00 Crore per borrower under the Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE).",
      },
      {
        question: "Is third-party collateral or property mortgage required under CGTMSE?",
        answer:
          "No. Qualified credit facilities under CGTMSE require zero third-party collateral security or residential/commercial property mortgage. The loan is backed by a sovereign credit guarantee of up to 85%.",
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
    <div className="min-h-screen bg-[#080909] text-[#F3EFE7]">
      {/* 1. Editorial Hero */}
      <section className="relative border-b border-[#232727] bg-[#080909] pt-32 pb-14 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div
          className="absolute top-0 inset-x-0 h-96 bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,rgba(199,154,74,0.08),rgba(8,9,9,0))] pointer-events-none"
          aria-hidden="true"
        />

        <Container width="wide" className="relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C79A4A]/10 border border-[#C79A4A]/30 text-xs font-mono tracking-widest text-[#C79A4A]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C79A4A]" />
              <span>KNOWLEDGE BASE &bull; FREQUENTLY ASKED QUESTIONS</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#F3EFE7] tracking-tight leading-[1.12]">
              Frequently Asked Questions
            </h1>

            <p className="font-sans text-base sm:text-lg text-[#D1CBC1] leading-relaxed max-w-2xl">
              Clear, practical answers about collateral-free funding, statutory accreditations,
              technology implementations, and how our advisory practice works.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Engagement Lifecycle Protocol Section */}
      <section className="py-12 sm:py-16 border-b border-[#232727] bg-[#0E1010]">
        <Container width="wide" className="space-y-8">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C79A4A]/10 border border-[#C79A4A]/30 text-xs font-mono font-semibold text-[#C79A4A]">
              <span>Consultation Lifecycle</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#F3EFE7] tracking-tight">
              What Happens After You Inquire?
            </h2>
            <p className="text-sm text-[#A5A29A] font-sans">
              Our 3-step structured advisory roadmap ensures rapid turnaround and zero guesswork.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ENGAGEMENT_STEPS.map((step) => (
              <div
                key={step.number}
                className="p-6 rounded-2xl bg-[#111313] border border-[#232727] shadow-xs space-y-3 relative hover:border-[#C79A4A]/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#181A1A] text-[#C79A4A] border border-[#232727] font-mono text-sm font-bold flex items-center justify-center">
                  {step.number}
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#F3EFE7] leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#D1CBC1] font-sans leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-mono text-[#8E8B82] border-t border-[#232727]">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C79A4A]" />
              <span>24-Hour SLA Response Time</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#C79A4A]" />
              <span>Bilateral NDA Protected</span>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Categorized FAQ Sections */}
      <section className="py-14 sm:py-20 lg:py-24">
        <Container width="wide" className="space-y-16">
          {FAQ_CATEGORIES.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                id={category.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-8 first:pt-0 border-t first:border-t-0 border-white/10"
              >
                {/* Category Header */}
                <div className="lg:col-span-4 space-y-3 lg:sticky lg:top-28">
                  <div className="w-10 h-10 rounded-xl bg-[#181A1A] text-[#C79A4A] border border-[#232727] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#F3EFE7] tracking-tight">
                    {category.title}
                  </h2>
                  <p className="text-sm text-[#A5A29A] font-sans leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Category Accordion */}
                <div className="lg:col-span-8 rounded-2xl bg-[#111313] border border-[#232727] p-6 sm:p-8 shadow-xs">
                  <FaqAccordion items={category.faqs} />
                </div>
              </div>
            );
          })}
        </Container>
      </section>

      {/* 4. Bottom Support CTA Strip */}
      <section className="border-t border-[#232727] bg-[#080909] py-14 sm:py-18">
        <Container width="wide">
          <div className="rounded-3xl bg-[#111313] border border-[#232727] p-8 sm:p-12 text-center space-y-6 max-w-4xl mx-auto shadow-2xl">
            <div className="w-12 h-12 rounded-2xl bg-[#181A1A] text-[#C79A4A] border border-[#232727] flex items-center justify-center mx-auto shadow-xs">
              <HelpCircle className="w-6 h-6" />
            </div>

            <div className="space-y-2 max-w-xl mx-auto">
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#F3EFE7] tracking-tight">
                Have a Question Not Listed Here?
              </h3>
              <p className="text-sm sm:text-base text-[#A5A29A] font-sans leading-relaxed">
                Connect directly with our practice leads. We provide preliminary project feasibility
                assessments at zero obligation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#C79A4A] hover:bg-[#D4A85B] text-[#080909] font-sans font-bold text-xs tracking-wider uppercase transition-all shadow-xs hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Submit Your Inquiry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {siteConfig.contact.whatsapp && (
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-emerald-500/30 bg-emerald-950/40 hover:bg-emerald-950/60 text-emerald-300 font-sans font-semibold text-xs tracking-wider uppercase transition-all cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp Advisor</span>
                </a>
              )}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
