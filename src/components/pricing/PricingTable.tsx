'use client';

import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Phone,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';
import { SITE_CONFIG } from '@/config/site.config';
import { PricingItem } from '@/types';

// Map pricing item index to related wizard service ID for seamless lead intake
const SERVICE_ID_MAP: Record<number, string> = {
  0: 'leak-repair',
  1: 'drain-cleaning',
  2: 'leak-repair',
  3: 'water-heater',
};

const PRICING_BADGES: Record<number, string> = {
  0: '$0 Diagnostic Waiver',
  1: 'Most Requested',
  2: '24/7 Rapid Fix',
  3: 'Same-Day Install',
};

// Features included in each service package
const PACKAGE_PERKS: Record<number, string[]> = {
  0: [
    'Comprehensive safety & pressure inspection',
    'Root-cause diagnostic with video/acoustic probe',
    '100% fee waived when repair authorized',
    'Upfront written quote before work starts',
  ],
  1: [
    'Up to 75 ft motorized main line snaking',
    'High-pressure 4,000 PSI hydro-jetting',
    'Complimentary in-pipe video camera check',
    'Backed by our 90-day clog-free guarantee',
  ],
  2: [
    'Thermal & acoustic pin-point leak locating',
    'Non-invasive copper, PEX, or PVC isolation',
    'Pressure regulator & shutoff valve test',
    '1-Year 100% workmanship warranty included',
  ],
  3: [
    'Same-day emergency tankless or tank repair',
    'Thermostat, burner & anode rod diagnostics',
    'Free hauling & eco-friendly recycling of old unit',
    'Manufacturer warranty + 1-Year ApexFlow labor',
  ],
};

