import * as React from "react";
import { Container } from "@/components/shared/container";

interface LegalLayoutProps {
  children: React.ReactNode;
}

export function LegalLayout({ children }: LegalLayoutProps) {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <Container width="reading">
        <article className="space-y-10 text-slate-700 font-sans leading-relaxed text-sm sm:text-base">
          {children}
        </article>
      </Container>
    </div>
  );
}
