import type { Metadata } from "next";
import { getAllServices, getServiceBySlug } from "@/data/services";
import { notFound } from "next/navigation";

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
      title: "Service Not Found",
    };
  }

  return {
    title: service.metadata?.title || `${service.name} | Agnivridhi India`,
    description: service.metadata?.description || service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="container mx-auto py-16 px-4">
      <span className="type-eyebrow text-teal-600 uppercase">{service.category}</span>
      <h1 className="font-serif text-3xl font-semibold text-slate-900 mt-2 mb-4">
        {service.name}
      </h1>
      <p className="text-slate-600 font-sans max-w-reading text-lg mb-6">
        {service.shortDescription}
      </p>
      <div className="p-4 rounded-md bg-slate-50 border border-slate-200 text-sm text-slate-500 font-sans">
        Phase 3 Data Architecture connected. Structured service data loaded from <code>@/data/services</code>. Detailed service UI layout will be implemented in future phases.
      </div>
    </div>
  );
}
