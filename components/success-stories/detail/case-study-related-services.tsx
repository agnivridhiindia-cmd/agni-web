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
      className="border-t border-purple-100 bg-[#FFFFFF] py-14 sm:py-16 lg:py-20"
    >
      <Container width="wide">
        <div className="space-y-8">
          <div className="max-w-2xl space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#581C87]">
              <Layers className="w-4 h-4 text-teal-600 shrink-0" aria-hidden="true" />
              <span>Associated Advisory Practice</span>
            </div>
            <h2
              id="related-services-heading"
              className="font-serif text-2xl sm:text-3xl font-semibold text-[#0F0A1A] tracking-tight"
            >
              Enterprise Services Utilized in This Engagement
            </h2>
            <p className="text-[#475569] text-sm font-sans">
              Learn more about the scope, documentation criteria, and execution timelines for these practice desks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.slug}
                className="rounded-2xl border border-purple-100 bg-white p-6 sm:p-7 shadow-xs hover:border-[#581C87]/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-teal-50 text-[#581C87] border border-teal-100">
                      {service.category === "funding"
                        ? "Government Funding Desk"
                        : service.category === "compliance"
                        ? "Compliance Desk"
                        : service.category === "digital"
                        ? "Digital Practice"
                        : "IT Practice"}
                    </span>

                    {service.timeline && (
                      <span className="text-xs text-slate-500 font-sans">
                        Timeline: {service.timeline}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-[#0F0A1A]">
                    {service.name}
                  </h3>

                  <p className="text-[#475569] text-sm font-sans leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {service.benefits && service.benefits.length > 0 && (
                    <ul className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700 font-sans">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#581C87] hover:text-teal-900 transition-colors group"
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
