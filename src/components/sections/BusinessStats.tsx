"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import {
    Rocket, Handshake, BarChart3, ShieldCheck, Zap,
    ChevronRight, Activity, Cpu, Heart, Lightbulb
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
    {
        id: "projects",
        icon: Rocket,
        number: 300,
        suffix: "+",
        label: "PROJECTS COMPLETED",
        desc: "High-quality digital solutions delivered worldwide.",
        color: "from-neon/20 to-transparent",
        accent: "text-neon",
        delay: 0.1
    },
    {
        id: "ideas",
        icon: Lightbulb,
        number: 100,
        suffix: "+",
        label: "CREATIVE IDEAS",
        desc: "Trusted alliances with industry-leading companies.",
        color: "from-sky-500/20 to-transparent",
        accent: "text-sky-400",
        delay: 0.2
    },
    {
        id: "satisfaction",
        icon: Heart,
        number: 99,
        suffix: "%",
        label: "CLIENT SATISFACTION",
        desc: "Consistently exceeding expectations with every delivery.",
        color: "from-purple-500/20 to-transparent",
        accent: "text-purple-400",
        delay: 0.3
    },
    {
        id: "support",
        icon: ShieldCheck,
        number: 24,
        suffix: "/7",
        label: "SUPPORT AVAILABILITY",
        desc: "Mission-critical uptime and technical assistance.",
        color: "from-emerald-500/20 to-transparent",
        accent: "text-emerald-400",
        delay: 0.4
    }
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const spring = useSpring(0, { stiffness: 40, damping: 20 });
    const displayValue = useTransform(spring, (latest) => Math.floor(latest));

    useEffect(() => {
        if (inView) {
            spring.set(value);
        }
    }, [inView, spring, value]);

    return (
        <span ref={ref} className="font-black tabular-nums">
            <motion.span>{displayValue}</motion.span>
            {suffix}
        </span>
    );
}

export default function BusinessStats() {
    return (
        <section className="relative py-32 overflow-hidden bg-transparent">
            {/* ── Background Elements ────────────────────────────────────── */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-neon/10 blur-[160px] opacity-20 rounded-full" />
                <div className="absolute inset-0 cyber-grid opacity-[0.03]" />

                {/* Floating Particles Simulation */}
                {[
                    { top: "15%", left: "20%", delay: 0, duration: 6, xOffset: 10 },
                    { top: "65%", left: "80%", delay: 1, duration: 7, xOffset: -10 },
                    { top: "35%", left: "90%", delay: 2, duration: 8, xOffset: 15 },
                    { top: "85%", left: "15%", delay: 3, duration: 5, xOffset: -15 },
                    { top: "45%", left: "40%", delay: 1.5, duration: 9, xOffset: 8 },
                    { top: "10%", left: "60%", delay: 2.5, duration: 6, xOffset: -8 },
                ].map((p, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, -40, 0],
                            x: [0, p.xOffset, 0],
                            opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                            duration: p.duration,
                            repeat: Infinity,
                            delay: p.delay,
                        }}
                        className="absolute w-1 h-1 bg-neon rounded-full"
                        style={{
                            top: p.top,
                            left: p.left,
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header Area */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white/60 text-[10px] font-black uppercase tracking-[0.3em] mb-6"
                        >
                            <Cpu size={12} className="text-neon" />
                            Data Integration / v2.0
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-black font-sora text-white leading-tight tracking-tighter"
                        >
                            The <span className="text-neon">Metric</span> of <br className="hidden md:block" /> Excellence
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center gap-4 text-white/40 text-sm font-bold border-l border-white/10 pl-6 md:pl-8 z-20 relative bg-black/20 backdrop-blur-sm rounded-r-lg"
                    >
                        Real-time tracking of <br /> our global growth matrix.
                        <Activity size={24} className="text-neon/40 animate-pulse" />
                    </motion.div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: stat.delay, duration: 0.6 }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className="group relative"
                        >
                            {/* Card Glow Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-2xl`} />

                            <div className="relative h-full glass-dark border border-white/10 p-8 rounded-3xl flex flex-col justify-between overflow-hidden group-hover:border-neon/30 transition-all duration-500">
                                {/* Holographic Scan Effect */}
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-neon/20 shadow-[0_0_10px_rgba(204,255,0,0.5)] translate-y-[-100%] group-hover:animate-scan pointer-events-none" />

                                <div>
                                    <div className="flex items-center justify-between mb-8">
                                        <div className={`w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-6 duration-500`}>
                                            <stat.icon size={24} className={stat.accent} />
                                        </div>
                                        <ChevronRight size={14} className="text-white/20 group-hover:text-neon transition-colors" />
                                    </div>

                                    <div className="text-xl md:text-xl font-black font-sora text-white/60 uppercase tracking-widest mb-2 group-hover:text-white transition-colors duration-500">
                                        {stat.label}
                                    </div>
                                    <div className="text-4xl xl:text-5xl font-black text-white mb-6 font-sora tracking-tighter">
                                        <Counter value={stat.number} suffix={stat.suffix} />
                                    </div>
                                </div>

                                <p className="text-white/40 text-xs font-bold leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                                    {stat.desc}
                                </p>

                                {/* Decorative Elements */}
                                <div className="absolute bottom-[-10px] right-[-10px] opacity-10 group-hover:opacity-20 transition-opacity">
                                    <stat.icon size={80} className={stat.accent} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Glow Label */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="mt-16 pt-8 border-t border-white/5 flex flex-wrap gap-8 justify-center items-center opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                >
                    <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">Verified Partners</span>
                    <div className="flex gap-12 items-center">
                        {/* Placeholder for partner micro-logos or icons if needed */}
                        <div className="h-4 w-24 bg-white/10 rounded-full" />
                        <div className="h-4 w-24 bg-white/10 rounded-full" />
                        <div className="h-4 w-24 bg-white/10 rounded-full" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
