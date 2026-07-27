"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Zap, Target, Sparkles, Shield, Cpu, Code } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const items = [
    {
        icon: Target,
        title: "AEO & GEO Search Optimization",
        desc: "Optimized for LLM query recommendation engines like ChatGPT, Claude, and Gemini to ensure your brand is suggested first.",
        tag: "INNOVATION",
        color: "text-purple-400 border-purple-400/20 bg-purple-950/10",
        glow: "rgba(168,85,247,0.15)",
    },
    {
        icon: Zap,
        title: "Elite Lighthouse Performance",
        desc: "Buttery smooth 60 FPS animations, lightweight production bundles, and instant LCP discovery scores (100/100).",
        tag: "SPEED",
        color: "text-neon border-neon/20 bg-neon/5",
        glow: "rgba(204,255,0,0.15)",
    },
    {
        icon: Sparkles,
        title: "Cinema-Grade UX Design",
        desc: "Premium dark-mode layouts, custom mouse glows, 3D tilt effects, and immersive typography inspired by Apple and Stripe.",
        tag: "CREATIVE",
        color: "text-sky-400 border-sky-400/20 bg-sky-950/10",
        glow: "rgba(56,189,248,0.15)",
    },
    {
        icon: Shield,
        title: "Enterprise Cybersecurity",
        desc: "Multi-layered corporate firewalls, static HTML generation, and edge-routed cloud deployments to safeguard brand integrity.",
        tag: "SECURITY",
        color: "text-emerald-400 border-emerald-400/20 bg-emerald-950/10",
        glow: "rgba(52,211,153,0.15)",
    }
];

