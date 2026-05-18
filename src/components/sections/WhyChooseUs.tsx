"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, Zap, Shield, Rocket, ArrowRight, Award, Cpu } from "lucide-react";

const pillars = [
    {
        icon: Award,
        title: "Operational Excellence",
        desc: "Maintaining elite performance standards through a rigorous <span class='text-neon'>47-point quality verification</span> protocol.",
        accent: "text-neon",
    },
    {
        icon: Shield,
        title: "Enterprise Security",
        desc: "Utilizing corporate-grade encryption and security protocols to safeguard global brand integrity.",
        accent: "text-sky-400",
    },
    {
        icon: Rocket,
        title: "Strategic Acquisition",
        desc: "Accelerated deployment cycles engineered to dominate market share and drive rapid ROI.",
        accent: "text-purple-400",
    },
    {
        icon: Cpu,
        title: "AI-Powered Efficiency",
        desc: "Utilizing advanced business intelligence to automate operations and scale 10x faster.",
        accent: "text-neon",
    },
];

const checklist = [
    "Mobile Responsive",
    "Fast Loading",
    "SEO Friendly",
    "Premium UI",
    "Smooth Animations",
    "Modern Layout",
    "Business Focused Design",
    "Professional Typography",
    "Trusted Company Feel"
];

export default function WhyChooseUs() {
    return (
        <section id="about" className="py-32 relative bg-transparent overflow-hidden">
            <div className="absolute inset-0 cyber-grid opacity-[0.02] pointer-events-none" />
            <div className="absolute w-[400px] h-[400px] bg-neon/10 blur-[120px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">

                    {/* Left - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex px-3 py-1.5 rounded-lg bg-white/5 border border-white/20 text-neon text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                            Why NanoRays
                        </div>

                        <h2 className="text-5xl md:text-6xl font-black font-sora text-white mb-8 tracking-tighter leading-none">
                            The Engine For <br />
                            <span className="text-neon">Hyper-Scale</span> Growth
                        </h2>

                        <p className="text-white/90 text-lg leading-relaxed mb-12 font-bold max-w-lg">
                            We don&apos;t just build websites; we design professional digital solutions built for business growth and measurable returns.
                        </p>

                        <ul className="space-y-4 mb-12">
                            {checklist.map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-3 text-white/90 font-black text-sm"
                                >
                                    <div className="w-5 h-5 rounded-full bg-neon/10 border border-neon/30 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle2 size={12} className="text-neon" />
                                    </div>
                                    {item}
                                </motion.li>
                            ))}
                        </ul>

                        <Link
                            href="/#contact"
                            className="btn-neon px-10 py-5"
                        >
                            Start Your Project <ArrowRight size={18} className="ml-2" />
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
                            {/* Main Metric Glass Card */}
                            <div className="glass-neon p-12 rounded-[40px] border border-neon/30 shadow-neon animate-float">
                                <div className="flex justify-between items-start mb-12">
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/70 mb-2">Network Average</p>
                                        <h4 className="text-5xl font-black text-white font-sora">+287% ROI</h4>
                                    </div>
                                    <div className="w-14 h-14 rounded-2xl bg-neon flex items-center justify-center shadow-[0_0_20px_rgba(204,255,0,0.4)]">
                                        <Zap size={24} fill="black" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-6 pt-10 border-t border-white/20">
                                    {[
                                        { label: "Stability", val: "99.9%" },
                                        { label: "Lead Gen", val: "4.2×" },
                                        { label: "Retention", val: "+84%" },
                                    ].map((m, i) => (
                                        <div key={i} className="text-center">
                                            <p className="text-xl font-black text-neon font-sora">{m.val}</p>
                                            <p className="text-[8px] text-white/70 font-black uppercase tracking-widest">{m.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Floating Element */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 5, repeat: Infinity }}
                                className="absolute -top-10 -left-10 glass-dark p-6 rounded-2xl z-20 border border-white/20 flex items-center gap-4"
                            >
                                <div className="w-10 h-10 rounded-full bg-neon flex items-center justify-center">
                                    <Shield size={18} fill="black" />
                                </div>
                                <div className="pr-4">
                                    <p className="text-xs font-black text-white">Trust Protected</p>
                                    <p className="text-[10px] text-white/70">Verified Agency Status</p>
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
                            className="p-8 rounded-3xl glass-dark border-white/10 hover:border-neon/30 transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/20 flex items-center justify-center mb-6 group-hover:bg-neon/10 transition-all">
                                <p.icon size={22} className={p.accent} />
                            </div>
                            <h3 className="text-lg font-black text-white font-sora mb-3 group-hover:text-neon transition-colors">
                                {p.title}
                            </h3>
                            <p className="text-white/90 text-sm leading-relaxed font-bold group-hover:text-white" dangerouslySetInnerHTML={{ __html: p.desc }} />
                        </motion.div>
                    ))}
                </div>

                {/* Industries We Serve */}
                <div className="mt-24 pt-16 border-t border-white/10">
                    <h3 className="text-2xl font-black text-white font-sora mb-8 text-center tracking-tight">Industries We Serve</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            "Restaurants", "Retail Shops", "Startups", "Educational Institutions",
                            "Real Estate", "Healthcare", "Personal Brands", "Small Businesses",
                            "E-Commerce", "Travel & Tourism", "Fitness & Gyms", "Logistics & Transport",
                            "Event Management", "Corporate Agencies", "Construction"
                        ].map((industry, i) => (
                            <div key={i} className="px-6 py-3 rounded-full border border-white/20 bg-white/5 text-white/80 font-bold text-sm tracking-wide hover:border-neon hover:text-neon transition-colors cursor-default">
                                {industry}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
