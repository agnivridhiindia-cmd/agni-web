import { QuickPrompt, SuggestedAction } from "@/types/chat";
import { siteConfig } from "@/lib/site-config";
import { servicesCatalog } from "@/data/services";

/**
 * Curated pre-recorded prompts displayed as one-tap chips in the chat dialog.
 */
export const DEFAULT_QUICK_PROMPTS: readonly QuickPrompt[] = [
  {
    id: "cgtmse-limit",
    label: "Collateral-Free CGTMSE Loans",
    query: "How much collateral-free loan can I get under CGTMSE scheme?",
    category: "funding",
  },
  {
    id: "loan-documents",
    label: "Documents for MSME Funding",
    query: "What documents are required to apply for MSME debt funding or loans?",
    category: "funding",
  },
  {
    id: "mudra-cgtmse-diff",
    label: "MUDRA vs CGTMSE",
    query: "What is the difference between CGTMSE and MUDRA loans?",
    category: "funding",
  },
  {
    id: "compliance-iso",
    label: "ISO & Company Registration",
    query: "Which ISO certifications and statutory registrations do you assist with?",
    category: "compliance",
  },
  {
    id: "book-consultation",
    label: "Book Free Consultation",
    query: "How can I speak with an Agnivridhi advisor or book a consultation?",
    category: "general",
  },
];

/**
 * Builds the comprehensive, grounded system prompt for Gemini AI.
 */
export function buildSystemInstruction(): string {
  const serviceSummaries = servicesCatalog
    .map(
      (s) =>
        `- ${s.name} (Category: ${s.category}): ${s.shortDescription} ${
          s.schemeCeiling ? `[Ceiling/Guarantee: ${s.schemeCeiling}]` : ""
        }`
    )
    .join("\n");

  return `You are "Agnivridhi AI", the official virtual advisory assistant of Agnivridhi India (Agnivridhi India Business Solutions).
Your mission is to assist MSMEs, business owners, and startup founders with accurate, friendly, and practical guidance about institutional debt funding, statutory compliance, certifications, and digital technology services.

=== AUTHORITATIVE COMPANY DETAILS ===
Company Name: ${siteConfig.company.name}
Tagline: "${siteConfig.company.tagline}"
Office Address: ${siteConfig.contact.address.street}, ${siteConfig.contact.address.city}, ${siteConfig.contact.address.state} - ${siteConfig.contact.address.postalCode}, ${siteConfig.contact.address.country}. (Near Noida Electronic City Metro Station)
Official Phone: ${siteConfig.contact.phone}
Official Email: ${siteConfig.contact.email}
Business Hours: ${siteConfig.contact.businessHours?.days}, ${siteConfig.contact.businessHours?.hours}
Founder & MD: ${siteConfig.founder.name} (${siteConfig.founder.role})
Credibility: Facilitated ₹200+ Cr in funding, supported 500+ enterprises, 5+ years experience.

=== SERVICES CATALOG ===
${serviceSummaries}

=== KEY SCHEMES & DOMAIN FACTS ===
1. CGTMSE Scheme (Credit Guarantee Fund Trust for Micro and Small Enterprises):
   - Collateral-free business loans up to ₹5 Crore (routine sanctions typically ₹10 Lakh to ₹50 Lakh+ for plant, machinery, working capital).
   - Sovereign credit guarantee up to 85% backed by Government of India and SIDBI.
   - Processing turnaround: ~30 to 45 business days. Requires DPR (Detailed Project Report), CMA data, bank statements, ITR, GST returns.
2. MUDRA Loans:
   - Shishu (up to ₹50,000), Kishore (₹50,000 to ₹5 Lakh), Tarun (up to ₹10 Lakh to ₹20 Lakh under enhanced limits).
   - Targeted at non-corporate, non-farm small/micro enterprises.
3. PMEGP (Prime Minister Employment Generation Programme):
   - Government subsidy up to 15% - 35% on project costs (up to ₹50 Lakh for manufacturing, ₹20 Lakh for service units).
4. Compliance & Certifications:
   - ISO 9001:2015 (Quality), ISO 14001 (Environment), ISO 27001 (Information Security), ISO 45001 (Occupational Health).
   - MSME Udyam Registration, GST registration and returns, Private Limited/LLP/OPC incorporation, Startup India DPIIT recognition, Trademark/IPR.
5. IT & Digital Services:
   - Custom web development, mobile apps, enterprise cloud architecture, B2B digital marketing, and automated business workflows.

=== RESPONSE GUIDELINES & GUARDRAILS ===
1. Tone: Warm, professional, encouraging, and authoritative yet approachable.
2. Language: Match the user's language. If they ask in Hindi or Hinglish, respond fluently in polite Hindi/Hinglish. If in English, respond in clear English.
3. Concise & Structured: Keep replies to 2-4 short paragraphs or bullet points. Avoid wall of text. Use bullet points for document lists or steps.
4. Accuracy & Integrity: Never guarantee 100% bank sanction or loan approval. Loan sanctions depend on bank credit appraisal, CIBIL score, and project cash flows. Position Agnivridhi as the expert advisory partner that prepares watertight DPRs, bank proposals, and liaisoning.
5. Actionable Next Steps: In every substantive answer, encourage the visitor to schedule a free preliminary consultation with Agnivridhi's desk or call ${siteConfig.contact.phone}.
`;
}

/**
 * Deterministic offline fallback engine for when Gemini API key is missing or rate limited.
 */
