'use client';

import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import {
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Phone,
  ArrowRight,
} from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SITE_CONFIG } from '@/config/site.config';

interface ShowcaseProject {
  id: string;
  category: string;
  title: string;
  tabLabel: string;
  problemTitle: string;
  beforeDesc: string;
  afterDesc: string;
  timeframe: string;
  statusOnArrival: string;
  warranty: string;
  serviceId: string;
  beforeImage: string;
  afterImage: string;
}

const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: 'ba-faucet-replacement',
    category: 'Taps & Fixtures',
    tabLabel: 'Kitchen Mixer Tap',
    title: 'Broken Kitchen Mixer Tap to Modern High-Arc Fixture',
    problemTitle: 'Active Spray Head Failure & Cartridge Leak',
    beforeDesc:
      'Cracked internal ceramic cartridge and damaged pull-out spray head leaking water over the kitchen counter basin.',
    afterDesc:
      'Installed commercial-grade high-arc brushed nickel pull-down mixer tap with ceramic disc valve and watertight braided flexible connectors.',
    timeframe: '45 Minutes on-site',
    statusOnArrival: 'Active Spray Head Failure',
    warranty: '1-Year Workmanship Warranty',
    serviceId: 'fixture-pipe',
    beforeImage: '/images/ba-faucet-before.jpg',
    afterImage: '/images/ba-faucet-after.jpg',
  },
  {
    id: 'ba-sink-ptrap',
    category: 'Drainage & Waste Trap',
    tabLabel: 'Under-Sink Waste Trap',
    title: 'Leaking Under-Sink Waste Trap to Clean Sealed PVC Assembly',
    problemTitle: 'Deteriorated Trap Seal & Cabinet Leak',
    beforeDesc:
      'Severely leaking waste trap joint and deteriorating slip-gaskets causing standing wastewater pooling inside the cabinet.',
    afterDesc:
      'Rebuilt complete dual-sink PVC drainage waste assembly with watertight mechanical joints, clean trap, and dedicated isolating valves.',
    timeframe: '90 Minutes on-site',
    statusOnArrival: 'Cabinet Wastewater Pooling',
    warranty: '1-Year Workmanship Warranty',
    serviceId: 'drain-cleaning',
    beforeImage: '/images/ba-sink-before.jpg',
    afterImage: '/images/ba-sink-after.jpg',
  },
  {
    id: 'ba-toilet-installation',
    category: 'Toilets & Sanitation',
    tabLabel: 'Toilet & Soil Pipe',
    title: 'Toilet Soil Pipe Rough-In to Precision Installed Toilet',
    problemTitle: 'Unsealed Soil Pipe Collar & Bare Rough-In',
    beforeDesc:
      'Cracked leaking toilet pan removed, exposing unsealed soil pipe collar and requiring pan connector replacement, leveling, and water hookup.',
    afterDesc:
      'Installed reinforced flexible pan connector seal, secured floor anchor bolts, leveled dual-flush toilet, and connected braided water line.',
    timeframe: '1 Hour on-site',
    statusOnArrival: 'Unsealed Waste Pipe / Flange Leak',
    warranty: '1-Year Workmanship Warranty',
    serviceId: 'fixture-pipe',
    beforeImage: '/images/ba-toilet-before.jpg',
    afterImage: '/images/ba-toilet-after.jpg',
  },
];

