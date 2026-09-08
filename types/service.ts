/**
 * Strict category union for Agnivridhi India services.
 * Arbitrary strings are strictly prohibited.
 */
export type ServiceCategory = "funding" | "compliance" | "digital" | "it";

export interface ServiceCategoryMeta {
  readonly id: ServiceCategory;
  readonly name: string;
  readonly shortDescription: string;
  readonly icon: string;
}

export interface ServiceProcessStep {
  readonly step: number;
  readonly title: string;
  readonly description: string;
}

export interface ServiceFaq {
  readonly question: string;
  readonly answer: string;
}

export interface ServiceDealSummary {
  readonly maxLimit: string;
  readonly collateral: string;
  readonly turnaround: string;
  readonly checklistDocName?: string;
  readonly eligibility?: string;
}

export interface Service {
  readonly id: string;
  readonly slug: string; // Predictable lowercase kebab-case (e.g., "cgtmse-funding")
  readonly name: string;
  readonly shortDescription: string;
  readonly description: string;
  readonly category: ServiceCategory;
  readonly icon: string; // Lucide icon identifier
  readonly audience: readonly string[];
  readonly benefits: readonly string[];
  readonly process: readonly ServiceProcessStep[];
  readonly timeline?: string | null;
  readonly faqs?: readonly ServiceFaq[];
  readonly relatedServices?: readonly string[]; // Array of related service slugs
  readonly featured?: boolean;
  readonly schemeCeiling?: string;
  readonly dealSummary?: ServiceDealSummary;
  readonly metadata?: {
    readonly title?: string;
    readonly description?: string;
  };
}
