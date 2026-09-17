import React from 'react';
import { PhoneCall, Zap } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site.config';

export default function MobileFloatingBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 p-2.5 shadow-2xl pb-[max(0.625rem,env(safe-area-inset-bottom))]"
      role="region"
      aria-label="Quick mobile contact actions"
    >
      <div className="flex items-center gap-2.5 max-w-lg mx-auto">
        {/* Left Button: Safety Amber Direct Call CTA */}
        <a
          href={`tel:${SITE_CONFIG.business.phone}`}
          className="flex-1 min-h-[48px] h-12 flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-navy-900 font-extrabold px-3 py-2 rounded-xl shadow-lg transition-transform active:scale-95 text-sm sm:text-base leading-tight"
          aria-label={`Call emergency dispatch at ${SITE_CONFIG.business.displayPhone}`}
        >
          <PhoneCall className="w-5 h-5 flex-shrink-0 text-navy-900 fill-navy-900" aria-hidden="true" />
          <span className="truncate">Call {SITE_CONFIG.business.displayPhone}</span>
        </a>

        {/* Right Button: Navy/Blue-600 Anchor link to Free Quote Wizard */}
        <a
          href="#wizard"
          className="flex-1 min-h-[48px] h-12 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-extrabold px-3 py-2 rounded-xl shadow-lg transition-transform active:scale-95 text-sm sm:text-base leading-tight"
          aria-label="Request a free instant plumbing estimate"
        >
          <Zap className="w-5 h-5 flex-shrink-0 text-amber-400 fill-amber-400" aria-hidden="true" />
          <span className="truncate">Free Quote</span>
        </a>
      </div>
    </div>
  );
}
