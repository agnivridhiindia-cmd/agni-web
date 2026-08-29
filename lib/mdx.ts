import fs from "node:fs";
import path from "node:path";
import type { BlogPostFrontmatter } from "@/types/blog-post";
import type { CaseStudyFrontmatter } from "@/types/case-study";

const CONTENT_ROOT = path.join(process.cwd(), "content");
const BLOG_DIR = path.join(CONTENT_ROOT, "blog");
const CASE_STUDIES_DIR = path.join(CONTENT_ROOT, "case-studies");

/**
 * Lightweight, safe frontmatter parser.
 * Extracts standard YAML key-value pairs from MDX/Markdown files without bloated dependencies.
 */
function parseFrontmatter<T>(rawContent: string): { frontmatter: Partial<T>; content: string } {
  const normalized = rawContent.replace(/\r\n/g, "\n");
  const match = normalized.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);

  if (!match) {
    return { frontmatter: {}, content: rawContent.trim() };
  }

  const rawYaml = match[1];
  const content = match[2].trim();
  const frontmatter: Record<string, unknown> = {};

  const lines = rawYaml.split("\n");
  let currentKey: string | null = null;
  let currentArray: string[] | null = null;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    // Array item handling (e.g. "  - item")
    if (trimmed.startsWith("- ") && currentKey && currentArray) {
      currentArray.push(trimmed.replace(/^- /, "").trim().replace(/^['"](.*)['"]$/, "$1"));
      continue;
    }

    const colonIndex = line.indexOf(":");
    if (colonIndex !== -1) {
      const key = line.slice(0, colonIndex).trim();
      const value = line.slice(colonIndex + 1).trim();

      if (value === "") {
        // Multi-line or array start
        currentKey = key;
        currentArray = [];
        frontmatter[key] = currentArray;
      } else {
        currentKey = null;
        currentArray = null;

        // Clean value quotes and booleans/numbers
        let parsedVal: unknown = value.replace(/^['"](.*)['"]$/, "$1");
        if (value === "true") parsedVal = true;
        else if (value === "false") parsedVal = false;
        else if (value === "null") parsedVal = null;
        else if (/^\d+$/.test(value)) parsedVal = Number.parseInt(value, 10);
        else if (/^\d+\.\d+$/.test(value)) parsedVal = Number.parseFloat(value);

        frontmatter[key] = parsedVal;
      }
    }
  }

  return {
    frontmatter: frontmatter as Partial<T>,
    content,
  };
}

/**
 * ==============================================================================
 * BLOG POST HELPERS (Canonical Route: /blog/[slug])
 * ==============================================================================
 */

export async function getBlogPostSlugs(): Promise<string[]> {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const entries = await fs.promises.readdir(BLOG_DIR, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && (entry.name.endsWith(".mdx") || entry.name.endsWith(".md")))
    .map((entry) => entry.name.replace(/\.mdx?$/, ""));
}

export async function getPostBySlug(
  slug: string
): Promise<{ frontmatter: BlogPostFrontmatter; content: string } | null> {
  const candidates = [
    path.join(BLOG_DIR, `${slug}.mdx`),
    path.join(BLOG_DIR, `${slug}.md`),
  ];

  let filePath: string | null = null;
  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) {
      filePath = candidate;
      break;
    }
  }

  if (!filePath) return null;

  const rawFile = await fs.promises.readFile(filePath, "utf-8");
  const { frontmatter, content } = parseFrontmatter<BlogPostFrontmatter>(rawFile);

  const completeFrontmatter: BlogPostFrontmatter = {
    slug,
    title: (frontmatter.title as string) || slug,
    excerpt: (frontmatter.excerpt as string) || "",
    category: (frontmatter.category as string) || "General",
    author: (frontmatter.author as BlogPostFrontmatter["author"]) || {
      name: "Agnivridhi Research",
      role: "Editorial Team",
      avatar: null,
    },
    publishedAt: (frontmatter.publishedAt as string) || new Date().toISOString().split("T")[0],
    updatedAt: (frontmatter.updatedAt as string) || null,
    readingTime: (frontmatter.readingTime as number) || Math.max(1, Math.ceil(content.split(/\s+/).length / 200)),
    coverImage: (frontmatter.coverImage as string) || null,
    featured: Boolean(frontmatter.featured),
    tags: (frontmatter.tags as readonly string[]) || [],
    metadata: frontmatter.metadata as BlogPostFrontmatter["metadata"],
  };

  return { frontmatter: completeFrontmatter, content };
}

export async function getAllPosts(): Promise<readonly BlogPostFrontmatter[]> {
  const slugs = await getBlogPostSlugs();
  const posts: BlogPostFrontmatter[] = [];

  for (const slug of slugs) {
    const post = await getPostBySlug(slug);
    if (post) {
      posts.push(post.frontmatter);
    }
  }

  return posts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

/**
 * ==============================================================================
 * CASE STUDY HELPERS (Canonical Route: /success-stories/[slug])
 * ==============================================================================
 */

export async function getCaseStudySlugs(): Promise<string[]> {
  if (!fs.existsSync(CASE_STUDIES_DIR)) return [];
  const entries = await fs.promises.readdir(CASE_STUDIES_DIR, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && (entry.name.endsWith(".mdx") || entry.name.endsWith(".md")))
    .map((entry) => entry.name.replace(/\.mdx?$/, ""));
}

export async function getCaseStudyBySlug(
  slug: string
): Promise<{ frontmatter: CaseStudyFrontmatter; content: string } | null> {
  const candidates = [
    path.join(CASE_STUDIES_DIR, `${slug}.mdx`),
    path.join(CASE_STUDIES_DIR, `${slug}.md`),
  ];

  let filePath: string | null = null;
  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) {
      filePath = candidate;
      break;
    }
  }

  if (!filePath) return null;

  const rawFile = await fs.promises.readFile(filePath, "utf-8");
  const { frontmatter, content } = parseFrontmatter<CaseStudyFrontmatter>(rawFile);

  const completeFrontmatter: CaseStudyFrontmatter = {
    slug,
    title: (frontmatter.title as string) || slug,
    client: (frontmatter.client as string) || null,
    category: (frontmatter.category as CaseStudyFrontmatter["category"]) || "funding",
    services: (frontmatter.services as readonly string[]) || [],
    summary: (frontmatter.summary as string) || "",
    challenge: (frontmatter.challenge as string) || "",
    solution: (frontmatter.solution as string) || "",
    process: (frontmatter.process as readonly string[]) || [],
    outcomes: (frontmatter.outcomes as readonly string[]) || [],
    statistics: (frontmatter.statistics as CaseStudyFrontmatter["statistics"]) || [],
    quote: frontmatter.quote as CaseStudyFrontmatter["quote"],
    publishedAt: (frontmatter.publishedAt as string) || new Date().toISOString().split("T")[0],
    featured: Boolean(frontmatter.featured),
    coverImage: (frontmatter.coverImage as string) || null,
    metadata: frontmatter.metadata as CaseStudyFrontmatter["metadata"],
  };

  return { frontmatter: completeFrontmatter, content };
}

export async function getAllCaseStudies(): Promise<readonly CaseStudyFrontmatter[]> {
  const slugs = await getCaseStudySlugs();
  const caseStudies: CaseStudyFrontmatter[] = [];

  for (const slug of slugs) {
    const study = await getCaseStudyBySlug(slug);
    if (study) {
      caseStudies.push(study.frontmatter);
    }
  }

  return caseStudies.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}
