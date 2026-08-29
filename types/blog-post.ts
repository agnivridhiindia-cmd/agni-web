export interface BlogAuthor {
  readonly name: string;
  readonly role: string;
  readonly avatar?: string;
}

export interface BlogPost {
  readonly slug: string;
  readonly title: string;
  readonly excerpt: string;
  readonly publishedAt: string;
  readonly author: BlogAuthor;
  readonly category: string;
  readonly tags: readonly string[];
  readonly readingTimeMinutes: number;
  readonly featured?: boolean;
}
