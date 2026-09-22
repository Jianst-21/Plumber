'use client';

import React from 'react';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SITE_CONFIG } from '@/config/site.config';
import { Testimonial } from '@/types';

export default function ReviewsSection() {
  const testimonials: Testimonial[] = SITE_CONFIG.testimonials || [];

  // 2 sets of testimonials for seamless infinite marquee scroll
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section
      id="reviews"
      className="py-14 sm:py-20 lg:py-28 bg-slate-50/60 relative overflow-hidden border-b border-slate-200/80"
      aria-label="What Our Clients Say About Us"
    >
      {/* Direct CSS Keyframe definition to guarantee immediate execution in all environments */}
      <style>{`
        @keyframes marqueeInfiniteScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-reviews-marquee {
          display: flex;
          width: max-content;
          animation: marqueeInfiniteScroll 30s linear infinite;
          will-change: transform;
        }
        .animate-reviews-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Authentic Plumber & Client Handshake Photo with Floating Brand Quote Badge */}
          <ScrollReveal delay={0.06} className="lg:col-span-5 xl:col-span-5 relative">
            <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none overflow-hidden bg-slate-100 shadow-md border border-slate-200/90 rounded-none">
              <Image
                src="/images/review-client.jpg"
                alt="Apex Plumbing Gas Safe engineer with a happy London client"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-top"
                priority
              />

              {/* Floating Brand Orange Quote Badge (Matching site palette) */}
              <div
                className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 w-14 h-14 sm:w-16 sm:h-16 bg-white shadow-xl border border-slate-100 flex items-center justify-center p-3 rounded-none"
                aria-hidden="true"
              >
                <Quote className="w-7 h-7 sm:w-8 sm:h-8 text-orange-500 fill-orange-500 rotate-180 shrink-0" />
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Title, Subtitle & Auto-Scrolling Marquee Carousel */}
          <ScrollReveal delay={0.12} className="lg:col-span-7 xl:col-span-7 flex flex-col min-w-0">
            {/* Header: Clean Title & Subtitle without badge */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight mb-3 sm:mb-4">
                What Our Clients Say About Us
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-xl">
                Real feedback and verified ratings from homeowners across London who trust our certified 24/7 plumbing and emergency dispatch.
              </p>
            </div>

            {/* Auto-Scrolling Carousel Container (Continuous Right to Left Flow) */}
            <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent)] py-2">
              <div className="animate-reviews-marquee gap-4 sm:gap-5">
                {marqueeItems.map((item, idx) => (
                  <div
                    key={`${item.id}-${idx}`}
                    className="w-[280px] sm:w-[320px] bg-white border border-slate-200/90 shadow-sm p-6 flex flex-col justify-between shrink-0 select-none rounded-none transition-all hover:shadow-md hover:border-orange-200"
                  >
                    <div>
                      {/* 5 Amber/Gold Stars (Matching site color palette) */}
                      <div className="flex items-center gap-1 mb-4 text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-amber-400 text-amber-400 shrink-0"
                            aria-hidden="true"
                          />
                        ))}
                      </div>

                      {/* Review Quote Text */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6 line-clamp-4">
                        &ldquo;{item.quote}&rdquo;
                      </p>
                    </div>

                    {/* Reviewer Profile Row (Avatar, Name, Location) */}
                    <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 bg-slate-100 border border-slate-200 shadow-2xs">
                        <Image
                          src={item.avatar}
                          alt={item.author}
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-sm sm:text-base font-bold text-slate-900 truncate">
                          {item.author}
                        </h4>
                        <p className="text-xs text-slate-500 truncate">
                          {item.neighborhood}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
