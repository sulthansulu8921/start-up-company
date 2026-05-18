"use client";

import { motion } from "framer-motion";
import {
    MessageSquare, Palette, Code2, Rocket,
    HeartHandshake, ArrowRight, Zap, Target, Megaphone, CreditCard
} from "lucide-react";

const steps = [
    {
        num: "01",
        title: "Planning & Strategy",
        desc: "We discuss your ideas and business goals to plan a complete roadmap for success.",
        icon: MessageSquare,
        accent: "text-amber-400",
        bg: "bg-amber-400/5",
    },
    {
        num: "02",
        title: "Branding & Posters",
        desc: "We create your business logo, brand identity, and stunning festival or promotional posters.",
        icon: Palette,
        accent: "text-neon",
        bg: "bg-neon/5",
    },
    {
        num: "03",
        title: "Website Building & Deployment",
        desc: "We design, develop, and deploy a high-quality, mobile-responsive website for your business.",
        icon: Code2,
        accent: "text-sky-400",
        bg: "bg-sky-400/5",
    },
    {
        num: "04",
        title: "SEO Optimization",
        desc: "We optimize your website to rank on the first page of Google to attract more visitors.",
        icon: Target,
        accent: "text-purple-400",
        bg: "bg-purple-400/5",
    },
    {
        num: "05",
        title: "Digital Marketing",
        desc: "We launch targeted social media campaigns and online ads to generate consistent leads.",
        icon: Megaphone,
        accent: "text-neon",
        bg: "bg-neon/5",
    },
    {
        num: "06",
        title: "Website Maintenance",
        desc: "We provide monthly maintenance, security updates, and full-time support so you never worry.",
        icon: HeartHandshake,
        accent: "text-emerald-400",
        bg: "bg-emerald-400/5",
    },
    {
        num: "07",
        title: "Support & Payment",
        desc: "We provide ongoing technical assistance and manage flexible, secure payment structures for our services.",
        icon: CreditCard,
        accent: "text-sky-400",
        bg: "bg-sky-400/5",
    },
];

export default function ProcessTimeline() {
    return (
        <section id="process" className="py-32 relative bg-transparent overflow-hidden">
            <div className="absolute inset-0 bg-dark-gray/30 cyber-grid opacity-[0.02]" />

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex px-3 py-1.5 rounded-lg bg-white/5 border border-white/20 text-white/80 text-[10px] font-black uppercase tracking-[0.2em] mb-6"
                    >
                        Step-by-Step Guide
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-black font-sora text-white mb-6 tracking-tighter"
                    >
                        Our <span className="text-neon">Process</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/80 text-lg font-bold max-w-2xl mx-auto"
                    >
                        A clear and simple framework designed to launch and grow your business online.
                    </motion.p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line with gradient */}
                    <div className="absolute left-8 top-10 bottom-10 w-px bg-gradient-to-b from-neon/60 via-white/20 to-transparent hidden md:block px-[0.5px]" />

                    <div className="space-y-12">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                className="group relative flex gap-8 md:gap-12 items-start"
                            >
                                {/* Step Marker */}
                                <div className={`relative flex-shrink-0 w-16 h-16 rounded-2xl ${step.bg} border border-white/10 flex items-center justify-center z-10 group-hover:border-neon/50 transition-all duration-500 shadow-lg group-hover:shadow-neon/20`}>
                                    <step.icon size={24} className={`${step.accent} group-hover:scale-110 transition-transform`} />

                                    {/* Number Badge */}
                                    <div className="absolute -top-3 -right-3 px-2 py-0.5 rounded bg-black border border-white/20">
                                        <span className="text-[10px] font-black text-white/90">{step.num}</span>
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className="flex-1 p-8 rounded-3xl glass-dark border border-white/10 hover:border-white/20 transition-all duration-500 group-hover:bg-white/[0.04]">
                                    <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
                                        <h3 className="text-xl font-black text-white font-sora tracking-tight group-hover:text-neon transition-colors">
                                            {step.title}
                                        </h3>
                                        <div className="px-3 py-1 rounded bg-neon/10 border border-neon/30 flex items-center gap-2">
                                            <Zap size={10} className="text-neon fill-neon" />
                                            <span className="text-[10px] font-black text-neon uppercase tracking-widest">Active Phase</span>
                                        </div>
                                    </div>
                                    <p className="text-white/90 text-base leading-relaxed font-bold">
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
                    className="text-center mt-20"
                >
                    <button className="btn-neon px-12 py-5 shadow-neon">
                        Get Started <ArrowRight size={18} className="ml-2" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
