import type { Metadata } from "next";

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `Case Study: ${slug}`,
    description: `Case study for ${slug} from Agnivridhi India.`,
  };
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="font-serif text-3xl font-semibold text-slate-900 mb-4 capitalize">
        Case Study: {slug.replace(/-/g, " ")}
      </h1>
      <p className="text-slate-600 font-sans">
        This case study detail page is prepared for Phase 2 implementation.
      </p>
    </div>
  );
}
