import * as React from "react";
import { UserCheck, ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { LinkButton } from "@/components/ui/link-button";
import { FadeIn } from "@/components/shared/motion";

export function FounderTransition() {
  return (
    <section
      aria-labelledby="leadership-transition-heading"
      className="py-16 sm:py-20 lg:py-24 bg-white border-t border-cyan-100"
    >
      <Container width="wide">
        <FadeIn direction="up" distance={16} delay={0.05}>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0891B2]/10 border border-cyan-200 text-[#0891B2] text-xs font-mono tracking-wider uppercase mx-auto">
              <UserCheck className="w-3.5 h-3.5" />
              <span>Principal-Led Advisory</span>
            </div>

            <h2
              id="leadership-transition-heading"
              className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0F0A1A] tracking-tight leading-snug"
            >
              Direct Advisory Accountability at Every Stage of Scale.
            </h2>

            <p className="type-body text-[#475569] font-sans leading-relaxed">
              Unlike broad consulting practices that delegate critical client files to junior teams, Agnivridhi India is built on hands-on principal involvement. Every debt proposal, Detailed Project Report (DPR), and compliance audit strategy is structured and reviewed directly by practice leads who understand the realities of Indian manufacturing and lending frameworks.
            </p>

            <div className="pt-2 flex items-center justify-center gap-4">
              <LinkButton href="/contact" variant="primary" size="default">
                <span>Engage Our Advisory Desk</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </LinkButton>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
