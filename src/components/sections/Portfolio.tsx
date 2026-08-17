"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, TrendingUp, Cpu, Globe, Target } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import TiltCard from "@/components/TiltCard";

const categories = ["All", "Web Dev", "SEO", "Design", "Automation"];

const projects = [
    {
        title: "Quantum SaaS Platform",
        category: "Web Dev",
        desc: "Next-gen infrastructure dashboard with real-time analytics and intuitive management nodes.",
        stat: { label: "Performance", value: "99/100" },
        accent: "text-indigo-600",
        border: "border-indigo-200",
        glow: "bg-indigo-500/10",
    },
    {
        title: "NovaBrand Commerce",
        category: "Web Dev",
        desc: "High-end fashion store with 3D product rendering and premium modern aesthetics.",
        stat: { label: "Conversion", value: "+340%" },
        accent: "text-sky-600",
        border: "border-sky-200",
        glow: "bg-sky-500/10",
    },
    {
        title: "CyberNest SEO Audit",
        category: "SEO",
        desc: "Strategic search engine dominance for a global fintech startup.",
        stat: { label: "Traffic", value: "+520%" },
        accent: "text-purple-600",
        border: "border-purple-200",
        glow: "bg-purple-500/10",
    },
    {
        title: "ApexFlow Automation",
        category: "Automation",
        desc: "Zero-latency business workflow automation with AI-driven decision engines.",
        stat: { label: "ROI", value: "12.5×" },
        accent: "text-violet-600",
        border: "border-violet-200",
        glow: "bg-violet-500/10",
    },
    {
        title: "VelocityX Identity",
        category: "Design",
        desc: "Complete visual rebranding and corporate identity for tech industry leaders.",
        stat: { label: "Lead Gen", value: "+180%" },
        accent: "text-emerald-600",
        border: "border-emerald-200",
        glow: "bg-emerald-500/10",
    },
    {
        title: "StellarIO Local SEO",
        category: "SEO",
        desc: "Hyper-local search optimization for a multi-national service chain.",
        stat: { label: "Rankings", value: "#1 Top" },
        accent: "text-indigo-600",
        border: "border-indigo-200",
        glow: "bg-indigo-500/10",
    },
];

export default function Portfolio() {
    const [active, setActive] = useState("All");

    const filtered = active === "All" ? projects : projects.filter(p => p.category === active);

    return (
        <section id="portfolio" className="py-24 relative bg-transparent overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <ScrollReveal variant="fade-up">
                        <span className="inline-flex px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-[10px] font-black uppercase tracking-[0.25em] mb-4 shadow-sm">
                            Our Portfolio
                        </span>
                    </ScrollReveal>

                    <ScrollReveal variant="fade-up" delay={0.1}>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-sora text-slate-900 mb-4 tracking-tight">
                            Recent <span className="bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">Projects</span>
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal variant="fade-up" delay={0.2}>
                        <p className="text-slate-600 text-base md:text-lg font-medium">
                            High-quality websites and digital solutions built for our amazing clients.
                        </p>
                    </ScrollReveal>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-14">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActive(cat)}
                            className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 border ${active === cat
                                ? "bg-[#2563EB] border-[#2563EB] text-white shadow-md shadow-blue-500/20"
                                : "bg-white border-slate-200 text-slate-600 hover:border-blue-300 hover:text-[#2563EB] shadow-sm"
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
                                className="h-full"
                            >
                                <TiltCard className="h-full">
                                    <div className="group relative p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-blue-300 shadow-md shadow-blue-500/5 hover:shadow-xl hover:shadow-blue-500/15 transition-all duration-300 overflow-hidden cursor-pointer h-full flex flex-col justify-between">

                                        <div>
                                            {/* Visual Header */}
                                            <div className="relative h-44 rounded-2xl bg-gradient-to-br from-blue-50/80 via-slate-50 to-purple-50/80 border border-slate-200/80 mb-6 overflow-hidden">
                                                <div className={`absolute inset-0 ${p.glow} opacity-30 group-hover:opacity-60 transition-opacity`} />

                                                {/* Floating elements inside Project card */}
                                                <div className="absolute inset-4 flex flex-col justify-between">
                                                    <div className="flex justify-between items-start">
                                                        <div className="flex gap-1.5">
                                                            <div className="w-2 h-2 rounded-full bg-slate-300" />
                                                            <div className="w-2 h-2 rounded-full bg-slate-300" />
                                                            <div className="w-2 h-2 rounded-full bg-slate-300" />
                                                        </div>
                                                        <ArrowUpRight size={18} className="text-slate-400 group-hover:text-[#2563EB] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                                    </div>

                                                    <div className="bg-white/90 backdrop-blur-md py-2 px-3 rounded-xl border border-slate-200 inline-flex items-center gap-2.5 self-start shadow-sm">
                                                        <TrendingUp size={14} className={p.accent} />
                                                        <div>
                                                            <p className="text-[8px] text-slate-500 font-black uppercase leading-none mb-1">{p.stat.label}</p>
                                                            <p className="text-xs font-black text-slate-900 leading-none">{p.stat.value}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className={`text-[10px] font-black uppercase tracking-widest ${p.accent}`}>
                                                    {p.category}
                                                </span>
                                                <div className="h-px flex-1 bg-slate-100" />
                                            </div>

                                            <h3 className="text-xl font-black text-slate-900 font-sora mb-2 group-hover:text-[#2563EB] transition-colors">
                                                {p.title}
                                            </h3>
                                            <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                                                {p.desc}
                                            </p>
                                        </div>

                                        {/* Action */}
                                        <div className="pt-5 border-t border-slate-100 flex items-center justify-between mt-auto">
                                            <div className="flex items-center gap-4 text-slate-400">
                                                <Globe size={16} />
                                                <Target size={16} />
                                                <Cpu size={16} />
                                            </div>
                                            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#2563EB] group-hover:text-blue-700 transition-colors">
                                                View Case Study
                                            </span>
                                        </div>
                                    </div>
                                </TiltCard>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* CTA */}
                <ScrollReveal variant="fade-up" className="text-center mt-16">
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED] hover:from-[#1d4ed8] hover:to-[#6d28d9] text-white rounded-xl font-extrabold text-xs uppercase tracking-widest shadow-md shadow-blue-500/20 hover:shadow-lg transition-all"
                    >
                        <span>Start Your Own Project</span>
                        <ArrowUpRight size={18} />
                    </a>
                </ScrollReveal>
            </div>
        </section>
    );
}
