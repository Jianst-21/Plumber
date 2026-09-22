'use client';

import React from 'react';
import Image from 'next/image';
import { Star, ShieldCheck, CheckCircle2, ArrowRight, Clock, Award } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SITE_CONFIG } from '@/config/site.config';

export default function WhyChooseUs() {
  const handleScrollToWizard = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== 'undefined') {
      const wizardEl = document.getElementById('wizard');
      if (wizardEl) {
        e.preventDefault();
        window.history.pushState(null, '', '#wizard');
        wizardEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="about"
      className="py-16 sm:py-24 lg:py-28 bg-white relative overflow-hidden border-b border-slate-200/80"
      aria-label="About Apex Plumbing"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Overlapping Photos & Client Review Floating Badge (Matching Image 1) */}
          <ScrollReveal delay={0.05} className="lg:col-span-6 relative">
            <div className="relative w-full max-w-lg mx-auto lg:max-w-none pb-12 sm:pb-16 pr-8 sm:pr-14">
              {/* Back Photo (Plumbing Wrench & Fixtures) */}
              <div className="relative w-[78%] aspect-[4/5] overflow-hidden border border-slate-200/90 shadow-md bg-slate-100">
                <Image
                  src="/images/about-wrench-valve.jpg"
                  alt="Apex Plumbing professional plumbing equipment, valves, and precision tools"
                  fill
                  sizes="(max-width: 768px) 80vw, 40vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Front Overlapping Photo (Plumber repairing kitchen sink) */}
              <div className="absolute right-0 bottom-4 w-[62%] aspect-[4/5] overflow-hidden border-4 border-white shadow-xl bg-slate-200 z-10">
                <Image
                  src="/images/about-repairman-sink.jpg"
                  alt="Apex Plumbing certified Gas Safe engineer repairing kitchen sink plumbing"
                  fill
                  sizes="(max-width: 768px) 60vw, 30vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Floating Review Badge (Matching Image 1, sharp corners) */}
              <div className="absolute left-2 sm:left-4 bottom-0 z-20 bg-white border border-slate-200/90 p-4 sm:p-5 shadow-xl min-w-[170px] sm:min-w-[200px]">
                <div className="flex items-center gap-2 mb-1">
                  <Star className="w-6 h-6 sm:w-7 sm:h-7 fill-amber-400 text-amber-400 shrink-0" aria-hidden="true" />
                  <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">4.95</span>
                </div>
                <p className="text-xs sm:text-sm font-bold text-slate-700">Client Reviews</p>
                <p className="text-[11px] text-slate-400 mt-0.5">280+ Verified London Ratings</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: About Narrative & Details (Matching Image 1) */}
          <ScrollReveal delay={0.12} className="lg:col-span-6 flex flex-col justify-center">
            {/* Tag Kicker */}
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-sky-700 mb-2.5 block font-mono">
              ABOUT APEX PLUMBING
            </span>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight mb-5">
              Fast &amp; Reliable Plumbing Service
            </h2>

            {/* Narrative Prose */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6">
              Founded on the principles of craftsmanship, transparency, and punctuality, Apex Plumbing has grown to become London&apos;s trusted emergency and residential plumbing contractor. We eliminate the guesswork from plumbing repairs by guaranteeing certified engineers, transparent upfront pricing, and absolute respect for your home.
            </p>

            {/* Key Trust Points List */}
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <span className="text-sm font-bold text-slate-900">Gas Safe Registered &amp; Fully Insured:</span>{' '}
                  <span className="text-xs sm:text-sm text-slate-600">Lic #{SITE_CONFIG.business.licenseNumber}, £5M public liability protection.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <span className="text-sm font-bold text-slate-900">Transparent Flat-Rate Quotes:</span>{' '}
                  <span className="text-xs sm:text-sm text-slate-600">Written pricing confirmed before touching tools. Zero overtime surcharges for nights or weekends.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <span className="text-sm font-bold text-slate-900">Rapid Response &amp; Workmanship Warranty:</span>{' '}
                  <span className="text-xs sm:text-sm text-slate-600">Average 45-minute dispatch across London with 1-Year guarantee on all labour.</span>
                </div>
              </div>
            </div>

            {/* Button: Sharp / Minimalist rounded-sm (Matching Image 1) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="#wizard"
                onClick={handleScrollToWizard}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-sm bg-navy-950 hover:bg-orange-500 active:bg-orange-600 text-white font-extrabold text-sm sm:text-base transition-colors duration-200 text-center min-h-[44px] shadow-sm whitespace-nowrap"
                aria-label="Book a certified plumber with our company"
              >
                <span>Book an Engineer</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={`tel:${SITE_CONFIG.business.phone}`}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-sm bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-colors text-center min-h-[44px] whitespace-nowrap"
                aria-label={`Call emergency dispatch at ${SITE_CONFIG.business.phone}`}
              >
                <span>Call {SITE_CONFIG.business.displayPhone}</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
