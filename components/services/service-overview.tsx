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
        <span className="type-eyebrow text-teal-700 font-mono">
          Advisory Scope &bull; Institutional Blueprint
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
          Overview &amp; Deliverables
        </h2>
        <div className="text-slate-700 font-sans text-base sm:text-lg leading-relaxed space-y-4 max-w-3xl">
          <p>{service.description}</p>
        </div>
      </div>

      {/* 2. Key Value & Strategic Advantages */}
      {service.benefits && service.benefits.length > 0 && (
        <div className="space-y-6">
          <div>
            <span className="type-eyebrow text-teal-700 font-mono">
              Enterprise Value &bull; Measurable Impact
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight mt-1">
              Strategic Advantages
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-slate-200/90 bg-white shadow-xs flex items-start gap-3.5 hover:border-teal-500/40 transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 mt-0.5 border border-teal-100">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <p className="text-sm text-slate-700 font-sans leading-relaxed">
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
            <span className="type-eyebrow text-teal-700 font-mono">
              Suitability &bull; Applicability Matrix
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight mt-1">
              Who Is This Solution Designed For?
            </h2>
          </div>

          <div className="p-6 sm:p-7 rounded-xl bg-slate-50/80 border border-slate-200/90 space-y-4">
            <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
              <Users className="w-4 h-4 text-teal-700" />
              <span>Target Profiles &amp; Enterprise Stages</span>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {service.audience.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-sm text-slate-700 font-sans"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0 mt-2" />
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
