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
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-amber-400/50 text-xs font-mono tracking-widest text-amber-900 uppercase shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
          <span>ADVISORY DESK PROFILE &bull; INSTITUTIONAL CORPS</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          Agnivridhi Institutional Advisory
        </h2>
        <p className="text-slate-700 font-sans text-sm sm:text-base leading-relaxed">
          We operate synchronized advisory pods across debt syndication, statutory quality standards,
          and digital engineering to serve emerging manufacturers, startups, and MSMEs across India.
        </p>
      </div>

      {/* Grid of Firm Metadata Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Office Location */}
        <div className="p-5 rounded-3xl bg-white/85 border border-white/90 flex items-start gap-3.5 shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl hover:border-amber-400/60 hover:shadow-[0_24px_50px_rgba(14,165,233,0.18)] transition-all">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5 border border-amber-300 shadow-2xs">
            <MapPin className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <span className="text-[11px] font-mono font-bold text-amber-900 uppercase tracking-wider block">
              Headquarters
            </span>
            <p className="font-serif font-bold text-slate-900 text-base mt-0.5">
              {city}, {state}
            </p>
            <p className="text-xs text-slate-600 font-sans mt-0.5">
              {country} &bull; Pan-India Operational Jurisdiction
            </p>
          </div>
        </div>

        {/* Response Guarantee */}
        <div className="p-5 rounded-3xl bg-white/85 border border-white/90 flex items-start gap-3.5 shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl hover:border-amber-400/60 hover:shadow-[0_24px_50px_rgba(14,165,233,0.18)] transition-all">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5 border border-amber-300 shadow-2xs">
            <Clock className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <span className="text-[11px] font-mono font-bold text-amber-900 uppercase tracking-wider block">
              Diagnostic SLA
            </span>
            <p className="font-serif font-bold text-slate-900 text-base mt-0.5">
              Within 24 Business Hours
            </p>
            <p className="text-xs text-slate-600 font-sans mt-0.5">
              Direct appraisal by practice lead
            </p>
          </div>
        </div>
      </div>

      {/* Direct Verified Channels (rendered conditionally if configured in site-config) */}
      {hasDirectChannels && (
        <div className="p-5 rounded-3xl bg-white/85 border border-white/90 space-y-3 shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-900 block">
            Direct Contact Lines
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans">
            {phone && (
              <a
                href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200/90 text-slate-900 hover:text-amber-800 hover:border-amber-400/60 transition-colors shadow-2xs"
              >
                <Phone className="w-4 h-4 text-amber-600 shrink-0" aria-hidden="true" />
                <span className="font-semibold">{phone}</span>
              </a>
            )}

            {email && (
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200/90 text-slate-900 hover:text-amber-800 hover:border-amber-400/60 transition-colors shadow-2xs"
              >
                <Mail className="w-4 h-4 text-amber-600 shrink-0" aria-hidden="true" />
                <span className="font-semibold truncate">{email}</span>
              </a>
            )}
          </div>
        </div>
      )}

      {/* Confidentiality Commitment */}
      <div className="flex items-start gap-3 p-4 rounded-3xl bg-white/85 border border-white/90 text-xs text-slate-700 font-sans leading-relaxed shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl">
        <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
        <p>
          <strong className="text-amber-900 font-bold">Strict Confidentiality:</strong> All Detailed
          Project Reports (DPRs), banking CMA projections, and proprietary technical blueprints submitted
          via this desk are protected under professional non-disclosure governance.
        </p>
      </div>
    </div>
  );
}
