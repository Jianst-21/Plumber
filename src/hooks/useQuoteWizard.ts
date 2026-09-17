'use client';

import { useState, useMemo, useEffect, useCallback } from 'react';
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
    min: 149,
    max: 299,
    title: 'Emergency Leak Detection & Repair',
  },
  'drain-cleaning': {
    min: 99,
    max: 189,
    title: 'Drain Cleaning & Hydro-Jetting',
  },
  'water-heater': {
    min: 189,
    max: 450,
    title: 'Water Heater Repair & Replacement',
  },
  'fixture-pipe': {
    min: 129,
    max: 280,
    title: 'Fixture & Whole-House Piping Installation',
  },
};

export function formatPhoneNumber(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 10);
  if (digits.length === 0) return '';
  if (digits.length <= 3) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
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

  // Verify coverage against covered Austin ZIP codes
  const isZipValid = useMemo(() => {
    const cleanZip = zipCode.trim();
    return SITE_CONFIG.serviceArea.zipCodes.includes(cleanZip);
  }, [zipCode]);

  // Calculate instant transparent cost range estimate
  const estimate = useMemo<CostEstimate>(() => {
    const defaultRate = BASE_SERVICE_RATES['leak-repair'];
    const base = BASE_SERVICE_RATES[serviceId] || defaultRate;

    let discountAmount = 0;
    let couponBonus: string | null = null;
    const normalizedCode = couponCode?.trim().toUpperCase() || null;

    if (normalizedCode === 'FIRST50') {
      discountAmount = 50;
      couponBonus = '$50 Instant Repair Discount Applied';
    } else if (normalizedCode === 'HEATER100') {
      if (serviceId === 'water-heater') {
        discountAmount = 100;
        couponBonus = '$100 Water Heater Replacement Discount Applied';
      } else {
        discountAmount = 0;
        couponBonus = 'Coupon HEATER100 applies to Water Heater services';
      }
    } else if (normalizedCode === 'CAMFREE') {
      discountAmount = 0;
      couponBonus = 'FREE Video Camera Sewer Inspection Included ($150 Value)';
    }

    const calculatedMin = Math.max(0, base.min - discountAmount);
    const calculatedMax = Math.max(calculatedMin, base.max - discountAmount);

    let urgencyNote = '24/7 Emergency Dispatch: $0 Overtime Surcharge Guarantee';
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
    const numeric = val.replace(/\D/g, '').slice(0, 5);
    setZipCodeState(numeric);
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
    if (!code) {
      setCouponCode(null);
      return;
    }
    setCouponCode(code.trim().toUpperCase());
  }, []);

  const removeCoupon = useCallback(() => {
    setCouponCode(null);
  }, []);

  const validateStep = useCallback(
    (stepToCheck?: WizardStep): boolean => {
      const current = stepToCheck ?? step;
      const newErrors: Record<string, string> = {};

      if (current === 1) {
        if (!serviceId) {
          newErrors.serviceId = 'Please select a service to continue.';
        }
      } else if (current === 2) {
        if (!urgency) {
          newErrors.urgency = 'Please select your urgency timeline.';
        }
      } else if (current === 3) {
        const cleanZip = zipCode.trim();
        if (!cleanZip || cleanZip.length !== 5) {
          newErrors.zipCode = 'Please enter a 5-digit Austin area ZIP code.';
        }
      } else if (current === 4) {
        if (!name.trim() || name.trim().length < 2) {
          newErrors.name = 'Please provide your full name for dispatch.';
        }
        const digits = phone.replace(/\D/g, '');
        if (digits.length < 10) {
          newErrors.phone = 'Please enter a valid 10-digit phone number.';
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
    } else if (step === 4) {
      return submitQuote();
    }
    return true;
  }, [step, validateStep]);

  const prevStep = useCallback(() => {
    setErrors({});
    setStepState((prev) => (Math.max(1, prev - 1) as WizardStep));
  }, []);

  const submitQuote = useCallback((): boolean => {
    const isValidStep3 = zipCode.trim().length === 5;
    const digits = phone.replace(/\D/g, '');
    const isValidStep4 = name.trim().length >= 2 && digits.length >= 10;

    const newErrors: Record<string, string> = {};
    if (!isValidStep3) {
      newErrors.zipCode = 'Please provide a valid 5-digit ZIP code.';
    }
    if (!name.trim() || name.trim().length < 2) {
      newErrors.name = 'Please provide your full name.';
    }
    if (digits.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      if (!isValidStep3 && step !== 3) {
        setStepState(3);
      } else if (!isValidStep4 && step !== 4) {
        setStepState(4);
      }
      return false;
    }

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newTicket = `#APX-${randomNum}`;
    setTicketId(newTicket);
    setIsSubmitted(true);
    setErrors({});
    setStepState(5);
    return true;
  }, [zipCode, name, phone, step]);

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

  // Listen to custom dispatch events and URL parameters
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleSelectCoupon = (event: Event) => {
      const customEvent = event as CustomEvent<string>;
      if (customEvent.detail) {
        applyCoupon(customEvent.detail);
      }
    };

    const handleSelectService = (event: Event) => {
      const customEvent = event as CustomEvent<string>;
      if (customEvent.detail) {
        selectService(customEvent.detail);
      }
    };

    const handleSelectZip = (event: Event) => {
      const customEvent = event as CustomEvent<string>;
      if (customEvent.detail) {
        setZipCode(customEvent.detail);
      }
    };

    window.addEventListener('plumber-select-coupon', handleSelectCoupon);
    window.addEventListener('plumber-select-service', handleSelectService);
    window.addEventListener('plumber-select-zip', handleSelectZip);

    const parseParams = () => {
      try {
        const hash = window.location.hash;
        const search = window.location.search;
        let couponParam: string | null = null;
        let serviceParam: string | null = null;
        let zipParam: string | null = null;

        if (hash.includes('?')) {
          const hashQuery = hash.split('?')[1];
          const params = new URLSearchParams(hashQuery);
          couponParam = params.get('coupon');
          serviceParam = params.get('service');
          zipParam = params.get('zip');
        }

        if (!couponParam && search) {
          const searchParams = new URLSearchParams(search);
          couponParam = searchParams.get('coupon');
          if (!serviceParam) {
            serviceParam = searchParams.get('service');
          }
          if (!zipParam) {
            zipParam = searchParams.get('zip');
          }
        }

        if (couponParam) {
          applyCoupon(couponParam);
        }
        if (serviceParam) {
          selectService(serviceParam);
        }
        if (zipParam) {
          setZipCode(zipParam);
        }
      } catch {
        // Ignore URL parsing errors
      }
    };

    parseParams();
    window.addEventListener('hashchange', parseParams);

    return () => {
      window.removeEventListener('plumber-select-coupon', handleSelectCoupon);
      window.removeEventListener('plumber-select-service', handleSelectService);
      window.removeEventListener('plumber-select-zip', handleSelectZip);
      window.removeEventListener('hashchange', parseParams);
    };
  }, [applyCoupon, selectService, setZipCode]);

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
