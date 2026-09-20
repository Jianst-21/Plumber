'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, Phone, Star, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site.config';

function GoogleLogo({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="20" height="20">
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

const HERO_SERVICES_ROW_1 = ['Plumbing', 'Drain Unblocking', 'Central Heating'];
const HERO_SERVICES_ROW_2 = ['Boiler Servicing', 'Taps & Toilets'];

export default function HeroSection() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[680px] flex items-center bg-[#090e17] overflow-hidden">
      {/* 1. Fullscreen Clean Residential Kitchen Photography */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <Image
          src="/images/hero-clean-bg.jpg"
          alt="London luxury home residential plumbing and kitchen"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center lg:object-right"
        />

        {/* 2. Refined Left Contrast Gradient (Natural Shading for 100% Text Readability) */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent lg:w-[60%] xl:w-[56%]"
          aria-hidden="true"
        />

        {/* Subtle ground shadow for seamless transition into the trust strip below */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-slate-950/20"
          aria-hidden="true"
        />
      </div>

      {/* 3. Main Hero Content Landmark */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-10 sm:py-14 lg:py-20">
        <div className="max-w-xl lg:max-w-2xl flex flex-col items-start text-left">
          {/* Primary Dominant Headline (H1) */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="text-[2.15rem] sm:text-5xl lg:text-[3.35rem] xl:text-[3.75rem] font-black text-white tracking-tight leading-[1.1] mb-5 sm:mb-8"
          >
            London&apos;s Trusted
            <br />
            Plumbing &amp; Heating
            <br />
            Engineers
          </motion.h1>

          {/* Supporting Value Proposition */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm sm:text-lg lg:text-[1.125rem] text-slate-200/90 leading-relaxed mb-6 sm:mb-8 max-w-lg font-normal"
          >
            Fast, reliable plumbing, drain unblocking, heating &amp; boiler services available{' '}
            <strong className="text-white font-semibold">24/7</strong> across Greater London.
          </motion.p>

          {/* Service List (Reflows naturally across mobile and desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-x-4 sm:gap-x-5 gap-y-2 mb-7 sm:mb-9 max-w-lg"
          >
            {[...HERO_SERVICES_ROW_1, ...HERO_SERVICES_ROW_2].map((item) => (
              <div key={item} className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" aria-hidden="true" />
                <span className="text-xs sm:text-sm font-semibold text-slate-200 tracking-wide">
                  {item}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Dual Action Buttons (Primary CTA Dominant, Secondary Visually Lighter) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5"
          >
            {/* Primary Action Button: Schedule an Appointment */}
            <motion.a
              whileHover={{ scale: 1.025 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              href="#wizard"
              onClick={(e) => handleScrollTo(e, 'wizard')}
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-shadow duration-300 min-h-[48px] text-center"
              aria-label="Schedule an appointment in quote wizard"
            >
              <Calendar className="w-4 h-4 text-white" aria-hidden="true" />
              <span>Schedule an Appointment</span>
            </motion.a>

            {/* Secondary Action Button: Have an Emergency? (Visually lighter glassmorphic button) */}
            <motion.a
              whileHover={{ scale: 1.025 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              href={`tel:${SITE_CONFIG.business.phone}`}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/15 active:bg-white/20 text-white border border-white/20 hover:border-white/35 font-bold text-sm sm:text-base backdrop-blur-sm transition-colors duration-300 min-h-[48px] text-center"
              aria-label={`Call emergency team at ${SITE_CONFIG.business.phone}`}
            >
              <Phone className="w-4 h-4 text-orange-400" aria-hidden="true" />
              <span>Have an Emergency?</span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* 4. Subtle Floating Google Review Badge (Quiet Social Proof in Bottom Right) */}
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="hidden sm:block absolute bottom-6 right-6 lg:bottom-8 lg:right-10 z-20"
      >
        <a
          href="#reviews"
          onClick={(e) => handleScrollTo(e, 'reviews')}
          className="group block bg-white/90 hover:bg-white backdrop-blur-md rounded-xl p-2.5 px-3.5 shadow-xl border border-white/40 hover:border-white hover:-translate-y-0.5 transition-all duration-200 max-w-[260px]"
          aria-label="View Google customer reviews"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200/60 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <GoogleLogo className="w-4.5 h-4.5" />
            </div>
            <div className="min-w-0 text-left">
              <div className="flex items-center gap-1 leading-none">
                <span className="text-sm font-extrabold text-slate-950">4.9</span>
                <div className="flex items-center text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400" aria-hidden="true" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" aria-hidden="true" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" aria-hidden="true" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" aria-hidden="true" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" aria-hidden="true" />
                </div>
              </div>
              <p className="text-[10.5px] text-slate-600 font-medium leading-tight mt-0.5 truncate">
                350+ London Google Reviews
              </p>
            </div>
          </div>
        </a>
      </motion.div>
    </section>
  );
}
