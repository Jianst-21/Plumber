# ApexFlow Plumbing & Rooter - Lead-Generation Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a high-converting, mobile-first, zero-backend static Next.js landing page for emergency plumbing contractor lead generation featuring direct call triggers, digital coupons, before/after showcases, transparent pricing, and an interactive 4-step quote wizard.

**Architecture:** Pure client-side static export (`output: 'export'`) with Next.js App Router, Tailwind CSS, Lucide React icons, and Framer Motion transitions. All business data (phone numbers, services, coupons, ZIP coverage, reviews) is strictly decoupled and managed in a centralized config file (`src/config/site.config.ts`).

**Tech Stack:** Next.js 15+ (App Router), React 19, TypeScript, Tailwind CSS v3/v4, Lucide React, Framer Motion.

**Spec:** `docs/superpowers/specs/2026-09-17-plumbing-leadgen-landing-page-design.md` (and `desain.md`)

## Global Constraints

- **Zero Server/Backend Requirement:** Must build with `output: 'export'` without API routes or server-side runtimes.
- **Zero Stickers/Cartoons:** 100% authentic commercial photography (curated Unsplash CDN), clean SVG seals, and Lucide icons.
- **Strict Responsiveness:** Flawless UX on Mobile (< 768px with persistent bottom call bar), Tablet (768px–1023px), and Desktop (1024px+).
- **Direct Phone Integration:** All phone numbers must trigger native dialers with `tel:(512) 555-7473`.
- **Centralized Configuration:** No hardcoded business copy, phone numbers, or rates in UI components; all sourced from `site.config.ts`.

---

## File Structure Plan

```text
plumber/
├── next.config.ts                         # Next.js configuration with output: 'export'
├── tailwind.config.ts                     # Tailwind theme: custom colors (navy, amber) & animations
├── postcss.config.mjs                     # PostCSS config
├── package.json                           # Dependencies and scripts
├── tsconfig.json                          # TypeScript configuration with @/* path alias
├── src/
│   ├── app/
│   │   ├── layout.tsx                     # Root HTML/Body, fonts, SEO local metadata, viewport
│   │   ├── page.tsx                       # Master single-page composition (15 sections)
│   │   └── globals.css                    # Tailwind imports, pulse animations, scroll padding
│   ├── config/
│   │   └── site.config.ts                 # Central business profile, copy, services, ZIPs, coupons
│   ├── types/
│   │   └── index.ts                       # TypeScript interfaces for all components and state
│   ├── hooks/
│   │   └── useQuoteWizard.ts              # State management, step transitions, cost calculator, ticket generator
│   └── components/
│       ├── layout/
│       │   ├── EmergencyTopbar.tsx        # 24/7 emergency dispatch alert bar
│       │   ├── Navbar.tsx                 # Sticky navigation with license badge and call button
│       │   ├── Footer.tsx             # Full business credentials, regulatory disclosure, hours
│       │   └── MobileFloatingBar.tsx      # Fixed bottom mobile action bar (Call Now & Free Quote)
│       ├── hero/
│       │   └── HeroSection.tsx            # Split desktop / single column mobile hero with dual CTA
│       ├── trust/
│       │   ├── TrustStrip.tsx             # Credibility badges (Google 4.9, BBB A+, Master Lic, Insured)
│       │   └── WhyChooseUs.tsx            # 4-pillar value proposition with licensed techs and equipped vans
│       ├── coupons/
│       │   └── CouponOffers.tsx           # Digital perforated coupon cards ($50, $100, Free Camera)
│       ├── services/
│       │   └── ServicesGrid.tsx           # 4 core services with authentic photos and book triggers
│       ├── wizard/
│       │   └── QuoteWizard.tsx            # Interactive 4-step lead capture wizard with instant estimate
│       ├── pricing/
│       │   └── PricingTable.tsx           # Flat-rate upfront pricing chart & fee waiver guarantee
│       ├── showcase/
│       │   └── BeforeAfter.tsx            # Authentic before-and-after work comparison cards
│       ├── coverage/
│       │   └── ServiceArea.tsx            # Visual Austin metro map card & live ZIP code checker
│       ├── reviews/
│       │   └── ReviewsSection.tsx         # Verified homeowner reviews with star ratings and photos
│       └── faq/
│           └── FaqAccordion.tsx           # Interactive animated FAQ accordion
```

