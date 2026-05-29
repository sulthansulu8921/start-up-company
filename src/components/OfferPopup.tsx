"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { sendInstantNotification } from "@/lib/notifications";
import { sendLeadEmail } from "@/lib/lead-engine";

// --- Configuration Panel ---
const SHOW_POSTER = false;
const POSTER_IMAGE = "/images/special-offer.png";

const services = [
    "Website Design & Development",
    "SEO Optimization",
    "Digital Marketing",
    "Branding & Logo Design",
    "Poster Design",
    "Website Maintenance",
    "UI/UX Design",
    "Other / Not Sure Yet",
];

export default function OfferPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [mode, setMode] = useState<"poster" | "form" | "success">(SHOW_POSTER ? "poster" : "form");
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
    });

    useEffect(() => {
        // Wait for preloader to finish (Preloader takes 2.5s, we wait 2.8s)
        const timer = setTimeout(() => {
            const hasSeen = sessionStorage.getItem("offer_popup_seen");
            if (!hasSeen) {
                setIsOpen(true);
            }
        }, 2800);

        return () => clearTimeout(timer);
    }, []);

    const closeHandler = () => {
        setIsOpen(false);
        sessionStorage.setItem("offer_popup_seen", "true");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // 1. INSTANT UI TRANSITION
        setLoading(false);
        setMode("success");
        
        // Auto close after 4 seconds
        setTimeout(() => {
            closeHandler();
        }, 4000);

        // 2. Background Persistence & Lead Delivery (Non-blocking)
        (async () => {
            try {
                // Save to Firestore
                await addDoc(collection(db, "leads"), {
                    ...formData,
                    type: "Popup Offer Enquiry",
                    status: "new",
                    createdAt: serverTimestamp()
                });

                // Send Email via Lead Engine
                await sendLeadEmail({
                    from_name: formData.name,
                    from_email: formData.email,
                    from_phone: formData.phone,
                    message: formData.message,
                    plan: formData.service || "Direct Enquiry",
                    subject: `🚀 New Lead: ${formData.name} — NanoRays Popup Offer`,
                });
                
                // Notify Admin
                sendInstantNotification(`Popup Lead: ${formData.name} (${formData.phone}) interested in ${formData.service}`);
            } catch (err) {
                console.error("🚨 Popup Lead Error:", err);
            }
        })();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeHandler}
                        className="absolute inset-0 bg-black/70 backdrop-blur-md"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className={`relative w-full overflow-hidden bg-gray-900 border border-white/10 rounded-3xl shadow-2xl ${
                            mode === "poster" ? "max-w-3xl" : "max-w-xl"
                        }`}
                    >
                        {/* Global Close Button */}
                        <button
                            onClick={closeHandler}
                            className="absolute top-4 right-4 z-50 p-2 text-white/50 hover:text-white bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full transition-all"
                        >
                            <X size={20} />
                        </button>

                        <AnimatePresence mode="wait">
                            {mode === "poster" && (
                                <motion.div
                                    key="poster"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="relative flex flex-col"
                                >
                                    <div className="relative w-full bg-black">
                                        <Image
                                            src={POSTER_IMAGE}
                                            alt="Special Offer"
                                            width={800}
                                            height={800}
                                            className="w-full h-auto object-contain max-h-[60vh]"
                                            priority
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                                    </div>
                                    <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 bg-black relative z-10 -mt-2">
                                        <div>
                                            <h3 className="text-2xl font-black font-sora text-white mb-2">Claim Your Exclusive Offer</h3>
                                            <p className="text-white/60 font-bold text-sm">Transform your digital presence today with our limited-time premium bundle.</p>
                                        </div>
                                        <button
                                            onClick={() => setMode("form")}
                                            className="btn-neon whitespace-nowrap w-full sm:w-auto flex-shrink-0"
                                        >
                                            Secure Offer & Enquire <ArrowRight size={16} />
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {mode === "form" && (
                                <motion.div
                                    key="form"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    className="p-6 sm:p-10 relative"
                                >
                                    {/* Decorative Glows */}
                                    <div className="absolute -top-32 -left-32 w-64 h-64 bg-neon/10 blur-[100px] rounded-full pointer-events-none" />
                                    <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

                                    <div className="mb-8 text-center relative z-10">
                                        <h3 className="text-3xl font-black font-sora text-white mb-2">
                                            Let's Build <span className="text-neon">Together</span>
                                        </h3>
                                        <p className="text-white/60 font-bold text-sm">
                                            Fill out the details below and our team will get back to you immediately.
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="text-white/50 text-[10px] font-black uppercase tracking-widest ml-1 mb-1 block">Name *</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="Your Name"
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 font-bold text-sm focus:outline-none focus:border-neon/50 transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label className="text-white/50 text-[10px] font-black uppercase tracking-widest ml-1 mb-1 block">Phone *</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    required
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="Your Phone Number"
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 font-bold text-sm focus:outline-none focus:border-neon/50 transition-all"
                                                />
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <label className="text-white/50 text-[10px] font-black uppercase tracking-widest ml-1 mb-1 block">Email (Optional)</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Your Email Address"
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 font-bold text-sm focus:outline-none focus:border-neon/50 transition-all"
                                            />
                                        </div>

                                        <div>
                                            <label className="text-white/50 text-[10px] font-black uppercase tracking-widest ml-1 mb-1 block">Service Needed *</label>
                                            <select
                                                name="service"
                                                required
                                                value={formData.service}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-bold text-sm focus:outline-none focus:border-neon/50 transition-all appearance-none cursor-pointer"
                                            >
                                                <option value="" className="bg-black text-white/50">— Select a service —</option>
                                                {services.map((s, i) => (
                                                    <option key={i} value={s} className="bg-black text-white">{s}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label className="text-white/50 text-[10px] font-black uppercase tracking-widest ml-1 mb-1 block">Message</label>
                                            <textarea
                                                name="message"
                                                rows={3}
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Tell us about your requirements..."
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 font-bold text-sm focus:outline-none focus:border-neon/50 transition-all resize-none"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="btn-neon w-full py-4 mt-2 text-sm"
                                        >
                                            {loading ? "Submitting..." : (
                                                <><Send size={16} /> Submit Enquiry</>
                                            )}
                                        </button>
                                    </form>
                                </motion.div>
                            )}

                            {mode === "success" && (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="p-12 flex flex-col items-center justify-center text-center"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                                        className="w-24 h-24 rounded-full bg-neon/10 border border-neon/30 flex items-center justify-center mb-6"
                                    >
                                        <CheckCircle2 size={48} className="text-neon" />
                                    </motion.div>
                                    <h3 className="text-3xl font-black font-sora text-white mb-3">Message Received!</h3>
                                    <p className="text-white/60 font-bold text-sm max-w-sm">
                                        Thank you for reaching out. Our strategy team will get back to you shortly to discuss your custom solution.
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
