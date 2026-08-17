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

        const timeoutId = setTimeout(() => {
            setLoading(false);
        }, 2000);

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
        <motion.section
            initial={{ opacity: 0.9, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            id="testimonials"
            className="py-20 relative overflow-hidden bg-[#EFF6FF] text-slate-900 rounded-t-[3rem] md:rounded-t-[4rem] shadow-[0_-25px_60px_rgba(0,0,0,0.06)] border-t border-sky-200/90 z-50"
        >
            {/* Dedicated High-Res Executive Global Leadership Photo Background */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#EFF6FF]/96 via-[#DBEAFE]/90 to-[#EFF6FF]/96 pointer-events-none" />

            <ReviewModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <div className="absolute w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full -bottom-48 -left-48 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex px-3.5 py-1.5 rounded-full bg-violet-50 border border-violet-200/80 text-violet-700 text-[10px] font-black uppercase tracking-[0.25em] mb-4 shadow-sm"
                    >
                        Proof of Work
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black font-sora text-slate-900 mb-4 tracking-tight"
                    >
                        Global <span className="bg-gradient-to-r from-[#7619FF] via-[#9333EA] to-[#3B82F6] bg-clip-text text-transparent">Testimonials</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed"
                    >
                        Listen to the architects of industry-leading growth cycles.
                    </motion.p>
                </div>

                {/* Testimonials Display */}
                {loading ? (
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="break-inside-avoid p-8 rounded-3xl bg-white border border-slate-200 animate-pulse shadow-sm">
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, s) => (
                                        <div key={s} className="w-3.5 h-3.5 rounded-full bg-slate-200" />
                                    ))}
                                </div>
                                <div className="h-4 bg-slate-200 rounded-full w-full mb-3" />
                                <div className="h-4 bg-slate-200 rounded-full w-4/5 mb-8" />
                                <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                                    <div className="w-12 h-12 rounded-full bg-slate-200" />
                                    <div className="space-y-2">
                                        <div className="h-3 bg-slate-200 rounded-full w-24" />
                                        <div className="h-2 bg-slate-200 rounded-full w-16" />
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
                                className="break-inside-avoid p-8 rounded-3xl bg-white/90 border border-slate-200/90 hover:border-violet-300 shadow-md shadow-[#7619FF]/5 hover:shadow-xl hover:shadow-[#7619FF]/15 transition-all duration-300 group"
                            >
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, starI) => (
                                        <Star key={starI} size={15} fill={starI < t.rating ? "#F59E0B" : "transparent"} className={starI < t.rating ? "text-amber-500" : "text-slate-300"} />
                                    ))}
                                </div>
                                <p className="text-slate-700 text-sm md:text-base leading-relaxed font-semibold mb-8 italic">
                                    &quot;{t.content}&quot;
                                </p>
                                <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                                    <div className="w-11 h-11 rounded-full bg-violet-50 border border-violet-100 flex items-center justify-center overflow-hidden flex-shrink-0">
                                        <span className="text-[#7619FF] font-extrabold text-sm font-sora">
                                            {t.name.charAt(0)}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-black text-slate-900 font-sora group-hover:text-[#7619FF] transition-colors">
                                            {t.name}
                                        </h3>
                                        <p className="text-[10px] text-slate-500 font-extrabold uppercase tracking-wider">
                                            {t.role}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200 shadow-sm">
                        <MessageSquarePlus className="text-violet-400 mx-auto mb-6" size={48} />
                        <h3 className="text-2xl font-black text-slate-900 mb-3 font-sora">Your Success Story Starts Here</h3>
                        <p className="text-slate-500 font-medium max-w-sm mx-auto mb-8">
                            Be the first to architect our global legacy with your unique insight.
                        </p>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#7619FF] via-[#9333EA] to-[#3B82F6] hover:from-[#6610E0] hover:to-[#2563EB] text-white rounded-xl font-extrabold text-xs uppercase tracking-widest shadow-md shadow-[#7619FF]/20 transition-all"
                        >
                            <span>Launch Your Review</span>
                        </button>
                    </div>
                )}

                {/* Submit Review CTA */}
                {(testimonials.length > 0 || SEED_REVIEWS.length > 0) && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mt-16 flex flex-col items-center"
                    >
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="group relative flex items-center gap-3 px-8 py-4 bg-white border border-slate-200 hover:border-violet-300 rounded-2xl font-extrabold text-xs uppercase tracking-widest text-slate-800 hover:text-[#7619FF] shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <MessageSquarePlus size={18} className="text-[#7619FF]" />
                            <span>Submit a Review</span>
                        </button>
                    </motion.div>
                )}

                {/* Trusted By Businesses */}
                <div className="mt-20 pt-10 border-t border-slate-200 text-center">
                    <span className="text-xs font-black text-slate-400 uppercase tracking-[0.25em] mb-4 block">Trusted by Businesses & Startups</span>
                    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
                        {["RETAIL & ECOMMERCE", "HEALTHCARE & CLINICS", "EDUCATION & ACADEMIES", "REAL ESTATE GROUPS", "TECHNOLOGY STARTUPS"].map(b => (
                            <span key={b} className="text-slate-600 font-bold text-xs tracking-widest bg-white/80 px-4 py-2 rounded-xl border border-slate-200/90 shadow-sm">{b}</span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
