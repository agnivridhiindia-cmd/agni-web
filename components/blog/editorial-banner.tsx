import * as React from "react";
import { cn } from "@/lib/utils";

interface EditorialBannerProps {
 slug: string;
 category: string;
 title: string;
 variant?: "hero" | "card";
 className?: string;
}

export function EditorialBanner({
 slug,
 category,
 title,
 variant = "card",
 className,
}: EditorialBannerProps) {
 const isCgtmse = slug.includes("cgtmse") || slug.includes("debt") || slug.includes("funding");
 const isIso = slug.includes("iso") || slug.includes("compliance") || slug.includes("audit");

 const isHero = variant === "hero";

 if (isCgtmse) {
 return (
 <div
 className={cn(
 "relative w-full overflow-hidden bg-gradient-to-br from-[#0B1329] via-[#0E162B] to-[#0A1020] flex flex-col justify-between select-none border border-slate-800",
 isHero ? "min-h-[340px] sm:min-h-[420px] lg:h-full p-6 sm:p-8" : "h-48 sm:h-52 p-4 sm:p-5",
 className
 )}
 >
 {/* Subtle engineering grid background */}
 <div
 aria-hidden="true"
 className="absolute inset-0 opacity-[0.14]"
 style={{
 backgroundImage: `radial-gradient(circle at 1px 1px, rgba(245,158,11,0.25) 1px, transparent 0)`,
 backgroundSize: "24px 24px",
 }}
 />

 {/* Diagonal sovereign glow accent */}
 <div
 aria-hidden="true"
 className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-sky-500/10  pointer-events-none"
 />
 <div
 aria-hidden="true"
 className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-amber-500/10  pointer-events-none"
 />

 {/* Top bar: Scheme ceiling & technical coordinate stamp */}
 <div className="relative z-10 flex items-center justify-between gap-2 text-[10px] sm:text-xs font-mono">
 <div className="flex items-center gap-2">
 <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-slate-900/80 text-sky-300 border border-slate-700/60 font-semibold tracking-wide">
 <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
 SOVEREIGN BLUEPRINT
 </span>
 <span className="hidden sm:inline-block text-slate-400">
 REF: CGTMSE-2025/TRUST
 </span>
 </div>

 <div className="text-amber-400/90 font-bold tracking-wider px-2 py-0.5 rounded bg-amber-950/40 border border-amber-500/30">
 ₹5.00 CR CEILING
 </div>
 </div>

 {/* Central Architectural Blueprint SVG Vector: Loan Syndication Pipeline & Trust Geometry */}
 <div className="relative z-10 my-auto py-2 flex items-center justify-center">
 <svg
 viewBox="0 0 540 220"
 fill="none"
 xmlns="http://www.w3.org/2000/svg"
 className={cn("w-full h-auto drop-shadow-md", isHero ? "max-h-56" : "max-h-32")}
 aria-hidden="true"
 >
 {/* Coordinate grid lines */}
 <line x1="20" y1="30" x2="520" y2="30" stroke="#0f766e" strokeWidth="0.75" strokeDasharray="4 4" opacity="0.3" />
 <line x1="20" y1="110" x2="520" y2="110" stroke="#0f766e" strokeWidth="0.75" strokeDasharray="4 4" opacity="0.4" />
 <line x1="20" y1="190" x2="520" y2="190" stroke="#0f766e" strokeWidth="0.75" strokeDasharray="4 4" opacity="0.3" />

 {/* Syndication Pipeline Flow Traces */}
 <path
 d="M 40 110 L 140 110 L 190 60 L 350 60 L 400 110 L 500 110"
 stroke="url(#cgtmsePipelineGrad)"
 strokeWidth="2.5"
 strokeLinecap="round"
 />
 <path
 d="M 140 110 L 190 160 L 350 160 L 400 110"
 stroke="#0d9488"
 strokeWidth="1.5"
 strokeDasharray="6 4"
 opacity="0.6"
 />

 {/* Central Sovereign Trust Seal Circle */}
 <circle cx="270" cy="110" r="48" stroke="#14b8a6" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5" />
 <circle cx="270" cy="110" r="40" stroke="#f59e0b" strokeWidth="1.2" opacity="0.8" />
 <circle cx="270" cy="110" r="32" fill="#042f2e" stroke="#0d9488" strokeWidth="1" />

 {/* Sovereign Shield Emblem In Center */}
 <path
 d="M 270 95 L 285 102 V 115 C 285 125 270 131 270 131 C 270 131 255 125 255 115 V 102 Z"
 fill="#0f766e"
 stroke="#fbbf24"
 strokeWidth="1.5"
 />
 {/* Rupee Symbol inside shield */}
 <text x="270" y="117" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold" fontFamily="sans-serif">₹</text>

 {/* Pipeline Stage Nodes */}
 {/* Node 1: MSME Capex Appraisal */}
 <circle cx="80" cy="110" r="16" fill="#022c22" stroke="#14b8a6" strokeWidth="1.5" />
 <text x="80" y="113" textAnchor="middle" fill="#5eead4" fontSize="8" fontFamily="monospace" fontWeight="bold">DPR</text>
 <text x="80" y="138" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="sans-serif">Enterprise Capex</text>

 {/* Node 2: Ministry / SIDBI Guarantee Cover */}
 <circle cx="210" cy="60" r="14" fill="#022c22" stroke="#fbbf24" strokeWidth="1.5" />
 <text x="210" y="63" textAnchor="middle" fill="#fde68a" fontSize="8" fontFamily="monospace" fontWeight="bold">85%</text>
 <text x="210" y="44" textAnchor="middle" fill="#fbbf24" fontSize="8" fontFamily="sans-serif">Risk Cover</text>

 {/* Node 3: Zero Mortgage Underwriting */}
 <circle cx="330" cy="60" r="14" fill="#022c22" stroke="#14b8a6" strokeWidth="1.5" />
 <text x="330" y="63" textAnchor="middle" fill="#5eead4" fontSize="8" fontFamily="monospace" fontWeight="bold">0%</text>
 <text x="330" y="44" textAnchor="middle" fill="#5eead4" fontSize="8" fontFamily="sans-serif">Collateral</text>

 {/* Node 4: Member Lending Bank Sanction */}
 <circle cx="460" cy="110" r="16" fill="#022c22" stroke="#10b981" strokeWidth="1.5" />
 <text x="460" y="113" textAnchor="middle" fill="#a7f3d0" fontSize="8" fontFamily="monospace" fontWeight="bold">SCB</text>
 <text x="460" y="138" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="sans-serif">Bank Sanction</text>

 {/* Gradients */}
 <defs>
 <linearGradient id="cgtmsePipelineGrad" x1="40" y1="110" x2="500" y2="110" gradientUnits="userSpaceOnUse">
 <stop stopColor="#0d9488" />
 <stop offset="0.5" stopColor="#fbbf24" />
 <stop offset="1" stopColor="#10b981" />
 </linearGradient>
 </defs>
 </svg>
 </div>

 {/* Bottom bar: Institutional Metrics */}
 <div className="relative z-10 pt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-xs font-mono text-slate-300">
 <div className="flex items-center gap-3">
 <span className="text-amber-400 font-semibold">COVER: 75% - 85%</span>
 <span className="text-slate-500">&bull;</span>
 <span className="text-amber-300 font-semibold">MORTGAGE: ₹0.00</span>
 </div>
 <div className="text-slate-400">
 MINISTRY OF MSME &amp; SIDBI
 </div>
 </div>
 </div>
 );
 }

 if (isIso) {
 return (
 <div
 className={cn(
 "relative w-full overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/70 flex flex-col justify-between select-none border border-slate-800",
 isHero ? "min-h-[340px] sm:min-h-[420px] lg:h-full p-6 sm:p-8" : "h-48 sm:h-52 p-4 sm:p-5",
 className
 )}
 >
 {/* Fine technical radial grid */}
 <div
 aria-hidden="true"
 className="absolute inset-0 opacity-[0.14]"
 style={{
 backgroundImage: `radial-gradient(circle at 1px 1px, rgba(245,158,11,0.5) 1px, transparent 0)`,
 backgroundSize: "24px 24px",
 }}
 />

 {/* Warm golden accreditation glow */}
 <div
 aria-hidden="true"
 className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-amber-500/15  pointer-events-none"
 />
 <div
 aria-hidden="true"
 className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-sky-500/10  pointer-events-none"
 />

 {/* Top bar: Standard version & stamp */}
 <div className="relative z-10 flex items-center justify-between gap-2 text-[10px] sm:text-xs font-mono">
 <div className="flex items-center gap-2">
 <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-amber-950/80 text-amber-300 border border-amber-500/30 font-semibold tracking-wide">
 <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
 QUALITY ARCHITECTURE
 </span>
 <span className="hidden sm:inline-block text-slate-400">
 AUDIT ROADMAP
 </span>
 </div>

 <div className="text-amber-300 font-bold tracking-wider px-2 py-0.5 rounded bg-amber-950/40 border border-amber-500/30">
 ISO 9001:2015
 </div>
 </div>

 {/* Central Architectural Blueprint SVG Vector: Concentric QMS Audit & PDCA Geometry */}
 <div className="relative z-10 my-auto py-2 flex items-center justify-center">
 <svg
 viewBox="0 0 540 220"
 fill="none"
 xmlns="http://www.w3.org/2000/svg"
 className={cn("w-full h-auto drop-shadow-md", isHero ? "max-h-56" : "max-h-32")}
 aria-hidden="true"
 >
 {/* Concentric QMS Audit Rings */}
 <circle cx="270" cy="110" r="85" stroke="#f59e0b" strokeWidth="0.75" strokeDasharray="5 5" opacity="0.4" />
 <circle cx="270" cy="110" r="68" stroke="#14b8a6" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
 <circle cx="270" cy="110" r="50" stroke="#f59e0b" strokeWidth="1.5" opacity="0.8" />
 <circle cx="270" cy="110" r="35" fill="#1c1917" stroke="#fbbf24" strokeWidth="1.5" />

 {/* Central Stamp Emblem */}
 <text x="270" y="106" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="bold" fontFamily="monospace">ISO</text>
 <text x="270" y="119" textAnchor="middle" fill="#5eead4" fontSize="9" fontWeight="bold" fontFamily="sans-serif">9001</text>

 {/* Orbiting Audit Nodes: PDCA (Plan, Do, Check, Act) */}
 {/* Node Plan (Top) */}
 <circle cx="270" cy="25" r="16" fill="#0f172a" stroke="#fbbf24" strokeWidth="1.5" />
 <text x="270" y="28" textAnchor="middle" fill="#fde68a" fontSize="8" fontFamily="monospace" fontWeight="bold">PLAN</text>
 <text x="270" y="48" textAnchor="middle" fill="#94a3b8" fontSize="7" fontFamily="sans-serif">Risk Governance</text>

 {/* Node Do (Right) */}
 <circle cx="410" cy="110" r="16" fill="#0f172a" stroke="#14b8a6" strokeWidth="1.5" />
 <text x="410" y="113" textAnchor="middle" fill="#5eead4" fontSize="8" fontFamily="monospace" fontWeight="bold">DO</text>
 <text x="410" y="134" textAnchor="middle" fill="#94a3b8" fontSize="7" fontFamily="sans-serif">SOP Execution</text>

 {/* Node Check (Bottom) */}
 <circle cx="270" cy="195" r="16" fill="#0f172a" stroke="#fbbf24" strokeWidth="1.5" />
 <text x="270" y="198" textAnchor="middle" fill="#fde68a" fontSize="8" fontFamily="monospace" fontWeight="bold">CHECK</text>
 <text x="270" y="180" textAnchor="middle" fill="#94a3b8" fontSize="7" fontFamily="sans-serif">Stage 1 &amp; 2 Audits</text>

 {/* Node Act (Left) */}
 <circle cx="130" cy="110" r="16" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
 <text x="130" y="113" textAnchor="middle" fill="#a7f3d0" fontSize="8" fontFamily="monospace" fontWeight="bold">ACT</text>
 <text x="130" y="134" textAnchor="middle" fill="#94a3b8" fontSize="7" fontFamily="sans-serif">Continuous Imprv.</text>

 {/* Connection curved lines between PDCA */}
 <path d="M 284 32 Q 390 40 405 95" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.7" fill="none" />
 <path d="M 405 125 Q 390 180 284 188" stroke="#14b8a6" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.7" fill="none" />
 <path d="M 256 188 Q 150 180 135 125" stroke="#10b981" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.7" fill="none" />
 <path d="M 135 95 Q 150 40 256 32" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.7" fill="none" />
 </svg>
 </div>

 {/* Bottom bar: Audit Standards */}
 <div className="relative z-10 pt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-xs font-mono text-slate-300">
 <div className="flex items-center gap-3">
 <span className="text-amber-300 font-semibold">ZERO MAJOR NCs</span>
 <span className="text-slate-500">&bull;</span>
 <span className="text-amber-300 font-semibold">STAGE 1 &amp; 2 ROADMAP</span>
 </div>
 <div className="text-slate-400">
 NABCB / IAF ALIGNED
 </div>
 </div>
 </div>
 );
 }

 // Generic Institutional Vector Banner fallback
 return (
 <div
 className={cn(
 "relative w-full overflow-hidden bg-gradient-to-br from-[#0B1329] via-[#0E162B] to-[#0A1020] flex flex-col justify-between select-none border border-slate-800",
 isHero ? "min-h-[340px] sm:min-h-[420px] lg:h-full p-6 sm:p-8" : "h-48 sm:h-52 p-4 sm:p-5",
 className
 )}
 >
 <div
 aria-hidden="true"
 className="absolute inset-0 opacity-[0.12]"
 style={{
 backgroundImage: `radial-gradient(circle at 1px 1px, rgba(245,158,11,0.3) 1px, transparent 0)`,
 backgroundSize: "20px 20px",
 }}
 />
 <div className="relative z-10 flex items-center justify-between text-[10px] sm:text-xs font-mono">
 <span className="px-2 py-0.5 rounded bg-slate-900/80 text-amber-300 border border-slate-700/60 font-semibold">
 ADVISORY BRIEF
 </span>
 <span className="text-slate-400">{category.toUpperCase()}</span>
 </div>
 <div className="relative z-10 my-auto text-center py-4">
 <div className="w-16 h-16 rounded-full mx-auto bg-slate-900/80 border border-amber-500/40 flex items-center justify-center text-amber-300 font-serif text-2xl font-bold">
 {category[0]}
 </div>
 </div>
 <div className="relative z-10 pt-2 border-t border-slate-800 flex justify-between text-[10px] font-mono text-slate-400">
        <span>AGNIVRIDHI RESEARCH</span>
        <span>INSTITUTIONAL DESK</span>
      </div>
    </div>
  );
}
