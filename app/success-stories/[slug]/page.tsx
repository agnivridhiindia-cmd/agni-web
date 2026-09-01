import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCaseStudyBySlug, getCaseStudySlugs, getRelatedCaseStudies } from "@/lib/mdx";
import { Container } from "@/components/shared/container";
import { CaseStudyBreadcrumb } from "@/components/success-stories/detail/case-study-breadcrumb";
import { CaseStudyHero } from "@/components/success-stories/detail/case-study-hero";
import { CaseStudyNarrative } from "@/components/success-stories/detail/case-study-narrative";
import { CaseStudySidebar } from "@/components/success-stories/detail/case-study-sidebar";
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
    return {
      title: "Case Study Not Found | Agnivridhi India",
      description: "The requested enterprise case study could not be located.",
    };
  }

  const { frontmatter: study } = result;
  const pageTitle = `${study.title} | Case Study | Agnivridhi India`;

  return {
    title: pageTitle,
    description: study.summary,
    alternates: {
      canonical: `https://agnivridhi.com/success-stories/${slug}`,
    },
    openGraph: {
      title: pageTitle,
      description: study.summary,
      url: `https://agnivridhi.com/success-stories/${slug}`,
      siteName: "Agnivridhi India",
      type: "article",
      publishedTime: study.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: study.summary,
    },
  };
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

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* 1. Semantic Breadcrumb */}
      <CaseStudyBreadcrumb
        title={study.title}
        categoryLabel={categoryLabel}
        categorySlug={study.category}
      />

      {/* 2. Editorial Case Study Hero */}
      <CaseStudyHero study={study} />

      {/* 3. Main Narrative & Sticky Sidebar Grid */}
      <main id="main-content" className="grow">
        <Container width="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 py-12 sm:py-16 lg:py-20">
            {/* Main 8-column narrative */}
            <div className="lg:col-span-8">
              <CaseStudyNarrative study={study} />
            </div>

            {/* Sticky 4-column engagement sidebar */}
            <div className="lg:col-span-4">
              <CaseStudySidebar study={study} />
            </div>
          </div>
        </Container>

        {/* 4. Associated Advisory Services */}
        <CaseStudyRelatedServices serviceSlugs={study.services} />

        {/* 5. Curated Complementary Case Studies */}
        <CaseStudyRelatedStories relatedStudies={relatedStudies} />

        {/* 6. Contextual Final Consultation CTA */}
        <CaseStudyCta caseStudyTitle={study.title} />
      </main>
    </div>
  );
}
