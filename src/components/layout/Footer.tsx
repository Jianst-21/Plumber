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
import ApexLogo from '@/components/ui/ApexLogo';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
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
  'Central London (Westminster & Soho)',
  'Kensington & Chelsea',
  'Camden & Islington',
  'Richmond & Twickenham',
  'Clapham & Battersea',
  'Hampstead & Highgate',
  'Canary Wharf & Docklands',
  'Wimbledon & Putney',
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
        className="bg-amber-500 text-slate-950 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t-4 border-amber-600 shadow-inner"
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950 text-amber-400 text-xs font-black uppercase tracking-wider mb-3.5 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span>Active Rapid Emergency Dispatch Across Greater London</span>
          </div>

          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight mb-2.5 sm:mb-3">
            Plumbing Emergency? Don&apos;t Wait For Water Damage To Spread!
          </h2>

          <p className="text-sm sm:text-lg md:text-xl text-slate-900 max-w-3xl mx-auto font-semibold leading-relaxed mb-6 sm:mb-8">
            Our certified engineers are in their mobile units right now across London. Call immediately for 45-minute dispatch.
          </p>

          {/* Big CTA Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
            <a
              href={`tel:${SITE_CONFIG.business.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-slate-950 hover:bg-slate-900 active:bg-black text-amber-400 hover:text-amber-300 font-black text-sm sm:text-lg shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-150 text-center"
              aria-label={`Call emergency dispatch now at ${SITE_CONFIG.business.phone}`}
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400 flex-shrink-0" aria-hidden="true" />
              <span>Call {SITE_CONFIG.business.phone} Now</span>
            </a>

            <a
              href="#wizard"
              onClick={(e) => handleScrollTo(e, '#wizard')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-7 sm:py-4 rounded-full bg-amber-600/30 hover:bg-amber-600/40 active:bg-amber-600/50 border-2 border-slate-950 text-slate-950 font-black text-sm sm:text-lg transition-colors text-center"
              aria-label="Get instant online quote"
            >
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 fill-slate-950 text-slate-950 flex-shrink-0" aria-hidden="true" />
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
                className="inline-block group"
                aria-label={`${SITE_CONFIG.business.name} home`}
              >
                <ApexLogo size="md" variant="light" />
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
                Primary Greater London Service Coverage
              </h4>
              <a
                href="#areas"
                onClick={(e) => handleScrollTo(e, '#areas')}
                className="text-xs font-semibold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1"
              >
                <span>Check Your Postcode</span>
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

          {/* UK Gas Safe Register & Regulatory Disclosure */}
          <div className="rounded-2xl bg-navy-900/90 border border-navy-800 p-5 sm:p-6 mb-10 text-xs text-slate-400 leading-relaxed">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-2.5">
              <span className="font-bold text-slate-200 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                UK Industry &amp; Safety Regulatory Disclosure
              </span>
              <a
                href="https://www.gassaferegister.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 font-semibold"
              >
                <span>Gas Safe Official Register</span>
                <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </a>
            </div>
            <p>
              Plumbing and gas heating engineers in the United Kingdom are regulated under the{' '}
              <strong className="text-slate-300">
                Gas Safe Register and British Standards (BS 6700 / WRAS)
              </strong>
              . Registration held by Qualified Heating Engineer:{' '}
              <strong className="text-slate-200">{SITE_CONFIG.business.licenseNumber}</strong>. Fully insured
              with {SITE_CONFIG.business.insuranceAmount}. Registered office: {SITE_CONFIG.business.fullAddress}.
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
