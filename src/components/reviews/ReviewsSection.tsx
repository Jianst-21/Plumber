'use client';

import React from 'react';
import Image from 'next/image';
import {
  Star,
  CheckCircle2,
  BadgeCheck,
  Clock,
  DollarSign,
  Sparkles,
  ArrowRight,
  Phone,
  Quote,
  MapPin,
  Calendar,
  Award,
} from 'lucide-react';
import { SITE_CONFIG } from '@/config/site.config';
import { Testimonial } from '@/types';

// Star rating distribution breakdown
const RATING_BREAKDOWN = [
  { stars: 5, percentage: 97, count: 341 },
  { stars: 4, percentage: 3, count: 11 },
  { stars: 3, percentage: 0, count: 0 },
  { stars: 2, percentage: 0, count: 0 },
  { stars: 1, percentage: 0, count: 0 },
];

// Review showcase trust pillars
const REVIEW_PILLARS = [
  {
    icon: Clock,
    title: 'Fastest Response',
    desc: 'Under 45-minute average emergency arrival in Greater Austin',
  },
  {
    icon: DollarSign,
    title: 'Upfront Rates',
    desc: '$0 diagnostic fee waived with repair & zero overtime fees',
  },
  {
    icon: Sparkles,
    title: 'Spotless Cleanup',
    desc: 'Protective boot covers, runners & sanitized workspace guarantee',
  },
];

export default function ReviewsSection() {
  const testimonials: Testimonial[] = SITE_CONFIG.testimonials || [];

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
      id="reviews"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden border-b border-slate-200/80"
      aria-label="Verified Customer Reviews"
    >
      {/* Background Decorative Gradient Blobs */}
      <div
        className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm font-bold shadow-xs mb-4">
            <Award className="w-3.5 h-3.5 text-amber-600" aria-hidden="true" />
            <span>Austin&apos;s Top-Rated Plumbing Fleet</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight mb-4">
            Verified Austin Customer Reviews &amp; Ratings
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Real homeowners sharing their honest experiences with our 24/7 emergency and residential plumbing services.
          </p>
        </div>

        {/* Overall Score Showcase Banner */}
        <div className="mb-14 rounded-3xl bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 border-2 border-navy-800 p-6 sm:p-8 lg:p-10 text-white shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Light Glows */}
          <div
            className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Big Overall Score */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left border-b lg:border-b-0 lg:border-r border-navy-800 pb-8 lg:pb-0 lg:pr-8">
              {/* Google Verified Seal */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 backdrop-blur-xs">
                <svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true">
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
                <span>Google Verified Reviews</span>
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl sm:text-6xl font-black text-white tracking-tight">4.9</span>
                <span className="text-xl font-bold text-slate-400">/ 5.0</span>
              </div>

              {/* 5 Stars */}
              <div className="flex items-center gap-1.5 mb-2.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-amber-400 text-amber-400"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <p className="text-sm text-slate-300 font-medium">
                Based on <strong className="text-white font-bold">350+ verified reviews</strong> across Austin &amp; Central Texas
              </p>
            </div>

            {/* Middle Column: Star Breakdown Bar Graph */}
            <div className="lg:col-span-4 space-y-2.5 border-b lg:border-b-0 lg:border-r border-navy-800 pb-8 lg:pb-0 lg:pr-8">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Rating Distribution
              </span>
              {RATING_BREAKDOWN.map((row) => (
                <div key={row.stars} className="flex items-center gap-3 text-xs">
                  <span className="w-12 font-bold text-slate-300 flex items-center gap-1">
                    <span>{row.stars}</span>
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" aria-hidden="true" />
                  </span>
                  <div className="flex-1 h-2.5 rounded-full bg-navy-800 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-amber-400 to-amber-500 transition-all duration-500"
                      style={{ width: `${row.percentage}%` }}
                    />
                  </div>
                  <span className="w-10 text-right text-slate-400 font-mono text-[11px]">
                    {row.percentage}%
                  </span>
                </div>
              ))}
            </div>

            {/* Right Column: 3 Trust Pillars */}
            <div className="lg:col-span-4 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block mb-1">
                Our 3 Ironclad Trust Pillars
              </span>
              {REVIEW_PILLARS.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div key={pillar.title} className="flex items-start gap-3 text-left">
                    <div className="w-9 h-9 rounded-xl bg-amber-400/20 border border-amber-400/30 text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <IconComponent className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white leading-tight">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-slate-300 mt-0.5 leading-relaxed font-normal">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 3 Authentic Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-14">
          {testimonials.map((review: Testimonial) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between group hover:-translate-y-1 relative"
            >
              {/* Quote mark watermark */}
              <Quote
                className="absolute top-6 right-6 w-10 h-10 text-slate-100 group-hover:text-amber-100/60 transition-colors pointer-events-none"
                aria-hidden="true"
              />

              <div>
                {/* Header: Avatar, Name, Verified Badge & Location */}
                <div className="flex items-center gap-3.5 mb-4 relative z-10">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-amber-400/80 shadow-xs flex-shrink-0 bg-slate-100">
                    <Image
                      src={review.avatar}
                      alt={`${review.author}, Austin plumbing customer`}
                      fill
                      sizes="56px"
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <h3 className="font-extrabold text-navy-900 text-base leading-snug">
                        {review.author}
                      </h3>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-bold">
                        <BadgeCheck className="w-3 h-3 text-emerald-600 flex-shrink-0" aria-hidden="true" />
                        <span>Verified</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-500 text-xs mt-0.5">
                      <MapPin className="w-3 h-3 text-blue-600 flex-shrink-0" aria-hidden="true" />
                      <span className="truncate">{review.neighborhood}</span>
                    </div>
                  </div>
                </div>

                {/* Star Rating & Date */}
                <div className="flex items-center justify-between gap-2 mb-3.5 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-400" aria-hidden="true" />
                    <span>{review.date}</span>
                  </span>
                </div>

                {/* Service Rendered Badge */}
                <div className="mb-4">
                  <span className="inline-block bg-blue-50 text-blue-800 border border-blue-200/80 rounded-lg px-2.5 py-1 text-xs font-bold">
                    {review.serviceRendered}
                  </span>
                </div>

                {/* Customer Review Quote */}
                <p className="text-slate-700 text-sm leading-relaxed italic mb-6 font-normal">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              {/* Bottom Card Footer: 100% Verified Customer Guarantee */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="inline-flex items-center gap-1 font-semibold text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                  Austin Homeowner
                </span>
                <span className="text-[11px] text-slate-400 font-mono">
                  Job Completed
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Section Action Banner */}
        <div className="rounded-2xl bg-white border border-slate-200/90 shadow-sm p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center flex-shrink-0 shadow-xs">
              <Star className="w-6 h-6 fill-amber-400 text-amber-500" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-extrabold text-navy-900">
                Experience Austin&apos;s Highest-Rated Plumbing Care
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-normal">
                Join over 10,000 satisfied Central Texas families. Zero overtime charges and 100% upfront quotes.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 flex-shrink-0">
            <a
              href="#wizard"
              onClick={handleScrollToWizard}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-navy-950 font-black text-sm shadow-md hover:shadow-lg transition-all"
              aria-label="Book your 5-star service in online quote wizard"
            >
              <span>Book Your 5-Star Service</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>

            <a
              href={`tel:${SITE_CONFIG.business.phone}`}
              className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy-900 font-bold text-xs sm:text-sm border border-slate-300 transition-colors"
              aria-label={`Call emergency dispatch at ${SITE_CONFIG.business.phone}`}
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
              <span>Call {SITE_CONFIG.business.displayPhone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
