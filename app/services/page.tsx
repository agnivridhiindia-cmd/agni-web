import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { getAllServices, getServiceCategories } from "@/data/services";
import { ServicesHero } from "@/components/services/services-hero";
import { CategoryNavigation } from "@/components/services/category-navigation";
import { ServiceCategorySection } from "@/components/services/service-category-section";
import { ServicesCta } from "@/components/services/services-cta";

export const metadata: Metadata = createPageMetadata({
  title: "Advisory Practices & Business Solutions",
  description:
    "Explore our four core institutional practices: Government & Debt Funding, Compliance & ISO Certifications, Digital Transformation, and Custom Software & IT Systems.",
  path: "/services",
});

export default function ServicesPage() {
  const services = getAllServices();
  const categories = getServiceCategories();

  return (
    <div className="min-h-screen bg-background">
      {/* Services Architecture:
          1. Services Hero: Strategic positioning & credibility parameters
          2. Category Navigation: Sticky accessible anchor rail with dynamic counts & scroll-spy
          3. Four Distinct Categorical Editorial Directories (01 Funding, 02 Compliance, 03 Digital, 04 IT)
          4. Closing Advisory Diagnostic CTA */}
      <ServicesHero />

      <CategoryNavigation
        categories={categories}
        totalServicesCount={services.length}
      />

      <div className="divide-y divide-slate-100">
        {categories.map((cat, idx) => {
          const catServices = services.filter((s) => s.category === cat.id);
          return (
            <ServiceCategorySection
              key={cat.id}
              category={cat}
              services={catServices}
              index={idx}
            />
          );
        })}
      </div>

      <ServicesCta />
    </div>
  );
}
