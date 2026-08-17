"use client";

import { useEffect } from "react";
import Hero from "@/components/sections/Hero";
import BusinessStats from "@/components/sections/BusinessStats";
import Services from "@/components/sections/Services";
import AIPlatformSpotlight from "@/components/sections/AIPlatformSpotlight";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ShowcaseSection from "@/components/sections/ShowcaseSection";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import PricingSection from "@/components/sections/PricingSection";
import Testimonials from "@/components/sections/Testimonials";
import BlogPreview from "@/components/sections/BlogPreview";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import StackSection from "@/components/StackSection";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { sendInstantNotification } from "@/lib/notifications";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
    sendInstantNotification("A new user just entered your website! 👀", "visit");
  }, []);

  return (
    <main className="relative bg-background">
      {/* Hero stays normal — not stacked */}
      <Hero />

      {/* ── Stacked Scroll Sections ───────────────────────────── */}
      <StackSection index={0}><BusinessStats /></StackSection>
      <StackSection index={1}><Services /></StackSection>
      <StackSection index={2}><AIPlatformSpotlight /></StackSection>
      <StackSection index={3}><WhyChooseUs /></StackSection>
      <StackSection index={4}><ShowcaseSection /></StackSection>
      <StackSection index={5}><ProcessTimeline /></StackSection>
      <StackSection index={6}><PricingSection /></StackSection>
      <StackSection index={7}><Testimonials /></StackSection>
      <StackSection index={8}><BlogPreview /></StackSection>

      {/* CTA Banner */}
      <StackSection index={9}>
        <section className="py-16 bg-[#FAFBFF] border-t border-b border-blue-200/80 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/5 to-purple-500/10 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />
          <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-2 font-sora">Is Your Business Recommended by ChatGPT & Gemini?</h3>
              <p className="text-slate-600 text-sm font-medium">Find out if AI search engines are suggesting your website to customers. Run a free scan.</p>
            </div>
            <Link href="/services/aeo-geo-optimization" className="px-8 py-4 bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED] hover:from-[#1d4ed8] hover:to-[#6d28d9] text-white text-xs font-black uppercase tracking-widest rounded-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3 shadow-lg shadow-blue-500/25 shrink-0">
              Check AI Visibility <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </StackSection>

      <StackSection index={10}><FAQSection /></StackSection>
      <StackSection index={11}><ContactSection /></StackSection>
    </main>
  );
}
