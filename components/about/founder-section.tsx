import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  ArrowUpRight,
  Sparkles,
  Linkedin,
  Compass,
  CheckCircle2,
  Landmark,
  Building2,
  FileCheck,
  Award,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/motion";

/**
 * Digitized SVG Signature representing Rahul Kumar Singh's executive sign-off.
 * Fluid cursive stroke paths with authentic pen flourishes and underline sweep.
 */
function DigitizedSignature({ className }: { className?: string }) {
  return (
    <div className={`relative inline-block ${className || ""}`}>
      <svg
        viewBox="0 0 360 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-52 sm:w-64 h-auto text-[#0891B2] drop-shadow-sm select-none"
        aria-label="Digitized Signature of Rahul Kumar Singh"
      >
        {/* 'R' capital flourish with looped ascender */}
        <path
          d="M28 72 C26 55, 27 34, 28 20 C32 18, 40 16, 52 16 C68 16, 80 23, 78 36 C76 48, 60 52, 44 52 C54 54, 66 63, 76 76 M28 32 C38 32, 54 31, 60 32"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* 'ahul' connected cursive strokes */}
        <path
          d="M78 61 C82 53, 90 50, 96 54 C101 58, 99 68, 93 70 C88 72, 83 68, 87 58 C92 46, 100 28, 104 22 C105 20, 107 30, 106 46 C106 62, 108 70, 114 70 C120 70, 124 62, 128 53 C130 48, 134 48, 135 54 C136 61, 137 69, 143 69 C150 69, 153 60, 155 44 C156 28, 159 20, 160 34 C161 50, 162 68, 168 69"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* 'Kumar' mid-initial */}
        <path
          d="M182 22 C183 38, 183 56, 184 72 M204 44 C197 51, 190 57, 184 58 C190 60, 200 68, 209 73 M211 60 C214 54, 219 53, 223 56 C226 61, 225 70, 230 70 C234 70, 238 63, 241 53 C243 50, 248 50, 249 56 C250 64, 251 70, 256 70 C261 70, 265 64, 268 53"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* 'Singh' cursive surname */}
        <path
          d="M278 38 C284 32, 294 30, 297 34 C300 39, 293 46, 284 51 C278 54, 280 63, 286 66 C293 69, 302 66, 307 59 M311 52 C313 60, 315 68, 320 68 M325 52 C327 60, 328 68, 333 68 M336 46 C342 42, 348 48, 344 56 C340 64, 336 78, 332 84"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Executive foundation flourish underline */}
        <path
          d="M22 82 C90 79, 195 81, 345 72 C325 80, 260 88, 185 89"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

/**
 * Executive Credential Chip
 */
