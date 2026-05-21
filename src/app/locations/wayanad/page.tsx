"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Globe, ArrowRight, Zap, Target, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function WayanadPage() {
    return (
        <main className="min-h-screen bg-white font-sora">
            <Navbar />
            <section className="pt-40 pb-24 px-6 relative overflow-hidden bg-black text-white text-center">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/60 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                        <MapPin size={14} className="text-neon" /> North Kerala Tourism
                    </motion.div>
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">Wayanad <br /><span className="text-neon">SEO Dominance</span></h1>
                    <p className="max-w-2xl text-white/60 text-lg md:text-xl font-bold leading-relaxed mb-10 mx-auto">Bringing global digital presence to Wayanad&apos;s spectacular hospitality and agriculture sectors.</p>
                    <Link href="/#contact"><button className="px-10 py-5 bg-neon text-black rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-xl shadow-neon/20">Start Your Project</button></Link>
                </div>
            </section>
            <Footer />
        </main>
    );
}
