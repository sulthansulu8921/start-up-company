"use client";

import { useEffect } from "react";
import Hero from "@/components/sections/Hero";
import BusinessStats from "@/components/sections/BusinessStats";
import Services from "@/components/sections/Services";
import PricingSection from "@/components/sections/PricingSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import Testimonials from "@/components/sections/Testimonials";
import BlogPreview from "@/components/sections/BlogPreview";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Zap } from "lucide-react";

import { sendInstantNotification } from "@/lib/notifications";

export default function Home() {
  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 });

  // Reset scroll on refresh and fire automated visitor alert
  useEffect(() => {
    // 1. Reset scroll
    window.scrollTo(0, 0);

    // 2. Automated Flash Notification for Owner
    sendInstantNotification("A new user just entered your website! 👀", "visit");
  }, []);

  return (
    <main className="relative bg-background">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[200] origin-left shadow-[0_0_10px_rgba(204,255,0,0.6)]"
        style={{
          scaleX,
          background: "var(--neon)",
        }}
      />

      <Hero />

      {/* ── Persistent Content Background ─────────────────────── */}
      <motion.div
        initial={{ scale: 1, x: 0, y: 0 }}
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 10, -10, 0],
          y: [0, -10, 10, 0]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="fixed inset-0 z-0 pointer-events-none bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: 'url("/background-content.png")',
          transform: 'translateZ(0)', // GPU acceleration
          opacity: useTransform(scrollY, [1000, 1500], [0, 0.6]) // Reveal as Hero finishes
        }}
      />
      {/* Global Dark Overlay */}
      <motion.div
        className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-black via-black/70 to-black opacity-80"
        style={{ opacity: useTransform(scrollY, [1000, 1500], [0, 0.8]) }}
      />

      {/* ── Content Sections ─────────────────────── */}
      <div className="relative z-30">
        <BusinessStats />
        <Services />
        <PricingSection />
        <WhyChooseUs />
        <ProcessTimeline />
        <Testimonials />
        <BlogPreview />
        <FAQSection />
        <ContactSection />
      </div>

      {/* Global Modals & Lead Gen */}
    </main>
  );
}
