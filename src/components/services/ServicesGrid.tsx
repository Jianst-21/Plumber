'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle2, Phone, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';
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
      className="py-20 sm:py-24 lg:py-28 bg-slate-50/50 relative overflow-hidden border-b border-slate-200/80"
      aria-label="Core Plumbing Services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Full-Service Residential &amp; Emergency Plumbing
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Available 24/7 with zero night or weekend overtime fees. Every call handled by Gas Safe &amp; City &amp; Guilds qualified engineers.
          </p>
        </ScrollReveal>

        {/* 4 Core Services Grid (1 col mobile, 2 col tablet, 4 col desktop) */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {SITE_CONFIG.services.map((service: PlumbingService) => {
            const topFeatures = service.features.slice(0, 3);

            return (
              <StaggerItem
                key={service.id}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1.5"
              >
                {/* Authentic Commercial Photo with Aspect 4/3 */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={service.image}
                    alt={`${service.title} by ApexFlow Gas Safe certified London plumbers`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* Gradient overlay for text contrast */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Category Badge (Top Left) */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="bg-slate-900/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm border border-slate-700/60">
                      {service.category}
                    </span>
                  </div>

                  {/* Highlight Badge (Top Right) */}
                  {service.badge && (
                    <div className="absolute top-3.5 right-3.5 z-10">
                      <span className="bg-orange-500 text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow-sm">
                        {service.badge}
                      </span>
                    </div>
                  )}

                  {/* Starting Price Badge (Bottom Right) */}
                  <div className="absolute bottom-3.5 right-3.5 z-10 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-xl px-3 py-1.5 shadow-md">
                    <span className="text-[9px] uppercase font-bold text-slate-500 block leading-none">
                      Starting at
                    </span>
                    <span className="text-base font-extrabold text-slate-900 leading-tight">
                      £{service.startingPrice}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Service Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 leading-snug group-hover:text-orange-600 transition-colors">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-600 mb-5 line-clamp-3 leading-relaxed font-normal">
                    {service.shortDesc}
                  </p>

                  {/* 3 Feature Checkmarks with Lucide icons */}
                  <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-slate-700">
                    {topFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="leading-tight text-slate-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Buttons */}
                  <div className="mt-auto pt-5 border-t border-slate-100 flex flex-col gap-2.5">
                    {/* Primary Button: Book This Service */}
                    <a
                      href={`#wizard?service=${service.id}`}
                      onClick={(e) => handleSelectService(e, service.id)}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-slate-900 hover:bg-orange-500 active:bg-orange-600 text-white font-bold text-xs sm:text-sm shadow-sm hover:shadow transition-all min-h-[44px] text-center"
                      aria-label={`Book ${service.title} in quote wizard`}
                    >
                      <Calendar className="w-4 h-4 text-orange-400 group-hover:text-white transition-colors" aria-hidden="true" />
                      <span>Book This Service</span>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                    </a>

                    {/* Secondary Link: Direct Call */}
                    <a
                      href={`tel:${SITE_CONFIG.business.phone}`}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-slate-100 hover:bg-orange-50 hover:border-orange-300 hover:text-orange-900 text-slate-700 font-bold text-xs border border-slate-200 transition-colors min-h-[40px] text-center"
                      aria-label={`Call ${SITE_CONFIG.business.phone} for ${service.title}`}
                    >
                      <Phone className="w-3.5 h-3.5 text-orange-600 flex-shrink-0" aria-hidden="true" />
                      <span>Call {SITE_CONFIG.business.phone}</span>
                    </a>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Bottom Guarantee Banner */}
        <ScrollReveal delay={0.1} className="mt-14 rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
              <ShieldCheck className="w-6 h-6 text-emerald-600" aria-hidden="true" />
            </div>
            <div>
              <p className="text-base sm:text-lg font-extrabold text-slate-900">
                100% Upfront Pricing Guarantee on Every Service Call
              </p>
              <p className="text-xs sm:text-sm text-slate-500 font-normal mt-0.5">
                No hidden dispatch travel fees, no surprises, and zero overtime surcharges on nights or weekends.
              </p>
            </div>
          </div>
          <a
            href={`tel:${SITE_CONFIG.business.phone}`}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-900 hover:bg-orange-500 text-white text-xs sm:text-sm font-bold shadow-sm hover:shadow transition-colors"
          >
            <Phone className="w-4 h-4 text-orange-400" aria-hidden="true" />
            <span>Speak With a Master Plumber</span>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
