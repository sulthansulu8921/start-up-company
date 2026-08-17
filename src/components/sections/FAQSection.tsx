"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Zap } from "lucide-react";
import Script from "next/script";

const faqs = [
    {
        q: "How much does a professional website cost in India?",
        a: "Our website packages start from ₹5,000 for basic business sites and go up to ₹25,000+ for premium, custom-designed platforms with SEO and E-commerce. Every project includes mobile responsiveness, SEO setup, and 30 days of free support.",
    },
    {
        q: "How long does it take to build a website?",
        a: "Standard business websites are delivered in 2–4 weeks. High-complexity platforms with custom features may take 6+ weeks. We provide you with a clear timeline during our free consultation.",
    },
    {
        q: "Do you provide SEO services in Kerala?",
        a: "Yes! We specialize in local SEO for businesses in Kerala and across India. Our packages include keyword research, technical SEO, Google Business Profile optimization, and monthly rank tracking reports.",
    },
    {
        q: "Can you help my business rank #1 on Google?",
        a: "Absolutely. We've helped multiple businesses in India secure first-page Google rankings. Our approach combines technical SEO, high-quality content strategy, and authoritative backlink building tailored to your industry.",
    },
    {
        q: "Do you offer post-launch support and maintenance?",
        a: "Yes. We provide monthly 'Business Excellence' support packages covering security monitoring, performance tuning, content updates, and 24/7 priority technical support.",
    },
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a,
        },
    })),
};


export default function FAQSection() {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <motion.section
            initial={{ opacity: 0.9, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            id="faq"
            className="py-20 relative overflow-hidden bg-white text-slate-900 rounded-t-[3rem] md:rounded-t-[4rem] shadow-[0_-25px_60px_rgba(0,0,0,0.06)] border-t border-slate-200/90 z-60"
        >
            {/* Dedicated High-Res Geometric Architectural Photo Background */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#FAFBFF] via-[#F1F5F9] to-[#FAFBFF] pointer-events-none" />
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50 border border-violet-200/80 text-violet-700 text-[10px] font-black uppercase tracking-[0.25em] mb-4 shadow-sm"
                    >
                        <Zap size={12} className="text-[#7619FF]" /> System Info
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black font-sora text-slate-900 mb-4 tracking-tight"
                    >
                        Frequently Asked <span className="bg-gradient-to-r from-[#7619FF] via-[#9333EA] to-[#3B82F6] bg-clip-text text-transparent">Questions</span>
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
                            className={`rounded-3xl border transition-all duration-300 overflow-hidden ${open === i
                                ? "bg-white border-violet-300 shadow-xl shadow-[#7619FF]/10 ring-2 ring-[#7619FF]/10"
                                : "bg-white/90 border-slate-200/90 hover:border-violet-200 shadow-sm"
                                }`}
                        >
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="w-full flex items-center justify-between gap-6 p-7 md:p-8 text-left"
                            >
                                <span className={`font-black text-base lg:text-lg transition-colors font-sora ${open === i ? "text-[#7619FF]" : "text-slate-900"}`}>
                                    {faq.q}
                                </span>
                                <div className={`flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all ${open === i ? "bg-[#7619FF] text-white rotate-0 shadow-md shadow-[#7619FF]/25" : "bg-violet-50 text-[#7619FF] border border-violet-100"
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
                                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-7 md:px-8 pb-8 pt-0">
                                            <div className="h-px bg-slate-100 mb-6" />
                                            <p className="text-slate-600 leading-relaxed font-semibold text-sm lg:text-base">
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
                    <p className="text-slate-500 text-xs font-black uppercase tracking-[0.2em]">
                        Still have inquiries? <a href="/contact" className="text-[#7619FF] hover:underline decoration-violet-300 underline-offset-4 font-bold">Talk to an Architect →</a>
                    </p>
                </motion.div>
            </div>
        </motion.section>
    );
}