export default function BeforeAfter() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentProject = SHOWCASE_PROJECTS[currentIndex];

  const handleSelectService = (e: React.MouseEvent<HTMLAnchorElement>, serviceId: string) => {
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

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % SHOWCASE_PROJECTS.length);
    setSliderPosition(50);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + SHOWCASE_PROJECTS.length) % SHOWCASE_PROJECTS.length);
    setSliderPosition(50);
  };

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    handleMove(e.clientX);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  return (
    <section
      id="before-after"
      className="py-14 sm:py-20 lg:py-28 bg-white relative overflow-hidden border-b border-slate-200/80"
      aria-label="Before and After Plumbing Showcase"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3 sm:mb-4">
            Real Results: Before &amp; After Showcase
          </h2>
          <p className="text-sm sm:text-lg text-slate-600 leading-relaxed font-normal">
            Real photographic proof from certified Gas Safe registered plumbing &amp; heating engineers across London. Drag the slider to compare results.
          </p>
        </ScrollReveal>

        {/* Project Header Info (Cleanly above the image, no card enclosure) */}
        <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider mb-2">
              <span className="text-orange-600">{currentProject.category}</span>
              <span className="text-slate-300" aria-hidden="true">•</span>
              <span className="inline-flex items-center gap-1 text-slate-500 font-semibold normal-case">
                <Clock className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                {currentProject.timeframe}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-navy-900 tracking-tight leading-snug">
              {currentProject.title}
            </h3>
          </div>
          <div className="text-xs font-mono font-bold text-slate-400 self-start sm:self-auto shrink-0">
            0{currentIndex + 1} / 0{SHOWCASE_PROJECTS.length}
          </div>
        </div>

        {/* The Comparison Slider with Outside Borderless Pagination Buttons */}
        <div className="relative flex items-center justify-center gap-2 sm:gap-4 md:gap-6">
          {/* LEFT SLIDESHOW NAVIGATION BUTTON (Outside card, borderless) */}
          <button
            type="button"
            onClick={prevProject}
            className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-100 hover:bg-orange-500 hover:text-white text-slate-700 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" aria-hidden="true" />
          </button>

          {/* The Slider Image Card */}
          <div className="flex-1 min-w-0">
            <div
              ref={containerRef}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              className="relative aspect-[16/10] max-h-[560px] lg:max-h-[620px] w-full rounded-2xl sm:rounded-3xl overflow-hidden select-none touch-none shadow-md border border-slate-200/80 cursor-ew-resize bg-slate-100 group"
              role="slider"
              aria-label={`Comparison slider for ${currentProject.title}`}
              aria-valuenow={Math.round(sliderPosition)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'ArrowLeft') {
                  setSliderPosition((prev) => Math.max(0, prev - 5));
                } else if (e.key === 'ArrowRight') {
                  setSliderPosition((prev) => Math.min(100, prev + 5));
                }
              }}
            >
              {/* AFTER IMAGE (Underneath Layer) */}
              <Image
                src={currentProject.afterImage}
                alt={`${currentProject.title} - After repair`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
                className="object-cover object-center pointer-events-none select-none"
                priority
              />
              <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-md bg-navy-950/80 backdrop-blur-xs text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider border border-white/10 pointer-events-none">
                AFTER
              </div>

              {/* BEFORE IMAGE (Clipped Top Layer) */}
              <div
                className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden"
                style={{
                  clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                }}
              >
                <Image
                  src={currentProject.beforeImage}
                  alt={`${currentProject.title} - Before repair`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
                  className="object-cover object-center pointer-events-none select-none"
                  priority
                />
                <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-md bg-navy-950/80 backdrop-blur-xs text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider border border-white/10 pointer-events-none">
                  BEFORE
                </div>
              </div>

              {/* DIVIDER LINE */}
              <div
                className="absolute top-0 bottom-0 z-20 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.6)] pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              />

              {/* DRAGGABLE CIRCLE HANDLE (Matching Image 2) */}
              <div
                className="absolute z-30 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-navy-950/90 text-white border-2 border-white shadow-2xl flex items-center justify-center backdrop-blur-xs group-hover:scale-105 transition-transform duration-200">
                  <div className="flex items-center -space-x-1 text-white">
                    <ChevronLeft className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
                    <ChevronRight className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SLIDESHOW NAVIGATION BUTTON (Outside card, borderless) */}
          <button
            type="button"
            onClick={nextProject}
            className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-100 hover:bg-orange-500 hover:text-white text-slate-700 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" aria-hidden="true" />
          </button>
        </div>

        {/* Project Details Below Image (Clean, No Card Enclosure) */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Problem Box */}
          <div className="bg-rose-50/70 border border-rose-200/80 rounded-2xl p-4 sm:p-5">
            <div className="flex items-center gap-2 mb-2 text-rose-700 font-extrabold text-xs sm:text-sm uppercase tracking-wide">
              <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" aria-hidden="true" />
              <span>The Problem: {currentProject.problemTitle}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              {currentProject.beforeDesc}
            </p>
          </div>

          {/* Solution Box */}
          <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-4 sm:p-5">
            <div className="flex items-center gap-2 mb-2 text-emerald-800 font-extrabold text-xs sm:text-sm uppercase tracking-wide">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
              <span>The Solution: Certified Fix</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              {currentProject.afterDesc}
            </p>
          </div>
        </div>

        {/* Bottom Guarantee & CTA Strip (Clean & Unboxed) */}
        <div className="mt-6 pt-5 border-t border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
            <span>Gas Safe Registered Engineer • 1-Year Workmanship Warranty</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`#wizard?service=${currentProject.serviceId}`}
              onClick={(e) => handleSelectService(e, currentProject.serviceId)}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold text-xs sm:text-sm shadow-sm hover:shadow transition-all min-h-[44px] text-center"
              aria-label={`Fix similar issue for ${currentProject.title}`}
            >
              <span>Fix Similar Issue</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
            <a
              href={`tel:${SITE_CONFIG.business.phone}`}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm transition-colors min-h-[44px]"
              aria-label={`Call emergency dispatch at ${SITE_CONFIG.business.phone}`}
            >
              <Phone className="w-3.5 h-3.5 text-orange-500" aria-hidden="true" />
              <span className="hidden sm:inline">Call Dispatch</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
