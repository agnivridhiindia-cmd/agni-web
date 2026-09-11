import * as React from "react";
import Link from "next/link";
import { ArrowRight, Layers, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/shared/container";
import { getServiceBySlug } from "@/data/services";

interface CaseStudyRelatedServicesProps {
  serviceSlugs: readonly string[];
}

export function CaseStudyRelatedServices({ serviceSlugs }: CaseStudyRelatedServicesProps) {
  const services = serviceSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  if (services.length === 0) return null;

  return (
    <section
      aria-labelledby="related-services-heading"
      className="border-t border-slate-800/80 bg-slate-950 text-slate-100 py-14 sm:py-16 lg:py-20"
    >
      <Container width="wide">
        <div className="space-y-8">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-950/80 backdrop-blur-md border border-amber-500/40 text-xs font-mono tracking-widest text-amber-300 uppercase shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <Layers className="w-3.5 h-3.5 text-amber-400" />
              <span>ASSOCIATED ADVISORY PRACTICE</span>
            </div>
            <h2
              id="related-services-heading"
              className="font-serif text-2xl sm:text-3xl font-semibold text-white tracking-tight"
            >
              Enterprise Services Utilized in This Engagement
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-sans">
              Learn more about the scope, documentation criteria, and execution timelines for these practice desks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.slug}
                className="rounded-2xl border border-teal-500/30 bg-gradient-to-b from-teal-900/80 via-[#043331]/95 to-teal-950/95 p-6 sm:p-7 shadow-lg hover:border-amber-400/50 hover:shadow-[0_16px_40px_rgba(245,158,11,0.15)] transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-amber-950/60 text-amber-400 border border-amber-500/40">
                      {service.category === "funding"
                        ? "Government Funding Desk"
                        : service.category === "compliance"
                        ? "Compliance Desk"
                        : service.category === "digital"
                        ? "Digital Practice"
                        : "IT Practice"}
                    </span>

                    {service.timeline && (
                      <span className="text-xs text-teal-200/80 font-mono">
                        Timeline: {service.timeline}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-amber-300 group-hover:text-amber-200 transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-teal-100/85 text-sm font-sans leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {service.benefits && service.benefits.length > 0 && (
                    <ul className="space-y-2 pt-2 border-t border-teal-500/30 text-xs text-slate-200 font-sans">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="pt-6 mt-4 border-t border-teal-500/30">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-mono font-semibold text-amber-400 hover:text-amber-300 transition-colors group"
                  >
                    <span>Explore Practice Scope &amp; Deliverables</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
