import React from 'react';
import { Phone, Clock } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site.config';

export default function EmergencyTopbar() {
  return (
    <div className="bg-slate-900 text-slate-100 text-xs sm:text-sm py-2 px-4 border-b border-slate-800 relative z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 sm:gap-6">
        {/* Left: Live Emerald Beacon */}
        <div className="flex items-center gap-2 min-w-0">
          <span className="relative flex h-2.5 w-2.5 flex-shrink-0" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <p className="font-bold tracking-wider text-[11px] sm:text-xs text-slate-200 truncate uppercase">
            24/7 EMERGENCY DISPATCH ACTIVE IN GREATER AUSTIN
          </p>
        </div>

        {/* Center: Guaranteed Arrival Badge (hidden on small mobile, visible on lg+) */}
        <div className="hidden lg:flex items-center gap-1.5 text-xs text-slate-300 bg-slate-800/80 px-2.5 py-0.5 rounded-full border border-slate-700/60">
          <Clock className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" aria-hidden="true" />
          <span>
            Average response: <strong className="text-white font-semibold">Under 45 minutes</strong>
          </span>
        </div>

        {/* Right: Direct Call Link */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <span className="hidden sm:inline-block text-xs text-slate-400">
            Average response: <strong className="text-slate-200 font-medium lg:hidden">Under 45 minutes</strong>
          </span>
          <a
            href={`tel:${SITE_CONFIG.business.phone}`}
            className="inline-flex items-center gap-1.5 font-bold text-xs sm:text-sm text-amber-400 hover:text-amber-300 transition-colors group"
            aria-label={`Call emergency dispatch at ${SITE_CONFIG.business.displayPhone}`}
          >
            <Phone className="w-3.5 h-3.5 fill-amber-400 text-amber-400 group-hover:rotate-12 transition-transform duration-150 flex-shrink-0" aria-hidden="true" />
            <span className="underline decoration-amber-400/40 hover:decoration-amber-300">
              <span className="hidden sm:inline">Call Dispatch: </span>
              {SITE_CONFIG.business.displayPhone}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
