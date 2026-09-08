import type { Service, ServiceCategory, ServiceCategoryMeta } from "@/types/service";

/**
 * Service category metadata definitions
 */
export const serviceCategories: readonly ServiceCategoryMeta[] = [
  {
    id: "funding",
    name: "Government & Debt Funding",
    shortDescription:
      "Access capital through government schemes and customized loan products.",
    icon: "Landmark",
  },
  {
    id: "compliance",
    name: "Compliance & Certifications",
    shortDescription:
      "Legal registrations and quality certifications for business credibility.",
    icon: "ShieldCheck",
  },
  {
    id: "digital",
    name: "Digital Growth & Marketing",
    shortDescription:
      "Scale your business with technology and strategic marketing.",
    icon: "Globe",
  },
  {
    id: "it",
    name: "Technology & Software Engineering",
    shortDescription:
      "Complete technology solutions from software development to cloud infrastructure.",
    icon: "Cpu",
  },
];

/**
 * Verified Services Catalog
 * Slugs use lowercase kebab-case for canonical URL matching (/services/[slug]).
 */
export const servicesCatalog: readonly Service[] = [
  // --- CATEGORY: FUNDING ---
  {
    id: "cgtmse-funding",
    slug: "cgtmse-funding",
    name: "CGTMSE & MUDRA Loans",
    category: "funding",
    shortDescription:
      "Get collateral-free business loans up to ₹50 lakh with 80% government guarantee. Fast approval, minimal documentation, and expert guidance.",
    description:
      "Collateral-free loans from ₹10 lakh to ₹50 lakh for business growth, with end-to-end documentation, bank submission, and follow-up support.",
    icon: "Coins",
    schemeCeiling: "Up to \u20B95 Crore / Zero Collateral",
    dealSummary: {
      maxLimit: "\u20B95.00 Crore",
      collateral: "0% (Zero Collateral)",
      turnaround: "30 - â€œ45 Days",
      checklistDocName: "CGTMSE_DPR_Checklist.pdf",
    },
    audience: [
      "New manufacturing startups",
      "Existing MSMEs expanding production capacity",
      "Service enterprises seeking capital expenditure funding",
    ],
    benefits: [
      "Zero requirement for third-party collateral guarantee",
      "Competitive institutional interest rates via nationalized and private banks",
      "Structured support for working capital and term loans",
    ],
    process: [
      { step: 1, title: "Eligibility Assessment", description: "Verification of Udyam status, project viability, and borrowing capacity." },
      { step: 2, title: "DPR & Financial Modeling", description: "Preparation of Detailed Project Report, CMA data, and DSCR analysis." },
      { step: 3, title: "Lender Syndication", description: "Submission to institutional lenders and assistance during credit committee queries." },
      { step: 4, title: "Sanction & Disbursement", description: "Support through documentation, guarantee fee remittance, and fund release." },
    ],
    timeline: "30 to 45 business days (dependent on institutional lender credit appraisal)",
    faqs: [
      {
        question: "What is the maximum loan limit under CGTMSE?",
        answer: "The scheme facilitates credit facilities up to \u20B9500 Lakh (\u20B95 Crore) per eligible MSME borrower.",
      },
      {
        question: "Is collateral completely waived?",
        answer: "Yes, eligible credit facilities under CGTMSE require no collateral security or third-party guarantee.",
      },
    ],
    relatedServices: ["mudra-scheme", "pmegp-loan-subsidy", "project-finance"],
    featured: true,
    metadata: {
      title: "CGTMSE Collateral-Free Loan Consulting | Agnivridhi India",
      description: "Secure up to \u20B95 Crore collateral-free institutional loan under the government CGTMSE scheme with Agnivridhi India.",
    },
  },
  {
    id: "mudra-scheme",
    slug: "mudra-scheme",
    name: "PMMY MUDRA Loan Assistance",
    category: "funding",
    shortDescription:
      "Pradhan Mantri Mudra Yojana funding assistance across Shishu, Kishore, and Tarun tiers up to \u20B920 Lakh.",
    description:
      "Assistance for micro-enterprises and non-farm small businesses to access structured refinance under the Pradhan Mantri Mudra Yojana. We guide borrowers through correct category selection, business plan preparation, and documentation.",
    icon: "CreditCard",
    schemeCeiling: "Up to \u20B920 Lakh / Zero Collateral",
    dealSummary: {
      maxLimit: "\u20B920 Lakh",
      collateral: "0% Collateral",
      turnaround: "15 - â€œ25 Days",
      checklistDocName: "MUDRA_Application_Dossier.pdf",
    },
    audience: [
      "Micro-entrepreneurs and proprietors",
      "Small retail and trade establishments",
      "Early-stage artisanal and manufacturing units",
    ],
    benefits: [
      "Simplified documentation process",
      "No collateral requirement for micro borrowings",
      "Tiered support matching enterprise development phase",
    ],
    process: [
      { step: 1, title: "Tier Selection", description: "Determining eligibility across Shishu (up to \u20B950k), Kishore (up to \u20B95L), and Tarun (up to \u20B920L)." },
      { step: 2, title: "Application Preparation", description: "Preparing standard MUDRA application dossiers and proof of enterprise." },
      { step: 3, title: "Bank Submission", description: "Liaison with public sector, private, or regional rural banking partners." },
      { step: 4, title: "Sanction Follow-through", description: "Active coordination with branch credit teams for fund release." },
    ],
    timeline: "15 to 25 business days",
    relatedServices: ["cgtmse-funding", "pmegp-loan-subsidy"],
    featured: false,
  },
  {
    id: "pmegp-loan-subsidy",
    slug: "pmegp-loan-subsidy",
    name: "PMEGP Subsidy",
    category: "funding",
    shortDescription:
      "Get 15-35% government subsidy on your business project with complete support from application to subsidy disbursement.",
    description:
      "Government subsidy on project costs for manufacturing and service businesses, with expert documentation, application filing, bank coordination, and subsidy release support.",
    icon: "Award",
    schemeCeiling: "Up to \u20B950 Lakh / 35% Capital Subsidy",
    dealSummary: {
      maxLimit: "\u20B950 Lakh (35% Subsidy)",
      collateral: "Govt Subsidized (35%)",
      turnaround: "45 - â€œ60 Days",
      checklistDocName: "PMEGP_DPR_Dossier.pdf",
    },
    audience: [
      "First-generation entrepreneurs",
      "Rural and semi-urban enterprise founders",
      "Manufacturing units with project cost up to \u20B950 Lakh",
    ],
    benefits: [
      "Capital margin money subsidy ranging from 15% to 35%",
      "Special incentives for designated priority categories and rural locations",
      "Structured handholding with local DIC/KVIC authorities",
    ],
    process: [
      { step: 1, title: "Project Proposal", description: "Formulation of project outline adhering to PMEGP guidelines." },
      { step: 2, title: "Online Application & DLTFC", description: "Portal filing and screening by District Level Task Force Committee." },
      { step: 3, title: "Bank Sanction & EDP", description: "Bank credit appraisal and mandatory entrepreneurship training." },
      { step: 4, title: "Subsidy Lock-In", description: "Deposit of KVIC margin money subsidy in term loan TDR account." },
    ],
    timeline: "45 to 60 business days",
    relatedServices: ["cgtmse-funding", "mudra-scheme"],
    featured: true,
  },
  {
    id: "project-finance",
    slug: "project-finance",
    name: "Project Financing & Working Capital",
    category: "funding",
    shortDescription:
      "Structured debt, working capital lines, and term loans for industrial expansion and capital expenditure.",
    description:
      "End-to-end advisory for medium and large MSMEs requiring cash credit, overdraft, letter of credit, bank guarantees, and capital expenditure term loans through scheduled commercial banks and financial institutions.",
    icon: "TrendingUp",
    schemeCeiling: "\u20B950 Cr+ Project Debt Syndicate",
    dealSummary: {
      maxLimit: "\u20B950 Cr+ Project Line",
      collateral: "Asset Hypothecation",
      turnaround: "45 - â€œ90 Days",
      checklistDocName: "Project_Finance_CMA_Checklist.pdf",
    },
    audience: [
      "Mid-sized manufacturing enterprises",
      "Export-oriented trading entities",
      "Industrial units commissioning new plants or equipment",
    ],
    benefits: [
      "Optimized debt structuring and interest cost management",
      "Assessment of working capital cycles and drawing power calculation",
      "Comprehensive multi-banking or consortium coordination",
    ],
    process: [
      { step: 1, title: "Financial Audit", description: "Review of audited balance sheets, cash flow models, and tax filings." },
      { step: 2, title: "CMA & Proposal Dossier", description: "Preparation of Credit Monitoring Arrangement (CMA) data." },
      { step: 3, title: "Syndication & Appraisal", description: "Coordination with commercial credit teams and committee reviews." },
      { step: 4, title: "Sanction & Line Setup", description: "Documentation, collateral charge creation, and limit activation." },
    ],
    timeline: "45 to 90 business days",
    relatedServices: ["cgtmse-funding"],
    featured: false,
  },

  // --- CATEGORY: COMPLIANCE ---
  {
    id: "msme-udyam-registration",
    slug: "msme-udyam-registration",
    name: "MSME/Udyam Registration",
    category: "compliance",
    shortDescription:
      "Get an instant Udyam certificate and unlock government benefits, priority loans, subsidies, and tax exemptions with free registration.",
    description:
      "Flawless filing and advisory for official Udyam registration under the Ministry of MSME. We ensure accurate NIC code mapping, turnover classification, and investment verification for maximum statutory protection.",
    icon: "FileCheck",
    schemeCeiling: "Statutory MSMED Act Protection",
    dealSummary: {
      maxLimit: "Statutory Protection",
      collateral: "Zero Requirement",
      turnaround: "2 - â€œ4 Days",
      checklistDocName: "Udyam_Registration_Checklist.pdf",
    },
    audience: [
      "Proprietorships, partnerships, LLPs, and private limited companies",
      "Enterprises needing statutory protection against delayed payments",
    ],
    benefits: [
      "Statutory protection under MSMED Act against delayed payments",
      "Priority sector lending eligibility at commercial banks",
      "Concession on trademark registration fees and electricity tariffs",
    ],
    process: [
      { step: 1, title: "Data Verification", description: "Aadhaar, PAN, and GST validation for business enterprise." },
      { step: 2, title: "NIC Classification", description: "Accurate industrial classification code assignment." },
      { step: 3, title: "Portal Submission", description: "Direct authorized filing on official MSME Udyam portal." },
      { step: 4, title: "Certificate Issuance", description: "Issuance of permanent Udyam Registration Certificate." },
    ],
    timeline: "2 to 4 business days",
    relatedServices: ["gst-advisory", "iso-certification"],
    featured: false,
  },
  {
    id: "gst-advisory",
    slug: "gst-advisory",
    name: "GST Registration & Tax Advisory",
    category: "compliance",
    shortDescription:
      "Statutory GST enrollment, input tax credit optimization, and regulatory compliance consulting.",
    description:
      "Advisory services for GST registration, jurisdictional assessment, input tax credit (ITC) reconciliation, return compliance, and response to department notices for growing commercial enterprises.",
    icon: "Receipt",
    schemeCeiling: "Input Tax Credit (ITC) Optimization",
    dealSummary: {
      maxLimit: "State & Central GSTIN",
      collateral: "Statutory Filing",
      turnaround: "5 - â€œ7 Days",
      checklistDocName: "GST_Compliance_Checklist.pdf",
    },
    audience: [
      "New businesses crossing mandatory turnover thresholds",
      "Interstate e-commerce sellers and service providers",
    ],
    benefits: [
      "Seamless statutory registration without departmental objections",
      "Accurate input tax credit reconciliation preventing cash leakage",
      "Expert representation for audit queries and department communications",
    ],
    process: [
      { step: 1, title: "Documentation", description: "Assembly of KYC, principal place of business proof, and authorization." },
      { step: 2, title: "Filing & ARN", description: "Application submission on the GST common portal." },
      { step: 3, title: "Clarification Handling", description: "Direct response to jurisdictional tax officer queries." },
      { step: 4, title: "Approval & GSTIN", description: "Monitoring through officer review to GSTIN issuance." },
    ],
    timeline: "5 to 7 business days",
    relatedServices: ["msme-udyam-registration"],
    featured: false,
  },
  {
    id: "iso-certification",
    slug: "iso-certification",
    name: "ISO 9001 / 14001 / 27001 Certification",
    category: "compliance",
    shortDescription:
      "Internationally accredited quality, environmental, and information security management certifications.",
    description:
      "End-to-end consulting for ISO certification readiness. We assist with internal process documentation, standard operating procedure (SOP) manuals, gap analysis, and coordination with accredited third-party certification bodies.",
    icon: "ShieldAlert",
    schemeCeiling: "100% First-Round Audit Pass",
    dealSummary: {
      maxLimit: "Global Accreditation",
      collateral: "Zero Non-Conformity",
      turnaround: "20 - â€œ30 Days",
      checklistDocName: "ISO_Quality_Manual_Framework.pdf",
    },
    audience: [
      "Manufacturing companies participating in institutional tenders",
      "IT and service companies requiring ISO 27001 data security compliance",
      "Exporters seeking international quality recognition",
    ],
    benefits: [
      "Enhanced eligibility for government and corporate tenders",
      "Standardized quality management systems and defect reduction",
      "Global credibility and institutional client confidence",
    ],
    process: [
      { step: 1, title: "Gap Analysis", description: "Assessment of existing workflows against ISO standard clauses." },
      { step: 2, title: "SOP & Documentation", description: "Drafting quality manuals, policy frameworks, and audit logs." },
      { step: 3, title: "Internal Audit Drill", description: "Pre-audit verification and corrective actions deployment." },
      { step: 4, title: "External Certification", description: "Stage 1 and Stage 2 external audits by accredited registrar." },
    ],
    timeline: "20 to 30 business days",
    relatedServices: ["msme-udyam-registration", "startup-india-advisory"],
    featured: true,
  },
  {
    id: "startup-india-advisory",
    slug: "startup-india-advisory",
    name: "Startup India Recognition & DPIIT",
    category: "compliance",
    shortDescription:
      "DPIIT recognition, Section 80-IAC tax holiday advisory, and Startup India Seed Fund Scheme support.",
    description:
      "Comprehensive advisory for innovative startups seeking DPIIT recognition. Unlock statutory benefits including exemption from Angel Tax (Section 56(2)(viib)), 3-year income tax holidays, and access to dedicated seed capital grants.",
    icon: "Rocket",
    schemeCeiling: "3-Yr 80-IAC Tax Exemption",
    dealSummary: {
      maxLimit: "\u20B950L Seed Fund / 3-Yr Exemption",
      collateral: "DPIIT Recognized",
      turnaround: "15 - â€œ25 Days",
      checklistDocName: "Startup_India_Pitch_Checklist.pdf",
    },
    audience: [
      "Technology and product startups incorporated within the last 10 years",
      "High-growth enterprises with scalable innovative business models",
    ],
    benefits: [
      "Eligibility for Section 80-IAC three-year income tax exemption",
      "Relaxed norms for public procurement tenders without prior turnover requirements",
      "Access to Startup India Seed Fund Scheme (SISFS) up to \u20B950 Lakh",
    ],
    process: [
      { step: 1, title: "Innovation Pitch", description: "Documentation of innovation uniqueness and employment generation." },
      { step: 2, title: "DPIIT Filing", description: "Submission on Startup India portal with statutory declarations." },
      { step: 3, title: "Tax Exemption Board", description: "Support for application to Inter-Ministerial Board for Section 80-IAC." },
      { step: 4, title: "Grant Advisory", description: "Guidance through incubator matching for seed fund allocation." },
    ],
    timeline: "15 to 25 business days",
    relatedServices: ["iso-certification", "cgtmse-funding"],
    featured: false,
  },

  // --- CATEGORY: DIGITAL ---
  {
    id: "web-development",
    slug: "web-development",
    name: "Web Platform Development",
    category: "digital",
    shortDescription:
      "High-performance Next.js web applications, institutional brand websites, and conversion-focused digital platforms.",
    description:
      "Custom web engineering built on modern headless stacks (Next.js, TypeScript, Tailwind). Designed specifically for B2B enterprises, consulting firms, and industrial brands that demand editorial prestige, accessibility, and high performance.",
    icon: "Monitor",
    schemeCeiling: "Sub-Second Core Web Vitals",
    dealSummary: {
      maxLimit: "Next.js Architecture",
      collateral: "100% Code Ownership",
      turnaround: "20 - â€œ45 Days",
      checklistDocName: "Web_Platform_Spec_Checklist.pdf",
    },
    audience: [
      "MSMEs replacing outdated legacy websites",
      "Consulting and B2B enterprises requiring corporate authority",
      "Growing firms needing scalable headless digital infrastructure",
    ],
    benefits: [
      "Sub-second load times and perfect Core Web Vitals scores",
      "Mobile-first, responsive layouts designed for decision-maker conversions",
      "Built-in search engine optimization and accessible semantic markup",
    ],
    process: [
      { step: 1, title: "Architecture & Design", description: "Information architecture, design tokens, and user flow mapping." },
      { step: 2, title: "Full-Stack Development", description: "Next.js App Router engineering with strict TypeScript." },
      { step: 3, title: "Performance Auditing", description: "Core Web Vitals testing, accessibility checks, and schema validation." },
      { step: 4, title: "Deployment & Edge CDN", description: "Production cutover with global CDN optimization and telemetry." },
    ],
    timeline: "20 to 45 business days",
    relatedServices: ["digital-marketing-seo", "custom-software"],
    featured: true,
  },
  {
    id: "digital-marketing-seo",
    slug: "digital-marketing-seo",
    name: "Digital Marketing & Performance SEO",
    category: "digital",
    shortDescription:
      "Organic search dominance, local B2B discovery, and qualified lead generation for enterprise services.",
    description:
      "Strategic digital marketing engineered to drive inbound enterprise inquiries. Combining technical SEO, editorial authority content, targeted performance advertising, and localized Noida/NCR search visibility.",
    icon: "Search",
    schemeCeiling: "Guaranteed B2B Search Lead Funnel",
    dealSummary: {
      maxLimit: "Pan-India B2B Search Retainer",
      collateral: "Transparent ROI",
      turnaround: "90-Day Reviews",
      checklistDocName: "SEO_Growth_Funnel_Checklist.pdf",
    },
    audience: [
      "Service and consulting companies seeking high-intent client inquiries",
      "Manufacturers and exporters targeting corporate buyers online",
    ],
    benefits: [
      "Sustainable organic inbound lead pipelines from high-intent search queries",
      "Targeted Google Search campaigns with optimized cost-per-acquisition",
      "Measurable ROI through transparent conversion tracking and monthly reporting",
    ],
    process: [
      { step: 1, title: "Market & Keyword Audit", description: "Identifying high-value search queries with purchase intent." },
      { step: 2, title: "On-Page & Content Strategy", description: "Technical optimization and authoritative content development." },
      { step: 3, title: "Authority Link Building", description: "High-tier institutional mentions and local citation syndication." },
      { step: 4, title: "Campaign Optimization", description: "Conversion rate optimization and continuous campaign refinement." },
    ],
    timeline: "Ongoing retainers with 90-day milestone reviews",
    relatedServices: ["web-development", "b2b-brand-strategy"],
    featured: false,
  },
  {
    id: "b2b-brand-strategy",
    slug: "b2b-brand-strategy",
    name: "B2B Brand Strategy & Collateral Design",
    category: "digital",
    shortDescription:
      "Enterprise brand identity, industrial product catalogs, authority pitch decks, and commercial collateral engineered for B2B buyer trust.",
    description:
      "Elevate your enterprise positioning with institutional corporate branding. We develop comprehensive brand identity systems, high-converting product brochures, investor pitch presentations, and tender qualification portfolios tailored for Indian manufacturing and B2B sectors.",
    icon: "Palette",
    schemeCeiling: "Institutional Authority Positioning",
    dealSummary: {
      maxLimit: "Full Corporate Identity System",
      collateral: "100% Vector & Trademark Ready",
      turnaround: "15 - â€œ30 Days",
      checklistDocName: "Brand_Identity_Asset_Checklist.pdf",
    },
    audience: [
      "MSMEs upgrading from informal branding to institutional tender eligibility",
      "Manufacturers seeking corporate OEM vendor empanelment",
      "Startups preparing investor presentations and seed capital pitches",
    ],
    benefits: [
      "Command higher margins with premium, institutional brand positioning",
      "Pass corporate vendor due diligence with unified commercial collateral",
      "Vector-perfect assets prepared for digital, print, and factory signage",
    ],
    process: [
      { step: 1, title: "Brand Positioning Audit", description: "Competitive benchmarking and core value proposition synthesis." },
      { step: 2, title: "Visual Identity Engineering", description: "Logo architecture, typography hierarchy, and corporate color standards." },
      { step: 3, title: "Collateral Production", description: "Company profile, product catalogs, and investor deck formatting." },
      { step: 4, title: "Brand Guidelines Delivery", description: "Comprehensive brand book and master design asset handoff." },
    ],
    timeline: "15 to 30 business days",
    relatedServices: ["web-development", "digital-marketing-seo"],
    featured: false,
  },

  // --- CATEGORY: IT ---
  {
    id: "custom-software",
    slug: "custom-software",
    name: "Custom Software Engineering",
    category: "it",
    shortDescription:
      "Bespoke enterprise software, internal business portals, and secure cloud API architectures.",
    description:
      "Tailored software engineering addressing unique operational bottlenecks. We develop specialized workflow portals, inventory systems, customer management databases, and cloud integrations for growing enterprises.",
    icon: "Code",
    schemeCeiling: "100% Proprietary IP Ownership",
    dealSummary: {
      maxLimit: "Bespoke Enterprise Systems",
      collateral: "Zero Vendor Lock-in",
      turnaround: "45 - â€œ90 Days",
      checklistDocName: "Custom_Software_Scope_Checklist.pdf",
    },
    audience: [
      "Businesses outgrowing generic spreadsheets or off-the-shelf software",
      "Industrial operations needing centralized tracking and workflow automation",
    ],
    benefits: [
      "Software customized 100% to proprietary company workflows",
      "Zero recurring per-user licensing fees of commercial SaaS platforms",
      "Robust data security with complete company ownership of source code",
    ],
    process: [
      { step: 1, title: "Requirements Blueprint", description: "Process mapping, data schemas, and technical specification." },
      { step: 2, title: "Agile Development", description: "Sprint-based implementation with regular stakeholder reviews." },
      { step: 3, title: "Security & Load Testing", description: "End-to-end vulnerability scanning and stress benchmark testing." },
      { step: 4, title: "Deployment & Training", description: "User acceptance testing, staff training, and managed maintenance." },
    ],
    timeline: "45 to 90 business days",
    relatedServices: ["web-development", "erp-solutions", "mobile-app-development"],
    featured: true,
  },
  {
    id: "erp-solutions",
    slug: "erp-solutions",
    name: "ERP & Workflow Automation",
    category: "it",
    shortDescription:
      "Integrated resource planning, supply chain management, and automated accounting workflows for MSMEs.",
    description:
      "Implementation and custom integration of lightweight, modern ERP solutions. Unify inventory, sales, procurement, production schedules, and financial reporting under a single cohesive dashboard.",
    icon: "Database",
    schemeCeiling: "Zero Recurring SaaS Seat Licensing",
    dealSummary: {
      maxLimit: "Full-Stack Enterprise ERP",
      collateral: "On-Prem / Cloud Dedicated",
      turnaround: "60 - â€œ120 Days",
      checklistDocName: "ERP_Implementation_Checklist.pdf",
    },
    audience: [
      "Manufacturing plants coordinating multi-stage shop floor operations",
      "Distributors managing multi-warehouse inventory and logistics",
    ],
    benefits: [
      "Real-time operational visibility across inventory, sales, and accounts",
      "Elimination of manual double-entry and administrative errors",
      "Executive decision dashboards for cash flow and production efficiency",
    ],
    process: [
      { step: 1, title: "Operational Audit", description: "Detailed audit of procurement, production, and accounting cycles." },
      { step: 2, title: "System Architecture", description: "Configuration of database schemas and departmental access roles." },
      { step: 3, title: "Data Migration & Test", description: "Historical ledger migration, parallel testing, and sandbox verification." },
      { step: 4, title: "Production Cutover", description: "Live shop-floor deployment, staff onboarding, and executive SLA setup." },
    ],
    timeline: "60 to 120 business days",
    relatedServices: ["custom-software", "cloud-devops-solutions"],
    featured: false,
  },
  {
    id: "mobile-app-development",
    slug: "mobile-app-development",
    name: "Mobile Application Engineering",
    category: "it",
    shortDescription:
      "High-performance iOS and Android applications built on React Native and Flutter for field force tracking, client portals, and mobile commerce.",
    description:
      "Tailored mobile app engineering connecting your workforce, distributors, and customers. From shop-floor dispatch scanners and dealer ordering apps to custom consumer fintech experiences with offline sync and biometric authentication.",
    icon: "Smartphone",
    schemeCeiling: "Native iOS & Android App Store Ready",
    dealSummary: {
      maxLimit: "Cross-Platform Mobile Suite",
      collateral: "Full App Store / Play Store IP",
      turnaround: "45 - â€œ90 Days",
      checklistDocName: "Mobile_App_Architecture_Checklist.pdf",
    },
    audience: [
      "Enterprises needing real-time field force and dealer ordering systems",
      "Manufacturers monitoring remote factory telematics and dispatch",
      "Startups launching customer-facing mobile platforms",
    ],
    benefits: [
      "Single cross-platform codebase cutting development and maintenance costs by 40%",
      "Offline-first architecture ensuring functionality in low-connectivity factory environments",
      "Seamless integration with existing ERP, CRM, and accounting backends",
    ],
    process: [
      { step: 1, title: "UX & Workflow Prototyping", description: "Wireframing, user journey design, and interactive Figma mockups." },
      { step: 2, title: "Client & API Engineering", description: "Cross-platform development with secure REST/GraphQL API integration." },
      { step: 3, title: "Quality & Device Benchmarking", description: "Multi-device testing, latency audits, and battery performance checks." },
      { step: 4, title: "App Store Publishing", description: "Full deployment to Google Play Store and Apple App Store with monitoring." },
    ],
    timeline: "45 to 90 business days",
    relatedServices: ["custom-software", "cloud-devops-solutions"],
    featured: true,
  },
  {
    id: "cloud-devops-solutions",
    slug: "cloud-devops-solutions",
    name: "Cloud Infrastructure & DevOps",
    category: "it",
    shortDescription:
      "AWS and Google Cloud architectures, containerization (Docker/Kubernetes), zero-downtime CI/CD pipelines, and enterprise security hardening.",
    description:
      "Modernize your company's digital backbone with scalable, compliant cloud infrastructure. We migrate on-premise servers to AWS/GCP, configure automated backup systems, establish continuous integration pipelines, and enforce zero-trust security controls.",
    icon: "Cloud",
    schemeCeiling: "99.99% High Availability Cloud SLA",
    dealSummary: {
      maxLimit: "AWS & Google Cloud Architecture",
      collateral: "SOC2 & ISO 27001 Preparedness",
      turnaround: "30 - â€œ60 Days",
      checklistDocName: "Cloud_DevOps_Audit_Checklist.pdf",
    },
    audience: [
      "Companies moving from legacy shared hosting or on-prem servers to the cloud",
      "Enterprises requiring disaster recovery, automatic failover, and data sovereignty",
      "Growing tech teams needing automated CI/CD deployment pipelines",
    ],
    benefits: [
      "Eliminate server crashes and scale infrastructure dynamically with traffic",
      "Slash cloud hosting expenses by up to 35% via resource right-sizing",
      "Automated encrypted backups and disaster recovery protocols",
    ],
    process: [
      { step: 1, title: "Cloud Infrastructure Audit", description: "Evaluating current hosting workloads, security gaps, and cost leakage." },
      { step: 2, title: "Architecture & Security Design", description: "VPC setup, IAM role least-privilege policies, and containerization." },
      { step: 3, title: "Migration & Pipeline Setup", description: "Zero-downtime data migration and automated CI/CD pipeline implementation." },
      { step: 4, title: "24/7 Monitoring & Optimization", description: "Telemetry setup, alerting policies, and ongoing cost governance." },
    ],
    timeline: "30 to 60 business days",
    relatedServices: ["custom-software", "erp-solutions"],
    featured: false,
  },
  {
    id: "ai-automation-solutions",
    slug: "ai-automation-solutions",
    name: "AI & Workflow Automation",
    category: "it",
    shortDescription:
      "Intelligent document processing for loans, automated CRM data routing, custom AI customer support agents, and repetitive task automation.",
    description:
      "Harness practical, high-ROI artificial intelligence to eliminate manual operational drag. We build automated document extractors for bank CMA / ITR financial data, intelligent conversational sales bots, and cross-platform RPA workflows connecting email, WhatsApp, and internal ERPs.",
    icon: "Bot",
    schemeCeiling: "Zero-Hallucination Private LLM Stack",
    dealSummary: {
      maxLimit: "Custom Enterprise AI Pods",
      collateral: "Proprietary Data Isolation",
      turnaround: "30 - â€œ60 Days",
      checklistDocName: "AI_Workflow_Feasibility_Checklist.pdf",
    },
    audience: [
      "Enterprises processing hundreds of loan documents, invoices, or purchase orders manually",
      "Customer service departments seeking 24/7 automated inquiry qualification",
      "Operations teams eliminating duplicate data entry between disparate software tools",
    ],
    benefits: [
      "Reduce document processing and data extraction time by over 80%",
      "Capture inbound buyer leads 24/7 with intelligent WhatsApp AI agents",
      "Complete data privacy with dedicated cloud instances that never train public models",
    ],
    process: [
      { step: 1, title: "Process Discovery & Mapping", description: "Identifying high-volume, rules-based tasks suitable for automation." },
      { step: 2, title: "Model Calibration & Testing", description: "Fine-tuning document extraction and prompt engineering with real business data." },
      { step: 3, title: "Workflow Orchestration", description: "Connecting AI models to existing CRMs, ERPs, and messaging gateways." },
      { step: 4, title: "Audit & Human-in-the-Loop", description: "Deploying exception handling and confidence threshold verification." },
    ],
    timeline: "30 to 60 business days",
    relatedServices: ["custom-software", "erp-solutions"],
    featured: true,
  },
];

