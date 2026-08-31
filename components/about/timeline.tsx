import * as React from "react";
import { companyTimeline } from "@/data/timeline";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/motion";

export function CompanyTimeline() {
  return (
    <section
      id="company-timeline"
      aria-labelledby="timeline-heading"
      className="py-16 sm:py-20 lg:py-28 bg-white border-b border-slate-200/80 overflow-hidden"
    >
      <Container width="wide" className="space-y-12 sm:space-y-16">
        {/* Section Header */}
        <FadeIn direction="up" distance={16} delay={0.05}>
          <SectionHeading
            id="timeline-heading"
            eyebrow="EVOLUTION &amp; MILESTONES"
            eyebrowAccent
            title="A Chronology of Institutional Elevation."
            description="From our origins in capital restructuring to multi-pillar advisory convergence across 28 Indian states, our trajectory reflects an uncompromising standard of regulatory rigor and technical execution."
            align="left"
            className="max-w-3xl"
          />
        </FadeIn>

        {/* ============================================================
            DESKTOP / TABLET (>= lg): Editorial Alternating Timeline Rail
            ============================================================ */}
        <div className="hidden lg:block relative pt-6 pb-4">
          {/* Center Continuous Hairline */}
          <div
            className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[1px] bg-slate-200"
            aria-hidden="true"
          />

          <div className="space-y-16">
            {companyTimeline.map((milestone, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <FadeIn
                  key={milestone.year}
                  direction={isEven ? "left" : "right"}
                  distance={20}
                  delay={0.1 + idx * 0.08}
                >
                  <div className="relative grid grid-cols-12 items-center gap-8">
                    {/* Left Column (5 cols) */}
                    <div className={`col-span-5 ${isEven ? "text-right" : ""}`}>
                      {isEven ? (
                        <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm space-y-3 inline-block text-left w-full hover:border-teal-300 transition-colors">
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded border border-teal-200/80">
                              {milestone.badge}
                            </span>
                            <span className="text-[11px] font-mono text-slate-500">
                              {milestone.pillarTag}
                            </span>
                          </div>

                          <div>
                            <span className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider block">
                              {milestone.subtitle}
                            </span>
                            <h3 className="font-serif text-2xl font-bold text-slate-900 leading-snug mt-0.5">
                              {milestone.title}
                            </h3>
                          </div>

                          <p className="type-body-sm text-slate-600 font-sans leading-relaxed">
                            {milestone.description}
                          </p>
                        </div>
                      ) : (
                        <div className="pr-8 text-right space-y-1">
                          <span className="text-6xl font-serif font-semibold text-slate-950 block tracking-tight">
                            {milestone.year}
                          </span>
                          <span className="font-mono text-xs font-bold uppercase tracking-widest text-gold-700 block">
                            PHASE {milestone.phaseNumber} &bull; {milestone.badge}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Center Node (2 cols) */}
                    <div className="col-span-2 flex items-center justify-center relative">
                      <div className="w-10 h-10 rounded-full bg-white border-2 border-teal-600 shadow-md flex items-center justify-center relative z-10">
                        <div className="w-3.5 h-3.5 rounded-full bg-slate-900" />
                      </div>
                    </div>

                    {/* Right Column (5 cols) */}
                    <div className={`col-span-5 ${!isEven ? "text-left" : ""}`}>
                      {!isEven ? (
                        <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm space-y-3 inline-block text-left w-full hover:border-teal-300 transition-colors">
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded border border-teal-200/80">
                              {milestone.badge}
                            </span>
                            <span className="text-[11px] font-mono text-slate-500">
                              {milestone.pillarTag}
                            </span>
                          </div>

                          <div>
                            <span className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider block">
                              {milestone.subtitle}
                            </span>
                            <h3 className="font-serif text-2xl font-bold text-slate-900 leading-snug mt-0.5">
                              {milestone.title}
                            </h3>
                          </div>

                          <p className="type-body-sm text-slate-600 font-sans leading-relaxed">
                            {milestone.description}
                          </p>
                        </div>
                      ) : (
                        <div className="pl-8 text-left space-y-1">
                          <span className="text-6xl font-serif font-semibold text-slate-950 block tracking-tight">
                            {milestone.year}
                          </span>
                          <span className="font-mono text-xs font-bold uppercase tracking-widest text-gold-700 block">
                            PHASE {milestone.phaseNumber} &bull; {milestone.badge}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>

        {/* ============================================================
            MOBILE ONLY (< lg): Left-Aligned Vertical Sequential Rail
            ============================================================ */}
        <div className="lg:hidden relative pl-6 border-l-2 border-slate-200 space-y-10">
          {companyTimeline.map((milestone, idx) => (
            <FadeIn key={milestone.year} direction="up" distance={16} delay={0.08 * idx}>
              <div className="relative space-y-3">
                {/* Timeline Marker Node */}
                <div
                  className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-teal-600"
                  aria-hidden="true"
                />

                {/* Year & Phase Pill */}
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-serif font-bold text-slate-950">
                    {milestone.year}
                  </span>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200/80">
                    PHASE {milestone.phaseNumber} &bull; {milestone.badge}
                  </span>
                </div>

                {/* Milestone Content Card */}
                <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-500 block">
                    {milestone.subtitle}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-slate-900 leading-snug">
                    {milestone.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed pt-1">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