export default function ShowcaseSection() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: scrollRef,
    });

    // Map scroll progress to horizontal translation (from 0% to -60%)
    const xTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

    // Before/After Slider state
    const [sliderX, setSliderX] = useState(50);
    const sliderRef = useRef<HTMLDivElement>(null);

    const handleSliderMove = (clientX: number) => {
        if (!sliderRef.current) return;
        const rect = sliderRef.current.getBoundingClientRect();
        const percent = ((clientX - rect.left) / rect.width) * 100;
        setSliderX(Math.max(0, Math.min(100, percent)));
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        handleSliderMove(e.clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (e.touches[0]) {
            handleSliderMove(e.touches[0].clientX);
        }
    };

    return (
        <section className="relative">
            {/* ── 1. Horizontal Scroll Section ── */}
            <div ref={scrollRef} className="h-[300vh] relative bg-transparent">
                <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
                    {/* Header */}
                    <div className="max-w-7xl mx-auto px-6 w-full mb-12 relative z-10">
                        <ScrollReveal variant="fade-up">
                            <span className="inline-flex px-3 py-1.5 rounded-lg bg-white/5 border border-white/20 text-neon text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                                Engineering Matrix
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black font-sora text-white tracking-tighter leading-tight">
                                High-Tech <span className="text-neon">Capabilities</span>
                            </h2>
                        </ScrollReveal>
                    </div>

                    {/* Horizontal moving row */}
                    <div className="relative flex items-center w-full">
                        <motion.div
                            style={{ x: xTransform }}
                            className="flex gap-8 px-6 md:px-24 will-change-transform"
                        >
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    className="w-[85vw] md:w-[450px] shrink-0 p-8 md:p-10 rounded-3xl glass-dark border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden group"
                                    style={{
                                        boxShadow: `0 20px 40px -15px ${item.glow}`,
                                    }}
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] rounded-bl-full pointer-events-none" />
                                    
                                    <div className="flex items-center justify-between mb-8">
                                        <div className={`w-14 h-14 rounded-2xl ${item.color} border flex items-center justify-center`}>
                                            <item.icon size={28} />
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                                            {item.tag}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-black text-white font-sora mb-4 group-hover:text-neon transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/70 text-sm md:text-base font-bold leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}

                            {/* Ending Card (Call to Action) */}
                            <div className="w-[85vw] md:w-[400px] shrink-0 p-10 rounded-3xl bg-neon text-black flex flex-col justify-between relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent animate-pulse-neon pointer-events-none" />
                                <div>
                                    <Code size={40} className="mb-8" />
                                    <h3 className="text-3xl font-black font-sora mb-4 tracking-tighter leading-none">
                                        Let&apos;s Build Your Masterpiece
                                    </h3>
                                    <p className="font-black text-sm opacity-80">
                                        Configure your project dashboard with our expert architects.
                                    </p>
                                </div>
                                <button className="mt-8 px-6 py-4 bg-black text-white font-black text-xs uppercase tracking-widest rounded-xl hover:scale-105 transition-transform">
                                    Book Consult
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* ── 2. Before / After Performance Comparison Slider ── */}
            <div className="py-32 relative bg-transparent overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                <div className="max-w-5xl mx-auto px-6 relative z-10">
                    
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <ScrollReveal variant="fade-up">
                            <span className="inline-flex px-3 py-1.5 rounded-lg bg-white/5 border border-white/20 text-sky-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                                Optimization Engine
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black font-sora text-white mb-6 tracking-tighter">
                                The Speed <span className="text-neon">Difference</span>
                            </h2>
                            <p className="text-white/60 font-bold">
                                Slide to see the transformation from a legacy slow website to our highly-optimized, premium glassmorphic system.
                            </p>
                        </ScrollReveal>
                    </div>

                    {/* Interactive Slider Container */}
                    <ScrollReveal variant="zoom-in" className="relative w-full aspect-[16/10] md:aspect-[16/9] rounded-3xl border border-white/10 overflow-hidden shadow-2xl select-none cursor-ew-resize">
                        <div
                            ref={sliderRef}
                            onMouseMove={handleMouseMove}
                            onTouchMove={handleTouchMove}
                            className="relative w-full h-full"
                        >
                            {/* BEFORE Side (Left/Background) */}
                            <div className="absolute inset-0 bg-red-950/20 flex flex-col justify-center p-8 md:p-16 border-r border-red-500/20">
                                <div className="absolute top-6 left-6 px-4 py-1.5 rounded-lg bg-red-500/20 border border-red-500/30 text-red-400 text-[10px] font-black uppercase tracking-widest">
                                    Legacy Slow Website (Before)
                                </div>
                                <div className="max-w-md space-y-6 opacity-40">
                                    <div className="text-5xl md:text-7xl font-black text-red-500 font-sora">32%</div>
                                    <h3 className="text-2xl md:text-3xl font-black text-white">Forced Reflows & Bloat</h3>
                                    <p className="text-white/50 text-sm font-bold leading-relaxed">
                                        Legacy plugins, uncompressed assets, synchronous scroll handlers blocking the thread, and poor layout rendering causing slow Largest Contentful Paint (LCP) speeds.
                                    </p>
                                </div>
                            </div>

                            {/* AFTER Side (Right/Foreground - Clipped) */}
                            <div
                                style={{ clipPath: `polygon(${sliderX}% 0, 100% 0, 100% 100%, ${sliderX}% 100%)` }}
                                className="absolute inset-0 bg-[#07090e] flex flex-col justify-center p-8 md:p-16"
                            >
                                <div className="absolute top-6 right-6 px-4 py-1.5 rounded-lg bg-neon/10 border border-neon/30 text-neon text-[10px] font-black uppercase tracking-widest">
                                    NanoRays Optimized (After)
                                </div>
                                <div className="max-w-md space-y-6 ml-auto text-right">
                                    <div className="text-5xl md:text-7xl font-black text-neon font-sora drop-shadow-[0_0_20px_rgba(204,255,0,0.4)]">99%</div>
                                    <h3 className="text-2xl md:text-3xl font-black text-white font-sora">100/100 Core Web Vitals</h3>
                                    <p className="text-white/70 text-sm font-bold leading-relaxed">
                                        Asynchronous rendering, Lenis smooth scrolling, CSS hardware-accelerated animations, IntersectionObservers preventing layout shifts, and high-performance WebP LCP preloading.
                                    </p>
                                </div>
                            </div>

                            {/* Slider Handle Line */}
                            <div
                                style={{ left: `${sliderX}%` }}
                                className="absolute top-0 bottom-0 w-[2px] bg-neon z-30 pointer-events-none shadow-[0_0_10px_#CCFF00]"
                            >
                                {/* Slider Button Handle */}
                                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-black border-2 border-neon flex items-center justify-center shadow-lg shadow-black/80">
                                    <div className="flex gap-1">
                                        <div className="w-1 h-3 bg-neon rounded-full" />
                                        <div className="w-1 h-3 bg-neon rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
