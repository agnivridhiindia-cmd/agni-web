export type ServiceCategory =
  | "government-funding"
  | "compliance-certifications"
  | "digital-transformation";

export interface ServiceKeyBenefit {
  readonly title: string;
  readonly description: string;
}

export interface ServiceEligibilityItem {
  readonly criteria: string;
  readonly notes?: string;
}

export interface ServiceProcessStep {
  readonly stepNumber: number;
  readonly title: string;
  readonly description: string;
}

export interface Service {
  readonly slug: string;
  readonly title: string;
  readonly shortDescription: string;
  readonly category: ServiceCategory;
  readonly summary: string;
  readonly keyBenefits: readonly ServiceKeyBenefit[];
  readonly eligibility?: readonly ServiceEligibilityItem[];
  readonly process?: readonly ServiceProcessStep[];
  readonly deliverables?: readonly string[];
  readonly featured?: boolean;
}
