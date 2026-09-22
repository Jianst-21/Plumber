'use client';

import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_CONFIG } from '@/config/site.config';
import ApexLogo from '@/components/ui/ApexLogo';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
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
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-shadow duration-200 ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-[72px]">
          {/* Left: Brand Logo & Subtle License Credential */}
          <div className="flex items-center gap-3.5">
            <a
              href="#"
              className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 rounded-sm"
              aria-label={`${SITE_CONFIG.business.name} Home`}
            >
              <ApexLogo size="md" variant="dark" />
            </a>

            {/* Subtle State License Credential (Quiet secondary metadata) */}
            <div className="hidden lg:inline-flex items-center gap-1.5 pl-3.5 border-l border-slate-200 text-xs text-slate-600 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" aria-hidden="true" />
              <span>{SITE_CONFIG.business.licenseNumber}</span>
            </div>
          </div>

          {/* Center: Anchor Navigation Links (Visible on desktop 1024px+ to prevent tablet crowding) */}
          <nav
            className="hidden lg:flex items-center gap-1 xl:gap-2"
            aria-label="Primary Navigation"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 xl:px-3.5 py-2 rounded-sm text-sm font-semibold text-slate-600 hover:text-orange-600 hover:bg-orange-50/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-1 whitespace-nowrap transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: High-Contrast Emergency Call Button & Mobile/Tablet Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:${SITE_CONFIG.business.phone}`}
              className="group hidden sm:inline-flex items-center justify-center gap-2.5 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-extrabold px-4 sm:px-5 lg:px-6 py-2.5 rounded-sm shadow-xs hover:shadow hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-xs sm:text-sm"
              aria-label={`Call ${SITE_CONFIG.business.displayPhone} now`}
            >
              <Phone className="w-3.5 h-3.5 fill-white text-white shrink-0 group-hover:rotate-12 transition-transform duration-200" aria-hidden="true" />
              <span className="whitespace-nowrap">{SITE_CONFIG.business.displayPhone}</span>
            </a>

            {/* Mobile & Tablet Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus:outline-none transition-colors"
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

      {/* Mobile & Tablet Drawer */}
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
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-sm text-base font-semibold text-slate-800 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-3 mt-2 border-t border-slate-100">
                <a
                  href={`tel:${SITE_CONFIG.business.phone}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-extrabold rounded-sm shadow-md text-base transition-colors"
                >
                  <Phone className="w-5 h-5 fill-white text-white" aria-hidden="true" />
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
