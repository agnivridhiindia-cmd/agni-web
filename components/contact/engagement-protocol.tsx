import * as React from "react";

const steps = [
  {
    number: "01",
    title: "Preliminary Scheme Feasibility & Eligibility Check",
    description:
      "Our practice analysts cross-reference your turnover, borrowing limit, and Udyam classification against official central criteria (CGTMSE, PMEGP, MUDRA) within 24 hours.",
  },
  {
    number: "02",
    title: "Direct Technical Consultation & Diagnostic Call",
    description:
      "A scheduled 30-minute diagnostic session with a practice lead to review financial modeling assumptions, DSCR metrics, or statutory audit gap analysis.",
  },
  {
    number: "03",
    title: "Execution Roadmap & Document Calibration",
    description:
      "Delivery of an actionable proposal, institutional CMA data preparation schedule, and formal bank or audit committee representation plan.",
  },
];

export function EngagementProtocol() {
  return (
    <section aria-labelledby="protocol-heading" className="space-y-5 pt-4">
      <div className="space-y-1">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#C79A4A] bg-[#C79A4A]/10 border border-[#C79A4A]/30 px-2.5 py-0.5 rounded">
          Consultation Lifecycle
        </span>
        <h3 id="protocol-heading" className="font-serif text-2xl font-semibold text-[#F3EFE7] pt-1">
          What Happens After You Inquire?
        </h3>
      </div>

      <div className="space-y-3.5">
        {steps.map((step) => (
          <div
            key={step.number}
            className="p-4 sm:p-5 rounded-xl bg-[#111313] border border-[#232727] shadow-xs flex items-start gap-4 transition-all hover:border-[#C79A4A]/40"
          >
            <div className="w-8 h-8 rounded-lg bg-[#181A1A] text-[#C79A4A] border border-[#232727] font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
              {step.number}
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-semibold text-[#F3EFE7] font-serif">
                {step.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#D1CBC1] font-sans leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
