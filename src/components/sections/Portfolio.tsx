"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, TrendingUp, Cpu, Globe, Target } from "lucide-react";

const categories = ["All", "Web Dev", "SEO", "Design", "Automation"];

const projects = [
    {
        title: "Quantum SaaS Platform",
        category: "Web Dev",
        desc: "Next-gen infrastructure dashboard with real-time analytics and neon UI nodes.",
        stat: { label: "Performance", value: "99/100" },
        accent: "text-neon",
        border: "border-neon/20",
        glow: "bg-neon/10",
    },
    {
        title: "NovaBrand Commerce",
        category: "Web Dev",
        desc: "High-end fashion store with 3D product rendering and luxury dark aesthetics.",
        stat: { label: "Conversion", value: "+340%" },
        accent: "text-sky-400",
        border: "border-sky-400/20",
        glow: "bg-sky-400/10",
    },
    {
        title: "CyberNest SEO Audit",
        category: "SEO",
        desc: "Strategic search engine dominance for a global fintech startup.",
        stat: { label: "Traffic", value: "+520%" },
        accent: "text-purple-400",
        border: "border-purple-400/20",
        glow: "bg-purple-400/10",
    },
    {
        title: "ApexFlow Automation",
        category: "Automation",
        desc: "Zero-latency business workflow automation with AI-driven decision engines.",
        stat: { label: "ROI", value: "12.5×" },
        accent: "text-neon",
        border: "border-neon/20",
        glow: "bg-neon/10",
    },
    {
        title: "VelocityX Identity",
        category: "Design",
        desc: "Complete visual rebranding and cinematic identity for tech industry leaders.",
        stat: { label: "Lead Gen", value: "+180%" },
        accent: "text-emerald-400",
        border: "border-emerald-400/20",
        glow: "bg-emerald-400/10",
    },
    {
        title: "StellarIO Local SEO",
        category: "SEO",
        desc: "Hyper-local search optimization for a multi-national service chain.",
        stat: { label: "Rankings", value: "#1 Top" },
        accent: "text-sky-400",
        border: "border-sky-400/20",
        glow: "bg-sky-400/10",
    },
];

export default function Portfolio() {
    const [active, setActive] = useState("All");

    const filtered = active === "All" ? projects : projects.filter(p => p.category === active);

    return (
        <section id="portfolio" className="py-32 relative bg-transparent overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex px-3 py-1.5 rounded-lg bg-white/5 border border-white/20 text-white/80 text-[10px] font-black uppercase tracking-[0.2em] mb-6"
                    >
                        Our Portfolio
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-black font-sora text-white mb-6 tracking-tighter"
                    >
                        Recent <span className="text-neon">Projects</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/80 text-lg font-bold"
                    >
                        High-quality websites and digital solutions built for our amazing clients.
                    </motion.p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActive(cat)}
                            className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 border ${active === cat
                                ? "bg-neon/10 border-neon text-neon shadow-[0_0_15px_rgba(204,255,0,0.3)]"
                                : "bg-white/8 border-white/20 text-white/80 hover:border-neon/40 hover:text-neon"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="wait">
                        {filtered.map((p, i) => (
                            <motion.div
                                key={p.title}
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ delay: i * 0.05, duration: 0.5 }}
                                whileHover={{ y: -8 }}
                                className={`group relative p-8 rounded-3xl glass-dark ${p.border.replace('20', '40')} hover:border-white/30 transition-all duration-500 overflow-hidden cursor-pointer`}
                            >
                                {/* Visual Header */}
                                <div className="relative h-44 rounded-2xl bg-black border border-white/10 mb-8 overflow-hidden">
                                    <div className={`absolute inset-0 ${p.glow} opacity-30 group-hover:opacity-60 transition-opacity`} />
                                    <div className="absolute inset-0 cyber-grid opacity-20" />

                                    {/* Floating elements inside Project card */}
                                    <div className="absolute inset-4 flex flex-col justify-between">
                                        <div className="flex justify-between items-start">
                                            <div className="flex gap-1.5">
                                                <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                                                <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                                                <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                                            </div>
                                            <ArrowUpRight size={18} className="text-white/40 group-hover:text-neon group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                        </div>

                                        <div className=" glass-neon py-2 px-3 rounded-xl border-white/20 inline-flex items-center gap-2 self-start shadow-xl">
                                            <TrendingUp size={14} className={p.accent} />
                                            <div>
                                                <p className="text-[8px] text-white/60 font-black uppercase leading-none mb-1">{p.stat.label}</p>
                                                <p className="text-xs font-black text-white leading-none">{p.stat.value}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className={`text-[10px] font-black uppercase tracking-widest ${p.accent}`}>
                                        {p.category}
                                    </span>
                                    <div className="h-px flex-1 bg-white/10" />
                                </div>

                                <h3 className="text-xl font-black text-white font-sora mb-3 group-hover:text-neon transition-colors">
                                    {p.title}
                                </h3>
                                <p className="text-white/80 text-sm leading-relaxed mb-8 font-bold">
                                    {p.desc}
                                </p>

                                {/* Action */}
                                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                                    <div className="flex items-center gap-5">
                                        <Globe size={16} className="text-white/40" />
                                        <Target size={16} className="text-white/40" />
                                        <Cpu size={16} className="text-white/40" />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/80 group-hover:text-neon transition-colors">
                                        View Case Study
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-20"
                >
                    <button className="btn-outline-glow border-white/5 group">
                        Start Your Own Project
                        <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
