import * as React from "react";
import { ShieldCheck, Scale, Flame, Award } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/motion";

const coreValues = [
  {
    number: "01",
    title: "Institutional Integrity",
    subtitle: "Rigor Over Shortcuts",
    icon: ShieldCheck,
    description:
      "Every financial projection, CMA dossier, and statutory filing is prepared strictly to formal banking and ministerial guidelines. We do not compromise on data integrity or audit compliance.",
    badgeClass: "text-[#0891B2] bg-[#2DD4BF]/10 border-[#2DD4BF]/30",
  },
  {
    number: "02",
    title: "Radical Transparency",
    subtitle: "Zero False Guarantees",
    icon: Scale,
    description:
      "In an advisory landscape often marred by misleading approval promises, we maintain strict factual honesty. Credit sanctioning authority rests solely with bank committees; our responsibility is institutional-grade presentation.",
    badgeClass: "text-slate-700 bg-slate-100 border-cyan-100",
  },
  {
    number: "03",
    title: "Relentless Momentum",
    subtitle: "The Agni Ethos",
    icon: Flame,
    description:
      "Inspired by Agni (fire & focused energy), we bring intensity, relentless follow-through, and administrative velocity to eliminate bottlenecks and compress institutional approval cycles.",
    badgeClass: "text-[#0891B2] bg-[#0891B2]/10 border-cyan-200",
  },
  {
    number: "04",
    title: "Operational Prestige",
    subtitle: "Accreditation as an Asset",
    icon: Award,
    description:
      "Statutory certifications and ISO 9001/14001 accreditations are not treated as bureaucratic formalities. They are permanent enterprise assets that unlock national procurement tenders and vendor status.",
    badgeClass: "text-[#0891B2] bg-[#0891B2]/10 border-cyan-200",
  },
];

export function CoreValues() {
  return (
    <section
      aria-labelledby="values-heading"
      className="relative py-16 sm:py-20 lg:py-28 bg-slate-950 text-slate-100 border-b border-slate-800/80 overflow-hidden"
    >
      {/* Ambient Warm & Cyan Texture */}
      <div
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-blueprint-grid-dark opacity-25 [mask-image:radial-gradient(ellipse_85%_70%_at_50%_50%,#000_65%,transparent_100%)]" />
        <div className="absolute top-1/4 -right-32 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.12)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute bottom-10 -left-32 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.10)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute top-8 left-8 font-mono text-xs text-amber-500/30 select-none">+</div>
        <div className="absolute top-8 right-8 font-mono text-xs text-cyan-400/30 select-none">+</div>
      </div>

      <Container width="wide" className="relative z-10 space-y-12 sm:space-y-16">
        <FadeIn direction="up" distance={16} delay={0.05}>
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-950/80 backdrop-blur-md border border-amber-500/40 text-xs font-mono tracking-widest text-amber-300 uppercase shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>OPERATIONAL CODE &bull; CORE VALUES</span>
            </div>

            <h2
              id="values-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-medium tracking-tight text-white leading-[1.18]"
            >
              Guiding Principles Grounded in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 italic font-normal font-editorial">
                Empirical Fact.
              </span>
            </h2>

            <p className="type-body text-slate-300 font-sans leading-relaxed">
              Our advisory framework rejects speculative promises. We measure our effectiveness through empirical balance-sheet resilience, statutory compliance, and transparent client partnerships.
            </p>
          </div>
        </FadeIn>

        {/* Editorial Values Showcase: 2-Column Split with Distinct Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {coreValues.map((val, idx) => {
            const Icon = val.icon;
            return (
              <FadeIn
                key={val.number}
                direction="up"
                distance={16}
                delay={0.1 + idx * 0.06}
              >
                <div className="h-full p-7 sm:p-8 rounded-2xl bg-gradient-to-b from-teal-900/80 via-[#043331]/95 to-teal-950/95 border border-teal-500/30 backdrop-blur-md shadow-[0_16px_40px_rgba(0,0,0,0.4)] hover:border-amber-400/60 hover:shadow-[0_20px_50px_rgba(245,158,11,0.15)] transition-all duration-300 flex flex-col justify-between space-y-6 group">
                  <div className="space-y-4">
                    {/* Number and Icon Header */}
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center border bg-amber-950/60 border-amber-500/40 text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 group-hover:border-amber-400 transition-all duration-300 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-bold uppercase tracking-widest text-amber-400">
                        VALUE {val.number}
                      </span>
                    </div>

                    {/* Value Titles */}
                    <div>
                      <span className="text-xs font-mono font-semibold uppercase tracking-wider text-teal-200/80 block">
                        {val.subtitle}
                      </span>
                      <h3 className="font-serif text-2xl font-medium text-amber-300 group-hover:text-amber-200 transition-colors leading-snug mt-1">
                        {val.title}
                      </h3>
                    </div>

                    {/* Value Body */}
                    <p className="text-sm sm:text-base text-teal-100/85 font-sans leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
