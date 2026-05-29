"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Bot, Cpu, Sparkles, Send, CheckCircle, ArrowRight, Loader2 } from "lucide-react";
import { sendLeadEmail } from "@/lib/lead-engine";
import { sendInstantNotification } from "@/lib/notifications";

const scanSteps = [
    "🤖 Initializing AI Search Crawler bots...",
    "🔍 Checking ChatGPT Search recommendation index...",
    "✨ Parsing Google Gemini citation status...",
    "⚡ Querying Perplexity AI directory links...",
    "📊 Checking Google AI Overview snippet eligibility..."
];

export default function AIEngineAuditWidget() {
    const [step, setStep] = useState(1); // 1 = Input info, 2 = Scanning, 3 = Complete
    const [scanIndex, setScanIndex] = useState(0);
    const [formData, setFormData] = useState({
        website: "",
        keyword: "",
        name: "",
        phone: "",
        email: ""
    });
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        if (step === 2) {
            const interval = setInterval(() => {
                setScanIndex((prev) => {
                    if (prev < scanSteps.length - 1) {
                        return prev + 1;
                    } else {
                        clearInterval(interval);
                        setStep(3);
                        return prev;
                    }
                });
            }, 1200);
            return () => clearInterval(interval);
        }
    }, [step]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMsg("");

        if (!formData.website.includes(".") || formData.website.length < 4) {
            setErrorMsg("Please enter a valid website URL.");
            return;
        }

        setLoading(true);

        try {
            const fullMessage = `AI visibility check requested from landing widget.
Website: ${formData.website}
Target Keyword: ${formData.keyword}
Requestor Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}`;

            // Send notification to the owner immediately
            sendInstantNotification(`🔥 AI Audit Request: ${formData.website} (${formData.name})`);

            // Submit lead to Formspree Lead Engine
            await sendLeadEmail({
                from_name: formData.name,
                from_email: formData.email,
                from_phone: formData.phone,
                subject: `AI Visibility Checker Lead: ${formData.website}`,
                message: fullMessage,
                plan: "Free AI Search Audit"
            });

            setStep(2); // Start scanning animation
        } catch (err) {
            console.error("Audit submission failed", err);
            setErrorMsg("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="relative py-24 overflow-hidden bg-black/40 border-t border-b border-white/5 backdrop-blur-md">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-500/10 blur-[130px] rounded-full opacity-60" />
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4"
                    >
                        <Brain size={12} className="animate-pulse" />
                        AI Search Optimizers
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-black font-sora text-white leading-tight tracking-tight mb-4">
                        Is Your Business Recommended <br /> by <span className="text-purple-400">ChatGPT & Gemini</span>?
                    </h2>
                    <p className="text-white/60 text-sm max-w-xl mx-auto">
                        AI search models are replacing classic Google pages. Enter your site details below, and we will analyze your visibility status.
                    </p>
                </div>

                <div className="glass-dark border border-white/10 rounded-[32px] p-8 md:p-12 relative overflow-hidden">
                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.form
                                key="input-step"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                onSubmit={handleFormSubmit}
                                className="space-y-6"
                            >
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-white/70 uppercase tracking-wider block">Website URL</label>
                                        <input
                                            type="text"
                                            name="website"
                                            required
                                            value={formData.website}
                                            onChange={handleChange}
                                            placeholder="example.com"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white text-sm focus:border-purple-500/50 outline-none transition-all placeholder:text-white/20"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-white/70 uppercase tracking-wider block">Target Service / Keyword</label>
                                        <input
                                            type="text"
                                            name="keyword"
                                            required
                                            value={formData.keyword}
                                            onChange={handleChange}
                                            placeholder="e.g. best dental clinic in kochi"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white text-sm focus:border-purple-500/50 outline-none transition-all placeholder:text-white/20"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-white/70 uppercase tracking-wider block">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white text-sm focus:border-purple-500/50 outline-none transition-all placeholder:text-white/20"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-white/70 uppercase tracking-wider block">Phone / WhatsApp</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+91 XXXXX XXXXX"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white text-sm focus:border-purple-500/50 outline-none transition-all placeholder:text-white/20"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-white/70 uppercase tracking-wider block">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white text-sm focus:border-purple-500/50 outline-none transition-all placeholder:text-white/20"
                                        />
                                    </div>
                                </div>

                                {errorMsg && (
                                    <div className="text-red-400 text-xs font-bold text-center">
                                        {errorMsg}
                                    </div>
                                )}

                                <div className="pt-4 flex justify-center">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="px-8 py-4 bg-purple-600 hover:bg-purple-500 disabled:bg-purple-600/50 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 active:scale-95 transition-all flex items-center gap-3 shadow-lg shadow-purple-600/20"
                                    >
                                        {loading ? (
                                            <>
                                                <Loader2 className="w-4 h-4 animate-spin" /> Submitting Request...
                                            </>
                                        ) : (
                                            <>
                                                Run AI Visibility Check <ArrowRight className="w-4 h-4" />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </motion.form>
                        )}

                        {step === 2 && (
                            <motion.div
                                key="scan-step"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex flex-col items-center justify-center py-12"
                            >
                                <div className="relative mb-8">
                                    <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-xl animate-pulse" />
                                    <div className="w-20 h-20 rounded-full border border-purple-500/30 flex items-center justify-center relative">
                                        <Loader2 className="w-10 h-10 text-purple-400 animate-spin" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">Analyzing Brand Visibility</h3>
                                
                                <div className="w-full max-w-md bg-white/5 h-2 rounded-full overflow-hidden mb-6">
                                    <motion.div
                                        className="h-full bg-purple-500"
                                        initial={{ width: "0%" }}
                                        animate={{ width: `${((scanIndex + 1) / scanSteps.length) * 100}%` }}
                                        transition={{ duration: 1.2, ease: "easeInOut" }}
                                    />
                                </div>

                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={scanIndex}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="text-purple-400 font-mono text-xs font-bold text-center"
                                    >
                                        {scanSteps[scanIndex]}
                                    </motion.p>
                                </AnimatePresence>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div
                                key="complete-step"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-12 space-y-6"
                            >
                                <div className="w-16 h-16 bg-purple-500/10 border border-purple-500/20 rounded-full flex items-center justify-center mx-auto text-purple-400">
                                    <CheckCircle size={32} />
                                </div>
                                <h3 className="text-2xl font-black text-white">AI Scan Complete!</h3>
                                <div className="max-w-md mx-auto space-y-2">
                                    <p className="text-white/80 text-sm">
                                        Your request for <span className="text-purple-400 font-mono text-xs bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">{formData.website}</span> has been queued.
                                    </p>
                                    <p className="text-white/40 text-xs leading-relaxed">
                                        Our digital strategy team is running deep semantic scraping reports across OpenAI ChatGPT indexes, Google Gemini, and Anthropic Claude models. We will email your custom PDF report to <strong className="text-white/60">{formData.email}</strong> within 24 hours.
                                    </p>
                                </div>
                                <button
                                    onClick={() => {
                                        setStep(1);
                                        setScanIndex(0);
                                        setFormData({ website: "", keyword: "", name: "", phone: "", email: "" });
                                    }}
                                    className="px-6 py-2.5 border border-white/10 hover:border-white/20 text-white/60 hover:text-white rounded-full text-xs font-bold transition-all"
                                >
                                    Check Another Site
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
