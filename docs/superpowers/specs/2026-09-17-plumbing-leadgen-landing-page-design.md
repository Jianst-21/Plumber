# ApexFlow Plumbing & Rooter - Lead-Generation Landing Page Design Specification

- **Date:** 2026-09-17
- **Target Market:** United States (Greater Austin, TX metro area)
- **Language:** English (US)
- **Architecture:** 100% Client-Side Static Frontend (Next.js App Router Static Export, Zero Backend Server)

---

## 1. Executive Summary & Goals

ApexFlow Plumbing & Rooter is a high-converting, mobile-first lead-generation landing page designed specifically for emergency residential and commercial plumbing services. 

### Key Business Goals:
1. **Drive Instant Inbound Phone Calls:** Immediate direct dialer triggers (`tel:`) for emergency customers facing active leaks, clogs, or water heater failures.
2. **High-Conversion Digital Quote Requests:** Interactive 4-step quote wizard offering instant cost ranges and booking reference tickets without page refreshes.
3. **Establish Trust Instantly:** Real licensed contractor credentials (Texas Master Plumber License, $2M liability insurance, 4.9★ Google review rating).
4. **Zero Server Maintenance:** Fully static build (`output: 'export'`) deployable to any free CDN/hosting provider (Vercel, Netlify, Cloudflare Pages, GitHub Pages) with zero runtime server costs.

---

## 2. Technical Stack & Infrastructure

- **Framework:** Next.js 15+ (App Router)
- **Build Mode:** Static Site Generation / Static Export (`output: 'export'`)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Modern Pro Contractor Palette)
- **Icons:** Lucide React (clean SVG icons, strictly no cartoon stickers or childish graphics)
- **Motion & Interactions:** Framer Motion (`AnimatePresence`, spring-physics transitions, elevation lifts)
- **Photography & Assets:** High-resolution authentic commercial contractor photography (curated Unsplash CDN of real licensed technicians, real pipe work, clean homeowner interactions)
- **Data Architecture:** Single source of truth at `src/config/site.config.ts`

---

## 3. Design System, Aesthetic & Brand Guidelines

### 3.1 Color Palette
- **Trust Navy (Primary):**
  - Backgrounds & Dark Shell: `#0F172A` (Slate-900)
  - Card & Container Dark: `#1E293B` (Slate-800) / `#1E3A8A` (Blue-900)
  - Deep Brand Accents: `#1D4ED8` (Blue-700), `#2563EB` (Blue-600)
- **Safety Amber / Emergency Orange (High-Impact CTA):**
  - Primary Action & Call Buttons: `#F59E0B` (Amber-500) hover `#D97706` (Amber-600)
  - Urgent Highlights & Badges: `#EA580C` (Orange-600)
- **Status & Feedback:**
  - Emergency 24/7 Available Indicator: `#10B981` (Emerald-500) with CSS pulse
  - Urgency Warnings: `#EF4444` (Red-500)
- **Neutral & Canvas:**
  - Page Canvas: `#F8FAFC` (Slate-50) & `#FFFFFF`
  - Subtle Borders: `#E2E8F0` (Slate-200) & `#CBD5E1` (Slate-300)
  - Body Text: `#334155` (Slate-700) & `#0F172A` (Slate-900)

### 3.2 Typography
- **Primary Typeface:** `Plus Jakarta Sans` or `Inter` (sans-serif)
- **Headlines:** `font-extrabold` / `font-bold` with tight tracking (`tracking-tight`)
- **Badges & Numbers:** Monospace/semi-bold for license numbers and ticket IDs (`font-mono`)

### 3.3 The "Zero Sticker" Mandate
- No cartoons, emoji stickers, or whimsical illustrations.
- All credibility cues rely on official badge styling (sharp border-radius, clean SVG seals, official certification layouts).
- Authentic photography of licensed plumbers working on real fixtures.

---

## 4. Centralized Business Configuration (`site.config.ts`)

