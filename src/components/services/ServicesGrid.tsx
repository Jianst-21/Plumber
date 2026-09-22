'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

interface CoreService {
  id: string;
  title: string;
  description: string;
  image: string;
  serviceKey: string;
}

const CORE_SERVICES: CoreService[] = [
  {
    id: 'plumbing',
    title: 'Plumbing',
    description: 'Complete piping diagnostics, water pressure regulation, isolation valve replacements, and internal supply network maintenance.',
    image: '/images/service-plumbing.jpg',
    serviceKey: 'leak-repair',
  },
  {
    id: 'installation',
    title: 'Installation',
    description: 'Precision fitting for modern kitchen mixers, thermostatic showers, dual-flush toilets, unvented cylinders, and sanitaryware.',
    image: '/images/service-installation.jpg',
    serviceKey: 'toilet-repair',
  },
  {
    id: 'repair',
    title: 'Repair',
    description: 'Non-invasive acoustic leak tracing, burst pipe repairs, radiator valve fixes, and permanent watertight mechanical restorations.',
    image: '/images/service-repair.jpg',
    serviceKey: 'leak-repair',
  },
  {
    id: 'emergency',
    title: 'Emergency',
    description: 'Rapid 45-minute dispatch for uncontrolled leaks, burst mains, and boiler shutdowns with zero night or weekend overtime fees.',
    image: '/images/service-emergency.jpg',
    serviceKey: 'leak-repair',
  },
  {
    id: 'residential',
    title: 'Residential',
    description: 'Dedicated home plumbing care, landlord Gas Safe safety certificates (CP12), central heating tune-ups, and scheduled maintenance.',
    image: '/images/service-residential.jpg',
    serviceKey: 'water-heater',
  },
  {
    id: 'commercial',
    title: 'Commercial',
    description: 'High-capacity commercial drainage, grease trap installations, commercial boiler rooms, and facility maintenance for London businesses.',
    image: '/images/service-commercial.jpg',
    serviceKey: 'drain-cleaning',
  },
];

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
      aria-label="Professional Plumbing Services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3 sm:mb-4">
            Professional Plumbing &amp; Heating Services
          </h2>
          <p className="text-sm sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            From routine home maintenance and luxury fixture installations to 24/7 rapid emergency dispatch and commercial facilities across London.
          </p>
        </ScrollReveal>

        {/* 6 Core Services Grid (1 col mobile, 2 col tablet, 3 col desktop) */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CORE_SERVICES.map((service: CoreService) => (
            <StaggerItem
              key={service.id}
              className="bg-white rounded-none border border-slate-200/90 flex flex-col overflow-hidden group shadow-xs"
            >
              {/* Service Photo with 16/10 aspect */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <Image
                  src={service.image}
                  alt={`${service.title} service by Apex Plumbing London engineers`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"
                  aria-hidden="true"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 text-left flex flex-col flex-1">
                {/* Service Title */}
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2.5 group-hover:text-orange-600 transition-colors tracking-tight">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal flex-1 mb-5 line-clamp-3">
                  {service.description}
                </p>

                {/* Interactive Animated Action (Aligned flush with content) */}
                <div className="mt-auto flex justify-start pt-2">
                  <a
                    href={`#wizard?service=${service.serviceKey}`}
                    onClick={(e) => handleSelectService(e, service.serviceKey)}
                    className="inline-flex items-center gap-1.5 py-2 px-0 text-slate-700 group-hover:text-orange-600 font-bold text-sm min-h-[44px] transition-colors duration-300"
                    aria-label={`More Info about ${service.title} service`}
                  >
                    <span className="max-w-0 opacity-0 overflow-hidden whitespace-nowrap transition-all duration-300 ease-out group-hover:max-w-[90px] group-hover:opacity-100">
                      More Info
                    </span>
                    <ArrowRight
                      className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1 shrink-0"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
