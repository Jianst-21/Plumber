'use client';

import React from 'react';
import {
  Wrench,
  Phone,
  Zap,
  MapPin,
  Mail,
  Clock,
  ShieldCheck,
  Lock,
  ArrowRight,
  ArrowUp,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { SITE_CONFIG } from '@/config/site.config';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Coupons', href: '#coupons' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Service Area', href: '#areas' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Quote Wizard', href: '#wizard' },
];

const SERVICE_LINKS = [
  { label: 'Emergency Leak Detection & Repair', href: '#services' },
  { label: 'Drain Cleaning & Hydro-Jetting', href: '#services' },
  { label: 'Water Heater Repair & Replacement', href: '#services' },
  { label: 'Fixture & Whole-House Repiping', href: '#services' },
  { label: 'Slab Leak Thermal Imaging', href: '#services' },
  { label: 'In-Pipe HD Camera Inspection', href: '#services' },
];

const PRIMARY_CITIES = [
  'Austin, TX (Downtown, SoCo, Zilker)',
  'Round Rock, TX',
  'Cedar Park, TX',
  'Lakeway & West Lake Hills, TX',
  'Pflugerville, TX',
  'Buda & Kyle, TX',
  'Circle C Ranch & South Lamar, TX',
  'Hyde Park & Central Austin, TX',
];