function CredentialChip({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-50 text-[#475569] border border-cyan-100 shadow-sm text-xs font-mono font-medium tracking-tight hover:border-[#0891B2]/60 transition-colors">
      <Icon className="w-3.5 h-3.5 text-[#0891B2] shrink-0" />
      <span>{label}</span>
    </div>
  );
}

export function FounderSection() {
  const { founder, recognition } = siteConfig;

  // Verified external recognitions (filtered strictly)
  const verifiedRecognitions = React.useMemo(() => {
    return (recognition ?? []).filter((r) => r.verified !== false).slice(0, 2);
  }, [recognition]);

  const credentials = founder.credentials ?? [
    "Ex-Banking Underwriter",
    "MSME Advisory Committee",
    "Regulatory Specialist",
  ];

  const credentialIcons = [Landmark, Building2, FileCheck];

  if (!founder.name) {
    return null;
  }

  return (
    <section
      id="founder-story"
      aria-labelledby="founder-heading"
      className="py-16 sm:py-20 lg:py-28 bg-[#FFFFFF] border-b border-cyan-100 overflow-hidden"
    >
      <Container width="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* ============================================================
              LEFT COLUMN: Executive Studio Portrait & Authority Card (5 cols)
              ============================================================ */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <FadeIn direction="up" distance={16} delay={0.05}>
              <div className="rounded-2xl bg-white border border-cyan-100 shadow-2xl overflow-hidden">
                {/* Executive Studio Portrait Container */}
                <div className="relative aspect-[4/4.4] sm:aspect-[4/4.6] w-full bg-slate-950 overflow-hidden group">
                  {/* High-Resolution Warm-Graded Studio Portrait */}
                  <Image
                    src={founder.image || "/img/rahul-kumar-singh.jpg"}
                    alt={`${founder.name}, ${founder.role} at Agnivridhi India`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    priority
                  />

                  {/* Warm Film Grade Vignette */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-85 pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Top Floating Badge: Executive Mandate */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-cyan-100 text-white shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-200">
                        Principal Mandate
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-gold-500/30 text-gold-300 shadow-lg">
                      <Award className="w-3.5 h-3.5 text-gold-400" />
                      <span className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
                        Executive Desk
                      </span>
                    </div>
                  </div>

                  {/* Bottom Overlay Info on Portrait */}
                  <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 z-10 text-white space-y-2">
                    <div className="flex items-baseline justify-between flex-wrap gap-1">
                      <div>
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
                          {founder.name}
                        </h3>
                        <p className="font-mono text-xs text-teal-300 tracking-wide mt-0.5">
                          {founder.role}
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-slate-300 border-t border-cyan-100">
                      <Compass className="w-3.5 h-3.5 text-[#0891B2] shrink-0" />
                      <span>Corporate HQ: Sector 62, Noida &bull; Est. 2011</span>
                    </div>
                  </div>
                </div>

                {/* Authority Details Below Portrait */}
                <div className="p-6 sm:p-7 space-y-5 bg-white">
                  {/* Verified LinkedIn Executive Badge */}
                  {founder.linkedin && (
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-3.5 rounded-xl bg-slate-900 hover:bg-slate-850 text-white border border-slate-800 transition-all shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
                      aria-label="Connect with Rahul Kumar Singh on LinkedIn (opens in a new tab)"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-[#0A66C2] flex items-center justify-center text-white shrink-0 shadow-sm">
                          <Linkedin className="w-5 h-5 fill-current" />
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-sans text-xs font-bold tracking-tight text-white group-hover:text-gold-300 transition-colors">
                              Verified Executive Profile
                            </span>
                            <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 fill-teal-400/20 shrink-0" />
                          </div>
                          <span className="font-mono text-[11px] text-[#64748B] block">
                            Direct Principal Network
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-mono text-slate-300 group-hover:text-white transition-colors">
                        <span>Connect</span>
                        <ArrowUpRight className="w-4 h-4 text-[#64748B] group-hover:text-gold-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </a>
                  )}

                  {/* Institutional Credential Tags in Left Column */}
                  <div className="space-y-2.5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748B] font-semibold block">
                      Underwriting &amp; Governance Mandates
                    </span>
                    <div className="flex flex-col gap-2">
                      {credentials.map((cred, idx) => {
                        const Icon = credentialIcons[idx % credentialIcons.length];
                        return (
                          <div
                            key={cred}
                            className="flex items-center gap-2.5 p-2.5 rounded-lg bg-cyan-50 border border-cyan-100 text-xs font-sans text-[#475569]"
                          >
                            <div className="w-7 h-7 rounded-md bg-white border border-cyan-100 flex items-center justify-center shrink-0 shadow-2xs">
                              <Icon className="w-3.5 h-3.5 text-[#0891B2]" />
                            </div>
                            <span className="font-medium">{cred}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Recognition Bridge (Verified external citations) */}
                  {verifiedRecognitions.length > 0 && (
                    <div className="pt-4 border-t border-cyan-100 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748B] font-semibold block">
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
                            className="p-3 rounded-lg bg-cyan-50 border border-cyan-100 text-xs font-sans space-y-1"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-semibold text-[#0F0A1A]">
                                {rec.publicationOrOrg}
                              </span>
                              <span className="font-mono text-[10px] text-[#64748B]">
                                {rec.year}
                              </span>
                            </div>
                            <p className="text-[#475569] text-[11px] leading-snug line-clamp-2">
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
          <div className="lg:col-span-7 space-y-8 font-sans text-[#475569]">
            {/* Section Eyebrow, Founder Name & Credentials */}
            <FadeIn direction="up" distance={16} delay={0.08}>
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0891B2]/10 border border-cyan-200 text-[#0891B2] text-xs font-mono tracking-wider uppercase">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0891B2]" />
                  <span>Foundership &amp; Executive Stewardship</span>
                </div>

                <div className="space-y-2">
                  <h2
                    id="founder-heading"
                    className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0F0A1A] tracking-tight leading-[1.12]"
                  >
                    {founder.name}
                  </h2>

                  <div className="flex items-center gap-3 font-mono text-xs text-[#64748B] flex-wrap">
                    <span className="text-[#0891B2] font-semibold uppercase tracking-wider">
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

                {/* Primary Credential Tags Row */}
                <div className="flex items-center gap-2 flex-wrap pt-1">
                  {credentials.map((cred, idx) => (
                    <CredentialChip
                      key={cred}
                      icon={credentialIcons[idx % credentialIcons.length]}
                      label={cred}
                    />
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Narrative Biographies */}
            <FadeIn direction="up" distance={16} delay={0.12}>
              <div className="space-y-4 type-body leading-relaxed text-[#475569]">
                <p>{founder.shortBio}</p>
                <p>{founder.fullBio}</p>
              </div>
            </FadeIn>

            {/* Founding Conviction Quote Card with Digitized Signature */}
            {founder.quote && (
              <FadeIn direction="up" distance={16} delay={0.15}>
                <div className="p-7 sm:p-9 rounded-2xl bg-white border border-cyan-100 shadow-xl space-y-5 relative overflow-hidden">
                  <div
                    className="absolute top-0 right-0 w-40 h-40 bg-gold-500/5 rounded-full blur-2xl pointer-events-none"
                    aria-hidden="true"
                  />

                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#0891B2] block">
                      Founding Executive Conviction
                    </span>
                    <span className="text-[11px] font-mono text-[#64748B]">
                      Noida Corporate Mandate
                    </span>
                  </div>

                  <blockquote className="font-serif text-xl sm:text-2xl font-normal text-[#0F0A1A] leading-snug italic relative z-10">
                    &ldquo;{founder.quote}&rdquo;
                  </blockquote>

                  {/* Digitized SVG Signature & Authority Block */}
                  <div className="pt-4 border-t border-cyan-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <DigitizedSignature />
                      <div className="flex items-center gap-2 text-xs font-mono text-[#64748B]">
                        <span className="w-5 h-[1px] bg-slate-300" />
                        <span className="font-medium text-[#0F0A1A]">
                          Rahul Kumar Singh
                        </span>
                        <span className="text-[#64748B]">&bull; Principal Executive</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-[#475569] font-mono text-[10px] uppercase tracking-wider font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                      <span>Certified Sign-Off</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            )}

            {/* Key Leadership Directives */}
            {founder.directives && founder.directives.length > 0 && (
              <FadeIn direction="up" distance={16} delay={0.18}>
                <div className="p-6 sm:p-7 rounded-2xl bg-white border border-cyan-100 space-y-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#0891B2]" />
                    <h3 className="font-serif text-lg font-bold text-[#0F0A1A] tracking-tight">
                      Core Executive Directives
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {founder.directives.map((directive, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 text-sm text-[#475569] font-sans"
                      >
                        <div className="w-5 h-5 rounded bg-[#0891B2]/10 border border-cyan-200 flex items-center justify-center shrink-0 mt-0.5 text-[11px] font-mono font-bold text-[#0891B2]">
                          0{idx + 1}
                        </div>
                        <span className="leading-snug">{directive}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            )}

            {/* Actions & Profiles */}
            <FadeIn direction="up" distance={16} delay={0.2}>
              <div className="pt-2 flex items-center gap-4 flex-wrap">
                {founder.linkedin && (
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0891B2] hover:bg-[#0E7490] text-white text-xs font-semibold tracking-wide font-sans transition-colors shadow-sm"
                    aria-label="Connect with Rahul Kumar Singh on LinkedIn (opens in a new tab)"
                  >
                    <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                    <span>Verified Executive LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#64748B]" />
                  </a>
                )}

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-[#0F0A1A] hover:text-[#0F0A1A] text-xs font-semibold tracking-wide font-sans transition-colors shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
                >
                  <span>Engage Executive Advisory Desk</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#64748B]" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
