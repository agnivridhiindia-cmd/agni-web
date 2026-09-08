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
          "Under the Prime Minister's Employment Generation Programme (PMEGP), eligible manufacturing units (up to ÃƒÂ¢ - Å¡Ã‚Â¹50 Lakh project cost) and service units (up to ÃƒÂ¢ - Å¡Ã‚Â¹20 Lakh) can access government capital margin subsidies ranging from 15% to 35% depending on urban/rural location and promoter category.",
      },
      {
        question: "What is the difference between MUDRA and CGTMSE loans?",
        answer:
          "MUDRA (PMMY) caters primarily to micro-enterprises with funding tiers up to ÃƒÂ¢ - Å¡Ã‚Â¹20 Lakh (Shishu, Kishore, Tarun). CGTMSE caters to larger micro and small businesses requiring up to ÃƒÂ¢ - Å¡Ã‚Â¹5 Crore in working capital or machinery term loans.",
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
          "DPIIT-recognized startups gain access to Section 80-IAC three-year income tax holidays, Angel Tax exemptions under Section 56(2)(viib), relaxed public procurement criteria, and eligibility for the Startup India Seed Fund Scheme (up to ÃƒÂ¢ - Å¡Ã‚Â¹50 Lakh).",
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
    <div className="min-h-screen bg-background text-foreground">
      {/* 1. Editorial Hero */}
      <section className="relative overflow-hidden border-b border-cyan-100 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.14),transparent_18%),radial-gradient(circle_at_80%_20%,rgba(45,212,191,0.12),transparent_20%),linear-gradient(180deg,#ffffff_0%,#f4fdff_42%,#f7fbfd_100%)] pb-14 pt-32 sm:pb-16 sm:pt-36 lg:pb-20 lg:pt-40">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,rgba(8,145,178,0.12),rgba(255,255,255,0))]"
          aria-hidden="true"
        />

        <Container width="wide" className="relative z-10">
          <div className="max-w-3xl space-y-5 rounded-[2rem] border border-cyan-200/80 bg-white/70 p-6 shadow-[0_22px_60px_-30px_rgba(8,145,178,0.22)] backdrop-blur-sm sm:p-8 lg:p-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50/80 px-3 py-1 text-xs font-mono tracking-widest text-[#0891B2]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0891B2]" />
              <span>KNOWLEDGE BASE &bull; FREQUENTLY ASKED QUESTIONS</span>
            </div>

            <h1 className="font-serif text-3xl font-semibold leading-[1.12] tracking-tight text-[#181226] sm:text-4xl md:text-5xl lg:text-6xl">
              Frequently Asked Questions
            </h1>

            <p className="max-w-2xl font-sans text-base leading-relaxed text-[#475569] sm:text-lg">
              Clear, practical answers about collateral-free funding, statutory accreditations,
              technology implementations, and how our advisory practice works.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Engagement Lifecycle Protocol Section */}
      <section className="border-b border-cyan-100 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.08),transparent_18%),linear-gradient(180deg,#f0fbfd_0%,#f8feff_100%)] py-12 sm:py-16">
        <Container width="wide" className="space-y-8">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-3 py-1 text-xs font-mono font-semibold text-[#0891B2] shadow-sm">
              <span>Consultation Lifecycle</span>
            </div>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-[#181226] sm:text-3xl">
              What Happens After You Inquire?
            </h2>
            <p className="font-sans text-sm text-[#475569]">
              Our 3-step structured advisory roadmap ensures rapid turnaround and zero guesswork.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {ENGAGEMENT_STEPS.map((step) => (
              <div
                key={step.number}
                className="group relative space-y-3 rounded-[1.5rem] border border-white/60 bg-white/85 p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.95),0_18px_40px_-24px_rgba(8,145,178,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_22px_48px_-24px_rgba(8,145,178,0.22)] [transform:translateZ(0)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-200 bg-gradient-to-br from-cyan-50 to-white font-mono text-sm font-bold text-[#0891B2]">
                  {step.number}
                </div>
                <h3 className="font-serif text-lg font-semibold leading-snug text-[#181226]">
                  {step.title}
                </h3>
                <p className="text-xs leading-relaxed text-[#475569] sm:text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-6 border-t border-cyan-100 pt-2 text-xs font-mono text-[#64748B]">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#0891B2]" />
              <span>24-Hour SLA Response Time</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="h-4 w-4 text-[#0891B2]" />
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
                className="grid grid-cols-1 items-start gap-8 border-t border-cyan-100 pt-8 first:border-t-0 first:pt-0 lg:grid-cols-12 lg:gap-12"
              >
                {/* Category Header */}
                <div className="space-y-3 lg:sticky lg:top-28 lg:col-span-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-200 bg-gradient-to-br from-cyan-50 to-white text-[#0891B2] shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="font-serif text-2xl font-semibold tracking-tight text-[#181226] sm:text-3xl">
                    {category.title}
                  </h2>
                  <p className="font-sans text-sm leading-relaxed text-[#475569]">
                    {category.description}
                  </p>
                </div>

                {/* Category Accordion */}
                <div className="rounded-[1.75rem] border border-white/60 bg-white/85 p-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.95),0_20px_50px_-30px_rgba(8,145,178,0.18)] [transform:translateZ(0)] sm:p-6 lg:col-span-8 lg:p-8">
                  <FaqAccordion items={category.faqs} />
                </div>
              </div>
            );
          })}
        </Container>
      </section>

      {/* 4. Bottom Support CTA Strip */}
      <section className="border-t border-cyan-100 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.08),transparent_18%),linear-gradient(180deg,#f7feff_0%,#effcf8_100%)] py-14 sm:py-18">
        <Container width="wide">
          <div className="mx-auto max-w-4xl space-y-6 rounded-[2rem] border border-white/60 bg-white/85 p-8 text-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.95),0_24px_64px_-30px_rgba(8,145,178,0.22)] [transform:translateZ(0)] sm:p-12">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-200 bg-gradient-to-br from-cyan-50 to-white text-[#0891B2] shadow-sm">
              <HelpCircle className="h-6 w-6" />
            </div>

            <div className="mx-auto max-w-xl space-y-2">
              <h3 className="font-serif text-2xl font-semibold tracking-tight text-[#181226] sm:text-3xl">
                Have a Question Not Listed Here?
              </h3>
              <p className="font-sans text-sm leading-relaxed text-[#475569] sm:text-base">
                Connect directly with our practice leads. We provide preliminary project feasibility
                assessments at zero obligation.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0891B2]/90 via-[#0EA5C9]/90 to-[#10B981]/90 backdrop-blur-md border border-white/25 px-6 py-3 text-xs font-sans font-bold uppercase tracking-wider text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.45),0_10px_24px_rgba(8,145,178,0.24)] transition-all hover:-translate-y-0.5 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.65),0_14px_30px_rgba(14,165,233,0.28)] [transform:translateZ(0)]"
              >
                <span>Submit Your Inquiry</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
