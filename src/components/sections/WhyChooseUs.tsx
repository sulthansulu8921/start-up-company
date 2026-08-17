"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, Zap, Shield, Rocket, ArrowRight, Award, Cpu } from "lucide-react";

const pillars = [
    {
        icon: Cpu,
        title: "AI-Powered Products",
        desc: "Build intelligent platforms, assistants, and custom SaaS business applications tailored to your operations.",
        accent: "text-purple-600",
        bg: "bg-purple-50",
        border: "border-purple-100",
    },
    {
        icon: Rocket,
        title: "High-Performance Websites",
        desc: "Fast, responsive websites engineered with modern frameworks for an exceptional user experience.",
        accent: "text-blue-600",
        bg: "bg-blue-50",
        border: "border-blue-100",
    },
    {
        icon: Shield,
        title: "Search Visibility",
        desc: "Sustainable technical SEO, Google Business Profile optimization, and Generative AI-search readiness.",
        accent: "text-sky-600",
        bg: "bg-sky-50",
        border: "border-sky-100",
    },
    {
        icon: Award,
        title: "Business Automation",
        desc: "Connect your software tools and build automated workflows that eliminate manual administrative tasks.",
        accent: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "border-emerald-100",
    },
];

const checklist = [
    "Mobile Responsive",
    "Fast Loading",
    "Search Visibility",
    "Clean UI/UX",
    "Smooth Interactions",
    "Modern Tech Stack",
    "Business Focused",
    "Clear Navigation",
    "Ongoing Support"
];

export default function WhyChooseUs() {
    return (
        <motion.section
            initial={{ opacity: 0.9, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            id="about"
            className="py-20 relative overflow-hidden bg-[#EFF6FF] text-slate-900 rounded-t-[3rem] md:rounded-t-[4rem] shadow-[0_-25px_60px_rgba(0,0,0,0.06)] border-t border-blue-200/90 z-38"
        >
            {/* Dedicated High-Res AI Microchip & Cyber Hardware Photo Background */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#EFF6FF]/96 via-[#E0F2FE]/90 to-[#EFF6FF]/96 pointer-events-none" />
            
            <div className="absolute w-[500px] h-[500px] bg-blue-500/5 blur-[150px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">

                    {/* Left - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-[10px] font-black uppercase tracking-[0.25em] mb-6 shadow-sm">
                            Why Choose NanoRays
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-sora text-slate-900 mb-6 tracking-tight leading-tight">
                            Built for Modern <br />
                            <span className="bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">Digital Business</span>
                        </h2>

                        <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 font-medium max-w-lg">
                            We don&apos;t just build websites; we design professional digital products and automation systems designed for business growth and operational efficiency.
                        </p>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10">
                            {checklist.map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="flex items-center gap-3 text-slate-700 font-extrabold text-sm"
                                >
                                    <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle2 size={12} className="text-emerald-600" />
                                    </div>
                                    {item}
                                </motion.li>
                            ))}
                        </ul>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED] hover:from-[#1d4ed8] hover:to-[#6d28d9] text-white rounded-xl font-extrabold text-xs uppercase tracking-widest shadow-md shadow-blue-500/20 hover:shadow-lg transition-all"
                        >
                            <span>Start Your Project</span>
                            <ArrowRight size={16} />
                        </Link>
                    </motion.div>

                    {/* Right - Visual */}
                    <div className="relative hidden lg:block">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            {/* Main Metric Card */}
                            <div className="bg-gradient-to-br from-[#2563EB] via-[#4F46E5] to-[#7C3AED] p-10 rounded-[36px] text-white shadow-2xl shadow-blue-500/20 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />

                                <div className="flex justify-between items-start mb-8 relative z-10">
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-100 mb-2">Campaign Benchmarks</p>
                                        <p className="text-4xl font-black font-sora text-white">Measurable Results</p>
                                        <p className="text-xs text-blue-100 font-medium mt-1">Based on selected client campaigns</p>
                                    </div>
                                    <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg">
                                        <Zap size={24} className="text-white fill-current" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20 relative z-10">
                                    {[
                                        { label: "Core Web Vitals", val: "Optimized" },
                                        { label: "Lead Growth", val: "Proven" },
                                        { label: "Client Support", val: "Continuous" },
                                    ].map((m, i) => (
                                        <div key={i} className="text-center">
                                            <p className="text-lg font-black font-sora text-white mb-1">{m.val}</p>
                                            <p className="text-[9px] text-indigo-100 font-extrabold uppercase tracking-widest">{m.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Floating Element */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-8 -left-8 bg-white p-5 rounded-2xl z-20 border border-slate-200/90 shadow-xl shadow-indigo-500/10 flex items-center gap-4"
                            >
                                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                                    <Shield size={20} className="text-indigo-600" />
                                </div>
                                <div className="pr-2">
                                    <p className="text-xs font-black text-slate-900">Dedicated Partnership</p>
                                    <p className="text-[10px] text-slate-500 font-medium">Clear Communication & Code</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Pillars Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {pillars.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-indigo-300 shadow-md shadow-indigo-500/5 hover:shadow-xl hover:shadow-indigo-500/15 transition-all duration-300 group"
                        >
                            <div className={`w-12 h-12 rounded-xl ${p.bg} border ${p.border} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <p.icon size={22} className={p.accent} />
                            </div>
                            <h3 className="text-lg font-black text-slate-900 font-sora mb-3 group-hover:text-indigo-600 transition-colors">
                                {p.title}
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed font-medium">
                                {p.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Industries We Serve */}
                <div className="mt-20 pt-12 border-t border-slate-200">
                    <h3 className="text-xl font-black text-slate-900 font-sora mb-6 text-center tracking-tight">Industries We Serve</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            "Retail & Ecommerce",
                            "Restaurants & Hospitality",
                            "Healthcare",
                            "Education",
                            "Real Estate",
                            "Professional Services",
                            "Startups & Technology"
                        ].map((industry, i) => (
                            <div key={i} className="px-6 py-3 rounded-full border border-slate-200 bg-white text-slate-800 font-bold text-xs tracking-wide hover:border-indigo-300 hover:text-indigo-600 hover:shadow-sm transition-all cursor-default">
                                {industry}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
