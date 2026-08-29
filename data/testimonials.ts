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
    name: null, // Unverified in legacy records — kept null to preserve factual integrity
    role: "Managing Partner, Precision Engineering Unit",
    company: "Automotive Component Manufacturer (Noida)",
    image: null,
    service: "cgtmse-funding",
    verified: false,
    featured: true,
  },
  {
    id: "testimonial-iso-1",
    quote:
      "The documentation support for our ISO 9001:2015 certification was methodical. The gap analysis highlighted shop-floor tracking deficiencies that improved our audit score and qualification for B2B procurement tenders.",
    name: null, // Unverified in legacy records
    role: "Operations Director",
    company: "Industrial Fabrication Works",
    image: null,
    service: "iso-certification",
    verified: false,
    featured: true,
  },
  {
    id: "testimonial-pmegp-1",
    quote:
      "Navigating the PMEGP portal, district screening committee, and bank branch margin money lock-in requires precise knowledge of the scheme guidelines. Agnivridhi assisted our food processing unit step-by-step.",
    name: null, // Unverified in legacy records
    role: "Founder & Proprietor",
    company: "Agro Food Processing Enterprise",
    image: null,
    service: "pmegp-loan-subsidy",
    verified: false,
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
