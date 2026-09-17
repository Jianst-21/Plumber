'use client';

import React from 'react';
import Image from 'next/image';
import { Calendar, Navigation, Star, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site.config';

function GoogleLogo({ className = 'w-6 h-6' }: { className?: string }) {
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
    <section className="relative w-full min-h-[600px] sm:min-h-[660px] lg:min-h-[720px] flex items-center bg-[#0d141e] overflow-hidden">
      {/* 1. Fullscreen / Full-Bleed Clean Photography (ZERO baked-in text, ZERO baked-in buttons) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <Image
          src="/images/hero-clean-bg.jpg"
          alt="Austin luxury home residential plumbing and kitchen"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center lg:object-right"
        />

        {/* 2. Soft, Translucent Left Gradient Shadow (Natural Shading, NOT Solid Black!) */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent lg:w-3/5"
          aria-hidden="true"
        />
        {/* Subtle ground shadow for smooth transition to the trust strip */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-slate-950/20"
          aria-hidden="true"
        />
      </div>

      {/* 3. Main Hero Content Landmark: 100% Real Next.js HTML/Tailwind */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-14 sm:py-20 lg:py-24">
        <div className="max-w-xl lg:max-w-2xl flex flex-col items-start text-left">
          {/* Dispatch Status Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-400 text-xs sm:text-sm font-bold mb-5 backdrop-blur-xs">
            <span className="relative flex h-2 w-2 flex-shrink-0" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
            </span>
            <span>24/7 Rapid Emergency Response in Austin, TX</span>
          </div>

          {/* Primary Headline (H1) for Austin, TX */}
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[3.85rem] font-extrabold text-white tracking-tight leading-[1.12] mb-5">
            Austin&apos;s Trusted
            <br />
            Plumbing &amp; Heating
            <br />
            Experts
          </h1>

          {/* Subtitle / Value Proposition */}
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-7 max-w-lg font-normal">
            Fast, reliable plumbing, drain cleaning, heating &amp; cooling services available{' '}
            <strong className="text-white font-bold">24/7</strong> across Greater Austin.
          </p>

          {/* 5 Service Bullet Checkmarks */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5 mb-8 max-w-xl">
            {HERO_SERVICES.map((item) => (
              <div key={item} className="inline-flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" aria-hidden="true" />
                <span className="text-xs sm:text-sm font-semibold text-slate-200 tracking-wide">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Dual Action Buttons (Real HTML/React interactive buttons) */}
          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            {/* Button 1: Schedule an Appointment (Vibrant Orange Pill) */}
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

      {/* Floating Google Review Badge (Clean Interactive HTML Component in Bottom Right) */}
      <div className="hidden sm:block absolute bottom-6 right-6 lg:bottom-8 lg:right-10 z-20">
        <a
          href="#reviews"
          onClick={(e) => handleScrollTo(e, 'reviews')}
          className="group block bg-white/95 hover:bg-white backdrop-blur-md rounded-2xl p-3.5 px-4 shadow-2xl border border-slate-100 hover:border-slate-200 hover:-translate-y-0.5 transition-all duration-200 max-w-[280px]"
          aria-label="View Google customer reviews"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
              <GoogleLogo className="w-6 h-6" />
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
          </div>
        </a>
      </div>
    </section>
  );
}
