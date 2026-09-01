import * as React from "react";
import type { ServiceProcessStep } from "@/types/service";

interface ServiceProcessProps {
  process?: readonly ServiceProcessStep[];
}

export function ServiceProcess({ process }: ServiceProcessProps) {
  if (!process || process.length === 0) {
    return null;
  }

  return (
    <div id="engagement-roadmap" className="scroll-mt-28 space-y-6">
      <div>
        <span className="type-eyebrow text-teal-700 font-mono">
          Methodology &bull; Structured Delivery
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight mt-1">
          Engagement &amp; Execution Roadmap
        </h2>
      </div>

      <div className="space-y-4">
        {process.map((step) => {
          const stepNumber = String(step.step).padStart(2, "0");
          return (
            <div
              key={step.step}
              className="flex flex-col sm:flex-row sm:items-start gap-4 p-5 sm:p-6 rounded-xl border border-slate-200/90 bg-white shadow-xs hover:border-slate-300 transition-colors"
            >
              <div
                className="w-10 h-10 rounded-lg bg-teal-700 text-white flex items-center justify-center font-mono font-bold text-sm shrink-0 shadow-xs"
                aria-hidden="true"
              >
                {stepNumber}
              </div>
              <div className="space-y-1.5 flex-1">
                <h3 className="font-serif text-lg font-semibold text-slate-900 leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 font-sans leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
