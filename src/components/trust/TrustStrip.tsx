import React from 'react';
import { Star, ShieldCheck, BadgeCheck, Lock } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site.config';

export default function TrustStrip() {
  return (
    <section
      aria-label="Trust and Credibility Verification"
      className="bg-slate-100/80 border-y border-slate-200 py-6 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-stretch">
          {/* Badge 1: Google Reviews */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-3 p-3 rounded-xl bg-white/70 sm:bg-transparent shadow-xs sm:shadow-none border border-slate-200/50 sm:border-0">
            <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center flex-shrink-0 text-amber-500 shadow-xs">
              <span className="font-extrabold text-lg text-amber-600">G</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-center sm:justify-start gap-1">
                <span className="text-sm sm:text-base font-extrabold text-slate-900">4.9 ★</span>
                <div className="flex items-center" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
              <span className="text-xs font-medium text-slate-600">
                350+ Verified Homeowner Reviews
              </span>
            </div>
          </div>

          {/* Badge 2: BBB Accredited */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-3 p-3 rounded-xl bg-white/70 sm:bg-transparent shadow-xs sm:shadow-none border border-slate-200/50 sm:border-0">
            <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200/60 flex items-center justify-center flex-shrink-0 text-blue-700 shadow-xs">
              <ShieldCheck className="w-6 h-6 text-blue-700" aria-hidden="true" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-extrabold text-slate-900">
                BBB Accredited A+ Rating
              </span>
              <span className="text-xs font-medium text-slate-600">
                Highest Trust &amp; Ethics Standard
              </span>
            </div>
          </div>

          {/* Badge 3: State Licensed */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-3 p-3 rounded-xl bg-white/70 sm:bg-transparent shadow-xs sm:shadow-none border border-slate-200/50 sm:border-0">
            <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center flex-shrink-0 text-emerald-700 shadow-xs">
              <BadgeCheck className="w-6 h-6 text-emerald-600" aria-hidden="true" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-extrabold text-slate-900">
                Texas Master Plumber #MP-41982
              </span>
              <span className="text-xs font-semibold text-emerald-700">
                TSBPE State Board Regulated
              </span>
            </div>
          </div>

          {/* Badge 4: Insured Protection */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-3 p-3 rounded-xl bg-white/70 sm:bg-transparent shadow-xs sm:shadow-none border border-slate-200/50 sm:border-0">
            <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-300 flex items-center justify-center flex-shrink-0 text-slate-800 shadow-xs">
              <Lock className="w-5 h-5 text-slate-800" aria-hidden="true" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-extrabold text-slate-900">
                $2,000,000 Liability Coverage
              </span>
              <span className="text-xs font-medium text-slate-600">
                Fully Bonded &amp; Property Protected
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
