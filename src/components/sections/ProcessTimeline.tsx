"use client";

import { motion } from "framer-motion";
import {
    MessageSquare, Palette, Code2, Rocket,
    HeartHandshake, ArrowRight, Zap, Target, Megaphone, CreditCard
} from "lucide-react";

const steps = [
    {
        num: "01",
        title: "Discover",
        desc: "We analyze your business goals, target market requirements, and technical prerequisites to define a clear project scope.",
        icon: MessageSquare,
        accent: "text-blue-600",
        bg: "bg-blue-50",
        border: "border-blue-100",
    },
    {
        num: "02",
        title: "Plan",
        desc: "We structure wireframes, system architecture, database design, visual guidelines, and product milestones.",
        icon: Palette,
        accent: "text-purple-600",
        bg: "bg-purple-50",
        border: "border-purple-100",
    },
    {
        num: "03",
        title: "Build",
        desc: "Our engineering team develops your custom website, software, or AI platform with clean, high-performance code.",
        icon: Code2,
        accent: "text-indigo-600",
        bg: "bg-indigo-50",
        border: "border-indigo-100",
    },
    {
        num: "04",
        title: "Launch",
        desc: "We conduct quality assurance tests, security audits, and Core Web Vitals checks before deploying to live production servers.",
        icon: Rocket,
        accent: "text-sky-600",
        bg: "bg-sky-50",
        border: "border-sky-100",
    },
    {
        num: "05",
        title: "Grow",
        desc: "We implement SEO strategy, performance marketing campaigns, and workflow automation to drive qualified business traffic.",
        icon: Megaphone,
        accent: "text-cyan-600",
        bg: "bg-cyan-50",
        border: "border-cyan-100",
    },
    {
        num: "06",
        title: "Support",
        desc: "We provide proactive maintenance, security monitoring, server updates, and continuous optimization support.",
        icon: HeartHandshake,
        accent: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "border-emerald-100",
    },
];

export default function ProcessTimeline() {
    return (
        <motion.section
            initial={{ opacity: 0.9, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            id="process"
            className="py-20 relative overflow-hidden bg-[#F0FDF4] text-slate-900 rounded-t-[3rem] md:rounded-t-[4rem] shadow-[0_-25px_60px_rgba(0,0,0,0.06)] border-t border-emerald-200/90 z-45"
        >
            {/* Dedicated High-Res Creative Strategy Workshop Photo Background */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#F0FDF4]/96 via-[#DCFCE7]/90 to-[#F0FDF4]/96 pointer-events-none" />
            
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex px-3.5 py-1.5 rounded-full bg-violet-50 border border-violet-200/80 text-violet-700 text-[10px] font-black uppercase tracking-[0.25em] mb-4 shadow-sm"
                    >
                        Step-by-Step Guide
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black font-sora text-slate-900 mb-4 tracking-tight"
                    >
                        Our <span className="bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">Process</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed"
                    >
                        A clear and simple framework designed to launch and grow your business online.
                    </motion.p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-8 top-10 bottom-10 w-px bg-gradient-to-b from-[#2563EB] via-[#4F46E5] to-transparent hidden md:block" />

                    <div className="space-y-8">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.5 }}
                                className="group relative flex gap-6 md:gap-10 items-start"
                            >
                                {/* Step Marker */}
                                <div className={`relative flex-shrink-0 w-16 h-16 rounded-2xl ${step.bg} border ${step.border} flex items-center justify-center z-10 group-hover:scale-105 transition-all duration-300 shadow-sm`}>
                                    <step.icon size={24} className={`${step.accent}`} />

                                    {/* Number Badge */}
                                    <div className="absolute -top-2.5 -right-2.5 px-2 py-0.5 rounded-full bg-slate-900 text-white shadow-sm">
                                        <span className="text-[10px] font-black">{step.num}</span>
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className="flex-1 p-6 md:p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-blue-300 shadow-md shadow-blue-500/5 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
                                    <div className="flex flex-wrap justify-between items-center gap-3 mb-3">
                                        <h3 className="text-xl font-black text-slate-900 font-sora tracking-tight group-hover:text-[#2563EB] transition-colors">
                                            {step.title}
                                        </h3>
                                        <div className="px-3 py-1 rounded-full bg-blue-50 border border-blue-100 flex items-center gap-1.5">
                                            <Zap size={11} className="text-[#2563EB] fill-current" />
                                            <span className="text-[10px] font-extrabold text-blue-700 uppercase tracking-wider">Active Phase</span>
                                        </div>
                                    </div>
                                    <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                                        {step.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-3 px-10 py-4.5 bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED] hover:from-[#1d4ed8] hover:to-[#6d28d9] text-white rounded-xl font-extrabold text-xs uppercase tracking-widest shadow-md shadow-blue-500/20 hover:shadow-lg transition-all"
                    >
                        <span>Get Started</span>
                        <ArrowRight size={16} />
                    </a>
                </motion.div>
            </div>
        </motion.section>
    );
}
