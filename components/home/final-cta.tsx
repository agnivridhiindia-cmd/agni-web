import * as React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/shared/container";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { LinkButton } from "@/components/ui/link-button";
import { CtaArrow } from "@/components/ui/cta-arrow";
import { FadeIn } from "@/components/shared/motion";

export function FinalCta() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative border-b border-cyan-100/80 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.14),transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(45,212,191,0.12),transparent_20%),linear-gradient(180deg,#ffffff_0%,#f4fdff_34%,#f3fbfd_100%)] pt-14 pb-16 text-[#181226] sm:pt-18 sm:pb-22 lg:pt-20 lg:pb-28"
    >
      <Container width="wide">
        <FadeIn direction="up" distance={24} delay={0.05}>
          {/* Flagship Conversion Container */}
          <div className="relative overflow-hidden rounded-[2rem] border border-cyan-200/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.94)_0%,rgba(240,253,250,0.92)_26%,rgba(238,248,255,0.96)_100%)] p-8 text-[#181226] shadow-[0_24px_60px_-18px_rgba(8,145,178,0.18),0_5px_18px_rgba(15,118,110,0.06)] sm:p-14 lg:p-20">
            {/* Soft atmospheric radial glows */}
            <div
              className="absolute -top-24 -right-24 w-[420px] h-[420px] bg-[radial-gradient(circle,rgba(124,58,237,0.12)_0%,transparent_70%)] blur-[90px] pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-24 -left-24 w-[420px] h-[420px] bg-[radial-gradient(circle,rgba(168,85,247,0.08)_0%,transparent_70%)] blur-[90px] pointer-events-none"
              aria-hidden="true"
            />

            {/* Inner Content Grid */}
            <div className="relative z-10 max-w-4xl space-y-6 sm:space-y-8">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-cyan-200/90 text-[#0891B2] text-xs font-mono tracking-widest uppercase shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#0891B2] animate-pulse" />
                <span>READY TO TRANSFORM YOUR BUSINESS?</span>
              </div>

              {/* Headline */}
              <h2
                id="final-cta-heading"
                className="font-serif text-3xl sm:text-4xl lg:text-[2.85rem] font-medium tracking-[-0.015em] text-[#181226] !leading-[1.18]"
              >
                Ready to Transform Your Business?
              </h2>

              {/* Supporting Copy */}
              <p className="font-sans text-sm sm:text-base lg:text-lg text-[#475569] max-w-2xl leading-[1.75]">
                Get expert consultation and take the first step towards securing funding and achieving growth.
              </p>

              {/* CTA Action Row */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 flex-wrap">
                {/* Primary Conversion CTA */}
                <MagneticButton strength={0.18} maxOffset={6}>
                  <LinkButton
                    href="/contact"
                    variant="primary"
                    className="w-full sm:w-auto rounded-full px-7 py-4 text-sm sm:text-base font-semibold justify-center transition-all inline-flex items-center gap-2.5 tracking-wide shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_6px_22px_rgba(8,145,178,0.28)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_10px_28px_rgba(8,145,178,0.36)] hover:-translate-y-0.5 cursor-pointer [transform:translateZ(0)]"
                    aria-label="Schedule a preliminary consultation with an Agnivridhi advisory principal"
                  >
                    <span>Schedule Free Consultation</span>
                    <CtaArrow className="w-4 h-4 ml-1 text-white" />
                  </LinkButton>
                </MagneticButton>

                {/* Secondary CTA: Catalog Discovery */}
                <LinkButton
                  href="/services"
                  variant="outline"
                  className="w-full sm:w-auto rounded-full px-7 py-4 text-sm sm:text-base font-semibold border-cyan-200/90 bg-white/75 backdrop-blur-md hover:bg-white/95 text-[#181226] hover:text-[#0891B2] hover:border-[#0891B2]/40 justify-center transition-all inline-flex items-center gap-2 tracking-wide shadow-[inset_0_1px_1px_rgba(255,255,255,0.85),0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_4px_14px_rgba(8,145,178,0.12)] hover:-translate-y-0.5 cursor-pointer [transform:translateZ(0)]"
                  aria-label="Explore all four advisory practices and service catalog"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4 ml-1 text-[#0891B2]" />
                </LinkButton>
              </div>

            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
