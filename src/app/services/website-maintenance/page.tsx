"use client";

import { services } from "@/data/serviceData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Wrench, Shield, Zap, CheckCircle, ArrowRight, RefreshCw, Lock, BarChart } from "lucide-react";
import Link from "next/link";

export default function WebsiteMaintenancePage() {
    const service = services.find(s => s.slug === "website-maintenance")!;

    return (
        <div className="bg-white min-h-screen font-sora">
            <Navbar />

            <main className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Hero Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                                <Shield size={12} className="animate-pulse" />
                                24/7 Technical Surveillance
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter mb-8 leading-[1.1]">
                                Elite Website <br />
                                <span className="text-emerald-500">Maintenance</span>
                            </h1>
                            <p className="text-gray-600 text-xl font-bold leading-relaxed mb-10 max-w-xl">
                                {service.fullDesc}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/#contact">
                                    <button className="px-8 py-4 bg-emerald-500 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-black transition-all shadow-xl shadow-emerald-500/20">
                                        Secure Your Site
                                    </button>
                                </Link>
                                <Link href="/pricing">
                                    <button className="px-8 py-4 bg-white text-gray-900 border border-gray-100 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-gray-50 transition-all">
                                        View Pricing
                                    </button>
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-emerald-500/10 blur-[100px] rounded-full" />
                            <div className="relative glass-card border-gray-100 p-8 rounded-[2.5rem] shadow-2xl">
                                <div className="grid grid-cols-2 gap-6">
                                    {[
                                        { icon: Shield, title: "Security", val: "100%", color: "text-emerald-500" },
                                        { icon: RefreshCw, title: "Updates", val: "Automated", color: "text-blue-500" },
                                        { icon: Lock, title: "SSL", val: "Encrypted", color: "text-purple-500" },
                                        { icon: BarChart, title: "Uptime", val: "99.9%", color: "text-amber-500" }
                                    ].map((stat, i) => (
                                        <div key={i} className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                                            <stat.icon size={20} className={`${stat.color} mb-4`} />
                                            <p className="text-xs text-gray-400 font-black uppercase mb-1">{stat.title}</p>
                                            <p className="text-xl font-black text-gray-900">{stat.val}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Features Grid */}
                    <div className="mb-32">
                        <div className="text-center mb-20">
                            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tighter mb-4">Maximum Reliability</h2>
                            <p className="text-gray-500 font-bold max-w-2xl mx-auto italic">Prevent issues before they happen with our proactive surveillance stack.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {service.benefits.map((benefit, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:border-emerald-500/30 transition-all group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                        <CheckCircle className="text-emerald-500" size={24} />
                                    </div>
                                    <h3 className="text-lg font-black text-gray-900 mb-2">{benefit}</h3>
                                    <p className="text-gray-500 text-sm font-bold">Continuous optimization and architectural protection for your business.</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Roadmap */}
                    <div className="p-10 md:p-20 rounded-[3rem] bg-black text-white overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-black font-sora tracking-tighter mb-16 text-center text-neon">Success Roadmap</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                                {service.roadmap.map((step, i) => (
                                    <div key={i} className="relative">
                                        <div className="text-neon font-black text-xs uppercase tracking-widest mb-4">{step.day}</div>
                                        <h3 className="text-xl font-black mb-4">{step.topic}</h3>
                                        <p className="text-white/60 text-sm font-bold leading-relaxed">{step.details}</p>
                                        {i < 3 && <ArrowRight className="hidden lg:block absolute -right-6 top-10 text-white/20" />}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
