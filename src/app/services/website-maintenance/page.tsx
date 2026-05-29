"use client";
import { services } from "@/data/serviceData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, CheckCircle, Zap, ArrowRight, Lock, Database } from "lucide-react";
import Link from "next/link";

export default function WebsiteMaintenancePage() {
    const service = services.find(s => s.slug === "website-maintenance")!;

    return (
        <div className="bg-background min-h-screen font-sora text-white selection:bg-neon/30">
            <Navbar />

            <main className="pt-40 pb-20 px-6 relative overflow-hidden">
                {/* Background atmosphere */}
                <div className="absolute top-0 left-0 right-0 h-screen bg-gradient-to-b from-neon/5 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 cyber-grid opacity-[0.03] pointer-events-none" />

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-neon text-[10px] font-black uppercase tracking-[0.3em] mb-10"
                    >
                        <Shield size={14} className="animate-pulse" />
                        24/7 Technical Surveillance
                    </motion.div>

                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] text-white">
                        Elite Website <br />
                        <span className="text-neon drop-shadow-[0_0_20px_rgba(204,255,0,0.3)]">Maintenance</span>
                    </h1>

                    <p className="text-white/70 text-lg md:text-xl font-bold leading-relaxed mb-12 max-w-2xl mx-auto">
                        {service.fullDesc}
                    </p>

                    <div className="flex justify-center gap-4 mb-32">
                        <Link href="/contact">
                            <button className="px-10 py-5 bg-neon text-black rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-xl shadow-neon/20 border border-neon">
                                Secure Your Site <Zap size={18} fill="black" className="inline ml-1" />
                            </button>
                        </Link>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-32">
                        {[
                            { icon: Lock, title: "Proactive Security", desc: "Enterprise-grade encryption and daily vulnerability scans." },
                            { icon: Database, title: "Redundant Backups", desc: "Automated daily cloud backups with 1-click restore capability." },
                            { icon: Zap, title: "Speed Optimization", desc: "Continuous performance tuning to maintain <span class='text-neon'>90+ PageSpeed scores</span>." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-10 rounded-[2.5rem] glass-dark border-white/10 hover:border-neon/30 transition-all group"
                            >
                                <item.icon className="text-neon mb-6 group-hover:scale-110 transition-transform" size={32} />
                                <h3 className="text-2xl font-black mb-4 group-hover:text-neon transition-colors">{item.title}</h3>
                                <p className="text-white/60 font-bold leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="p-12 md:p-20 rounded-[3rem] bg-neon group relative overflow-hidden text-black text-center"
                    >
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity" />
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">Ready for Absolute Uptime?</h2>
                        <p className="text-black/80 text-lg font-black max-w-xl mx-auto mb-10">We handle the technical complexity so you can focus on building your business. No downtime. No stress.</p>
                        <Link href="/contact">
                            <button className="px-12 py-5 bg-black text-neon rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-2xl">
                                Start Maintenance Now
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
