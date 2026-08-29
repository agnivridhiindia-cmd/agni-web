import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions governing the use of Agnivridhi India services.",
};

export default function TermsPage() {
  return (
    <div className="container mx-auto py-16 px-4 max-w-3xl">
      <h1 className="font-serif text-3xl font-semibold text-slate-900 mb-4">Terms of Service</h1>
      <p className="text-slate-600 font-sans">
        This document will be updated with verified terms of service in the compliance review phase.
      </p>
    </div>
  );
}
