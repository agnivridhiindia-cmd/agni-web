import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPostSlugs, getPostBySlug, getRelatedPosts } from "@/lib/mdx";
import { extractTocFromMarkdown } from "@/lib/toc";
import { Container } from "@/components/shared/container";
import { ReadingProgress } from "@/components/blog/detail/reading-progress";
import { ArticleBreadcrumb } from "@/components/blog/detail/article-breadcrumb";
import { ArticleHero } from "@/components/blog/detail/article-hero";
import { TableOfContents } from "@/components/blog/detail/table-of-contents";
import { ArticleBody } from "@/components/blog/detail/article-body";
import { ArticleRelatedServices } from "@/components/blog/detail/article-related-services";
import { ArticleRelatedPosts } from "@/components/blog/detail/article-related-posts";
import { ArticleCta } from "@/components/blog/detail/article-cta";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = await getBlogPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const postData = await getPostBySlug(slug);

  if (!postData) {
    return {
      title: "Article Not Found | Agnivridhi India",
      description: "The requested advisory guide could not be located.",
    };
  }

  const { frontmatter } = postData;
  const title = `${frontmatter.title} | Insights | Agnivridhi India`;
  const description = frontmatter.excerpt;
  const canonicalUrl = `https://agnivridhi.com/blog/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Agnivridhi India",
      type: "article",
      publishedTime: frontmatter.publishedAt,
      authors: [frontmatter.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function BlogPostDetailPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const postData = await getPostBySlug(slug);

  if (!postData) {
    notFound();
  }

  const { frontmatter, content } = postData;
  const relatedPosts = await getRelatedPosts(slug, frontmatter.category, 2);
  const tocItems = extractTocFromMarkdown(content);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: frontmatter.title,
    description: frontmatter.excerpt,
    datePublished: frontmatter.publishedAt,
    author: {
      "@type": "Organization",
      name: frontmatter.author.name,
      jobTitle: frontmatter.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "Agnivridhi India",
      url: "https://agnivridhi.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://agnivridhi.com/blog/${slug}`,
    },
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Scroll Reading Progress */}
      <ReadingProgress />

      {/* 2. Semantic Breadcrumbs */}
      <ArticleBreadcrumb title={frontmatter.title} category={frontmatter.category} />

      {/* 3. Article Editorial Hero */}
      <ArticleHero post={frontmatter} />

      {/* 4. Reading Canvas with TOC & Article Body */}
      <main id="main-content" className="py-12 sm:py-16 lg:py-20">
        <Container width="wide">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-14 items-start">
            {/* Table of Contents (handles mobile collapsible & desktop sticky rail) */}
            <TableOfContents items={tocItems} />

            {/* Article Main Body Column */}
            <article className="w-full flex-1 min-w-0 max-w-2xl mx-auto lg:mx-0">
              {/* MDX / Markdown Formatted Content */}
              <ArticleBody content={content} />

              {/* Topics / Tags */}
              {frontmatter.tags && frontmatter.tags.length > 0 && (
                <div className="mt-10 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mr-1">
                    Tagged:
                  </span>
                  {frontmatter.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-mono border border-slate-200/60"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Related Advisory Practice Services */}
              <ArticleRelatedServices post={frontmatter} />

              {/* Closing Contextual Advisory Consultation Banner */}
              <ArticleCta category={frontmatter.category} title={frontmatter.title} />
            </article>
          </div>
        </Container>
      </main>

      {/* 5. Complementary Advisory Guides */}
      <ArticleRelatedPosts relatedPosts={relatedPosts} />
    </div>
  );
}