export default function Footer() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (typeof window !== 'undefined') {
      const el = document.getElementById(targetId.replace('#', ''));
      if (el) {
        e.preventDefault();
        window.history.pushState(null, '', targetId);
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full" aria-label="Site Footer">
      {/* 1. Urgent Emergency Callout Strip (Section 14 in page hierarchy) */}
      <section
        className="bg-amber-500 text-slate-950 py-10 sm:py-12 px-4 relative overflow-hidden border-t-4 border-amber-600 shadow-inner"
        aria-label="Urgent Emergency Plumbing Dispatch Callout"
      >
        {/* Subtle patterned background circles */}
        <div
          className="absolute -top-24 -right-24 w-96 h-96 bg-amber-400/50 rounded-full blur-2xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-600/30 rounded-full blur-2xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Urgent Dispatch Beacon */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-950 text-amber-400 text-xs font-black uppercase tracking-wider mb-4 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span>Active Rapid Emergency Dispatch Across Central Texas</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight mb-3">
            Plumbing Emergency? Don&apos;t Wait For Water Damage To Spread!
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-slate-900 max-w-3xl mx-auto font-semibold leading-relaxed mb-8">
            Our master plumbers are in their trucks right now across Austin. Call immediately for 45-minute dispatch.
          </p>

          {/* Big CTA Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <a
              href={`tel:${SITE_CONFIG.business.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-slate-950 hover:bg-slate-900 active:bg-black text-amber-400 hover:text-amber-300 font-black text-base sm:text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-150 text-center"
              aria-label={`Call emergency dispatch now at ${SITE_CONFIG.business.phone}`}
            >
              <Phone className="w-5 h-5 fill-amber-400 text-amber-400 animate-pulse flex-shrink-0" aria-hidden="true" />
              <span>Call {SITE_CONFIG.business.phone} Now</span>
            </a>

            <a
              href="#wizard"
              onClick={(e) => handleScrollTo(e, '#wizard')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-amber-600/30 hover:bg-amber-600/40 active:bg-amber-600/50 border-2 border-slate-950 text-slate-950 font-black text-base sm:text-lg transition-colors text-center"
              aria-label="Get instant online quote"
            >
              <Zap className="w-5 h-5 fill-slate-950 text-slate-950 flex-shrink-0" aria-hidden="true" />
              <span>Get Instant Online Quote</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Comprehensive Main Footer */}
      <div className="bg-navy-950 text-slate-300 pt-16 pb-12 border-t border-navy-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Columns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
            {/* Col 1: Brand & Credibility Badges (4 Cols on LG) */}
            <div className="lg:col-span-4 flex flex-col space-y-5">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTop();
                }}
                className="flex items-center gap-3 group inline-block"
                aria-label={`${SITE_CONFIG.business.name} home`}
              >
                <div className="w-11 h-11 rounded-xl bg-navy-800 border border-navy-700 flex items-center justify-center text-amber-400 shadow-md group-hover:bg-navy-700 transition-colors">
                  <Wrench className="w-6 h-6 -rotate-45" aria-hidden="true" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-black text-white tracking-tight leading-none">
                    ApexFlow<span className="text-amber-500">.</span>
                  </span>
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">
                    Plumbing &amp; Rooter
                  </span>
                </div>
              </a>

              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                {SITE_CONFIG.business.tagline}. Rapid 45-minute dispatch, zero overtime charges, and 100% upfront flat-rate pricing.
              </p>

              {/* State Licenses & Insurance Badges */}
              <div className="space-y-2.5 pt-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-800 text-xs text-slate-200">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" aria-hidden="true" />
                  <span className="font-semibold">{SITE_CONFIG.business.licenseNumber}</span>
                </div>

                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-800 text-xs text-slate-300">
                  <Lock className="w-4 h-4 text-emerald-400 flex-shrink-0" aria-hidden="true" />
                  <span>{SITE_CONFIG.business.insuranceAmount}</span>
                </div>
              </div>
            </div>

            {/* Col 2: Quick Navigation (2 Cols on LG) */}
            <div className="lg:col-span-2">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-white mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2.5 text-sm">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleScrollTo(e, link.href)}
                      className="text-slate-300 hover:text-amber-400 transition-colors inline-flex items-center gap-1.5 group"
                    >
                      <ArrowRight className="w-3 h-3 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Plumbing Services (3 Cols on LG) */}
            <div className="lg:col-span-3">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-white mb-4">
                Plumbing Services
              </h3>
              <ul className="space-y-2.5 text-sm">
                {SERVICE_LINKS.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.href}
                      onClick={(e) => handleScrollTo(e, item.href)}
                      className="text-slate-300 hover:text-amber-400 transition-colors inline-flex items-center gap-1.5 group"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Dispatch HQ & Hours (3 Cols on LG) */}
            <div className="lg:col-span-3">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-white mb-4">
                Dispatch HQ &amp; Contact
              </h3>
              <div className="space-y-3.5 text-sm">
                <div className="flex items-start gap-3 text-slate-300">
                  <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-1" aria-hidden="true" />
                  <span>{SITE_CONFIG.business.fullAddress}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" aria-hidden="true" />
                  <a
                    href={`tel:${SITE_CONFIG.business.phone}`}
                    className="text-amber-400 hover:text-amber-300 font-bold transition-colors"
                  >
                    {SITE_CONFIG.business.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-slate-400 flex-shrink-0" aria-hidden="true" />
                  <a
                    href={`mailto:${SITE_CONFIG.business.email}`}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {SITE_CONFIG.business.email}
                  </a>
                </div>

                <div className="flex items-start gap-3 text-slate-300 pt-1">
                  <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <span className="font-bold text-white block">24/7/365 Emergency Dispatch</span>
                    <span className="text-xs text-slate-400">Nights, Weekends &amp; Holidays Included</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas Directory Bar */}
          <div className="border-t border-navy-800 pt-8 pb-8 mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Primary Austin Metro Service Coverage
              </h4>
              <a
                href="#areas"
                onClick={(e) => handleScrollTo(e, '#areas')}
                className="text-xs font-semibold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1"
              >
                <span>Check Your ZIP Code</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              {PRIMARY_CITIES.map((city) => (
                <span
                  key={city}
                  className="px-3 py-1.5 rounded-lg bg-navy-900/80 border border-navy-800 text-slate-300 font-medium"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>

          {/* Texas State Board of Plumbing Examiners (TSBPE) Regulatory Disclosure */}
          <div className="rounded-2xl bg-navy-900/90 border border-navy-800 p-5 sm:p-6 mb-10 text-xs text-slate-400 leading-relaxed">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-2.5">
              <span className="font-bold text-slate-200 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                Texas State Regulatory Disclosure
              </span>
              <a
                href="https://tsbpe.texas.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 font-semibold"
              >
                <span>TSBPE Official Portal</span>
                <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </a>
            </div>
            <p>
              Plumbing contractors in the state of Texas are regulated by the{' '}
              <strong className="text-slate-300">
                Texas State Board of Plumbing Examiners (TSBPE)
              </strong>
              , 929 E. 41st Street, P.O. Box 4200, Austin, TX 78765-4200. Phone: (512) 936-5200.
              License held by Responsible Master Plumber:{' '}
              <strong className="text-slate-200">{SITE_CONFIG.business.licenseNumber}</strong>. Fully insured
              under policy with {SITE_CONFIG.business.insuranceAmount}.
            </p>
          </div>

          {/* Bottom Legal & Copyright Bar */}
          <div className="border-t border-navy-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div>
              &copy; {new Date().getFullYear()} {SITE_CONFIG.business.name}. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <a href="#" className="hover:text-slate-200 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-slate-200 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-slate-200 transition-colors">
                Accessibility
              </a>
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-bold transition-colors ml-2"
                aria-label="Back to top of page"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
