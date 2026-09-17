import React from 'react';

interface ApexLogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
}

export function ApexLogoIcon({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="apexOrangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ff7a00" />
          <stop offset="100%" stop-color="#ea580c" />
        </linearGradient>
      </defs>

      {/* Water Droplet Outer Boundary */}
      <path
        d="M 50 3 C 50 3, 14 39, 14 63 A 36 36 0 0 0 86 63 C 86 39, 50 3, 50 3 Z"
        fill="url(#apexOrangeGrad)"
      />

      {/* White Plumber's Pipe Wrench */}
      {/* 1. Top Hook Jaw with inner teeth */}
      <path
        d="M 40 38 C 40 28, 47 22, 59 22 C 69 22, 75 27, 75 35 C 75 38.5, 72.5 40.5, 68 40.5 L 55 40.5 C 52 40.5, 50 42.5, 50 45 L 40 45 Z"
        fill="#ffffff"
      />

      {/* 2. Lower Heel Jaw & Housing */}
      <path
        d="M 49 46.5 L 66 46.5 C 68.5 46.5, 70 48, 70 50.5 L 70 53 C 70 55.5, 68.5 57, 66 57 L 49 57 Z"
        fill="#ffffff"
      />

      {/* Adjustment Knurl Nut */}
      <rect x="54" y="58" width="11" height="4.5" rx="1.5" fill="#ffffff" />

      {/* 3. Heavy-Duty Wrench I-Beam Handle */}
      <path
        d="M 44.5 54 L 21.5 77 C 19 79.5, 19 83.5, 21.5 86 L 23 87.5 C 25.5 90, 29.5 90, 32 87.5 L 55 64.5 Z"
        fill="#ffffff"
      />

      {/* Inner Handle Slot Cutout */}
      <path
        d="M 26.5 80 L 41.5 65 L 45 68.5 L 30 83.5 Z"
        fill="url(#apexOrangeGrad)"
      />
    </svg>
  );
}

export default function ApexLogo({
  className = '',
  variant = 'dark',
  size = 'md',
}: ApexLogoProps) {
  const isLight = variant === 'light';

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10 sm:w-11 sm:h-11',
    lg: 'w-12 h-12 sm:w-14 sm:h-14',
  };

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
  };

  const subSizes = {
    sm: 'text-[10px]',
    md: 'text-xs sm:text-sm',
    lg: 'text-sm sm:text-base',
  };

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 group ${className}`}>
      {/* Droplet & Pipe Wrench Emblem */}
      <div className="shrink-0 transition-transform duration-200 group-hover:scale-105 drop-shadow-sm">
        <ApexLogoIcon className={iconSizes[size]} />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col text-left select-none">
        <span
          className={`font-black tracking-tight leading-none ${titleSizes[size]} ${
            isLight ? 'text-white' : 'text-slate-900'
          }`}
        >
          APEX
        </span>
        <span
          className={`font-extrabold tracking-widest uppercase leading-tight mt-0.5 ${subSizes[size]} ${
            isLight ? 'text-slate-200' : 'text-slate-800'
          }`}
        >
          PLUMBING
        </span>
      </div>
    </div>
  );
}
