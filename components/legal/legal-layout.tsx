import * as React from "react";
import { Container } from "@/components/shared/container";

interface LegalLayoutProps {
  children: React.ReactNode;
}

export function LegalLayout({ children }: LegalLayoutProps) {
  return (
    <main className="py-10 sm:py-14 lg:py-16 bg-[#F8FAFC]">
      <Container width="reading">
        <div className="rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-10 lg:p-12 shadow-[0_4px_25px_rgba(15,23,42,0.04)]">
          <article className="space-y-10 text-slate-700 font-sans leading-relaxed text-sm sm:text-base">
            {children}
          </article>
        </div>
      </Container>
    </main>
  );
}
