import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

/**
 * Returns the fully-qualified canonical URL for a given relative path.
 */
export function getCanonicalUrl(path: string = ""): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.seo.siteUrl}${cleanPath === "/" ? "" : cleanPath}`;
}

export interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  openGraphType?: "website" | "article";
  publishedTime?: string;
  authors?: string[];
  image?: string;
  noIndex?: boolean;
  isAbsoluteTitle?: boolean;
}

/**
 * Factory for creating strongly-typed, consistent Next.js Metadata objects.
 */
export function createPageMetadata({
  title,
  description,
  path,
  openGraphType = "website",
  publishedTime,
  authors,
  image = siteConfig.seo.ogImage,
  noIndex = false,
  isAbsoluteTitle = false,
}: PageMetadataOptions): Metadata {
  const canonicalUrl = getCanonicalUrl(path);

  // Strip accidental trailing brand name if already present to prevent "Title | Brand | Brand"
  const cleanTitle = title.replace(new RegExp(`\\s*\\|\\s*${siteConfig.company.name}$`, "i"), "").trim();
  const fullTitle = isAbsoluteTitle || cleanTitle.includes(siteConfig.company.name)
    ? cleanTitle
    : `${cleanTitle} | ${siteConfig.company.name}`;

  return {
    title: isAbsoluteTitle ? { absolute: fullTitle } : cleanTitle,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: siteConfig.company.name,
      locale: siteConfig.seo.locale,
      type: openGraphType,
      images: [
        {
          url: image.startsWith("http") ? image : `${siteConfig.seo.siteUrl}${image}`,
          alt: cleanTitle,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(authors && { authors }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image.startsWith("http") ? image : `${siteConfig.seo.siteUrl}${image}`],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
  };
}

/**
 * Generates Schema.org Organization structured data using verified Single Source of Truth.
 */
export function getOrganizationJsonLd() {
  const { name, longDescription, location } = siteConfig.company;
  const { siteUrl } = siteConfig.seo;

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url: siteUrl,
    description: longDescription,
    address: {
      "@type": "PostalAddress",
      addressLocality: location.city,
      addressRegion: location.state,
      addressCountry: location.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["English", "Hindi"],
    },
  };
}

/**
 * Generates Schema.org BreadcrumbList structured data.
 */
export function getBreadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: getCanonicalUrl(item.path),
    })),
  };
}

/**
 * Generates Schema.org Article structured data for blog articles.
 */
export function getArticleJsonLd({
  title,
  description,
  publishedAt,
  authorName,
  authorRole,
  slug,
}: {
  title: string;
  description: string;
  publishedAt: string;
  authorName: string;
  authorRole?: string;
  slug: string;
}) {
  const articleUrl = getCanonicalUrl(`/blog/${slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: publishedAt,
    author: {
      "@type": "Person",
      name: authorName,
      ...(authorRole && { jobTitle: authorRole }),
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.company.name,
      url: siteConfig.seo.siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
  };
}

/**
 * Generates Schema.org Service structured data for consulting practices.
 */
export function getServiceJsonLd({
  name,
  description,
  slug,
  categoryName,
}: {
  name: string;
  description: string;
  slug: string;
  categoryName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: categoryName,
    provider: {
      "@type": "Organization",
      name: siteConfig.company.name,
      url: siteConfig.seo.siteUrl,
    },
    url: getCanonicalUrl(`/services/${slug}`),
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };
}
