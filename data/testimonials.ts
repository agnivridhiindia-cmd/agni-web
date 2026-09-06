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
    id: "testimonial-george-martin",
    quote:
      "Secured collateral-free capital under the CGTMSE scheme to expand operations, improve working capital cycles, and streamline bank compliance. The team's institutional underwriting defense was flawless.",
    name: "George Martin Jose",
    role: "Promoter & Managing Director",
    company: "Precision Engineering & Manufacturing",
    image: "/img/testimonial-1.jpg",
    service: "cgtmse-funding",
    verified: true,
    featured: true,
  },
  {
    id: "testimonial-vishwam-pandya",
    quote:
      "Agnivridhi helped us secure institutional financing while simultaneously architecting our corporate web platform. Having one partner handle both capital syndication and digital technology saved us months of fragmented agency delays.",
    name: "Vishwam Pandya",
    role: "Founder & Director",
    company: "Vishwam Pandya Enterprises",
    image: "/img/vishwam_enterprises.jpg",
    service: "web-development",
    verified: true,
    featured: true,
  },
  {
    id: "testimonial-pal-and-sons",
    quote:
      "End-to-end incorporation support, CMA financial modeling, and subsidy advisory. Agnivridhi structured our project reports to unlock essential capital for our agro-processing unit expansion.",
    name: "R. K. Pal",
    role: "Managing Director",
    company: "Pal & Sons Agro Pvt Ltd",
    image: "/img/pal_and_sons.png",
    service: "pmegp-loan-subsidy",
    verified: true,
    featured: true,
  },
  {
    id: "testimonial-aadhithya-energy",
    quote:
      "Designed and launched our modern web platform to establish instant credibility and local discovery in clean energy retail. Their technology team delivered speed, polish, and seamless mobile responsiveness.",
    name: "Aadhithya K.",
    role: "Managing Partner",
    company: "Aadhithya Energy & Fuel Retail",
    image: "/img/aaditthya_filling_station.png",
    service: "custom-software",
    verified: true,
    featured: true,
  },
  {
    id: "testimonial-iso-1",
    quote:
      "The documentation support for our ISO 9001:2015 certification was methodical. The gap analysis highlighted shop-floor tracking deficiencies that improved our audit score and qualification for B2B procurement tenders.",
    name: "Rajesh Varma",
    role: "Director of Operations",
    company: "Varma Heavy Structural Fabrication",
    image: null,
    service: "iso-certification",
    verified: true,
    featured: false,
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
