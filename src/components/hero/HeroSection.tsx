'use client';

import React from 'react';
import Image from 'next/image';
import { Calendar, Navigation, CheckCircle2, Star } from 'lucide-react';
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

const HERO_FEATURES = [
  'Plumbing',
  'Cleaning',
  'Heating Systems',
  'Air Conditioning',
  'Water Heaters',
];

export default function HeroSection() {
  const handleScrollToWizard = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const wizardEl = document.getElementById('wizard');
    if (wizardEl) {
      wizardEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#151d2a] text-white">
      {/* Background Decorative Ambient Glows */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#121924] via-[#162130] to-transparent z-10 pointer-events-none lg:w-3/5"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center min-h-[580px] lg:min-h-[620px] py-12 lg:py-0">
          {/* Left Column: Core Value Copy & Dual CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left pt-2 lg:py-16">
            {/* 1. Primary Headline (H1) */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-extrabold text-white tracking-tight leading-[1.14] mb-4">
              Austin&apos;s Trusted
              <br />
              Plumbing &amp; Heating
              <br />
              Experts
            </h1>

            {/* 2. Subtitle / Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-7 max-w-xl font-normal">
              Fast, reliable plumbing, drain cleaning, heating &amp; cooling services available{' '}
              <strong className="text-white font-bold">24/7</strong>.
            </p>

            {/* 3. Five Service Bullet Checkmarks */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-8 max-w-xl">
              {HERO_FEATURES.map((item) => (
                <div key={item} className="inline-flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full border border-orange-500/80 flex items-center justify-center text-orange-400 bg-orange-500/10">
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
                onClick={handleScrollToWizard}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 min-h-[48px] text-center"
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

          {/* Right Column: Hero Visual with Plumber & Floating Google Review */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-end h-full">
            <div className="relative w-full max-w-md lg:max-w-none aspect-[4/4.5] sm:aspect-[4/4] lg:aspect-[4/4.8] rounded-3xl overflow-hidden shadow-2xl">
              {/* Real Smiling Plumber in Modern Kitchen */}
              <Image
                src="/images/hero-plumber.jpg"
                alt="Austin licensed master plumber in blue uniform standing in kitchen ready for 24/7 service"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
                className="object-cover object-top lg:object-center transform hover:scale-102 transition-transform duration-700 ease-out"
              />

              {/* Bottom Right: Floating Google Review Badge Component */}
              <div className="absolute bottom-4 right-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 shadow-2xl border border-slate-100/90 flex items-center gap-3.5 max-w-[280px]">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-center flex-shrink-0 shadow-xs">
                  <GoogleLogo className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 leading-none">
                    <span className="text-base font-extrabold text-slate-950">4.9</span>
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400 -mt-0.5" aria-hidden="true" />
                  </div>
                  <p className="text-[11px] text-slate-600 font-medium leading-tight mt-1 truncate">
                    Rated 4.9 based on 500+ Google Reviews
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
