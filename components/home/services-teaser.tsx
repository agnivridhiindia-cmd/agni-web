"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, ShieldCheck, Cpu, Globe } from "lucide-react";
import { Container } from "@/components/shared/container";
import { FadeIn, useReducedMotionPreference } from "@/components/shared/motion";
import { cn } from "@/lib/utils";

interface PracticeInfo {
  id: string;
  num: string;
  discipline: string;
  headline: string;
  subhead: string;
  description: string;
  image: string;
  imageAlt: string;
  tag: string;
  deliverables: string[];
  anchor: string;
  icon: React.ElementType;
}

const practices: PracticeInfo[] = [
  {
    id: "funding",
    num: "01",
    discipline: "CAPITAL & DEBT SYNDICATION",
    headline: "Institutional Debt & Sovereign Credit",
    subhead: "TEV & DPR Modeling",
    description:
      "Direct banking liaison and audit-grade Detailed Project Reports (DPR) to secure collateral-free CGTMSE credit up to ₹5 Cr, 35% PMEGP subsidies, and project term loans.",
    image: "/img/practice-capital.jpg",
    imageAlt: "Indian automated CNC machining plant financed via sovereign debt",
    tag: "₹5 Cr Collateral-Free Ceiling",
    deliverables: ["CGTMSE Guarantee Trust", "PMEGP 35% Capital Subsidies", "Lead Bank Sanctions"],
    anchor: "/services#funding",
    icon: Building2,
  },
  {
    id: "compliance",
    num: "02",
    discipline: "STATUTORY & REGULATORY GOVERNANCE",
    headline: "Statutory Certifications & Audits",
    subhead: "ISO & Regulatory Shield",
    description:
      "Turnkey regulatory advisory across GST statutory defenses, MSME/Udyam registrations, international ISO 9001/14001 certification frameworks, and corporate trademark protection.",
    image: "/img/practice-compliance.jpg",
    imageAlt: "Indian industrial quality testing and ISO audit facility",
    tag: "Audit-Grade Institutional Readiness",
    deliverables: ["ISO 9001/14001 Audits", "GST Statutory Defense", "Trademark Defense"],
    anchor: "/services#compliance",
    icon: ShieldCheck,
  },
  {
    id: "it",
    num: "03",
    discipline: "SOFTWARE & SYSTEMS ENGINEERING",
    headline: "Enterprise Platforms & Cloud Architecture",
    subhead: "Full-Stack Engineering",
    description:
      "Custom software engineering, high-throughput Next.js enterprise portals, native iOS & Android applications, automated cloud DevOps, and ERP workflows.",
    image: "/img/practice-systems.jpg",
    imageAlt: "Indian enterprise cloud software architecture lab",
    tag: "100% Client Code Ownership",
    deliverables: ["Next.js Enterprise Web", "Native iOS & Android Apps", "Automated Cloud DevOps"],
    anchor: "/services#it",
    icon: Cpu,
  },
  {
    id: "digital",
    num: "04",
    discipline: "DIGITAL GROWTH & MARKET ACCESS",
    headline: "B2B Search Authority & Growth Funnels",
    subhead: "Search & Market Expansion",
    description:
      "Dominant B2B organic search engine positioning, high-intent performance advertising funnels, and institutional brand positioning designed to capture sovereign contracts.",
    image: "/img/practice-growth.jpg",
    imageAlt: "Indian enterprise executive strategy session on digital expansion",
    tag: "B2B Organic Discovery",
    deliverables: ["Technical B2B SEO", "High-Intent Lead Funnels", "Corporate Brand Authority"],
    anchor: "/services#digital",
    icon: Globe,
  },
];