All business identity variables are isolated in `src/config/site.config.ts`:
- **Company Name:** ApexFlow Plumbing & Rooter
- **Tagline:** Austin's #1 Emergency & Residential Plumbing Contractor
- **Phone Number:** `(512) 555-PIPE` / `(512) 555-7473`
- **Email:** `dispatch@apexflowplumbing.com`
- **State License:** Texas Master Plumber Lic #MP-41982
- **Insurance:** $2,000,000 General Liability Coverage
- **Service Area:** Austin, Round Rock, Cedar Park, Pflugerville, Lakeway, Buda, Kyle, TX
- **Covered ZIP Codes:** `['78701', '78702', '78703', '78704', '78705', '78745', '78746', '78748', '78750', '78759', '78613', '78660', '78664']`
- **Emergency Dispatch Time:** Under 45 minutes average arrival

---

## 5. Page Layout & Section Hierarchy (Top to Bottom)

### Section 1: Emergency Notification Bar (Topmost)
- **Position:** Fixed/static at page peak, high-contrast Slate-900 with Amber accents.
- **Content:**
  - Live pulsating green status badge: `"● 24/7 EMERGENCY DISPATCH ACTIVE"`
  - Response promise: `"Average Austin arrival time: Under 45 minutes"`
  - One-tap phone CTA: `"Call Dispatch: (512) 555-7473"`

### Section 2: Main Sticky Navigation Bar
- **Behavior:** `sticky top-0 z-50` with glassmorphism backdrop blur (`backdrop-blur-md bg-white/95 border-b border-slate-200`).
- **Elements:**
  - **Left:** Brand logo with pipe/water drop insignia + License # pill badge (`TX Lic #MP-41982`).
  - **Center (Tablet & Desktop):** Smooth-scroll anchor links (`#services`, `#coupons`, `#wizard`, `#pricing`, `#areas`, `#reviews`, `#faq`).
  - **Right:** Prominent Amber Call Button: `(512) 555-PIPE` with vibrating phone micro-icon.

### Section 3: High-Impact Hero Section
- **Layout:**
  - **Desktop (1024px+):** 2-column split (Left: Headline, Value Proposition, Dual CTAs, Trust Points; Right: Technician Hero Visual + Floating Dispatch Guarantee Card).
  - **Mobile (< 768px):** Clean single-column layout prioritizing large touch targets (min 48px height).
- **Copy:**
  - Headline: *"Emergency Plumber in Austin — Fast, Licensed & At Your Door in 45 Minutes or Less!"*
  - Subhead: *"Burst pipes, clogged drains, or broken water heaters? Upfront flat-rate pricing, zero night/weekend surcharge, and 100% satisfaction guaranteed."*
- **Action Buttons:**
  - Primary CTA: **"📞 Call (512) 555-7473"** (Emergency Pulse Animation)
  - Secondary CTA: **"⚡ Get Instant Free Quote"** (Smooth scrolls to Quote Wizard)
- **Quick Trust Badges:**
  - `No Extra Night/Weekend Fees`
  - `Same-Day Emergency Dispatch`
  - `Upfront Transparent Pricing`

### Section 4: Trust & Credibility Strip
- **Visual:** Light grey/slate bar showcasing 4 key credibility badges:
  1. **Google Reviews:** 4.9 ★ Rating (350+ Verified Homeowner Reviews)
  2. **BBB Accreditation:** A+ Rated Accredited Business
  3. **Licensing:** State of Texas Licensed Master Plumber
  4. **Financial Protection:** $2M Comprehensive Commercial Liability Insurance

### Section 5: Special Offers & Digital Coupon Cards (Feature 1)
- **Design:** Modern digital voucher style with dashed perforations and coupon codes:
  - **Coupon 1:** `"$50 OFF Any Plumbing Repair"` (First-time customers, code: `FIRST50`)
  - **Coupon 2:** `"$100 OFF Water Heater Replacement"` (Tank or Tankless, code: `HEATER100`)
  - **Coupon 3:** `"FREE In-Pipe Camera Inspection"` (With any main drain cleaning service, code: `CAMFREE`)