---

## Tasks

### Task 1: Project Scaffolding & Dependencies

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.ts`
- Create: `tailwind.config.ts`
- Create: `postcss.config.mjs`

**Interfaces:**
- Consumes: Node.js 22+, npm 10+
- Produces: Working Next.js project skeleton configured for static export (`output: 'export'`) with Tailwind CSS, Lucide React, and Framer Motion.

- [ ] **Step 1: Initialize Git Repository**

Run:
```bash
git init
```
Expected: Initialized empty Git repository.

- [ ] **Step 2: Create package.json**

Write `package.json` with required dependencies:
```json
{
  "name": "apexflow-plumbing",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "framer-motion": "^12.4.7",
    "lucide-react": "^0.475.0",
    "next": "15.1.7",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@types/node": "^22.13.4",
    "@types/react": "^19.0.8",
    "@types/react-dom": "^19.0.3",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.5.2",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.7.3"
  }
}
```

- [ ] **Step 3: Create next.config.ts, tailwind.config.ts, postcss.config.mjs, and tsconfig.json**

`next.config.ts`:
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

`tailwind.config.ts`:
```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0F172A",
          800: "#1E293B",
          700: "#1E3A8A",
          600: "#2563EB",
        },
        amber: {
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
```

`postcss.config.mjs`:
```javascript
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 4: Install Dependencies**

Run:
```bash
npm install
```
Expected: Successfully installed node_modules without errors.

- [ ] **Step 5: Verify Scaffolding with Minimal Next.js Build**

Create minimal placeholder `src/app/layout.tsx` and `src/app/page.tsx` and run:
```bash
npm run build
```
Expected: Build passes and static export directory `out/` is generated.

- [ ] **Step 6: Git Commit**

```bash
git add .
git commit -m "chore: scaffold Next.js 15 static export with Tailwind and Framer Motion"
```

---

### Task 2: Centralized Configuration & Type Definitions

**Files:**
- Create: `src/types/index.ts`
- Create: `src/config/site.config.ts`

**Interfaces:**
- Consumes: None
- Produces:
  - Types: `BusinessConfig`, `PlumbingService`, `CouponOffer`, `PricingItem`, `BeforeAfterItem`, `Testimonial`, `FaqItem`, `QuoteWizardState`
  - Constants: `SITE_CONFIG` exported from `src/config/site.config.ts`

- [ ] **Step 1: Create TypeScript Type Definitions**

File: `src/types/index.ts`
Define interfaces for all business data models, services, coupons, before/after items, testimonials, FAQs, and quote form states.

- [ ] **Step 2: Create Centralized Site Configuration**

File: `src/config/site.config.ts`
Include complete business information for "ApexFlow Plumbing & Rooter" (Austin, TX):
- Phone: `(512) 555-PIPE` (`(512) 555-7473`)
- License: `TX Master Plumber Lic #MP-41982`
- Coverage ZIPs: `['78701', '78702', '78703', '78704', '78705', '78745', '78746', '78748', '78750', '78759', '78613', '78660', '78664']`
- 4 Core Services with real Unsplash contractor images
- 3 Coupon Offers (`$50 OFF`, `$100 OFF Water Heater`, `Free Camera Inspection`)
- 4 Pricing benchmark items
- 3 Before & After showcase pairs with high-res real contractor photos
- 3 Homeowner Testimonials
- 6 Key FAQ items

- [ ] **Step 3: Verification**

Run TypeScript typecheck:
```bash
npx tsc --noEmit
```
Expected: Clean exit (0 errors).

- [ ] **Step 4: Git Commit**

```bash
git add src/types/index.ts src/config/site.config.ts
git commit -m "feat: add centralized site configuration and TypeScript interfaces"
```

---

### Task 3: Global Styles, Typography & Root Layout

**Files:**
- Create: `src/app/globals.css`
- Modify: `src/app/layout.tsx`

**Interfaces:**
- Consumes: `SITE_CONFIG` from `src/config/site.config.ts`
- Produces: Responsive HTML shell, smooth scrolling, Tailwind utilities, pulsing CSS animations.

- [ ] **Step 1: Configure globals.css**

File: `src/app/globals.css`
Add `@tailwind base; @tailwind components; @tailwind utilities;` with custom CSS for:
- Smooth scrolling (`scroll-behavior: smooth`)
- Scroll offset for sticky header navigation (`scroll-margin-top: 5rem`)
- Subtle keyframe animations for emergency pulsing lights (`@keyframes pulse-beacon`)
- Custom perforated coupon border styling

- [ ] **Step 2: Configure layout.tsx**

File: `src/app/layout.tsx`
- Setup `<html lang="en" className="scroll-smooth">`
- Add complete SEO metadata (Title, Description, OpenGraph, LocalBusiness Schema.org JSON-LD snippet)
- Add responsive viewport settings

- [ ] **Step 3: Verification**

Run `npm run build` to ensure layout compiles cleanly.

- [ ] **Step 4: Git Commit**

```bash
git add src/app/globals.css src/app/layout.tsx
git commit -m "feat: configure root layout, SEO metadata, and global animations"
```

---

### Task 4: Emergency Topbar, Sticky Navbar & Mobile Floating Bar

**Files:**
- Create: `src/components/layout/EmergencyTopbar.tsx`
- Create: `src/components/layout/Navbar.tsx`
- Create: `src/components/layout/MobileFloatingBar.tsx`

**Interfaces:**
- Consumes: `SITE_CONFIG` from `@/config/site.config.ts`
- Produces: Header navigation and fixed bottom mobile action bar.

- [ ] **Step 1: Build EmergencyTopbar Component**

File: `src/components/layout/EmergencyTopbar.tsx`
- High-contrast slate-900 bar with emerald pulsing dot.
- Text: "24/7 Emergency Dispatch Active in Greater Austin".
- Average arrival guarantee: "Under 45 minutes".
- One-tap phone CTA with direct `tel:` protocol.

- [ ] **Step 2: Build Sticky Navbar Component**

File: `src/components/layout/Navbar.tsx`
- Sticky header with glassmorphism backdrop blur.
- Brand logo with pipe/droplet icon + License badge pill (`TX Lic #MP-41982`).
- Desktop anchor navigation links (`#services`, `#coupons`, `#pricing`, `#areas`, `#reviews`, `#faq`).
- Prominent amber Call Button: `(512) 555-PIPE`.

- [ ] **Step 3: Build MobileFloatingBar Component**

File: `src/components/layout/MobileFloatingBar.tsx`
- Fixed to bottom of screen on viewports `< 768px` (`md:hidden fixed bottom-0 left-0 right-0 z-50`).
- Left button (Amber): Direct `tel:` call button with phone icon.
- Right button (Navy): Quick scroll to `#wizard` ("Get Free Quote").

- [ ] **Step 4: Verification & Responsive Test**

Mount components temporarily in `src/app/page.tsx` and run:
```bash
npm run build
```
Verify mobile bar renders only on mobile viewports.

- [ ] **Step 5: Git Commit**

```bash
git add src/components/layout/
git commit -m "feat: implement emergency topbar, sticky navbar, and mobile floating action bar"
```

---

### Task 5: High-Impact Hero Section & Trust Credibility Strip

**Files:**
- Create: `src/components/hero/HeroSection.tsx`
- Create: `src/components/trust/TrustStrip.tsx`

**Interfaces:**
- Consumes: `SITE_CONFIG` from `@/config/site.config.ts`
- Produces: Hero section and proof/trust badge strip.

- [ ] **Step 1: Build HeroSection Component**

File: `src/components/hero/HeroSection.tsx`
- 2-Column responsive split (Desktop: copy left, technician visual right; Mobile: single-column touch optimized).
- Headline: "Emergency Plumber in Austin — Fast, Licensed & At Your Door in 45 Minutes or Less!"
- Subtitle with upfront pricing guarantee and zero night/weekend fees.
- Dual CTAs: Primary Amber "Call (512) 555-7473" + Secondary Navy "Get Instant Free Quote".
- 3 Quick Trust Checkmarks: *No Night/Weekend Surcharge*, *Same-Day Dispatch*, *100% Satisfaction Guarantee*.
- Floating guaranteed arrival badge overlaid on realistic technician photography.

- [ ] **Step 2: Build TrustStrip Component**

File: `src/components/trust/TrustStrip.tsx`
- 4 Credibility badges:
  1. Google 4.9 ★ Rating (350+ Reviews)
  2. BBB Accredited Business (A+ Rating)
  3. Texas Licensed Master Plumber
  4. $2,000,000 Liability Insured

- [ ] **Step 3: Verification**

Run `npm run build` and inspect layout consistency.

- [ ] **Step 4: Git Commit**

```bash
git add src/components/hero/ src/components/trust/
git commit -m "feat: implement hero section with dual CTA and credibility trust strip"
```

---

### Task 6: Digital Coupon Offers & Core Plumbing Services Grid

**Files:**
- Create: `src/components/coupons/CouponOffers.tsx`
- Create: `src/components/services/ServicesGrid.tsx`

**Interfaces:**
- Consumes: `SITE_CONFIG` from `@/config/site.config.ts`
- Produces:
  - `CouponOffers`: 3 digital vouchers with "Claim" trigger.
  - `ServicesGrid`: 4 core services cards with authentic photography and "Book Service" trigger.

- [ ] **Step 1: Build CouponOffers Component (Feature 1)**

File: `src/components/coupons/CouponOffers.tsx`
- Perforated ticket styling with dashed cut-line design:
  - `$50 OFF Any Plumbing Repair` (Code `FIRST50`)
  - `$100 OFF Water Heater Replacement` (Code `HEATER100`)
  - `FREE In-Pipe Camera Inspection` (Code `CAMFREE`)
- "Claim Offer" button triggers scroll to `#wizard` and selects the discount.

- [ ] **Step 2: Build ServicesGrid Component**

File: `src/components/services/ServicesGrid.tsx`
- Grid of 4 services (Leak Detection, Drain Cleaning, Water Heater, Fixture Installation).
- High-res commercial photo for each service card with Lucide icons and feature bullet points.
- "Starting from $X" transparent baseline price + "Book This Service" button.

- [ ] **Step 3: Verification**

Run `npm run build` to verify type safety and static image loading.

- [ ] **Step 4: Git Commit**

```bash
git add src/components/coupons/ src/components/services/
git commit -m "feat: implement digital coupon cards and core services grid"
```

---

### Task 7: Interactive Multi-Step Quote Wizard Engine

**Files:**
- Create: `src/hooks/useQuoteWizard.ts`
- Create: `src/components/wizard/QuoteWizard.tsx`

**Interfaces:**
- Consumes: `SITE_CONFIG` from `@/config/site.config.ts`
- Produces: Multi-step interactive lead capture wizard with instant price estimate and ticket generation.

- [ ] **Step 1: Build useQuoteWizard Hook**

File: `src/hooks/useQuoteWizard.ts`
- Manage state: `step` (1 to 4 + success), `serviceId`, `urgency`, `zipCode`, `name`, `phone`, `notes`, `couponCode`.
- Calculate instant cost range estimate based on service, urgency, and applied coupon discount.
- Generate unique reference ticket ID (`#APX-${number}`).
- Validate ZIP code against `SITE_CONFIG.serviceArea.zipCodes`.

- [ ] **Step 2: Build QuoteWizard Component**

File: `src/components/wizard/QuoteWizard.tsx`
- Framer Motion slide transitions (`AnimatePresence`) between steps:
  - **Step 1:** Select service issue (visual tiles) + active coupon display.
  - **Step 2:** Urgency level (*Emergency <1hr*, *Today*, *Scheduled*).
  - **Step 3:** Austin ZIP Code verification with live availability message.
  - **Step 4:** Homeowner name and phone number with instant validation.
- **Success Screen:**
  - Displays Reference Ticket ID (e.g. `#APX-4821`).
  - Displays transparent calculated price range (e.g. `$99 - $189`).
  - Direct call CTA button: "Call Dispatch with Ticket #APX-4821 to Expedite".
  - "Submit Another Request" reset button.

- [ ] **Step 3: Verification**

Run `npm run build` and test all step transitions in browser.

- [ ] **Step 4: Git Commit**

```bash
git add src/hooks/useQuoteWizard.ts src/components/wizard/
git commit -m "feat: implement interactive multi-step quote wizard with cost calculator"
```

---

### Task 8: Transparent Pricing Chart & Real Before-and-After Showcase

**Files:**
- Create: `src/components/pricing/PricingTable.tsx`
- Create: `src/components/showcase/BeforeAfter.tsx`

**Interfaces:**
- Consumes: `SITE_CONFIG` from `@/config/site.config.ts`
- Produces: Transparent pricing breakdown and visual before/after contractor photo showcase.

- [ ] **Step 1: Build PricingTable Component (Feature 3)**

File: `src/components/pricing/PricingTable.tsx`
- Transparent price matrix for standard services.
- Highlighted box: "Diagnostic Fee 100% Waived with Any Approved Repair".
- 3 Core contractor guarantees: Flat-Rate Upfront Quotes, Zero Overtime Surcharge, 1-Year Workmanship Warranty.

- [ ] **Step 2: Build BeforeAfter Showcase Component (Feature 2)**

File: `src/components/showcase/BeforeAfter.tsx`
- 3 Real work comparison pairs:
  1. Corroded Galvanized Pipe ➔ Clean PEX Manifold
  2. Root-Blocked Sewer ➔ Clean Hydro-Jetted Drain
  3. Leaking 50-Gal Tank ➔ Modern Tankless Unit
- Authentic photos with clear status badges ("BEFORE / AFTER") and problem/solution descriptions.

- [ ] **Step 3: Verification**

Run `npm run build` to verify clean compilation.

- [ ] **Step 4: Git Commit**

```bash
git add src/components/pricing/ src/components/showcase/
git commit -m "feat: implement transparent pricing chart and real before-after showcase"
```

---

### Task 9: Value Proposition, Service Area & Interactive ZIP Checker

**Files:**
- Create: `src/components/trust/WhyChooseUs.tsx`
- Create: `src/components/coverage/ServiceArea.tsx`

**Interfaces:**
- Consumes: `SITE_CONFIG` from `@/config/site.config.ts`
- Produces: Why Choose Us section and live service area checker with Austin coverage list.

- [ ] **Step 1: Build WhyChooseUs Component**

File: `src/components/trust/WhyChooseUs.tsx`
- 4 Key value pillars:
  1. State-Licensed & Drug-Tested Technicians
  2. "Warehouse On Wheels" Mobile Parts Inventory
  3. Advanced Acoustic & Camera Diagnostics
  4. Respect for Your Home (Shoe covers & drop cloths)

- [ ] **Step 2: Build ServiceArea Component**

File: `src/components/coverage/ServiceArea.tsx`
- Visual Austin metro coverage card with major neighborhoods listed (Downtown, South Congress, Round Rock, Cedar Park, Lakeway, Pflugerville).
- Standalone interactive ZIP code lookup tool: Users enter their 5-digit ZIP code and instantly see coverage confirmation and response time.

- [ ] **Step 3: Verification**

Run `npm run build` to verify type safety and interactive behavior.

- [ ] **Step 4: Git Commit**

```bash
git add src/components/trust/WhyChooseUs.tsx src/components/coverage/
git commit -m "feat: implement why choose us pillars and interactive service area ZIP checker"
```

---

### Task 10: Verified Testimonials, FAQ Accordion & Emergency Footer

**Files:**
- Create: `src/components/reviews/ReviewsSection.tsx`
- Create: `src/components/faq/FaqAccordion.tsx`
- Create: `src/components/layout/Footer.tsx`

**Interfaces:**
- Consumes: `SITE_CONFIG` from `@/config/site.config.ts`
- Produces: Verified customer reviews, expandable FAQ accordion, and comprehensive footer.

- [ ] **Step 1: Build ReviewsSection Component**

File: `src/components/reviews/ReviewsSection.tsx`
- 3 Verified customer review cards with 5-star ratings, author photos, neighborhood tags, and emergency resolution stories.
- Google Reviews summary badge (4.9 rating from 350+ reviews).

- [ ] **Step 2: Build FaqAccordion Component**

File: `src/components/faq/FaqAccordion.tsx`
- Framer Motion animated accordion with open/close toggles for the 6 key customer questions.
- Clear answers regarding dispatch speed, night rates, warranties, and payment methods.

- [ ] **Step 3: Build Footer & Emergency Callout Component**

File: `src/components/layout/Footer.tsx`
- Urgent bottom emergency callout banner with amber button.
- Comprehensive footer with business credentials, Texas State Board of Plumbing Examiners regulatory disclosure, license #, 24/7 hours, service zones, and copyright.

- [ ] **Step 4: Verification**

Run `npm run build` to verify clean compilation.

- [ ] **Step 4: Git Commit**

```bash
git add src/components/reviews/ src/components/faq/ src/components/layout/Footer.tsx
git commit -m "feat: implement verified reviews, FAQ accordion, and emergency footer"
```

---

### Task 11: Master Page Assembly, Responsive Polish & Final Static Build

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/app/globals.css` (if any styling tweaks required)

**Interfaces:**
- Consumes: All components from Tasks 4–10
- Produces: Fully integrated, responsive single-page landing page exported to `out/`.

- [ ] **Step 1: Assemble Single-Page in page.tsx**

File: `src/app/page.tsx`
Assemble all 15 sections in the exact approved order:
1. `EmergencyTopbar`
2. `Navbar`
3. `HeroSection`
4. `TrustStrip`
5. `CouponOffers`
6. `ServicesGrid`
7. `QuoteWizard`
8. `PricingTable`
9. `BeforeAfter`
10. `WhyChooseUs`
11. `ServiceArea`
12. `ReviewsSection`
13. `FaqAccordion`
14. `Footer`
15. `MobileFloatingBar`

- [ ] **Step 2: Verify Build & Static Export**

Run:
```bash
npm run build
```
Expected: Zero errors, successful compilation, and generation of `out/index.html` with static assets.

- [ ] **Step 3: Responsive & Interactive Inspection**

Verify:
- Mobile viewport: Header adapts cleanly, sticky bottom bar stays anchored, wizard flows smoothly.
- Tablet viewport: 2-column grids render with balanced spacing.
- Desktop viewport: Split hero and 4-column services look professional.
- No stickers, cartoons, or broken image URLs.

- [ ] **Step 4: Final Git Commit**

```bash
git add .
git commit -m "feat: complete ApexFlow Plumbing lead-generation landing page"
```
