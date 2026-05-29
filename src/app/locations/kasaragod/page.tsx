"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Globe, ArrowRight, Zap, Target, Star, Shield, BarChart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function KasaragodPage() {
    return (
        <main className="min-h-screen bg-white font-sora">
            <Navbar />

            <section className="pt-40 pb-24 px-6 relative overflow-hidden bg-black text-white">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/60 text-[10px] font-black uppercase tracking-[0.3em] mb-8"
                    >
                        <MapPin size={14} className="text-neon" />
                        North Gate Dominance
                    </motion.div>
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
                        Kasaragod <br />
                        <span className="text-neon">Digital Edge</span>
                    </h1>
                    <p className="max-w-2xl text-white/60 text-lg md:text-xl font-bold leading-relaxed mb-10">
                        Specialized digital solutions for Kasaragod&apos;s cross-border trade, agriculture, and heritage tourism.
                    </p>
                    <Link href="/contact">
                        <button className="px-10 py-5 bg-neon text-black rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-xl shadow-neon/20">
                            Start Your Project
                        </button>
                    </Link>
                </div>
            </section>

            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { icon: Zap, title: "Regional SEO", desc: "Commanding local search results for North Kerala businesses." },
                            { icon: Target, title: "Trade Portals", desc: "Empowering commerce with high-conversion E-commerce tech." },
                            { icon: Star, title: "Brand Identity", desc: "Creating world-class logos for ambitious local startups." }
                        ].map((item, i) => (
                            <div key={i} className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:shadow-2xl transition-all">
                                <item.icon className="text-neon mb-6" size={32} />
                                <h3 className="text-2xl font-black text-gray-900 mb-4">{item.title}</h3>
                                <p className="text-gray-500 font-bold leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

           
        </main>
    );
}
