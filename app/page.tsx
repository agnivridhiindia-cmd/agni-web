import { siteConfig } from "@/lib/site-config";
import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-slate-900">
      <div className="max-w-2xl w-full bg-white rounded-lg border border-slate-200 p-8 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-md bg-cyan-50 text-brand-primary">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-serif text-3xl font-semibold tracking-tight text-slate-900">
              {siteConfig.name}
            </h1>
            <p className="text-sm text-slate-500 font-sans">
              Phase 1 Baseline & Architecture Verified
            </p>
          </div>
        </div>

        <p className="text-slate-600 text-base leading-relaxed mb-6 font-sans">
          {siteConfig.description}
        </p>

        <div className="border-t border-slate-100 pt-6">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 font-sans">
            Core Architecture Status
          </h2>
          <ul className="space-y-2 text-sm text-slate-700 font-sans">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Next.js 15 App Router & Strict TypeScript</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Tailwind CSS & Token Foundations Ready</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span className="font-serif">Display Font: Fraunces Loaded</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span className="font-sans">Body Font: Inter Loaded</span>
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-primary" />
              <span>Single Source of Truth: Verified Metadata</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
