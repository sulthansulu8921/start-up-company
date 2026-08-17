"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Star, Send, Heart } from "lucide-react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { sendInstantNotification } from "@/lib/notifications";

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
            status: "approved", // Auto-approve for instant visibility
            createdAt: serverTimestamp()
        };

        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 150);

        try {
            const firestorePromise = addDoc(collection(db, "reviews"), reviewData);

            firestorePromise
                .catch(err => console.error("BG review save failed:", err));

            sendInstantNotification(`New Review Submission from: ${reviewData.name}`);
        } catch (error) {
            console.error("Submission trigger error:", error);
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
                        className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-lg bg-white border border-slate-200 rounded-3xl p-8 md:p-10 overflow-hidden shadow-2xl"
                    >
                        {/* Background Glow */}
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none" />

                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-700 transition-colors"
                            aria-label="Close review modal"
                        >
                            <X size={20} />
                        </button>

                        {!isSubmitted ? (
                            <>
                                <div className="mb-8 text-center">
                                    <h3 className="text-2xl font-black font-sora text-slate-900 mb-2">Share Your <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">Success</span></h3>
                                    <p className="text-slate-600 text-xs font-semibold">Your feedback helps us architect better digital futures.</p>
                                </div>

                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-5"
                                >
                                    <input type="hidden" name="_subject" value="New Client Review - NanoRays Solution" />
                                    <input type="hidden" name="_template" value="table" />

                                    <div className="flex justify-center gap-2 mb-6">
                                        {[1, 2, 3, 4, 5].map((s) => (
                                            <button
                                                key={s}
                                                type="button"
                                                onClick={() => setRating(s)}
                                                className="transition-transform hover:scale-110"
                                                aria-label={`Rate ${s} stars`}
                                            >
                                                <Star
                                                    size={28}
                                                    fill={s <= rating ? "#F59E0B" : "transparent"}
                                                    className={s <= rating ? "text-amber-500" : "text-slate-300"}
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
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all font-semibold text-xs md:text-sm"
                                        />
                                        <input
                                            required
                                            name="Company/Role"
                                            placeholder="Company or Role"
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all font-semibold text-xs md:text-sm"
                                        />
                                    </div>

                                    <textarea
                                        required
                                        name="Review Message"
                                        placeholder="How was your experience working with NanoRays?"
                                        rows={4}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all font-semibold text-xs md:text-sm resize-none"
                                    />

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-4 bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED] hover:from-[#1d4ed8] hover:to-[#6d28d9] text-white rounded-xl font-extrabold text-xs uppercase tracking-widest flex items-center justify-center gap-3 shadow-md transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? "Sending..." : "Submit Review"} <Send size={15} className={isSubmitting ? "animate-pulse" : ""} />
                                    </button>
                                </form>
                            </>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-center py-10"
                            >
                                <div className="w-16 h-16 bg-rose-50 border border-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Heart className="text-rose-500 animate-pulse" size={32} fill="#F43F5E" />
                                </div>
                                <h3 className="text-2xl font-black font-sora text-slate-900 mb-3">You&apos;re Awesome!</h3>
                                <p className="text-slate-600 font-medium leading-relaxed max-w-xs mx-auto text-sm">
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
