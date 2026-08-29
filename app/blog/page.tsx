import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Insights",
  description: "Expert insights, funding guides, and business regulatory updates from Agnivridhi India.",
};

export default function BlogPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="font-serif text-3xl font-semibold text-slate-900 mb-4">Blog & Insights</h1>
      <p className="text-slate-600 font-sans">
        This section is prepared for Phase 2 implementation.
      </p>
    </div>
  );
}
