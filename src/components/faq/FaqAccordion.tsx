'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HelpCircle,
  ChevronDown,
  Phone,
  ArrowRight,
  ShieldCheck,
  Clock,
  Sparkles,
  MessageCircleQuestion,
} from 'lucide-react';
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
      className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden border-b border-slate-200/80"
      aria-label="Frequently Asked Questions"
    >
      {/* Background Decorative Gradient Blobs */}
      <div
        className="absolute top-1/3 -right-20 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 -left-20 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs sm:text-sm font-bold shadow-xs mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" aria-hidden="true" />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Clear, upfront answers about our plumbing pricing, emergency dispatch times, warranties, and procedures.
          </p>
        </div>

        {/* 6 FAQ Accordion Items */}
        <div className="space-y-4 mb-14">
          {faqs.map((item: FaqItem, index: number) => {
            const isOpen = openId === item.id;
            const questionNumber = String(index + 1).padStart(2, '0');

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
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
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <div className="flex items-center gap-3.5 sm:gap-4 flex-1">
                    {/* Number Badge */}
                    <span
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center font-mono text-xs sm:text-sm font-bold flex-shrink-0 transition-colors ${
                        isOpen
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'bg-slate-200/80 text-slate-600 group-hover:bg-blue-100'
                      }`}
                    >
                      {questionNumber}
                    </span>

                    <span className="text-base sm:text-lg font-bold text-navy-900 leading-snug">
                      {item.question}
                    </span>
                  </div>

                  {/* Animated Chevron Indicator */}
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-blue-50 text-blue-700 rotate-180'
                        : 'bg-white text-slate-400 border border-slate-200'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" aria-hidden="true" />
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
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100/90">
                        <p className="font-normal">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="rounded-3xl bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 border-2 border-navy-700 p-6 sm:p-8 lg:p-10 text-white shadow-xl relative overflow-hidden">
          {/* Subtle Glow Accent */}
          <div
            className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
                <MessageCircleQuestion className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
                <span>Immediate Expert Help</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-2">
                Can&apos;t find the answer you&apos;re looking for?
              </h3>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl font-normal leading-relaxed">
                Our Austin dispatch coordinators and master plumbers are on standby 24/7/365 to answer your questions with zero obligation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto flex-shrink-0">
              <a
                href={`tel:${SITE_CONFIG.business.phone}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-navy-950 font-black text-sm sm:text-base shadow-lg hover:shadow-xl transition-all text-center"
                aria-label={`Speak directly to a licensed master plumber at ${SITE_CONFIG.business.phone}`}
              >
                <Phone className="w-4 h-4 fill-navy-950 text-navy-950 animate-pulse flex-shrink-0" aria-hidden="true" />
                <span>Speak Directly to a Licensed Master Plumber: {SITE_CONFIG.business.phone}</span>
              </a>

              <a
                href="#wizard"
                onClick={handleScrollToWizard}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-200 hover:text-white border border-navy-600 text-xs sm:text-sm font-bold transition-colors text-center"
                aria-label="Launch 60-second online quote wizard"
              >
                <span>Launch 60-Second Quote Wizard</span>
                <ArrowRight className="w-4 h-4 text-amber-400" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
