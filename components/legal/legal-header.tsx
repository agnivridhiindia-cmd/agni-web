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
    <header className="border-b border-purple-100 bg-[#FFFFFF] pt-32 pb-10 sm:pt-36 sm:pb-14 lg:pt-40 lg:pb-16">
      <Container width="reading">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded border bg-[#581C87]/10 border-purple-200 text-[#581C87]">
              {eyebrow}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0F0A1A] tracking-tight leading-tight">
            {title}
          </h1>

          <p className="type-body-lg text-[#475569] font-sans leading-relaxed">
            {subtitle}
          </p>

          <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#64748B]">
            <span>Effective / Last Updated:</span>
            <span className="font-semibold text-[#475569]">{lastUpdated}</span>
          </div>
        </div>
      </Container>
    </header>
  );
}