export function getLocalFallbackResponse(userQuery: string): {
  reply: string;
  suggestedActions: SuggestedAction[];
} {
  const q = userQuery.toLowerCase();

  if (q.includes("cgtmse") || q.includes("collateral")) {
    return {
      reply:
        "Under the **CGTMSE Scheme**, eligible MSMEs can access **collateral-free credit up to ₹5.00 Crore** with up to 85% sovereign guarantee cover from SIDBI & the Ministry of MSME.\n\n" +
        "**Key Highlights:**\n" +
        "• Zero collateral or third-party guarantee required\n" +
        "• Loan types: Term Loan for machinery/plant and Working Capital\n" +
        "• Average turnaround: 30 to 45 business days\n" +
        "• Complete DPR preparation and bank liaisoning handled by Agnivridhi.",
      suggestedActions: [
        { label: "View CGTMSE Details", href: "/services/cgtmse-funding", actionType: "link" },
        { label: "Book Loan Consultation", href: "/contact", actionType: "link" },
        { label: "Call Advisor", href: `tel:${siteConfig.contact.phone}`, actionType: "call" },
      ],
    };
  }

  if (q.includes("mudra")) {
    return {
      reply:
        "**MUDRA loans** provide institutional credit for micro and small enterprises across three categories:\n\n" +
        "• **Shishu**: Loans up to ₹50,000 for early micro ventures\n" +
        "• **Kishore**: Loans from ₹50,000 to ₹5,00,000\n" +
        "• **Tarun**: Loans up to ₹10,00,000 (and up to ₹20,00,000 under enhanced limits)\n\n" +
        "No collateral is required for MUDRA loans. Agnivridhi helps prepare your project profile and bank application.",
      suggestedActions: [
        { label: "Check Eligibility", href: "/services/cgtmse-funding", actionType: "link" },
        { label: "Talk to Funding Desk", href: "/contact", actionType: "link" },
      ],
    };
  }

  if (q.includes("document") || q.includes("doc") || q.includes("paper")) {
    return {
      reply:
        "**Essential Documents Required for MSME Funding Applications:**\n\n" +
        "1. **Identity & Address:** PAN & Aadhaar of Directors/Promoters\n" +
        "2. **Business Registration:** Udyam Registration, Certificate of Incorporation / Partnership Deed, GST Certificate\n" +
        "3. **Financials:** Last 2–3 years Audited Balance Sheets, P&L statements, and ITR\n" +
        "4. **Banking:** Last 6 to 12 months current account bank statements\n" +
        "5. **Project Proposal:** Detailed Project Report (DPR) and CMA data (prepared by Agnivridhi).\n\n" +
        "Our team assists in structuring your complete documentation file.",
      suggestedActions: [
        { label: "Consult an Expert", href: "/contact", actionType: "link" },
        { label: "Call +91 92895 55190", href: `tel:${siteConfig.contact.phone}`, actionType: "call" },
      ],
    };
  }

  if (q.includes("iso") || q.includes("certif") || q.includes("compliance") || q.includes("gst")) {
    return {
      reply:
        "Agnivridhi provides comprehensive **Statutory Compliance & Certification** services:\n\n" +
        "• **ISO Certifications:** ISO 9001 (Quality), ISO 14001 (Environment), ISO 27001 (Information Security), ISO 45001\n" +
        "• **Corporate Formations:** Private Limited, LLP, OPC, Section 8\n" +
        "• **Statutory Registrations:** MSME Udyam, GST, Startup India DPIIT recognition, Trademark & IPR.\n\n" +
        "We manage everything from initial audit to final certification.",
      suggestedActions: [
        { label: "Explore Compliance Services", href: "/services#compliance", actionType: "link" },
        { label: "Request Certification Quote", href: "/contact", actionType: "link" },
      ],
    };
  }

  if (q.includes("contact") || q.includes("office") || q.includes("address") || q.includes("call") || q.includes("phone")) {
    return {
      reply:
        `**Reach Out to Agnivridhi India:**\n\n` +
        `• **Phone:** ${siteConfig.contact.phone}\n` +
        `• **Email:** ${siteConfig.contact.email}\n` +
        `• **Office:** ${siteConfig.contact.address.street}, ${siteConfig.contact.address.city}, ${siteConfig.contact.address.state} - ${siteConfig.contact.address.postalCode}\n` +
        `• **Hours:** ${siteConfig.contact.businessHours?.days}, ${siteConfig.contact.businessHours?.hours}\n\n` +
        `You can also submit an inquiry form directly on our Contact page.`,
      suggestedActions: [
        { label: "Call +91 92895 55190", href: `tel:${siteConfig.contact.phone}`, actionType: "call" },
        { label: "Visit Contact Page", href: "/contact", actionType: "link" },
      ],
    };
  }

  // Default helpful response
  return {
    reply:
      "Agnivridhi India is an institutional business consultancy specializing in **Government Debt Funding** (CGTMSE up to ₹5 Cr, MUDRA, PMEGP), **Compliance & ISO Certifications**, and **Enterprise Technology Solutions**.\n\n" +
      "Would you like to explore our funding schemes, verify loan eligibility, or connect directly with our advisory desk?",
    suggestedActions: [
      { label: "CGTMSE Collateral-Free Loans", href: "/services/cgtmse-funding", actionType: "link" },
      { label: "Book Free Consultation", href: "/contact", actionType: "link" },
      { label: "Call +91 92895 55190", href: `tel:${siteConfig.contact.phone}`, actionType: "call" },
    ],
  };
}
