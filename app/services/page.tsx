import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore business funding assistance, compliance certifications, and digital services from Agnivridhi India.",
};

export default function ServicesPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="font-serif text-3xl font-semibold text-slate-900 mb-4">Services</h1>
      <p className="text-slate-600 font-sans">
        This section is prepared for Phase 2 implementation.
      </p>
    </div>
  );
}
