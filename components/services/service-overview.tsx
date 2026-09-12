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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 backdrop-blur-md border border-amber-500/40 text-xs font-mono tracking-widest text-amber-300 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span>ADVISORY SCOPE &bull; INSTITUTIONAL BLUEPRINT</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-medium text-white tracking-tight">
          Overview &amp; Deliverables
        </h2>
        <div className="text-slate-300 font-sans text-base sm:text-lg leading-relaxed space-y-4 max-w-3xl">
          <p>{service.description}</p>
        </div>
      </div>

      {/* 2. Key Value & Strategic Advantages */}
      {service.benefits && service.benefits.length > 0 && (
        <div className="space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 backdrop-blur-md border border-amber-500/40 text-xs font-mono tracking-widest text-amber-300 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>ENTERPRISE VALUE &bull; MEASURABLE IMPACT</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-white tracking-tight mt-3">
              Strategic Advantages
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-slate-700/60 bg-gradient-to-b from-[#131D38]/90 via-[#0E162B]/95 to-[#0A1020]/95 shadow-[0_16px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl flex items-start gap-3.5 hover:border-amber-500/40 transition-all"
              >
                <div className="w-7 h-7 rounded-lg bg-amber-950/60 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 border border-amber-500/40 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <p className="text-sm text-slate-300 font-sans leading-relaxed">
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 backdrop-blur-md border border-amber-500/40 text-xs font-mono tracking-widest text-amber-300 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>SUITABILITY &bull; APPLICABILITY MATRIX</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-white tracking-tight mt-3">
              Who Is This Solution Designed For?
            </h2>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#131D38]/90 via-[#0E162B]/95 to-[#0A1020]/95 border border-slate-700/60 space-y-4 shadow-[0_16px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl">
            <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
              <Users className="w-4 h-4 text-amber-400" />
              <span className="text-white font-medium">Target Profiles &amp; Enterprise Stages</span>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {service.audience.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-sm text-slate-300 font-sans"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-2" />
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
