import React from 'react';
import { Phone, Clock } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site.config';

export default function EmergencyTopbar() {
  return (
    <div className="bg-slate-950 text-slate-200 text-xs py-1.5 px-4 border-b border-slate-800/80 relative z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Live Emerald Beacon */}
        <div className="flex items-center gap-2 min-w-0">
          <span className="relative flex h-2 w-2 flex-shrink-0" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <p className="font-bold tracking-wider text-[11px] sm:text-xs text-slate-200 truncate uppercase">
            24/7 Emergency Dispatch Active in Greater London
          </p>
        </div>

        {/* Center: Single Guaranteed Arrival Cue */}
        <div className="hidden md:flex items-center gap-1.5 text-xs text-slate-400">
          <Clock className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" aria-hidden="true" />
          <span>
            Arrival time: <strong className="text-slate-200 font-semibold">Under 45 minutes</strong>
          </span>
        </div>

        {/* Right: Direct Call Link */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <a
            href={`tel:${SITE_CONFIG.business.phone}`}
            className="inline-flex items-center gap-1.5 font-bold text-xs sm:text-xs text-orange-400 hover:text-orange-300 transition-colors group"
            aria-label={`Call emergency dispatch at ${SITE_CONFIG.business.displayPhone}`}
          >
            <Phone className="w-3 h-3 fill-orange-400 text-orange-400 group-hover:rotate-12 transition-transform duration-150 flex-shrink-0" aria-hidden="true" />
            <span>
              <span className="hidden sm:inline">Call Dispatch: </span>
              {SITE_CONFIG.business.displayPhone}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
