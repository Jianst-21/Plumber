'use client';

import React from 'react';
import Image from 'next/image';
import { Calendar, Navigation, Star } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site.config';

function GoogleLogo({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="24" height="24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

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
    <section className="relative w-full bg-slate-950 overflow-hidden" aria-label="Hero">
      {/* ============================================================ */}
      {/* DESKTOP / TABLET HERO (md:block): EXACT PIXEL-PERFECT MASTER */}
      {/* ============================================================ */}
      <div className="hidden md:block relative w-full aspect-[1535/724] max-w-[1920px] mx-auto overflow-hidden select-none">
        {/* Full HD Master Hero Banner (Cleaned with ZERO baked-in badge and ZERO van artifacts) */}
        <Image
          src="/images/hero-apex.jpg"
          alt="Melbourne's Trusted Plumbing & Heating Experts - Apex Plumbing"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top pointer-events-none"
        />

        {/* 1. Interactive Button Hotspot: Schedule an Appointment */}
        <a
          href="#wizard"
          onClick={(e) => handleScrollTo(e, 'wizard')}
          className="absolute z-30 rounded-full transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] cursor-pointer focus:outline-none focus:ring-4 focus:ring-orange-400"
          style={{
            left: '4.1%',
            top: '72.5%',
            width: '16.6%',
            height: '6.2%',
          }}
          aria-label="Schedule an Appointment in quote wizard"
          title="Schedule an Appointment"
        >
          <span className="sr-only">Schedule an Appointment</span>
        </a>

        {/* 2. Interactive Button Hotspot: Have an Emergency? */}
        <a
          href={`tel:${SITE_CONFIG.business.phone}`}
          className="absolute z-30 rounded-full transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] cursor-pointer focus:outline-none focus:ring-4 focus:ring-orange-400"
          style={{
            left: '21.6%',
            top: '72.5%',
            width: '14.0%',
            height: '6.2%',
          }}
          aria-label={`Call emergency dispatch at ${SITE_CONFIG.business.phone}`}
          title="Have an Emergency? Call 24/7"
        >
          <span className="sr-only">Have an Emergency? Call Now</span>
        </a>

        {/* 3. Real Interactive Crisp HTML Floating Badge: Google Reviews 4.9 */}
        <a
          href="#reviews"
          onClick={(e) => handleScrollTo(e, 'reviews')}
          className="group absolute z-30 bg-white/95 hover:bg-white backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl border border-slate-100 hover:border-slate-200 transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-3 px-4 py-2.5"
          style={{
            left: '77.2%',
            top: '67.0%',
            width: '19.0%',
            minHeight: '74px',
          }}
          aria-label="View verified Google customer reviews"
          title="Google Reviews 4.9/5 - Click to read reviews"
        >
          <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
            <GoogleLogo className="w-5 h-5" />
          </div>
          <div className="min-w-0 text-left">
            <div className="flex items-center gap-1.5 leading-none">
              <span className="text-base font-extrabold text-slate-950">4.9</span>
              <Star className="w-4 h-4 fill-amber-400 text-amber-400 -mt-0.5" aria-hidden="true" />
            </div>
            <p className="text-[11px] text-slate-600 font-medium leading-tight mt-1 truncate">
              Rated 4.9 based on 500+ Google Reviews
            </p>
          </div>
        </a>
      </div>

      {/* ============================================================ */}
      {/* MOBILE HERO (< md): DEDICATED HIGH-CONTRAST TOUCH-FRIENDLY   */}
      {/* ============================================================ */}
      <div className="md:hidden relative min-h-[580px] flex flex-col justify-between py-10 px-5 text-white overflow-hidden">
        {/* Background Image Cropped to Technician */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <Image
            src="/images/hero-apex.jpg"
            alt="Apex Plumbing Technician"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[75%_center] opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60" />
        </div>

        {/* Mobile Content */}
        <div className="relative z-10 space-y-4 pt-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-400 text-xs font-bold">
            <span>24/7 Emergency Dispatch Available</span>
          </div>

          <h1 className="text-3xl font-extrabold text-white tracking-tight leading-[1.15]">
            Melbourne&apos;s Trusted
            <br />
            Plumbing &amp; Heating
            <br />
            Experts
          </h1>

          <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
            Fast, reliable plumbing, drain cleaning, heating &amp; cooling services available <strong className="text-white font-bold">24/7</strong>.
          </p>

          {/* 5 Service Bullets */}
          <div className="flex flex-wrap gap-x-4 gap-y-2 pt-1 pb-2">
            {HERO_SERVICES.map((s) => (
              <div key={s} className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-200">
                <div className="w-4 h-4 rounded-full bg-orange-500/20 border border-orange-500 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                </div>
                <span>{s}</span>
              </div>
            ))}
          </div>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-3 pt-2">
            <a
              href="#wizard"
              onClick={(e) => handleScrollTo(e, 'wizard')}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold text-sm shadow-lg shadow-orange-500/30 text-center"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>Schedule an Appointment</span>
            </a>

            <a
              href={`tel:${SITE_CONFIG.business.phone}`}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-white hover:bg-orange-50 text-orange-600 border border-orange-500 font-bold text-sm shadow-md text-center"
            >
              <Navigation className="w-4 h-4 text-orange-500 rotate-45" />
              <span>Have an Emergency?</span>
            </a>
          </div>
        </div>

        {/* Mobile Google Review Card */}
        <div className="relative z-10 pt-6">
          <a
            href="#reviews"
            onClick={(e) => handleScrollTo(e, 'reviews')}
            className="block bg-white rounded-2xl p-3.5 shadow-xl border border-slate-100 max-w-xs"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-center shrink-0">
                <GoogleLogo className="w-5 h-5" />
              </div>
              <div className="min-w-0 text-left">
                <div className="flex items-center gap-1 leading-none">
                  <span className="text-base font-extrabold text-slate-950">4.9</span>
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400 -mt-0.5" />
                </div>
                <p className="text-[11px] text-slate-600 font-medium leading-tight mt-1 truncate">
                  Rated 4.9 based on 500+ Google Reviews
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
