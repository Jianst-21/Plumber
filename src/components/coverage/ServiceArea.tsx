'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Search,
  CheckCircle2,
  AlertCircle,
  Clock,
  Phone,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  RotateCcw,
} from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SITE_CONFIG } from '@/config/site.config';

// Primary postcode mapping and hub association for interactive map targeting in London
const NEIGHBORHOOD_DATA: Record<
  string,
  {
    zip: string;
    hubId: string;
    eta: string;
    hubName: string;
    query: string;
  }
> = {
  'Central London (Westminster & Soho)': {
    zip: 'SW1A',
    hubId: 'central',
    eta: '15–25 min',
    hubName: 'Central London HQ',
    query: 'Westminster, London, UK',
  },
  'Kensington & Chelsea': {
    zip: 'SW3',
    hubId: 'west',
    eta: '20–30 min',
    hubName: 'West London Mobile Fleet',
    query: 'Kensington, London, UK',
  },
  'Camden & Islington': {
    zip: 'NW1',
    hubId: 'north',
    eta: '20–30 min',
    hubName: 'North London Hub',
    query: 'Camden Town, London, UK',
  },
  'Richmond & Twickenham': {
    zip: 'TW9',
    hubId: 'west',
    eta: '25–40 min',
    hubName: 'West London Mobile Fleet',
    query: 'Richmond, London, UK',
  },
  'Clapham & Battersea': {
    zip: 'SW11',
    hubId: 'south',
    eta: '20–35 min',
    hubName: 'South London Rapid Unit',
    query: 'Clapham, London, UK',
  },
  'Hampstead & Highgate': {
    zip: 'NW3',
    hubId: 'north',
    eta: '20–30 min',
    hubName: 'North London Hub',
    query: 'Hampstead, London, UK',
  },
  'Canary Wharf & Docklands': {
    zip: 'E14',
    hubId: 'central',
    eta: '25–35 min',
    hubName: 'Central London HQ',
    query: 'Canary Wharf, London, UK',
  },
  'Wimbledon & Merton': {
    zip: 'SW19',
    hubId: 'south',
    eta: '25–40 min',
    hubName: 'South London Rapid Unit',
    query: 'Wimbledon, London, UK',
  },
  'Fulham & Hammersmith': {
    zip: 'SW6',
    hubId: 'west',
    eta: '20–30 min',
    hubName: 'West London Mobile Fleet',
    query: 'Fulham, London, UK',
  },
  'Greenwich & Blackheath': {
    zip: 'SE10',
    hubId: 'south',
    eta: '25–40 min',
    hubName: 'South London Rapid Unit',
    query: 'Greenwich, London, UK',
  },
  'Shoreditch & Hackney': {
    zip: 'E1',
    hubId: 'central',
    eta: '20–30 min',
    hubName: 'Central London HQ',
    query: 'Shoreditch, London, UK',
  },
  'Dulwich & Southwark': {
    zip: 'SE1',
    hubId: 'south',
    eta: '20–35 min',
    hubName: 'South London Rapid Unit',
    query: 'Southwark, London, UK',
  },
  'Chiswick & Brentford': {
    zip: 'W4',
    hubId: 'west',
    eta: '25–35 min',
    hubName: 'West London Mobile Fleet',
    query: 'Chiswick, London, UK',
  },
  'Ealing & Acton': {
    zip: 'W5',
    hubId: 'west',
    eta: '25–40 min',
    hubName: 'West London Mobile Fleet',
    query: 'Ealing, London, UK',
  },
  'Kingston upon Thames': {
    zip: 'KT1',
    hubId: 'south',
    eta: '30–45 min',
    hubName: 'South London Rapid Unit',
    query: 'Kingston upon Thames, London, UK',
  },
  'Bromley & Beckenham': {
    zip: 'BR1',
    hubId: 'south',
    eta: '30–45 min',
    hubName: 'South London Rapid Unit',
    query: 'Bromley, London, UK',
  },
  'Wandsworth & Putney': {
    zip: 'SW18',
    hubId: 'south',
    eta: '20–35 min',
    hubName: 'South London Rapid Unit',
    query: 'Wandsworth, London, UK',
  },
};

