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
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-950/80 backdrop-blur-md border border-amber-500/40 text-xs font-mono tracking-widest text-amber-300 uppercase shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span>ADVISORY DESK PROFILE &bull; INSTITUTIONAL CORPS</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-white tracking-tight">
          Agnivridhi Institutional Advisory
        </h2>
        <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed">
          We operate synchronized advisory pods across debt syndication, statutory quality standards,
          and digital engineering to serve emerging manufacturers, startups, and MSMEs across India.
        </p>
      </div>

      {/* Grid of Firm Metadata Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Office Location */}
        <div className="p-5 rounded-2xl bg-gradient-to-b from-teal-900/80 via-[#043331]/95 to-teal-950/95 border border-teal-500/30 flex items-start gap-3.5 shadow-lg">
          <div className="w-10 h-10 rounded-xl bg-amber-950/60 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 border border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
            <MapPin className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <span className="text-[11px] font-mono font-bold text-amber-400/90 uppercase tracking-wider block">
              Headquarters
            </span>
            <p className="font-serif font-semibold text-amber-300 text-base mt-0.5">
              {city}, {state}
            </p>
            <p className="text-xs text-teal-100/80 font-sans mt-0.5">
              {country} &bull; Pan-India Operational Jurisdiction
            </p>
          </div>
        </div>

        {/* Response Guarantee */}
        <div className="p-5 rounded-2xl bg-gradient-to-b from-teal-900/80 via-[#043331]/95 to-teal-950/95 border border-teal-500/30 flex items-start gap-3.5 shadow-lg">
          <div className="w-10 h-10 rounded-xl bg-amber-950/60 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 border border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
            <Clock className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <span className="text-[11px] font-mono font-bold text-amber-400/90 uppercase tracking-wider block">
              Diagnostic SLA
            </span>
            <p className="font-serif font-semibold text-amber-300 text-base mt-0.5">
              Within 24 Business Hours
            </p>
            <p className="text-xs text-teal-100/80 font-sans mt-0.5">
              Direct appraisal by practice lead
            </p>
          </div>
        </div>
      </div>

      {/* Direct Verified Channels (rendered conditionally if configured in site-config) */}
      {hasDirectChannels && (
        <div className="p-5 rounded-2xl bg-gradient-to-b from-teal-900/80 via-[#043331]/95 to-teal-950/95 border border-teal-500/30 space-y-3 shadow-lg">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400/90 block">
            Direct Contact Lines
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans">
            {phone && (
              <a
                href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
                className="flex items-center gap-2.5 p-3 rounded-lg bg-teal-950/80 border border-teal-500/30 text-amber-300 hover:text-amber-200 hover:border-amber-400/60 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400 shrink-0" aria-hidden="true" />
                <span className="font-semibold">{phone}</span>
              </a>
            )}

            {email && (
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2.5 p-3 rounded-lg bg-teal-950/80 border border-teal-500/30 text-amber-300 hover:text-amber-200 hover:border-amber-400/60 transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-400 shrink-0" aria-hidden="true" />
                <span className="font-semibold truncate">{email}</span>
              </a>
            )}
          </div>
        </div>
      )}

      {/* Confidentiality Commitment */}
      <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-b from-teal-900/80 via-[#043331]/95 to-teal-950/95 border border-teal-500/30 text-xs text-teal-100/85 font-sans leading-relaxed shadow-lg">
        <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
        <p>
          <strong className="text-amber-300 font-semibold">Strict Confidentiality:</strong> All Detailed
          Project Reports (DPRs), banking CMA projections, and proprietary technical blueprints submitted
          via this desk are protected under professional non-disclosure governance.
        </p>
      </div>
    </div>
  );
}
