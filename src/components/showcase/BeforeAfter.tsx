'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Clock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Sparkles,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SITE_CONFIG } from '@/config/site.config';
import { BeforeAfterItem } from '@/types';

// Enriched showcase metadata strictly adhering to brief specifications
const SHOWCASE_METADATA = [
  {
    id: 'ba-faucet-replacement',
    category: 'Fixture & Faucets',
    displayTitle: 'Broken Kitchen Faucet to Modern High-Arc Fixture',
    problemTitle: 'Active Cartridge Leak',
    beforeDesc:
      'Cracked internal cartridge and damaged pull-out spray head leaking water over the kitchen counter basin.',
    afterDesc:
      'Installed commercial-grade high-arc brushed nickel pull-down faucet with ceramic disc valve and watertight braided supply lines.',
    timeframe: '45 Minutes on-site',
    statusOnArrival: 'Active Spray Head Failure',
    warranty: '1-Year Workmanship Warranty',
    serviceId: 'fixture-pipe',
  },
  {
    id: 'ba-sink-ptrap',
    category: 'Drainage & P-Trap',
    displayTitle: 'Leaking Under-Sink P-Trap to Clean Sealed PVC Assembly',
    problemTitle: 'Deteriorated Trap Seal',
    beforeDesc:
      'Severely leaking P-trap joint and deteriorating slip-gaskets causing standing wastewater pooling inside the cabinet.',
    afterDesc:
      'Rebuilt complete dual-sink PVC drainage assembly with watertight mechanical slip-joints, clean trap, and dedicated shutoff lines.',
    timeframe: '90 Minutes on-site',
    statusOnArrival: 'Cabinet Wastewater Pooling',
    warranty: '1-Year Workmanship Warranty',
    serviceId: 'drain-cleaning',
  },
  {
    id: 'ba-toilet-installation',
    category: 'Toilet & Sanitation',
    displayTitle: 'Toilet Rough-In Flange to Precision Installed Commode',
    problemTitle: 'Unsealed Subfloor Flange',
    beforeDesc:
      'Cracked leaking commode removed, exposing unsealed floor flange and requiring wax ring replacement, leveling, and water hookup.',
    afterDesc:
      'Installed reinforced anti-leak wax ring seal, secured brass closet bolts, leveled dual-flush commode, and connected braided water line.',
    timeframe: '1 Hour on-site',
    statusOnArrival: 'Broken Flange / Unsealed Waste',
    warranty: '1-Year Workmanship Warranty',
    serviceId: 'fixture-pipe',
  },
];

type ViewMode = 'both' | 'before' | 'after';

interface LightboxState {
  id: string;
  displayTitle: string;
  category: string;
  type: 'before' | 'after';
  beforeImage: string;
  afterImage: string;
  beforeDesc: string;
  afterDesc: string;
  timeframe: string;
  serviceId: string;
}

