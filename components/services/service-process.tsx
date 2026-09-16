import * as React from "react";
import { ArrowRight } from "lucide-react";
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
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80  border border-amber-500/40 text-xs font-mono tracking-widest text-amber-300 shadow-xs">
 <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
 <span>UNDERWRITING PROTOCOL &bull; STRUCTURED DELIVERY</span>
 </div>

 <h2
 id="process-heading"
 className="font-serif text-2xl sm:text-3xl font-medium text-white tracking-tight mt-3"
 >
 Four-Stage Underwriting &amp; Execution Lifecycle
 </h2>
 <p className="text-sm text-slate-300 font-sans mt-1 max-w-2xl leading-relaxed">
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
 className="absolute top-11 left-12 right-12 h-0.5 bg-gradient-to-r from-amber-500/20 via-amber-400 to-amber-500/20 rounded-full z-0"
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
 <div className="w-14 h-14 rounded-2xl bg-amber-950/60 border border-amber-500/40 shadow-md ring-4 ring-amber-500/10 flex items-center justify-center font-mono font-bold text-base text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 group-hover:border-amber-400 transition-all duration-300">
 <span>{stepNumber}</span>
 </div>

 {!isLast && (
 <ArrowRight className="w-4 h-4 text-slate-500 hidden lg:block mr-2" />
 )}
 </div>

 {/* Phase Label */}
 <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-amber-300 px-2 py-0.5 rounded bg-amber-950/80 border border-amber-500/40">
 Phase 0{step.step}
 </span>

 {/* Content Card */}
 <div className="p-5 rounded-2xl bg-gradient-to-b from-[#131D38]/90 via-[#0E162B]/95 to-[#0A1020]/95 border border-slate-700/60 shadow-[0_16px_40px_rgba(0,0,0,0.4)]  group-hover:border-amber-500/40 transition-all duration-300 flex-1 w-full space-y-2">
 <h3 className="font-serif text-base font-semibold text-white group-hover:text-amber-300 transition-colors leading-snug">
 {step.title}
 </h3>
 <p className="text-xs text-slate-300 font-sans leading-relaxed">
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
 <div className="md:hidden relative pl-6 border-l-2 border-amber-500/30 space-y-6 ml-3">
 {process.map((step) => {
 const stepNumber = String(step.step).padStart(2, "0");

 return (
 <div key={step.step} className="relative space-y-2">
 {/* Progress Node Bullet */}
 <div
 className="absolute -left-[35px] top-1 w-9 h-9 rounded-xl bg-amber-950/80 border border-amber-500/40 shadow-sm flex items-center justify-center font-mono font-bold text-xs text-amber-400"
 aria-hidden="true"
 >
 {stepNumber}
 </div>

 {/* Phase Tag & Title */}
 <div className="space-y-1">
 <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-amber-300 px-2 py-0.5 rounded bg-amber-950/80 border border-amber-500/40 inline-block">
 Phase 0{step.step}
 </span>
 <h3 className="font-serif text-base font-semibold text-white">
 {step.title}
 </h3>
 </div>

 {/* Card */}
 <div className="p-4 rounded-xl bg-gradient-to-b from-[#131D38]/90 via-[#0E162B]/95 to-[#0A1020]/95 border border-slate-700/60 shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
 <p className="text-xs text-slate-300 font-sans leading-relaxed">
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
