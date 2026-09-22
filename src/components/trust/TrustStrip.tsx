import React from 'react';
import { Star, ShieldCheck, BadgeCheck, Lock } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';
import { SITE_CONFIG } from '@/config/site.config';

export default function TrustStrip() {
  return (
    <section
      aria-label="Trust and Credibility Verification"
      className="bg-slate-100/80 border-y border-slate-200 py-3.5 sm:py-6 px-3.5 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-8 items-stretch">
          {/* Badge 1: Google Reviews */}
          <StaggerItem className="flex flex-col sm:flex-row items-start text-left gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-none bg-white sm:bg-white/70 lg:bg-transparent shadow-2xs sm:shadow-none border border-slate-200/80 sm:border-slate-200/50 lg:border-0">
            <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-none bg-amber-50 border border-amber-200/60 flex items-center justify-center flex-shrink-0 text-amber-500 shadow-xs">
              <span className="font-extrabold text-sm sm:text-lg text-amber-600">G</span>
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1">
                <span className="text-xs sm:text-base font-extrabold text-slate-900">4.9</span>
                <div className="flex items-center" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-700 leading-tight mt-0.5">
                350+ Reviews
              </span>
            </div>
          </StaggerItem>

          {/* Badge 2: CIPHE Registered */}
          <StaggerItem className="flex flex-col sm:flex-row items-start text-left gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-none bg-white sm:bg-white/70 lg:bg-transparent shadow-2xs sm:shadow-none border border-slate-200/80 sm:border-slate-200/50 lg:border-0">
            <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-none bg-blue-50 border border-blue-200/60 flex items-center justify-center flex-shrink-0 text-blue-700 shadow-xs">
              <ShieldCheck className="w-4 h-4 sm:w-6 sm:h-6 text-blue-700" aria-hidden="true" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xs sm:text-base font-extrabold text-slate-900 leading-snug">
                CIPHE Member
              </span>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-700 leading-tight mt-0.5">
                UK Standard
              </span>
            </div>
          </StaggerItem>

          {/* Badge 3: State Licensed */}
          <StaggerItem className="flex flex-col sm:flex-row items-start text-left gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-none bg-white sm:bg-white/70 lg:bg-transparent shadow-2xs sm:shadow-none border border-slate-200/80 sm:border-slate-200/50 lg:border-0">
            <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-none bg-emerald-50 border border-emerald-200/60 flex items-center justify-center flex-shrink-0 text-emerald-700 shadow-xs">
              <BadgeCheck className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-600" aria-hidden="true" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xs sm:text-base font-extrabold text-slate-900 leading-snug">
                Gas Safe Reg
              </span>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-700 leading-tight mt-0.5 truncate">
                Lic #{SITE_CONFIG.business.licenseNumber}
              </span>
            </div>
          </StaggerItem>

          {/* Badge 4: Fully Insured */}
          <StaggerItem className="flex flex-col sm:flex-row items-start text-left gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-none bg-white sm:bg-white/70 lg:bg-transparent shadow-2xs sm:shadow-none border border-slate-200/80 sm:border-slate-200/50 lg:border-0">
            <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-none bg-slate-100 border border-slate-300 flex items-center justify-center flex-shrink-0 text-slate-800 shadow-xs">
              <Lock className="w-4 h-4 sm:w-6 sm:h-6 text-slate-700" aria-hidden="true" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xs sm:text-base font-extrabold text-slate-900 leading-snug">
                {SITE_CONFIG.business.insuranceAmount}
              </span>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-700 leading-tight mt-0.5">
                Public Liability
              </span>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
