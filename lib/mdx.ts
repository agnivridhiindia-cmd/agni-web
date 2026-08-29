import fs from "node:fs";
import path from "node:path";
import type { BlogPost } from "@/types/blog-post";
import type { CaseStudy } from "@/types/case-study";

const CONTENT_DIR = path.join(process.cwd(), "content");
const BLOG_DIR = path.join(CONTENT_DIR, "blog");
const CASE_STUDIES_DIR = path.join(CONTENT_DIR, "case-studies");

/**
 * Returns slugs for available blog posts in content/blog.
 */
export async function getBlogPostSlugs(): Promise<string[]> {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }
  const entries = await fs.promises.readdir(BLOG_DIR, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && (entry.name.endsWith(".mdx") || entry.name.endsWith(".md")))
    .map((entry) => entry.name.replace(/\.mdx?$/, ""));
}

/**
 * Returns slugs for available case studies in content/case-studies.
 */
export async function getCaseStudySlugs(): Promise<string[]> {
  if (!fs.existsSync(CASE_STUDIES_DIR)) {
    return [];
  }
  const entries = await fs.promises.readdir(CASE_STUDIES_DIR, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && (entry.name.endsWith(".mdx") || entry.name.endsWith(".md")))
    .map((entry) => entry.name.replace(/\.mdx?$/, ""));
}

/**
 * MDX Content metadata placeholder helper.
 * Detailed MDX compilation pipeline with plugins (rehype/remark) will be finalized in Phase 2/Content Phase.
 */
export interface MDXDocument<T> {
  readonly slug: string;
  readonly metadata: T;
  readonly content: string;
}

export type MDXBlogPost = MDXDocument<BlogPost>;
export type MDXCaseStudy = MDXDocument<CaseStudy>;