const NEIGHBORHOOD_ZIP_MAP: Record<string, string> = Object.fromEntries(
  Object.entries(NEIGHBORHOOD_DATA).map(([name, data]) => [name, data.zip])
);

// Popular London Metro postcodes for fast 1-click checking
const POPULAR_ZIPS = [
  { zip: 'SW1A', label: 'Westminster' },
  { zip: 'W1D', label: 'Soho / West End' },
  { zip: 'SW3', label: 'Chelsea' },
  { zip: 'NW1', label: 'Camden' },
  { zip: 'NW3', label: 'Hampstead' },
  { zip: 'EC1A', label: 'City of London' },
  { zip: 'SW11', label: 'Battersea' },
  { zip: 'SW19', label: 'Wimbledon' },
  { zip: 'TW9', label: 'Richmond' },
  { zip: 'SE10', label: 'Greenwich' },
];

// Zoned Dispatch Hubs across Greater London
const DISPATCH_HUBS = [
  {
    id: 'central',
    name: 'Central London HQ',
    area: 'Westminster, Soho, Mayfair, City',
    query: 'Central London, UK',
    eta: '15–30 min',
    badge: 'HQ Station',
  },
  {
    id: 'north',
    name: 'North London Hub',
    area: 'Camden, Islington, Hampstead, Highgate',
    query: 'Camden, London, UK',
    eta: '25–35 min',
    badge: 'North Hub',
  },
  {
    id: 'south',
    name: 'South London Rapid Unit',
    area: 'Clapham, Battersea, Wimbledon, Southwark',
    query: 'Clapham, London, UK',
    eta: '25–40 min',
    badge: 'South Hub',
  },
  {
    id: 'west',
    name: 'West London Mobile Fleet',
    area: 'Kensington, Chelsea, Richmond, Chiswick',
    query: 'Kensington, London, UK',
    eta: '25–40 min',
    badge: 'West Fleet',
  },
];

type CheckStatus = 'idle' | 'covered' | 'out-of-area' | 'invalid';

