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
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-500/20 selection:text-amber-200 flex flex-col">
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

      {/* 2. Semantic Breadcrumbs (Dark) */}
      <ArticleBreadcrumb title={frontmatter.title} category={frontmatter.category} />

      {/* 3. Article Editorial Hero (Dark) */}
      <ArticleHero post={frontmatter} />

      <div className="hairline-rule-brass" />

      {/* 4. Middle Sections: Reading Canvas, Related Services & Further Reading in Home Page Light Mode */}
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
          {/* Reading Canvas with TOC on Right Column & Article Body */}
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
                    <div className="mt-10 pt-6 border-t border-[#A6CCEA]/70 flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mr-1">
                        Tagged:
                      </span>
                      {frontmatter.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-white/80 text-slate-800 text-xs font-mono border border-slate-300/80 shadow-2xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Related Advisory Practice Services */}
                  <ArticleRelatedServices post={frontmatter} />
                </article>

                {/* Sticky Table of Contents on the RIGHT Column (Desktop) */}
                <aside className="hidden lg:block w-72 shrink-0 self-stretch">
                  <TableOfContents items={tocItems} variant="desktop" />
                </aside>
              </div>
            </Container>
          </div>

          <div className="hairline-rule-brass" />

          {/* Complementary Advisory Guides */}
          <ArticleRelatedPosts relatedPosts={relatedPosts} />
        </div>
      </div>

      <div className="hairline-rule-multi" />

      {/* 5. Closing Contextual Advisory Consultation Banner (Dark) */}
      <ArticleCta category={frontmatter.category} title={frontmatter.title} />
    </div>
  );
}
