'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Camera,
  Clock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Phone,
  Sparkles,
  Columns,
  Eye,
} from 'lucide-react';
import { SITE_CONFIG } from '@/config/site.config';
import { BeforeAfterItem } from '@/types';

// Enriched showcase metadata strictly adhering to brief specifications
const SHOWCASE_METADATA = [
  {
    id: 'ba-galvanized-pex',
    category: 'Repiping & Pressure',
    displayTitle: 'Corroded Galvanized Pipe Leak ➔ Clean PEX Manifold',
    beforeDesc: 'Corroded rusty galvanized pipe with active water leak behind drywall, causing low water pressure and recurring pinhole leaks.',
    afterDesc: 'Clean commercial-grade cross-linked PEX manifold with lead-free brass quarter-turn ball valves and water pressure stabilization.',
    timeframe: '2 Hours on-site',
    serviceId: 'fixture-pipe',
  },
  {
    id: 'ba-root-drain',
    category: 'Main Drain & Sewer',
    displayTitle: 'Severe Main Sewer Line Tree Root Blockage ➔ Restored Flow',
    beforeDesc: 'Sewer backup overflowing with heavy aggressive live oak tree root infiltration completely obstructing the 4-inch lateral waste line.',
    afterDesc: 'Crystal-clear drain line restored to 100% original diameter using 4,000 PSI hydro-jetting with reciprocating root cutter head and HD camera verification.',
    timeframe: '90 Minutes on-site',
    serviceId: 'drain-cleaning',
  },
  {
    id: 'ba-tank-tankless',
    category: 'Emergency Water Heater',
    displayTitle: '15-Year-Old Leaking Tank Water Heater ➔ Endless Tankless',
    beforeDesc: 'Rusty inefficient 50-gallon tank leaking from bottom seam, threatening catastrophic basement/garage flood and loss of hot water.',
    afterDesc: 'High-efficiency endless hot water tankless system with thermal expansion tank, automatic emergency shutoff valve, and direct outdoor venting.',
    timeframe: 'Same-day installation',
    serviceId: 'water-heater',
  },
];

type ViewMode = 'both' | 'before' | 'after';

