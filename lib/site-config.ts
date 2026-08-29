export interface NavigationItem {
  readonly title: string;
  readonly href: string;
  readonly description?: string;
}

export interface SocialLinks {
  readonly linkedin?: string;
  readonly twitter?: string;
  readonly facebook?: string;
  readonly instagram?: string;
  readonly youtube?: string;
}

export interface ContactDetails {
  readonly email: string;
  readonly phone: string;
  readonly address: {
    readonly street: string;
    readonly city: string;
    readonly state: string;
    readonly country: string;
    readonly postalCode: string;
  };
}

export interface SiteConfig {
  readonly name: string;
  readonly legalName: string;
  readonly description: string;
  readonly url: string;
  readonly ogImage: string;
  readonly location: {
    readonly city: string;
    readonly state: string;
    readonly country: string;
  };
  readonly primaryBusinessAreas: readonly string[];
  readonly mainNav: readonly NavigationItem[];
  readonly contact: ContactDetails;
  readonly social: SocialLinks;
}

/**
 * Single source of truth for Agnivridhi India website metadata and business details.
 * NOTE: Unverified business facts are marked with explicit TODO comments and typed placeholders.
 * Do NOT hardcode contact info, addresses, or statistics in UI components.
 */
export const siteConfig: SiteConfig = {
  name: "Agnivridhi India",
  legalName: "Agnivridhi India", // TODO: Confirm registered legal entity name (LLP/Pvt Ltd/Proprietorship)
  description:
    "MSME and startup business consulting firm based in Noida, India. Empowering enterprises with government funding assistance, compliance certifications, and digital transformation.",
  url: "https://agnivridhi.com", // TODO: Confirm official production domain
  ogImage: "/og-image.jpg",
  location: {
    city: "Noida",
    state: "Uttar Pradesh",
    country: "India",
  },
  primaryBusinessAreas: [
    "Government & Business Funding Assistance",
    "CGTMSE",
    "MUDRA",
    "PMEGP",
    "GST & Tax Advisory",
    "MSME / Udyam Registration",
    "ISO & Compliance Certifications",
    "Web Development",
    "Digital Marketing",
    "Custom Software & IT Services",
  ],
  mainNav: [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Success Stories", href: "/success-stories" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
  ],
  contact: {
    // Verified location is Noida, India. Specific phone, email, and street address pending client confirmation.
    email: "TODO: info@agnivridhi.com",
    phone: "TODO: +91-XXXXX-XXXXX",
    address: {
      street: "TODO: Specific Office Address",
      city: "Noida",
      state: "Uttar Pradesh",
      country: "India",
      postalCode: "TODO: 201301",
    },
  },
  social: {
    linkedin: undefined, // TODO: Add verified company LinkedIn URL
    twitter: undefined, // TODO: Add verified company X/Twitter URL
  },
};
