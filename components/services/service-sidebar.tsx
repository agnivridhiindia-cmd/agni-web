import * as React from "react";
import Link from "next/link";
import {
  Landmark,
  ShieldCheck,
  Globe,
  Cpu,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/types/service";
import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/link-button";
import { siteConfig } from "@/lib/site-config";

const categoryLabels: Record<string, string> = {
  funding: "Government & Debt Funding",
  compliance: "Compliance & Certifications",
  digital: "Digital Transformation",
  it: "Custom Software & IT",
};

const iconMap: Record<string, LucideIcon> = {
  funding: Landmark,
  compliance: ShieldCheck,
  digital: Globe,
  it: Cpu,
};

interface ServiceSidebarProps {
  service: Service;
}

export function ServiceSidebar({ service }: ServiceSidebarProps) {
  const categoryLabel = categoryLabels[service.category] || service.category;
  const CategoryIcon = iconMap[service.category] || Landmark;
  const whatsappNumber = siteConfig.contact.whatsapp;

  return (
    <aside aria-label="Service consultation sidebar" className="lg:col-span-4">
      <div className="sticky top-28 space-y-6">
        {/* Main Consultation Card */}
        <Card variant="featured" className="p-6 sm:p-7 space-y-5">
          <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center border border-teal-100 shadow-xs">
            <CategoryIcon className="w-5 h-5" />
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-xl font-semibold text-slate-900 leading-snug">
              Schedule Preliminary Diagnostic
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm font-sans leading-relaxed">
              Connect with our senior consultants to review DPR viability, statutory eligibility,
              and documentation turnaround for {service.name}.
            </p>
          </div>

          <div className="space-y-3 pt-1">
            <LinkButton
              href={`/contact?service=${encodeURIComponent(service.slug)}`}
              variant="primary"
              className="w-full justify-center shadow-xs"
            >
              <span>Inquire About {service.name}</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </LinkButton>

            {whatsappNumber && whatsappNumber.trim() !== "" && (
              <LinkButton
                href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  `Hello Agnivridhi India, I would like to inquire about ${service.name}.`
                )}`}
                variant="outline"
                className="w-full justify-center text-xs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PhoneCall className="w-3.5 h-3.5 mr-1.5 text-teal-700" />
                <span>Connect via WhatsApp</span>
              </LinkButton>
            )}
          </div>

          {/* Assurances */}
          <div className="pt-4 border-t border-slate-100 space-y-2.5 text-xs text-slate-600 font-sans">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
              <span>Direct engagement with accredited specialists</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
              <span>Strict enterprise confidentiality under NDA</span>
            </div>
          </div>
        </Card>

        {/* Practice Desk Navigation Anchor */}
        <div className="p-5 sm:p-6 rounded-xl border border-slate-200/90 bg-slate-50/80 text-xs space-y-2.5">
          <span className="font-mono text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
            Dedicated Practice Desk
          </span>
          <p className="text-slate-600 leading-relaxed font-sans">
            This program is delivered under Agnivridhi&apos;s <strong>{categoryLabel}</strong>{" "}
            practice desk.
          </p>
          <Link
            href={`/services#${service.category}`}
            className="inline-flex items-center gap-1 font-semibold text-teal-700 hover:text-teal-800 transition-colors pt-1"
          >
            <span>Explore all {categoryLabel} programs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </aside>
  );
}
