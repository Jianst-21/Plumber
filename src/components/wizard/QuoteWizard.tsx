'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Droplets,
  Wrench,
  Flame,
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  Clock,
  Calendar,
  Zap,
  MapPin,
  Phone,
  ArrowRight,
  ArrowLeft,
  Copy,
  Check,
  RotateCcw,
  Tag,
  Lock,
  Sparkles,
} from 'lucide-react';
import { SITE_CONFIG } from '@/config/site.config';
import { useQuoteWizard, UrgencyType } from '@/hooks/useQuoteWizard';

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  'leak-repair': <Droplets className="w-6 h-6 text-blue-600" aria-hidden="true" />,
  'drain-cleaning': <Wrench className="w-6 h-6 text-amber-600" aria-hidden="true" />,
  'water-heater': <Flame className="w-6 h-6 text-red-600" aria-hidden="true" />,
  'fixture-pipe': <ShieldCheck className="w-6 h-6 text-emerald-600" aria-hidden="true" />,
};

const STEP_TITLES = [
  { id: 1, label: 'Service', desc: 'Choose Issue' },
  { id: 2, label: 'Urgency', desc: 'Arrival Time' },
  { id: 3, label: 'Location', desc: 'ZIP Verification' },
  { id: 4, label: 'Contact', desc: 'Dispatch Info' },
];

