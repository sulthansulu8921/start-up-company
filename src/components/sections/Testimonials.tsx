"use client";

import { motion } from "framer-motion";
import { Quote, Star, Zap, MessageSquarePlus } from "lucide-react";
import { useState } from "react";
import ReviewModal from "../ReviewModal";

const testimonials = [
    {
        name: "Rahul Verma",
        role: "Director, Innovate Retail",
        content: "NanoRays delivered an exceptional e-commerce platform that increased our online sales by 200% in just 3 months. Their attention to detail and modern UI design is unmatched.",
        color: "text-neon",
        bg: "bg-neon/5",
        border: "border-neon/10",
    },
    {
        name: "Samantha Lee",
        role: "Founder, Skyline Logistics (Dubai)",
        content: "We hired NanoRays to redesign our corporate website and build a custom tracking portal. The performance is incredibly fast, and our clients love the sleek dashboard interface.",
        color: "text-sky-400",
        bg: "bg-sky-400/5",
        border: "border-sky-400/10",
    },
    {
        name: "Ananya Sharma",
        role: "Marketing Head, Elite Estates",
        content: "Their SEO strategies and Google Ads management brought us 3x more qualified leads. The NanoRays team is highly professional and truly understands data-driven digital growth.",
        color: "text-purple-400",
        bg: "bg-purple-400/5",
        border: "border-purple-400/10",
    },
    {
        name: "James Carter",
        role: "CTO, FinTech Nexus (UK)",
        content: "Outstanding web application development. They integrated complex payment gateways flawlessly while maintaining a stunning, user-friendly design. Highly recommended partner.",
        color: "text-neon",
        bg: "bg-neon/5",
        border: "border-neon/10",
    },
];

export default function Testimonials() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="testimonials" className="py-32 relative bg-transparent overflow-hidden">
            <ReviewModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            <div className="absolute w-[600px] h-[600px] bg-neon/5 blur-[150px] rounded-full -bottom-48 -left-48 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex px-3 py-1.5 rounded-lg bg-white/5 border border-white/20 text-white/80 text-[10px] font-black uppercase tracking-[0.2em] mb-6"
                    >
                        Proof of Work
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-black font-sora text-white mb-6 tracking-tighter"
                    >
                        Global <span className="text-neon">Testimonials</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/80 text-lg font-bold max-w-2xl mx-auto"
                    >
                        Listen to the architects of industry-leading growth cycles.
                    </motion.p>
                </div>

                {/* Masonry-style Grid */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="break-inside-avoid p-8 rounded-[32px] glass-dark border border-white/20 hover:border-white/40 transition-all duration-500 group"
                        >
                            {/* Rating */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={14} fill="#CCFF00" className="text-neon" />
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-white/90 text-base leading-relaxed font-bold mb-8 italic">
                                &quot;{t.content}&quot;
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
                                    <div className="w-full h-full bg-neon/10 flex items-center justify-center text-neon font-black text-xs">
                                        {t.name.charAt(0)}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-sm font-black text-white font-sora group-hover:text-neon transition-colors">
                                        {t.name}
                                    </h4>
                                    <p className="text-[10px] text-white/70 font-black uppercase tracking-widest">
                                        {t.role}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Submit Review CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 flex flex-col items-center"
                >
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="group relative flex items-center gap-4 px-10 py-5 bg-white/5 border border-white/20 rounded-2xl font-black text-xs uppercase tracking-[0.3em] text-white hover:text-neon hover:border-neon/40 hover:bg-neon/5 transition-all duration-500 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-neon/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                        <MessageSquarePlus size={18} className="relative z-10" />
                        <span className="relative z-10">Submit a Review</span>
                    </button>
                    <p className="mt-6 text-white/40 text-[10px] font-black uppercase tracking-widest text-center">
                        Every Architect of progress deserves to be heard.
                    </p>
                </motion.div>

                {/* Trusted By */}
                <div className="mt-24 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-10 md:gap-20 opacity-30">
                    {["FORBES", "TECHCRUNCH", "WIRED", "VERGE", "FAST COMPANY"].map(b => (
                        <span key={b} className="text-white font-black text-sm tracking-[0.4em]">{b}</span>
                    ))}
                </div>
            </div>
        </section>
    );
}
