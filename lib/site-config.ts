import type { ServiceCategory } from "@/types/service";

/**
 * ==============================================================================
 * AGNIVRIDHI INDIA — SINGLE SOURCE OF TRUTH (DATA ARCHITECTURE)
 * ==============================================================================
 * This configuration is the single authoritative source of truth for company-wide
 * information across the entire website.
 *
 * Rules:
 * 1. Business information must never be hardcoded into UI components.
 * 2. Unverified facts MUST use `null` or explicit TODO markers; do NOT invent data.
 * 3. Exactly ONE canonical business address field exists (no conflicting addresses).
 * 4. Zero "#" placeholders in social links.
 * ==============================================================================
 */

export interface NavigationChildItem {
  readonly label: string;
  readonly href: string;
  readonly description?: string;
  readonly category?: ServiceCategory;
}

export interface NavigationItem {
  readonly label: string;
  readonly href: string;
  readonly description?: string;
  readonly children?: readonly NavigationChildItem[];
}

export interface CanonicalAddress {
  // Marked as requiring verification due to conflicting records in legacy material (Sector 62 vs Sector 2)
  readonly street: string | null;
  readonly city: string;
  readonly state: string;
  readonly postalCode: string | null;
  readonly country: string;
}

export interface BusinessHours {
  readonly days: string;
  readonly hours: string;
  readonly timezone: string;
}

export interface ContactConfig {
  readonly phone: string | null; // TODO: Official verified telephone line
  readonly email: string | null; // TODO: Official verified business email
  readonly whatsapp: string | null; // TODO: Official verified WhatsApp Business number
  readonly address: CanonicalAddress;
  readonly businessHours: BusinessHours | null;
}

export interface SocialLinksConfig {
  readonly linkedin: string | null; // TODO: Verified company LinkedIn URL
  readonly instagram: string | null; // Set to null until verified (no '#' placeholders)
  readonly facebook: string | null; // Set to null until verified
  readonly youtube: string | null; // Set to null until verified
  readonly twitter: string | null; // Set to null until verified
}

export interface StatMetric {
  readonly id: string;
  readonly label: string;
  readonly value: string | null; // e.g., "50+ Cr" once audited, or null if unverified
  readonly prefix?: string;
  readonly suffix?: string;
  readonly description: string;
  readonly verified: boolean;
}

export interface SiteStatsConfig {
  // Centralized metric stores: components must consume these rather than hardcoding numbers
  readonly fundingFacilitated: StatMetric;
  readonly businessesSupported: StatMetric;
  readonly yearsOfExperience: StatMetric;
  readonly clientsServed: StatMetric;
  readonly certificationsProjects: StatMetric;
}

export interface FounderRecognition {
  readonly title: string;
  readonly issuer: string;
  readonly year: number;
}

export interface FounderConfig {
  readonly name: string | null; // TODO: Verified founder name
  readonly role: string | null; // TODO: Verified title (e.g. "Founder & Managing Director")
  readonly shortBio: string | null;
  readonly fullBio: string | null;
  readonly image: string | null;
  readonly linkedin: string | null;
  readonly recognition: readonly FounderRecognition[];
  readonly milestones: readonly string[];
}

export type RecognitionType = "press" | "award" | "magazine" | "recognition" | "media";

export interface RecognitionItem {
  readonly id: string;
  readonly publicationOrOrg: string;
  readonly title: string;
  readonly type: RecognitionType;
  readonly year: number;
  readonly url: string | null; // Real URL only, never '#'
  readonly logoImage?: string | null;
  readonly description: string;
}

export interface SeoConfig {
  readonly siteTitle: string;
  readonly titleTemplate: string;
  readonly defaultDescription: string;
  readonly keywords: readonly string[];
  readonly ogImage: string;
  readonly siteUrl: string;
  readonly locale: string;
  readonly organization: {
    readonly name: string;
    readonly legalName?: string | null;
    readonly type: string;
    readonly addressLocality: string;
    readonly addressRegion: string;
    readonly addressCountry: string;
  };
}

export interface CompanyConfig {
  readonly name: string;
  readonly legalName: string | null; // TODO: Confirm registered legal entity name (Pvt Ltd/LLP)
  readonly tagline: string;
  readonly shortDescription: string;
  readonly longDescription: string;
  readonly foundedYear: number | null; // TODO: Confirm official incorporation year
  readonly location: {
    readonly city: string;
    readonly state: string;
    readonly country: string;
  };
  readonly businessCategory: string;
  readonly serviceCategories: readonly ServiceCategory[];
}

export interface MasterSiteConfig {
  readonly company: CompanyConfig;
  readonly contact: ContactConfig;
  readonly socials: SocialLinksConfig;
  readonly stats: SiteStatsConfig;
  readonly founder: FounderConfig;
  readonly recognition: readonly RecognitionItem[];
  readonly seo: SeoConfig;
  readonly navigation: {
    readonly mainNav: readonly NavigationItem[];
    readonly legalNav: readonly NavigationItem[];
  };

  // Top-level aliases for backwards compatibility with Phase 1 & 2 callers
  readonly name: string;
  readonly description: string;
  readonly url: string;
  readonly ogImage: string;
  readonly location: {
    readonly city: string;
    readonly state: string;
    readonly country: string;
  };
}

/**
 * Authoritative Master Configuration
 */
