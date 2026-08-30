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
      className="relative py-20 sm:py-24 lg:py-32 bg-white border-b border-slate-200/80"
    >
      <Container width="wide">
        <FadeIn direction="up" distance={24} delay={0.05}>
          {/* Flagship Conversion Container */}
          <div className="relative rounded-3xl bg-slate-950 text-white p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-2xl overflow-hidden">
            {/* Ambient Radial Lighting Accents */}
            <div
              className="absolute -top-32 -right-32 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-32 -left-32 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            {/* Inner Content Grid */}
            <div className="relative z-10 max-w-4xl space-y-6 sm:space-y-8">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/80 border border-teal-500/30 text-teal-300 text-xs font-mono tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                <span>Confidential Preliminary Consultation</span>
              </div>

              {/* Headline */}
              <h2
                id="final-cta-heading"
                className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
              >
                Let&apos;s Structure the Exact Capital &amp; Compliance Blueprint Your Enterprise Needs.
              </h2>

              {/* Supporting Copy */}
              <p className="type-body-lg text-slate-300 max-w-2xl leading-relaxed">
                Whether you are syndicating collateral-free debt under CGTMSE, locking in central capital subsidies, or preparing for statutory quality audits, our advisory principals provide clear, bankable roadmaps from Day 1.
              </p>

              {/* CTA Action Row */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 flex-wrap">
                {/* Primary Conversion CTA: Wrapped with Magnetic Pull for fine pointer devices */}
                <MagneticButton strength={0.18} maxOffset={6}>
                  <LinkButton
                    href="/contact"
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto px-7 py-3.5 text-base shadow-elevated justify-center"
                    aria-label="Schedule a preliminary consultation with an Agnivridhi advisory principal"
                  >
                    <span>Schedule Preliminary Consultation</span>
                    <CtaArrow className="w-4 h-4 ml-2" />
                  </LinkButton>
                </MagneticButton>

                {/* Secondary CTA: Catalog Discovery */}
                <LinkButton
                  href="/services"
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto px-6 py-3.5 text-base border-slate-700 bg-slate-900/80 text-slate-100 hover:bg-slate-800 hover:border-slate-600 hover:text-white justify-center shadow-xs"
                  aria-label="Explore all four advisory practices and service catalog"
                >
                  <span>Explore 4 Advisory Desks</span>
                  <ArrowRight className="w-4 h-4 ml-2 text-slate-300 group-hover:text-teal-300 transition-colors" />
                </LinkButton>

                {/* WhatsApp Integration (rendered if verified contact number is configured) */}
                {cleanWhatsApp && (
                  <a
                    href={`https://wa.me/${cleanWhatsApp}?text=${encodeURIComponent(
                      "Hello Agnivridhi team, I would like to schedule an enterprise consultation."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg border border-emerald-500/40 bg-emerald-950/40 text-emerald-300 hover:bg-emerald-900/50 hover:text-white transition-colors text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                    aria-label="Chat directly with Agnivridhi team on WhatsApp"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-current text-emerald-400" />
                    <span>Chat on WhatsApp</span>
                  </a>
                )}
              </div>

              {/* Trust Indicators Strip */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 mt-10 border-t border-slate-800/80">
                {trustIndicators.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-lg bg-slate-900 text-teal-400 border border-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-200 block font-sans">
                          {item.title}
                        </span>
                        <p className="text-xs text-slate-400 font-sans leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Geographical & Headquarters Authority Subtext */}
              <div className="pt-2 text-xs text-slate-500 font-mono flex items-center gap-2 flex-wrap">
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
