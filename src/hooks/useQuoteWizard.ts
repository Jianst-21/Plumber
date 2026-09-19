'use client';

import { useState, useMemo, useCallback } from 'react';
import { SITE_CONFIG } from '@/config/site.config';

export type WizardStep = 1 | 2 | 3 | 4 | 5;
export type UrgencyType = 'emergency' | 'today' | 'scheduled';

export interface CostEstimate {
  baseMin: number;
  baseMax: number;
  min: number;
  max: number;
  discountAmount: number;
  couponCode: string | null;
  couponBonus: string | null;
  urgencyNote: string;
  serviceTitle: string;
}

export const BASE_SERVICE_RATES: Record<
  string,
  { min: number; max: number; title: string }
> = {
  'leak-repair': {
    min: 129,
    max: 269,
    title: 'Emergency Leak Detection & Pipe Repair',
  },
  'drain-cleaning': {
    min: 89,
    max: 169,
    title: 'Drain Unblocking & Hydro-Jetting',
  },
  'water-heater': {
    min: 169,
    max: 389,
    title: 'Boiler & Hot Water Cylinder Servicing',
  },
  'fixture-pipe': {
    min: 99,
    max: 220,
    title: 'Taps, Toilets & Waste Pipe Installation',
  },
};

export function formatPhoneNumber(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length === 0) return '';
  if (digits.startsWith('020')) {
    if (digits.length <= 3) return digits;
    if (digits.length <= 7) return `${digits.slice(0, 3)} ${digits.slice(3)}`;
    return `${digits.slice(0, 3)} ${digits.slice(3, 7)} ${digits.slice(7)}`;
  }
  if (digits.length <= 5) return digits;
  return `${digits.slice(0, 5)} ${digits.slice(5)}`;
}

export interface UseQuoteWizardReturn {
  step: WizardStep;
  serviceId: string;
  urgency: UrgencyType;
  zipCode: string;
  name: string;
  phone: string;
  notes: string;
  couponCode: string | null;
  ticketId: string | null;
  isZipValid: boolean;
  isSubmitted: boolean;
  errors: Record<string, string>;
  estimate: CostEstimate;
  setStep: (step: WizardStep) => void;
  nextStep: () => boolean;
  prevStep: () => void;
  selectService: (id: string) => void;
  selectUrgency: (urgency: UrgencyType) => void;
  setZipCode: (zip: string) => void;
  setName: (name: string) => void;
  setPhone: (phone: string) => void;
  setNotes: (notes: string) => void;
  setContactInfo: (info: { name?: string; phone?: string; notes?: string }) => void;
  applyCoupon: (code: string | null) => void;
  removeCoupon: () => void;
  validateStep: (stepToCheck?: WizardStep) => boolean;
  submitQuote: () => boolean;
  resetForm: () => void;
}

