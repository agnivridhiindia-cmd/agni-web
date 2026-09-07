import * as React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import type { Service } from "@/types/service";
import { Container } from "@/components/shared/container";
import { LinkButton } from "@/components/ui/link-button";
import { FadeIn } from "@/components/shared/motion";

interface ServiceDetailCtaProps {
  service: Service;
}

export function ServiceDetailCta({ service }: ServiceDetailCtaProps) {
  return (
    <section
      aria-labelledby="service-cta-heading"
      className="py-16 sm:py-20 lg:py-24 bg-white text-[#0F0A1A] border-t border-purple-100 relative overflow-hidden"
    >
      <Container width="wide">
        <FadeIn direction="up" distance={18} delay={0.05}>
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#581C87]/10 border border-purple-200 text-[#581C87] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Specialized Practice Diagnostic</span>
            </div>

            <h2
              id="service-cta-heading"
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight"
            >
              Ready to structure your engagement for {service.name}?
            </h2>

            <p className="text-[#475569] text-sm sm:text-base md:text-lg leading-relaxed font-sans">
              Our senior consultants evaluate enterprise eligibility, financial projections, and
              documentation readiness to structure an institutional-grade pathway.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#475569]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#581C87] shrink-0" />
                <span>Zero unverified outcome promises</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#581C87] shrink-0" />
                <span>Synchronized institutional execution</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <LinkButton
                href={`/contact?service=${encodeURIComponent(service.slug)}`}
                variant="primary"
                size="lg"
                className="shadow-glow-teal"
              >
                <span>Request Practice Diagnostic</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </LinkButton>

              <Link
                href="/services"
                className="text-sm font-medium text-[#475569] hover:text-white transition-colors underline-offset-4 hover:underline px-2 py-1"
              >
                Explore All Practice Desks &rarr;
              </Link>
            </div>
          </div>
        </FadeIn>

        {/* Ambient background decoration */}
        <div
          aria-hidden="true"
          className="absolute -right-24 -bottom-24 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"
        />
      </Container>
    </section>
  );
}
