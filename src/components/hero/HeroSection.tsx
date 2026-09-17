'use client';

import React from 'react';
import Image from 'next/image';
import { Phone, Zap, CheckCircle2, Clock, ShieldCheck, Award } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site.config';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/60 pt-8 pb-14 sm:pt-12 sm:pb-20 lg:py-24 border-b border-slate-200/80">
      {/* Background Subtle Accent Glow */}
      <div
        className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 -z-10 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Core Value Copy & Dual CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* 1. Emergency Dispatch Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200/90 text-red-700 text-xs sm:text-sm font-bold shadow-xs mb-5 sm:mb-6 animate-fade-in">
              <span className="relative flex h-2.5 w-2.5 flex-shrink-0" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600" />
              </span>
              <span>24/7 Rapid Emergency Response in Austin, TX</span>
            </div>

            {/* 2. Primary Headline (H1) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-extrabold text-navy-900 tracking-tight leading-[1.18] sm:leading-[1.15] mb-5">
              Fast, Licensed Emergency Plumbing in Austin:{' '}
              <span className="text-amber-600 underline decoration-amber-400/50 decoration-wavy decoration-2">
                At Your Door in 45 Minutes or Less!
              </span>
            </h1>

            {/* 3. Subtitle / Value Proposition */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8 max-w-2xl font-normal">
              From sudden pipe bursts and severe drain backups to failing water heaters, Austin homeowners trust{' '}
              <span className="font-semibold text-slate-900">{SITE_CONFIG.business.name}</span> for upfront flat-rate pricing,{' '}
              <strong className="font-semibold text-slate-900">zero night or weekend overtime surcharges</strong>, and a 100% satisfaction guarantee.
            </p>

            {/* 4. Dual Call-to-Actions */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-8">
              {/* Primary Safety Amber CTA */}
              <a
                href={`tel:${SITE_CONFIG.business.phone}`}
                className="group inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-navy-900 font-extrabold text-base sm:text-lg shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] transition-all duration-200 min-h-[48px] text-center"
                aria-label={`Call emergency dispatch at ${SITE_CONFIG.business.displayPhone}`}
              >
                <div className="w-8 h-8 rounded-lg bg-navy-900/10 flex items-center justify-center group-hover:rotate-12 transition-transform duration-200">
                  <Phone className="w-4 h-4 fill-navy-900 text-navy-900" />
                </div>
                <span>Call {SITE_CONFIG.business.phone}</span>
              </a>

              {/* Secondary Navy Outline CTA */}
              <a
                href="#wizard"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-navy-900 hover:bg-navy-800 active:bg-navy-950 text-white font-bold text-base sm:text-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150 min-h-[48px] border border-navy-700 text-center"
                aria-label="Get instant free plumbing quote"
              >
                <Zap className="w-5 h-5 text-amber-400 fill-amber-400 flex-shrink-0" aria-hidden="true" />
                <span>Get Instant Free Quote</span>
              </a>
            </div>

            {/* 5. Three Key Trust Bullet Points */}
            <div className="w-full pt-4 border-t border-slate-200/80">
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 text-xs sm:text-sm font-semibold text-slate-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Zero Night or Weekend Overtime Surcharge</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Same-Day Emergency Dispatch Guaranteed</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Upfront, Flat-Rate Pricing Before Work Begins</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Hero Visual with Badges */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Photo Frame Container */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/4.5]">
                <Image
                  src="/images/hero-plumber.jpg"
                  alt="ApexFlow licensed Texas master plumber contractor equipped with specialized tools ready for emergency service in Austin"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Subtle vignette / gradient for badge legibility */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-navy-950/30 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Overlay Badge 2: Top Right - Texas Master Plumber */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 bg-navy-900/90 backdrop-blur-md text-white px-3 sm:px-3.5 py-2 rounded-xl shadow-lg border border-navy-700/80 flex items-center gap-2.5 max-w-[220px]">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold text-slate-300 uppercase tracking-wider leading-none">
                      State Certified
                    </p>
                    <p className="text-xs font-extrabold text-white truncate mt-0.5">
                      Texas Master Plumber #MP-41982
                    </p>
                  </div>
                </div>

                {/* Overlay Badge 3: Top Left - Dispatch Stat Pill */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-md border border-slate-200 flex items-center gap-2">
                  <span className="relative flex h-2 w-2 flex-shrink-0" aria-hidden="true">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
                  </span>
                  <span className="text-[11px] sm:text-xs font-bold text-slate-800">
                    <strong className="text-emerald-700 font-extrabold">98.7%</strong> On-Time Emergency Dispatch
                  </span>
                </div>

                {/* Overlay Badge 1: Bottom Left - 45-Min Arrival Guarantee */}
                <div className="absolute bottom-3 left-3 right-3 sm:right-auto sm:bottom-4 sm:left-4 z-10 bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl shadow-xl border border-slate-200/90 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 border border-amber-300/60 flex items-center justify-center text-amber-600 flex-shrink-0">
                    <Clock className="w-5 h-5 text-amber-600" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] sm:text-[11px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded uppercase tracking-wide">
                        Guaranteed Service
                      </span>
                    </div>
                    <p className="text-sm sm:text-base font-extrabold text-navy-900 leading-snug">
                      45-Min Arrival Guarantee
                    </p>
                    <p className="text-[11px] text-slate-500 font-medium">
                      All Greater Austin Neighborhoods
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Trust Mini-Footer under Image on Desktop */}
              <div className="mt-3 flex items-center justify-between text-xs text-slate-500 px-1">
                <span className="flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-amber-500" aria-hidden="true" />
                  <span>100% Satisfaction Guaranteed</span>
                </span>
                <span className="font-semibold text-slate-700">
                  Austin, TX &amp; Surrounding Areas
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
