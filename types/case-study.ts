import type { ServiceCategory } from "./service";

export interface CaseStudyStatistic {
  readonly label: string;
  readonly value: string;
  readonly context?: string;
}

export interface CaseStudyQuote {
  readonly text: string;
  readonly author?: string | null;
  readonly role?: string | null;
}

export interface CaseStudyFrontmatter {
  readonly slug: string; // Lowercase kebab-case matching /success-stories/[slug]
  readonly title: string;
  readonly client: string | null; // e.g. "Precision Auto Components Manufacturer" or null if confidential
  readonly category: ServiceCategory;
  readonly services: readonly string[]; // Related service slugs
  readonly summary: string;
  readonly challenge: string;
  readonly solution: string;
  readonly process?: readonly string[];
  readonly outcomes: readonly string[];
  readonly statistics?: readonly CaseStudyStatistic[];
  readonly statValue?: string;
  readonly statLabel?: string;
  readonly statContext?: string;
  readonly quote?: CaseStudyQuote;
  readonly publishedAt: string; // ISO date string
  readonly featured?: boolean;
  readonly coverImage?: string | null;
  readonly metadata?: {
    readonly title?: string;
    readonly description?: string;
  };
}

// Backwards compatibility alias if needed
export type CaseStudy = CaseStudyFrontmatter;
