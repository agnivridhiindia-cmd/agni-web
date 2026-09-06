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
      className="border-t border-[#232727] bg-[#080909] py-14 sm:py-18 lg:py-20"
    >
      <Container width="wide">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4 border-b border-[#232727] pb-5">
          <div className="space-y-1">
            <span className="type-eyebrow text-[#C79A4A] font-mono">
              Complementary Capabilities
            </span>
            <h2
              id="related-services-heading"
              className="font-serif text-2xl sm:text-3xl font-semibold text-[#F3EFE7] tracking-tight"
            >
              Related Advisory Practices
            </h2>
          </div>

          <Link
            href="/services"
            className="text-xs sm:text-sm font-semibold text-[#C79A4A] hover:text-[#F3EFE7] transition-colors inline-flex items-center gap-1.5 shrink-0"
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
