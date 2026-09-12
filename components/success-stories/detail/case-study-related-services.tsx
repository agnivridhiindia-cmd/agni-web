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
      className="border-t border-[#A6CCEA] py-14 sm:py-16 lg:py-20"
    >
      <Container width="wide">
        <div className="space-y-8">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-amber-400/50 text-xs font-mono tracking-widest text-amber-900 uppercase shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              <Layers className="w-3.5 h-3.5 text-amber-600" />
              <span>ASSOCIATED ADVISORY PRACTICE</span>
            </div>
            <h2
              id="related-services-heading"
              className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight"
            >
              Enterprise Services Utilized in This Engagement
            </h2>
            <p className="text-slate-700 text-sm sm:text-base font-sans">
              Learn more about the scope, documentation criteria, and execution timelines for these practice desks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.slug}
                className="rounded-3xl border border-white/90 bg-white/85 p-6 sm:p-7 shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl hover:border-amber-400/60 hover:shadow-[0_24px_50px_rgba(14,165,233,0.18)] transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-amber-100 text-amber-900 border border-amber-300/80">
                      {service.category === "funding"
                        ? "Government Funding Desk"
                        : service.category === "compliance"
                        ? "Compliance Desk"
                        : service.category === "digital"
                        ? "Digital Practice"
                        : "IT Practice"}
                    </span>

                    {service.timeline && (
                      <span className="text-xs text-slate-500 font-mono">
                        Timeline: {service.timeline}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-slate-600 text-sm font-sans leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {service.benefits && service.benefits.length > 0 && (
                    <ul className="space-y-2 pt-2 border-t border-slate-200/80 text-xs text-slate-700 font-sans">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="pt-6 mt-4 border-t border-slate-200/80">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-mono font-semibold text-amber-700 hover:text-amber-800 transition-colors group"
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