export default function BeforeAfter() {
  // Interactive view toggle per showcase card: 'both' | 'before' | 'after'
  const [activeViews, setActiveViews] = useState<Record<string, ViewMode>>({
    'ba-faucet-replacement': 'both',
    'ba-sink-ptrap': 'both',
    'ba-toilet-installation': 'both',
  });

  // Lightbox modal state for full-screen inspection
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const handleSetView = (id: string, mode: ViewMode) => {
    setActiveViews((prev) => ({ ...prev, [id]: mode }));
  };

  const openLightbox = (
    item: BeforeAfterItem,
    meta: (typeof SHOWCASE_METADATA)[0],
    initialType: 'before' | 'after'
  ) => {
    setLightbox({
      id: item.id,
      displayTitle: meta.displayTitle,
      category: meta.category,
      type: initialType,
      beforeImage: item.beforeImage,
      afterImage: item.afterImage,
      beforeDesc: meta.beforeDesc,
      afterDesc: meta.afterDesc,
      timeframe: meta.timeframe,
      serviceId: meta.serviceId,
    });
  };

  const closeLightbox = useCallback(() => {
    setLightbox(null);
  }, []);

  const toggleLightboxType = useCallback(() => {
    setLightbox((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        type: prev.type === 'before' ? 'after' : 'before',
      };
    });
  }, []);

  // Keyboard controls for the lightbox (Esc to close, Arrow keys to toggle before/after)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightbox) return;
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        toggleLightboxType();
      }
    };

    if (lightbox) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightbox, closeLightbox, toggleLightboxType]);

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
      className="py-16 sm:py-20 lg:py-24 bg-slate-50/50 relative overflow-hidden border-b border-slate-200/80"
      aria-label="Real Plumbing Before and After Showcase"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-3">
            Real Results: Before &amp; After Showcase
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Real photographic proof from certified Gas Safe registered plumbing &amp; heating engineers dispatched across Greater London homes. Click any image to view in fullscreen.
          </p>
        </ScrollReveal>

        {/* Real Before-and-After Case Studies */}
        <div className="space-y-10 lg:space-y-12">
          {SITE_CONFIG.beforeAfter.map((item: BeforeAfterItem, index: number) => {
            const meta = SHOWCASE_METADATA[index] || {
              category: 'Plumbing Repair',
              displayTitle: item.title,
              problemTitle: 'Diagnostic Issue',
              beforeDesc: item.problem,
              afterDesc: item.solution,
              timeframe: item.timeframe,
              statusOnArrival: 'Active Failure',
              warranty: '1-Year Workmanship Warranty',
              serviceId: 'leak-repair',
            };

            const currentView = activeViews[item.id] || 'both';

            return (
              <ScrollReveal key={item.id} delay={index * 0.08}>
                <article
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden p-6 sm:p-8"
                >
                {/* 1. Header with Title & Functional View Control */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div>
                    {/* Eyebrow: Category & Timeframe */}
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                      <span className="text-orange-600 font-bold">{meta.category}</span>
                      <span className="text-slate-300">•</span>
                      <span className="inline-flex items-center gap-1 text-slate-500">
                        <Clock className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                        {meta.timeframe}
                      </span>
                    </div>

                    {/* Primary Title */}
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                      {meta.displayTitle}
                    </h3>
                  </div>

                  {/* Segmented View Controls */}
                  <div
                    className="inline-flex items-center p-1 rounded-xl bg-slate-100/90 border border-slate-200 text-xs font-semibold text-slate-600 self-start sm:self-center shrink-0"
                    role="group"
                    aria-label={`View mode for ${meta.displayTitle}`}
                  >
                    <button
                      type="button"
                      onClick={() => handleSetView(item.id, 'both')}
                      className={`px-3 py-1.5 rounded-lg transition-all ${
                        currentView === 'both'
                          ? 'bg-white text-slate-900 font-bold shadow-2xs'
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                      aria-pressed={currentView === 'both'}
                    >
                      Side-by-Side
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSetView(item.id, 'before')}
                      className={`px-3 py-1.5 rounded-lg transition-all ${
                        currentView === 'before'
                          ? 'bg-white text-rose-700 font-bold shadow-2xs'
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                      aria-pressed={currentView === 'before'}
                    >
                      Before
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSetView(item.id, 'after')}
                      className={`px-3 py-1.5 rounded-lg transition-all ${
                        currentView === 'after'
                          ? 'bg-white text-emerald-700 font-bold shadow-2xs'
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                      aria-pressed={currentView === 'after'}
                    >
                      After
                    </button>
                  </div>
                </div>

                {/* 2. Visual Comparison Gallery with Margins & Framed Boxes */}
                <div className="pt-6">
                  <div
                    className={`grid gap-6 ${
                      currentView === 'both'
                        ? 'grid-cols-1 md:grid-cols-2'
                        : 'grid-cols-1 max-w-2xl mx-auto'
                    }`}
                  >
                    {/* BEFORE Photo Box */}
                    {(currentView === 'both' || currentView === 'before') && (
                      <div className="flex flex-col">
                        <div
                          role="button"
                          tabIndex={0}
                          onClick={() => openLightbox(item, meta, 'before')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              openLightbox(item, meta, 'before');
                            }
                          }}
                          className="relative rounded-xl overflow-hidden border border-slate-200 aspect-[16/10] bg-slate-100 group shadow-2xs cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-orange-500"
                          aria-label={`View fullscreen before photo: ${meta.beforeDesc}`}
                        >
                          <Image
                            src={item.beforeImage}
                            alt={`Before condition: ${meta.beforeDesc}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover object-center group-hover:scale-103 transition-transform duration-500 ease-out"
                          />

                          {/* Minimalist Floating Status Badge */}
                          <div className="absolute top-3.5 left-3.5 z-10 pointer-events-none">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-white text-xs font-bold tracking-wider shadow-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" aria-hidden="true" />
                              BEFORE
                            </span>
                          </div>

                          {/* Fullscreen Trigger Overlay Hint */}
                          <div className="absolute bottom-3.5 right-3.5 z-10 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200 pointer-events-none">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-950/85 backdrop-blur-md text-white text-xs font-semibold shadow-md">
                              <Maximize2 className="w-3.5 h-3.5 text-orange-400" aria-hidden="true" />
                              <span>Fullscreen</span>
                            </span>
                          </div>
                        </div>

                        {/* Problem Description Below Photo */}
                        <div className="pt-3">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-rose-600 block mb-1">
                            The Problem
                          </span>
                          <p className="text-sm text-slate-700 leading-relaxed font-normal">
                            {meta.beforeDesc}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* AFTER Photo Box */}
                    {(currentView === 'both' || currentView === 'after') && (
                      <div className="flex flex-col">
                        <div
                          role="button"
                          tabIndex={0}
                          onClick={() => openLightbox(item, meta, 'after')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              openLightbox(item, meta, 'after');
                            }
                          }}
                          className="relative rounded-xl overflow-hidden border border-slate-200 aspect-[16/10] bg-slate-100 group shadow-2xs cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-orange-500"
                          aria-label={`View fullscreen after photo: ${meta.afterDesc}`}
                        >
                          <Image
                            src={item.afterImage}
                            alt={`Completed craftsmanship: ${meta.afterDesc}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover object-center group-hover:scale-103 transition-transform duration-500 ease-out"
                          />

                          {/* Minimalist Floating Status Badge */}
                          <div className="absolute top-3.5 left-3.5 z-10 pointer-events-none">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-white text-xs font-bold tracking-wider shadow-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                              AFTER
                            </span>
                          </div>

                          {/* Fullscreen Trigger Overlay Hint */}
                          <div className="absolute bottom-3.5 right-3.5 z-10 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200 pointer-events-none">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-950/85 backdrop-blur-md text-white text-xs font-semibold shadow-md">
                              <Maximize2 className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                              <span>Fullscreen</span>
                            </span>
                          </div>
                        </div>

                        {/* Solution Description Below Photo */}
                        <div className="pt-3">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                            The Solution
                          </span>
                          <p className="text-sm text-slate-700 leading-relaxed font-normal">
                            {meta.afterDesc}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* 3. Supporting Case Study Metadata Strip */}
                <div className="mt-8 pt-5 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-50/80 rounded-xl p-4 sm:px-6">
                  <div>
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                      Status on Arrival
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-1.5 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" aria-hidden="true" />
                      {meta.statusOnArrival}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                      Time on Site
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-1.5 mt-0.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
                      {meta.timeframe}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                      Resolution Guarantee
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-emerald-700 flex items-center gap-1.5 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" aria-hidden="true" />
                      {meta.warranty}
                    </span>
                  </div>
                </div>

                {/* 4. Action / CTA Bar (Natural Conclusion) */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" aria-hidden="true" />
                      <span>
                        Performed by <strong className="font-semibold text-slate-800">Gas Safe Registered Engineer</strong> • Fixed Flat-Rate Quoted
                      </span>
                    </div>

                  <div className="flex items-center gap-2.5 w-full sm:w-auto">
                    <a
                      href={`#wizard?service=${meta.serviceId}`}
                      onClick={(e) => handleBookRepair(e, meta.serviceId)}
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold text-xs sm:text-sm shadow-xs hover:shadow transition-all"
                      aria-label={`Get quote for similar repair: ${meta.displayTitle}`}
                    >
                      <span>Fix Similar Issue</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </a>

                    <a
                      href={`tel:${SITE_CONFIG.business.phone}`}
                      className="inline-flex items-center justify-center p-2.5 rounded-xl border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-700 hover:text-orange-600 transition-colors"
                      aria-label={`Call emergency dispatch at ${SITE_CONFIG.business.phone}`}
                      title="Call Dispatch"
                    >
                      <Phone className="w-4 h-4 text-orange-500" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Bottom Craftsmanship Guarantee Banner */}
      <ScrollReveal delay={0.1} className="mt-14 rounded-3xl bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 border-2 border-navy-800 p-6 sm:p-8 lg:p-10 text-white shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Ambient Glow */}
        <div
          className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="flex items-center gap-4 relative z-10">
          <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-400 flex items-center justify-center shrink-0">
            <Sparkles className="w-6 h-6" aria-hidden="true" />
          </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Every Job Backed by Our Clean Home &amp; 1-Year Workmanship Guarantee
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-normal mt-1">
                Authentic photographic records of master-grade plumbing craftsmanship across London.
              </p>
            </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0 relative z-10">
          <a
            href="#wizard"
            onClick={(e) => {
              const wizardEl = document.getElementById('wizard');
              if (wizardEl) {
                e.preventDefault();
                wizardEl.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-sm shadow-md transition-colors"
            aria-label="Book a free-with-repair inspection"
          >
              <span>Schedule Inspection (£0 with Repair)</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>

          <a
            href={`tel:${SITE_CONFIG.business.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-slate-100 hover:text-white border border-white/20 text-xs sm:text-sm font-bold transition-colors"
            aria-label={`Speak directly with dispatch at ${SITE_CONFIG.business.phone}`}
          >
            <Phone className="w-3.5 h-3.5 text-orange-400" aria-hidden="true" />
            <span>{SITE_CONFIG.business.displayPhone}</span>
          </a>
        </div>
      </ScrollReveal>
    </div>

      {/* 5. INTERACTIVE FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-slate-950/95 backdrop-blur-md p-4 sm:p-6 select-none"
            role="dialog"
            aria-modal="true"
            aria-label={`Fullscreen image view: ${lightbox.displayTitle}`}
          >
            {/* Lightbox Top Floating Bar */}
            <div className="max-w-6xl mx-auto w-full flex items-center justify-between gap-4 z-20 pb-3 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                  <span className="text-orange-400 font-bold">{lightbox.category}</span>
                  <span>•</span>
                  <span>{lightbox.timeframe}</span>
                </div>
                <h4 className="text-sm sm:text-lg font-bold text-white tracking-tight line-clamp-1">
                  {lightbox.displayTitle}
                </h4>
              </div>

              <div className="flex items-center gap-3">
                {/* Before / After Fast Flip Switcher */}
                <div className="inline-flex items-center p-1 rounded-xl bg-white/10 border border-white/15 text-xs font-bold text-white">
                  <button
                    type="button"
                    onClick={() =>
                      setLightbox((prev) => (prev ? { ...prev, type: 'before' } : null))
                    }
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      lightbox.type === 'before'
                        ? 'bg-rose-600 text-white shadow-sm'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    BEFORE
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setLightbox((prev) => (prev ? { ...prev, type: 'after' } : null))
                    }
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      lightbox.type === 'after'
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    AFTER
                  </button>
                </div>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={closeLightbox}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
                  aria-label="Close fullscreen view"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Lightbox Main Image Stage */}
            <div className="relative flex-1 max-w-6xl w-full mx-auto my-3 sm:my-4 flex items-center justify-center overflow-hidden">
              <div className="relative w-full h-full max-h-[72vh] aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/40">
                <Image
                  src={lightbox.type === 'before' ? lightbox.beforeImage : lightbox.afterImage}
                  alt={
                    lightbox.type === 'before'
                      ? `Before: ${lightbox.beforeDesc}`
                      : `After: ${lightbox.afterDesc}`
                  }
                  fill
                  priority
                  sizes="100vw"
                  className="object-contain object-center"
                />

                {/* Current State Floating Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg backdrop-blur-md text-xs font-black tracking-wider text-white shadow-lg ${
                      lightbox.type === 'before'
                        ? 'bg-rose-950/90 border border-rose-500/50'
                        : 'bg-emerald-950/90 border border-emerald-500/50'
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        lightbox.type === 'before' ? 'bg-rose-500' : 'bg-emerald-400'
                      }`}
                      aria-hidden="true"
                    />
                    {lightbox.type === 'before' ? 'BEFORE (The Problem)' : 'AFTER (ApexFlow Solution)'}
                  </span>
                </div>

                {/* Navigation Arrow Left/Right to flip between Before and After */}
                <button
                  type="button"
                  onClick={toggleLightboxType}
                  className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-110 active:scale-95 shadow-lg"
                  aria-label={`Switch to ${lightbox.type === 'before' ? 'After' : 'Before'}`}
                >
                  <ChevronLeft className="w-6 h-6" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={toggleLightboxType}
                  className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-110 active:scale-95 shadow-lg"
                  aria-label={`Switch to ${lightbox.type === 'before' ? 'After' : 'Before'}`}
                >
                  <ChevronRight className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Lightbox Bottom Caption & Action Bar */}
            <div className="max-w-6xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-white/10 z-20">
              <div className="text-left w-full sm:w-auto">
                <span
                  className={`text-xs font-bold uppercase tracking-wider block mb-0.5 ${
                    lightbox.type === 'before' ? 'text-rose-400' : 'text-emerald-400'
                  }`}
                >
                  {lightbox.type === 'before' ? 'Diagnosed Problem:' : 'Completed Craftsmanship:'}
                </span>
                <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 max-w-3xl">
                  {lightbox.type === 'before' ? lightbox.beforeDesc : lightbox.afterDesc}
                </p>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto shrink-0 justify-end">
                <button
                  type="button"
                  onClick={() => {
                    const svc = lightbox.serviceId;
                    closeLightbox();
                    if (typeof window !== 'undefined') {
                      window.dispatchEvent(
                        new CustomEvent('plumber-select-service', { detail: svc })
                      );
                      const wizardEl = document.getElementById('wizard');
                      if (wizardEl) {
                        window.history.pushState(null, '', `#wizard?service=${svc}`);
                        wizardEl.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
                >
                  <span>Fix Similar Issue</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
