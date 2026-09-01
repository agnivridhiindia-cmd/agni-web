import * as React from "react";
import { Container } from "@/components/shared/container";

export function ContactHero() {
  return (
    <section
      aria-labelledby="contact-hero-heading"
      className="relative border-b border-slate-200/80 bg-slate-50/70 pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20 overflow-hidden"
    >
      <Container width="wide">
        <div className="max-w-3xl space-y-5">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded border bg-teal-50 border-teal-200/90 text-teal-900">
              DIRECT ENGAGEMENT &bull; CONFIDENTIAL INQUIRY DESK
            </span>
          </div>

          {/* Fraunces Headline H1 */}
          <h1
            id="contact-hero-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.14]"
          >
            Let&apos;s talk about what your business needs next.
          </h1>

          {/* Subtitle */}
          <p className="type-body-lg text-slate-600 font-sans leading-relaxed max-w-2xl">
            Whether you are exploring collateral-free debt syndication under CGTMSE, preparing for
            statutory ISO accreditations, or modernizing enterprise software, our advisory principals
            are ready to evaluate your project scope.
          </p>
        </div>
      </Container>
    </section>
  );
}
