"use client";

import { motion } from "framer-motion";
import { Code2, ChevronDown, CheckCircle2, TrendingUp, Star, Zap } from "lucide-react";
import Link from "next/link";
import HeroCarousel from "@/components/sections/HeroCarousel";

export default function Hero() {
    return (
        <section className="relative min-h-fit lg:min-h-[88vh] w-full bg-[#F8FAFC] flex items-center justify-center pt-24 lg:pt-28 pb-12 lg:pb-16 overflow-hidden z-10">
            {/* Dedicated High-Res Cyber Network Background Photo */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-10 z-0 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC]/95 via-[#F0F5FF]/90 to-[#F8FAFC]/95 z-0 pointer-events-none" />

            {/* Ambient Subtle Tech Grid & Light Blur Spheres */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(37,99,235,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,99,235,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] z-0 pointer-events-none" />
            <div className="absolute top-10 -left-20 w-96 h-96 bg-blue-500/10 blur-[130px] rounded-full pointer-events-none z-0" />
            <div className="absolute bottom-10 -right-20 w-96 h-96 bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none z-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sky-500/8 blur-[160px] rounded-full pointer-events-none z-0" />

            {/* Main Hero Container */}
            <div className="relative z-30 max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center justify-between gap-8 pt-2">

                {/* Left Column: Primary Headline & Hero Copy */}
                <div className="w-full lg:w-6/12 relative flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex flex-col items-start"
                    >
                        <h1 className="text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-black font-sora text-slate-900 leading-[1.05] tracking-tight uppercase mb-3 max-w-3xl">
                          BUILD DIGITAL PRODUCTS <br className="hidden md:block" /> THAT ACCELERATE YOUR <span className="bg-gradient-to-r from-[#2563EB] via-[#0284C7] to-[#06B6D4] bg-clip-text text-transparent">BUSINESS</span>
                        </h1>

                        <h2 className="text-xs sm:text-sm md:text-base font-bold text-slate-800 mb-2.5 flex items-center gap-1.5 sm:gap-2 flex-wrap">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB] inline-block animate-ping shrink-0" />
                          <span>Websites</span> • <span>Mobile Apps (iOS & Android)</span> • <span>AI Platforms</span> • <span>Business Software</span> • <span>Automation</span>
                        </h2>

                        <p className="text-slate-600 text-xs sm:text-sm md:text-base font-medium leading-relaxed max-w-xl mb-4">
                          We design and develop modern websites, iOS & Android mobile applications, custom AI platforms, business software, workflow automation, and digital growth solutions.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center gap-3">
                            <Link
                                href="/contact"
                                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#2563EB] via-[#0284C7] to-[#06B6D4] hover:from-[#1d4ed8] hover:to-[#0891b2] text-white font-extrabold text-xs uppercase tracking-widest shadow-lg shadow-blue-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
                            >
                                <Zap size={14} className="fill-current text-white" /> Start Your Project
                            </Link>
                            <Link
                                href="/services"
                                className="px-5 py-3 rounded-xl bg-white/80 hover:bg-white text-slate-700 font-bold text-xs uppercase tracking-wider border border-slate-200 shadow-sm hover:shadow transition-all duration-300"
                            >
                                Explore Services
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Hero Showcase Carousel */}
                <div className="w-full lg:w-6/12 relative z-30 pointer-events-auto">
                    <HeroCarousel />
                </div>

            </div>

            {/* High-Impact Animated Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2.5 group cursor-pointer"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
                <div className="relative flex flex-col items-center gap-1">
                    <div className="w-7 h-11 border-2 border-blue-300 rounded-full flex justify-center p-1.5 bg-white/60 backdrop-blur-md shadow-md shadow-blue-500/10">
                        <motion.div
                            animate={{
                                y: [0, 16, 0],
                                opacity: [1, 0.4, 1]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="w-1.5 h-2.5 bg-[#2563EB] rounded-full"
                        />
                    </div>
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ChevronDown size={20} className="text-[#2563EB]" strokeWidth={2.5} />
                    </motion.div>
                </div>

                <span className="text-[10px] font-black text-[#2563EB] uppercase tracking-[0.35em] bg-white/90 px-4 py-1 rounded-full border border-blue-100 shadow-sm backdrop-blur-md">
                    Explore Platform
                </span>
            </motion.div>
        </section>
    );
}
