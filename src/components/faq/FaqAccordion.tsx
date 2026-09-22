'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  Phone,
  ArrowRight,
  ShieldCheck,
  Clock,
} from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SITE_CONFIG } from '@/config/site.config';
import { FaqItem } from '@/types';

export default function FaqAccordion() {
  const faqs: FaqItem[] = SITE_CONFIG.faq || [];
  // Keep the first item open by default for immediate discoverability
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

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
      id="faq"
      className="py-14 sm:py-20 lg:py-24 bg-white relative overflow-hidden border-b border-slate-200/80"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight mb-3 sm:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-lg text-slate-600 leading-relaxed font-normal">
            Clear, upfront answers about our plumbing pricing, emergency dispatch times, warranties, and procedures.
          </p>
        </ScrollReveal>

        {/* 6 FAQ Accordion Items */}
        <ScrollReveal delay={0.08} className="space-y-3 sm:space-y-4 mb-10 sm:mb-14 w-full">
          {faqs.map((item: FaqItem, index: number) => {
            const isOpen = openId === item.id;
            const questionNumber = String(index + 1).padStart(2, '0');

            return (
              <div
                key={item.id}
                className={`rounded-none border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-blue-500 bg-white shadow-md ring-1 ring-blue-500/20'
                    : 'border-slate-200/90 bg-slate-50/60 hover:bg-white hover:border-slate-300 hover:shadow-xs'
                }`}
              >
                {/* Accordion Toggle Header */}
                <button
                  type="button"
                  id={`faq-question-${item.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between gap-3 sm:gap-4 p-4 sm:p-6 sm:px-8 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                >
                  <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                    {/* Number Badge */}
                    <span
                      className={`w-7 h-7 sm:w-9 sm:h-9 rounded-none flex items-center justify-center font-mono text-xs sm:text-sm font-bold flex-shrink-0 transition-colors ${
                        isOpen
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'bg-slate-200/80 text-slate-600 group-hover:bg-blue-100'
                      }`}
                    >
                      {questionNumber}
                    </span>

                    <span className="text-sm sm:text-lg font-bold text-navy-900 leading-snug">
                      {item.question}
                    </span>
                  </div>

                  {/* Animated Chevron Indicator */}
                  <div
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-none flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-blue-50 text-blue-700 rotate-180'
                        : 'bg-white text-slate-400 border border-slate-200'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                  </div>
                </button>

                {/* Framer Motion Slide-Down Answer Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${item.id}`}
                      role="region"
                      aria-labelledby={`faq-question-${item.id}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 sm:px-8 sm:pb-6 pt-1 text-xs sm:text-base text-slate-600 leading-relaxed border-t border-slate-100/90">
                        <p className="font-normal">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </ScrollReveal>

        {/* Still Have Questions Box (Aligned to Image 2) */}
        <ScrollReveal delay={0.12} className="rounded-none bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 border-2 border-navy-800 p-5 sm:p-8 lg:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-2">
                Can&apos;t find the answer you&apos;re looking for?
              </h3>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl font-normal leading-relaxed">
                Our London dispatch coordinators and Gas Safe engineers are on standby 24/7/365 to answer your questions with zero obligation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto flex-shrink-0">
              <a
                href={`tel:${SITE_CONFIG.business.phone}`}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-sm bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all text-center min-h-[44px]"
                aria-label={`Speak directly to a Gas Safe registered engineer at ${SITE_CONFIG.business.phone}`}
              >
                <Phone className="w-4 h-4 fill-white text-white flex-shrink-0" aria-hidden="true" />
                <span>Call Dispatch: {SITE_CONFIG.business.displayPhone}</span>
              </a>

              <a
                href="#wizard"
                onClick={handleScrollToWizard}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm bg-white/10 hover:bg-white/15 text-slate-100 hover:text-white border border-white/20 text-xs sm:text-sm font-bold transition-colors text-center min-h-[44px]"
                aria-label="Launch 60-second online quote wizard"
              >
                <span>Launch 60-Second Quote Wizard</span>
                <ArrowRight className="w-4 h-4 text-orange-400" aria-hidden="true" />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
