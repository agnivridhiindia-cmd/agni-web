/**
 * Company Timeline Dataset — Phase 14
 *
 * Strict Factual Rule:
 * Only includes verified evolutionary milestones of Agnivridhi India.
 * Omit speculative or unverified transaction volumes.
 */

export interface TimelineMilestone {
  readonly year: string;
  readonly phaseNumber: string;
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;
  readonly badge: string;
  readonly pillarTag: string;
}

export const companyTimeline: readonly TimelineMilestone[] = [
  {
    year: "2011",
    phaseNumber: "01",
    title: "Foundational Corporate Advisory",
    subtitle: "Strategic Restructuring & Capital Advisory",
    description:
      "Established in Delhi NCR to provide Indian enterprises with institutional-grade management consulting, capital restructuring, and debt advisory frameworks.",
    badge: "Origin",
    pillarTag: "Corporate Advisory",
  },
  {
    year: "2016",
    phaseNumber: "02",
    title: "Debt Syndication & Scheme Integration",
    subtitle: "Unlocking Sovereign Credit Guarantee Windows",
    description:
      "Formalized dedicated debt syndication desks focused on unlocking collateral-free bank sanctions under the CGTMSE credit guarantee trust and central PMEGP subsidy mechanisms.",
    badge: "Expansion",
    pillarTag: "Sovereign Debt",
  },
  {
    year: "2020",
    phaseNumber: "03",
    title: "Modernization & Technology Practice",
    subtitle: "Enterprise Software & Compliance Automation",
    description:
      "Expanded capability suite into custom enterprise software, cloud-native ERP workflows, and digital compliance platforms in response to evolving regulatory digitization.",
    badge: "Modernization",
    pillarTag: "Digital Systems",
  },
  {
    year: "2024",
    phaseNumber: "04",
    title: "Full-Stack Multi-Pillar Convergence",
    subtitle: "Four Unified Practices Under One Institutional Roof",
    description:
      "Synchronized all practices—Funding, Compliance, Digital, and Custom IT—into multidisciplinary advisory pods operating from corporate headquarters at Sector 62, Noida.",
    badge: "Institutional Scale",
    pillarTag: "Integrated Pods",
  },
];

export function getCompanyTimeline(): readonly TimelineMilestone[] {
  return companyTimeline;
}
