'use client';

import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import {
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
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
  description: string;
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
    description:
      'Replacement of a severely cracked and leaking kitchen mixer tap where water was pooling over the basin deck. We decommissioned the damaged fixture, inspected the internal supply isolating valves, and precision-installed a commercial-grade high-arc brushed nickel pull-down mixer tap with ceramic disc cartridges and watertight braided stainless-steel connectors.',
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
    description:
      'Emergency repair and overhaul of a deteriorated under-sink drainage trap that was actively leaking wastewater across the timber cabinet floor. We replaced the failing slip-joint gaskets with a heavy-duty, clean dual-sink PVC trap assembly, installed dedicated isolating service valves, and sanitized the workspace to a dry, leak-free finish.',
    timeframe: '90 Minutes on-site',
    statusOnArrival: 'Cabinet Wastewater Pooling',
    warranty: '1-Year Workmanship Warranty',
    serviceId: 'drain-cleaning',
    beforeImage: '/images/ba-sink-before.jpg',
    afterImage: '/images/ba-sink-after.jpg',
  },
  {
    id: 'ba-bathroom-suite-installation',
    category: 'Full Bathroom Installation',
    tabLabel: 'Full Bathroom Installation',
    title: 'Bare Rough-In Room to Full Luxury Bathroom Suite Installation',
    description:
      'Complete turnkey bathroom suite installation starting from bare rough-in water and drainage pipework. We installed a floating timber-finish vanity unit with modern matte black mixer tap, a frameless glass walk-in rainfall shower enclosure with thermostatic controls, and a high-efficiency dual-flush toilet suite fully tested for airtight drainage.',
    timeframe: '1 Day on-site',
    statusOnArrival: 'Rough-In Plumbing Only',
    warranty: '2-Year Workmanship Warranty',
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

  // Touch swipe coordinates for mobile & tablet project navigation
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

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

  // Safe touch swipe handling (swiping left/right on description card or header)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;

    // Minimum 40px deliberate horizontal movement exceeding vertical scroll
    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
      if (deltaX < 0) {
        nextProject();
      } else {
        prevProject();
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
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
            Before &amp; After Showcase
          </h2>
          <p className="text-sm sm:text-lg text-slate-600 leading-relaxed font-normal">
            Real photographic proof from certified Gas Safe registered plumbing &amp; heating engineers across London. Drag the slider to compare results.
          </p>
        </ScrollReveal>

        {/* Project Header Info (Cleanly aligned with the image card) */}
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
          <div className="flex items-center gap-2.5 sm:gap-3 self-start sm:self-auto shrink-0 pb-1">
            <div className="text-xs font-mono font-bold text-slate-400">
              0{currentIndex + 1} / 0{SHOWCASE_PROJECTS.length}
            </div>
          </div>
        </div>

        {/* The Comparison Slider with Outside Borderless Pagination Buttons */}
        <div className="relative">
          {/* LEFT SLIDESHOW NAVIGATION BUTTON (Outside card, borderless, overflowing padding) */}
          <button
            type="button"
            onClick={prevProject}
            className="absolute -left-3 sm:-left-5 md:-left-6 lg:-left-7 xl:-left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 min-w-[44px] min-h-[44px] rounded-sm bg-slate-100 hover:bg-orange-500 hover:text-white text-slate-700 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md sm:shadow-xs active:scale-95 touch-manipulation"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" aria-hidden="true" />
          </button>

          {/* The Slider Image Card */}
          <div
            ref={containerRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            className="relative aspect-[16/10] max-h-[560px] lg:max-h-[640px] w-full rounded-none overflow-hidden select-none touch-none shadow-md border border-slate-200/80 cursor-pointer bg-slate-100 group"
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
            <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-none bg-navy-950/80 backdrop-blur-xs text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider border border-white/10 pointer-events-none">
              AFTER
            </div>

            {/* BEFORE IMAGE (Clipped Top Layer) */}
            <div
              className={`absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden ${
                isDragging
                  ? ''
                  : 'transition-[clip-path] duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]'
              }`}
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
              <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-none bg-navy-950/80 backdrop-blur-xs text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider border border-white/10 pointer-events-none">
                BEFORE
              </div>
            </div>

            {/* DIVIDER LINE */}
            <div
              className={`absolute top-0 bottom-0 z-20 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.6)] pointer-events-none ${
                isDragging
                  ? ''
                  : 'transition-[left] duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]'
              }`}
              style={{ left: `${sliderPosition}%` }}
            />

            {/* DRAGGABLE CIRCLE HANDLE */}
            <div
              className={`absolute z-30 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none ${
                isDragging
                  ? ''
                  : 'transition-[left] duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]'
              }`}
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-navy-950/90 text-white border-2 border-white shadow-2xl flex items-center justify-center backdrop-blur-xs group-hover:scale-110 group-hover:border-orange-400 group-hover:shadow-orange-500/30 transition-all duration-200">
                <div className="flex items-center -space-x-1 text-white">
                  <ChevronLeft className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
                  <ChevronRight className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SLIDESHOW NAVIGATION BUTTON (Outside card, borderless, overflowing padding) */}
          <button
            type="button"
            onClick={nextProject}
            className="absolute -right-3 sm:-right-5 md:-right-6 lg:-right-7 xl:-right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 min-w-[44px] min-h-[44px] rounded-sm bg-slate-100 hover:bg-orange-500 hover:text-white text-slate-700 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md sm:shadow-xs active:scale-95 touch-manipulation"
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" aria-hidden="true" />
          </button>
        </div>

        {/* Clickable Pagination Dots for Mobile, Tablet & Desktop */}
        <div className="flex items-center justify-center gap-2 mt-4 sm:mt-5">
          {SHOWCASE_PROJECTS.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setCurrentIndex(idx);
                setSliderPosition(50);
              }}
              className={`h-2 transition-all duration-300 min-h-[8px] rounded-none ${
                idx === currentIndex ? 'w-8 bg-orange-500' : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to project ${idx + 1}`}
            />
          ))}
        </div>

        {/* 1 Single Description Card (Sharp rounded-none, unified narrative) */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="mt-5 sm:mt-6 bg-slate-50/90 border border-slate-200/90 rounded-none p-5 sm:p-7 shadow-xs select-none touch-pan-y"
        >
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-xs sm:text-sm uppercase tracking-wide">
              <span className="w-2 h-2 rounded-none bg-orange-500" aria-hidden="true" />
              <span>Description</span>
            </div>
            <span className="text-[11px] text-slate-400 font-medium hidden sm:inline lg:hidden">
              ← Swipe card or click arrows to browse projects →
            </span>
            <span className="text-[11px] text-slate-400 font-medium sm:hidden">
              ← Swipe to change →
            </span>
          </div>
          <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed font-normal">
            {currentProject.description}
          </p>
        </div>

        {/* Bottom Guarantee & CTA Strip (Clean 1 single line on tablet & desktop) */}
        <div className="mt-6 pt-5 border-t border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 whitespace-nowrap">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
            <span>Gas Safe Registered • 1-Year Guarantee</span>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 w-full sm:w-auto shrink-0">
            <a
              href={`#wizard?service=${currentProject.serviceId}`}
              onClick={(e) => handleSelectService(e, currentProject.serviceId)}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-sm bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold text-xs sm:text-sm shadow-xs hover:shadow transition-all min-h-[40px] text-center whitespace-nowrap"
              aria-label={`Fix similar issue for ${currentProject.title}`}
            >
              <span>Fix Similar Issue</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
            <a
              href={`tel:${SITE_CONFIG.business.phone}`}
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-sm bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm transition-colors min-h-[40px] whitespace-nowrap"
              aria-label={`Call emergency dispatch at ${SITE_CONFIG.business.phone}`}
            >
              <Phone className="w-3.5 h-3.5 text-orange-500" aria-hidden="true" />
              <span>Call Dispatch</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