export default function PricingTable() {
  const handleClaimQuote = (e: React.MouseEvent<HTMLAnchorElement>, serviceId?: string) => {
    if (typeof window !== 'undefined') {
      if (serviceId) {
        window.dispatchEvent(new CustomEvent('plumber-select-service', { detail: serviceId }));
      }
      const wizardEl = document.getElementById('wizard');
      if (wizardEl) {
        e.preventDefault();
        if (serviceId) {
          window.history.pushState(null, '', `#wizard?service=${serviceId}`);
        } else {
          window.history.pushState(null, '', '#wizard');
        }
        wizardEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="pricing"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden border-b border-slate-200/80"
      aria-label="Transparent Plumbing Pricing"
    >
      {/* Subtle Background Lighting Accent */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-100/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight mb-4">
            Transparent Flat-Rate Pricing: No Surprises
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            We quote the full price in writing before touching a tool. Zero overtime charges for nights, weekends, or holidays.
          </p>
        </ScrollReveal>

        {/* Diagnostic Fee Waiver Callout Banner (Styled matching Image 2) */}
        <ScrollReveal delay={0.08} className="mb-12 rounded-3xl bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 border-2 border-navy-800 p-6 sm:p-8 lg:p-10 text-white shadow-2xl relative overflow-hidden">
          {/* Subtle Decorative Background Glow */}
          <div
            className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-slate-200 mb-3.5 backdrop-blur-xs">
                <Sparkles className="w-3.5 h-3.5 text-orange-400" aria-hidden="true" />
                <span>Special Homeowner Policy</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight leading-tight mb-2.5">
                Diagnostic Fee: £0 <span className="text-orange-400 font-black">(100% Waived with Any Approved Repair)</span>
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-5">
                Our Gas Safe registered engineer diagnoses the exact root cause. If you authorize the repair, the inspection fee is completely free.
              </p>
              {/* Feature Pills */}
              <div className="flex flex-wrap gap-2.5 sm:gap-3 text-xs sm:text-sm font-semibold text-slate-200">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-800 text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" aria-hidden="true" />
                  Written quote before touching tools
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-800 text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" aria-hidden="true" />
                  £0 call-out fee with repair
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-800 text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" aria-hidden="true" />
                  Zero overtime night/weekend fees
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto flex-shrink-0">
              <a
                href="#wizard"
                onClick={(e) => handleClaimQuote(e, 'leak-repair')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 text-center"
                aria-label="Claim flat-rate quote with waived diagnostic fee"
              >
                <span>Claim Flat-Rate Quote</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={`tel:${SITE_CONFIG.business.phone}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-slate-100 hover:text-white border border-white/20 text-xs sm:text-sm font-bold transition-colors text-center"
                aria-label={`Call emergency dispatch at ${SITE_CONFIG.business.phone}`}
              >
                <Phone className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" aria-hidden="true" />
                <span>Call {SITE_CONFIG.business.displayPhone}</span>
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* 4 Pricing Benchmark Cards Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {SITE_CONFIG.pricing.map((item: PricingItem, index: number) => {
            const isDiagnostic = index === 0;
            const badgeText = PRICING_BADGES[index] || 'Flat-Rate Quote';
            const perks = PACKAGE_PERKS[index] || [];
            const serviceId = SERVICE_ID_MAP[index] || 'leak-repair';

            return (
              <StaggerItem
                key={item.service}
                className={`bg-white rounded-2xl border flex flex-col overflow-hidden transition-all duration-300 relative group hover:-translate-y-1 ${
                  isDiagnostic
                    ? 'border-slate-300 shadow-md ring-1 ring-orange-500/20'
                    : 'border-slate-200/90 shadow-sm hover:shadow-xl'
                }`}
              >
                {/* Top Badge Banner (Clean Dark Navy matching Image 2) */}
                <div className="px-4 py-2.5 text-xs font-extrabold flex items-center justify-between bg-navy-950 text-slate-200 border-b border-navy-800">
                  <span className={`tracking-wide uppercase text-[11px] flex items-center gap-1.5 ${isDiagnostic ? 'text-amber-400 font-extrabold' : 'text-slate-200'}`}>
                    {isDiagnostic ? (
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
                    ) : (
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
                    )}
                    {badgeText}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">London, UK</span>
                </div>

                {/* Card Main Body */}
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  {/* Service Title */}
                  <h3 className="text-base sm:text-lg font-extrabold text-navy-900 mb-3 leading-snug min-h-[44px]">
                    {item.service}
                  </h3>

                  {/* Price Box */}
                  <div className="mb-4 pb-4 border-b border-slate-100">
                    {isDiagnostic ? (
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-black text-slate-900 tracking-tight">£0</span>
                          <span className="text-xs font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded-md border border-orange-200/80">
                            Waived with Repair
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-1 font-medium">
                          (£49 stand-alone inspection if no repair is authorized)
                        </p>
                      </div>
                    ) : (
                      <div>
                        <div className="text-2xl sm:text-3xl font-black text-navy-900 tracking-tight">
                          {item.standardRange}
                        </div>
                        <div className="inline-flex items-center gap-1.5 mt-1 text-xs font-semibold text-slate-600">
                          <CheckCircle2 className="w-3 h-3 text-orange-500" aria-hidden="true" />
                          <span>Diagnostic fee waived with service</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Highlights Description */}
                  <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed font-normal min-h-[48px]">
                    {item.highlights}
                  </p>

                  {/* Package Perks List */}
                  <div className="space-y-2.5 mb-6 text-xs text-slate-700 flex-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Included in Every Visit:
                    </span>
                    {perks.map((perk, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2">
                        <CheckCircle2
                          className="w-3.5 h-3.5 text-orange-500 flex-shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span className="leading-snug text-slate-600 font-medium">{perk}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-auto pt-5 border-t border-slate-100 space-y-2">
                    <a
                      href={`#wizard?service=${serviceId}`}
                      onClick={(e) => handleClaimQuote(e, serviceId)}
                      className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full font-bold text-xs sm:text-sm shadow-2xs hover:shadow transition-all min-h-[44px] text-center ${
                        isDiagnostic
                          ? 'bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white shadow-md shadow-orange-500/20'
                          : 'bg-navy-950 hover:bg-orange-500 active:bg-orange-600 text-white'
                      }`}
                      aria-label={`Claim flat-rate quote for ${item.service}`}
                    >
                      <span>Claim Flat-Rate Quote</span>
                      <ArrowRight className="w-3.5 h-3.5 text-orange-400 group-hover:text-white group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                    </a>
                    <a
                      href={`tel:${SITE_CONFIG.business.phone}`}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 text-xs text-slate-500 hover:text-orange-600 transition-colors font-medium text-center"
                      aria-label={`Call ${SITE_CONFIG.business.displayPhone} for pricing on ${item.service}`}
                    >
                      <Phone className="w-3 h-3 text-orange-500" aria-hidden="true" />
                      <span>Or Call {SITE_CONFIG.business.phone}</span>
                    </a>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
