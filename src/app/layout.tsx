import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import MouseGlow from "@/components/MouseGlow";
import BackgroundAnimation from "@/components/BackgroundAnimation";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "NanoRays Solution | Best Digital Agency for Startups in India & Kerala",
    template: "%s | NanoRays Solution",
  },
  description: "NanoRays Solution — Best Digital Agency for Startups in India. Affordable SEO services in Kerala, modern UI/UX design, high-performance website development & digital marketing. Rank #1 on Google. Call: +91 89216 24007.",
  authors: [{ name: "NanoRays Solution", url: "https://nanorayssolution.com" }],
  creator: "NanoRays Solution",
  publisher: "NanoRays Solution",
  metadataBase: new URL("https://nanorayssolution.com"),
  alternates: {
    canonical: "https://nanorayssolution.com",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://nanorayssolution.com",
    title: "NanoRays Solution | Website Design, SEO & Digital Marketing in India",
    description: "Professional website design, SEO, digital marketing, branding & poster design for businesses in India. Get a free consultation today! Call: +91 89216 24007.",
    siteName: "NanoRays Solution",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NanoRays Solution - Professional Digital Agency in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NanoRays Solution | Website Design & SEO India",
    description: "Professional website design, SEO, and digital marketing for businesses in India. Free consultation: +91 89216 24007.",
    creator: "@nanorays_",
    images: ["/og-image.png"],
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
  verification: {
    google: "add-your-google-search-console-verification-code-here",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: ["/icon.png"],
    apple: [
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/icon.png",
      },
    ],
  },
  category: "Digital Agency",
};

import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/sections/WhatsAppButton";
import AIChatbot from "@/components/AIChatbot";

import GoogleAnalytics from "@/components/GoogleAnalytics";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // ... (jsonLd remains the same)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "NanoRays Solution",
    "image": "https://nanorayssolution.com/logo-main.jpg",
    "description": "Premium digital agency in India providing website development, SEO, digital marketing, branding, and poster design services.",
    "url": "https://nanorayssolution.com",
    "telephone": "+918921624007",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "India Wide Services",
      "addressLocality": "India",
      "addressRegion": "Kerala",
      "postalCode": "682001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 10.8505,
      "longitude": 76.2711
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "21:00"
    },
    "sameAs": [
      "https://facebook.com/nanorayssolution",
      "https://instagram.com/nanorayssolution"
    ],
    "priceRange": "₹₹"
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <GoogleAnalytics GA_MEASUREMENT_ID="G-TBFYS7QYSM" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${sora.variable} ${inter.variable} antialiased bg-background text-foreground selection:bg-neon/30 selection:text-white`}
      >
        <Preloader />
        <SmoothScroll>
          <BackgroundAnimation />
          <MouseGlow />
          <Navbar />
          {children}
          <AIChatbot />
          <WhatsAppButton />
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
