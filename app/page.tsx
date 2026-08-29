import { Phase5Review } from "@/components/home/phase5-review";
import { Phase6Review } from "@/components/home/phase6-review";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Award,
  Layers,
} from "lucide-react";

export default function TokenGalleryPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 bg-noise">
      <div className="max-w-content mx-auto page-gutters py-12 space-y-16">
        {/* Phase 6 Motion, Transitions & Interaction System Review */}
        <Phase6Review />

        {/* Phase 5 Deliverables Review Suite */}
        <Phase5Review />

        {/* Section 1: Editorial Typography & Overview */}
        <section className="space-y-4 max-w-reading">
          <span className="type-eyebrow text-teal-600">Visual System Architecture</span>
          <h1 className="type-display text-slate-900">
            Trust, Growth & Prestige
          </h1>
          <p className="type-body-lg text-slate-600">
            Phase 2 establishes the complete token foundation for Agnivridhi India. Every color,
            type scale, radius, and micro-elevation has been calibrated for an editorial, human-designed
            consulting experience without AI-generated visual clutter.
          </p>
        </section>

        {/* Section 2: Core Color Scales */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <span className="type-eyebrow text-slate-500">Color System</span>
            <h2 className="type-h2 text-slate-900 mt-1">Calibrated Palettes</h2>
          </div>

          {/* Teal Scale */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-700">
                Primary Brand: Teal Scale (Anchor: 600 = #0891B2)
              </span>
              <span className="text-xs text-slate-500">Institution & Authority</span>
            </div>
            <div className="grid grid-cols-11 gap-1.5 text-center text-[10px] font-mono">
              <div className="p-3 rounded-sm bg-teal-50 text-slate-900 border border-slate-200">50</div>
              <div className="p-3 rounded-sm bg-teal-100 text-slate-900">100</div>
              <div className="p-3 rounded-sm bg-teal-200 text-slate-900">200</div>
              <div className="p-3 rounded-sm bg-teal-300 text-slate-900">300</div>
              <div className="p-3 rounded-sm bg-teal-400 text-slate-900">400</div>
              <div className="p-3 rounded-sm bg-teal-500 text-white">500</div>
              <div className="p-3 rounded-sm bg-teal-600 text-white font-bold ring-2 ring-teal-600 ring-offset-2">600</div>
              <div className="p-3 rounded-sm bg-teal-700 text-white">700</div>
              <div className="p-3 rounded-sm bg-teal-800 text-white">800</div>
              <div className="p-3 rounded-sm bg-teal-900 text-white">900</div>
              <div className="p-3 rounded-sm bg-teal-950 text-white">950</div>
            </div>
          </div>

          {/* Gold Scale */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-700">
                Accent Brand: Burnished Gold Scale (&ldquo;Agni&rdquo; / Growth: 600 = #B8891F)
              </span>
              <span className="text-xs text-slate-500">Prestige & Warmth</span>
            </div>
            <div className="grid grid-cols-11 gap-1.5 text-center text-[10px] font-mono">
              <div className="p-3 rounded-sm bg-gold-50 text-slate-900 border border-slate-200">50</div>
              <div className="p-3 rounded-sm bg-gold-100 text-slate-900">100</div>
              <div className="p-3 rounded-sm bg-gold-200 text-slate-900">200</div>
              <div className="p-3 rounded-sm bg-gold-300 text-slate-900">300</div>
              <div className="p-3 rounded-sm bg-gold-400 text-slate-900">400</div>
              <div className="p-3 rounded-sm bg-gold-500 text-white">500</div>
              <div className="p-3 rounded-sm bg-gold-600 text-white font-bold ring-2 ring-gold-600 ring-offset-2">600</div>
              <div className="p-3 rounded-sm bg-gold-700 text-white">700</div>
              <div className="p-3 rounded-sm bg-gold-800 text-white">800</div>
              <div className="p-3 rounded-sm bg-gold-900 text-white">900</div>
              <div className="p-3 rounded-sm bg-gold-950 text-white">950</div>
            </div>
          </div>

          {/* Slate Scale */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-700">
                Neutral Palette: Slate Hierarchy
              </span>
              <span className="text-xs text-slate-500">Surface & Typographic Contrast</span>
            </div>
            <div className="grid grid-cols-11 gap-1.5 text-center text-[10px] font-mono">
              <div className="p-3 rounded-sm bg-slate-50 text-slate-900 border border-slate-200">50</div>
              <div className="p-3 rounded-sm bg-slate-100 text-slate-900">100</div>
              <div className="p-3 rounded-sm bg-slate-200 text-slate-900">200</div>
              <div className="p-3 rounded-sm bg-slate-300 text-slate-900">300</div>
              <div className="p-3 rounded-sm bg-slate-400 text-white">400</div>
              <div className="p-3 rounded-sm bg-slate-500 text-white">500</div>
              <div className="p-3 rounded-sm bg-slate-600 text-white">600</div>
              <div className="p-3 rounded-sm bg-slate-700 text-white">700</div>
              <div className="p-3 rounded-sm bg-slate-800 text-white">800</div>
              <div className="p-3 rounded-sm bg-slate-900 text-white">900</div>
              <div className="p-3 rounded-sm bg-slate-950 text-white">950</div>
            </div>
          </div>
        </section>

        {/* Section 3: Typography Hierarchy Showcase */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <span className="type-eyebrow text-slate-500">Typography System</span>
            <h2 className="type-h2 text-slate-900 mt-1">Editorial & Body Hierarchy</h2>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-8 shadow-card space-y-6">
            <div>
              <span className="text-xs font-mono text-slate-400">.type-display (Fraunces SemiBold)</span>
              <p className="type-display text-slate-900 mt-1">Catalyzing Enterprise Scale</p>
            </div>
            <div className="border-t border-slate-100 pt-4">
              <span className="text-xs font-mono text-slate-400">.type-h1 (Fraunces SemiBold)</span>
              <p className="type-h1 text-slate-900 mt-1">Government Schemes & Institutional Debt</p>
            </div>
            <div className="border-t border-slate-100 pt-4">
              <span className="text-xs font-mono text-slate-400">.type-h2 (Fraunces SemiBold)</span>
              <p className="type-h2 text-slate-900 mt-1">CGTMSE Collateral-Free Credit Advisory</p>
            </div>
            <div className="border-t border-slate-100 pt-4">
              <span className="text-xs font-mono text-slate-400">.type-h3 (Fraunces SemiBold)</span>
              <p className="type-h3 text-slate-900 mt-1">Navigating MSME Regulatory Compliance</p>
            </div>
            <div className="border-t border-slate-100 pt-4">
              <span className="text-xs font-mono text-slate-400">.type-h4 (Inter SemiBold)</span>
              <p className="type-h4 text-slate-900 mt-1">Structured Project Reports & Financial Modelling</p>
            </div>
            <div className="border-t border-slate-100 pt-4">
              <span className="text-xs font-mono text-slate-400">.type-body-lg & .type-body (Inter Regular)</span>
              <p className="type-body-lg text-slate-700 mt-1">
                Agnivridhi India provides strategic consulting to MSMEs across manufacturing, retail, and technology sectors.
              </p>
              <p className="type-body text-slate-600 mt-2">
                Our advisory team bridges the gap between ambitious founders and financial institutions, securing necessary government capital through rigorous documentation.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Button Language */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <span className="type-eyebrow text-slate-500">Component System</span>
            <h2 className="type-h2 text-slate-900 mt-1">Button Hierarchy</h2>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-8 shadow-card space-y-6">
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary">
                Primary Action <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="accent">
                Accent Gold <Sparkles className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="secondary">Secondary Action</Button>
              <Button variant="outline">Outline Action</Button>
              <Button variant="ghost">Ghost Action</Button>
              <Button variant="link">Inline Link</Button>
            </div>
            <div className="border-t border-slate-100 pt-4 flex flex-wrap items-center gap-4">
              <Button variant="primary" size="sm">Small (h-8)</Button>
              <Button variant="primary" size="default">Default (h-10)</Button>
              <Button variant="primary" size="lg">Large (h-12)</Button>
              <Button variant="primary" size="xl">Hero Extra Large (h-14)</Button>
            </div>
          </div>
        </section>

        {/* Section 5: Card Foundations */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <span className="type-eyebrow text-slate-500">Surface System</span>
            <h2 className="type-h2 text-slate-900 mt-1">Card Architecture</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Standard Card */}
            <Card variant="standard">
              <CardHeader>
                <div className="w-10 h-10 rounded-md bg-teal-50 text-teal-700 flex items-center justify-center mb-2">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <CardTitle>Standard Card</CardTitle>
                <CardDescription>Clean structural card with quiet border and subtle shadow.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="type-body-sm text-slate-600">
                  Ideal for general listings, data points, and standard catalog entries.
                </p>
              </CardContent>
              <CardFooter>
                <span className="type-caption text-slate-500">Variant: standard</span>
              </CardFooter>
            </Card>

            {/* Elevated Card */}
            <Card variant="elevated">
              <CardHeader>
                <div className="w-10 h-10 rounded-md bg-amber-50 text-gold-700 flex items-center justify-center mb-2">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <CardTitle>Elevated Card</CardTitle>
                <CardDescription>Hover-responsive lift with refined multi-layer shadow.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="type-body-sm text-slate-600">
                  Used for interactive service cards and actionable portfolio case studies.
                </p>
              </CardContent>
              <CardFooter>
                <span className="type-caption text-slate-500">Variant: elevated</span>
              </CardFooter>
            </Card>

            {/* Glass Card */}
            <Card variant="glass">
              <CardHeader>
                <div className="w-10 h-10 rounded-md bg-teal-600/10 text-teal-700 flex items-center justify-center mb-2">
                  <Layers className="w-5 h-5" />
                </div>
                <CardTitle>Glass Surface</CardTitle>
                <CardDescription>Translucent backdrop blur for floating and overlay panels.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="type-body-sm text-slate-600">
                  Used selectively for hero stats and floating navigation bars.
                </p>
              </CardContent>
              <CardFooter>
                <span className="type-caption text-slate-500">Variant: glass</span>
              </CardFooter>
            </Card>

            {/* Featured Card */}
            <Card variant="featured">
              <CardHeader>
                <div className="w-10 h-10 rounded-md bg-teal-50 text-teal-700 flex items-center justify-center mb-2">
                  <Award className="w-5 h-5" />
                </div>
                <CardTitle>Featured Card</CardTitle>
                <CardDescription>Top gradient accent line for prestige offerings.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="type-body-sm text-slate-600">
                  Highlights flagship funding schemes and major enterprise milestones.
                </p>
              </CardContent>
              <CardFooter>
                <span className="type-caption text-slate-500">Variant: featured</span>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Section 6: Effects & Micro-Interactions */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <span className="type-eyebrow text-slate-500">Effects System</span>
            <h2 className="type-h2 text-slate-900 mt-1">Gradients, Glows & Micro-Noise</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="gradient-primary rounded-lg p-6 text-white shadow-card space-y-2">
              <span className="text-xs uppercase tracking-widest opacity-80 font-mono">.gradient-primary</span>
              <h3 className="font-serif text-lg font-semibold">Teal Tonal Progression</h3>
              <p className="text-xs opacity-90 leading-relaxed font-sans">
                Deep teal to cyan progression for high-contrast institutional moments.
              </p>
            </div>

            <div className="gradient-accent rounded-lg p-6 text-white shadow-card space-y-2">
              <span className="text-xs uppercase tracking-widest opacity-80 font-mono">.gradient-accent</span>
              <h3 className="font-serif text-lg font-semibold">Burnished Gold Gradient</h3>
              <p className="text-xs opacity-90 leading-relaxed font-sans">
                Rich warm amber-gold representing &ldquo;Agni&rdquo; and enterprise growth.
              </p>
            </div>

            <div className="gradient-brand rounded-lg p-6 text-white shadow-card space-y-2">
              <span className="text-xs uppercase tracking-widest opacity-80 font-mono">.gradient-brand</span>
              <h3 className="font-serif text-lg font-semibold">Teal to Gold Fusion</h3>
              <p className="text-xs opacity-90 leading-relaxed font-sans">
                Signature transition blending structural trust into enterprise prestige.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Quality Checklist */}
        <section className="bg-white border border-slate-200 rounded-lg p-8 shadow-card">
          <h2 className="type-h3 text-slate-900 mb-4">Phase 2 & 3 Verification Checklist</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span className="text-sm text-slate-700">Single Source of Truth: <code>lib/site-config.ts</code></span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span className="text-sm text-slate-700">Services Catalog: 4 strict categories (<code>data/services.ts</code>)</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span className="text-sm text-slate-700">Factual Integrity: Unverified facts strictly set to <code>null</code></span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span className="text-sm text-slate-700">Address Consistency: 1 canonical address (no conflicting branches)</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span className="text-sm text-slate-700">Testimonials: <code>verified: false</code> & no fabricated names</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span className="text-sm text-slate-700">MDX Infrastructure: Strongly typed loader (<code>lib/mdx.ts</code>)</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span className="text-sm text-slate-700">Form Validation: Zod schema (<code>contact-form.ts</code>)</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span className="text-sm text-slate-700">Design Tokens: Teal `#0891B2`, Gold `#B8891F`, Slate, Fraunces + Inter</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
