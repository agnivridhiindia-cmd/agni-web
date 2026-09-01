import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllServices, getServiceBySlug, getRelatedServices } from "@/data/services";
import { Container } from "@/components/shared/container";
import { ServiceBreadcrumb } from "@/components/services/service-breadcrumb";
import { ServiceDetailHero } from "@/components/services/service-detail-hero";
import { ServiceOverview } from "@/components/services/service-overview";
import { ServiceProcess } from "@/components/services/service-process";
import { ServiceFaq } from "@/components/services/service-faq";
import { ServiceSidebar } from "@/components/services/service-sidebar";
import { RelatedServices } from "@/components/services/related-services";
import { ServiceDetailCta } from "@/components/services/service-detail-cta";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | Agnivridhi India",
      description: "The requested advisory practice could not be located.",
    };
  }

  const title = service.metadata?.title || `${service.name} | Agnivridhi India`;
  const description = service.metadata?.description || service.shortDescription;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://agnivridhi.com/services/${service.slug}`,
    },
    alternates: {
      canonical: `https://agnivridhi.com/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = getRelatedServices(service);

  return (
    <div className="min-h-screen bg-white">
      <main id="main-content">
        {/* Semantic Breadcrumb Navigation */}
        <ServiceBreadcrumb service={service} />

        {/* Editorial Service Header */}
        <ServiceDetailHero service={service} />

        {/* Core Content Layout with Sticky Consultation Desk Sidebar */}
        <section className="py-14 sm:py-18 lg:py-20">
          <Container width="wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
              {/* Primary Content Stream (8 columns on desktop) */}
              <div className="lg:col-span-8 space-y-14 sm:space-y-16">
                <ServiceOverview service={service} />

                <ServiceProcess process={service.process} />

                <ServiceFaq faqs={service.faqs} serviceName={service.name} />
              </div>

              {/* Sticky Consultation Sidebar (4 columns on desktop) */}
              <ServiceSidebar service={service} />
            </div>
          </Container>
        </section>

        {/* Related Advisory Practices */}
        <RelatedServices services={relatedServices} />

        {/* Closing Conversion CTA */}
        <ServiceDetailCta service={service} />
      </main>
    </div>
  );
}
