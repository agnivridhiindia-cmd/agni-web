import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/shared/container";
import { Eyebrow } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/link-button";
import { ChevronRight, ArrowLeft, ArrowRight } from "lucide-react";
import { getCaseStudySlugs } from "@/lib/mdx";

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = await getCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const formattedTitle = slug.replace(/-/g, " ");
  return {
    title: `Case Study: ${formattedTitle} | Agnivridhi India`,
    description: `Detailed case study on how Agnivridhi India structured advisory solutions for ${formattedTitle}.`,
  };
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const formattedTitle = slug.replace(/-/g, " ");

  return (
    <div className="min-h-screen bg-background">
      <nav aria-label="Breadcrumb" className="border-b border-slate-200/80 bg-slate-50/50 py-3 text-xs">
        <Container width="reading">
          <ol className="flex items-center gap-2 text-slate-500 font-sans">
            <li>
              <Link href="/" className="hover:text-slate-900 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3 h-3 text-slate-400" />
            </li>
            <li>
              <Link href="/success-stories" className="hover:text-slate-900 transition-colors">
                Success Stories
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3 h-3 text-slate-400" />
            </li>
            <li className="font-medium text-slate-900 capitalize truncate">
              {formattedTitle}
            </li>
          </ol>
        </Container>
      </nav>

      <section className="border-b border-slate-200/80 bg-slate-50/60 py-16 md:py-20">
        <Container width="reading">
          <div className="space-y-4">
            <Eyebrow>Enterprise Case Study</Eyebrow>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight capitalize leading-tight">
              {formattedTitle}
            </h1>
            <p className="type-body-lg text-slate-600 font-sans leading-relaxed">
              In-depth summary of the financial structuring, credit appraisal syndication, and regulatory milestones delivered by Agnivridhi India.
            </p>
          </div>
        </Container>
      </section>

      <main className="py-14 md:py-20">
        <Container width="reading">
          <div className="space-y-8">
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <h2 className="font-serif text-xl font-semibold text-slate-900">
                Engagement Summary
              </h2>
              <p className="text-slate-600 text-sm font-sans leading-relaxed">
                This enterprise engagement involved custom DPR financial modeling and institutional lender alignment to unlock collateral-free capital.
              </p>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-slate-200">
              <Link
                href="/success-stories"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>View All Case Studies</span>
              </Link>

              <LinkButton href="/contact" variant="primary" size="sm">
                <span>Inquire About Feasibility</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </LinkButton>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}
