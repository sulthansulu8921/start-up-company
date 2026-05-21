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
    default: "Nanorays Solution – Professional Website Development & Digital Marketing Company in Kerala",
    template: "%s | NanoRays Solution",
  },
  description: "Nanorays Solution provides professional website development, digital marketing, branding, SEO, poster designing, and business growth services in Kerala, Dubai, and across India.",
  keywords: [
    "nanorays", "Nanorays", "Solution", "Solutions", "Nanorays Solution", "Nanorays Solutions", "Nanorays solution", "Nanorays solutions",
    "Nanorays web design", "web designer", "Website developer", "Website designer", "Nanorays digital marketing", "Nanorays website development", "Nanorays SEO services",
    "website development company Kerala", "web design company Kochi", "affordable website design India", "business website development", "responsive website design",
    "ecommerce website development", "WordPress website developer", "custom website design services", "professional web development company", "startup website design",
    "SEO services Kerala", "digital marketing agency Kochi", "Google ranking services", "local SEO expert", "social media marketing services", "Instagram marketing agency",
    "Google Business Profile optimization", "online marketing company Kerala", "search engine optimization services", "branding and marketing solutions",
    "best web design company in Kochi", "website developers near me", "Kerala web development agency", "web designer Calicut", "digital marketing company Kerala",
    "website design services in Kerala", "web development company Malappuram", "affordable SEO services Kochi",
    "affordable business website package", "mobile responsive website design", "SEO optimized website development", "website with free domain and hosting",
    "website design with WhatsApp integration", "professional company website creation", "ecommerce website with admin panel", "small business website solutions",
    "hire website developer Kerala", "create business website online", "best website package for startup", "professional website for business",
    "improve Google ranking for business", "website and SEO package Kerala",
    "#NanoraysSolution", "#WebDesignKerala", "#DigitalMarketingKerala", "#WebsiteDevelopment", "#SEOKerala", "#BusinessWebsite", "#KeralaBusiness", "#WebsiteDesigner", "#OnlineBusiness", "#StartupKerala",
    "Website Development Company Kerala", "Web Design Company Kerala", "Best Website Development Company in Kerala",
    "Digital Marketing Company Kerala", "Professional Website Design Services", "Ecommerce Website Development Kerala",
    "Responsive Website Design Company", "Business Website Development India", "Website Development Company Dubai",
    "SEO Services Kerala", "Google Business Profile Setup", "Affordable Website Packages Kerala",
    "Small Business Website Development", "Website and Digital Marketing Services", "Branding and Poster Design Services",
    "Website Development Company Kochi", "Web Designer in Kerala", "Best Web Agency Calicut", "Kerala Digital Marketing Service",
    "Affordable Website Design Kochi", "Google SEO Services Kerala", "Web Design Services UAE", "Digital Marketing Agency Dubai",
    "Business Website Design Dubai", "SEO Company UAE", "Professional Web Development Services", "Modern Business Website Design",
    "Startup Website Development", "International Web Design Agency", "Global Digital Marketing Services",
    "Affordable Website Design Kerala", "Small Business Website Kerala", "Startup Website Package India", "WhatsApp Integrated Website",
    "Mobile Responsive Website Kerala", "Website with SEO Setup Kerala", "Local Business Website Dubai", "Website Maintenance Service Kerala",
    "Online Store Development India", "Shopify Alternative Website Kerala", "Social Media Poster Design Kerala",
    "Festival Poster Design Service", "Branding Design Company Kerala", "Instagram Promotion Design"
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
// deployment bump Wed May 20 22:45:48 IST 2026
