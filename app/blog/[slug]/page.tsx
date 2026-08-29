import type { Metadata } from "next";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `Article: ${slug}`,
    description: `Article details for ${slug} from Agnivridhi India.`,
  };
}

export default async function BlogPostDetailPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="font-serif text-3xl font-semibold text-slate-900 mb-4 capitalize">
        Article: {slug.replace(/-/g, " ")}
      </h1>
      <p className="text-slate-600 font-sans">
        This blog post page is prepared for Phase 2 implementation.
      </p>
    </div>
  );
}
