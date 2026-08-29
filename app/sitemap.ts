import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { getAllServices } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.seo.siteUrl;
  const now = new Date().toISOString();

  // Static Canonical Pages
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/services",
    "/success-stories",
    "/blog",
    "/contact",
    "/privacy",
    "/terms",
    "/disclaimer",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Service Catalog Pages
  const serviceRoutes: MetadataRoute.Sitemap = getAllServices().map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: service.featured ? 0.9 : 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
