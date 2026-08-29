import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Agnivridhi India for consulting, funding, and compliance inquiries.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="font-serif text-3xl font-semibold text-slate-900 mb-4">Contact Agnivridhi India</h1>
      <p className="text-slate-600 font-sans">
        This section is prepared for Phase 2 implementation.
      </p>
    </div>
  );
}
