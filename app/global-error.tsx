"use client";

import * as React from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.error("Global application error:", error);
    }
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900 flex items-center justify-center p-6 font-sans">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl border border-slate-200 shadow-elevated text-center space-y-6">
          <div className="w-14 h-14 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mx-auto">
            <AlertTriangle className="w-7 h-7" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 uppercase tracking-wider">
              Critical Error
            </span>
            <h1 className="text-2xl font-bold text-slate-950 font-serif">
              Platform Service Interruption
            </h1>
            <p className="text-slate-600 text-sm leading-relaxed">
              A root-level application exception occurred. Please try reloading the session.
            </p>
          </div>

          <div className="flex flex-col gap-3 pt-2">
            <button
              type="button"
              onClick={() => reset()}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-[#0AA5C7]/90 via-[#0891B2]/95 to-[#0E7490]/95 backdrop-blur-md border border-white/25 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_4px_16px_rgba(8,145,178,0.22)] text-sm font-semibold transition-all hover:from-[#0891B2] hover:to-[#155E75] [transform:translateZ(0)]"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reload Application</span>
            </button>

            <Link
              href="/"
              className="w-full inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white/70 backdrop-blur-md border border-cyan-200/90 hover:bg-white/90 text-[#0891B2] shadow-[inset_0_1px_1px_rgba(255,255,255,0.85),0_2px_8px_rgba(0,0,0,0.03)] text-sm font-medium transition-all [transform:translateZ(0)]"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
