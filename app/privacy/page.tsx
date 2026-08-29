import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and data governance practices of Agnivridhi India.",
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto py-16 px-4 max-w-3xl">
      <h1 className="font-serif text-3xl font-semibold text-slate-900 mb-4">Privacy Policy</h1>
      <p className="text-slate-600 font-sans">
        This document will be updated with verified legal policy terms in the compliance review phase.
      </p>
    </div>
  );
}
