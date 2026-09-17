'use client';

import React from 'react';
import {
  BadgeCheck,
  Truck,
  Video,
  Sparkles,
  ShieldCheck,
  Clock,
  Award,
  Phone,
  ArrowRight,
  Star,
  CheckCircle2,
  Lock,
} from 'lucide-react';
import { SITE_CONFIG } from '@/config/site.config';
import { WhyChooseUsPillar } from '@/types';

// Concrete proof bullets for each pillar
const PILLAR_PROOF_POINTS: Record<string, string[]> = {
  'pillar-licensed': [
    '100% background-checked & drug-tested',
    'Texas Master Plumber Lic #MP-41982',
    'Strict adherence to Uniform Plumbing Code',
  ],
  'pillar-inventory': [
    '1,500+ OEM replacement parts stocked per van',
    '94% first-visit repair completion rate',
    'Zero supply-house run delays or downtime',
  ],
  'pillar-diagnostics': [
    'HD fiberoptic in-pipe color camera inspection',
    'Acoustic ground microphones & ultrasonic probes',
    'Infrared thermal imaging isolates slab leaks',
  ],
  'pillar-clean': [
    'Heavy-duty slip-resistant boot covers indoors',
    'Padded floor runners & protective workspace drop cloths',
    'Spotless, sanitized post-service cleanup',
  ],
};

// Distinct icon styling and background tints
const PILLAR_THEMES: Record<
  string,
  {
    bgClass: string;
    borderClass: string;
    iconClass: string;
    accentClass: string;
    badgeText: string;
  }
> = {
  'pillar-licensed': {
    bgClass: 'bg-emerald-50/80',
    borderClass: 'border-emerald-200/80',
    iconClass: 'text-emerald-700',
    accentClass: 'text-emerald-800',
    badgeText: 'Texas Certified',
  },
  'pillar-inventory': {
    bgClass: 'bg-blue-50/80',
    borderClass: 'border-blue-200/80',
    iconClass: 'text-blue-700',
    accentClass: 'text-blue-800',
    badgeText: '94% First-Visit Fix',
  },
  'pillar-diagnostics': {
    bgClass: 'bg-amber-50/80',
    borderClass: 'border-amber-200/80',
    iconClass: 'text-amber-700',
    accentClass: 'text-amber-800',
    badgeText: 'Non-Invasive Tech',
  },
  'pillar-clean': {
    bgClass: 'bg-indigo-50/80',
    borderClass: 'border-indigo-200/80',
    iconClass: 'text-indigo-700',
    accentClass: 'text-indigo-800',
    badgeText: 'Respect For Property',
  },
};

const renderPillarIcon = (iconName: string) => {
  switch (iconName) {
    case 'BadgeCheck':
    case 'ShieldCheck':
      return <BadgeCheck className="w-7 h-7" aria-hidden="true" />;
    case 'Truck':
      return <Truck className="w-7 h-7" aria-hidden="true" />;
    case 'Video':
    case 'SearchCheck':
      return <Video className="w-7 h-7" aria-hidden="true" />;
    case 'Sparkles':
      return <Sparkles className="w-7 h-7" aria-hidden="true" />;
    default:
      return <ShieldCheck className="w-7 h-7" aria-hidden="true" />;
  }
};

