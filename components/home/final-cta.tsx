import * as React from "react";
import { ArrowRight, Lock, FileCheck2, Clock, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/shared/container";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { LinkButton } from "@/components/ui/link-button";
import { CtaArrow } from "@/components/ui/cta-arrow";
import { WhatsAppIcon } from "@/components/shared/whatsapp-button";
import { FadeIn } from "@/components/shared/motion";

const trustIndicators = [
  {
    icon: Lock,
    title: "100% Non-Disclosure Protection",
    description: "Strict mutual NDA executed before reviewing any proprietary financials or project models.",
  },
  {
    icon: FileCheck2,
    title: "Audit-Grade DPR Formulations",
    description: "Credit dossiers strictly calibrated to RBI, SIDBI & central ministry underwriting norms.",
  },
  {
    icon: Clock,
    title: "24-Hour Diagnostic Response",
    description: "Preliminary borrowing capacity and scheme alignment appraised within 24 business hours.",
  },
];

export function FinalCta() {
  const cleanWhatsApp = siteConfig.contact.whatsapp?.replace(/[^0-9]/g, "");

  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative py-20 sm:py-28 lg:py-36 bg-[#FFFFFF] text-[#0F0A1A] border-b border-purple-100"
    >
      <Container width="wide">
        <FadeIn direction="up" distance={24} delay={0.05}>
          {/* Flagship Conversion Container */}
          <div className="relative rounded-3xl bg-gradient-to-br from-[#FAF8FE] via-[#F4F1FB] to-[#EDE8F8] text-[#0F0A1A] p-8 sm:p-14 lg:p-20 border border-[#DDD6FE] shadow-2xl overflow-hidden">
            {/* Soft atmospheric radial glows */}
            <div
              className="absolute -top-24 -right-24 w-[420px] h-[420px] bg-[radial-gradient(circle,rgba(124,58,237,0.14)_0%,transparent_70%)] blur-[90px] pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-24 -left-24 w-[420px] h-[420px] bg-[radial-gradient(circle,rgba(168,85,247,0.08)_0%,transparent_70%)] blur-[90px] pointer-events-none"
              aria-hidden="true"
            />

            {/* Inner Content Grid */}
            <div className="relative z-10 max-w-4xl space-y-6 sm:space-y-8">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-purple-200 text-[#581C87] text-xs font-mono tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#581C87] animate-pulse" />
                <span>Confidential Preliminary Consultation</span>
              </div>

              {/* Headline */}
              <h2
                id="final-cta-heading"
                className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#0F0A1A] !leading-[1.15]"
              >
                Let&apos;s Structure the Exact Capital &amp; Compliance Blueprint Your Enterprise Needs.
              </h2>

              {/* Supporting Copy */}
              <p className="font-sans text-sm sm:text-base lg:text-lg text-[#475569] max-w-2xl leading-relaxed">
                Whether you are syndicating collateral-free debt under CGTMSE, locking in central capital subsidies, or preparing for statutory quality audits, our advisory principals provide clear, bankable roadmaps from Day 1.
              </p>

              {/* CTA Action Row */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 flex-wrap">
                {/* Primary Conversion CTA */}
                <MagneticButton strength={0.18} maxOffset={6}>
                  <LinkButton
                    href="/contact"
                    variant="primary"
                    className="w-full sm:w-auto rounded-full px-7 py-4 text-sm sm:text-base font-semibold shadow-lg bg-[#581C87] hover:bg-[#4C1D95] text-white justify-center transition-all inline-flex items-center gap-2.5 tracking-wide shadow-[0_4px_16px_rgba(88,28,135,0.25)]"
                    aria-label="Schedule a preliminary consultation with an Agnivridhi advisory principal"
                  >
                    <span>Schedule Preliminary Consultation</span>
                    <CtaArrow className="w-4 h-4 ml-1 text-white" />
                  </LinkButton>
                </MagneticButton>

                {/* Secondary CTA: Catalog Discovery */}
                <LinkButton
                  href="/services"
                  variant="outline"
                  className="w-full sm:w-auto rounded-full px-7 py-4 text-sm sm:text-base font-semibold border-purple-200/80 bg-white hover:bg-purple-50 text-[#0F0A1A] hover:border-purple-300 justify-center transition-all inline-flex items-center gap-2 tracking-wide shadow-sm"
                  aria-label="Explore all four advisory practices and service catalog"
                >
                  <span>Explore 4 Advisory Desks</span>
                  <ArrowRight className="w-4 h-4 ml-1 text-[#581C87]" />
                </LinkButton>

                {/* WhatsApp Integration */}
                {cleanWhatsApp && (
                  <a
                    href={`https://wa.me/${cleanWhatsApp}?text=${encodeURIComponent(
                      "Hello Agnivridhi team, I would like to schedule an enterprise consultation."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-full border border-emerald-300 bg-white text-[#16A34A] hover:bg-emerald-50 transition-colors text-xs sm:text-sm font-semibold tracking-wide shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                    aria-label="Chat directly with Agnivridhi team on WhatsApp"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-current text-[#16A34A]" />
                    <span>Chat on WhatsApp</span>
                  </a>
                )}
              </div>

              {/* Trust Indicators Strip */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 mt-10 border-t border-purple-200/60">
                {trustIndicators.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-purple-100 shadow-sm">
                      <div className="w-8 h-8 rounded-lg bg-purple-50 text-[#581C87] border border-purple-200/60 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs font-mono font-medium uppercase tracking-wider text-[#0F0A1A] block">
                          {item.title}
                        </span>
                        <p className="text-xs text-[#475569] font-sans leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Geographical & Headquarters Authority Subtext */}
              <div className="pt-2 text-xs text-[#8E8D86] font-mono flex items-center gap-2 flex-wrap">
                <span>HEADQUARTERS: NOIDA, UTTAR PRADESH</span>
                <span aria-hidden="true">&bull;</span>
                <span>SERVING PAN-INDIA ENTERPRISES</span>
                <span aria-hidden="true">&bull;</span>
                <span>ZERO OBLIGATION PRELIMINARY DIAGNOSTIC</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
