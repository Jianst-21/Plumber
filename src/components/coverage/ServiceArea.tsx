'use client';

import React, { useState } from 'react';
import {
  MapPin,
  Search,
  CheckCircle2,
  AlertCircle,
  Clock,
  Phone,
  ArrowRight,
  Navigation,
  ShieldCheck,
  Sparkles,
  RotateCcw,
} from 'lucide-react';
import { SITE_CONFIG } from '@/config/site.config';

// Primary ZIP mapping for quick neighborhood clicking
const NEIGHBORHOOD_ZIP_MAP: Record<string, string> = {
  'Downtown Austin': '78701',
  'South Congress (SoCo)': '78704',
  'Round Rock': '78664',
  'Cedar Park': '78613',
  'Lakeway': '78734',
  'Pflugerville': '78660',
  'Buda': '78610',
  'Kyle': '78640',
  'West Lake Hills': '78746',
  'Barton Creek': '78735',
  'Zilker & Barton Hills': '78704',
  'Travis Heights': '78704',
  'Hyde Park & Campus': '78705',
  'South Lamar (SoLa)': '78704',
  'Circle C Ranch': '78749',
  'Allandale & Crestview': '78757',
  'Anderson Mill': '78750',
};

// Popular Austin Metro ZIP codes for fast 1-click checking
const POPULAR_ZIPS = [
  { zip: '78701', label: 'Downtown' },
  { zip: '78704', label: 'SoCo / Zilker' },
  { zip: '78613', label: 'Cedar Park' },
  { zip: '78664', label: 'Round Rock' },
  { zip: '78746', label: 'West Lake Hills' },
  { zip: '78734', label: 'Lakeway' },
  { zip: '78660', label: 'Pflugerville' },
  { zip: '78610', label: 'Buda' },
  { zip: '78640', label: 'Kyle' },
  { zip: '78745', label: 'South Austin' },
];

// Zoned Dispatch Hubs
const DISPATCH_HUBS = [
  {
    name: 'Central Austin HQ',
    area: 'Downtown, SoCo, UT, Central',
    eta: '15–30 min',
    badge: 'HQ Station',
  },
  {
    name: 'North Williamson Fleet',
    area: 'Round Rock, Cedar Park, Pflugerville',
    eta: '25–35 min',
    badge: 'North Hub',
  },
  {
    name: 'South Hays Rapid Unit',
    area: 'Buda, Kyle, South Austin, Manchaca',
    eta: '25–40 min',
    badge: 'South Hub',
  },
  {
    name: 'Lake Travis West Mobile',
    area: 'Lakeway, West Lake Hills, Barton Creek',
    eta: '25–40 min',
    badge: 'West Fleet',
  },
];

type CheckStatus = 'idle' | 'covered' | 'out-of-area' | 'invalid';

