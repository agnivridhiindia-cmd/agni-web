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
 <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/90 text-slate-800 border border-[#A6CCEA]/80 shadow-2xs text-xs font-mono font-medium tracking-tight hover:border-amber-500 hover:text-amber-700 transition-colors">
 <Icon className="w-3.5 h-3.5 text-amber-600 shrink-0" />
 <span>{label}</span>
 </div>
 );
}

export function FounderSection() {
 const { founder } = siteConfig;

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
 className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-[#D5E7F4] via-[#C6E0F2] to-[#B8D7EE] text-slate-900 border-b border-[#A6CCEA] overflow-hidden"
 >
 {/* Precision architectural ambient background matching home page institutional narrative */}
 <div
 className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
 aria-hidden="true"
 >
 <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-300/80 to-transparent" />
 <div className="absolute inset-0 [background-image:radial-gradient(#94A3B8_1px,transparent_1px)] [background-size:32px_32px] opacity-35 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_40%,#000_50%,transparent_100%)]" />
 <div className="absolute top-1/4 -left-32 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.1)_0%,transparent_70%)]" />
 <div className="absolute bottom-1/4 -right-32 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.06)_0%,transparent_70%)]" />
 </div>

 <Container width="wide" className="relative z-10">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
 {/* ============================================================
 LEFT COLUMN: Executive Studio Portrait & Authority Card (5 cols)
 ============================================================ */}
 <div className="lg:col-span-5 space-y-6">
 <FadeIn direction="up" distance={16} delay={0.05}>
 <div className="rounded-3xl bg-white/80 border border-white/90 shadow-[0_20px_50px_rgba(15,23,42,0.12)] [transform:translateZ(0)] overflow-hidden">
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
 <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/90  border border-slate-800 text-white shadow-lg">
 <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
 <span className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-200">
 Principal Mandate
 </span>
 </div>

 <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/90  border border-amber-500/40 text-amber-300 shadow-lg">
 <Award className="w-3.5 h-3.5 text-amber-400" />
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
 <p className="font-mono text-xs text-amber-400 tracking-wide mt-0.5 font-semibold">
 {founder.role}
 </p>
 </div>
 </div>

 <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-slate-300 border-t border-white/20">
 <Compass className="w-3.5 h-3.5 text-amber-400 shrink-0" />
 <span>Corporate HQ: Sector 62, Noida &bull; Est. 2011</span>
 </div>
 </div>
 </div>

 {/* Authority Details Below Portrait */}
 <div className="p-6 sm:p-7 space-y-5 bg-white/90 border-t border-slate-200/80">
 {/* Institutional Credential Tags in Left Column */}
 <div className="space-y-2.5">
 <span className="text-[11px] font-mono uppercase tracking-wider text-slate-600 font-bold block">
 Underwriting &amp; Governance Mandates
 </span>
 <div className="flex flex-col gap-2">
 {credentials.map((cred, idx) => {
 const Icon = credentialIcons[idx % credentialIcons.length];
 return (
 <div
 key={cred}
 className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/95 border border-[#A6CCEA]/70 text-xs font-sans text-slate-800 shadow-2xs hover:border-amber-500/40 transition-colors"
 >
 <div className="w-7 h-7 rounded-md bg-amber-50 border border-amber-300 flex items-center justify-center shrink-0 shadow-2xs">
 <Icon className="w-3.5 h-3.5 text-amber-600" />
 </div>
 <span className="font-semibold text-slate-800">{cred}</span>
 </div>
 );
 })}
 </div>
 </div>
 </div>
 </div>
 </FadeIn>
 </div>

 {/* ============================================================
 RIGHT COLUMN: Editorial Narrative & Leadership Directives (7 cols)
 ============================================================ */}
 <div className="lg:col-span-7 space-y-8 font-sans text-slate-800">
 {/* Section Eyebrow, Founder Name & Credentials */}
 <FadeIn direction="up" distance={16} delay={0.08}>
 <div className="space-y-4">
 <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#A6CCEA] text-xs font-mono tracking-widest text-slate-800 uppercase shadow-2xs font-semibold">
 <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
 <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
 <span>FOUNDERSHIP &bull; EXECUTIVE STEWARDSHIP</span>
 </div>

 <div className="space-y-2">
 <h2
 id="founder-heading"
 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.12]"
 >
 {founder.name}
 </h2>

 <div className="flex items-center gap-3 font-mono text-xs text-slate-600 flex-wrap">
 <span className="text-amber-700 font-bold uppercase tracking-wider">
 {founder.role}
 </span>
 {founder.specialty && (
 <>
 <span className="text-slate-400" aria-hidden="true">
 &bull;
 </span>
 <span className="text-slate-700 font-medium">{founder.specialty}</span>
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
 <div className="space-y-4 type-body leading-relaxed text-slate-800 font-medium">
 <p>{founder.shortBio}</p>
 <p className="text-slate-700">{founder.fullBio}</p>
 </div>
 </FadeIn>

 {/* Founding Conviction Quote Card with Digitized Signature */}
 {founder.quote && (
 <FadeIn direction="up" distance={16} delay={0.15}>
 <div className="p-7 sm:p-9 rounded-2xl bg-white/85 border border-white/95 shadow-[inset_0_1px_2px_rgba(255,255,255,0.95),0_20px_45px_-12px_rgba(14,165,233,0.12)] ring-1 ring-slate-900/5  space-y-5 relative overflow-hidden">
 <div
 className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 rounded-full  pointer-events-none"
 aria-hidden="true"
 />

 <div className="flex items-center justify-between">
 <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-700 block">
 Founding Executive Conviction
 </span>
 <span className="text-[11px] font-mono text-slate-500 font-semibold">
 Noida Corporate Mandate
 </span>
 </div>

 <blockquote className="font-serif text-xl sm:text-2xl font-normal text-slate-900 leading-snug italic relative z-10">
 &ldquo;{founder.quote}&rdquo;
 </blockquote>

 {/* Executive Sign-Off Block — Founder Name in Place of Signature */}
 <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
 <div className="space-y-1">
 <h4 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
 {founder.name}
 </h4>
 <div className="flex items-center gap-2 text-xs font-mono text-slate-600">
 <span className="w-5 h-[1px] bg-amber-500/60" />
 <span className="font-bold text-amber-700">
 {founder.role}
 </span>
 <span className="text-slate-500">&bull; Principal Executive</span>
 </div>
 </div>

 <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-800 font-mono text-[10px] uppercase tracking-wider font-bold">
 <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
 <span>Executive Sign-Off</span>
 </div>
 </div>
 </div>
 </FadeIn>
 )}

 {/* Key Leadership Directives */}
 {founder.directives && founder.directives.length > 0 && (
 <FadeIn direction="up" distance={16} delay={0.18}>
 <div className="p-6 sm:p-7 rounded-2xl bg-white/80 border border-white/90 shadow-md space-y-4">
 <div className="flex items-center gap-2">
 <Sparkles className="w-4 h-4 text-amber-600" />
 <h3 className="font-serif text-lg font-bold text-slate-900 tracking-tight">
 Core Executive Directives
 </h3>
 </div>

 <div className="space-y-3">
 {founder.directives.map((directive, idx) => (
 <div
 key={idx}
 className="flex items-start gap-3 text-sm text-slate-800 font-sans"
 >
 <div className="w-5 h-5 rounded bg-amber-50 border border-amber-300 flex items-center justify-center shrink-0 mt-0.5 text-[11px] font-mono font-bold text-amber-800">
 0{idx + 1}
 </div>
 <span className="leading-snug font-medium">{directive}</span>
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
 className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/90 hover:bg-white border border-slate-300 hover:border-[#0A66C2]/60 text-slate-900 hover:text-[#0A66C2] text-xs font-semibold tracking-wide font-sans shadow-2xs transition-all hover:-translate-y-0.5"
 aria-label="Connect with Rahul Kumar Singh on LinkedIn (opens in a new tab)"
 >
 <Linkedin className="w-4 h-4 text-[#0A66C2]" />
 <span>Verified Executive LinkedIn</span>
 <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
 </a>
 )}

 <Link
 href="/contact"
 className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-b from-slate-900/90 via-slate-900/95 to-slate-950/95  text-white font-sans font-semibold text-xs tracking-wider uppercase border border-white/20 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.35),0_10px_24px_-4px_rgba(15,23,42,0.25)] hover:border-white/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all group"
 >
 <span>Engage Executive Advisory Desk</span>
 <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