- **Interactivity:** Clicking `"Claim Discount"` auto-populates the coupon selection into the Multi-Step Quote Wizard below.

### Section 6: Core Plumbing Services Grid
- **Layout:** 4 responsive service cards (1 col mobile, 2 col tablet, 4 col desktop) featuring authentic photos and Lucide icons:
  1. **Emergency Leak Detection & Repair:** Thermal/acoustic pinpointing, slab leaks, pipe bursts, fixture leaks.
  2. **Drain Cleaning & Hydro-Jetting:** Kitchen/bathroom clogs, main sewer line snaking, tree root clearing.
  3. **Water Heater Repair & Replacement:** Tank & tankless units, gas/electric heating element repairs, anode rod replacement.
  4. **Fixture & Piping Installation:** Toilets, sinks, garbage disposals, whole-house PEX repiping.
- **Card CTA:** Each card includes starting price (`"From $89"`) and a `"Book This Service"` button that pre-selects the service in the wizard.

### Section 7: Interactive Multi-Step Quote Wizard (Core Lead-Gen Engine)
- **Mechanism:** Client-side 4-step wizard with animated progress bar and `AnimatePresence` slide transitions:
  - **Step 1 (Select Service & Issue):** 4 visual service tiles + applied coupon pill badge.
  - **Step 2 (Select Urgency):** `Emergency (within 1 hour)`, `Today (flexible window)`, or `Schedule for later date`.
  - **Step 3 (Location Verification):** 5-digit ZIP code input with instant client-side validation (`"✓ Great news! We have 2 technicians on standby in your area"`).
  - **Step 4 (Contact Details):** Full Name, Phone Number, Optional notes/description.
- **Instant Result Screen:**
  - Generates an instant Reference Ticket (e.g. `#APX-4821`).
  - Displays transparent estimated cost range based on selected options.
  - One-click button: **"Call Dispatch with Ticket #APX-4821"** to expedite priority arrival.

### Section 8: Transparent Pricing Chart & Guarantees (Feature 3)
- **Layout:** Clear breakdown of benchmark prices for transparency:
  - *Standard Service Call / Diagnostic:* `$0 (Waived with Any Repair)`
  - *Drain Cleaning / Snaking:* `$99 - $189`
  - *Leak Detection & Repair:* `$149 - $299`
  - *Water Heater Diagnostic:* `$89 (Waived with repair)`
- **Three Core Guarantees:**
  1. *Flat-Rate Upfront Pricing:* Exact written quote before any work starts.
  2. *No Hidden Overtime Fees:* Same rate on nights, weekends, and holidays.
  3. *1-Year Workmanship Warranty:* 100% parts & labor guarantee.

### Section 9: Real Before & After Work Showcase (Feature 2)
- **Visual:** High-resolution real photo comparison cards:
  - **Case 1:** Severely corroded galvanized pipe leak ➔ Clean commercial-grade PEX & brass manifold install.
  - **Case 2:** Tree root blocked sewer pipe ➔ Crystal clear hydro-jetted sewer line confirmed via camera.
  - **Case 3:** Leaking 15-year-old tank heater ➔ High-efficiency Rinnai tankless water heater with expansion tank.

### Section 10: Why Choose ApexFlow / Value Proposition
- 4-pillar contractor advantage layout:
  - **Licensed & Background-Checked:** Every technician is drug-tested and state certified.
  - **Fully Stocked "Warehouse On Wheels":** Over 1,500 parts in every service van for same-day repair completion.
  - **Cutting-Edge Diagnostic Gear:** HD sewer cameras, acoustic ground sensors, non-invasive thermal imaging.
  - **Clean Home Guarantee:** Shoe covers, drop cloths, and spotless cleanup after every job.