export const siteConfig: MasterSiteConfig = {
  company: {
    name: "Agnivridhi India",
    legalName: null, // TODO: Requires corporate registration certificate verification
    tagline: "Catalyzing Enterprise Scale & Growth",
    shortDescription:
      "MSME and startup business consulting firm based in Noida, India.",
    longDescription:
      "Agnivridhi India empowers emerging and established enterprises with government funding assistance, institutional debt facilitation, statutory compliance certifications, and transformative digital capabilities.",
    foundedYear: null, // TODO: Pending verification
    location: {
      city: "Noida",
      state: "Uttar Pradesh",
      country: "India",
    },
    businessCategory: "MSME Business Consulting",
    serviceCategories: ["funding", "compliance", "digital", "it"],
  },

  contact: {
    phone: null, // TODO: Official verified telephone line
    email: null, // TODO: Official verified primary contact email
    whatsapp: null, // TODO: Official verified WhatsApp Business contact
    address: {
      // Exactly ONE canonical business address field. Kept null to avoid repeating legacy conflicting addresses.
      street: null, // TODO: Requires verified physical office address (Sector 62 vs Sector 2 Noida)
      city: "Noida",
      state: "Uttar Pradesh",
      postalCode: null, // TODO: Verified pin code
      country: "India",
    },
    businessHours: null, // TODO: Verified operating hours
  },

  socials: {
    linkedin: null, // TODO: Add verified company LinkedIn URL
    instagram: null, // Unverified, kept null (no '#' placeholders)
    facebook: null,
    youtube: null,
    twitter: null,
  },

  stats: {
    fundingFacilitated: {
      id: "funding-facilitated",
      label: "Funding Facilitated",
      value: null, // TODO: Pending verified audited figure (do NOT assume legacy '₹50+ Cr' is accurate)
      prefix: "₹",
      suffix: " Cr+",
      description: "Institutional credit and government scheme funding assisted",
      verified: false,
    },
    businessesSupported: {
      id: "businesses-supported",
      label: "Enterprises Assisted",
      value: null, // TODO: Pending verified client count
      suffix: "+",
      description: "MSMEs, manufacturing units, and startups advised",
      verified: false,
    },
    yearsOfExperience: {
      id: "years-experience",
      label: "Years of Advisory",
      value: null, // TODO: Pending verified operational tenure
      suffix: "+ Years",
      description: "Dedicated consulting experience across Indian regulatory ecosystems",
      verified: false,
    },
    clientsServed: {
      id: "clients-served",
      label: "Active Clients",
      value: null, // TODO: Pending verified active client base
      suffix: "+",
      description: "Businesses actively engaged in recurring compliance and financing",
      verified: false,
    },
    certificationsProjects: {
      id: "certifications-projects",
      label: "Compliance Deliveries",
      value: null, // TODO: Pending verified project deliveries
      suffix: "+",
      description: "ISO, GST, and MSME registrations successfully filed",
      verified: false,
    },
  },

  founder: {
    name: null, // TODO: Pending verified founder details
    role: null, // TODO: Pending verified title
    shortBio: null,
    fullBio: null,
    image: null,
    linkedin: null,
    recognition: [],
    milestones: [],
  },

  // No fake or invented awards/press articles. Kept empty until verified documentation is provided.
  recognition: [],

  seo: {
    siteTitle: "Agnivridhi India | MSME & Startup Business Consulting",
    titleTemplate: "%s | Agnivridhi India",
    defaultDescription:
      "MSME and startup business consulting firm based in Noida, India. Empowering enterprises with government funding assistance, CGTMSE, MUDRA, PMEGP, ISO certifications, and digital services.",
    keywords: [
      "Agnivridhi India",
      "MSME consulting Noida",
      "CGTMSE collateral free loan",
      "PMEGP scheme assistance",
      "MUDRA loan consulting",
      "ISO certification Noida",
      "Udyam registration",
      "GST advisory Delhi NCR",
      "Startup funding consultant India",
    ],
    ogImage: "/og-image.jpg",
    siteUrl: "https://agnivridhi.com",
    locale: "en_IN",
    organization: {
      name: "Agnivridhi India",
      type: "ConsultingAgency",
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
  },

  navigation: {
    mainNav: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      {
        label: "Services",
        href: "/services",
        children: [
          {
            label: "Government Funding",
            href: "/services#funding",
            category: "funding",
            description: "CGTMSE, MUDRA, PMEGP, and institutional project debt.",
          },
          {
            label: "Compliance & Certifications",
            href: "/services#compliance",
            category: "compliance",
            description: "ISO 9001/14001, MSME Udyam, GST, and statutory advisory.",
          },
          {
            label: "Digital Transformation",
            href: "/services#digital",
            category: "digital",
            description: "Modern web development, SEO, and brand growth marketing.",
          },
          {
            label: "IT & Software Services",
            href: "/services#it",
            category: "it",
            description: "Custom software engineering, ERP solutions, and cloud systems.",
          },
        ],
      },
      { label: "Success Stories", href: "/success-stories" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
    legalNav: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Disclaimer", href: "/disclaimer" },
    ],
  },

  // Backwards compatibility accessors for Phase 1 & 2 UI consumers
  get name() {
    return this.company.name;
  },
  get description() {
    return this.company.shortDescription;
  },
  get url() {
    return this.seo.siteUrl;
  },
  get ogImage() {
    return this.seo.ogImage;
  },
  get location() {
    return this.company.location;
  },
};
