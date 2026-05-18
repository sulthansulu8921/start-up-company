"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Zap } from "lucide-react";

const faqs = [
    {
        q: "How long does a digital transformation project take?",
        a: "Standard project cycles range from 2–4 weeks. High-complexity enterprise systems with custom features may take 6+ weeks of strategic development.",
    },
    {
        q: "Do you provide repository access?",
        a: "Yes. Upon project completion and final audit, we provide full access to the project assets, including all documentation and launch protocols.",
    },
    {
        q: "What standards do you apply to business platforms?",
        a: "We utilize high-performance frameworks and advanced motion engines to ensure professional speed, global scalability, and brand prestige.",
    },
    {
        q: "How is search visibility handled in your builds?",
        a: "Every project includes foundational visibility architecture, including professional site structures, unified metadata, and global search engine optimization.",
    },
    {
        q: "Do you offer post-launch support?",
        a: "We provide monthly 'Business Excellence' support packages that include security monitoring, performance tuning, and 24/7 priority support.",
    },
];

export default function FAQSection() {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section id="faq" className="py-32 relative bg-transparent overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex px-3 py-1.5 rounded-lg bg-white/5 border border-white/20 text-white/80 text-[10px] font-black uppercase tracking-[0.2em] mb-6"
                    >
                        System Info
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-black font-sora text-white mb-6 tracking-tighter"
                    >
                        Frequent <span className="text-neon">Queries</span>
                    </motion.h2>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`rounded-2xl border transition-all duration-500 overflow-hidden ${open === i
                                ? "bg-white/10 border-neon/50 shadow-[0_0_20px_rgba(204,255,0,0.15)]"
                                : "bg-white/[0.04] border-white/10 hover:border-white/20"
                                }`}
                        >
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="w-full flex items-center justify-between gap-6 p-8 text-left"
                            >
                                <span className={`font-black text-base lg:text-lg transition-colors ${open === i ? "text-neon" : "text-white/90"}`}>
                                    {faq.q}
                                </span>
                                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${open === i ? "bg-neon text-black rotate-0" : "bg-white/10 text-white/60"
                                    }`}>
                                    {open === i ? <Minus size={16} strokeWidth={3} /> : <Plus size={16} strokeWidth={3} />}
                                </div>
                            </button>

                            <AnimatePresence initial={false}>
                                {open === i && (
                                    <motion.div
                                        key="content"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-8 pb-8 pt-0">
                                            <div className="h-px bg-white/10 mb-6" />
                                            <p className="text-white/90 leading-relaxed font-bold text-sm lg:text-base">
                                                {faq.a}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <p className="text-white/60 text-xs font-black uppercase tracking-[0.2em]">
                        Still have inquiries? <a href="#contact" className="text-neon hover:underline decoration-neon/40 underline-offset-4">Talk to an Architect →</a>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
