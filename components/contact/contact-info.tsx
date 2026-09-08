import * as React from "react";
import { MapPin, Clock, ShieldCheck, Phone, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Card } from "@/components/ui/card";

export function ContactInfo() {
  const { phone, email } = siteConfig.contact;
  const { city, state, country } = siteConfig.company.location;

  const hasDirectChannels = Boolean(phone || email);

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0891B2] bg-[#0891B2]/10 border border-cyan-200 px-2.5 py-0.5 rounded">
          Advisory Desk Profile
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#0F0A1A] tracking-tight">
          Agnivridhi Institutional Advisory
        </h2>
        <p className="text-[#475569] font-sans text-sm sm:text-base leading-relaxed">
          We operate synchronized advisory pods across debt syndication, statutory quality standards,
          and digital engineering to serve emerging manufacturers, startups, and MSMEs across India.
        </p>
      </div>

      {/* Grid of Firm Metadata Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Office Location */}
        <Card variant="standard" className="p-5 flex items-start gap-3.5 border-cyan-100 bg-white">
          <div className="w-10 h-10 rounded-xl bg-cyan-50 text-[#0891B2] flex items-center justify-center shrink-0 mt-0.5 border border-cyan-100">
            <MapPin className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <span className="text-[11px] font-mono font-bold text-[#64748B] uppercase tracking-wider block">
              Headquarters
            </span>
            <p className="font-serif font-semibold text-[#0F0A1A] text-base mt-0.5">
              {city}, {state}
            </p>
            <p className="text-xs text-[#64748B] font-sans mt-0.5">
              {country} &bull; Pan-India Operational Jurisdiction
            </p>
          </div>
        </Card>

        {/* Response Guarantee */}
        <Card variant="standard" className="p-5 flex items-start gap-3.5 border-cyan-100 bg-white">
          <div className="w-10 h-10 rounded-xl bg-cyan-50 text-[#0891B2] flex items-center justify-center shrink-0 mt-0.5 border border-cyan-100">
            <Clock className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <span className="text-[11px] font-mono font-bold text-[#64748B] uppercase tracking-wider block">
              Diagnostic SLA
            </span>
            <p className="font-serif font-semibold text-[#0F0A1A] text-base mt-0.5">
              Within 24 Business Hours
            </p>
            <p className="text-xs text-[#64748B] font-sans mt-0.5">
              Direct appraisal by practice lead
            </p>
          </div>
        </Card>
      </div>

      {/* Direct Verified Channels (rendered conditionally if configured in site-config) */}
      {hasDirectChannels && (
        <div className="p-5 rounded-2xl bg-white border border-cyan-100 space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#64748B] block">
            Direct Contact Lines
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans">
            {phone && (
              <a
                href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
                className="flex items-center gap-2.5 p-3 rounded-lg bg-cyan-50 border border-cyan-100 text-[#0F0A1A] hover:text-[#0891B2] hover:border-[#0891B2]/40 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#0891B2] shrink-0" aria-hidden="true" />
                <span className="font-semibold">{phone}</span>
              </a>
            )}

            {email && (
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2.5 p-3 rounded-lg bg-cyan-50 border border-cyan-100 text-[#0F0A1A] hover:text-[#0891B2] hover:border-[#0891B2]/40 transition-colors"
              >
                <Mail className="w-4 h-4 text-[#0891B2] shrink-0" aria-hidden="true" />
                <span className="font-semibold truncate">{email}</span>
              </a>
            )}
          </div>
        </div>
      )}

      {/* Confidentiality Commitment */}
      <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-cyan-100 text-xs text-[#475569] font-sans leading-relaxed">
        <ShieldCheck className="w-5 h-5 text-[#0891B2] shrink-0 mt-0.5" aria-hidden="true" />
        <p>
          <strong className="text-[#0F0A1A] font-semibold">Strict Confidentiality:</strong> All Detailed
          Project Reports (DPRs), banking CMA projections, and proprietary technical blueprints submitted
          via this desk are protected under professional non-disclosure governance.
        </p>
      </div>
    </div>
  );
}
