"use client";

import { motion } from "framer-motion";
import { Cpu, ArrowRight, Bot, LayoutDashboard, Database, Workflow, BarChart3, CreditCard, Sparkles } from "lucide-react";
import Link from "next/link";

const modules = [
    { name: "AI Agent", icon: Bot, desc: "Autonomous 24/7 client assistant & lead qualifier", color: "text-[#7C3AED]", bg: "bg-purple-50", border: "border-purple-100" },
    { name: "Dashboard", icon: LayoutDashboard, desc: "Real-time analytics & business control panel", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
    { name: "CRM Engine", icon: Database, desc: "Centralized customer data & pipeline management", color: "text-cyan-600", bg: "bg-cyan-50", border: "border-cyan-100" },
    { name: "Automation", icon: Workflow, desc: "Instant trigger-action workflow pipelines", color: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-100" },
    { name: "Analytics", icon: BarChart3, desc: "Predictive insights & operational reporting", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
    { name: "Payments", icon: CreditCard, desc: "Automated billing & SaaS subscription gateways", color: "text-rose-600", bg: "bg-rose-50", border: "border-rose-100" },
];

const exampleApps = [
    "AI SaaS Platforms",
    "AI Business Platforms",
    "AI Dashboards",
    "AI Assistants & Agents",
    "AI-Powered Web Applications",
    "AI Workflow Automation Platforms"
];

export default function AIPlatformSpotlight() {
    return (
        <motion.section
            initial={{ opacity: 0.9, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            id="ai-platform"
            className="dark py-24 relative overflow-hidden bg-[#0A0F1E] text-white rounded-t-[3rem] md:rounded-t-[4rem] shadow-[0_-30px_70px_rgba(0,0,0,0.4)] border-t border-purple-500/30 z-35"
        >
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-600/15 blur-[160px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-600/15 blur-[160px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header Badge */}
                <div className="flex flex-col items-center text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-[11px] font-black uppercase tracking-[0.25em] mb-4 backdrop-blur-md shadow-lg shadow-purple-500/10">
                        <Sparkles size={14} className="text-purple-400" />
                        Signature Core Capability
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-sora tracking-tight text-white mb-6 max-w-4xl">
                        AI Platform Development — <br className="hidden md:block" />
                        <span className="bg-gradient-to-r from-purple-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
                            Turn your AI idea into a real digital product.
                        </span>
                    </h2>

                    <p className="text-slate-300 text-base md:text-lg font-medium max-w-3xl leading-relaxed">
                        Build AI-powered platforms, SaaS products, business applications, dashboards, and intelligent workflows designed specifically around your operational requirements.
                    </p>
                </div>

                {/* Animated Connection Flow Architecture */}
                <div className="mb-20 p-8 md:p-12 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
                    <div className="text-center mb-10">
                        <span className="text-xs font-black uppercase tracking-widest text-purple-400">
                            Transformation Pipeline
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
                        {[
                            { step: "01", title: "IDEA", sub: "Concept & Logic", color: "from-blue-500 to-indigo-600" },
                            { step: "02", title: "AI ENGINE", sub: "LLM & Custom Models", color: "from-purple-500 to-fuchsia-600" },
                            { step: "03", title: "PLATFORM", sub: "UI/UX & Dashboard", color: "from-cyan-500 to-blue-600" },
                            { step: "04", title: "BUSINESS", sub: "Growth & Automation", color: "from-emerald-500 to-teal-600" },
                        ].map((item, idx) => (
                            <div key={idx} className="relative group">
                                <div className="p-6 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-purple-400/50 transition-all duration-300 flex flex-col items-center text-center">
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">
                                        STAGE {item.step}
                                    </span>
                                    <h3 className={`text-2xl font-black font-sora bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-1`}>
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-slate-400 font-medium">{item.sub}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Floating Interactive Modules Grid */}
                <div className="mb-16">
                    <h3 className="text-2xl font-black font-sora text-white text-center mb-10">
                        Modular AI Capabilities We Build
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {modules.map((m, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-purple-500/40 hover:bg-white/[0.07] transition-all duration-300 group cursor-pointer"
                            >
                                <div className="flex items-center gap-4 mb-3">
                                    <div className={`p-3 rounded-xl ${m.bg} ${m.border} border ${m.color}`}>
                                        <m.icon size={22} />
                                    </div>
                                    <h4 className="text-lg font-black font-sora text-white group-hover:text-purple-300 transition-colors">
                                        {m.name}
                                    </h4>
                                </div>
                                <p className="text-slate-400 text-sm font-medium leading-relaxed">
                                    {m.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Example Product Pills & CTA */}
                <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-r from-purple-950/60 via-blue-950/60 to-purple-950/60 border border-purple-500/30 flex flex-col lg:flex-row items-center justify-between gap-8 backdrop-blur-xl">
                    <div className="max-w-2xl">
                        <h4 className="text-xl font-black font-sora text-white mb-3">
                            What AI Product Are You Planning To Build?
                        </h4>
                        <div className="flex flex-wrap gap-2.5">
                            {exampleApps.map((app, idx) => (
                                <span key={idx} className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-slate-200 text-xs font-bold">
                                    {app}
                                </span>
                            ))}
                        </div>
                    </div>

                    <Link
                        href="/contact"
                        className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-extrabold text-xs uppercase tracking-widest shadow-xl shadow-purple-500/25 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 whitespace-nowrap"
                    >
                        <span>Build Your AI Product</span>
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </motion.section>
    );
}