export default function QuoteWizard() {
  const {
    step,
    serviceId,
    urgency,
    zipCode,
    name,
    phone,
    notes,
    couponCode,
    ticketId,
    isZipValid,
    errors,
    estimate,
    setStep,
    nextStep,
    prevStep,
    selectService,
    selectUrgency,
    setZipCode,
    setName,
    setPhone,
    setNotes,
    applyCoupon,
    removeCoupon,
    submitQuote,
    resetForm,
  } = useQuoteWizard();

  const [promoInput, setPromoInput] = useState('');
  const [showPromoInput, setShowPromoInput] = useState(false);
  const [ticketCopied, setTicketCopied] = useState(false);

  const handleCopyTicket = () => {
    if (ticketId && typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(ticketId);
      setTicketCopied(true);
      setTimeout(() => setTicketCopied(false), 2500);
    }
  };

  const handleManualApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoInput.trim()) {
      applyCoupon(promoInput.trim());
      setPromoInput('');
      setShowPromoInput(false);
    }
  };

  return (
    <section
      id="wizard"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-100/70 relative overflow-hidden border-b border-slate-200"
      aria-label="Instant Online Quote & Service Dispatch"
    >
      {/* Background Decorative Blobs */}
      <div
        className="absolute top-10 right-10 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs sm:text-sm font-bold shadow-xs mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" aria-hidden="true" />
            <span>Fast &amp; Transparent 60-Second Dispatch</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight mb-3">
            Instant Online Quote &amp; Service Dispatch
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Get an accurate transparent estimate in under 60 seconds with zero obligation. Or call{' '}
            <a
              href={`tel:${SITE_CONFIG.business.phone.replace(/\D/g, '')}`}
              className="font-bold text-navy-900 hover:text-amber-600 underline decoration-amber-500 underline-offset-2 transition-colors"
            >
              {SITE_CONFIG.business.phone}
            </a>{' '}
            for immediate emergency arrival.
          </p>
        </div>

        {/* Wizard Main Container Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-200/70 border border-slate-200/90 overflow-hidden">
          {/* Top Progress Bar: Only visible during steps 1 - 4 */}
          {step <= 4 && (
            <div className="bg-slate-50/80 border-b border-slate-200 px-4 sm:px-8 py-5">
              <div className="grid grid-cols-4 gap-2 sm:gap-4 relative">
                {STEP_TITLES.map((st) => {
                  const isCompleted = step > st.id;
                  const isCurrent = step === st.id;

                  return (
                    <div
                      key={st.id}
                      className="flex flex-col items-center text-center cursor-pointer group"
                      onClick={() => {
                        if (st.id < step) {
                          setStep(st.id as 1 | 2 | 3 | 4);
                        }
                      }}
                      role="button"
                      tabIndex={st.id < step ? 0 : -1}
                      aria-label={`Step ${st.id}: ${st.label}`}
                    >
                      <div className="flex items-center justify-center mb-1.5 relative w-full">
                        <div
                          className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold transition-all duration-200 z-10 ${
                            isCompleted
                              ? 'bg-emerald-600 text-white shadow-xs'
                              : isCurrent
                              ? 'bg-navy-900 text-white ring-4 ring-navy-100 shadow-md scale-105'
                              : 'bg-slate-200 text-slate-500 group-hover:bg-slate-300'
                          }`}
                        >
                          {isCompleted ? (
                            <Check className="w-4 h-4 stroke-[3]" aria-hidden="true" />
                          ) : (
                            st.id
                          )}
                        </div>
                      </div>
                      <span
                        className={`text-xs sm:text-sm font-bold tracking-tight block ${
                          isCurrent
                            ? 'text-navy-900'
                            : isCompleted
                            ? 'text-emerald-700'
                            : 'text-slate-400'
                        }`}
                      >
                        {st.label}
                      </span>
                      <span className="hidden sm:block text-[11px] text-slate-400 font-medium">
                        {st.desc}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Progress Line */}
              <div className="w-full bg-slate-200 h-1.5 rounded-full mt-4 overflow-hidden">
                <div
                  className="bg-navy-900 h-full transition-all duration-300 ease-out"
                  style={{ width: `${((step - 1) / 3) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* Form Step Body */}
          <div className="p-6 sm:p-8 lg:p-10">
            <AnimatePresence mode="wait">
              {/* STEP 1: Select Service */}
              {step === 1 && (
                <motion.div
                  key="step-1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-navy-900 mb-1">
                      Step 1: What plumbing issue do you need resolved?
                    </h3>
                    <p className="text-sm text-slate-600">
                      Select your service need below to calibrate accurate pricing and equipment dispatch.
                    </p>
                  </div>

                  {errors.serviceId && (
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errors.serviceId}</span>
                    </div>
                  )}

                  {/* 4 Service Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {SITE_CONFIG.services.map((svc) => {
                      const isSelected = serviceId === svc.id;

                      return (
                        <div
                          key={svc.id}
                          onClick={() => selectService(svc.id)}
                          className={`p-5 rounded-xl border-2 text-left cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                            isSelected
                              ? 'border-navy-900 bg-navy-50/40 shadow-md ring-2 ring-navy-900/10'
                              : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/80 bg-white'
                          }`}
                          role="radio"
                          aria-checked={isSelected}
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === ' ' || e.key === 'Enter') {
                              e.preventDefault();
                              selectService(svc.id);
                            }
                          }}
                        >
                          <div>
                            <div className="flex items-center justify-between mb-3">
                              <div className="p-2.5 rounded-lg bg-white shadow-xs border border-slate-100">
                                {SERVICE_ICONS[svc.id] || (
                                  <Wrench className="w-6 h-6 text-navy-700" />
                                )}
                              </div>
                              {isSelected ? (
                                <span className="inline-flex items-center gap-1 text-xs font-bold text-navy-900 bg-navy-100 px-2 py-0.5 rounded-md">
                                  <Check className="w-3.5 h-3.5 stroke-[3]" /> Selected
                                </span>
                              ) : (
                                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                                  {svc.category}
                                </span>
                              )}
                            </div>
                            <h4 className="font-bold text-navy-900 text-base mb-1">
                              {svc.title}
                            </h4>
                            <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                              {svc.shortDesc}
                            </p>
                          </div>

                          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                            <span className="text-slate-500 font-medium">Standard rate:</span>
                            <span className="font-extrabold text-navy-900 text-sm">
                              From ${svc.startingPrice}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Applied Coupon / Promo Code Pill */}
                  <div className="pt-3 border-t border-slate-100">
                    {couponCode ? (
                      <div className="p-3.5 rounded-xl bg-amber-50/90 border border-amber-300 text-amber-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 shadow-xs">
                        <div className="flex items-center gap-2">
                          <Tag className="w-4 h-4 text-amber-600 shrink-0" />
                          <span className="text-xs sm:text-sm font-bold">
                            ✓ Promo Applied:{' '}
                            <code className="font-mono bg-amber-200/70 px-1.5 py-0.5 rounded text-amber-900">
                              {couponCode}
                            </code>
                          </span>
                          {estimate.couponBonus && (
                            <span className="hidden sm:inline text-xs text-amber-800 font-medium">
                              — {estimate.couponBonus}
                            </span>
                          )}
                        </div>
                        <button
                          type="button"
                          onClick={removeCoupon}
                          className="text-xs font-bold text-slate-600 hover:text-red-700 underline transition-colors"
                        >
                          Remove code
                        </button>
                      </div>
                    ) : (
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        {!showPromoInput ? (
                          <div className="flex items-center gap-3">
                            <button
                              type="button"
                              onClick={() => setShowPromoInput(true)}
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors"
                            >
                              <Tag className="w-3.5 h-3.5" /> Have a digital coupon or promo code?
                            </button>
                            <span className="text-xs text-slate-400">|</span>
                            <div className="flex items-center gap-1.5">
                              {['FIRST50', 'HEATER100', 'CAMFREE'].map((code) => (
                                <button
                                  key={code}
                                  type="button"
                                  onClick={() => applyCoupon(code)}
                                  className="text-[11px] font-mono font-bold bg-slate-100 hover:bg-amber-100 text-slate-700 hover:text-amber-900 px-2 py-0.5 rounded border border-slate-200 transition-colors"
                                >
                                  +{code}
                                </button>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <form
                            onSubmit={handleManualApplyCoupon}
                            className="flex items-center gap-2 w-full sm:w-auto"
                          >
                            <input
                              type="text"
                              value={promoInput}
                              onChange={(e) => setPromoInput(e.target.value)}
                              placeholder="Enter code (e.g. FIRST50)"
                              className="px-3 py-1.5 text-xs font-mono uppercase rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-900 w-48"
                            />
                            <button
                              type="submit"
                              className="px-3 py-1.5 bg-navy-900 text-white rounded-lg text-xs font-bold hover:bg-navy-800 transition-colors"
                            >
                              Apply
                            </button>
                            <button
                              type="button"
                              onClick={() => setShowPromoInput(false)}
                              className="text-xs text-slate-500 hover:text-slate-700"
                            >
                              Cancel
                            </button>
                          </form>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Navigation Next */}
                  <div className="flex justify-end pt-4 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => nextStep()}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-navy-900 text-white font-bold text-sm sm:text-base hover:bg-navy-800 active:scale-[0.99] transition-all shadow-md shadow-navy-900/10"
                    >
                      <span>Continue to Urgency</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: Urgency Selection */}
              {step === 2 && (
                <motion.div
                  key="step-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-navy-900 mb-1">
                      Step 2: How quickly do you need our technician?
                    </h3>
                    <p className="text-sm text-slate-600">
                      Austin 24/7 guarantee: We maintain honest flat-rate pricing with zero night or weekend overtime charges.
                    </p>
                  </div>

                  {errors.urgency && (
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errors.urgency}</span>
                    </div>
                  )}

                  {/* 3 Urgency Cards */}
                  <div className="space-y-3.5">
                    {/* Emergency Option */}
                    <div
                      onClick={() => selectUrgency('emergency')}
                      className={`p-5 rounded-2xl border-2 text-left cursor-pointer transition-all duration-200 flex items-start justify-between gap-4 ${
                        urgency === 'emergency'
                          ? 'border-red-500 bg-red-50/40 ring-2 ring-red-500/20 shadow-sm'
                          : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/70 bg-white'
                      }`}
                      role="radio"
                      aria-checked={urgency === 'emergency'}
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === ' ' || e.key === 'Enter') {
                          e.preventDefault();
                          selectUrgency('emergency');
                        }
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-red-100 text-red-700 shrink-0 mt-0.5">
                          <Zap className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <h4 className="font-extrabold text-navy-900 text-base">
                              🚨 Emergency (Under 45 mins)
                            </h4>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-red-600 text-white animate-pulse">
                              Immediate Priority
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                            Active pipe leak, overflowing toilet, sewer backup, or sudden loss of hot water.
                          </p>
                          <p className="text-xs font-bold text-red-700 mt-2 flex items-center gap-1">
                            ✓ $0 Overtime Surcharge Guarantee (Nights &amp; Weekends Included)
                          </p>
                        </div>
                      </div>
                      <div className="shrink-0 mt-1">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            urgency === 'emergency'
                              ? 'border-red-600 bg-red-600'
                              : 'border-slate-300'
                          }`}
                        >
                          {urgency === 'emergency' && (
                            <div className="w-2 h-2 rounded-full bg-white" />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Today Option */}
                    <div
                      onClick={() => selectUrgency('today')}
                      className={`p-5 rounded-2xl border-2 text-left cursor-pointer transition-all duration-200 flex items-start justify-between gap-4 ${
                        urgency === 'today'
                          ? 'border-navy-900 bg-navy-50/40 ring-2 ring-navy-900/10 shadow-sm'
                          : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/70 bg-white'
                      }`}
                      role="radio"
                      aria-checked={urgency === 'today'}
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === ' ' || e.key === 'Enter') {
                          e.preventDefault();
                          selectUrgency('today');
                        }
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-amber-100 text-amber-700 shrink-0 mt-0.5">
                          <Clock className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <h4 className="font-extrabold text-navy-900 text-base">
                              ⚡ Today (Flexible Same-Day Window)
                            </h4>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-900">
                              Same-Day Arrival
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                            Slow drain, minor drip, or faucet replacement. Guaranteed technician arrival today with 30-min call ahead.
                          </p>
                        </div>
                      </div>
                      <div className="shrink-0 mt-1">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            urgency === 'today'
                              ? 'border-navy-900 bg-navy-900'
                              : 'border-slate-300'
                          }`}
                        >
                          {urgency === 'today' && (
                            <div className="w-2 h-2 rounded-full bg-white" />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Scheduled Option */}
                    <div
                      onClick={() => selectUrgency('scheduled')}
                      className={`p-5 rounded-2xl border-2 text-left cursor-pointer transition-all duration-200 flex items-start justify-between gap-4 ${
                        urgency === 'scheduled'
                          ? 'border-navy-900 bg-navy-50/40 ring-2 ring-navy-900/10 shadow-sm'
                          : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/70 bg-white'
                      }`}
                      role="radio"
                      aria-checked={urgency === 'scheduled'}
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === ' ' || e.key === 'Enter') {
                          e.preventDefault();
                          selectUrgency('scheduled');
                        }
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-slate-100 text-slate-700 shrink-0 mt-0.5">
                          <Calendar className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <h4 className="font-extrabold text-navy-900 text-base">
                              📅 Scheduled (Future Date or Renovation)
                            </h4>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700">
                              Book in Advance
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                            Fixture upgrades, repiping consultations, or routine inspections planned for later this week or month.
                          </p>
                        </div>
                      </div>
                      <div className="shrink-0 mt-1">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            urgency === 'scheduled'
                              ? 'border-navy-900 bg-navy-900'
                              : 'border-slate-300'
                          }`}
                        >
                          {urgency === 'scheduled' && (
                            <div className="w-2 h-2 rounded-full bg-white" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-300 text-slate-700 font-bold text-sm hover:bg-slate-50 transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => nextStep()}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-navy-900 text-white font-bold text-sm sm:text-base hover:bg-navy-800 active:scale-[0.99] transition-all shadow-md shadow-navy-900/10"
                    >
                      <span>Continue to Location</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Location & ZIP Verification */}
              {step === 3 && (
                <motion.div
                  key="step-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-navy-900 mb-1">
                      Step 3: Verify Technician Coverage in Your ZIP Code
                    </h3>
                    <p className="text-sm text-slate-600">
                      ApexFlow operates zoned mobile service units across Greater Austin for rapid under-45-minute dispatch.
                    </p>
                  </div>

                  {errors.zipCode && (
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errors.zipCode}</span>
                    </div>
                  )}

                  {/* ZIP Input Field */}
                  <div className="max-w-md">
                    <label
                      htmlFor="zipCode"
                      className="block text-sm font-bold text-navy-900 mb-2"
                    >
                      Austin Area ZIP Code:
                    </label>
                    <div className="relative">
                      <MapPin
                        className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2"
                        aria-hidden="true"
                      />
                      <input
                        id="zipCode"
                        type="text"
                        maxLength={5}
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        placeholder="e.g. 78701"
                        className="w-full pl-12 pr-4 py-3.5 text-lg font-mono font-bold tracking-wider rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-navy-900 transition-all text-navy-900 placeholder:text-slate-400"
                        autoFocus
                      />
                    </div>
                  </div>

                  {/* Quick Select Popular Austin ZIPs */}
                  <div>
                    <span className="text-xs font-semibold text-slate-500 block mb-2">
                      Quick Austin Area Selection:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {['78701', '78704', '78745', '78759', '78660', '78613'].map((code) => (
                        <button
                          key={code}
                          type="button"
                          onClick={() => setZipCode(code)}
                          className={`text-xs font-mono font-bold px-3 py-1.5 rounded-lg border transition-all ${
                            zipCode === code
                              ? 'bg-navy-900 text-white border-navy-900 shadow-xs'
                              : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
                          }`}
                        >
                          {code}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Coverage Verification Status Boxes */}
                  {zipCode.length === 5 && (
                    <div>
                      {isZipValid ? (
                        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-950 flex items-start gap-3 shadow-xs">
                          <CheckCircle2
                            className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <div>
                            <p className="font-extrabold text-sm sm:text-base text-emerald-950">
                              ✓ Coverage Confirmed! 2 emergency technician vans active in {zipCode}.
                            </p>
                            <p className="text-xs sm:text-sm text-emerald-900 mt-1 leading-relaxed">
                              Estimated arrival time: <strong>30–45 mins</strong>. Fully stocked warehouse truck on standby with zero overtime surcharge.
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="p-4 rounded-xl bg-amber-50 border border-amber-300 text-amber-950 flex items-start gap-3 shadow-xs">
                          <AlertCircle
                            className="w-5 h-5 text-amber-600 shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <div>
                            <p className="font-bold text-sm sm:text-base text-amber-950">
                              Surrounding Service Region
                            </p>
                            <p className="text-xs sm:text-sm text-amber-900 mt-1 leading-relaxed">
                              ZIP {zipCode} is in our extended Central Texas service perimeter. We can still dispatch our mobile team! Call{' '}
                              <a
                                href={`tel:${SITE_CONFIG.business.phone.replace(/\D/g, '')}`}
                                className="underline font-bold text-navy-900 hover:text-amber-700"
                              >
                                {SITE_CONFIG.business.phone}
                              </a>{' '}
                              for immediate live route coordination.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-300 text-slate-700 font-bold text-sm hover:bg-slate-50 transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => nextStep()}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-navy-900 text-white font-bold text-sm sm:text-base hover:bg-navy-800 active:scale-[0.99] transition-all shadow-md shadow-navy-900/10"
                    >
                      <span>Continue to Contact</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 4: Homeowner Contact & Submit */}
              {step === 4 && (
                <motion.div
                  key="step-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-navy-900 mb-1">
                      Step 4: Contact &amp; Instant Estimate Calculation
                    </h3>
                    <p className="text-sm text-slate-600">
                      Provide your dispatch contact information to generate your instant transparent estimate and reserve technician arrival.
                    </p>
                  </div>

                  {/* Dynamic Live Estimate Summary Card */}
                  <div className="p-4 rounded-xl bg-navy-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-md">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block">
                        Estimated Transparent Cost Range
                      </span>
                      <div className="text-2xl sm:text-3xl font-black text-white mt-0.5">
                        ${estimate.min} – ${estimate.max}
                      </div>
                      <p className="text-xs text-slate-300 mt-0.5">
                        Service: <strong className="text-white">{estimate.serviceTitle}</strong>
                        {estimate.discountAmount > 0 && (
                          <span className="text-amber-400 font-bold"> (Includes -${estimate.discountAmount} promo discount)</span>
                        )}
                      </p>
                    </div>
                    <div className="text-left sm:text-right">
                      <span className="inline-flex items-center gap-1 text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2.5 py-1 rounded-full">
                        <Check className="w-3.5 h-3.5" /> No Overtime Surcharge
                      </span>
                    </div>
                  </div>

                  {/* Contact Fields Form */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs sm:text-sm font-bold text-navy-900 mb-1.5"
                      >
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. John Doe"
                        className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-navy-900 text-navy-900 ${
                          errors.name
                            ? 'border-red-400 bg-red-50/20'
                            : 'border-slate-300 focus:border-navy-900'
                        }`}
                        autoFocus
                      />
                      {errors.name && (
                        <p className="text-xs text-red-600 font-semibold mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="phoneNumber"
                        className="block text-xs sm:text-sm font-bold text-navy-900 mb-1.5"
                      >
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone
                          className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"
                          aria-hidden="true"
                        />
                        <input
                          id="phoneNumber"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="(512) 000-0000"
                          className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm font-mono focus:outline-none focus:ring-2 focus:ring-navy-900 text-navy-900 ${
                            errors.phone
                              ? 'border-red-400 bg-red-50/20'
                              : 'border-slate-300 focus:border-navy-900'
                          }`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-xs text-red-600 font-semibold mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="issueNotes"
                      className="block text-xs sm:text-sm font-bold text-navy-900 mb-1.5"
                    >
                      Brief Description of Plumbing Problem (Optional)
                    </label>
                    <textarea
                      id="issueNotes"
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. Water dripping under kitchen sink, main sewer line backing up into master bath..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-900 text-sm text-navy-900 placeholder:text-slate-400"
                    />
                  </div>

                  {/* Privacy Notice */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center gap-2">
                    <Lock className="w-4 h-4 text-slate-500 shrink-0" aria-hidden="true" />
                    <span>
                      We will never sell or spam your phone number. Used solely for technician dispatch confirmation.
                    </span>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-300 text-slate-700 font-bold text-sm hover:bg-slate-50 transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => submitQuote()}
                      className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-navy-900 font-black text-sm sm:text-base active:scale-[0.99] transition-all shadow-lg shadow-amber-500/20"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Calculate Instant Estimate &amp; Dispatch Ticket</span>
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 5: Success & Estimate Confirmation */}
              {step === 5 && (
                <motion.div
                  key="step-5"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="text-center py-4 space-y-6"
                >
                  {/* Success Icon */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-100 border-4 border-emerald-200 rounded-full flex items-center justify-center mx-auto text-emerald-600 shadow-md">
                    <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 stroke-[2.5]" />
                  </div>

                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold mb-3">
                      ✓ Instant Quote Ready &bull; Priority Van Available
                    </span>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-navy-900 tracking-tight">
                      Quote Calculated &amp; Dispatch Ticket Generated!
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base max-w-lg mx-auto mt-2">
                      Your priority dispatch request has been logged. Our dispatch team is ready to route a licensed Austin technician to your address.
                    </p>
                  </div>

                  {/* Dispatch Reference Ticket Box */}
                  <div className="max-w-md mx-auto bg-slate-900 text-white rounded-2xl p-5 sm:p-6 shadow-xl relative overflow-hidden text-center">
                    <div className="text-xs uppercase font-bold tracking-widest text-amber-400 mb-1">
                      Priority Dispatch Reference Ticket
                    </div>
                    <div className="text-3xl sm:text-4xl font-mono font-black tracking-wider text-white py-1">
                      {ticketId}
                    </div>
                    <p className="text-xs text-slate-300 mt-1">
                      Keep this reference number when speaking with our technician or dispatch manager.
                    </p>
                    <div className="mt-4 flex justify-center">
                      <button
                        type="button"
                        onClick={handleCopyTicket}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-bold tracking-wide transition-colors border border-white/20 text-white"
                        aria-label="Copy ticket reference code"
                      >
                        {ticketCopied ? (
                          <>
                            <Check className="w-4 h-4 text-emerald-400" />
                            <span className="text-emerald-400">✓ Ticket Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            <span>Copy Ticket Number</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Cost Range Breakdown Box */}
                  <div className="max-w-md mx-auto bg-slate-50 border-2 border-slate-200 rounded-2xl p-5 sm:p-6 text-left space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Estimated Transparent Cost
                      </span>
                      <span className="text-xs font-bold bg-navy-100 text-navy-800 px-2.5 py-0.5 rounded-full">
                        Upfront Flat Rate
                      </span>
                    </div>

                    <div className="text-3xl sm:text-4xl font-black text-navy-900 tracking-tight">
                      ${estimate.min} – ${estimate.max}
                    </div>

                    <div className="space-y-1.5 text-xs text-slate-600 pt-1">
                      <div className="flex justify-between">
                        <span>Selected Service:</span>
                        <strong className="text-navy-900">{estimate.serviceTitle}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Location / ZIP:</span>
                        <strong className="text-navy-900">{zipCode || 'Austin Area'}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Urgency Surcharge:</span>
                        <strong className="text-emerald-600 font-bold">$0.00 (Guaranteed Flat Rate)</strong>
                      </div>
                      {estimate.discountAmount > 0 && (
                        <div className="flex justify-between text-amber-700 font-bold">
                          <span>Applied Promo ({estimate.couponCode}):</span>
                          <span>-${estimate.discountAmount}.00</span>
                        </div>
                      )}
                      {estimate.couponBonus && (
                        <div className="p-2.5 rounded-lg bg-amber-100/60 border border-amber-200 text-amber-950 font-bold text-[11px] mt-2">
                          ★ {estimate.couponBonus}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Immediate Dispatch Call CTA */}
                  <div className="max-w-md mx-auto space-y-3 pt-2">
                    <a
                      href={`tel:${SITE_CONFIG.business.phone.replace(/\D/g, '')}`}
                      className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-black text-base sm:text-lg shadow-xl shadow-red-600/30 active:scale-[0.99] transition-all tracking-tight animate-beacon"
                    >
                      <Phone className="w-5 h-5 fill-white shrink-0" />
                      <span>
                        Call {SITE_CONFIG.business.phone} to Expedite Arrival (Reference {ticketId})
                      </span>
                    </a>
                    <p className="text-xs text-slate-500 font-medium">
                      Mention Reference <strong className="text-navy-900">{ticketId}</strong> to skip the queue and dispatch technician immediately.
                    </p>
                  </div>

                  {/* Reset / Submit Another Button */}
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-navy-900 transition-colors"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Submit Another Request</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
