export interface BlogAuthor {
  readonly name: string;
  readonly role: string;
  readonly avatar?: string | null;
}

export interface BlogPostFrontmatter {
  readonly slug: string; // Lowercase kebab-case matching /blog/[slug]
  readonly title: string;
  readonly excerpt: string;
  readonly category: string;
  readonly author: BlogAuthor;
  readonly publishedAt: string; // ISO date string
  readonly updatedAt?: string | null;
  readonly readingTime: number; // In minutes
  readonly coverImage?: string | null;
  readonly featured?: boolean;
  readonly tags: readonly string[];
  readonly metadata?: {
    readonly title?: string;
    readonly description?: string;
  };
}

// Backwards compatibility alias
export type BlogPost = BlogPostFrontmatter;
