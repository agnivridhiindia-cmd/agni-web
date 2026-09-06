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
    badgeClass: "text-[#2DD4BF] bg-[#2DD4BF]/10 border-[#2DD4BF]/30",
  },
  {
    number: "02",
    title: "Radical Transparency",
    subtitle: "Zero False Guarantees",
    icon: Scale,
    description:
      "In an advisory landscape often marred by misleading approval promises, we maintain strict factual honesty. Credit sanctioning authority rests solely with bank committees; our responsibility is institutional-grade presentation.",
    badgeClass: "text-slate-700 bg-slate-100 border-[#232727]",
  },
  {
    number: "03",
    title: "Relentless Momentum",
    subtitle: "The Agni Ethos",
    icon: Flame,
    description:
      "Inspired by Agni (fire & focused energy), we bring intensity, relentless follow-through, and administrative velocity to eliminate bottlenecks and compress institutional approval cycles.",
    badgeClass: "text-[#C79A4A] bg-[#C79A4A]/10 border-[#C79A4A]/30",
  },
  {
    number: "04",
    title: "Operational Prestige",
    subtitle: "Accreditation as an Asset",
    icon: Award,
    description:
      "Statutory certifications and ISO 9001/14001 accreditations are not treated as bureaucratic formalities. They are permanent enterprise assets that unlock national procurement tenders and vendor status.",
    badgeClass: "text-[#C79A4A] bg-[#C79A4A]/10 border-[#C79A4A]/30",
  },
];

export function CoreValues() {
  return (
    <section
      aria-labelledby="values-heading"
      className="py-16 sm:py-20 lg:py-28 bg-[#080909] border-b border-[#232727]"
    >
      <Container width="wide" className="space-y-12 sm:space-y-16">
        <FadeIn direction="up" distance={16} delay={0.05}>
          <SectionHeading
            id="values-heading"
            eyebrow="OPERATIONAL CODE"
            eyebrowAccent
            title="Guiding Principles Grounded in Fact."
            description="Our advisory framework rejects speculative promises. We measure our effectiveness through empirical balance-sheet resilience, statutory compliance, and transparent client partnerships."
            align="left"
            className="max-w-2xl"
          />
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
                <div className="h-full p-7 sm:p-8 rounded-2xl bg-[#181A1A]/70 border border-[#232727]/80 hover:border-slate-300 hover:bg-[#181A1A] transition-all duration-200 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    {/* Number and Icon Header */}
                    <div className="flex items-center justify-between">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${val.badgeClass}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-bold uppercase tracking-widest text-slate-400">
                        VALUE {val.number}
                      </span>
                    </div>

                    {/* Value Titles */}
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#9E9B93] font-sans block">
                        {val.subtitle}
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-[#F3EFE7] leading-snug mt-0.5">
                        {val.title}
                      </h3>
                    </div>

                    {/* Value Body */}
                    <p className="text-sm sm:text-base text-[#D1CBC1] font-sans leading-relaxed">
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
