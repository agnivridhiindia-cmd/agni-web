import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/types/service";
import { Container } from "@/components/shared/container";
import { ServiceCard } from "./service-card";

interface RelatedServicesProps {
  services: readonly Service[];
}

export function RelatedServices({ services }: RelatedServicesProps) {
  if (!services || services.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="related-services-heading"
      className="border-t border-slate-800/80 bg-slate-950 text-white py-14 sm:py-18 lg:py-20"
    >
      <Container width="wide">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4 border-b border-slate-800/80 pb-5">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 backdrop-blur-md border border-amber-500/40 text-xs font-mono tracking-widest text-amber-300 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>COMPLEMENTARY CAPABILITIES &bull; PRACTICE ECOSYSTEM</span>
            </div>
            <h2
              id="related-services-heading"
              className="font-serif text-2xl sm:text-3xl font-medium text-white tracking-tight"
            >
              Related Advisory Practices
            </h2>
          </div>

          <Link
            href="/services"
            className="text-xs sm:text-sm font-mono font-semibold text-amber-400 hover:text-amber-300 transition-colors uppercase tracking-wider inline-flex items-center gap-1.5 shrink-0"
          >
            <span>Browse Full Directory</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((relService) => (
            <ServiceCard key={relService.id} service={relService} />
          ))}
        </div>
      </Container>
    </section>
  );
}
