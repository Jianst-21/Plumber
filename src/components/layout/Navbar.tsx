'use client';

import React, { useState, useEffect } from 'react';
import { Wrench, Phone, Menu, X, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_CONFIG } from '@/config/site.config';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Coupons', href: '#coupons' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Service Area', href: '#areas' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-shadow duration-200 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Left: Brand Logo & License Badge */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="#"
              className="flex items-center gap-2.5 group"
              aria-label={`${SITE_CONFIG.business.name} Home`}
            >
              <div className="w-10 h-10 rounded-xl bg-navy-900 flex items-center justify-center text-amber-400 shadow-md group-hover:bg-navy-800 transition-colors">
                <Wrench className="w-5 h-5 -rotate-45" aria-hidden="true" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-lg sm:text-xl font-extrabold tracking-tight text-navy-900">
                    ApexFlow<span className="text-amber-500">.</span>
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 font-semibold tracking-wide uppercase leading-none">
                  Plumbing &amp; Rooter
                </span>
              </div>
            </a>

            {/* Official License Pill Badge */}
            <div className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200/90 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" aria-hidden="true" />
              <span>TX Lic #MP-41982</span>
            </div>
          </div>

          {/* Center: Anchor Navigation Links (Hidden on mobile, visible on tablet/desktop) */}
          <nav
            className="hidden md:flex items-center gap-1 lg:gap-2"
            aria-label="Primary Navigation"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-navy-900 hover:bg-slate-100/80 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: High-Contrast Safety Amber Call Button & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:${SITE_CONFIG.business.phone}`}
              className="group hidden sm:inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-navy-900 font-extrabold px-4 py-2.5 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-sm"
              aria-label={`Call ${SITE_CONFIG.business.displayPhone} now`}
            >
              <Phone className="w-4 h-4 fill-navy-900 text-navy-900 group-hover:rotate-12 transition-transform duration-200" aria-hidden="true" />
              <span>{SITE_CONFIG.business.displayPhone}</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-navy-900 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden border-t border-slate-200 bg-white shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-1">
              {/* License identifier for mobile */}
              <div className="flex items-center justify-between px-3 py-2 mb-2 rounded-md bg-slate-50 border border-slate-200 text-xs">
                <span className="text-slate-500 font-medium">State Credential</span>
                <span className="font-bold text-slate-800 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                  TX Lic #MP-41982
                </span>
              </div>

              {/* Links */}
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:text-navy-900 hover:bg-slate-100 transition-colors"
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile Drawer Call CTA */}
              <div className="pt-3 mt-2 border-t border-slate-100">
                <a
                  href={`tel:${SITE_CONFIG.business.phone}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-navy-900 font-extrabold rounded-xl shadow-sm text-base transition-colors"
                >
                  <Phone className="w-5 h-5 fill-navy-900 text-navy-900" aria-hidden="true" />
                  <span>Call Dispatch: {SITE_CONFIG.business.displayPhone}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
