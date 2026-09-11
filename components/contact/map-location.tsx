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
    <div className="p-6 rounded-2xl bg-gradient-to-b from-teal-900/80 via-[#043331]/95 to-teal-950/95 border border-teal-500/30 space-y-4 shadow-lg">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-950/60 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
            <MapPin className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <span className="text-[11px] font-mono font-bold text-amber-400/90 uppercase tracking-wider block">
              Advisory Office Location
            </span>
            <p className="font-serif font-semibold text-amber-300 text-lg">
              {city}, {state}
            </p>
          </div>
        </div>

        <a
          href={mapDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 border border-amber-300/40 shadow-xs hover:from-amber-300 hover:to-amber-500 transition-colors shrink-0"
        >
          <Navigation className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Get Directions</span>
        </a>
      </div>

      <p className="text-xs text-teal-100/75 font-sans leading-relaxed border-t border-teal-500/30 pt-3">
        In-person principal advisory meetings are scheduled upon preliminary document review and appointment confirmation.
      </p>
    </div>
  );
}
