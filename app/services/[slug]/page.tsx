import type { Metadata } from "next";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `Service: ${slug}`,
    description: `Service details for ${slug} from Agnivridhi India.`,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="font-serif text-3xl font-semibold text-slate-900 mb-4 capitalize">
        Service: {slug.replace(/-/g, " ")}
      </h1>
      <p className="text-slate-600 font-sans">
        This service detail page is prepared for Phase 2 implementation.
      </p>
    </div>
  );
}
