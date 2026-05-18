"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ComingSoon() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-neon/30 selection:text-neon overflow-hidden font-sora">
            <Navbar />

            <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon/10 blur-[150px] rounded-full pointer-events-none" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 blur-[150px] rounded-full pointer-events-none" />


                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ type: "spring", duration: 1.5 }}
                        className="w-24 h-24 rounded-3xl bg-neon/10 border border-neon/30 flex items-center justify-center mb-10 shadow-[0_0_50px_rgba(204,255,0,0.2)]"
                    >
                        <Clock size={40} className="text-neon" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 drop-shadow-2xl"
                    >
                        Feature <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-sky-400">In Progress</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-white/60 text-lg md:text-xl font-medium max-w-2xl mb-12 leading-relaxed"
                    >
                        We are currently crafting this page to ensure it meets our high standards of quality and legal compliance. It will be available shortly.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 hover:border-neon hover:bg-neon/10 text-white font-bold text-sm tracking-widest uppercase rounded-full transition-all group"
                        >
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                            Return to Home
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
