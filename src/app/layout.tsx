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
    default: "NanoRays Solution | Website Design, SEO & Digital Marketing in India",
    template: "%s | NanoRays Solution",
  },
  description: "NanoRays Solution is a professional digital agency in India offering website design, SEO optimization, digital marketing, logo design, poster design, and website maintenance. Get your business found on Google. Call: +91 89216 24007.",
  keywords: [
    // Core services
    "website design India", "website development India", "affordable website design",
    "SEO optimization India", "Google ranking India", "local SEO India",
    "digital marketing India", "social media marketing India", "Instagram marketing",
    "Facebook marketing", "Google Ads India", "logo design India",
    "branding services India", "poster design India", "festival poster design",
    "website maintenance India", "mobile responsive website",
    // Location-based
    "web design agency India", "digital agency India", "best digital agency India",
    "cheap website design India", "small business website India",
    // Brand
    "NanoRays", "NanoRays Solution", "NanoRays digital agency",
    // Problem-solving keywords
    "get website for business", "rank on first page Google", "increase website traffic",
    "get more customers online", "online business presence", "business website India",
    "e-commerce website India", "restaurant website India", "startup website India",
    "professional website design", "SEO services India", "website redesign India",
  ],
  authors: [{ name: "NanoRays Solution", url: "https://nanorays.in" }],
  creator: "NanoRays Solution",
  publisher: "NanoRays Solution",
  metadataBase: new URL("https://nanorays.in"),
  alternates: {
    canonical: "https://nanorays.in",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://nanorays.in",
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
  category: "Digital Agency",
};

import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/sections/WhatsAppButton";
import AIChatbot from "@/components/AIChatbot";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // ... (jsonLd remains the same)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "NanoRays Solution",
    "description": "Premium software agency providing web development, digital marketing, and branding services.",
    "url": "https://nanorays.com",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
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
