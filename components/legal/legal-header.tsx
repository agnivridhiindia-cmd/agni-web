import * as React from "react";
import { Container } from "@/components/shared/container";

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
    <header className="border-b border-slate-200/80 bg-slate-50/70 pt-32 pb-10 sm:pt-36 sm:pb-14 lg:pt-40 lg:pb-16">
      <Container width="reading">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded border bg-teal-50 border-teal-200/90 text-teal-900">
              {eyebrow}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-tight">
            {title}
          </h1>

          <p className="type-body-lg text-slate-600 font-sans leading-relaxed">
            {subtitle}
          </p>

          <div className="pt-2 flex items-center gap-2 text-xs font-mono text-slate-400">
            <span>Effective / Last Updated:</span>
            <span className="font-semibold text-slate-600">{lastUpdated}</span>
          </div>
        </div>
      </Container>
    </header>
  );
}
