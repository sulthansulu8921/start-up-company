"use client";

import { useEffect } from "react";
import Hero from "@/components/sections/Hero";
import BusinessStats from "@/components/sections/BusinessStats";
import Services from "@/components/sections/Services";
import PricingSection from "@/components/sections/PricingSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ShowcaseSection from "@/components/sections/ShowcaseSection";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import Testimonials from "@/components/sections/Testimonials";
import BlogPreview from "@/components/sections/BlogPreview";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import StorytellingContainer from "@/components/StorytellingContainer";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

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

      {/* ── Content Sections ─────────────────────── */}
      <StorytellingContainer>
        <BusinessStats />
        <Services />
        <PricingSection />
        <WhyChooseUs />
        <ShowcaseSection />
        <ProcessTimeline />
        <Testimonials />
        <BlogPreview />
        
        {/* Sleek CTA banner for AI Visibility Check */}
        <section className="py-16 bg-purple-950/15 border-t border-b border-purple-500/10 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />
            <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                <div>
                    <h3 className="text-xl md:text-2xl font-black text-white mb-2 font-sora">Is Your Business Recommended by ChatGPT & Gemini?</h3>
                    <p className="text-white/60 text-sm font-inter">Find out if AI search engines are suggesting your website to customers. Run a free scan.</p>
                </div>
                <Link href="/services/aeo-geo-optimization" className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white text-xs font-black uppercase tracking-widest rounded-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3 shadow-lg shadow-purple-600/10 shrink-0">
                    Check AI Visibility <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </section>

        <FAQSection />
        <ContactSection />
      </StorytellingContainer>

      {/* Global Modals & Lead Gen */}
    </main>
  );
}
