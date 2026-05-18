"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Zap, CheckCircle2, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface ServiceDetailContentProps {
    service: any;
}

export default function ServiceDetailContent({ service }: ServiceDetailContentProps) {
    const { scrollY } = useScroll();

    // Background parallax & opacity management
    const bgOpacity = useTransform(scrollY, [0, 500], [0.4, 0.8]);
    const headerScale = useTransform(scrollY, [0, 500], [1, 1.15]);

    return (
        <main className="relative min-h-screen bg-black pt-32 pb-20 overflow-hidden">
            <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-black via-transparent to-black" />

            {/* Service Header Section */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 mb-32">
                <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-12 text-sm font-bold group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-24 h-24 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 shadow-2xl shadow-neon/10"
                    >
                        <service.icon size={48} className={service.accent} />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-[10px] font-black uppercase tracking-[0.3em] mb-8"
                    >
                        <Zap size={14} className={service.accent} />
                        Service Deep-Dive
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-8xl font-black font-sora text-white tracking-tighter mb-8 max-w-4xl"
                    >
                        {service.title.split(' ').map((word: string, i: number) => (
                            <span key={i} className={i === 1 ? service.accent : ""}>{word} </span>
                        ))}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/80 text-xl font-medium max-w-3xl leading-relaxed"
                    >
                        {service.fullDesc}
                    </motion.p>
                </div>
            </section>

            {/* Key Benefits Matrix */}
            <section className="relative z-10 max-w-6xl mx-auto px-6 mb-40">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {service.benefits.map((benefit: string, i: number) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-[2rem] glass-dark border border-white/5 flex items-start gap-6 hover:border-neon/20 transition-all group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-neon/10 flex items-center justify-center shrink-0 border border-neon/20 group-hover:bg-neon group-hover:text-black transition-all">
                                <CheckCircle2 size={24} className="transition-colors" />
                            </div>
                            <div>
                                <h4 className="text-white/40 font-black text-[10px] uppercase tracking-[0.2em] mb-2">Benefit / {i + 1}</h4>
                                <p className="text-xl font-bold font-sora text-white leading-tight tracking-tight">
                                    {benefit}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Project Roadmap */}
            <section className="relative z-10 max-w-5xl mx-auto px-6 mb-40">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-black font-sora text-white mb-4 tracking-tight">The Growth Roadmap</h2>
                    <p className="text-white/40 text-sm font-bold uppercase tracking-widest">Which Day / Which Topic — Our Engineering Logic</p>
                </div>

                <div className="relative">
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-neon/40 via-white/10 to-transparent md:-translate-x-1/2" />

                    <div className="space-y-24">
                        {service.roadmap.map((step: any, i: number) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className={`relative flex items-center justify-between gap-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                            >
                                <div className="ml-20 md:ml-0 md:w-5/12 group">
                                    <div className="p-8 rounded-3xl glass-dark border border-white/5 group-hover:border-neon/30 transition-all duration-500">
                                        <div className={`text-xs font-black uppercase tracking-[0.2em] mb-4 ${service.accent}`}>
                                            {step.day}
                                        </div>
                                        <h3 className="text-2xl font-black text-white font-sora mb-4">{step.topic}</h3>
                                        <p className="text-white/60 text-sm leading-relaxed font-bold">
                                            {step.details}
                                        </p>
                                    </div>
                                </div>
                                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-black border-2 border-neon -translate-x-1/2 shadow-[0_0_15px_rgba(204,255,0,0.6)] z-20" />
                                <div className="hidden md:block w-5/12" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="p-16 rounded-[3rem] glass-dark border border-white/10 relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-neon/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <h2 className="text-4xl font-black font-sora text-white mb-6">Ready to Get Started?</h2>
                    <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto font-bold tracking-tight">
                        We are ready to build the perfect digital solution for your business.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link href="https://wa.me/918921624007" target="_blank" className="btn-neon px-12 py-5 flex items-center gap-3">
                            <Zap size={20} fill="black" />
                            Start Your Project
                        </Link>
                        <Link href="mailto:nanorayssolution@gmail.com" className="btn-outline-glow border-white/20 text-white px-12 py-5 font-black hover:border-neon">
                            Email Us
                        </Link>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
