'use client';

import React, { useState } from 'react';
import { Tag, Scissors, Copy, Check, Clock, ShieldCheck, ArrowRight, Phone } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site.config';
import { CouponOffer } from '@/types';

export default function CouponOffers() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = async (code: string) => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(code);
        setCopiedCode(code);
        setTimeout(() => setCopiedCode(null), 2500);
      }
    } catch {
      // Fallback if clipboard API is restricted
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 2500);
    }
  };

  const handleClaimCoupon = (e: React.MouseEvent<HTMLAnchorElement>, code: string) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('plumber-select-coupon', { detail: code }));
      const wizardEl = document.getElementById('wizard');
      if (wizardEl) {
        e.preventDefault();
        window.history.pushState(null, '', `#wizard?coupon=${code}`);
        wizardEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="coupons"
      className="py-16 sm:py-20 lg:py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200/80"
      aria-label="Plumbing Discounts and Coupons"
    >
      {/* Background Decorative Accents */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 right-0 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-xs sm:text-sm font-bold shadow-xs mb-4">
            <Tag className="w-3.5 h-3.5 text-amber-600" aria-hidden="true" />
            <span>Instant Homeowner Savings</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight mb-4">
            Exclusive Online Plumbing Discounts &amp; Vouchers
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Mention coupon code when calling or click &apos;Claim Coupon&apos; to apply discount directly to your instant quote.
          </p>
        </div>

        {/* 3 Digital Coupon Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SITE_CONFIG.coupons.map((coupon: CouponOffer) => {
            const isCopied = copiedCode === coupon.code;

            return (
              <div
                key={coupon.id}
                className="bg-white rounded-2xl border-2 border-dashed border-amber-400/90 shadow-md hover:shadow-xl transition-all duration-200 flex flex-col relative overflow-hidden group"
              >
                {/* Top Badge Banner */}
                <div className="bg-gradient-to-r from-navy-900 to-navy-800 text-white px-5 py-2.5 flex items-center justify-between text-xs font-semibold">
                  <span className="flex items-center gap-1.5 text-amber-400 font-bold uppercase tracking-wider text-[11px]">
                    <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
                    Verified Voucher
                  </span>
                  <span className="flex items-center gap-1 text-slate-300 text-[11px]">
                    <Clock className="w-3 h-3 text-amber-400" aria-hidden="true" />
                    {coupon.expiresText}
                  </span>
                </div>

                {/* Main Card Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  {/* Discount Big Typography */}
                  <div className="mb-3">
                    <span className="inline-block text-3xl sm:text-4xl font-black text-amber-600 tracking-tight">
                      {coupon.discountText}
                    </span>
                  </div>

                  {/* Coupon Title */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-navy-900 mb-2 leading-snug">
                    {coupon.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {coupon.description}
                  </p>

                  {/* Perforated Divider with Scissor Cut Accent */}
                  <div className="relative my-2 w-full flex items-center justify-center">
                    {/* Left & Right Circular Ticket Notches */}
                    <div
                      className="absolute -left-9 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-50 border-r-2 border-dashed border-amber-400/80 pointer-events-none"
                      aria-hidden="true"
                    />
                    <div
                      className="absolute -right-9 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-50 border-l-2 border-dashed border-amber-400/80 pointer-events-none"
                      aria-hidden="true"
                    />

                    <div className="w-full border-t-2 border-dashed border-slate-300/80 flex items-center justify-center">
                      <span className="bg-white px-2.5 -translate-y-1/2 text-slate-400 text-[11px] font-mono uppercase tracking-widest flex items-center gap-1">
                        <Scissors className="w-3 h-3 text-slate-400 rotate-90" aria-hidden="true" />
                        Clip Coupon
                      </span>
                    </div>
                  </div>

                  {/* Promo Code Box */}
                  <div className="mt-4 mb-4 bg-slate-50 border border-slate-200/90 rounded-xl p-3 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        Promo Code
                      </span>
                      <span className="font-mono text-base font-black text-navy-900 tracking-wider">
                        {coupon.code}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopyCode(coupon.code)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all min-h-[36px] ${
                        isCopied
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                          : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-xs'
                      }`}
                      aria-label={`Copy coupon code ${coupon.code}`}
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" />
                          <span>Copy Code</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Action Button: Claim to Quote */}
                  <div className="space-y-2.5 mt-auto">
                    <a
                      href={`#wizard?coupon=${coupon.code}`}
                      onClick={(e) => handleClaimCoupon(e, coupon.code)}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-navy-900 font-extrabold text-sm sm:text-base shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150 min-h-[44px] text-center"
                      aria-label={`Claim ${coupon.title} to instant quote`}
                    >
                      <Tag className="w-4 h-4 fill-navy-900/20" aria-hidden="true" />
                      <span>Claim to Quote</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </a>

                    {/* Direct Call Mention Alternative */}
                    <div className="text-center pt-1">
                      <a
                        href={`tel:${SITE_CONFIG.business.phone}`}
                        className="inline-flex items-center justify-center gap-1.5 text-xs text-slate-500 hover:text-navy-900 transition-colors font-medium py-1"
                        aria-label={`Call ${SITE_CONFIG.business.displayPhone} and mention code ${coupon.code}`}
                      >
                        <Phone className="w-3 h-3 text-amber-600" aria-hidden="true" />
                        <span>
                          Or call <strong className="font-semibold text-slate-700">{SITE_CONFIG.business.phone}</strong> &amp; mention <code className="font-mono font-bold text-navy-900">{coupon.code}</code>
                        </span>
                      </a>
                    </div>

                    {/* Clear Terms Note */}
                    <div className="pt-3 border-t border-slate-100">
                      <p className="text-[11px] text-slate-400 leading-tight">
                        * <span className="font-medium text-slate-500">{coupon.terms}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Coupon Terms Disclaimer */}
        <div className="mt-10 text-center text-xs text-slate-500 max-w-2xl mx-auto">
          <p>
            Limit one promotional voucher per residential address per service dispatch. Promotional vouchers must be presented to technician upon arrival or selected online during quote intake. Not redeemable for cash.
          </p>
        </div>
      </div>
    </section>
  );
}