/**
 * Service Accessor Helpers
 */
export function getAllServices(): readonly Service[] {
  return servicesCatalog;
}

export function getServiceBySlug(slug: string): Service | undefined {
  return servicesCatalog.find((service) => service.slug === slug);
}

export function getServicesByCategory(category: ServiceCategory): readonly Service[] {
  return servicesCatalog.filter((service) => service.category === category);
}

export function getFeaturedServices(): readonly Service[] {
  return servicesCatalog.filter((service) => service.featured === true);
}

export function getServiceCategories(): readonly ServiceCategoryMeta[] {
  return serviceCategories;
}

export function getRelatedServices(service: Service): readonly Service[] {
  const relatedSlugs = service.relatedServices || [];
  if (relatedSlugs.length === 0) {
    return servicesCatalog
      .filter((s) => s.category === service.category && s.slug !== service.slug)
      .slice(0, 3);
  }
  const related = servicesCatalog.filter((s) =>
    relatedSlugs.includes(s.slug)
  );
  if (related.length < 3) {
    const additional = servicesCatalog.filter(
      (s) =>
        s.category === service.category &&
        s.slug !== service.slug &&
        !related.some((r) => r.slug === s.slug)
    );
    return [...related, ...additional].slice(0, 3);
  }
  return related.slice(0, 3);
}
