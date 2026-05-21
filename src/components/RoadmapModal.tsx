"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trophy, Rocket, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function RoadmapModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        // Trigger after 45 seconds or on exit intent (simulated for simplicity)
        const timer = setTimeout(() => {
            const hasSeen = localStorage.getItem("roadmap_modal_seen");
            if (!hasSeen) {
                setIsOpen(true);
            }
        }, 45000);

        return () => clearTimeout(timer);
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(e.currentTarget);

        try {
            await addDoc(collection(db, "leads"), {
                name: formData.get("name"),
                contact: formData.get("contact"),
                challenge: formData.get("challenge"),
                type: "Growth Roadmap",
                status: "new",
                createdAt: serverTimestamp()
            });
            setIsSubmitted(true);
            localStorage.setItem("roadmap_modal_seen", "true");
            setTimeout(() => setIsOpen(false), 1500);
        } catch (error) {
            console.error("Lead capture failed:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const closeHandler = () => {
        setIsOpen(false);
        localStorage.setItem("roadmap_modal_seen", "true");
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[110] flex items-center justify-center px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeHandler}
                        className="absolute inset-0 bg-black/60 backdrop-blur-md"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-xl bg-gray-900 border border-white/10 rounded-[40px] p-8 md:p-12 overflow-hidden shadow-2xl"
                    >
                        {/* Background Decorative elements */}
                        <div className="absolute -top-24 -left-24 w-64 h-64 bg-neon/10 blur-[100px] rounded-full pointer-events-none" />
                        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

                        <button
                            onClick={closeHandler}
                            className="absolute top-6 right-6 p-2 text-white/40 hover:text-white transition-colors"
                        >
                            <X size={24} />
                        </button>

                        {!isSubmitted ? (
                            <>
                                <div className="mb-10">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon/10 border border-neon/20 text-neon text-[10px] font-black uppercase tracking-widest mb-6">
                                        <Trophy size={10} /> Limited Slot Available
                                    </div>
                                    <h3 className="text-4xl font-black font-sora text-white mb-4 tracking-tighter leading-tight">
                                        Get Your <span className="text-neon">Free</span> Digital Growth Roadmap
                                    </h3>
                                    <p className="text-white/60 font-bold leading-relaxed">
                                        Our architects will audit your business and provide a custom blueprint to scale your revenue.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <input
                                            required
                                            name="name"
                                            placeholder="Your Name"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-neon/40 transition-all font-bold text-sm"
                                        />
                                        <input
                                            required
                                            name="contact"
                                            placeholder="WhatsApp or Email"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-neon/40 transition-all font-bold text-sm"
                                        />
                                    </div>
                                    <textarea
                                        required
                                        name="challenge"
                                        placeholder="What's your biggest business challenge right now?"
                                        rows={3}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-neon/40 transition-all font-bold text-sm resize-none"
                                    />

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-5 bg-neon text-black rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(204,255,0,0.3)] transition-all active:scale-95 disabled:opacity-50"
                                    >
                                        {isSubmitting ? (
                                            <Loader2 className="animate-spin" size={18} />
                                        ) : (
                                            <>Request Your Blueprint <Rocket size={16} /></>
                                        )}
                                    </button>
                                </form>

                                <div className="mt-8 flex items-center justify-center gap-6">
                                    {[
                                        "Audit Included",
                                        "Custom Strategy",
                                        "Zero Cost"
                                    ].map((item) => (
                                        <div key={item} className="flex items-center gap-2">
                                            <CheckCircle2 size={12} className="text-neon" />
                                            <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div className="text-center py-12">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-20 h-20 bg-neon/20 rounded-full flex items-center justify-center mx-auto mb-8"
                                >
                                    <CheckCircle2 className="text-neon" size={40} />
                                </motion.div>
                                <h3 className="text-3xl font-black font-sora text-white mb-4">Architecting Your Future</h3>
                                <p className="text-white/60 font-bold leading-relaxed max-w-xs mx-auto">
                                    Thank you! Our strategy team will reach out with your custom roadmap within 24 hours.
                                </p>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
