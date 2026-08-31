import * as React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  ArrowUpRight,
  Sparkles,
  Linkedin,
  Compass,
  CheckCircle2,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/motion";

export function FounderSection() {
  const { founder, recognition } = siteConfig;

  // Verified external recognitions (filtered strictly)
  const verifiedRecognitions = React.useMemo(() => {
    return (recognition ?? []).filter((r) => r.verified !== false).slice(0, 2);
  }, [recognition]);

  if (!founder.name) {
    return null;
  }

  return (
    <section
      id="founder-story"
      aria-labelledby="founder-heading"
      className="py-16 sm:py-20 lg:py-28 bg-slate-50/70 bg-noise border-b border-slate-200/80 overflow-hidden"
    >
      <Container width="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* ============================================================
              LEFT COLUMN: Editorial Typography-Led Insignia & Quote Card (5 cols)
              ============================================================ */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <FadeIn direction="up" distance={16} delay={0.05}>
              <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200/90 shadow-elevated relative overflow-hidden">
                {/* Subtle Ambient Accent */}
                <div
                  className="absolute -top-16 -right-16 w-48 h-48 bg-teal-500/10 rounded-full blur-2xl pointer-events-none"
                  aria-hidden="true"
                />
                <div
                  className="absolute -bottom-16 -left-16 w-48 h-48 bg-gold-500/10 rounded-full blur-2xl pointer-events-none"
                  aria-hidden="true"
                />

                <div className="relative z-10 space-y-6">
                  {/* Institutional Insignia Header */}
                  <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-slate-900 text-gold-400 font-serif font-bold text-xl flex items-center justify-center border border-slate-800 shadow-sm">
                        <span>A</span>
                      </div>
                      <div>
                        <span className="font-mono text-xs font-bold uppercase tracking-widest text-teal-800 block">
                          Executive Desk
                        </span>
                        <span className="text-[11px] font-sans text-slate-500 block">
                          Principal-Led Mandate
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 font-mono text-[10px] uppercase tracking-wider font-semibold">
                      <Compass className="w-3 h-3 text-teal-600" />
                      <span>Governance</span>
                    </div>
                  </div>

                  {/* Verified Founder Philosophy Quote */}
                  {founder.quote && (
                    <div className="space-y-3">
                      <span className="text-xs font-mono font-semibold uppercase tracking-wider text-gold-700 block">
                        Founding Conviction
                      </span>
                      <blockquote className="font-serif text-xl sm:text-2xl font-normal text-slate-900 leading-snug italic">
                        &ldquo;{founder.quote}&rdquo;
                      </blockquote>
                      <div className="pt-2 flex items-center gap-2 text-xs font-mono text-slate-500">
                        <span className="w-6 h-[1px] bg-slate-300" />
                        <span>Rahul Kumar Singh, Founder</span>
                      </div>
                    </div>
                  )}

                  {/* Recognition Bridge (Connecting Founder to verified external citations) */}
                  {verifiedRecognitions.length > 0 && (
                    <div className="pt-6 border-t border-slate-100 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold block">
                          Institutional Citations
                        </span>
                        <span className="text-[10px] font-mono text-emerald-800 flex items-center gap-1 font-semibold">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          Verified
                        </span>
                      </div>

                      <div className="space-y-2">
                        {verifiedRecognitions.map((rec) => (
                          <div
                            key={rec.id}
                            className="p-3 rounded-lg bg-slate-50 border border-slate-200/70 text-xs font-sans space-y-1"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-semibold text-slate-900">
                                {rec.publicationOrOrg}
                              </span>
                              <span className="font-mono text-[10px] text-slate-500">
                                {rec.year}
                              </span>
                            </div>
                            <p className="text-slate-600 text-[11px] leading-snug line-clamp-2">
                              {rec.title}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* ============================================================
              RIGHT COLUMN: Editorial Narrative & Leadership Directives (7 cols)
              ============================================================ */}
          <div className="lg:col-span-7 space-y-8 font-sans text-slate-600">
            {/* Section Eyebrow & Founder Name */}
            <FadeIn direction="up" distance={16} delay={0.08}>
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-mono tracking-wider uppercase">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Foundership &amp; Executive Stewardship</span>
                </div>

                <h2
                  id="founder-heading"
                  className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-950 tracking-tight leading-[1.15]"
                >
                  {founder.name}
                </h2>

                <div className="flex items-center gap-3 font-mono text-xs text-slate-500 flex-wrap">
                  <span className="text-teal-700 font-semibold uppercase tracking-wider">
                    {founder.role}
                  </span>
                  {founder.specialty && (
                    <>
                      <span className="text-slate-300" aria-hidden="true">
                        &bull;
                      </span>
                      <span>{founder.specialty}</span>
                    </>
                  )}
                </div>
              </div>
            </FadeIn>

            {/* Narrative Biographies */}
            <FadeIn direction="up" distance={16} delay={0.12}>
              <div className="space-y-4 type-body leading-relaxed text-slate-600">
                <p>{founder.shortBio}</p>
                <p>{founder.fullBio}</p>
              </div>
            </FadeIn>

            {/* Key Leadership Directives */}
            {founder.directives && founder.directives.length > 0 && (
              <FadeIn direction="up" distance={16} delay={0.16}>
                <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 space-y-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-gold-600" />
                    <h3 className="font-serif text-lg font-bold text-slate-900 tracking-tight">
                      Core Executive Directives
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {founder.directives.map((directive, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm text-slate-700 font-sans">
                        <div className="w-5 h-5 rounded bg-teal-50 border border-teal-200/80 flex items-center justify-center shrink-0 mt-0.5 text-[11px] font-mono font-bold text-teal-800">
                          0{idx + 1}
                        </div>
                        <span className="leading-snug">{directive}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            )}

            {/* Actions & Profiles (Verified URLs only) */}
            <FadeIn direction="up" distance={16} delay={0.2}>
              <div className="pt-4 flex items-center gap-4 flex-wrap">
                {founder.linkedin && (
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold tracking-wide font-sans transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
                    aria-label="Connect with Agnivridhi India on LinkedIn (opens in a new tab)"
                  >
                    <Linkedin className="w-4 h-4 text-teal-400" />
                    <span>Agnivridhi Corporate LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                )}

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-slate-300 hover:border-slate-400 text-slate-800 hover:text-slate-950 text-xs font-semibold tracking-wide font-sans transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
                >
                  <span>Engage Executive Advisory Desk</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