### Section 11: Service Area & Interactive ZIP Code Checker
- **Visuals:** Map graphic highlighting Greater Austin service zones (Downtown, North Austin, South Austin, Lakeway, Round Rock).
- **Interactive Tool:** Live ZIP code input field. When entered, immediately displays availability status and estimated response time.

### Section 12: Verified Customer Testimonials
- Real homeowner reviews with 5-star ratings, author photos, verified neighborhood tags (e.g. *Mark R., South Congress*, *Sarah T., Round Rock*), and details on response speed and repair quality.

### Section 13: Frequently Asked Questions (FAQ Accordion)
- Smooth animated accordion addressing common buyer concerns:
  1. *How fast can a plumber arrive at my house in Austin?*
  2. *Is there an extra charge for weekend or late-night emergency calls?*
  3. *How does your diagnostic fee waiver work?*
  4. *Are your plumbers licensed and background-checked?*
  5. *What payment methods do you accept on-site?*

### Section 14: Emergency Callout Banner & Footer
- **Bottom Callout:** Full-width urgent banner with high contrast Amber CTA: *"Got a Plumbing Emergency? Call Right Now for Immediate Dispatch."*
- **Footer:** Full business credentials, Texas State Plumbing Board regulatory disclosure, 24/7 hours of operation, service area list, privacy policy, and copyright.

### Section 15: Mobile Floating Action Bar (Mobile Only)
- **Viewport:** Displayed only on screens `< 768px`.
- **Behavior:** Fixed to bottom of screen with backdrop blur:
  - **Left Button (Amber):** `"📞 Call (512) 555-PIPE"` (Triggers phone dialer).
  - **Right Button (Dark Slate):** `"⚡ Free Quote"` (Scrolls to Wizard).

---

## 6. Responsiveness Matrix

| Component | Mobile (< 768px) | Tablet (768px - 1023px) | Desktop (1024px+) |
|---|---|---|---|
| **Top Emergency Bar** | Compact text + Call icon | Full response time & phone | Complete status, arrival, & direct dial |
| **Navbar** | Logo + Call Now button | Logo + Nav links + Call button | Logo + License pill + Full Nav + Call CTA |
| **Hero Section** | 1 Col stacked, 48px buttons | 1 Col centered, contained | 2 Col split (Copy left, Visual right) |
| **Coupon Cards** | Vertical stack (1 col) | 3 Col compact grid | 3 Col spacious grid with claim buttons |
| **Services Grid** | 1 Col swipeable/stacked | 2 Col (2x2 grid) | 4 Col horizontal cards |
| **Quote Wizard** | 100% width, large buttons | Centered max-w-xl | Centered max-w-2xl with side summaries |
| **Before & After** | 1 Col before/after cards | 3 Col cards | 3 Col cards with zoom hover effects |
| **Pricing Table** | Stacked price items | 2 Col price grid | 4 Col clean comparison matrix |
| **Floating Bottom Bar** | Visible & Sticky | Hidden | Hidden |

---

## 7. Verification & Acceptance Criteria

1. **Compilation & Build:** `npm run build` succeeds with zero TypeScript errors and generates static assets in `out/`.
2. **Zero Backend Runtime:** No active Node.js server required; all interactivity runs in the client browser.
3. **Responsive Testing:** Layout renders seamlessly on:
   - Mobile: 375px (iPhone SE), 390px (iPhone 14/15)
   - Tablet: 768px (iPad Mini), 820px (iPad Air)
   - Desktop: 1280px, 1440px+
4. **Interactive Validation:**
   - Multi-step wizard advances through Steps 1–4 smoothly.
   - ZIP code checker correctly verifies Austin ZIPs and alerts out-of-area codes.
   - Digital coupon buttons pre-select discounts in the quote wizard.
   - FAQ accordion expands/collapses with fluid animation.
   - All `tel:` links correctly trigger phone calls with `(512) 555-7473`.
