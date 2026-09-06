"use client";

import * as React from "react";
import { RotateCcw, AlertTriangle, ArrowLeft } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { LinkButton } from "@/components/ui/link-button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    // Log exception in development for diagnostic tracking
    if (process.env.NODE_ENV === "development") {
      console.error("Platform application error captured:", error);
    }
  }, [error]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between">
      <div className="flex-1 flex items-center justify-center py-24 sm:py-32">
        <Container width="standard">
          <div className="max-w-xl mx-auto text-center space-y-8">
            <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-700 flex items-center justify-center mx-auto shadow-subtle">
              <AlertTriangle className="w-8 h-8 text-amber-600" aria-hidden="true" />
            </div>

            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 font-mono text-xs font-bold uppercase tracking-widest">
                <span>SYSTEM DIAGNOSTIC NOTICE</span>
              </span>

              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight leading-tight">
                An Unexpected Interface Exception Occurred.
              </h1>

              <p className="type-body text-slate-600 font-sans max-w-md mx-auto leading-relaxed">
                Our platform detected a rendering exception. You can reload this view or return to
                the primary navigation index.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Button
                type="button"
                onClick={() => reset()}
                variant="primary"
                size="lg"
                className="w-full sm:w-auto shadow-card"
                leftIcon={<RotateCcw className="w-4 h-4 mr-2" />}
              >
                Retry Operation
              </Button>

              <LinkButton
                href="/"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-slate-300 hover:border-slate-400 bg-white"
                leftIcon={<ArrowLeft className="w-4 h-4 mr-2" />}
              >
                Return to Homepage
              </LinkButton>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
