import type { Metadata, Viewport } from "next";
import { SITE_CONFIG } from "@/config/site.config";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: `${SITE_CONFIG.business.name} | Emergency Plumber London - 24/7 Rapid Dispatch`,
  description:
    "London's premier 24/7 emergency & residential plumbing and heating engineers. Burst pipes, blocked drains, boiler repairs. 45-minute response, Gas Safe registered & insured.",
  metadataBase: new URL("https://apexplumbing.co.uk"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/images/apex-logo-icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/images/apex-logo-icon.svg",
    apple: "/images/apex-logo-icon.svg",
  },
  keywords: [
    "London Emergency Plumber",
    "24/7 Plumber London",
    "Burst Pipe Repair London",
    "Drain Unblocking London",
    "Boiler Repair London",
    "Gas Safe Registered Plumber",
    "Central Heating Engineers London",
    "CCTV Drain Survey London",
  ],
  authors: [{ name: SITE_CONFIG.business.name }],
  creator: SITE_CONFIG.business.name,
  publisher: SITE_CONFIG.business.name,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://apexplumbing.co.uk",
    siteName: SITE_CONFIG.business.name,
    title: `${SITE_CONFIG.business.name} | Emergency Plumber London - 24/7 Rapid Dispatch`,
    description:
      "London's premier 24/7 emergency & residential plumbing and heating engineers. Burst pipes, blocked drains, boiler repairs. 45-minute response, Gas Safe registered & insured.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.business.name} London Emergency Plumbing Service`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.business.name} | Emergency Plumber London - 24/7 Rapid Dispatch`,
    description:
      "London's premier 24/7 emergency & residential plumbing and heating engineers. Burst pipes, blocked drains, boiler repairs. 45-minute response, Gas Safe registered & insured.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1200&h=630&q=80",
      },
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
    "London's premier 24/7 emergency & residential plumbing and heating engineers. Burst pipes, blocked drains, boiler repairs. 45-minute response, Gas Safe registered & insured.",
  url: "https://apexplumbing.co.uk",
  telephone: SITE_CONFIG.business.phone,
  email: SITE_CONFIG.business.email,
  license: SITE_CONFIG.business.licenseNumber,
  priceRange: "££",
  image:
    "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1200&h=630&q=80",
  address: {
    "@type": "PostalAddress",
    streetAddress: "48 Baker Street",
    addressLocality: "London",
    addressRegion: "Greater London",
    postalCode: "W1U 7BB",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5194,
    longitude: -0.1585,
  },
  areaServed: SITE_CONFIG.serviceArea.neighborhoods.map((name) => ({
    "@type": "AdministrativeArea",
    name: `${name}, London`,
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
        priceCurrency: "GBP",
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
    <html lang="en-GB" className="scroll-smooth">
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
