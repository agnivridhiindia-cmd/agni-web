import * as React from "react";
import Link from "next/link";
import { ArrowLeft, Compass, Landmark, Phone } from "lucide-react";
import { Container } from "@/components/shared/container";
import { LinkButton } from "@/components/ui/link-button";

export const metadata = {
  title: "404 - Docket Not Found | Agnivridhi India",
  description: "The advisory docket or resource requested could not be located.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between">
      <div className="flex-1 flex items-center justify-center py-24 sm:py-32">
        <Container width="standard">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            {/* Monogram / Icon */}
            <div className="w-16 h-16 rounded-2xl bg-teal-50 border border-teal-200/80 text-teal-700 flex items-center justify-center mx-auto shadow-subtle">
              <Compass className="w-8 h-8 text-teal-600" aria-hidden="true" />
            </div>

            {/* Error Code Eyebrow */}
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/80 text-slate-700 font-mono text-xs font-bold uppercase tracking-widest">
                <span>ERROR CODE: 404</span>
                <span aria-hidden="true">&bull;</span>
                <span>DOCKET NOT FOUND</span>
              </span>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-950 tracking-tight leading-tight">
                The Requested Advisory Docket Does Not Exist.
              </h1>

              <p className="type-body text-slate-600 font-sans max-w-lg mx-auto leading-relaxed">
                The page, case study, or advisory article you are seeking may have been consolidated,
                renamed, or archived under our statutory governance updates.
              </p>
            </div>

            {/* Navigation Options */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <LinkButton
                href="/"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto shadow-card"
                leftIcon={<ArrowLeft className="w-4 h-4 mr-2" />}
              >
                Return to Homepage
              </LinkButton>

              <LinkButton
                href="/services"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-slate-300 hover:border-slate-400 bg-white"
                leftIcon={<Landmark className="w-4 h-4 mr-2 text-teal-600" />}
              >
                Explore Advisory Catalog
              </LinkButton>
            </div>

            {/* Direct Assistance Strip */}
            <div className="pt-8 border-t border-slate-200/80 text-xs text-slate-500 font-sans flex flex-wrap items-center justify-center gap-4">
              <span>Need immediate assistance?</span>
              <Link
                href="/contact"
                className="font-semibold text-teal-700 hover:text-teal-900 inline-flex items-center gap-1 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Contact Advisory Principal</span>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
