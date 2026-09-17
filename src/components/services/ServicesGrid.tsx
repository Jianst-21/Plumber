'use client';

import React from 'react';
import Image from 'next/image';
import { Wrench, CheckCircle2, Phone, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site.config';
import { PlumbingService } from '@/types';

export default function ServicesGrid() {
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

  return (
    <section
      id="services"
      className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden border-b border-slate-200/80"
      aria-label="Core Plumbing Services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-50 border border-navy-200 text-navy-800 text-xs sm:text-sm font-bold shadow-xs mb-4">
            <Wrench className="w-3.5 h-3.5 text-navy-700" aria-hidden="true" />
            <span>Master-Grade Workmanship</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight mb-4">
            Full-Service Residential &amp; Emergency Plumbing
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Available 24/7 with zero night/weekend surcharge. Every job handled by licensed master technicians.
          </p>
        </div>

        {/* 4 Core Services Grid (1 col mobile, 2 col tablet, 4 col desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-8">
          {SITE_CONFIG.services.map((service: PlumbingService) => {
            // Pick top 3 feature highlights
            const topFeatures = service.features.slice(0, 3);

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1"
              >
                {/* Authentic Commercial Photo with Aspect 4/3 */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={service.image}
                    alt={`${service.title} by ApexFlow licensed Texas plumbers`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* Gradient overlay for text contrast */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Category Badge (Top Left) */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-navy-900/90 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-sm border border-navy-700/60">
                      {service.category}
                    </span>
                  </div>

                  {/* Highlight Badge (Top Right) */}
                  {service.badge && (
                    <div className="absolute top-3 right-3 z-10">
                      <span className="bg-amber-500 text-navy-950 text-[11px] font-extrabold px-2.5 py-1 rounded-md shadow-sm">
                        {service.badge}
                      </span>
                    </div>
                  )}

                  {/* Starting Price Badge (Bottom Right) */}
                  <div className="absolute bottom-3 right-3 z-10 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-lg px-2.5 py-1 shadow-md">
                    <span className="text-[9px] uppercase font-bold text-slate-500 block leading-none">
                      Starting at
                    </span>
                    <span className="text-sm sm:text-base font-extrabold text-navy-900 leading-tight">
                      ${service.startingPrice}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  {/* Service Title */}
                  <h3 className="text-lg font-bold text-navy-900 mb-2 leading-snug group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-600 mb-4 line-clamp-3 leading-relaxed font-normal">
                    {service.shortDesc}
                  </p>

                  {/* 3 Feature Checkmarks with Lucide icons */}
                  <ul className="space-y-2 mb-5 text-xs sm:text-sm text-slate-700">
                    {topFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="leading-tight text-slate-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Buttons */}
                  <div className="mt-auto pt-4 border-t border-slate-100 flex flex-col gap-2">
                    {/* Primary Button: Book This Service */}
                    <a
                      href={`#wizard?service=${service.id}`}
                      onClick={(e) => handleSelectService(e, service.id)}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-navy-900 hover:bg-navy-800 active:bg-navy-950 text-white font-bold text-xs sm:text-sm shadow-sm hover:shadow transition-all min-h-[40px] text-center"
                      aria-label={`Book ${service.title} in quote wizard`}
                    >
                      <Calendar className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" aria-hidden="true" />
                      <span>Book This Service</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                    </a>

                    {/* Secondary Link: Direct Call */}
                    <a
                      href={`tel:${SITE_CONFIG.business.phone}`}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-100 hover:bg-amber-50 hover:border-amber-300 hover:text-amber-900 text-slate-700 font-semibold text-xs border border-slate-200 transition-colors min-h-[36px] text-center"
                      aria-label={`Call ${SITE_CONFIG.business.phone} for ${service.title}`}
                    >
                      <Phone className="w-3 h-3 text-amber-600 flex-shrink-0" aria-hidden="true" />
                      <span>Call {SITE_CONFIG.business.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-12 rounded-2xl bg-slate-50 border border-slate-200/90 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 flex-shrink-0">
              <ShieldCheck className="w-5 h-5 text-emerald-600" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm sm:text-base font-bold text-navy-900">
                100% Upfront Pricing Guarantee on Every Job
              </p>
              <p className="text-xs sm:text-sm text-slate-500 font-normal">
                No hidden dispatch travel fees, no surprises, and zero overtime surcharges on nights or weekends.
              </p>
            </div>
          </div>
          <a
            href={`tel:${SITE_CONFIG.business.phone}`}
            className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs sm:text-sm font-bold shadow-sm transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
            <span>Speak With a Master Plumber</span>
          </a>
        </div>
      </div>
    </section>
  );
}
