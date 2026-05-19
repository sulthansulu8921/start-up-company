"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Star, Send, Heart } from "lucide-react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

interface ReviewModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ReviewModal({ isOpen, onClose }: ReviewModalProps) {
    const [rating, setRating] = useState(5);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        const form = e.currentTarget;
        const formData = new FormData(form);

        const reviewData = {
            name: formData.get("Client Name"),
            role: formData.get("Company/Role"),
            content: formData.get("Review Message"),
            rating: rating,
            status: "pending", // Default to pending for manual approval
            createdAt: serverTimestamp()
        };

        try {
            // Fire both Firestore and FormSubmit in parallel for maximum speed
            const firestorePromise = addDoc(collection(db, "reviews"), reviewData);
            const emailPromise = fetch("https://formsubmit.co/nanorayssolution@gmail.com", {
                method: "POST",
                body: formData,
                mode: 'no-cors'
            });

            // Wait for both to finish (or just one if we want to be super fast)
            await Promise.allSettled([firestorePromise, emailPromise]);

            // Show success instantly
            setIsSubmitted(true);
        } catch (error) {
            console.error("Submission failed", error);
            // Fallback success state (still show success if it might have gone through)
            setIsSubmitted(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-xl"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-lg bg-gray-900 border border-white/10 rounded-[32px] p-8 md:p-12 overflow-hidden shadow-2xl"
                    >
                        {/* Background Glow */}
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-neon/10 blur-[80px] rounded-full pointer-events-none" />

                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 text-white/40 hover:text-white transition-colors"
                        >
                            <X size={24} />
                        </button>

                        {!isSubmitted ? (
                            <>
                                <div className="mb-10 text-center">
                                    <h3 className="text-3xl font-black font-sora text-white mb-3">Share Your <span className="text-neon">Success</span></h3>
                                    <p className="text-white/60 text-sm font-bold">Your feedback helps us architect better digital futures.</p>
                                </div>

                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    <input type="hidden" name="_subject" value="New Client Review - NanoRays Solution" />
                                    <input type="hidden" name="_template" value="table" />

                                    <div className="flex justify-center gap-2 mb-8">
                                        {[1, 2, 3, 4, 5].map((s) => (
                                            <button
                                                key={s}
                                                type="button"
                                                onClick={() => setRating(s)}
                                                className="transition-transform hover:scale-110"
                                            >
                                                <Star
                                                    size={32}
                                                    fill={s <= rating ? "#CCFF00" : "transparent"}
                                                    className={s <= rating ? "text-neon" : "text-white/20"}
                                                />
                                            </button>
                                        ))}
                                        <input type="hidden" name="Rating" value={rating} />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <input
                                            required
                                            name="Client Name"
                                            placeholder="Your Full Name"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-neon/40 transition-all font-bold text-sm"
                                        />
                                        <input
                                            required
                                            name="Company/Role"
                                            placeholder="Company or Role"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-neon/40 transition-all font-bold text-sm"
                                        />
                                    </div>

                                    <textarea
                                        required
                                        name="Review Message"
                                        placeholder="How was your experience working with NanoRays?"
                                        rows={4}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-neon/40 transition-all font-bold text-sm resize-none"
                                    />

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-5 bg-neon text-black rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(204,255,0,0.3)] transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? "Sending..." : "Submit Review"} <Send size={16} className={isSubmitting ? "animate-pulse" : ""} />
                                    </button>
                                </form>
                            </>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-center py-12"
                            >
                                <div className="w-20 h-20 bg-neon/20 rounded-full flex items-center justify-center mx-auto mb-8">
                                    <Heart className="text-neon animate-pulse" size={40} fill="#CCFF00" />
                                </div>
                                <h3 className="text-3xl font-black font-sora text-white mb-4">You&apos;re Awesome!</h3>
                                <p className="text-white/60 font-bold leading-relaxed max-w-xs mx-auto">
                                    Thank you for your review. We truly value our partnership and can&apos;t wait to build more together.
                                </p>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
