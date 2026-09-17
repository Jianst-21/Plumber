import type { Metadata, Viewport } from "next";
import { SITE_CONFIG } from "@/config/site.config";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: `${SITE_CONFIG.business.name} | Emergency Plumber Austin TX - 24/7 Rapid Dispatch`,
  description:
    "Austin's #1 Emergency & Residential Plumbing Contractor. Burst pipes, drain clogs, water heaters. 45-minute response, upfront pricing, licensed & insured.",
  metadataBase: new URL("https://apexflowplumbing.com"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Austin Emergency Plumber",
    "24/7 Plumber Austin TX",
    "Burst Pipe Repair Austin",
    "Drain Cleaning Austin",
    "Hydro-Jetting Austin",
    "Water Heater Replacement Austin",
    "Licensed Texas Plumber",
    "Slab Leak Detection Austin",
  ],
  authors: [{ name: SITE_CONFIG.business.name }],
  creator: SITE_CONFIG.business.name,
  publisher: SITE_CONFIG.business.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://apexflowplumbing.com",
    siteName: SITE_CONFIG.business.name,
    title: `${SITE_CONFIG.business.name} | Emergency Plumber Austin TX - 24/7 Rapid Dispatch`,
    description:
      "Austin's #1 Emergency & Residential Plumbing Contractor. Burst pipes, drain clogs, water heaters. 45-minute response, upfront pricing, licensed & insured.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.business.name} Austin Emergency Plumbing Service`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.business.name} | Emergency Plumber Austin TX - 24/7 Rapid Dispatch`,
    description:
      "Austin's #1 Emergency & Residential Plumbing Contractor. Burst pipes, drain clogs, water heaters. 45-minute response, upfront pricing, licensed & insured.",
    images: [
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1200&h=630&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const plumbingServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": ["PlumbingService", "LocalBusiness"],
  name: SITE_CONFIG.business.name,
  legalName: SITE_CONFIG.business.name,
  description:
    "Austin's #1 Emergency & Residential Plumbing Contractor. Burst pipes, drain clogs, water heaters. 45-minute response, upfront pricing, licensed & insured.",
  url: "https://apexflowplumbing.com",
  telephone: SITE_CONFIG.business.phone,
  email: SITE_CONFIG.business.email,
  license: SITE_CONFIG.business.licenseNumber,
  priceRange: "$$",
  image:
    "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1200&h=630&q=80",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1021 E 7th St",
    addressLocality: SITE_CONFIG.business.city,
    addressRegion: SITE_CONFIG.business.state,
    postalCode: "78702",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 30.2647,
    longitude: -97.7314,
  },
  areaServed: SITE_CONFIG.serviceArea.neighborhoods.map((name) => ({
    "@type": "AdministrativeArea",
    name: `${name}, TX`,
  })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Emergency and Residential Plumbing Services",
    itemListElement: SITE_CONFIG.services.map((service, index) => ({
      "@type": "Offer",
      position: index + 1,
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.shortDesc,
      },
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        price: service.startingPrice,
      },
    })),
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "184",
    bestRating: "5",
    worstRating: "1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(plumbingServiceJsonLd),
          }}
        />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-amber-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
