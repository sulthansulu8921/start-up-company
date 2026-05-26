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
    default: "NanoRays Solution | Professional Website Development & Digital Marketing Agency",
    template: "%s | NanoRays Solution",
  },
  description: "NanoRays Solution is a premier digital agency specializing in premium website development, SEO, and strategic digital marketing. We help businesses in Kerala, Dubai, and across India achieve high-performance growth through innovative digital solutions.",
  keywords: [
    "NanoRays Solution", "Nanorays Solution", "Nanorays", "NanoRays", "Nanorays Solutions",
    "Digital Marketing Agency Kerala", "Website Development Company Kochi", "SEO Experts India",
    "Professional Web Design Kerala", "Ecommerce Development Kochi", "Branding Agency Dubai",
    "Google Ranking Services Kerala", "Business Growth Solutions India"
  ],
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
    title: "NanoRays Solution | Performance-Driven Digital Agency",
    description: "Expert website development, SEO, and digital marketing services to scale your business. Trusted by companies in India and UAE. Get a free audit today!",
    siteName: "NanoRays Solution",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NanoRays Solution - Premium Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NanoRays Solution | High-Performance Digital Solutions",
    description: "Scale your business with Kerala's leading digital agency. Website Design, SEO, & Marketing.",
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
  icon: "/favicon.ico",
  shortcut: "/favicon.ico",
  apple: "/icon.png",
},
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
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "NanoRays Solution",
      "alternateName": "Nano Rays",
      "url": "https://nanorayssolution.com",
      "logo": "https://nanorayssolution.com/logo-main.jpg",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-89216-24007",
        "contactType": "customer service",
        "areaServed": ["IN", "AE"],
        "availableLanguage": ["en", "ml"]
      },
      "sameAs": [
        "https://facebook.com/nanorayssolution",
        "https://instagram.com/nanorays_"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "NanoRays Solution",
      "url": "https://nanorayssolution.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://nanorayssolution.com/blog?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ];

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
// deployment bump Wed May 20 22:45:48 IST 2026
