import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCaseStudyBySlug, getCaseStudySlugs, getRelatedCaseStudies } from "@/lib/mdx";
import { createPageMetadata, getBreadcrumbJsonLd } from "@/lib/seo";
import { Container } from "@/components/shared/container";
import { CaseStudyBreadcrumb } from "@/components/success-stories/detail/case-study-breadcrumb";
import { CaseStudyHero } from "@/components/success-stories/detail/case-study-hero";
import { CaseStudyNarrative } from "@/components/success-stories/detail/case-study-narrative";
import { CaseStudyRelatedServices } from "@/components/success-stories/detail/case-study-related-services";
import { CaseStudyRelatedStories } from "@/components/success-stories/detail/case-study-related-stories";
import { CaseStudyCta } from "@/components/success-stories/detail/case-study-cta";

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const categoryLabels: Record<string, string> = {
  funding: "Government & Debt Funding",
  compliance: "Compliance & Certifications",
  digital: "Digital Transformation",
  it: "Custom Software & IT",
};

/**
 * Pre-render all verified case study routes at build time (SSG)
 */
export async function generateStaticParams() {
  const slugs = await getCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

/**
 * Generate unique dynamic SEO & OpenGraph metadata
 */
export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = await getCaseStudyBySlug(slug);

  if (!result) {
    return createPageMetadata({
      title: "Case Study Not Found",
      description: "The requested enterprise case study could not be located.",
      path: `/success-stories/${slug}`,
      noIndex: true,
    });
  }

  const { frontmatter: study } = result;

  return createPageMetadata({
    title: study.title,
    description: study.summary,
    path: `/success-stories/${slug}`,
    openGraphType: "article",
    publishedTime: study.publishedAt,
  });
}

/**
 * Dynamic Case Study Detail Page
 * Pure Server Component utilizing static parameters and verified MDX content.
 */
export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const result = await getCaseStudyBySlug(slug);

  if (!result) {
    notFound();
  }

  const { frontmatter: study } = result;
  const relatedStudies = await getRelatedCaseStudies(slug, study.category, 2);
  const categoryLabel = categoryLabels[study.category] || study.category;

  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Success Stories", path: "/success-stories" },
    { name: study.title, path: `/success-stories/${slug}` },
  ]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Schema.org Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* 1. Semantic Breadcrumb */}
      <CaseStudyBreadcrumb
        title={study.title}
        categoryLabel={categoryLabel}
        categorySlug={study.category}
      />

      {/* 2. Editorial Case Study Hero */}
      <CaseStudyHero study={study} />

      {/* 3. Main Narrative & Sticky Sidebar Grid */}
      <div className="grow">
        <Container width="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 py-12 sm:py-16 lg:py-20">
            {/* Full-width narrative */}
            <div className="lg:col-span-12">
              <CaseStudyNarrative study={study} />
            </div>
          </div>
        </Container>

        {/* 4. Associated Advisory Services */}
        <CaseStudyRelatedServices serviceSlugs={study.services} />

        {/* 5. Curated Complementary Case Studies */}
        <CaseStudyRelatedStories relatedStudies={relatedStudies} />

        {/* 6. Contextual Final Consultation CTA */}
        <CaseStudyCta caseStudyTitle={study.title} />
      </div>
    </div>
  );
}
