"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "How long does website development take?",
        answer: "The timeline depends on the complexity of the project. A standard business website typically takes 2-4 weeks, while larger e-commerce sites or custom applications may take 6-12 weeks."
    },
    {
        question: "Do you provide ongoing support?",
        answer: "Yes, we provide 24/7 technical support and maintenance packages to ensure your website stays up-to-date, secure, and performs optimally."
    },
    {
        question: "Is the website mobile responsive?",
        answer: "Absolutely! All our websites are built with a mobile-first approach, ensuring a seamless experience across smartphones, tablets, and desktops."
    },
    {
        question: "Do you provide SEO services?",
        answer: "Yes, we integrate SEO best practices into every website we build. We also offer dedicated digital marketing and SEO optimization packages."
    },
    {
        question: "Can you redesign existing websites?",
        answer: "Yes, we specialize in modernizing outdated websites. We can revamp your existing site with a fresh UI/UX, better performance, and modern features."
    }
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-navy">
            <div className="max-w-3xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-sora mb-6">Frequently Asked <span className="text-cyan">Questions</span></h2>
                    <p className="text-soft-gray/60">Find answers to common questions about our services and process.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <motion.div
                            key={idx}
                            className="rounded-2xl glass border border-white/5 overflow-hidden"
                        >
                            <button
                                className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors"
                                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                            >
                                <span className="text-lg font-bold font-sora text-white/90">{faq.question}</span>
                                <div className="shrink-0 w-8 h-8 rounded-full bg-royal/10 flex items-center justify-center text-cyan">
                                    {activeIndex === idx ? <Minus size={18} /> : <Plus size={18} />}
                                </div>
                            </button>
                            <AnimatePresence>
                                {activeIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 pt-0 text-soft-gray/70 leading-relaxed border-t border-white/5">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
