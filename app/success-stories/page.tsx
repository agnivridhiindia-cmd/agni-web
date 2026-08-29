import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Success Stories",
  description: "Explore case studies and impact stories of businesses assisted by Agnivridhi India.",
};

export default function SuccessStoriesPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="font-serif text-3xl font-semibold text-slate-900 mb-4">Success Stories</h1>
      <p className="text-slate-600 font-sans">
        This section is prepared for Phase 2 implementation.
      </p>
    </div>
  );
}