export function ServicesTeaser() {
  const [activePracticeId, setActivePracticeId] = React.useState<string>("funding");
  const prefersReduced = useReducedMotionPreference();
  const cardRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  // Deterministic scroll-spy: uses getBoundingClientRect() on scroll and resize,
  // combined with IntersectionObserver, so it responds instantly even during
  // programmatic automated testing (Selenium/Puppeteer/Playwright) and fast scrolls.
  const updateActivePractice = React.useCallback(() => {
    if (typeof window === "undefined") return;

    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    if (cards.length === 0) return;

    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    // Reading focus band: 38% from top of viewport
    const focusLine = viewportHeight * 0.38;

    let bestId: string = cards[0].getAttribute("data-practice-id") || "funding";
    let minDistance = Infinity;

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      const rect = card.getBoundingClientRect();
      const id = card.getAttribute("data-practice-id");
      if (!id) continue;

      // Direct hit: focus line is inside this card
      if (rect.top <= focusLine && rect.bottom >= focusLine) {
        bestId = id;
        break;
      }

      // Check distance from center of card to focusLine
      const cardCenter = (rect.top + rect.bottom) / 2;
      const dist = Math.abs(cardCenter - focusLine);
      if (dist < minDistance) {
        minDistance = dist;
        bestId = id;
      }
    }

    // Special check: if user or automated test scrolled to Card 04 (bottom of practices)
    const lastCard = cards[cards.length - 1];
    if (lastCard) {
      const lastRect = lastCard.getBoundingClientRect();
      if (lastRect.top <= viewportHeight * 0.65 && lastRect.bottom > 0) {
        const lastId = lastCard.getAttribute("data-practice-id");
        if (lastId) {
          bestId = lastId;
        }
      }
    }

    setActivePracticeId((prev) => (prev !== bestId ? bestId : prev));
  }, []);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    // Run immediately on mount so initial scroll position is matched
    updateActivePractice();

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActivePractice();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    // IntersectionObserver for additional notification
    let observer: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        () => {
          updateActivePractice();
        },
        {
          root: null,
          rootMargin: "50px 0px",
          threshold: [0, 0.25, 0.5, 0.75, 1],
        }
      );

      cardRefs.current.forEach((el) => {
        if (el) observer?.observe(el);
      });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (observer) observer.disconnect();
    };
  }, [updateActivePractice]);

  const activePractice = practices.find((p) => p.id === activePracticeId) ?? practices[0];

  return (
    <section
      aria-labelledby="services-teaser-heading"
      className="relative border-b border-[#D8E6F0] py-20 sm:py-28 lg:py-36 bg-gradient-to-b from-[#F8FAFC] via-[#F2F7FB] to-[#EBF3F9]"
    >
      {/* Precision architectural ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
      >
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-300/70 to-transparent" />
        <div className="absolute inset-0 [background-image:radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:32px_32px] opacity-40 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_40%,#000_50%,transparent_100%)]" />
        <div className="absolute -right-24 top-1/4 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.04)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute -left-24 bottom-8 h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.04)_0%,transparent_70%)] blur-3xl" />
      </div>

      <Container width="wide" className="relative z-10 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <FadeIn direction="up" distance={16}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200/90 pb-8">
            <div className="space-y-3.5 max-w-2xl">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-xs font-mono tracking-widest text-slate-800 shadow-2xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>OUR SERVICES</span>
              </div>

              <h2
                id="services-teaser-heading"
                className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-[-0.03em] text-slate-900 !leading-[1.14]"
              >
                Comprehensive Solutions for Your Business
                <br />
                <span className="text-amber-600 font-bold font-heading">
                  Funding, Compliance, and Growth.
                </span>
              </h2>

              <p className="font-sans text-sm sm:text-base text-slate-600 leading-[1.7]">
                From funding to certifications to growth - everything you need under one roof.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white bg-white/75 hover:bg-white/95 backdrop-blur-xl text-slate-800 hover:text-slate-950 text-xs font-mono tracking-wider uppercase transition-all group shadow-[inset_0_1px_2px_rgba(255,255,255,1),0_8px_20px_rgba(15,23,42,0.06)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] [transform:translateZ(0)]"
              >
                <span>Complete Service Catalog</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </FadeIn>

        {/* ============================================================
            SPLIT INTERACTIVE PRACTICE NAVIGATION & PHOTOGRAPHY FRAME
            ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: 4 Interactive Practice Rows (7 cols) */}
          <div className="lg:col-span-7 space-y-3 pb-8 lg:pb-36">
            {practices.map((practice, index) => {
              const isActive = activePracticeId === practice.id;

              return (
                <div
                  key={practice.id}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  data-practice-id={practice.id}
                  onMouseEnter={() => setActivePracticeId(practice.id)}
                  onFocus={() => setActivePracticeId(practice.id)}
                  className={cn(
                    "group relative cursor-pointer rounded-2xl border p-5 transition-all duration-300 sm:p-6 [transform:translateZ(0)]",
                    isActive
                      ? "border-white/80 bg-white/90 backdrop-blur-xl shadow-[0_20px_45px_-12px_rgba(14,165,233,0.1),inset_0_1px_2px_rgba(255,255,255,1)] ring-1 ring-slate-900/5"
                      : "border-white/60 bg-white/60 backdrop-blur-md hover:border-white/90 hover:bg-white/80 shadow-[0_4px_16px_rgba(15,23,42,0.03)]"
                  )}
                >
                  {/* Active highlight pill on left edge */}
                  <div
                    className={cn(
                      "absolute left-0 top-5 bottom-5 w-1 rounded-r-full transition-all duration-300",
                      isActive
                        ? "bg-gradient-to-b from-amber-400 to-amber-600 opacity-100"
                        : "bg-transparent opacity-0 group-hover:opacity-40 group-hover:bg-slate-300"
                    )}
                  />

                  <Link href={practice.anchor} className="block pl-3 sm:pl-4 space-y-2.5">
                    {/* Row Top: Number + Discipline Tag */}
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span
                          className={cn(
                            "font-mono text-xs tracking-wider uppercase transition-colors",
                            isActive ? "text-amber-600 font-semibold" : "text-slate-500 font-medium"
                          )}
                        >
                          PRACTICE {practice.num} &bull; {practice.discipline}
                        </span>
                      </div>
                      <span
                        className={cn(
                          "font-mono text-xs hidden sm:inline font-medium transition-colors",
                          isActive ? "text-slate-600" : "text-slate-400"
                        )}
                      >
                        [{practice.subhead}]
                      </span>
                    </div>

                    {/* Headline */}
                    <div className="flex items-center justify-between gap-4">
                      <h3
                        className={cn(
                          "font-heading text-xl sm:text-2xl font-semibold transition-all duration-300",
                          isActive
                            ? "text-slate-900 translate-x-0.5"
                            : "text-slate-800 group-hover:text-slate-950"
                        )}
                      >
                        {practice.headline}
                      </h3>

                      <div
                        className={cn(
                          "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                          isActive
                            ? "border-amber-400 bg-amber-500 text-slate-950 shadow-sm"
                            : "border-slate-200 text-slate-400 group-hover:border-slate-300 group-hover:text-slate-700"
                        )}
                      >
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>

                    {/* Short Description */}
                    <p className="font-sans text-xs sm:text-sm text-slate-600 leading-[1.65] max-w-xl">
                      {practice.description}
                    </p>

                    {/* Deliverables Pills */}
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      {practice.deliverables.map((item, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono text-slate-700 bg-slate-100 border border-slate-200/90 shadow-2xs font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </Link>
                </div>
              );
            })}

            {/* Integrated Practice Reassurance Strip */}
            <div className="rounded-2xl border border-dashed border-slate-300/90 bg-white/70 backdrop-blur-md p-5 sm:p-6 text-slate-700 shadow-2xs mt-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-amber-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                    <span>UNIFIED ADVISORY MANDATE</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium">
                    All four practice areas operate under a single, synchronized engagement framework with measurable milestone SLAs.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="shrink-0 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-mono tracking-wider uppercase transition-all shadow-xs hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Dynamic Architectural Photography Frame (5 cols) */}
          <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-28 h-fit">
            <div className="relative rounded-3xl overflow-hidden border border-slate-700/60 bg-slate-950 shadow-[0_20px_50px_rgba(15,23,42,0.3)] group aspect-[4/3] [transform:translateZ(0)]">
              {/* Corner Blueprint Crosshairs */}
              <div className="absolute top-2 left-2 font-mono text-xs text-sky-400/50 z-30 select-none">
                +
              </div>
              <div className="absolute bottom-2 right-2 font-mono text-xs text-sky-400/50 z-30 select-none">
                +
              </div>

              {/* Crossfading Photography */}
              {practices.map((practice) => {
                const isCurrent = practice.id === activePractice.id;
                return (
                  <div
                    key={practice.id}
                    className={cn(
                      "absolute inset-0 transition-opacity",
                      prefersReduced ? "duration-0" : "duration-500 ease-in-out",
                      isCurrent ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                    )}
                  >
                    <Image
                      src={practice.image}
                      alt={practice.imageAlt}
                      fill
                      sizes="(max-width: 1200px) 40vw, 500px"
                      className={cn(
                        "object-cover object-center transform transition-transform duration-1000",
                        isCurrent && "scale-105"
                      )}
                    />
                    {/* Dark gradient & micrograin */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1329]/95 via-[#0B1329]/40 to-transparent" />
                    <div className="absolute inset-0 bg-noise pointer-events-none" />
                  </div>
                );
              })}

              {/* Foreground Technical Metadata Overlay */}
              <div className="relative z-20 h-full p-6 flex flex-col justify-between pointer-events-none">
                {/* Top Badge */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-md bg-slate-900/90 backdrop-blur-md border border-slate-700/60 text-[10px] font-mono text-sky-300 uppercase tracking-wider flex items-center gap-1.5 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    <span>DESK {activePractice.num} &bull; CONTEXT</span>
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-900/90 backdrop-blur-md border border-slate-700/60 text-[10px] font-mono text-amber-400 shadow-xs font-semibold">
                    {activePractice.tag}
                  </span>
                </div>

                {/* Bottom Caption */}
                <div className="space-y-1 bg-gradient-to-b from-teal-900/90 via-[#043331]/95 to-teal-950/98 backdrop-blur-md p-4 rounded-2xl border border-teal-500/30 shadow-[0_8px_24px_rgba(0,0,0,0.6)] [transform:translateZ(0)]">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-semibold">
                    {activePractice.discipline}
                  </p>
                  <p className="font-heading text-base sm:text-lg text-amber-300 font-semibold leading-snug">
                    {activePractice.headline}
                  </p>
                  <p className="text-xs text-teal-100/85 font-sans line-clamp-2 leading-relaxed">
                    {activePractice.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
