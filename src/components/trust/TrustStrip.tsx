import React from 'react';
import { Star, ShieldCheck, BadgeCheck, Lock } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';
import { SITE_CONFIG } from '@/config/site.config';

export default function TrustStrip() {
  return (
    <section
      aria-label="Trust and Credibility Verification"
      className="bg-slate-100/80 border-y border-slate-200 py-5 sm:py-6 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 items-stretch">
          {/* Badge 1: Google Reviews */}
          <StaggerItem className="flex flex-row items-center sm:items-start text-left gap-3.5 p-3.5 sm:p-3 rounded-xl bg-white sm:bg-white/70 lg:bg-transparent shadow-xs sm:shadow-none border border-slate-200/80 sm:border-slate-200/50 lg:border-0">
            <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center flex-shrink-0 text-amber-500 shadow-xs">
              <span className="font-extrabold text-lg text-amber-600">G</span>
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1">
                <span className="text-sm sm:text-base font-extrabold text-slate-900">4.9</span>
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
          </StaggerItem>

          {/* Badge 2: CIPHE Registered */}
          <StaggerItem className="flex flex-row items-center sm:items-start text-left gap-3.5 p-3.5 sm:p-3 rounded-xl bg-white sm:bg-white/70 lg:bg-transparent shadow-xs sm:shadow-none border border-slate-200/80 sm:border-slate-200/50 lg:border-0">
            <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200/60 flex items-center justify-center flex-shrink-0 text-blue-700 shadow-xs">
              <ShieldCheck className="w-6 h-6 text-blue-700" aria-hidden="true" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug">
                CIPHE Registered Member
              </span>
              <span className="text-xs font-medium text-slate-600 mt-0.5">
                Chartered Plumbing &amp; Heating Standard
              </span>
            </div>
          </StaggerItem>

          {/* Badge 3: State Licensed */}
          <StaggerItem className="flex flex-row items-center sm:items-start text-left gap-3.5 p-3.5 sm:p-3 rounded-xl bg-white sm:bg-white/70 lg:bg-transparent shadow-xs sm:shadow-none border border-slate-200/80 sm:border-slate-200/50 lg:border-0">
            <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center flex-shrink-0 text-emerald-700 shadow-xs">
              <BadgeCheck className="w-6 h-6 text-emerald-600" aria-hidden="true" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug">
                Gas Safe Registered #629148
              </span>
              <span className="text-xs font-semibold text-emerald-700 mt-0.5">
                CIPHE &amp; Gas Safe UK Regulated
              </span>
            </div>
          </StaggerItem>

          {/* Badge 4: Insured Protection */}
          <StaggerItem className="flex flex-row items-center sm:items-start text-left gap-3.5 p-3.5 sm:p-3 rounded-xl bg-white sm:bg-white/70 lg:bg-transparent shadow-xs sm:shadow-none border border-slate-200/80 sm:border-slate-200/50 lg:border-0">
            <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-300 flex items-center justify-center flex-shrink-0 text-slate-800 shadow-xs">
              <Lock className="w-5 h-5 text-slate-800" aria-hidden="true" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug">
                £5,000,000 Liability Cover
              </span>
              <span className="text-xs font-medium text-slate-600 mt-0.5">
                Fully Insured &amp; Property Protected
              </span>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
