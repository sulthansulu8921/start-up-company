"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Zap, Target, Sparkles, Shield, Cpu, Code } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const items = [
    {
        icon: Target,
        title: "AEO & GEO Search Optimization",
        desc: "Optimized for LLM query recommendation engines like ChatGPT, Claude, and Gemini to ensure your brand is suggested first.",
        tag: "INNOVATION",
        color: "text-purple-600 border-purple-100 bg-purple-50",
        glow: "rgba(147,51,234,0.08)",
    },
    {
        icon: Zap,
        title: "Elite Lighthouse Performance",
        desc: "Buttery smooth 60 FPS animations, lightweight production bundles, and instant LCP discovery scores (100/100).",
        tag: "SPEED",
        color: "text-indigo-600 border-indigo-100 bg-indigo-50",
        glow: "rgba(79,70,229,0.08)",
    },
    {
        icon: Sparkles,
        title: "Cinema-Grade UX Design",
        desc: "Premium modern light-mode layouts, custom mouse glows, 3D tilt effects, and immersive typography inspired by Apple and Stripe.",
        tag: "CREATIVE",
        color: "text-sky-600 border-sky-100 bg-sky-50",
        glow: "rgba(2,132,199,0.08)",
    },
    {
        icon: Shield,
        title: "Enterprise Cybersecurity",
        desc: "Multi-layered corporate firewalls, static HTML generation, and edge-routed cloud deployments to safeguard brand integrity.",
        tag: "SECURITY",
        color: "text-emerald-600 border-emerald-100 bg-emerald-50",
        glow: "rgba(5,150,105,0.08)",
    }
];

export default function ShowcaseSection() {
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
        <motion.section
            initial={{ opacity: 0.9, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="py-20 relative overflow-hidden bg-[#F1F5F9] text-slate-900 rounded-t-[3rem] md:rounded-t-[4rem] shadow-[0_-25px_60px_rgba(0,0,0,0.06)] border-t border-slate-200/90 z-40"
        >
            {/* Dedicated High-Res Cyber Mesh Matrix Photo Background */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#F1F5F9]/96 via-[#E2E8F0]/90 to-[#F1F5F9]/96 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-24">
                {/* ── 1. Capabilities Matrix Grid ── */}
                <div>
                    {/* Header */}
                    <div className="mb-12">
                        <ScrollReveal variant="fade-up">
                            <span className="inline-flex px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-[10px] font-black uppercase tracking-[0.25em] mb-4 shadow-sm">
                                Engineering Matrix
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black font-sora text-slate-900 tracking-tight leading-tight mb-4">
                                High-Tech <span className="bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">Capabilities</span>
                            </h2>
                        </ScrollReveal>
                    </div>

                    {/* Capabilities Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <div className={`w-12 h-12 rounded-2xl ${item.color} border flex items-center justify-center`}>
                                        <item.icon size={22} />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                                        {item.tag}
                                    </span>
                                </div>

                                <h3 className="text-xl font-black text-slate-900 font-sora mb-3 group-hover:text-blue-600 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-slate-600 text-xs md:text-sm font-medium leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── 2. Before / After Performance Comparison Slider ── */}
                <div>
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <ScrollReveal variant="fade-up">
                            <span className="inline-flex px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-[10px] font-black uppercase tracking-[0.25em] mb-4 shadow-sm">
                                Optimization Engine
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black font-sora text-slate-900 mb-4 tracking-tight">
                                The Speed <span className="bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">Difference</span>
                            </h2>
                            <p className="text-slate-600 font-medium text-sm md:text-base">
                                Slide to see the transformation from a legacy slow website to our highly-optimized, premium executive design system.
                            </p>
                        </ScrollReveal>
                    </div>

                    {/* Interactive Slider Container */}
                    <ScrollReveal variant="zoom-in" className="relative w-full aspect-[16/10] md:aspect-[16/9] max-w-4xl mx-auto rounded-3xl border border-slate-200 overflow-hidden shadow-xl select-none cursor-ew-resize">
                        <div
                            ref={sliderRef}
                            onMouseMove={handleMouseMove}
                            onTouchMove={handleTouchMove}
                            className="relative w-full h-full"
                        >
                            {/* BEFORE Side (Left/Background) */}
                            <div className="absolute inset-0 bg-red-950/60 flex flex-col justify-center p-8 md:p-16 border-r border-red-800">
                                <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-red-900/60 border border-red-500/40 text-red-300 text-[10px] font-black uppercase tracking-widest">
                                    Legacy Slow Website (Before)
                                </div>
                                <div className="max-w-md space-y-4">
                                    <div className="text-5xl md:text-7xl font-black text-red-400 font-sora">32%</div>
                                    <h3 className="text-2xl md:text-3xl font-black text-white">Forced Reflows & Bloat</h3>
                                    <p className="text-slate-300 text-sm font-medium leading-relaxed">
                                        Legacy plugins, uncompressed assets, synchronous scroll handlers blocking the thread, and poor layout rendering causing slow Largest Contentful Paint (LCP) speeds.
                                    </p>
                                </div>
                            </div>

                            {/* AFTER Side (Right/Foreground - Clipped) */}
                            <div
                                style={{ clipPath: `polygon(${sliderX}% 0, 100% 0, 100% 100%, ${sliderX}% 100%)` }}
                                className="absolute inset-0 bg-slate-900 flex flex-col justify-center p-8 md:p-16"
                            >
                                <div className="absolute top-6 right-6 px-4 py-1.5 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 text-[10px] font-black uppercase tracking-widest">
                                    NanoRays Optimized (After)
                                </div>
                                <div className="max-w-md space-y-4 ml-auto text-right">
                                    <div className="text-5xl md:text-7xl font-black text-emerald-400 font-sora">99%</div>
                                    <h3 className="text-2xl md:text-3xl font-black text-white">100/100 Core Web Vitals</h3>
                                    <p className="text-slate-300 text-sm font-medium leading-relaxed">
                                        Asynchronous rendering, Lenis smooth scrolling, CSS hardware-accelerated animations, IntersectionObservers preventing layout shifts, and high-performance WebP LCP preloading.
                                    </p>
                                </div>
                            </div>

                            {/* Slider Handle Line */}
                            <div
                                style={{ left: `${sliderX}%` }}
                                className="absolute top-0 bottom-0 w-[2px] bg-cyan-400 z-30 pointer-events-none shadow-md"
                            >
                                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center shadow-lg">
                                    <div className="flex gap-1">
                                        <div className="w-1 h-3 bg-cyan-400 rounded-full" />
                                        <div className="w-1 h-3 bg-cyan-400 rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </motion.section>
    );
}