export default function WhyChooseUs() {
  const pillars: WhyChooseUsPillar[] = SITE_CONFIG.pillars || SITE_CONFIG.whyChooseUs || [];

  const handleScrollToWizard = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== 'undefined') {
      const wizardEl = document.getElementById('wizard');
      if (wizardEl) {
        e.preventDefault();
        window.history.pushState(null, '', '#wizard');
        wizardEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="why-us"
      className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden border-b border-slate-200/80"
      aria-label="Why Choose ApexFlow Plumbing"
    >
      {/* Background Decorative Gradient Blobs */}
      <div
        className="absolute top-1/4 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-0 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs sm:text-sm font-bold shadow-xs mb-4">
            <ShieldCheck className="w-4 h-4 text-blue-600" aria-hidden="true" />
            <span>Austin&apos;s Gold Standard in Residential Plumbing</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Why Austin Homeowners Trust Apex Plumbing
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Over a decade of dependable emergency service, licensed master craftsmanship, and transparent pricing.
          </p>
        </div>

        {/* Main 2-Column Content Layout: 4 Pillars (Left) + Stats/Credibility Card (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: 4 Value Pillars (2x2 Grid) */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-between space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((pillar, idx) => {
                const theme =
                  PILLAR_THEMES[pillar.id] ||
                  PILLAR_THEMES['pillar-licensed'];
                const proofBullets = PILLAR_PROOF_POINTS[pillar.id] || [];

                return (
                  <div
                    key={pillar.id || idx}
                    className="bg-slate-50/70 hover:bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                  >
                    {/* Top Pill & Icon */}
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-5">
                        <div
                          className={`w-14 h-14 rounded-2xl ${theme.bgClass} border ${theme.borderClass} ${theme.iconClass} flex items-center justify-center shadow-xs flex-shrink-0 group-hover:scale-105 transition-transform duration-200`}
                        >
                          {renderPillarIcon(pillar.iconName)}
                        </div>
                        <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-600 shadow-2xs font-mono">
                          {theme.badgeText}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-extrabold text-navy-900 mb-2.5 leading-snug group-hover:text-blue-900 transition-colors">
                        {pillar.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                        {pillar.description}
                      </p>
                    </div>

                    {/* Proof Points List */}
                    {proofBullets.length > 0 && (
                      <div className="pt-4 border-t border-slate-200/70 space-y-2 mt-auto">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 block">
                          Verified Standard
                        </span>
                        {proofBullets.map((point, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2
                              className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5"
                              aria-hidden="true"
                            />
                            <span className="leading-tight font-medium">{point}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Micro Trust Guarantee Bar below pillars */}
            <div className="rounded-2xl bg-blue-50/60 border border-blue-200/80 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-left">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                  <ShieldCheck className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-bold text-navy-900">
                    No Hidden Fees Guarantee &amp; $0 Overtime Charges
                  </p>
                  <p className="text-xs text-slate-600">
                    Every repair price is quoted in writing before work starts. Same rates nights, weekends &amp; holidays.
                  </p>
                </div>
              </div>
              <a
                href="#pricing"
                className="text-xs font-bold text-blue-700 hover:text-blue-800 whitespace-nowrap inline-flex items-center gap-1 group"
              >
                <span>View Flat Rates</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Side Visual / Stats Card */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col">
            <div className="bg-[#151d2a] text-white rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-xl relative overflow-hidden flex flex-col justify-between h-full">
              {/* Subtle ambient lighting inside card */}
              <div
                className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative z-10">
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5 text-orange-400" aria-hidden="true" />
                    <span>Contractor Credibility</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-200">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
                    <span>4.9 / 5.0 Rating</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug mb-6">
                  Austin&apos;s Top-Rated Emergency Plumbing Fleet
                </h3>

                {/* 3 Core Stats */}
                <div className="space-y-4 mb-7">
                  {/* Stat 1: 10,000+ Homes */}
                  <div className="bg-slate-800/60 hover:bg-slate-800/90 border border-slate-700/60 rounded-2xl p-4 flex items-start gap-3.5 transition-colors">
                    <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center flex-shrink-0 font-bold">
                      <Award className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-2xl font-black text-white tracking-tight">
                        10,000+
                      </div>
                      <div className="text-sm font-bold text-orange-400">
                        Austin Homes Restored
                      </div>
                      <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                        Trusted locally across Travis, Williamson &amp; Hays counties.
                      </p>
                    </div>
                  </div>

                  {/* Stat 2: 45 Minutes Emergency Response */}
                  <div className="bg-slate-800/60 hover:bg-slate-800/90 border border-slate-700/60 rounded-2xl p-4 flex items-start gap-3.5 transition-colors">
                    <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 font-bold">
                      <Clock className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-2xl font-black text-white tracking-tight">
                        45 Minutes
                      </div>
                      <div className="text-sm font-bold text-emerald-400">
                        Rapid Emergency Response
                      </div>
                      <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                        Zoned mobile units ready for instant dispatch 24/7/365.
                      </p>
                    </div>
                  </div>

                  {/* Stat 3: 100% Satisfaction Guarantee */}
                  <div className="bg-slate-800/60 hover:bg-slate-800/90 border border-slate-700/60 rounded-2xl p-4 flex items-start gap-3.5 transition-colors">
                    <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 font-bold">
                      <ShieldCheck className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-2xl font-black text-white tracking-tight">
                        100%
                      </div>
                      <div className="text-sm font-bold text-blue-400">
                        Satisfaction Guarantee
                      </div>
                      <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                        Backed by our 1-Year Workmanship Warranty &amp; OEM parts guarantee.
                      </p>
                    </div>
                  </div>
                </div>

                {/* State Licensing & Insurance Badges */}
                <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-3.5 mb-6 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="font-semibold text-slate-200">
                      {SITE_CONFIG.business.licenseNumber}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-slate-300">
                      {SITE_CONFIG.business.insuranceAmount}
                    </span>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="relative z-10 space-y-3 pt-1">
                <a
                  href="#wizard"
                  onClick={handleScrollToWizard}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 text-center"
                  aria-label="Launch instant 60-second quote wizard"
                >
                  <span>Schedule Service Now</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>

                <a
                  href={`tel:${SITE_CONFIG.business.phone}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 text-xs sm:text-sm font-bold hover:-translate-y-0.5 active:translate-y-0 transition-all text-center"
                  aria-label={`Call emergency dispatch at ${SITE_CONFIG.business.phone}`}
                >
                  <Phone className="w-4 h-4 text-orange-400 flex-shrink-0" aria-hidden="true" />
                  <span>Call {SITE_CONFIG.business.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
