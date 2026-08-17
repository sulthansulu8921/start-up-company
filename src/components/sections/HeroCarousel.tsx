"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X, ArrowUpRight, Sparkles, Layers, Cpu, Workflow, BarChart3 } from "lucide-react";
import Link from "next/link";

export interface ShowcaseProject {
  id: string;
  label: string;
  badge: string;
  title: string;
  desc: string;
  image: string;
  alt: string;
  link: string;
  tags: string[];
}

export const showcaseProjects: ShowcaseProject[] = [
  {
    id: "digital-products",
    label: "Digital Products",
    badge: "DIGITAL PRODUCTS",
    title: "Websites, Ecommerce & Custom Web Apps",
    desc: "Websites, ecommerce and custom digital experiences.",
    image: "/services-all-infographic.jpg",
    alt: "NanoRays custom web application and ecommerce interface",
    link: "/services/website-development",
    tags: ["Business Websites", "Ecommerce Platforms", "Dashboards"],
  },
  {
    id: "ai-platforms",
    label: "AI Platforms",
    badge: "AI PLATFORMS",
    title: "Intelligent Platforms & Autonomous AI Agents",
    desc: "Intelligent platforms, AI agents and business applications.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&q=80&w=1200",
    alt: "NanoRays AI platform dashboard and AI agent interface",
    link: "/services/ai-platform-development",
    tags: ["AI SaaS", "AI Agents", "Automated Workflows"],
  },
  {
    id: "business-software",
    label: "Software",
    badge: "BUSINESS SOFTWARE",
    title: "CRM, Management Systems & Dashboards",
    desc: "Custom systems built around the way your business works.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    alt: "NanoRays business software management dashboard",
    link: "/services/business-software",
    tags: ["CRM Systems", "Admin Controls", "Business Data"],
  },
  {
    id: "automation",
    label: "Automation",
    badge: "BUSINESS AUTOMATION",
    title: "Lead → AI Agent → CRM → Follow-up",
    desc: "Connected workflows that reduce repetitive work.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
    alt: "NanoRays automated workflow and CRM pipeline visual",
    link: "/services/business-automation",
    tags: ["Lead Capture", "Webhook Pipelines", "API Sync"],
  },
  {
    id: "digital-growth",
    label: "Growth",
    badge: "DIGITAL GROWTH",
    title: "Search Visibility & Performance Campaign Analytics",
    desc: "SEO, marketing and digital strategies built for growth.",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=1200",
    alt: "NanoRays digital growth analytics and search visibility dashboard",
    link: "/services/digital-marketing",
    tags: ["Search Visibility", "Campaign Analytics", "Conversion Tracking"],
  },
];

