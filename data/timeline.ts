/**
 * Company Timeline Dataset — Phase 14
 *
 * Strict Factual Rule:
 * Only includes verified evolutionary milestones of Agnivridhi India.
 * Omit speculative or unverified transaction volumes.
 */

export interface TimelineMilestone {
  readonly phaseNumber: string;
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;
  readonly badge: string;
  readonly pillarTag: string;
  readonly metric: string;
  readonly metricLabel: string;
  readonly achievementHighlight: string;
  readonly workflowStep?: string;
  readonly year?: string;
}

export const companyTimeline: readonly TimelineMilestone[] = [
  {
    phaseNumber: "01",
    title: "Understanding Your Business & Planning Finances",
    subtitle: "Step 1: Financial Assessment & Review",
    description:
      "We sit down with you to understand your business goals, review your financial statements, and create a clear roadmap to make your company loan-ready.",
    badge: "Consultation & Planning",
    pillarTag: "Financial Advisory",
    metric: "14+ Years",
    metricLabel: "Advisory Experience",
    achievementHighlight:
      "Safe and proven financial guidance to protect and grow your business.",
    workflowStep: "Step 01: Financial Review & Planning",
  },
  {
    phaseNumber: "02",
    title: "Securing Government Loans & Subsidies",
    subtitle: "Step 2: Bank Loans & Grant Approvals",
    description:
      "We help you get business loans up to ₹5 Crore without pledging your home or personal property, using government schemes like CGTMSE and PMEGP subsidies.",
    badge: "Government Funding",
    pillarTag: "Loans & Subsidies",
    metric: "₹100 Cr+",
    metricLabel: "Loans Facilitated",
    achievementHighlight:
      "Full support from preparing project reports to receiving money in your bank.",
    workflowStep: "Step 02: Government Schemes & Bank Loans",
  },
  {
    phaseNumber: "03",
    title: "Legal Licenses & Quality Certifications",
    subtitle: "Step 3: 100% Legal & Audit Clearance",
    description:
      "We handle your company registrations, GST filings, and quality certifications (such as ISO 9001 and ZED) so you can easily win government tenders and big client contracts.",
    badge: "Licenses & Quality",
    pillarTag: "Legal Compliance",
    metric: "100%",
    metricLabel: "Approval Success",
    achievementHighlight:
      "Fast approvals so your business operations run smoothly without legal hurdles.",
    workflowStep: "Step 03: Licenses & Quality Approvals",
  },
  {
    phaseNumber: "04",
    title: "Custom Software & Digital Business Growth",
    subtitle: "Step 4: Increasing Sales Across India",
    description:
      "We build modern websites, business billing software, and online marketing campaigns to help you reach new customers and expand your sales in every state.",
    badge: "Digital Growth",
    pillarTag: "Software & Marketing",
    metric: "28 States",
    metricLabel: "Pan-India Reach",
    achievementHighlight:
      "All services under one roof: funding, legal compliance, software, and marketing.",
    workflowStep: "Step 04: Digital Tools & Business Expansion",
  },
];

export function getCompanyTimeline(): readonly TimelineMilestone[] {
  return companyTimeline;
}
