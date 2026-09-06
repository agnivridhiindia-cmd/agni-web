import * as React from "react";
import { MapPin, Navigation } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Card } from "@/components/ui/card";

export function MapLocation() {
  const { city, state, country } = siteConfig.company.location;
  const mapDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${city}, ${state}, ${country}`
  )}`;

  return (
    <Card variant="standard" className="p-6 rounded-2xl border-[#232727] bg-[#111313] space-y-4 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#181A1A] text-[#2DD4BF] flex items-center justify-center shrink-0 border border-[#232727]">
            <MapPin className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <span className="text-[11px] font-mono font-bold text-[#8E8B82] uppercase tracking-wider block">
              Advisory Office Location
            </span>
            <p className="font-serif font-semibold text-[#F3EFE7] text-lg">
              {city}, {state}
            </p>
          </div>
        </div>

        <a
          href={mapDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-[#C79A4A] bg-[#181A1A] hover:bg-[#202323] border border-[#C79A4A]/40 transition-colors shrink-0"
        >
          <Navigation className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Get Directions</span>
        </a>
      </div>

      <p className="text-xs text-[#8E8B82] font-sans leading-relaxed border-t border-[#232727] pt-3">
        In-person principal advisory meetings are scheduled upon preliminary document review and appointment confirmation.
      </p>
    </Card>
  );
}
