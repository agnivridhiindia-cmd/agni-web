import * as React from "react";
import Link from "next/link";
import { ArrowRight, Landmark, ShieldCheck } from "lucide-react";
import { getServiceBySlug } from "@/data/services";
import type { BlogPostFrontmatter } from "@/types/blog-post";

interface ArticleRelatedServicesProps {
 post: BlogPostFrontmatter;
}

export function ArticleRelatedServices({ post }: ArticleRelatedServicesProps) {
 // Determine relevant service slugs based on post category and slug
 const serviceSlugs: string[] = React.useMemo(() => {
 if (post.slug.includes("cgtmse") || post.category.toLowerCase().includes("funding")) {
 return ["cgtmse-funding", "pmegp-loan-subsidy"];
 }
 if (post.slug.includes("iso") || post.category.toLowerCase().includes("compliance")) {
 return ["iso-certification", "udyam-registration"];
 }
 return ["cgtmse-funding"];
 }, [post.slug, post.category]);

 const services = serviceSlugs
 .map((slug) => getServiceBySlug(slug))
 .filter((s): s is NonNullable<typeof s> => Boolean(s));

 if (services.length === 0) return null;

 return (
 <section aria-labelledby="related-services-heading" className="mt-14 pt-10 border-t border-[#A6CCEA]/80">
 <div className="space-y-4">
 <div className="flex items-center gap-2">
 <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-100 border border-amber-300 px-2.5 py-0.5 rounded-md shadow-2xs">
 Associated Practice Areas
 </span>
 </div>

 <h3 id="related-services-heading" className="font-serif text-2xl font-bold text-slate-900">
 Related Advisory Solutions
 </h3>

 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
 {services.map((service) => (
 <Link
 key={service.slug}
 href={`/services/${service.slug}`}
 className="group p-5 rounded-2xl border border-white/90 bg-white/85 shadow-[0_10px_30px_rgba(15,23,42,0.06)]  hover:border-amber-400/60 hover:shadow-[0_16px_40px_rgba(14,165,233,0.15)] transition-all flex flex-col justify-between space-y-3"
 >
 <div className="space-y-2">
 <div className="flex items-center justify-between">
 <span className="text-xs font-mono font-bold text-amber-900 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded uppercase tracking-wider">
 {service.category} Practice
 </span>
 {service.category === "funding" ? (
 <Landmark className="w-4 h-4 text-amber-600" aria-hidden="true" />
 ) : (
 <ShieldCheck className="w-4 h-4 text-amber-600" aria-hidden="true" />
 )}
 </div>

 <h4 className="font-serif text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
 {service.name}
 </h4>

 <p className="text-xs text-slate-600 font-sans line-clamp-2 leading-relaxed">
 {service.shortDescription}
 </p>
 </div>

 <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-amber-700 group-hover:text-amber-800">
 <span>Explore Advisory Practice</span>
 <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
