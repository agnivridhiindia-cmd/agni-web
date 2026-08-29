import { Hero } from "@/components/home/hero";
import { StatsBar } from "@/components/home/stats-bar";
import { RecognitionSection } from "@/components/home/recognition-section";
import { Phase6Review } from "@/components/home/phase6-review";
import { Phase5Review } from "@/components/home/phase5-review";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Primary Flagship Content Container */}
      <main id="main-content">
        {/* Phase 7: Flagship Homepage Hero */}
        <Hero />

        {/* Phase 8: Unified Stats & Credibility Bar */}
        <StatsBar />

        {/* Phase 9: Recognition & Social Proof Section */}
        <RecognitionSection />
      </main>

      {/* Development & Phase Verification Harnesses */}
      <section className="bg-noise py-16 border-t border-slate-200">
        <div className="max-w-content mx-auto page-gutters space-y-12">
          <div className="border-b border-slate-200 pb-4">
            <span className="type-eyebrow text-slate-500 font-mono">Development Verification Suites</span>
            <h2 className="type-h3 text-slate-900 mt-1">Foundation Harnesses (Phases 5 &amp; 6)</h2>
            <p className="type-body-sm text-slate-600">
              Interactive test controls for motion primitives, navigation states, and glassmorphic micro-feedback.
            </p>
          </div>

          {/* Phase 6 Motion Review Suite */}
          <Phase6Review />

          {/* Phase 5 Global Shell Review Suite */}
          <Phase5Review />
        </div>
      </section>
    </div>
  );
}