export function useQuoteWizard(): UseQuoteWizardReturn {
  const [step, setStepState] = useState<WizardStep>(1);
  const [serviceId, setServiceId] = useState<string>('leak-repair');
  const [urgency, setUrgency] = useState<UrgencyType>('emergency');
  const [zipCode, setZipCodeState] = useState<string>('');
  const [name, setNameState] = useState<string>('');
  const [phone, setPhoneState] = useState<string>('');
  const [notes, setNotesState] = useState<string>('');
  const [couponCode, setCouponCode] = useState<string | null>(null);
  const [ticketId, setTicketId] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Verify coverage against covered London postcodes
  const isZipValid = useMemo(() => {
    const cleanCode = zipCode.trim().toUpperCase().replace(/\s+/g, '');
    if (!cleanCode) return false;
    return SITE_CONFIG.serviceArea.zipCodes.some((prefix) =>
      cleanCode.startsWith(prefix.replace(/\s+/g, ''))
    );
  }, [zipCode]);

  // Calculate instant transparent cost range estimate
  const estimate = useMemo<CostEstimate>(() => {
    const defaultRate = BASE_SERVICE_RATES['leak-repair'];
    const base = BASE_SERVICE_RATES[serviceId] || defaultRate;

    let discountAmount = 0;
    let couponBonus: string | null = null;
    const normalizedCode = couponCode?.trim().toUpperCase() || null;

    if (normalizedCode === 'FIRST30') {
      discountAmount = 30;
      couponBonus = '£30 Instant Repair Discount Applied';
    } else if (normalizedCode === 'BOILER80') {
      if (serviceId === 'water-heater') {
        discountAmount = 80;
        couponBonus = '£80 Boiler Replacement Discount Applied';
      } else {
        discountAmount = 0;
        couponBonus = 'Coupon BOILER80 applies to Boiler & Heating services';
      }
    } else if (normalizedCode === 'CAMFREE') {
      discountAmount = 0;
      couponBonus = 'FREE CCTV Drain Camera Inspection Included (£120 Value)';
    }

    const calculatedMin = Math.max(0, base.min - discountAmount);
    const calculatedMax = Math.max(calculatedMin, base.max - discountAmount);

    let urgencyNote = '24/7 Emergency Dispatch: £0 Overtime Surcharge Guarantee';
    if (urgency === 'today') {
      urgencyNote = 'Same-Day Priority Window: Standard Rates Apply';
    } else if (urgency === 'scheduled') {
      urgencyNote = 'Flexible Scheduling: Upfront Flat Rate Guaranteed';
    }

    return {
      baseMin: base.min,
      baseMax: base.max,
      min: calculatedMin,
      max: calculatedMax,
      discountAmount,
      couponCode: normalizedCode,
      couponBonus,
      urgencyNote,
      serviceTitle: base.title,
    };
  }, [serviceId, couponCode, urgency]);

  const setStep = useCallback((newStep: WizardStep) => {
    setStepState(newStep);
  }, []);

  const selectService = useCallback((id: string) => {
    setServiceId(id);
    setErrors((prev) => {
      const copy = { ...prev };
      delete copy.serviceId;
      return copy;
    });
  }, []);

  const selectUrgency = useCallback((selectedUrgency: UrgencyType) => {
    setUrgency(selectedUrgency);
    setErrors((prev) => {
      const copy = { ...prev };
      delete copy.urgency;
      return copy;
    });
  }, []);

  const setZipCode = useCallback((val: string) => {
    const clean = val.toUpperCase().replace(/[^A-Z0-9 ]/g, '').slice(0, 8);
    setZipCodeState(clean);
    setErrors((prev) => {
      const copy = { ...prev };
      delete copy.zipCode;
      return copy;
    });
  }, []);

  const setName = useCallback((val: string) => {
    setNameState(val);
    setErrors((prev) => {
      const copy = { ...prev };
      delete copy.name;
      return copy;
    });
  }, []);

  const setPhone = useCallback((val: string) => {
    const formatted = formatPhoneNumber(val);
    setPhoneState(formatted);
    setErrors((prev) => {
      const copy = { ...prev };
      delete copy.phone;
      return copy;
    });
  }, []);

  const setNotes = useCallback((val: string) => {
    setNotesState(val);
  }, []);

  const setContactInfo = useCallback(
    (info: { name?: string; phone?: string; notes?: string }) => {
      if (info.name !== undefined) setNameState(info.name);
      if (info.phone !== undefined) setPhoneState(formatPhoneNumber(info.phone));
      if (info.notes !== undefined) setNotesState(info.notes);
    },
    []
  );

  const applyCoupon = useCallback((code: string | null) => {
    setCouponCode(code);
  }, []);

  const removeCoupon = useCallback(() => {
    setCouponCode(null);
  }, []);

  const validateStep = useCallback(
    (stepToCheck?: WizardStep): boolean => {
      const current = stepToCheck !== undefined ? stepToCheck : step;
      const newErrors: Record<string, string> = {};

      if (current === 1) {
        if (!serviceId) {
          newErrors.serviceId = 'Please select a plumbing service.';
        }
      } else if (current === 2) {
        if (!urgency) {
          newErrors.urgency = 'Please select an arrival urgency timeframe.';
        }
      } else if (current === 3) {
        const clean = zipCode.trim();
        if (!clean || clean.length < 2) {
          newErrors.zipCode = 'Please enter a valid London postal code (e.g. SW1A, NW1, W1D).';
        }
      } else if (current === 4) {
        if (!name.trim() || name.trim().length < 2) {
          newErrors.name = 'Please enter your full name.';
        }
        const cleanPhone = phone.replace(/\D/g, '');
        if (!cleanPhone || cleanPhone.length < 10) {
          newErrors.phone = 'Please enter a valid phone number (at least 10 digits).';
        }
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    },
    [step, serviceId, urgency, zipCode, name, phone]
  );

  const nextStep = useCallback((): boolean => {
    const isValid = validateStep(step);
    if (!isValid) return false;

    if (step < 4) {
      setStepState((prev) => (prev + 1) as WizardStep);
      return true;
    }
    return true;
  }, [step, validateStep]);

  const prevStep = useCallback(() => {
    if (step > 1) {
      setStepState((prev) => (prev - 1) as WizardStep);
    }
  }, [step]);

  const submitQuote = useCallback((): boolean => {
    const isValid = validateStep(4);
    if (!isValid) return false;

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newTicket = `#APX-${randomNum}`;
    setTicketId(newTicket);
    setIsSubmitted(true);
    setStepState(5);
    return true;
  }, [validateStep]);

  const resetForm = useCallback(() => {
    setStepState(1);
    setServiceId('leak-repair');
    setUrgency('emergency');
    setZipCodeState('');
    setNameState('');
    setPhoneState('');
    setNotesState('');
    setCouponCode(null);
    setTicketId(null);
    setIsSubmitted(false);
    setErrors({});
  }, []);

  return {
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
    isSubmitted,
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
    setContactInfo,
    applyCoupon,
    removeCoupon,
    validateStep,
    submitQuote,
    resetForm,
  };
}
