import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Legal and consulting disclaimer for Agnivridhi India.",
};

export default function DisclaimerPage() {
  return (
    <div className="container mx-auto py-16 px-4 max-w-3xl">
      <h1 className="font-serif text-3xl font-semibold text-slate-900 mb-4">Disclaimer</h1>
      <p className="text-slate-600 font-sans">
        Agnivridhi India is an independent business consulting firm. Government scheme approvals and funding decisions rest solely with respective government bodies and financial institutions.
      </p>
    </div>
  );
}