export default function BeforeAfter() {
  // Interactive view toggle per showcase card: 'both' | 'before' | 'after'
  const [activeViews, setActiveViews] = useState<Record<string, ViewMode>>({
    'ba-galvanized-pex': 'both',
    'ba-root-drain': 'both',
    'ba-tank-tankless': 'both',
  });

  const handleSetView = (id: string, mode: ViewMode) => {
    setActiveViews((prev) => ({ ...prev, [id]: mode }));
  };

  const handleBookRepair = (e: React.MouseEvent<HTMLAnchorElement>, serviceId: string) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('plumber-select-service', { detail: serviceId }));
      const wizardEl = document.getElementById('wizard');
      if (wizardEl) {
        e.preventDefault();
        window.history.pushState(null, '', `#wizard?service=${serviceId}`);
        wizardEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="showcase"
      className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden border-b border-slate-200/80"
      aria-label="Real Plumbing Before and After Showcase"
    >
      {/* Background Decorative Gradient Blobs */}
      <div
        className="absolute top-1/4 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-0 w-96 h-96 bg-emerald-50/40 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-50 border border-navy-200 text-navy-800 text-xs sm:text-sm font-bold shadow-xs mb-4">
            <Camera className="w-3.5 h-3.5 text-navy-700" aria-hidden="true" />
            <span>Documented Field Craftsmanship</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight mb-4">
            Real Results: Before &amp; After Work Gallery
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            See real craftsmanship from our licensed master plumbers across Austin residential properties.
          </p>
        </div>

        {/* 3 Real Before-and-After Cards */}
        <div className="space-y-12 lg:space-y-16">
          {SITE_CONFIG.beforeAfter.map((item: BeforeAfterItem, index: number) => {
            const meta = SHOWCASE_METADATA[index] || {
              category: 'Plumbing Repair',
              displayTitle: item.title,
              beforeDesc: item.problem,
              afterDesc: item.solution,
              timeframe: item.timeframe,
              serviceId: 'leak-repair',
            };

            const currentView = activeViews[item.id] || 'both';

            return (
              <article
                key={item.id}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Top Card Bar */}
                <div className="bg-navy-900 text-white px-5 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-3 border-b border-navy-800">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="bg-amber-500 text-navy-950 font-black text-xs px-2.5 py-1 rounded-md tracking-wide uppercase">
                      {meta.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {meta.displayTitle}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    {/* Timeframe Tag */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy-800 border border-navy-700 text-amber-400 text-xs font-semibold">
                      <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{meta.timeframe}</span>
                    </div>

                    {/* View Switcher Controls (Split vs Before vs After) */}
                    <div
                      className="inline-flex rounded-lg bg-navy-800 p-1 border border-navy-700 text-xs"
                      role="group"
                      aria-label={`View mode for ${meta.displayTitle}`}
                    >
                      <button
                        type="button"
                        onClick={() => handleSetView(item.id, 'both')}
                        className={`px-2.5 py-1 rounded-md font-medium transition-all ${
                          currentView === 'both'
                            ? 'bg-navy-700 text-white font-bold shadow-xs'
                            : 'text-slate-400 hover:text-white'
                        }`}
                        aria-pressed={currentView === 'both'}
                      >
                        <span className="hidden sm:inline">Side-by-Side</span>
                        <span className="sm:hidden">Both</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSetView(item.id, 'before')}
                        className={`px-2.5 py-1 rounded-md font-medium transition-all ${
                          currentView === 'before'
                            ? 'bg-rose-900/80 text-rose-200 font-bold shadow-xs'
                            : 'text-slate-400 hover:text-white'
                        }`}
                        aria-pressed={currentView === 'before'}
                      >
                        Before
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSetView(item.id, 'after')}
                        className={`px-2.5 py-1 rounded-md font-medium transition-all ${
                          currentView === 'after'
                            ? 'bg-emerald-900/80 text-emerald-200 font-bold shadow-xs'
                            : 'text-slate-400 hover:text-white'
                        }`}
                        aria-pressed={currentView === 'after'}
                      >
                        After
                      </button>
                    </div>
                  </div>
                </div>

                {/* Photography Section: Side-by-Side with Badges */}
                <div className="p-4 sm:p-6 lg:p-8 bg-slate-50 border-b border-slate-200/80">
                  <div
                    className={`grid gap-4 sm:gap-6 ${
                      currentView === 'both'
                        ? 'grid-cols-1 md:grid-cols-2'
                        : 'grid-cols-1 max-w-2xl mx-auto'
                    }`}
                  >
                    {/* BEFORE Photo Box */}
                    {(currentView === 'both' || currentView === 'before') && (
                      <div className="relative rounded-2xl overflow-hidden border-2 border-slate-300 shadow-sm aspect-[16/10] bg-slate-200 group">
                        <Image
                          src={item.beforeImage}
                          alt={`Before condition: ${meta.beforeDesc}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                        {/* Overlay Gradient for text readability */}
                        <div
                          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none"
                          aria-hidden="true"
                        />
                        {/* Status Badge: BEFORE (The Problem) in Red/Slate */}
                        <div className="absolute top-3 left-3 z-10">
                          <span className="inline-flex items-center gap-1.5 bg-rose-950/90 backdrop-blur-md text-rose-200 border border-rose-500/50 text-xs font-black px-3 py-1.5 rounded-lg shadow-md tracking-wide">
                            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" aria-hidden="true" />
                            BEFORE (The Problem)
                          </span>
                        </div>
                        {/* Caption overlay at bottom */}
                        <div className="absolute bottom-3 left-3 right-3 z-10 bg-black/65 backdrop-blur-sm rounded-lg p-2.5 text-xs text-slate-200 border border-white/10 font-medium leading-relaxed">
                          <span className="font-bold text-rose-300 block mb-0.5">Diagnosed Issue:</span>
                          {meta.beforeDesc}
                        </div>
                      </div>
                    )}

                    {/* AFTER Photo Box */}
                    {(currentView === 'both' || currentView === 'after') && (
                      <div className="relative rounded-2xl overflow-hidden border-2 border-emerald-500 shadow-sm aspect-[16/10] bg-slate-200 group">
                        <Image
                          src={item.afterImage}
                          alt={`After ApexFlow repair: ${meta.afterDesc}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                        {/* Overlay Gradient */}
                        <div
                          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none"
                          aria-hidden="true"
                        />
                        {/* Status Badge: AFTER (ApexFlow Solution) in Emerald */}
                        <div className="absolute top-3 left-3 z-10">
                          <span className="inline-flex items-center gap-1.5 bg-emerald-950/90 backdrop-blur-md text-emerald-200 border border-emerald-500/60 text-xs font-black px-3 py-1.5 rounded-lg shadow-md tracking-wide">
                            <span className="w-2 h-2 rounded-full bg-emerald-400" aria-hidden="true" />
                            AFTER (ApexFlow Solution)
                          </span>
                        </div>
                        {/* Caption overlay at bottom */}
                        <div className="absolute bottom-3 left-3 right-3 z-10 bg-black/65 backdrop-blur-sm rounded-lg p-2.5 text-xs text-slate-200 border border-white/10 font-medium leading-relaxed">
                          <span className="font-bold text-emerald-300 block mb-0.5">Completed Craftsmanship:</span>
                          {meta.afterDesc}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Problem vs Solution Technical Detail Panels */}
                <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white">
                  {/* Problem Details Box */}
                  <div className="rounded-2xl bg-rose-50/60 border border-rose-200/80 p-5 flex flex-col justify-between">
                    <div>
                      <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-rose-800 mb-2">
                        <AlertTriangle className="w-4 h-4 text-rose-600" aria-hidden="true" />
                        <span>The Homeowner Emergency</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                        {meta.beforeDesc}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-rose-200/60 flex items-center justify-between text-xs text-rose-900 font-semibold">
                      <span>Status on Arrival:</span>
                      <span className="text-rose-700 font-bold">Immediate Risk / Active Failure</span>
                    </div>
                  </div>

                  {/* Solution Details Box */}
                  <div className="rounded-2xl bg-emerald-50/60 border border-emerald-200/80 p-5 flex flex-col justify-between">
                    <div>
                      <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-emerald-800 mb-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                        <span>ApexFlow Master Solution</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                        {meta.afterDesc}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-emerald-200/60 flex items-center justify-between text-xs text-emerald-900 font-semibold">
                      <span>Resolution Guarantee:</span>
                      <span className="text-emerald-700 font-bold">1-Year 100% Workmanship Warranty</span>
                    </div>
                  </div>
                </div>

                {/* Card Footer CTA Bar */}
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" aria-hidden="true" />
                    <span>
                      Performed by <strong className="font-semibold text-slate-800">Licensed Master Plumber</strong> • Fixed Flat-Rate Quoted
                    </span>
                  </div>
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <a
                      href={`#wizard?service=${meta.serviceId}`}
                      onClick={(e) => handleBookRepair(e, meta.serviceId)}
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-navy-900 hover:bg-navy-800 active:bg-navy-950 text-white font-bold text-xs sm:text-sm shadow-xs transition-colors"
                      aria-label={`Get quote for similar repair: ${meta.displayTitle}`}
                    >
                      <span>Fix Similar Issue</span>
                      <ArrowRight className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
                    </a>
                    <a
                      href={`tel:${SITE_CONFIG.business.phone}`}
                      className="inline-flex items-center justify-center p-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 transition-colors"
                      aria-label={`Call emergency dispatch at ${SITE_CONFIG.business.phone}`}
                      title="Call Dispatch"
                    >
                      <Phone className="w-4 h-4 text-amber-600" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Contractor Craftsmanship Guarantee Banner */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 text-white p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-navy-950 flex items-center justify-center font-black flex-shrink-0">
              <Sparkles className="w-6 h-6" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Every Job Backed by Our Clean Home &amp; 1-Year Workmanship Guarantee
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-normal mt-1">
                Zero cartoon drawings or stock mockups. We take immense pride in genuine master-grade plumbing craftsmanship across Austin.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto flex-shrink-0">
            <a
              href="#wizard"
              onClick={(e) => {
                const wizardEl = document.getElementById('wizard');
                if (wizardEl) {
                  e.preventDefault();
                  wizardEl.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-navy-950 font-black text-sm shadow-md transition-colors"
              aria-label="Book a free-with-repair inspection"
            >
              <span>Schedule Inspection ($0 with Repair)</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href={`tel:${SITE_CONFIG.business.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-200 text-xs sm:text-sm font-bold border border-navy-700 transition-colors"
              aria-label={`Speak directly with dispatch at ${SITE_CONFIG.business.phone}`}
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
              <span>{SITE_CONFIG.business.displayPhone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
