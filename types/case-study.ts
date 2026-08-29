export interface CaseStudyMetric {
  readonly label: string;
  readonly value: string;
  readonly detail?: string;
}

export interface CaseStudy {
  readonly slug: string;
  readonly title: string;
  readonly clientIndustry: string;
  readonly location: string;
  readonly serviceCategory: string;
  readonly challenge: string;
  readonly solution: string;
  readonly outcome: string;
  readonly metrics?: readonly CaseStudyMetric[];
  readonly publishedAt: string;
  readonly featured?: boolean;
}
