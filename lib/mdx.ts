import fs from "node:fs";
import path from "node:path";
import type { BlogPostFrontmatter } from "@/types/blog-post";
import type { CaseStudyFrontmatter } from "@/types/case-study";

const CONTENT_DIR = path.join(process.cwd(), "content");
const BLOG_DIR = path.join(CONTENT_DIR, "blog");
const CASE_STUDIES_DIR = path.join(CONTENT_DIR, "case-studies");

/**
 * Lightweight, safe frontmatter parser.
 * Extracts standard YAML key-value pairs, nested objects, and arrays from MDX/Markdown files without bloated dependencies.
 */
function parseFrontmatter<T>(rawContent: string): { frontmatter: Partial<T>; content: string } {
  const normalized = rawContent.replace(/^\uFEFF/, "").replace(/\r\n/g, "\n");
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
  let currentObject: Record<string, unknown> | null = null;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const isIndented = line.startsWith("  ") || line.startsWith("\t");

    // Array item handling (e.g. "  - item")
    if (trimmed.startsWith("- ") && currentKey) {
      if (!currentArray) {
        currentArray = [];
        frontmatter[currentKey] = currentArray;
      }
      currentArray.push(trimmed.replace(/^- /, "").trim().replace(/^['"](.*)['"]$/, "$1"));
      continue;
    }

    const colonIndex = trimmed.indexOf(":");
    if (colonIndex !== -1) {
      const key = trimmed.slice(0, colonIndex).trim();
      const value = trimmed.slice(colonIndex + 1).trim();

      // Clean value quotes and booleans/numbers
      let parsedVal: unknown = value.replace(/^['"](.*)['"]$/, "$1");
      if (value === "true") parsedVal = true;
      else if (value === "false") parsedVal = false;
      else if (value === "null") parsedVal = null;
      else if (/^\d+$/.test(value)) parsedVal = Number.parseInt(value, 10);
      else if (/^\d+\.\d+$/.test(value)) parsedVal = Number.parseFloat(value);

      if (isIndented && currentKey && !currentArray) {
        // Nested object property (e.g. author.name, quote.text)
        if (!currentObject) {
          currentObject = {};
          frontmatter[currentKey] = currentObject;
        }
        currentObject[key] = parsedVal;
      } else if (value === "") {
        // Start of a new block (array or object)
        currentKey = key;
        currentArray = null;
        currentObject = null;
      } else {
        currentKey = null;
        currentArray = null;
        currentObject = null;
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
    if (fs.existsSync(/*turbopackIgnore: true*/ candidate)) {
      filePath = candidate;
      break;
    }
  }

  if (!filePath) return null;

  const rawFile = await fs.promises.readFile(/*turbopackIgnore: true*/ filePath, "utf-8");
  const { frontmatter, content } = parseFrontmatter<BlogPostFrontmatter>(rawFile);

  const parsedAuthor =
    frontmatter.author && typeof frontmatter.author === "object" && "name" in frontmatter.author
      ? (frontmatter.author as BlogPostFrontmatter["author"])
      : {
          name: "Agnivridhi Advisory Desk",
          role: "Editorial Practice",
          avatar: null,
        };

  const completeFrontmatter: BlogPostFrontmatter = {
    slug,
    title: (frontmatter.title as string) || slug,
    excerpt: (frontmatter.excerpt as string) || "",
    category: (frontmatter.category as string) || "General",
    author: parsedAuthor,
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
 * Retrieves related blog posts for an article detail page, prioritizing matching category and excluding the current slug.
 */
export async function getRelatedPosts(
  currentSlug: string,
  category?: string,
  limit = 2
): Promise<readonly BlogPostFrontmatter[]> {
  const allPosts = await getAllPosts();
  const candidates = allPosts.filter((post) => post.slug !== currentSlug);

  if (category) {
    const sameCategory = candidates.filter((post) => post.category.toLowerCase() === category.toLowerCase());
    const otherCategory = candidates.filter((post) => post.category.toLowerCase() !== category.toLowerCase());
    return [...sameCategory, ...otherCategory].slice(0, limit);
  }

  return candidates.slice(0, limit);
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

const CASE_STUDY_ALIASES: Record<string, string> = {
  "cgtmse-cnc-expansion": "cgtmse-george-martin-jose",
  "heavy-fabrication-iso-compliance": "cgtmse-goldi-kirana",
  "george-martin-jose": "cgtmse-george-martin-jose",
  "pal-and-sons": "pmegp-agro-food-processing",
  "pal-and-sons-agro": "pmegp-agro-food-processing",
  "goldi-kirana": "cgtmse-goldi-kirana",
  "goldi-kirana-store": "cgtmse-goldi-kirana",
};

export async function getCaseStudyBySlug(
  slug: string
): Promise<{ frontmatter: CaseStudyFrontmatter; content: string } | null> {
  const resolvedSlug = CASE_STUDY_ALIASES[slug] || slug;
  const candidates = [
    path.join(CASE_STUDIES_DIR, `${resolvedSlug}.mdx`),
    path.join(CASE_STUDIES_DIR, `${resolvedSlug}.md`),
  ];

  let filePath: string | null = null;
  for (const candidate of candidates) {
    if (fs.existsSync(/*turbopackIgnore: true*/ candidate)) {
      filePath = candidate;
      break;
    }
  }

  if (!filePath) return null;

  const rawFile = await fs.promises.readFile(/*turbopackIgnore: true*/ filePath, "utf-8");
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
    statistics:
      (frontmatter.statistics as CaseStudyFrontmatter["statistics"])?.length
        ? (frontmatter.statistics as CaseStudyFrontmatter["statistics"])
        : frontmatter.statValue && frontmatter.statLabel
        ? [
            {
              value: frontmatter.statValue as string,
              label: frontmatter.statLabel as string,
              context: frontmatter.statContext as string | undefined,
            },
          ]
        : [],
    statValue: frontmatter.statValue as string | undefined,
    statLabel: frontmatter.statLabel as string | undefined,
    statContext: frontmatter.statContext as string | undefined,
    dealTombstone: frontmatter.dealTombstone as CaseStudyFrontmatter["dealTombstone"],
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

/**
 * Retrieves curated featured case studies for homepage and highlight surfaces.
 * Prioritizes stories explicitly flagged with `featured: true`.
 */
export async function getFeaturedCaseStudies(limit = 3): Promise<readonly CaseStudyFrontmatter[]> {
  const allStudies = await getAllCaseStudies();
  const featured = allStudies.filter((study) => study.featured);
  const regular = allStudies.filter((study) => !study.featured);
  return [...featured, ...regular].slice(0, limit);
}

/**
 * Retrieves related case studies for a detail page, prioritizing matching category and excluding the current slug.
 */
export async function getRelatedCaseStudies(
  currentSlug: string,
  category?: string,
  limit = 2
): Promise<readonly CaseStudyFrontmatter[]> {
  const allStudies = await getAllCaseStudies();
  const candidates = allStudies.filter((study) => study.slug !== currentSlug);

  if (category) {
    const sameCategory = candidates.filter((study) => study.category === category);
    const otherCategory = candidates.filter((study) => study.category !== category);
    return [...sameCategory, ...otherCategory].slice(0, limit);
  }

  return candidates.slice(0, limit);
}
