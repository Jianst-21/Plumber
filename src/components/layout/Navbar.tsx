'use client';

import React, { useState, useEffect } from 'react';
import { Flame, Phone, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_CONFIG } from '@/config/site.config';

const NAV_ITEMS = [
  { label: 'Plumbing', href: '#services', hasDropdown: true },
  { label: 'Cleaning', href: '#services', hasDropdown: true },
  { label: 'Heating', href: '#services', hasDropdown: true },
  { label: 'Cooling', href: '#services', hasDropdown: true },
  { label: 'About Us', href: '#why-us', hasDropdown: false },
  { label: 'Contact', href: '#faq', hasDropdown: false },
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
        scrolled ? 'shadow-md' : 'shadow-xs'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Left: Apex Plumbing Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            aria-label={`${SITE_CONFIG.business.name} Home`}
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-amber-500 via-orange-500 to-amber-400 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Flame className="w-6 h-6 fill-white text-white" aria-hidden="true" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 leading-none">
                APEX
              </span>
              <span className="text-xs sm:text-sm font-extrabold tracking-widest text-slate-800 uppercase leading-tight mt-0.5">
                PLUMBING
              </span>
            </div>
          </a>

          {/* Center: Navigation Links (Matching Reference Style) */}
          <nav
            className="hidden lg:flex items-center gap-6 xl:gap-8"
            aria-label="Primary Navigation"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-orange-600 transition-colors"
              >
                <span>{item.label}</span>
                {item.hasDropdown && (
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-orange-600 transition-colors" />
                )}
              </a>
            ))}
          </nav>

          {/* Right: Orange Pill Call Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${SITE_CONFIG.business.phone}`}
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold px-5 sm:px-6 py-2.5 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-sm"
              aria-label={`Call ${SITE_CONFIG.business.displayPhone} now`}
            >
              <Phone className="w-4 h-4 fill-white text-white" aria-hidden="true" />
              <span>+{SITE_CONFIG.business.phone}</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus:outline-none transition-colors"
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

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-white border-b border-slate-200 overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-orange-600 transition-colors"
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4 text-slate-400" />}
                </a>
              ))}

              <div className="pt-3 mt-2 border-t border-slate-100">
                <a
                  href={`tel:${SITE_CONFIG.business.phone}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full shadow-md text-base transition-colors"
                >
                  <Phone className="w-5 h-5 fill-white text-white" aria-hidden="true" />
                  <span>Call Us: +{SITE_CONFIG.business.phone}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
