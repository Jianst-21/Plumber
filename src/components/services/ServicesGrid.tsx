'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle2, Phone, Calendar, ShieldCheck } from 'lucide-react';
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
      className="py-14 sm:py-20 lg:py-28 bg-slate-50/50 relative overflow-hidden border-b border-slate-200/80"
      aria-label="Core Plumbing Services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3 sm:mb-4">
            Full-Service Residential &amp; Emergency Plumbing
          </h2>
          <p className="text-sm sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Available 24/7 with zero night or weekend overtime fees. Every call handled by Gas Safe &amp; City &amp; Guilds qualified engineers.
          </p>
        </ScrollReveal>

        {/* 4 Core Services Grid (1 col mobile, 2 col tablet, 4 col desktop) */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {SITE_CONFIG.services.map((service: PlumbingService) => {
            const topFeatures = service.features.slice(0, 3);

            return (
              <StaggerItem
                key={service.id}
                className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1.5"
              >
                {/* Authentic Commercial Photo with Aspect 4/3 */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={service.image}
                    alt={`${service.title} by Apex Plumbing Gas Safe certified London engineers`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* Gradient overlay for photo depth */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Single Clean Highlight Badge */}
                  {service.badge && (
                    <div className="absolute top-3 left-3 z-10">
                      <span className="bg-slate-950/90 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm border border-slate-700/80">
                        {service.badge}
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  {/* Category & Upfront Price Header */}
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="text-[11px] font-bold text-orange-700 uppercase tracking-wider bg-orange-50 px-2.5 py-0.5 rounded-md border border-orange-200/80">
                      {service.category}
                    </span>
                    <span className="text-xs font-extrabold text-slate-900 bg-slate-100 px-2.5 py-0.5 rounded-md border border-slate-200/60">
                      From £{service.startingPrice}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-orange-600 transition-colors">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-600 mb-4 line-clamp-2 leading-relaxed font-normal">
                    {service.shortDesc}
                  </p>

                  {/* 3 Feature Checkmarks */}
                  <ul className="space-y-2 mb-5 text-xs text-slate-700">
                    {topFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="leading-tight text-slate-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Button & Subtle Secondary Call Link */}
                  <div className="mt-auto pt-4 border-t border-slate-100 flex flex-col items-center gap-2">
                    {/* Primary Button: Book This Service */}
                    <a
                      href={`#wizard?service=${service.id}`}
                      onClick={(e) => handleSelectService(e, service.id)}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-slate-900 hover:bg-orange-500 active:bg-orange-600 text-white font-bold text-xs sm:text-sm shadow-xs hover:shadow transition-all min-h-[44px] text-center"
                      aria-label={`Book ${service.title} in quote wizard`}
                    >
                      <Calendar className="w-4 h-4 text-orange-400 group-hover:text-white transition-colors" aria-hidden="true" />
                      <span>Book This Service</span>
                    </a>

                    {/* Secondary Link: Direct Call */}
                    <a
                      href={`tel:${SITE_CONFIG.business.phone}`}
                      className="text-xs font-semibold text-slate-600 hover:text-orange-600 transition-colors inline-flex items-center gap-1.5 py-1"
                      aria-label={`Call ${SITE_CONFIG.business.phone} for ${service.title}`}
                    >
                      <Phone className="w-3 h-3 text-orange-500" aria-hidden="true" />
                      <span>Or call {SITE_CONFIG.business.displayPhone}</span>
                    </a>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Bottom Guarantee Banner */}
        <ScrollReveal delay={0.1} className="mt-10 sm:mt-14 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 p-5 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6 shadow-sm">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
              <ShieldCheck className="w-6 h-6 text-emerald-600" aria-hidden="true" />
            </div>
            <div>
              <p className="text-base sm:text-lg font-extrabold text-slate-900">
                100% Upfront Pricing Guarantee on Every Service Call
              </p>
              <p className="text-xs sm:text-sm text-slate-600 font-normal mt-0.5">
                No hidden dispatch travel fees, no surprises, and zero overtime surcharges on nights or weekends.
              </p>
            </div>
          </div>
          <a
            href={`tel:${SITE_CONFIG.business.phone}`}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-900 hover:bg-orange-500 text-white text-xs sm:text-sm font-bold shadow-sm hover:shadow transition-colors"
          >
            <Phone className="w-4 h-4 text-orange-400" aria-hidden="true" />
            <span>Speak With a Gas Safe Engineer</span>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
