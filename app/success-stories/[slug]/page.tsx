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
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-500/20 selection:text-amber-200 flex flex-col">
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

      <div className="hairline-rule-brass" />

      {/* 3. Middle Sections: Main Narrative, Related Services & Related Stories in Home Page Light Mode */}
      <div className="grow bg-gradient-to-b from-[#D5E7F4] via-[#C6E0F2] to-[#B8D7EE] text-slate-900 border-b border-[#A6CCEA] relative overflow-hidden">
        {/* Precision architectural ambient background matching home page institutional narrative */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
        >
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-300/80 to-transparent" />
          <div className="absolute inset-0 [background-image:radial-gradient(#94A3B8_1px,transparent_1px)] [background-size:32px_32px] opacity-35 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_40%,#000_65%,transparent_100%)]" />
          <div className="absolute top-1/4 -left-32 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.1)_0%,transparent_70%)] blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.06)_0%,transparent_70%)] blur-3xl" />
        </div>

        <div className="relative z-10">
          <Container width="wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 py-12 sm:py-16 lg:py-20">
              {/* Full-width narrative */}
              <div className="lg:col-span-12">
                <CaseStudyNarrative study={study} />
              </div>
            </div>
          </Container>

          <div className="hairline-rule-cyan" />

          {/* 4. Associated Advisory Services */}
          <CaseStudyRelatedServices serviceSlugs={study.services} />

          <div className="hairline-rule-brass" />

          {/* 5. Curated Complementary Case Studies */}
          <CaseStudyRelatedStories relatedStudies={relatedStudies} />
        </div>
      </div>

      <div className="hairline-rule-multi" />

      {/* 6. Contextual Final Consultation CTA */}
      <CaseStudyCta caseStudyTitle={study.title} />
    </div>
  );
}
