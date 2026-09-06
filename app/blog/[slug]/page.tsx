import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPostSlugs, getPostBySlug, getRelatedPosts } from "@/lib/mdx";
import { extractTocFromMarkdown } from "@/lib/toc";
import { createPageMetadata, getArticleJsonLd, getBreadcrumbJsonLd } from "@/lib/seo";
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
    return createPageMetadata({
      title: "Article Not Found",
      description: "The requested advisory guide could not be located.",
      path: `/blog/${slug}`,
      noIndex: true,
    });
  }

  const { frontmatter } = postData;

  return createPageMetadata({
    title: frontmatter.title,
    description: frontmatter.excerpt,
    path: `/blog/${slug}`,
    openGraphType: "article",
    publishedTime: frontmatter.publishedAt,
    authors: [frontmatter.author.name],
  });
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

  const articleJsonLd = getArticleJsonLd({
    title: frontmatter.title,
    description: frontmatter.excerpt,
    publishedAt: frontmatter.publishedAt,
    authorName: frontmatter.author.name,
    authorRole: frontmatter.author.role,
    slug,
  });

  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Insights & Blog", path: "/blog" },
    { name: frontmatter.title, path: `/blog/${slug}` },
  ]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* 1. Scroll Reading Progress */}
      <ReadingProgress />

      {/* 2. Semantic Breadcrumbs */}
      <ArticleBreadcrumb title={frontmatter.title} category={frontmatter.category} />

      {/* 3. Article Editorial Hero */}
      <ArticleHero post={frontmatter} />

      {/* 4. Reading Canvas with TOC on Right Column & Article Body */}
      <div className="py-12 sm:py-16 lg:py-20">
        <Container width="wide">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Article Main Body Column */}
            <article className="w-full flex-1 min-w-0 max-w-3xl mx-auto lg:mx-0">
              {/* Mobile Table of Contents (shown on small viewports) */}
              <TableOfContents items={tocItems} variant="mobile" className="lg:hidden mb-8" />

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

            {/* Sticky Table of Contents on the RIGHT Column (Desktop) */}
            <aside className="hidden lg:block w-72 shrink-0">
              <TableOfContents items={tocItems} variant="desktop" />
            </aside>
          </div>
        </Container>
      </div>

      {/* 5. Complementary Advisory Guides */}
      <ArticleRelatedPosts relatedPosts={relatedPosts} />
    </div>
  );
}
