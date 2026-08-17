"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, CheckCircle, ArrowRight, Loader2 } from "lucide-react";
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
    const [step, setStep] = useState(1);
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

            sendInstantNotification(`🔥 AI Audit Request: ${formData.website} (${formData.name})`);

            await sendLeadEmail({
                from_name: formData.name,
                from_email: formData.email,
                from_phone: formData.phone,
                subject: `AI Visibility Checker Lead: ${formData.website}`,
                message: fullMessage,
                plan: "Free AI Search Audit"
            });

            setStep(2);
        } catch (err) {
            console.error("Audit submission failed", err);
            setErrorMsg("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="relative py-24 overflow-hidden bg-gradient-to-b from-slate-50 to-white border-y border-slate-200/80">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/5 blur-[130px] rounded-full" />
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-[10px] font-black uppercase tracking-[0.25em] mb-4 shadow-sm"
                    >
                        <Brain size={12} className="animate-pulse text-indigo-600" />
                        AI Search Optimizers
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-black font-sora text-slate-900 leading-tight tracking-tight mb-4">
                        Is Your Business Recommended <br /> by <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 bg-clip-text text-transparent">ChatGPT & Gemini</span>?
                    </h2>
                    <p className="text-slate-600 text-sm md:text-base max-w-xl mx-auto font-medium">
                        AI search models are replacing classic Google pages. Enter your site details below, and we will analyze your visibility status.
                    </p>
                </div>

                <div className="bg-white border border-slate-200 shadow-xl shadow-indigo-500/5 rounded-[32px] p-8 md:p-12 relative overflow-hidden">
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
                                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Website URL</label>
                                        <input
                                            type="text"
                                            name="website"
                                            required
                                            value={formData.website}
                                            onChange={handleChange}
                                            placeholder="example.com"
                                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 text-sm focus:bg-white focus:border-indigo-500 outline-none transition-all placeholder:text-slate-400 font-medium"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Target Service / Keyword</label>
                                        <input
                                            type="text"
                                            name="keyword"
                                            required
                                            value={formData.keyword}
                                            onChange={handleChange}
                                            placeholder="e.g. best dental clinic in kochi"
                                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 text-sm focus:bg-white focus:border-indigo-500 outline-none transition-all placeholder:text-slate-400 font-medium"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 text-sm focus:bg-white focus:border-indigo-500 outline-none transition-all placeholder:text-slate-400 font-medium"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Phone / WhatsApp</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+91 XXXXX XXXXX"
                                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 text-sm focus:bg-white focus:border-indigo-500 outline-none transition-all placeholder:text-slate-400 font-medium"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 text-sm focus:bg-white focus:border-indigo-500 outline-none transition-all placeholder:text-slate-400 font-medium"
                                        />
                                    </div>
                                </div>

                                {errorMsg && (
                                    <div className="text-red-600 text-xs font-bold text-center">
                                        {errorMsg}
                                    </div>
                                )}

                                <div className="pt-4 flex justify-center">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 hover:from-indigo-500 hover:to-purple-500 disabled:opacity-50 text-white rounded-2xl font-black uppercase tracking-widest text-xs transition-all flex items-center gap-3 shadow-lg shadow-indigo-500/20"
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
                                    <div className="w-20 h-20 rounded-full border border-indigo-200 bg-indigo-50 flex items-center justify-center relative shadow-sm">
                                        <Loader2 className="w-10 h-10 text-indigo-600 animate-spin" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Analyzing Brand Visibility</h3>

                                <div className="w-full max-w-md bg-slate-100 h-2 rounded-full overflow-hidden mb-6">
                                    <motion.div
                                        className="h-full bg-indigo-600"
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
                                        className="text-indigo-600 font-mono text-xs font-bold text-center"
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
                                <div className="w-16 h-16 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                                    <CheckCircle size={32} />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900">AI Scan Complete!</h3>
                                <div className="max-w-md mx-auto space-y-2">
                                    <p className="text-slate-700 text-sm font-medium">
                                        Your request for <span className="text-indigo-600 font-mono text-xs bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">{formData.website}</span> has been queued.
                                    </p>
                                    <p className="text-slate-500 text-xs leading-relaxed">
                                        Our digital strategy team is running deep semantic scraping reports across OpenAI ChatGPT indexes, Google Gemini, and Anthropic Claude models. We will email your custom PDF report to <strong className="text-slate-800">{formData.email}</strong> within 24 hours.
                                    </p>
                                </div>
                                <button
                                    onClick={() => {
                                        setStep(1);
                                        setScanIndex(0);
                                        setFormData({ website: "", keyword: "", name: "", phone: "", email: "" });
                                    }}
                                    className="px-6 py-2.5 border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 rounded-full text-xs font-bold transition-all shadow-sm"
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
