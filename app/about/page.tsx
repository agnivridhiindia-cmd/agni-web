import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Agnivridhi India and our mission to support MSMEs and startups.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="font-serif text-3xl font-semibold text-slate-900 mb-4">About Agnivridhi India</h1>
      <p className="text-slate-600 font-sans">
        This section is prepared for Phase 2 implementation.
      </p>
    </div>
  );
}