export default function ServiceArea() {
  const [zipInput, setZipInput] = useState('');
  const [lastCheckedZip, setLastCheckedZip] = useState('');
  const [checkStatus, setCheckStatus] = useState<CheckStatus>('idle');

  const coveredZipList = SITE_CONFIG.serviceArea.zipCodes;

  const performZipCheck = (zipToCheck: string) => {
    const cleanZip = zipToCheck.trim().replace(/\D/g, '').slice(0, 5);
    if (!cleanZip || cleanZip.length !== 5) {
      setCheckStatus('invalid');
      setLastCheckedZip(cleanZip);
      return;
    }

    setLastCheckedZip(cleanZip);
    const isCovered = coveredZipList.includes(cleanZip);

    if (isCovered) {
      setCheckStatus('covered');
    } else {
      setCheckStatus('out-of-area');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    performZipCheck(zipInput);
  };

  const handleQuickZipClick = (zip: string) => {
    setZipInput(zip);
    performZipCheck(zip);
  };

  const handleNeighborhoodClick = (name: string) => {
    const mappedZip = NEIGHBORHOOD_ZIP_MAP[name];
    if (mappedZip) {
      setZipInput(mappedZip);
      performZipCheck(mappedZip);
    }
  };

  const handleResetCheck = () => {
    setZipInput('');
    setLastCheckedZip('');
    setCheckStatus('idle');
  };

  const handleBookDispatch = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== 'undefined') {
      const zipToPass = lastCheckedZip || zipInput;
      if (zipToPass) {
        window.dispatchEvent(new CustomEvent('plumber-select-zip', { detail: zipToPass }));
      }
      const wizardEl = document.getElementById('wizard');
      if (wizardEl) {
        e.preventDefault();
        const urlHash = zipToPass ? `#wizard?zip=${zipToPass}` : '#wizard';
        window.history.pushState(null, '', urlHash);
        wizardEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="areas"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden border-b border-slate-200/80"
      aria-label="Greater Austin Plumbing Service Area & Coverage"
    >
      {/* Background Decorative Accents */}
      <div
        className="absolute top-1/3 left-10 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs sm:text-sm font-bold shadow-xs mb-4">
            <Navigation className="w-3.5 h-3.5 text-blue-600" aria-hidden="true" />
            <span>Fast 24/7 Central Texas Dispatch</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight mb-4">
            Greater Austin Service Area &amp; Emergency Coverage
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Prompt 24/7 emergency dispatch across Austin and surrounding Travis, Williamson, and Hays counties.
          </p>
        </div>

        {/* Top Interactive ZIP Code Checker Card */}
        <div className="max-w-4xl mx-auto mb-14">
          <div className="bg-white rounded-3xl border-2 border-blue-500/20 shadow-xl p-6 sm:p-8 lg:p-10 relative overflow-hidden">
            {/* Subtle Gradient Header Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center flex-shrink-0 shadow-xs">
                  <MapPin className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-navy-900">
                    Live Emergency Response ZIP Checker
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-normal">
                    Check your Austin address for instant coverage and arrival time.
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold self-start sm:self-auto">
                <Clock className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                <span>30–45 Min Average Response</span>
              </div>
            </div>

            {/* Checker Input Form */}
            <form onSubmit={handleSubmit} className="mb-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <Search className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={5}
                    value={zipInput}
                    onChange={(e) => {
                      const numeric = e.target.value.replace(/\D/g, '').slice(0, 5);
                      setZipInput(numeric);
                      if (checkStatus !== 'idle') {
                        setCheckStatus('idle');
                      }
                    }}
                    placeholder="Enter 5-digit Austin ZIP code (e.g. 78701)"
                    className="w-full pl-11 pr-4 py-3.5 rounded-2xl border-2 border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-500/10 text-navy-900 placeholder:text-slate-400 font-medium text-base sm:text-lg transition-all outline-none"
                    aria-label="Austin 5-digit ZIP code"
                  />
                  {zipInput && (
                    <button
                      type="button"
                      onClick={handleResetCheck}
                      className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 text-xs font-bold"
                      aria-label="Clear ZIP code input"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white font-extrabold text-base shadow-md hover:shadow-lg transition-all duration-150 flex-shrink-0"
                >
                  <Search className="w-4 h-4" aria-hidden="true" />
                  <span>Check Availability</span>
                </button>
              </div>
            </form>

            {/* Result Visual States */}
            {checkStatus === 'covered' && (
              <div
                className="mb-6 rounded-2xl bg-emerald-50 border-2 border-emerald-400/80 p-5 sm:p-6 text-emerald-950 transition-all duration-200 animate-fadeIn"
                role="status"
                aria-live="polite"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow-xs mt-0.5">
                      <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-black text-emerald-900 leading-snug">
                        Service Available in {lastCheckedZip}!
                      </h4>
                      <p className="text-xs sm:text-sm text-emerald-800 mt-1 font-medium leading-relaxed">
                        Estimated response time: <strong>30–45 mins</strong>. Zero travel surcharge across your area.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2.5 flex-shrink-0">
                    <a
                      href={`#wizard?zip=${lastCheckedZip}`}
                      onClick={handleBookDispatch}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-sm shadow-sm hover:shadow transition-all text-center"
                      aria-label={`Book emergency dispatch for ZIP ${lastCheckedZip}`}
                    >
                      <span>Book Emergency Dispatch</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </a>
                    <a
                      href={`tel:${SITE_CONFIG.business.phone}`}
                      className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-full bg-white hover:bg-emerald-100/60 text-emerald-900 border border-emerald-300 font-bold text-xs sm:text-sm transition-colors text-center"
                      aria-label={`Call emergency phone at ${SITE_CONFIG.business.phone}`}
                    >
                      <Phone className="w-3.5 h-3.5 text-emerald-700" aria-hidden="true" />
                      <span>{SITE_CONFIG.business.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {checkStatus === 'out-of-area' && (
              <div
                className="mb-6 rounded-2xl bg-amber-50 border-2 border-amber-300 p-5 sm:p-6 text-amber-950 transition-all duration-200 animate-fadeIn"
                role="status"
                aria-live="polite"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-500 text-navy-950 flex items-center justify-center flex-shrink-0 shadow-xs mt-0.5">
                      <AlertCircle className="w-6 h-6 text-navy-950" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-black text-amber-900 leading-snug">
                        Extended Service Perimeter
                      </h4>
                      <p className="text-xs sm:text-sm text-amber-800 mt-1 font-medium leading-relaxed max-w-xl">
                        ZIP <strong>{lastCheckedZip}</strong> is outside our primary 45-min rapid response perimeter, but our regional dispatch team may still assist you. Call{' '}
                        <a
                          href={`tel:${SITE_CONFIG.business.phone}`}
                          className="font-bold underline text-amber-950 hover:text-navy-900"
                        >
                          {SITE_CONFIG.business.phone}
                        </a>{' '}
                        for availability.
                      </p>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <a
                      href={`tel:${SITE_CONFIG.business.phone}`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold text-sm shadow-sm transition-all"
                      aria-label={`Call dispatch at ${SITE_CONFIG.business.phone} for ZIP ${lastCheckedZip}`}
                    >
                      <Phone className="w-4 h-4" aria-hidden="true" />
                      <span>Call {SITE_CONFIG.business.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {checkStatus === 'invalid' && (
              <div
                className="mb-6 rounded-2xl bg-red-50 border border-red-200 p-4 text-red-900 flex items-center gap-3 animate-fadeIn"
                role="alert"
              >
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                <p className="text-xs sm:text-sm font-medium">
                  Please enter a valid 5-digit Austin area postal code (e.g. 78701, 78704, 78613).
                </p>
              </div>
            )}

            {/* Popular Covered ZIP Pills for One-Click Quick Check */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Quick Select Common Austin Metro ZIPs:
                </span>
                <span className="text-[11px] text-slate-400 font-medium">
                  Click to test instantly
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {POPULAR_ZIPS.map((item) => {
                  const isCurrent = lastCheckedZip === item.zip;
                  return (
                    <button
                      key={item.zip}
                      type="button"
                      onClick={() => handleQuickZipClick(item.zip)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                        isCurrent
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-800 border border-slate-200/80 hover:border-blue-200'
                      }`}
                      aria-label={`Quick check ZIP code ${item.zip} for ${item.label}`}
                    >
                      <span className="font-mono font-bold">{item.zip}</span>
                      <span className="text-[11px] opacity-80">({item.label})</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Visual Coverage Layout: Map View & Zoned Hubs (Left) + Serviced Neighborhoods (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Embedded Visual Map & Hub Grid */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-between space-y-6">
            {/* Visual Metro Coverage Map Graphic */}
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md p-4 sm:p-5 relative overflow-hidden flex flex-col">
              <div className="flex items-center justify-between gap-3 mb-3.5 px-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-extrabold uppercase tracking-wider text-navy-900">
                    Live GPS Coverage: Greater Austin Metroplex
                  </span>
                </div>
                <span className="text-xs font-mono font-semibold text-slate-500">
                  Travis • Williamson • Hays
                </span>
              </div>

              {/* Styled Map Container */}
              <div className="relative w-full h-[320px] sm:h-[380px] rounded-2xl overflow-hidden border border-slate-200/90 shadow-inner bg-slate-100">
                {SITE_CONFIG.serviceArea.mapEmbedUrl ? (
                  <iframe
                    src={SITE_CONFIG.serviceArea.mapEmbedUrl}
                    title="ApexFlow Austin Metro Plumbing Coverage Map"
                    className="w-full h-full border-0 filter grayscale-[20%] contrast-[105%]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-slate-500">
                    <MapPin className="w-10 h-10 text-blue-600 mb-2" />
                    <p className="font-bold text-navy-900">Austin Central Emergency Dispatch</p>
                    <p className="text-xs text-slate-500 mt-1">
                      1021 E 7th St, Austin, TX 78702
                    </p>
                  </div>
                )}

                {/* Map Floating Dispatch Badge Overlay */}
                <div className="absolute top-3 left-3 bg-navy-900/90 backdrop-blur-xs text-white px-3.5 py-2 rounded-xl shadow-lg border border-navy-700/80 text-xs flex items-center gap-2 pointer-events-none">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <div>
                    <span className="font-bold block leading-tight">4 Zoned Mobile Fleets</span>
                    <span className="text-[11px] text-slate-300">Active in Transit</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 4 Zoned Dispatch Hubs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {DISPATCH_HUBS.map((hub) => (
                <div
                  key={hub.name}
                  className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[11px] font-mono font-extrabold uppercase px-2 py-0.5 rounded-md bg-blue-50 text-blue-800 border border-blue-200/80">
                      {hub.badge}
                    </span>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                      ETA: {hub.eta}
                    </span>
                  </div>
                  <h4 className="text-sm font-extrabold text-navy-900 leading-snug">
                    {hub.name}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 font-normal leading-relaxed">
                    {hub.area}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Serviced Neighborhoods Directory & Trust Guarantees */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-between space-y-6">
            {/* Neighborhoods Card */}
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md p-6 sm:p-7 flex flex-col flex-1">
              <div className="flex items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-lg font-extrabold text-navy-900">
                    Serviced Neighborhoods &amp; Cities
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Click any neighborhood to test instant availability.
                  </p>
                </div>
                <span className="text-xs font-extrabold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                  {SITE_CONFIG.serviceArea.neighborhoods.length}+ Zones
                </span>
              </div>

              {/* Neighborhoods Tags Grid */}
              <div className="flex flex-wrap gap-2 mb-6">
                {SITE_CONFIG.serviceArea.neighborhoods.map((neighborhood) => {
                  const mappedZip = NEIGHBORHOOD_ZIP_MAP[neighborhood];
                  const isSelected = mappedZip && lastCheckedZip === mappedZip;

                  return (
                    <button
                      key={neighborhood}
                      type="button"
                      onClick={() => handleNeighborhoodClick(neighborhood)}
                      className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all text-left ${
                        isSelected
                          ? 'bg-navy-900 text-white shadow-xs ring-2 ring-blue-500'
                          : 'bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-navy-900 border border-slate-200/80 hover:border-blue-300'
                      }`}
                      aria-label={`Select ${neighborhood} to check coverage`}
                    >
                      <MapPin
                        className={`w-3.5 h-3.5 flex-shrink-0 ${
                          isSelected ? 'text-amber-400' : 'text-blue-600'
                        }`}
                        aria-hidden="true"
                      />
                      <span>{neighborhood}</span>
                    </button>
                  );
                })}
              </div>

              {/* Service Commitments Box */}
              <div className="mt-auto pt-5 border-t border-slate-100 space-y-3">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-navy-900">
                      Zero Travel Surcharge in Primary Zones
                    </h5>
                    <p className="text-[11px] text-slate-500 leading-normal">
                      We never tack on hidden fuel or mileage fees anywhere in our primary coverage area.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-navy-900">
                      Even Faster With Real-Time Dispatch
                    </h5>
                    <p className="text-[11px] text-slate-500 leading-normal">
                      Automated nearest-van routing ensures our master technicians reach you quickly.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Callout */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-left">
                  <p className="text-xs font-extrabold text-navy-900">
                    Not seeing your Austin neighborhood?
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Our team covers extended Travis &amp; Williamson areas.
                  </p>
                </div>
                <a
                  href={`tel:${SITE_CONFIG.business.phone}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs font-bold transition-colors flex-shrink-0 shadow-xs"
                  aria-label={`Call emergency dispatch at ${SITE_CONFIG.business.phone}`}
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
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
