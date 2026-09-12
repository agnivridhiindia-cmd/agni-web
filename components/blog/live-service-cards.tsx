import * as React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Coins,
  Building2,
  TrendingUp,
  FileCheck,
  ClipboardCheck,
  Award,
  Scale,
  Code2,
  PieChart,
  Lightbulb,
  Cpu,
  Smartphone,
  Cloud,
  Server,
  ShoppingCart,
  Bot,
  BarChart3,
  GitFork,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/motion";

interface ServiceCardItem {
  id: string;
  title: string;
  description: string;
  link: string;
  icon: React.ComponentType<{ className?: string }>;
}

const fundingCards: ServiceCardItem[] = [
  {
    id: "cgtmse-loans",
    title: "CGTMSE Loans",
    description: "Collateral-free loans up to ₹5 Crores for manufacturing and service sectors",
    link: "/services/cgtmse-mudra",
    icon: ShieldCheck,
  },
  {
    id: "mudra-loans",
    title: "MUDRA Loans",
    description: "Micro-financing for small businesses - Shishu, Kishore, and Tarun categories",
    link: "/services/cgtmse-mudra",
    icon: Coins,
  },
  {
    id: "pmegp-scheme",
    title: "PMEGP Scheme",
    description: "Government subsidy of 15-35% for new manufacturing and service ventures",
    link: "/services/pmegp",
    icon: Building2,
  },
  {
    id: "business-loans",
    title: "Business Loans",
    description: "Customized funding solutions for working capital and business expansion",
    link: "/services/cgtmse-mudra",
    icon: TrendingUp,
  },
];

const complianceCards: ServiceCardItem[] = [
  {
    id: "gst-registration",
    title: "GST Registration",
    description: "Fast GST registration with complete documentation and filing support",
    link: "/services/gst-registration",
    icon: FileCheck,
  },
  {
    id: "msme-udyam",
    title: "MSME/Udyam Registration",
    description: "Government recognized MSME certification for subsidies and benefits",
    link: "/services/msme-udyam",
    icon: ClipboardCheck,
  },
  {
    id: "iso-certifications",
    title: "ISO Certifications",
    description: "ISO 9001, 14001, 27001, 45001 certifications for quality standards",
    link: "/services/iso-certification",
    icon: Award,
  },
  {
    id: "trademark-registration",
    title: "Trademark & Company Registration",
    description: "Protect your brand and register your company with complete legal compliance",
    link: "/contact",
    icon: Scale,
  },
];

const digitalCards: ServiceCardItem[] = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Modern, responsive websites that convert visitors into customers",
    link: "/services/web-development",
    icon: Code2,
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "SEO, social media, and paid advertising for maximum online visibility",
    link: "/services/digital-marketing",
    icon: PieChart,
  },
  {
    id: "strategy-consulting",
    title: "Strategy Consulting",
    description: "Business planning, market analysis, and growth strategy development",
    link: "/services/strategy-consulting",
    icon: Lightbulb,
  },
];

const itCards: ServiceCardItem[] = [
  {
    id: "custom-software",
    title: "Custom Software Development",
    description: "Tailored software solutions including CRM, ERP, and business automation systems",
    link: "/contact",
    icon: Cpu,
  },
  {
    id: "mobile-app",
    title: "Mobile App Development",
    description: "iOS and Android apps with seamless user experience and modern features",
    link: "/contact",
    icon: Smartphone,
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions & Migration",
    description: "AWS, Azure, Google Cloud setup, migration, and managed services",
    link: "/contact",
    icon: Cloud,
  },
  {
    id: "it-infrastructure",
    title: "IT Infrastructure & Support",
    description: "Network setup, server management, cybersecurity, and 24/7 IT support",
    link: "/contact",
    icon: Server,
  },
  {
    id: "ecommerce-solutions",
    title: "E-commerce Solutions",
    description: "Complete online store setup with payment gateway, inventory, and logistics integration",
    link: "/contact",
    icon: ShoppingCart,
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    description: "Machine learning, chatbots, process automation, and intelligent business solutions",
    link: "/contact",
    icon: Bot,
  },
  {
    id: "data-analytics",
    title: "Data Analytics & BI",
    description: "Business intelligence dashboards, data visualization, and predictive analytics",
    link: "/contact",
    icon: BarChart3,
  },
  {
    id: "devops-cicd",
    title: "DevOps & CI/CD",
    description: "Automated deployment pipelines, container orchestration, and infrastructure as code",
    link: "/contact",
    icon: GitFork,
  },
];

