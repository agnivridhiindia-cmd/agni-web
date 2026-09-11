import * as React from "react";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { LinkButton } from "@/components/ui/link-button";
import { CtaArrow } from "@/components/ui/cta-arrow";
import { FadeIn } from "@/components/shared/motion";

export function FinalCta() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative border-b border-slate-800/80 bg-gradient-to-b from-transparent via-[#091020]/60 to-[#0B1329] pt-20 pb-24 sm:pt-24 sm:pb-30 lg:pt-32 lg:pb-36 overflow-hidden"
    >
      <Container width="wide">
        <FadeIn direction="up" distance={24} delay={0.05}>
          {/* Flagship Conversion Container: Apple Specular Liquid Jewel Panel */}
          <div className="relative overflow-hidden rounded-[3rem] border border-white/20 border-t-white/40 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.22),transparent_50%),radial-gradient(circle_at_85%_80%,rgba(245,158,11,0.18),transparent_45%),linear-gradient(135deg,#10162A_0%,#182444_50%,#0E1424_100%)] backdrop-blur-2xl p-8 text-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.85),inset_0_1.5px_2px_rgba(255,255,255,0.35)] ring-1 ring-white/10 sm:p-14 lg:p-20">
            {/* Background architectural grid inside the card */}
            <div
              className="pointer-events-none absolute inset-0 bg-blueprint-grid-dark opacity-25 select-none"
              aria-hidden="true"
            />

            {/* Soft atmospheric radial glows */}
            <div
              className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,165,233,0.22)_0%,transparent_70%)] blur-[90px] pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(245,158,11,0.14)_0%,transparent_70%)] blur-[90px] pointer-events-none"
              aria-hidden="true"
            />

            {/* Inner Content Grid */}
            <div className="relative z-10 max-w-4xl space-y-6 sm:space-y-8">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-xl border border-white/15 text-xs font-mono tracking-widest text-sky-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span>READY TO TRANSFORM YOUR BUSINESS?</span>
              </div>

              {/* Headline */}
              <h2
                id="final-cta-heading"
                className="font-heading text-3xl sm:text-4xl lg:text-[2.85rem] font-bold tracking-[-0.03em] text-white !leading-[1.14]"
              >
                Ready to Transform Your Business?
              </h2>

              {/* Supporting Copy */}
              <p className="font-sans text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl leading-[1.75]">
                Get expert consultation and take the first step towards securing funding, achieving statutory compliance, and engineering scalable growth.
              </p>

              {/* CTA Action Row */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 flex-wrap">
                {/* Primary Conversion CTA */}
                <MagneticButton strength={0.18} maxOffset={6}>
                  <LinkButton
                    href="/contact"
                    variant="primary"
                    className="w-full sm:w-auto rounded-full px-9 py-4 text-sm sm:text-base font-bold justify-center transition-all inline-flex items-center gap-2.5 tracking-wide bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 text-slate-950 border border-white/60 shadow-[inset_0_1px_2px_rgba(255,255,255,0.85),0_14px_35px_-6px_rgba(245,158,11,0.5)] hover:shadow-[inset_0_1px_2.5px_rgba(255,255,255,1),0_18px_45px_-6px_rgba(245,158,11,0.65)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer [transform:translateZ(0)]"
                    aria-label="Schedule a preliminary consultation with an Agnivridhi advisory principal"
                  >
                    <span>Schedule Free Consultation</span>
                    <CtaArrow className="w-4 h-4 ml-1 text-slate-950" />
                  </LinkButton>
                </MagneticButton>

                {/* Secondary CTA: Catalog Discovery */}
                <LinkButton
                  href="/services"
                  variant="outline"
                  className="w-full sm:w-auto rounded-full px-9 py-4 text-sm sm:text-base font-semibold border border-white/20 bg-white/[0.08] hover:bg-white/[0.15] backdrop-blur-xl hover:border-white/40 text-white hover:text-amber-300 justify-center transition-all inline-flex items-center gap-2 tracking-wide shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_8px_24px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer [transform:translateZ(0)]"
                  aria-label="Explore all four advisory practices and service catalog"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4 ml-1 text-amber-400" />
                </LinkButton>
              </div>

            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
