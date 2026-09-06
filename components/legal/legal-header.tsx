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
    <header className="border-b border-[#232727] bg-[#080909] pt-32 pb-10 sm:pt-36 sm:pb-14 lg:pt-40 lg:pb-16">
      <Container width="reading">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded border bg-[#C79A4A]/10 border-[#C79A4A]/30 text-[#C79A4A]">
              {eyebrow}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#F3EFE7] tracking-tight leading-tight">
            {title}
          </h1>

          <p className="type-body-lg text-[#D1CBC1] font-sans leading-relaxed">
            {subtitle}
          </p>

          <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#8E8B82]">
            <span>Effective / Last Updated:</span>
            <span className="font-semibold text-[#D1CBC1]">{lastUpdated}</span>
          </div>
        </div>
      </Container>
    </header>
  );
}
