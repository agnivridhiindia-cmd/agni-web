import * as React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import type { ServiceProcessStep } from "@/types/service";

interface ServiceProcessProps {
  process?: readonly ServiceProcessStep[];
}

export function ServiceProcess({ process }: ServiceProcessProps) {
  if (!process || process.length === 0) {
    return null;
  }

  return (
    <section
      id="engagement-roadmap"
      aria-labelledby="process-heading"
      className="scroll-mt-28 space-y-8"
    >
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C79A4A]/10 border border-[#C79A4A]/30 text-[#C79A4A] text-xs font-mono tracking-wider uppercase">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Underwriting Protocol &bull; Structured Delivery</span>
        </div>

        <h2
          id="process-heading"
          className="font-serif text-2xl sm:text-3xl font-semibold text-[#F3EFE7] tracking-tight mt-2"
        >
          Four-Stage Underwriting &amp; Execution Lifecycle
        </h2>
        <p className="text-sm text-[#D1CBC1] font-sans mt-1 max-w-2xl leading-relaxed">
          Every file is systematically advanced through our multi-phase governance protocol to
          ensure zero rejection during bank credit committee and statutory reviews.
        </p>
      </div>

      {/* ============================================================
          DESKTOP (>= md): Stepped Horizontal Process Diagram
          ============================================================ */}
      <div className="hidden md:block relative pt-4 pb-2">
        {/* Continuous Horizontal Gradient Connecting Rail */}
        <div
          className="absolute top-11 left-12 right-12 h-0.5 bg-gradient-to-r from-[#C79A4A]/20 via-[#C79A4A] to-[#DFC286]/30 rounded-full z-0"
          aria-hidden="true"
        />

        {/* 4 Stepped Columns */}
        <div className="grid grid-cols-4 gap-6 relative z-10">
          {process.map((step, idx) => {
            const stepNumber = String(step.step).padStart(2, "0");
            const isLast = idx === process.length - 1;

            return (
              <div key={step.step} className="flex flex-col items-start space-y-4 group">
                {/* Stepped Progress Node */}
                <div className="flex items-center justify-between w-full">
                  <div className="w-14 h-14 rounded-2xl bg-[#141616] border border-[#C79A4A] shadow-md ring-4 ring-[#C79A4A]/10 flex items-center justify-center font-mono font-bold text-base text-[#DFC286] group-hover:border-[#DFC286] group-hover:ring-[#C79A4A]/20 transition-all duration-300">
                    <span>{stepNumber}</span>
                  </div>

                  {!isLast && (
                    <ArrowRight className="w-4 h-4 text-[#8E8B82] hidden lg:block mr-2" />
                  )}
                </div>

                {/* Phase Label */}
                <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#C79A4A] px-2 py-0.5 rounded bg-[#181A1A] border border-[#232727]">
                  Phase 0{step.step}
                </span>

                {/* Content Card */}
                <div className="p-5 rounded-2xl bg-[#111313] border border-[#232727] shadow-2xs group-hover:border-[#C79A4A]/40 transition-all duration-300 flex-1 w-full space-y-2">
                  <h3 className="font-serif text-base font-bold text-[#F3EFE7] leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#D1CBC1] font-sans leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ============================================================
          MOBILE (< md): Connected Vertical Process Timeline
          ============================================================ */}
      <div className="md:hidden relative pl-6 border-l-2 border-[#C79A4A]/40 space-y-6 ml-3">
        {process.map((step) => {
          const stepNumber = String(step.step).padStart(2, "0");

          return (
            <div key={step.step} className="relative space-y-2">
              {/* Progress Node Bullet */}
              <div
                className="absolute -left-[35px] top-1 w-9 h-9 rounded-xl bg-[#141616] border border-[#C79A4A] shadow-sm flex items-center justify-center font-mono font-bold text-xs text-[#DFC286]"
                aria-hidden="true"
              >
                {stepNumber}
              </div>

              {/* Phase Tag & Title */}
              <div className="space-y-1">
                <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#C79A4A] px-2 py-0.5 rounded bg-[#181A1A] border border-[#232727] inline-block">
                  Phase 0{step.step}
                </span>
                <h3 className="font-serif text-base font-bold text-[#F3EFE7]">
                  {step.title}
                </h3>
              </div>

              {/* Card */}
              <div className="p-4 rounded-xl bg-[#111313] border border-[#232727] shadow-2xs">
                <p className="text-xs text-[#D1CBC1] font-sans leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
