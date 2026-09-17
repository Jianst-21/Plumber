'use client';

import React from 'react';
import Image from 'next/image';
import { Calendar, Navigation } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site.config';

const HERO_SERVICES = [
  'Plumbing',
  'Cleaning',
  'Heating Systems',
  'Air Conditioning',
  'Water Heaters',
];

export default function HeroSection() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[680px] flex items-center bg-[#0c131d] overflow-hidden">
      {/* Full-Bleed Panoramic Background with Smiling Technician in Kitchen */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <Image
          src="/images/hero-panoramic.jpg"
          alt="Austin plumbing and heating technician in modern kitchen"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right md:object-center"
        />
        {/* Mobile Extra Dark Dimmer for 100% text contrast on small viewports */}
        <div
          className="md:hidden absolute inset-0 bg-slate-950/70"
          aria-hidden="true"
        />
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-14 sm:py-20 lg:py-24">
        <div className="max-w-xl lg:max-w-2xl flex flex-col items-start text-left">
          {/* 1. Primary Headline (H1) */}
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[3.85rem] font-extrabold text-white tracking-tight leading-[1.12] mb-5">
            Austin&apos;s Trusted
            <br />
            Plumbing &amp; Heating
            <br />
            Experts
          </h1>

          {/* 2. Subtitle / Value Proposition */}
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-7 max-w-lg font-normal">
            Fast, reliable plumbing, drain cleaning, heating &amp; cooling services available{' '}
            <strong className="text-white font-bold">24/7</strong>.
          </p>

          {/* 3. Five Service Bullet Checkmarks */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-8 max-w-xl">
            {HERO_SERVICES.map((item) => (
              <div key={item} className="inline-flex items-center gap-2">
                <div className="w-5 h-5 rounded-full border border-orange-500/80 flex items-center justify-center text-orange-400 bg-orange-500/10 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-orange-500" />
                </div>
                <span className="text-sm font-semibold text-slate-200 tracking-wide">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* 4. Dual Call-to-Actions (Matching Reference) */}
          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            {/* Button 1: Schedule an Appointment (Orange Pill) */}
            <a
              href="#wizard"
              onClick={(e) => handleScrollTo(e, 'wizard')}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 min-h-[48px] text-center"
              aria-label="Schedule an appointment in quote wizard"
            >
              <Calendar className="w-4 h-4 text-white" aria-hidden="true" />
              <span>Schedule an Appointment</span>
            </a>

            {/* Button 2: Have an Emergency? (White Pill with Orange Border) */}
            <a
              href={`tel:${SITE_CONFIG.business.phone}`}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white hover:bg-orange-50 active:bg-orange-100 text-orange-600 border border-orange-500 font-bold text-sm sm:text-base shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 min-h-[48px] text-center"
              aria-label={`Call emergency team at ${SITE_CONFIG.business.phone}`}
            >
              <Navigation className="w-4 h-4 text-orange-500 rotate-45" aria-hidden="true" />
              <span>Have an Emergency?</span>
            </a>
          </div>
        </div>
      </div>

      {/* Clickable Hotspot Anchor over the Google Review Badge in the background image */}
      <a
        href="#reviews"
        onClick={(e) => handleScrollTo(e, 'reviews')}
        className="hidden sm:block absolute bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-10 w-72 h-20 z-20 cursor-pointer rounded-2xl"
        aria-label="View Google customer reviews"
      />
    </section>
  );
}