export default function HeroCarousel() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Check reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Autoplay functionality (4.5 seconds)
  useEffect(() => {
    if (isPaused || isZoomed) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % showcaseProjects.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, isZoomed]);

  const handleNext = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % showcaseProjects.length);
    setIsPaused(true);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIdx((prev) => (prev - 1 + showcaseProjects.length) % showcaseProjects.length);
    setIsPaused(true);
  }, []);

  // Keyboard Navigation Support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  // Touch Swipe Support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX.current - touchEndX;
    if (diffX > 40) handleNext();
    if (diffX < -40) handlePrev();
    touchStartX.current = null;
  };

  const item = showcaseProjects[activeIdx];

  return (
    <div
      className="relative w-full max-w-2xl xl:max-w-3xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="NanoRays Featured Work Showcase"
    >
      {/* Ambient Radial Blur */}
      <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 via-sky-500/15 to-purple-600/20 rounded-[2.5rem] blur-2xl pointer-events-none" />

      {/* Main Glassmorphism Showcase Card */}
      <div className="relative bg-white/95 backdrop-blur-2xl border border-slate-200/90 rounded-[2rem] p-4 sm:p-5 shadow-[0_25px_60px_-15px_rgba(37,99,235,0.14)] overflow-hidden">
        
        {/* Featured Work Header Badge */}
        <div className="flex items-center justify-between px-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-[10px] font-black uppercase tracking-[0.2em]">
              <Sparkles size={12} className="text-blue-600" />
              FEATURED WORK
            </span>
            <span className="text-xs text-slate-500 font-medium hidden sm:inline truncate max-w-xs">
              A glimpse of what we design, build and grow.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono font-bold text-slate-400">
              0{activeIdx + 1} / 0{showcaseProjects.length}
            </span>
            <button
              onClick={() => setIsZoomed(true)}
              className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors focus:ring-2 focus:ring-blue-500 focus:outline-none"
              aria-label="Expand reading view"
            >
              <Maximize2 size={13} />
            </button>
          </div>
        </div>

        {/* Browser Device Window Frame */}
        <div
          className="relative rounded-2xl overflow-hidden border border-slate-900/90 bg-slate-950 aspect-[16/9.5] group cursor-pointer shadow-inner"
          onClick={() => setIsZoomed(true)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top Browser Bar */}
          <div className="flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800 text-slate-400 text-xs">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/90 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90 inline-block" />
              <span className="ml-2 text-[10px] font-mono text-slate-400 hidden sm:inline">
                nanorays.com/showcase/{item.id}
              </span>
            </div>

            <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-black uppercase tracking-wider">
              {item.badge}
            </span>
          </div>

          {/* Dynamic Image Display with GPU Transition */}
          <div className="relative w-full h-[calc(100%-33px)] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={item.id}
                initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative w-full h-full"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  priority={activeIdx === 0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Hover Click-to-Zoom Hint */}
          <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
            <div className="px-4 py-2 rounded-full bg-white/95 backdrop-blur-md text-slate-900 text-xs font-bold flex items-center gap-2 shadow-2xl">
              <Maximize2 size={14} className="text-blue-600" /> Click to Expand Reading View
            </div>
          </div>
        </div>

        {/* Active Slide Description Banner */}
        <div className="mt-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest">{item.badge}</div>
            <div className="text-sm font-black text-slate-900 font-sora truncate">{item.title}</div>
            <p className="text-xs text-slate-600 font-medium truncate hidden sm:block">{item.desc}</p>
          </div>

          <Link
            href={item.link}
            className="px-3 py-2 rounded-xl bg-[#2563EB] hover:bg-[#1d4ed8] text-white text-xs font-bold shrink-0 flex items-center gap-1 transition-colors shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <span>Explore</span> <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Bottom Compact Navigation Tabs & Arrow Controls */}
        <div className="mt-3 flex items-center justify-between gap-2 pt-2 border-t border-slate-100">
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-1 max-w-full">
            {showcaseProjects.map((tab, idx) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveIdx(idx);
                  setIsPaused(true);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all duration-300 shrink-0 min-h-[38px] flex items-center ${
                  activeIdx === idx
                    ? "bg-[#2563EB] text-white shadow-md shadow-blue-500/20 scale-105"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
                aria-label={`Show ${tab.label}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1 shrink-0">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-xl bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-600 border border-slate-200 shadow-sm transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center focus:ring-2 focus:ring-blue-500 focus:outline-none"
              aria-label="Previous showcase slide"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-xl bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-600 border border-slate-200 shadow-sm transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center focus:ring-2 focus:ring-blue-500 focus:outline-none"
              aria-label="Next showcase slide"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

      </div>

      {/* Lightbox Full Zoom Modal */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl p-4 sm:p-8 flex flex-col items-center justify-center"
            onClick={() => setIsZoomed(false)}
          >
            <div
              className="relative w-full max-w-5xl bg-slate-900 border border-slate-800 rounded-3xl p-4 sm:p-6 overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                <div>
                  <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">{item.badge}</div>
                  <h3 className="text-lg font-black text-white font-sora">{item.title}</h3>
                </div>
                <button
                  onClick={() => setIsZoomed(false)}
                  className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-colors"
                  aria-label="Close reading view"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-950">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <p className="text-sm text-slate-300 font-medium">{item.desc}</p>
                <Link
                  href={item.link}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider transition-colors shrink-0 text-center"
                >
                  View Service Details
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
