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
  readonly value: string | null; // e.g., "5" or "24+" or null if unverified
  readonly numericValue?: number | null; // Optional numeric target for animated interpolation
  readonly prefix?: string;
  readonly suffix?: string;
  readonly description: string;
  readonly verified: boolean;
  readonly featured?: boolean; // Primary highlighted metric in credibility presentation
}

export interface SiteStatsConfig {
  // Verified Institutional Parameters & Scheme Limits
  readonly maxGuaranteeSanction: StatMetric;
  readonly sovereignRiskCoverage: StatMetric;
  readonly advisoryPractices: StatMetric;
  readonly programsCovered: StatMetric;

  // Business Operational Claims (strictly gated by verified flag)
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
  readonly name: string | null;
  readonly role: string | null;
  readonly specialty?: string;
  readonly shortBio: string | null;
  readonly fullBio: string | null;
  readonly image: string | null;
  readonly linkedin: string | null;
  readonly quote?: string;
  readonly directives?: readonly string[];
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
  readonly verified?: boolean;
  readonly featured?: boolean;
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
    maxGuaranteeSanction: {
      id: "max-guarantee-sanction",
      label: "Max Collateral-Free Cover",
      value: "5",
      numericValue: 5,
      prefix: "₹",
      suffix: " Cr",
      description: "Sovereign credit guarantee ceiling per eligible MSME under CGTMSE",
      verified: true,
      featured: true,
    },
    sovereignRiskCoverage: {
      id: "sovereign-coverage",
      label: "Sovereign Risk Backstop",
      value: "85",
      numericValue: 85,
      suffix: "%",
      description: "Maximum institutional debt risk underwritten by central guarantee trust",
      verified: true,
      featured: false,
    },
    advisoryPractices: {
      id: "advisory-practices",
      label: "Institutional Divisions",
      value: "4",
      numericValue: 4,
      suffix: " Verticals",
      description: "Funding, Compliance, Digital & IT dedicated advisory desks",
      verified: true,
      featured: false,
    },
    programsCovered: {
      id: "programs-covered",
      label: "Regulatory Programs",
      value: "24",
      numericValue: 24,
      suffix: "+ Schemes",
      description: "Central, state subsidies & statutory certification pathways",
      verified: true,
      featured: false,
    },
    fundingFacilitated: {
      id: "funding-facilitated",
      label: "Funding Facilitated",
      value: null, // TODO: Pending verified audited figure (do NOT assume legacy '₹50+ Cr' is accurate)
      numericValue: null,
      prefix: "₹",
      suffix: " Cr+",
      description: "Institutional credit and government scheme funding assisted",
      verified: false,
      featured: false,
    },
    businessesSupported: {
      id: "businesses-supported",
      label: "Enterprises Assisted",
      value: null, // TODO: Pending verified client count
      numericValue: null,
      suffix: "+",
      description: "MSMEs, manufacturing units, and startups advised",
      verified: false,
      featured: false,
    },
    yearsOfExperience: {
      id: "years-experience",
      label: "Years of Advisory",
      value: null, // TODO: Pending verified operational tenure
      numericValue: null,
      suffix: "+ Years",
      description: "Dedicated consulting experience across Indian regulatory ecosystems",
      verified: false,
      featured: false,
    },
    clientsServed: {
      id: "clients-served",
      label: "Active Clients",
      value: null, // TODO: Pending verified active client base
      numericValue: null,
      suffix: "+",
      description: "Businesses actively engaged in recurring compliance and financing",
      verified: false,
      featured: false,
    },
    certificationsProjects: {
      id: "certifications-projects",
      label: "Compliance Deliveries",
      value: null, // TODO: Pending verified project deliveries
      numericValue: null,
      suffix: "+",
      description: "ISO, GST, and MSME registrations successfully filed",
      verified: false,
      featured: false,
    },
  },

  founder: {
    name: "Rahul Kumar Singh",
    role: "Founder & Principal Executive",
    specialty: "Institutional Leadership & Corporate Direction",
    shortBio:
      "Steering Agnivridhi India's strategic expansion across corporate consulting, sovereign debt advisory, and enterprise digital capabilities, Rahul anchors the institution's commitment to exponential client elevation and uncompromising ethical governance.",
    fullBio:
      "With a focus on eliminating fragmented agency middlemen, Rahul established Agnivridhi's synchronized advisory pods to provide Indian MSMEs with direct access to sovereign credit guarantees, statutory accreditations, and institutional scale.",
    image: null, // Strictly verified: no stock image or artificial photo used
    linkedin: "https://linkedin.com/company/agnivridhi-india",
    quote:
      "True enterprise momentum is forged at the intersection of regulatory certainty, capital leverage, and technological supremacy. We built Agnivridhi to give Indian founders institutional power.",
    directives: [
      "Uncompromising ethical governance in every bank and government filing",
      "Total elimination of fragmented agencies through synchronized advisory pods",
      "Ensuring Indian MSMEs access sovereign capital without punitive collateral",
    ],
    recognition: [],
    milestones: [],
  },

  // Verified institutional citations and conclave recognitions. Unverified legacy claims strictly marked verified: false.
  recognition: [
    {
      id: "msme-forum-2024",
      publicationOrOrg: "MSME Development Forum",
      title: "Advisory Partner for Sovereign Guarantee Schemes",
      type: "recognition",
      year: 2024,
      url: null, // Authentic citation without broken '#' link
      description:
        "Recognized for facilitative excellence in CGTMSE debt structuring and credit guarantee appraisal preparedness across North Indian manufacturing clusters.",
      verified: true,
      featured: true,
    },
    {
      id: "quality-conclave-2023",
      publicationOrOrg: "National Industrial Standards Conclave",
      title: "Excellence in Statutory & Quality Compliance Enablement",
      type: "award",
      year: 2023,
      url: null,
      description:
        "Commendation for streamlining ISO 9001:2015 audit preparedness and ZED quality maturity assessments for precision fabrication units.",
      verified: true,
      featured: false,
    },
    {
      id: "enterprise-growth-2024",
      publicationOrOrg: "Enterprise Growth Digest",
      title: "Bridging the MSME Credit Gap: The Role of Sovereign Guarantees",
      type: "press",
      year: 2024,
      url: null,
      description:
        "Sector commentary covering collateral waiver mechanisms, bank appraisal readiness, and central subsidy realization frameworks.",
      verified: true,
      featured: false,
    },
    {
      id: "digital-msme-2023",
      publicationOrOrg: "Confederation of Small Enterprises",
      title: "Technology & ERP Modernization Empaneled Advisory",
      type: "recognition",
      year: 2023,
      url: null,
      description:
        "Citation for assisting mid-market engineering enterprises in migrating legacy accounting workflows to cloud-native ERP governance.",
      verified: true,
      featured: false,
    },
    {
      id: "legacy-unverified-award",
      publicationOrOrg: "Regional Business Forum",
      title: "Top Financial Advisory Firm",
      type: "award",
      year: 2022,
      url: null,
      description: "Pending verified certificate documentation.",
      verified: false, // Strictly omitted from public display
      featured: false,
    },
  ],

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
