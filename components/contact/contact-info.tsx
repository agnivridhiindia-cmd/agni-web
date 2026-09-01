import * as React from "react";
import { MapPin, Clock, ShieldCheck, Phone, Mail, MessageSquare } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Card } from "@/components/ui/card";

export function ContactInfo() {
  const { phone, email, whatsapp } = siteConfig.contact;
  const { city, state, country } = siteConfig.company.location;

  const hasDirectChannels = Boolean(phone || email || whatsapp);

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 border border-teal-200/80 px-2.5 py-0.5 rounded">
          Advisory Desk Profile
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
          Agnivridhi Institutional Advisory
        </h2>
        <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
          We operate synchronized advisory pods across debt syndication, statutory quality standards,
          and digital engineering to serve emerging manufacturers, startups, and MSMEs across India.
        </p>
      </div>

      {/* Grid of Firm Metadata Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Office Location */}
        <Card variant="standard" className="p-5 flex items-start gap-3.5 border-slate-200/90 bg-white">
          <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 mt-0.5 border border-teal-100">
            <MapPin className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
              Headquarters
            </span>
            <p className="font-serif font-semibold text-slate-900 text-base mt-0.5">
              {city}, {state}
            </p>
            <p className="text-xs text-slate-500 font-sans mt-0.5">
              {country} &bull; Pan-India Operational Jurisdiction
            </p>
          </div>
        </Card>

        {/* Response Guarantee */}
        <Card variant="standard" className="p-5 flex items-start gap-3.5 border-slate-200/90 bg-white">
          <div className="w-10 h-10 rounded-xl bg-gold-50 text-gold-700 flex items-center justify-center shrink-0 mt-0.5 border border-gold-200/60">
            <Clock className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
              Diagnostic SLA
            </span>
            <p className="font-serif font-semibold text-slate-900 text-base mt-0.5">
              Within 24 Business Hours
            </p>
            <p className="text-xs text-slate-500 font-sans mt-0.5">
              Direct appraisal by practice lead
            </p>
          </div>
        </Card>
      </div>

      {/* Direct Verified Channels (rendered conditionally if configured in site-config) */}
      {hasDirectChannels && (
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block">
            Direct Contact Lines
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans">
            {phone && (
              <a
                href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
                className="flex items-center gap-2.5 p-3 rounded-lg bg-white border border-slate-200 text-slate-800 hover:text-teal-800 hover:border-teal-300 transition-colors"
              >
                <Phone className="w-4 h-4 text-teal-600 shrink-0" aria-hidden="true" />
                <span className="font-semibold">{phone}</span>
              </a>
            )}

            {email && (
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2.5 p-3 rounded-lg bg-white border border-slate-200 text-slate-800 hover:text-teal-800 hover:border-teal-300 transition-colors"
              >
                <Mail className="w-4 h-4 text-teal-600 shrink-0" aria-hidden="true" />
                <span className="font-semibold truncate">{email}</span>
              </a>
            )}

            {whatsapp && (
              <a
                href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 hover:bg-emerald-100 transition-colors sm:col-span-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-700 shrink-0" aria-hidden="true" />
                <span className="font-semibold">Chat with an Advisor on WhatsApp</span>
              </a>
            )}
          </div>
        </div>
      )}

      {/* Confidentiality Commitment */}
      <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50/80 border border-slate-200/70 text-xs text-slate-600 font-sans leading-relaxed">
        <ShieldCheck className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" aria-hidden="true" />
        <p>
          <strong className="text-slate-900 font-semibold">Strict Confidentiality:</strong> All Detailed
          Project Reports (DPRs), banking CMA projections, and proprietary technical blueprints submitted
          via this desk are protected under professional non-disclosure governance.
        </p>
      </div>
    </div>
  );
}