export default function ServiceArea() {
  const [zipInput, setZipInput] = useState('');
  const [lastCheckedZip, setLastCheckedZip] = useState('');
  const [checkStatus, setCheckStatus] = useState<CheckStatus>('idle');
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string | null>(null);
  const [selectedHubId, setSelectedHubId] = useState<string | null>(null);
  const [isMapTargeting, setIsMapTargeting] = useState(false);

  const coveredZipList = SITE_CONFIG.serviceArea.zipCodes;

  const performZipCheck = (zipToCheck: string) => {
    const cleanZip = zipToCheck.trim().toUpperCase().replace(/\s+/g, '');
    if (!cleanZip || cleanZip.length < 2) {
      setCheckStatus('invalid');
      setLastCheckedZip(cleanZip);
      return;
    }

    setLastCheckedZip(zipToCheck.trim().toUpperCase());
    const isCovered = coveredZipList.some((prefix) =>
      cleanZip.startsWith(prefix.replace(/\s+/g, ''))
    );

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
    const match = Object.entries(NEIGHBORHOOD_DATA).find(([, d]) => d.zip === zip);
    if (match) {
      setSelectedNeighborhood(match[0]);
      setSelectedHubId(match[1].hubId);
      triggerSmoothTarget();
    } else {
      setSelectedNeighborhood(null);
    }
  };

  const triggerSmoothTarget = () => {
    setIsMapTargeting(true);
    setTimeout(() => setIsMapTargeting(false), 500);
  };

  const handleNeighborhoodClick = (name: string) => {
    setSelectedNeighborhood(name);
    const data = NEIGHBORHOOD_DATA[name];
    if (data) {
      setSelectedHubId(data.hubId);
      setZipInput(data.zip);
      performZipCheck(data.zip);
      triggerSmoothTarget();
    }
  };

  const handleHubClick = (hubId: string) => {
    setSelectedHubId(hubId);
    setSelectedNeighborhood(null);
    triggerSmoothTarget();
    const match = Object.entries(NEIGHBORHOOD_DATA).find(([, d]) => d.hubId === hubId);
    if (match) {
      setZipInput(match[1].zip);
      performZipCheck(match[1].zip);
    }
  };

  const handleResetCheck = () => {
    setZipInput('');
    setLastCheckedZip('');
    setCheckStatus('idle');
    setSelectedNeighborhood(null);
    setSelectedHubId(null);
  };

  const handleResetToMetro = () => {
    setSelectedNeighborhood(null);
    setSelectedHubId(null);
    setZipInput('');
    setLastCheckedZip('');
    setCheckStatus('idle');
    triggerSmoothTarget();
  };

  // Compute active location info for live map targeting
  let activeTitle = 'Greater London (All Boroughs)';
  let activeEta = '30–45 min';
  let activeHubName = '4 Zoned Mobile Fleets';
  let mapUrl = SITE_CONFIG.serviceArea.mapEmbedUrl || 'https://maps.google.com/maps?q=London%2C%20UK&t=&z=11&ie=UTF8&iwloc=&output=embed';
  const isLocationFocused = Boolean(selectedNeighborhood || selectedHubId);

  if (selectedNeighborhood && NEIGHBORHOOD_DATA[selectedNeighborhood]) {
    const data = NEIGHBORHOOD_DATA[selectedNeighborhood];
    activeTitle = selectedNeighborhood;
    activeEta = data.eta;
    activeHubName = data.hubName;
    mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(data.query)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  } else if (selectedHubId) {
    const hub = DISPATCH_HUBS.find((h) => h.id === selectedHubId);
    if (hub) {
      activeTitle = hub.name;
      activeEta = hub.eta;
      activeHubName = hub.area;
      mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(hub.query)}&t=&z=12&ie=UTF8&iwloc=&output=embed`;
    }
  }

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
      aria-label="Greater London Plumbing Service Area & Coverage"
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
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight mb-4">
            Greater London Service Area &amp; Emergency Coverage
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Prompt 24/7 emergency dispatch across Central, North, South, and West London boroughs.
          </p>
        </ScrollReveal>

        {/* Top Interactive Postcode Checker Card */}
        <ScrollReveal delay={0.08} className="w-full mb-10 sm:mb-12">
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md p-6 sm:p-8 lg:p-10 relative overflow-hidden">
            {/* Header Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center flex-shrink-0 shadow-xs">
                  <MapPin className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-navy-900">
                    Live Emergency Response Postcode Checker
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-normal">
                    Check your London address or postcode for instant coverage and arrival time.
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
                    maxLength={8}
                    value={zipInput}
                    onChange={(e) => {
                      const val = e.target.value.toUpperCase();
                      setZipInput(val);
                      if (checkStatus !== 'idle') {
                        setCheckStatus('idle');
                      }
                    }}
                    placeholder="Enter London Postcode (e.g. SW1A, NW1, W1D)"
                    className="w-full pl-11 pr-4 py-3.5 rounded-2xl border-2 border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-500/10 text-navy-900 placeholder:text-slate-400 font-medium text-base sm:text-lg transition-all outline-none"
                    aria-label="London Postcode"
                  />
                  {zipInput && (
                    <button
                      type="button"
                      onClick={handleResetCheck}
                      className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 text-xs font-bold"
                      aria-label="Clear postcode input"
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
                        Coverage Confirmed for {lastCheckedZip}!
                      </h4>
                      <p className="text-xs sm:text-sm text-emerald-800 mt-1 font-medium leading-relaxed">
                        We have rapid mobile units active in your area. Average arrival time is <strong>30–45 minutes</strong> with zero out-of-hours fees.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 self-end sm:self-auto flex-shrink-0">
                    <a
                      href={`#wizard?zip=${lastCheckedZip}`}
                      onClick={handleBookDispatch}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm shadow-xs transition-colors"
                      aria-label={`Book emergency dispatch for Postcode ${lastCheckedZip}`}
                    >
                      <span>Book Engineer Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={`tel:${SITE_CONFIG.business.phone}`}
                      className="inline-flex items-center justify-center p-2.5 rounded-xl bg-white hover:bg-emerald-100 text-emerald-800 border border-emerald-300 transition-colors shadow-2xs"
                      aria-label={`Call emergency phone at ${SITE_CONFIG.business.phone}`}
                      title="Call Dispatch Immediately"
                    >
                      <Phone className="w-4 h-4 text-emerald-700" />
                    </a>
                  </div>
                </div>
              </div>
            )}

            {checkStatus === 'out-of-area' && (
              <div
                className="mb-6 rounded-2xl bg-amber-50 border-2 border-amber-300 p-5 sm:p-6 text-amber-950 transition-all duration-200 animate-fadeIn"
                role="alert"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center flex-shrink-0 shadow-xs mt-0.5">
                      <AlertCircle className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-black text-amber-950 leading-snug">
                        Extended Greater London Perimeter ({lastCheckedZip})
                      </h4>
                      <p className="text-xs sm:text-sm text-amber-900 mt-1 font-medium leading-relaxed">
                        Postcode {lastCheckedZip} is just outside our primary rapid zone. We still dispatch engineers to home counties! Call our dispatch team directly.
                      </p>
                    </div>
                  </div>

                  <a
                    href={`tel:${SITE_CONFIG.business.phone}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-navy-950 font-bold text-xs sm:text-sm shadow-xs transition-all self-end sm:self-auto flex-shrink-0"
                    aria-label={`Call dispatch at ${SITE_CONFIG.business.phone} for Postcode ${lastCheckedZip}`}
                  >
                    <Phone className="w-4 h-4 fill-navy-950 text-navy-950" />
                    <span>Call Live Dispatch</span>
                  </a>
                </div>
              </div>
            )}

            {checkStatus === 'invalid' && (
              <div className="mb-6 rounded-2xl bg-red-50 border-2 border-red-200 p-4 text-red-800 flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                <p className="text-xs sm:text-sm font-medium">
                  Please enter a valid London postal district (e.g. SW1A, NW1, W1D).
                </p>
              </div>
            )}

            {/* Popular Covered London Postcode Pills */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Quick Select Common London Postcodes:
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
                      aria-label={`Quick check postcode ${item.zip} for ${item.label}`}
                    >
                      <span className="font-mono font-bold">{item.zip}</span>
                      <span className="text-[11px] opacity-80">({item.label})</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 2-Column Visual Coverage Layout: Interactive Map View (Left) + Serviced Neighborhoods (Right) */}
        <ScrollReveal delay={0.12} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Interactive Map View & Zoned Hub Grid */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-between space-y-6">
            {/* Visual Metro Coverage Map Card */}
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md p-4 sm:p-5 relative overflow-hidden flex flex-col">
              <div className="flex items-center justify-between gap-3 mb-3.5 px-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-extrabold uppercase tracking-wider text-navy-900">
                    Live GPS Coverage: Greater London Metro
                  </span>
                </div>
                <span className="text-xs font-mono font-semibold text-slate-500">
                  Inner • West • North • South London
                </span>
              </div>

              {/* Clean Official Google Map with Smooth Radar Transition */}
              <div className="relative w-full h-[340px] sm:h-[400px] rounded-2xl overflow-hidden border border-slate-200/90 shadow-inner bg-slate-100">
                <iframe
                  src={mapUrl}
                  title={`London Plumbing Coverage: ${activeTitle}`}
                  className="w-full h-full border-0 filter grayscale-[10%] contrast-[105%]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Subtle Radar Scanning Transition Overlay when switching locations */}
                <AnimatePresence>
                  {isMapTargeting && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 bg-slate-950/20 backdrop-blur-xs flex items-center justify-center pointer-events-none z-20"
                    >
                      <div className="bg-slate-950/90 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 border border-white/20 shadow-xl">
                        <span className="w-2 h-2 rounded-full bg-orange-400 animate-ping" />
                        <span>Targeting {activeTitle}...</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Map Floating Interactive Dispatch Overlay */}
                {isLocationFocused ? (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-3 left-3 right-3 sm:right-auto bg-slate-950/95 backdrop-blur-md text-white p-3 sm:px-4 rounded-xl shadow-xl border border-orange-500/50 text-xs flex items-center justify-between gap-3 z-10"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500" />
                      </span>
                      <div className="text-left">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-extrabold text-white text-sm tracking-tight">{activeTitle}</span>
                          <span className="text-[10.5px] font-extrabold text-orange-400 bg-orange-500/20 px-2 py-0.5 rounded border border-orange-500/40 font-mono">
                            ETA: {activeEta}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-300 mt-0.5">
                          Dispatched from <strong className="text-white">{activeHubName}</strong> • £0 Travel Fee
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleResetToMetro}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-400 hover:text-white bg-white/10 hover:bg-white/20 px-2.5 py-1.5 rounded-lg transition-colors shrink-0 ml-2"
                      title="Reset map to full Greater London view"
                    >
                      <RotateCcw className="w-3 h-3 text-orange-400" />
                      <span>Reset</span>
                    </button>
                  </motion.div>
                ) : (
                  <div className="absolute top-3 left-3 bg-navy-900/90 backdrop-blur-xs text-white px-3.5 py-2 rounded-xl shadow-lg border border-navy-700/80 text-xs flex items-center gap-2 pointer-events-none z-10">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <div>
                      <span className="font-bold block leading-tight">4 Zoned Mobile Fleets</span>
                      <span className="text-[11px] text-slate-300">Click any neighborhood to focus live radar</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* 4 Zoned Dispatch Hubs (Interactive Selection Buttons) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {DISPATCH_HUBS.map((hub) => {
                const isActive = selectedHubId === hub.id;

                return (
                  <button
                    key={hub.id}
                    type="button"
                    onClick={() => handleHubClick(hub.id)}
                    className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer group ${
                      isActive
                        ? 'border-orange-500 bg-orange-50/30 shadow-md ring-2 ring-orange-500/20'
                        : 'bg-white border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span
                        className={`text-[11px] font-mono font-extrabold uppercase px-2 py-0.5 rounded-md border transition-colors ${
                          isActive
                            ? 'bg-orange-100 text-orange-900 border-orange-200'
                            : 'bg-blue-50 text-blue-800 border-blue-200/80'
                        }`}
                      >
                        {hub.badge}
                      </span>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                        ETA: {hub.eta}
                      </span>
                    </div>
                    <h4 className="text-sm font-extrabold text-navy-900 leading-snug group-hover:text-orange-600 transition-colors">
                      {hub.name}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 font-normal leading-relaxed">
                      {hub.area}
                    </p>
                  </button>
                );
              })}
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
                    Click any neighborhood to test instant availability &amp; focus map.
                  </p>
                </div>
                {/* 1-line strictly formatted badge */}
                <span className="whitespace-nowrap shrink-0 text-xs font-extrabold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 shadow-2xs">
                  {SITE_CONFIG.serviceArea.neighborhoods.length}+ Zones
                </span>
              </div>

              {/* Neighborhoods Tags Grid */}
              <div className="flex flex-wrap gap-2 mb-6">
                {SITE_CONFIG.serviceArea.neighborhoods.map((neighborhood) => {
                  const isSelected = selectedNeighborhood === neighborhood;

                  return (
                    <button
                      key={neighborhood}
                      type="button"
                      onClick={() => handleNeighborhoodClick(neighborhood)}
                      className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all text-left ${
                        isSelected
                          ? 'bg-orange-500 text-white shadow-sm ring-2 ring-orange-400 border-orange-500'
                          : 'bg-slate-50 hover:bg-orange-50/80 text-slate-700 hover:text-orange-950 border border-slate-200/80 hover:border-orange-200'
                      }`}
                      aria-label={`Select ${neighborhood} to check coverage and target map`}
                    >
                      <MapPin
                        className={`w-3.5 h-3.5 flex-shrink-0 ${
                          isSelected ? 'text-white' : 'text-blue-600'
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
                    Not seeing your London borough?
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Our team covers extended Greater London &amp; M25 perimeter.
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
        </ScrollReveal>
      </div>
    </section>
  );
}