export function LiveServiceCards() {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F2F7FB] to-[#D5E7F4] text-slate-900">
      {/* Precision architectural ambient background matching home page */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
      >
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-300/70 to-transparent" />
        <div className="absolute inset-0 [background-image:radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:32px_32px] opacity-40 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_40%,#000_50%,transparent_100%)]" />
        <div className="absolute -right-24 top-1/4 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.05)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute -left-24 bottom-8 h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.04)_0%,transparent_70%)] blur-3xl" />
      </div>

      <div className="relative z-10 space-y-16 sm:space-y-24 py-16 sm:py-24">
        {/* 1. SECTION: Funding Solutions */}
        <section aria-labelledby="funding-solutions-heading">
          <Container width="wide">
            <FadeIn direction="up" distance={16}>
              <div className="text-center mb-12 sm:mb-16">
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-xs font-mono tracking-widest text-slate-800 shadow-2xs font-semibold mb-3.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>PRACTICE 01 &bull; CAPITAL &amp; DEBT SYNDICATION</span>
                </div>
                <h2
                  id="funding-solutions-heading"
                  className="font-heading text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-[-0.03em] text-slate-900 !leading-[1.14] mb-3"
                >
                  Funding Solutions &amp;{" "}
                  <span className="text-amber-600 font-bold font-heading">
                    Sovereign Credit
                  </span>
                </h2>
                <p className="font-sans text-sm sm:text-base text-slate-600 leading-[1.7] max-w-2xl mx-auto">
                  Access capital through government schemes and customized loan products
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
              {fundingCards.map((card) => {
                const Icon = card.icon;
                return (
                  <Link
                    key={card.id}
                    href={card.link}
                    className="rounded-2xl border border-white/90 bg-white/95 hover:bg-white shadow-[0_10px_30px_-8px_rgba(15,23,42,0.06),inset_0_1px_2px_rgba(255,255,255,1)] hover:shadow-[0_22px_45px_-10px_rgba(14,165,233,0.14),inset_0_1px_2px_rgba(255,255,255,1)] ring-1 ring-slate-900/5 hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer p-6 sm:p-7 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-14 h-14 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 shadow-md shadow-cyan-600/20 transition-transform duration-300 text-white">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-cyan-600 transition-colors font-heading">
                        {card.title}
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-6 font-sans">
                        {card.description}
                      </p>
                    </div>
                    <div className="flex items-center text-cyan-600 font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300 pt-3 border-t border-slate-100">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </Container>
        </section>

        {/* 2. SECTION: Certifications & Compliance */}
        <section aria-labelledby="compliance-solutions-heading">
          <Container width="wide">
            <FadeIn direction="up" distance={16}>
              <div className="text-center mb-12 sm:mb-16">
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-xs font-mono tracking-widest text-slate-800 shadow-2xs font-semibold mb-3.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>PRACTICE 02 &bull; STATUTORY &amp; REGULATORY GOVERNANCE</span>
                </div>
                <h2
                  id="compliance-solutions-heading"
                  className="font-heading text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-[-0.03em] text-slate-900 !leading-[1.14] mb-3"
                >
                  Certifications &amp;{" "}
                  <span className="text-amber-600 font-bold font-heading">
                    Compliance Roadmaps
                  </span>
                </h2>
                <p className="font-sans text-sm sm:text-base text-slate-600 leading-[1.7] max-w-2xl mx-auto">
                  Legal registrations and quality certifications for business credibility
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
              {complianceCards.map((card) => {
                const Icon = card.icon;
                return (
                  <Link
                    key={card.id}
                    href={card.link}
                    className="rounded-2xl border border-white/90 bg-white/95 hover:bg-white shadow-[0_10px_30px_-8px_rgba(15,23,42,0.06),inset_0_1px_2px_rgba(255,255,255,1)] hover:shadow-[0_22px_45px_-10px_rgba(20,184,166,0.14),inset_0_1px_2px_rgba(255,255,255,1)] ring-1 ring-slate-900/5 hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer p-6 sm:p-7 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-14 h-14 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 shadow-md shadow-teal-600/20 transition-transform duration-300 text-white">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-teal-600 transition-colors font-heading">
                        {card.title}
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-6 font-sans">
                        {card.description}
                      </p>
                    </div>
                    <div className="flex items-center text-teal-600 font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300 pt-3 border-t border-slate-100">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </Container>
        </section>

        {/* 3. SECTION: Digital Growth Services */}
        <section aria-labelledby="digital-solutions-heading">
          <Container width="wide">
            <FadeIn direction="up" distance={16}>
              <div className="text-center mb-12 sm:mb-16">
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-xs font-mono tracking-widest text-slate-800 shadow-2xs font-semibold mb-3.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>PRACTICE 03 &bull; DIGITAL GROWTH &amp; AUTHORITY</span>
                </div>
                <h2
                  id="digital-solutions-heading"
                  className="font-heading text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-[-0.03em] text-slate-900 !leading-[1.14] mb-3"
                >
                  Digital Growth &amp;{" "}
                  <span className="text-amber-600 font-bold font-heading">
                    Strategic Platforms
                  </span>
                </h2>
                <p className="font-sans text-sm sm:text-base text-slate-600 leading-[1.7] max-w-2xl mx-auto">
                  Scale your business with technology and strategic marketing
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-5xl mx-auto">
              {digitalCards.map((card) => {
                const Icon = card.icon;
                return (
                  <Link
                    key={card.id}
                    href={card.link}
                    className="rounded-2xl border border-white/90 bg-white/95 hover:bg-white shadow-[0_10px_30px_-8px_rgba(15,23,42,0.06),inset_0_1px_2px_rgba(255,255,255,1)] hover:shadow-[0_22px_45px_-10px_rgba(14,165,233,0.14),inset_0_1px_2px_rgba(255,255,255,1)] ring-1 ring-slate-900/5 hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer p-7 sm:p-8 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 shadow-md shadow-cyan-600/20 transition-all duration-300 text-white">
                        <Icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors font-heading">
                        {card.title}
                      </h3>
                      <p className="text-slate-600 text-base leading-relaxed mb-6 font-sans">
                        {card.description}
                      </p>
                    </div>
                    <div className="flex items-center text-cyan-600 font-semibold text-base group-hover:translate-x-3 transition-transform duration-300 pt-3 border-t border-slate-100">
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </Container>
        </section>

        {/* 4. SECTION: IT Consultancy Services */}
        <section aria-labelledby="it-solutions-heading">
          <Container width="wide">
            <FadeIn direction="up" distance={16}>
              <div className="text-center mb-12 sm:mb-16">
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-xs font-mono tracking-widest text-slate-800 shadow-2xs font-semibold mb-3.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>PRACTICE 04 &bull; SOFTWARE &amp; SYSTEMS ENGINEERING</span>
                </div>
                <h2
                  id="it-solutions-heading"
                  className="font-heading text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-[-0.03em] text-slate-900 !leading-[1.14] mb-3"
                >
                  IT Consultancy &amp;{" "}
                  <span className="text-amber-600 font-bold font-heading">
                    Enterprise Cloud
                  </span>
                </h2>
                <p className="font-sans text-sm sm:text-base text-slate-600 leading-[1.7] max-w-3xl mx-auto">
                  Complete technology solutions from software development to cloud infrastructure
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {itCards.map((card) => {
                const Icon = card.icon;
                return (
                  <Link
                    key={card.id}
                    href={card.link}
                    className="rounded-2xl border border-white/90 bg-white/95 hover:bg-white shadow-[0_10px_30px_-8px_rgba(15,23,42,0.06),inset_0_1px_2px_rgba(255,255,255,1)] hover:shadow-[0_22px_45px_-10px_rgba(37,99,235,0.14),inset_0_1px_2px_rgba(255,255,255,1)] ring-1 ring-slate-900/5 hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer p-6 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 shadow-md shadow-blue-600/20 transition-transform duration-300 text-white">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-blue-600 transition-colors font-heading">
                        {card.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-5 font-sans">
                        {card.description}
                      </p>
                    </div>
                    <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300 pt-2 border-t border-slate-100">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </Container>
        </section>
      </div>
    </div>
  );
}
