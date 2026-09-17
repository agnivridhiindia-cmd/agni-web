import * as React from "react";
import { Clock, FileCheck } from "lucide-react";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/motion";

interface LegalHeaderProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  lastUpdated?: string;
}

export function LegalHeader({
  eyebrow,
  title,
  subtitle,
  lastUpdated = "August 2024",
}: LegalHeaderProps) {
  return (
    <header
      aria-labelledby="legal-header-title"
      className="relative border-b border-slate-800/80 text-white pt-32 pb-12 sm:pt-36 sm:pb-14 lg:pt-40 lg:pb-16 overflow-hidden bg-[radial-gradient(circle_at_15%_25%,_rgba(245,158,11,0.12),transparent_38%),radial-gradient(circle_at_85%_20%,_rgba(14,165,233,0.14),transparent_32%),linear-gradient(180deg,#0B1329_0%,#0F1A34_45%,#0B1329_100%)]"
    >
      {/* Precision architectural vector grid & ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,#06B6D4_1px,transparent_1px),linear-gradient(to_bottom,#06B6D4_1px,transparent_1px)] [background-size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_65%,transparent_100%)]" />
        <div className="absolute -top-24 right-[-10%] h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.16)_0%,transparent_70%)] blur-3xl pointer-events-none" />
        <div className="absolute top-[35%] left-[-10%] h-[440px] w-[440px] rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.14)_0%,transparent_70%)] blur-3xl pointer-events-none" />
      </div>

      <Container width="reading" className="relative z-10">
        <div className="space-y-4 sm:space-y-5">
          <FadeIn direction="up" distance={14} delay={0.05}>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/40 text-xs font-mono tracking-widest text-amber-300 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>{eyebrow}</span>
            </div>
          </FadeIn>

          <FadeIn direction="up" distance={16} delay={0.1}>
            <h1
              id="legal-header-title"
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.15]"
            >
              {title}
            </h1>
          </FadeIn>

          <FadeIn direction="up" distance={16} delay={0.15}>
            <p className="text-slate-300 font-sans leading-relaxed text-base sm:text-lg">
              {subtitle}
            </p>
          </FadeIn>

          <FadeIn direction="up" distance={16} delay={0.2}>
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900/80 border border-slate-800 text-slate-300 shadow-xs">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>Effective Date: <strong className="text-amber-300 font-semibold">{lastUpdated}</strong></span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900/80 border border-slate-800 text-slate-300 shadow-xs">
                <FileCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Statutory Compliance Archival</span>
              </span>
            </div>
          </FadeIn>
        </div>
      </Container>
    </header>
  );
}
