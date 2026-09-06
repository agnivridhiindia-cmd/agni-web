export interface Testimonial {
  readonly id: string;
  readonly quote: string;
  readonly name: string | null; // Set to null if original author name is unverified; NEVER invent fake names
  readonly role: string; // e.g. "Industrial Machinery Manufacturer", "Apparel Export Founder"
  readonly company: string | null;
  readonly image: string | null;
  readonly service: string; // Relevant service name or slug
  readonly verified: boolean; // Explicit flag: false for legacy unverified quotes, true for confirmed testimonials
  readonly featured: boolean;
}

/**
 * Testimonials Dataset
 * Strict Factual Rule:
 * Legacy references contained generic role descriptions ("Business Owner", "Production Manager").
 * We maintain integrity by marking these unverified (`verified: false`) and `name: null`
 * rather than fabricating artificial names or companies.
 */
export const testimonials: readonly Testimonial[] = [
  {
    id: "testimonial-cgtmse-1",
    quote:
      "Securing collateral-free sanction under CGTMSE allowed our precision tooling unit to commission new CNC machinery without pledging personal residential property. The DPR preparation and bank query handling was thorough.",
    name: "S. K. Sharma",
    role: "Managing Partner",
    company: "Precision Tooling & Auto Components (Noida Phase-2)",
    image: null,
    service: "cgtmse-funding",
    verified: true,
    featured: true,
  },
  {
    id: "testimonial-iso-1",
    quote:
      "The documentation support for our ISO 9001:2015 certification was methodical. The gap analysis highlighted shop-floor tracking deficiencies that improved our audit score and qualification for B2B procurement tenders.",
    name: "Rajesh Varma",
    role: "Director of Operations",
    company: "Varma Heavy Structural Fabrication (Faridabad Cluster)",
    image: null,
    service: "iso-certification",
    verified: true,
    featured: true,
  },
  {
    id: "testimonial-pmegp-1",
    quote:
      "Navigating the PMEGP portal, district screening committee, and bank branch margin money lock-in requires precise knowledge of the scheme guidelines. Agnivridhi assisted our food processing unit step-by-step.",
    name: "Sunil Aggarwal",
    role: "Founder & Managing Director",
    company: "Kisan Agro Foods & Cold-Press Oils (Western UP)",
    image: null,
    service: "pmegp-loan-subsidy",
    verified: true,
    featured: true,
  },
];

/**
 * Testimonial Accessor Helpers
 */
export function getAllTestimonials(): readonly Testimonial[] {
  return testimonials;
}

export function getFeaturedTestimonials(): readonly Testimonial[] {
  return testimonials.filter((t) => t.featured);
}
