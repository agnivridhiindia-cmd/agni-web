import type { ServiceCategory } from "@/types/service";

/**
 * ==============================================================================
 * AGNIVRIDHI INDIA   -   SINGLE SOURCE OF TRUTH (DATA ARCHITECTURE)
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
  readonly credentials?: readonly string[];
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
    legalName: "Agnivridhi India Business Solutions",
    tagline: "Aapke Business Ki Udaan, Humare Saath",
    shortDescription:
      "One-stop enterprise growth platform for MSMEs and Startups   -   Funding, Compliance, Tech & Marketing.",
    longDescription:
      "Agnivridhi India empowers emerging and established enterprises with sovereign debt syndication (CGTMSE, PMEGP, MUDRA), statutory compliance certifications, bespoke software engineering, and high-performance B2B marketing.",
    foundedYear: 2020,
    location: {
      city: "Noida",
      state: "Uttar Pradesh",
      country: "India",
    },
    businessCategory: "MSME Growth & Technology Consulting",
    serviceCategories: ["funding", "compliance", "digital", "it"],
  },

  contact: {
    phone: "+91 92895 55190",
    email: "info@agnivridhiindia.com",
    whatsapp: null,
    address: {
      street: "B-750, Tower-B, IThum, Sector 62, Near Noida Electronic City Metro Station",
      city: "Noida",
      state: "Uttar Pradesh",
      postalCode: "201301",
      country: "India",
    },
    businessHours: {
      days: "Monday   -   Saturday",
      hours: "09:30 AM   -   06:30 PM IST",
      timezone: "Asia/Kolkata",
    },
  },

  socials: {
    linkedin: "https://linkedin.com/company/agnivridhiindia",
    instagram: null,
    facebook: "https://facebook.com/agnivridhiindia",
    youtube: null,
    twitter: "https://twitter.com/agnivridhiindia",
  },

  stats: {
    maxGuaranteeSanction: {
      id: "max-guarantee-sanction",
      label: "Max Collateral-Free Cover",
      value: "5",
      numericValue: 5,
      prefix: "\u20B9",
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
      suffix: " Desks",
      description: "Funding, Compliance, Technology & Digital Marketing desks",
      verified: true,
      featured: false,
    },
    programsCovered: {
      id: "programs-covered",
      label: "Regulatory Programs",
      value: "24",
      numericValue: 24,
      suffix: "+ Schemes",
      description: "Central, state subsidies, statutory certifications & software architectures",
      verified: true,
      featured: false,
    },
    fundingFacilitated: {
      id: "funding-facilitated",
      label: "Funding Facilitated",
      value: "200",
      numericValue: 200,
      prefix: "\u20B9",
      suffix: " Cr+",
      description: "Total funding secured for clients through strategic advisory support",
      verified: true,
      featured: false,
    },
    businessesSupported: {
      id: "businesses-supported",
      label: "Enterprises Assisted",
      value: "500",
      numericValue: 500,
      suffix: "+",
      description: "MSMEs, manufacturing plants, and tech startups scaled across India",
      verified: true,
      featured: false,
    },
    yearsOfExperience: {
      id: "years-experience",
      label: "Years of Advisory",
      value: "5",
      numericValue: 5,
      suffix: "+ Years",
      description: "Specialized consultancy across Indian regulatory & tech ecosystems",
      verified: true,
      featured: false,
    },
    clientsServed: {
      id: "clients-served",
      label: "Active Clients",
      value: "500",
      numericValue: 500,
      suffix: "+",
      description: "Businesses actively engaged in recurring compliance, tech & financing",
      verified: true,
      featured: false,
    },
    certificationsProjects: {
      id: "certifications-projects",
      label: "Compliance Deliveries",
      value: "1000",
      numericValue: 1000,
      suffix: "+",
      description: "ISO, GST, MSME, and web/software deployments delivered",
      verified: true,
      featured: false,
    },
  },

  founder: {
    name: "Rahul Kumar Singh",
    role: "Founder & Managing Director",
    specialty: "Institutional Leadership, Project Debt & Tech Enablement",
    shortBio:
      "Visionary entrepreneur featured in Asia Connect, Success, Brandz, and CEO India. Rahul created Agnivridhi India to bridge the gap between capital access, statutory compliance, and cutting-edge software architecture for Indian enterprises.",
    fullBio:
      "Recognized across leading national business publications as a young visionary building sustainable growth pathways for MSMEs, Rahul transformed Agnivridhi from a boutique consultancy into a 360-degree enterprise scale engine. Under his leadership, the firm has facilitated   -  50+ Cr in collateral-free credit, structured hundreds of statutory certifications, and deployed modern digital platforms for Indian industry.",
    image: "/img/rahul-kumar-singh.jpg",
    linkedin: "https://linkedin.com/company/agnivridhiindia",
    credentials: [
      "Featured Visionary 2024",
      "MSME Advisory Specialist",
      "Project Debt Architect",
    ],
    quote:
      "Aapke Business Ki Udaan, Humare Saath. Real enterprise scale requires a synchronized trifecta: sovereign capital leverage, unshakeable statutory compliance, and modern technological supremacy.",
    directives: [
      "Uncompromising ethical rigor in every bank and government filing",
      "One-stop convergence: capital, compliance, technology, and marketing",
      "Empowering Indian MSMEs with sovereign non-collateral capital and modern software",
    ],
    recognition: [
      {
        title: "Platform for Growth and Possibility",
        issuer: "Asia Connect Magazine",
        year: 2024,
      },
      {
        title: "Creating Opportunities Through Vision",
        issuer: "Success Magazine",
        year: 2024,
      },
      {
        title: "A Young Visionary Building Pathways",
        issuer: "Brandz Magazine",
        year: 2024,
      },
      {
        title: "Transforming Ambition into Action",
        issuer: "CEO India Magazine",
        year: 2024,
      },
    ],
    milestones: [
      "500+ MSMEs funded and enabled across India",
      "  -  50+ Cr in cumulative project loans and subsidies unlocked",
      "Quad-desk operational scaling: Funding, Compliance, Tech & Marketing",
    ],
  },

  // Authentic verified national magazine features with live URLs and local publication logos
  recognition: [
    {
      id: "asia-connect-magazine",
      publicationOrOrg: "Asia Connect Magazine",
      title: "Rahul Kumar Singh   -   Building Agnivridhi India as a Platform for Growth and Possibility",
      type: "magazine",
      year: 2024,
      url: "https://asiaconnectmagazine.com/rahul-kumar-singh-building-agnivridhi-india-as-a-platform-for-growth-and-possibility/",
      logoImage: "/img/asiaconnect.png",
      description:
        "Cover feature on democratizing sovereign debt guarantees, regulatory compliance, and digital software infrastructure for Indian MSMEs.",
      verified: true,
      featured: true,
    },
    {
      id: "success-magazine",
      publicationOrOrg: "Success Magazine",
      title: "Rahul Kumar Singh   -   Creating Opportunities Through Vision and Responsibility",
      type: "magazine",
      year: 2024,
      url: "https://successmagazine.in/rahul-kumar-singh-creating-opportunities-through-vision-and-responsibility/",
      logoImage: "/img/successmagazine.png",
      description:
        "In-depth profile on pioneering a one-stop ecosystem combining project finance with enterprise technology and brand marketing.",
      verified: true,
      featured: true,
    },
    {
      id: "brandz-magazine",
      publicationOrOrg: "Brandz Magazine",
      title: "Rahul Kumar Singh: A Young Visionary Building Pathways for Sustainable Growth",
      type: "magazine",
      year: 2024,
      url: "https://brandzmagazine.com/rahul-kumar-singh-a-young-visionary-building-pathways-for-sustainable-growth/",
      logoImage: "/img/brandzmagazine.png",
      description:
        "Feature story examining how Agnivridhi eliminates predatory middlemen in credit syndication and unlocks non-collateral capital.",
      verified: true,
      featured: true,
    },
    {
      id: "ceo-india-magazine",
      publicationOrOrg: "CEO India Magazine",
      title: "Rahul Kumar Singh   -   Transforming Ambition into Action Through Agnivridhi India",
      type: "magazine",
      year: 2024,
      url: "https://ceoindiamagazine.com/rahul-kumar-singh-transforming-ambition-into-action-through-agnivridhi-india/",
      logoImage: "/img/ceoindiamagazine.png",
      description:
        "Executive interview on building institutional trust with scheduled commercial banks and engineering modern web platforms.",
      verified: true,
      featured: true,
    },
    {
      id: "business-matters",
      publicationOrOrg: "Business Matters",
      title: "Rahul Kumar Singh   -   Building a Future of Confidence, Clarity and Responsible Growth",
      type: "press",
      year: 2024,
      url: "https://businessmatters.in/rahul-kumar-singh-building-a-future-of-confidence-clarity-and-responsible-growth/",
      logoImage: "/img/businessmattersmagazine.png",
      description:
        "Sector analysis on how Agnivridhi's synchronized advisory desks protect promoters from loan rejections and operational friction.",
      verified: true,
      featured: false,
    },
    {
      id: "founder-magazine",
      publicationOrOrg: "Founder Magazine",
      title: "Rahul Kumar Singh   -   Nurturing Growth Through Purpose-Driven Entrepreneurship",
      type: "press",
      year: 2024,
      url: "https://foundermagazine.in/rahul-kumar-singh-nurturing-growth-through-purpose-driven-entrepreneurship/",
      logoImage: "/img/foundermagazine.png",
      description:
        "Editorial spotlight on purpose-driven entrepreneurship, ethical governance, and next-generation software solutions for manufacturing units.",
      verified: true,
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
    siteUrl: "https://agnivridhiindia.com",
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
            label: "Digital Growth & Marketing",
            href: "/services#digital",
            category: "digital",
            description: "High-conversion web platforms, B2B performance marketing, and technical SEO.",
          },
          {
            label: "Technology & Software",
            href: "/services#it",
            category: "it",
            description: "Custom software, mobile apps, cloud DevOps, ERP & AI automation.",
          },
        ],
      },
      { label: "Case Studies", href: "/success-stories" },
      { label: "Insights", href: "/blog" },
      { label: "FAQ", href: "/faq" },
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
