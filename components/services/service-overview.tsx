import * as React from "react";
import { CheckCircle2, Users } from "lucide-react";
import type { Service } from "@/types/service";

interface ServiceOverviewProps {
  service: Service;
}

export function ServiceOverview({ service }: ServiceOverviewProps) {
  return (
    <div id="service-overview" className="space-y-12 sm:space-y-16">
      {/* 1. Scope & Overview */}
      <div className="space-y-4">
        <span className="type-eyebrow text-[#581C87] font-mono">
          Advisory Scope &bull; Institutional Blueprint
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#0F0A1A] tracking-tight">
          Overview &amp; Deliverables
        </h2>
        <div className="text-[#475569] font-sans text-base sm:text-lg leading-relaxed space-y-4 max-w-3xl">
          <p>{service.description}</p>
        </div>
      </div>

      {/* 2. Key Value & Strategic Advantages */}
      {service.benefits && service.benefits.length > 0 && (
        <div className="space-y-6">
          <div>
            <span className="type-eyebrow text-[#581C87] font-mono">
              Enterprise Value &bull; Measurable Impact
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#0F0A1A] tracking-tight mt-1">
              Strategic Advantages
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-purple-100 bg-white shadow-xs flex items-start gap-3.5 hover:border-purple-300 transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-purple-50 text-[#581C87] flex items-center justify-center shrink-0 mt-0.5 border border-purple-100">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <p className="text-sm text-[#475569] font-sans leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. Target Audience / Enterprise Suitability */}
      {service.audience && service.audience.length > 0 && (
        <div className="space-y-6">
          <div>
            <span className="type-eyebrow text-[#581C87] font-mono">
              Suitability &bull; Applicability Matrix
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#0F0A1A] tracking-tight mt-1">
              Who Is This Solution Designed For?
            </h2>
          </div>

          <div className="p-6 sm:p-7 rounded-xl bg-white border border-purple-100 space-y-4">
            <div className="flex items-center gap-2 text-[#0F0A1A] font-semibold text-sm">
              <Users className="w-4 h-4 text-[#581C87]" />
              <span>Target Profiles &amp; Enterprise Stages</span>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {service.audience.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-sm text-[#475569] font-sans"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#581C87] shrink-0 mt-2" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
