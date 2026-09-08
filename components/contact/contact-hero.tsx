import * as React from "react";
import { Container } from "@/components/shared/container";

export function ContactHero() {
  return (
    <section
      aria-labelledby="contact-hero-heading"
      className="relative border-b border-cyan-100 bg-[#FFFFFF] pt-32 pb-12 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-20 overflow-hidden"
    >
      <Container width="wide">
        <div className="max-w-3xl space-y-5">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded border bg-[#0891B2]/10 border-cyan-200 text-[#0891B2]">
              DIRECT ENGAGEMENT &bull; CONFIDENTIAL INQUIRY DESK
            </span>
          </div>

          {/* Fraunces Headline H1 */}
          <h1
            id="contact-hero-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0F0A1A] tracking-tight leading-[1.14]"
          >
            Have questions? We&apos;re here to help you grow your business.
          </h1>

          {/* Subtitle */}
          <p className="type-body-lg text-[#475569] font-sans leading-relaxed max-w-2xl">
            Connect with our team to discuss funding, compliance, certifications, and growth solutions
            tailored to your business.
          </p>
        </div>
      </Container>
    </section>
  );
}
