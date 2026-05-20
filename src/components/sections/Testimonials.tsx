"use client";

import { motion } from "framer-motion";
import { Quote, Star, Zap, MessageSquarePlus, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import ReviewModal from "../ReviewModal";
import { db } from "@/lib/firebase";
import { collection, query, where, orderBy, onSnapshot } from "firebase/firestore";

interface Testimonial {
    id: string;
    name: string;
    role: string;
    content: string;
    rating: number;
    createdAt?: any;
}

const SEED_REVIEWS: Testimonial[] = [
    {
        id: "seed-1",
        name: "Rahul Sharma",
        role: "Startup Founder, Kochi",
        content: "NanoRays transformed our digital presence. Their attention to detail in website development and SEO helped us rank Page 1 in just two months.",
        rating: 5
    },
    {
        id: "seed-2",
        name: "Sarah Ahmed",
        role: "Marketing Manager, Dubai",
        content: "High-quality branding and fast turnaround. Working with NanoRays from Dubai was seamless. Their WhatsApp integration is a game-changer for leads.",
        rating: 5
    },
    {
        id: "seed-3",
        name: "Vikas Menon",
        role: "Business Owner, Calicut",
        content: "Highly professional service at very affordable prices. The team is very responsive and understands the Kerala market perfectly.",
        rating: 5
    }
];

export default function Testimonials() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        // Fail-fast fallback: If Firestore takes > 2s, stop loading to show empty state/CTA
        const timeoutId = setTimeout(() => {
            setLoading(false);
        }, 2000);

        // Fetch real testimonials from Firestore
        const q = query(
            collection(db, "reviews"),
            where("status", "==", "approved"),
            orderBy("createdAt", "desc")
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            clearTimeout(timeoutId);
            const reviewsData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as Testimonial[];
            setTestimonials(reviewsData);
            setLoading(false);
        }, (error) => {
            console.error("Error fetching testimonials:", error);
            clearTimeout(timeoutId);
            setLoading(false);
        });

        return () => {
            unsubscribe();
            clearTimeout(timeoutId);
        };
    }, []);

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

                {/* Testimonials Display */}
                {loading ? (
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="break-inside-avoid p-8 rounded-[32px] bg-white/5 border border-white/10 animate-pulse">
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, s) => (
                                        <div key={s} className="w-3 h-3 rounded-full bg-white/10" />
                                    ))}
                                </div>
                                <div className="h-4 bg-white/10 rounded-full w-full mb-3" />
                                <div className="h-4 bg-white/10 rounded-full w-4/5 mb-8" />
                                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                                    <div className="w-12 h-12 rounded-full bg-white/10" />
                                    <div className="space-y-2">
                                        <div className="h-3 bg-white/10 rounded-full w-24" />
                                        <div className="h-2 bg-white/10 rounded-full w-16" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (testimonials.length > 0 || SEED_REVIEWS.length > 0) ? (
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                        {(testimonials.length > 0 ? testimonials : SEED_REVIEWS).map((t, i) => (
                            <motion.div
                                key={t.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="break-inside-avoid p-8 rounded-[32px] glass-dark border border-white/20 hover:border-white/40 transition-all duration-500 group"
                            >
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, starI) => (
                                        <Star key={starI} size={14} fill={starI < t.rating ? "#CCFF00" : "transparent"} className={starI < t.rating ? "text-neon" : "text-white/20"} />
                                    ))}
                                </div>
                                <p className="text-white/90 text-base leading-relaxed font-bold mb-8 italic">
                                    &quot;{t.content}&quot;
                                </p>
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
                ) : (
                    <div className="text-center py-24 bg-white/5 rounded-[40px] border border-dashed border-white/10">
                        <MessageSquarePlus className="text-neon/20 mx-auto mb-6" size={48} />
                        <h3 className="text-2xl font-black text-white mb-3">Your Success Story Starts Here</h3>
                        <p className="text-white/40 font-bold max-w-sm mx-auto mb-10">
                            Be the first to architect our global legacy with your unique insight.
                        </p>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="group relative inline-flex items-center gap-4 px-10 py-5 bg-neon text-black rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:shadow-[0_0_40px_rgba(204,255,0,0.3)] transition-all duration-500"
                        >
                            <span>Launch Your Review</span>
                        </button>
                    </div>
                )}

                {/* Submit Review CTA - Only show if we have reviews (since it's inside the empty state too) */}
                {testimonials.length > 0 && (
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
                    </motion.div>
                )}

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
