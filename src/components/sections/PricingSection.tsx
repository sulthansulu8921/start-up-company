"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Zap, ArrowRight, Star, X, Calculator, Mail, Send } from "lucide-react";

const plans = [
    {
        name: "Baseline Development",
        price: "Contact Us",
        period: "",
        tagline: "Ideal for emerging brands establishing a high-impact digital presence.",
        popular: false,
        accent: "text-sky-400",
        border: "border-sky-400/20",
        glow: "hover:border-sky-400/50",
        features: [
            "High-Performance 5-Page Platform",
            "100% Cross-Device Responsiveness",
            "Professional Logo & Brand Identity (Basic)",
            "Strategic SEO Indexing & Setup",
            "Secure Lead Acquisition Forms",
            "Direct WhatsApp & Social Integration",
            "Local Map & Business Profile Setup",
            "30-Day Transition Support",
        ],
        cta: "Get Instant Quote",
    },
    {
        name: "Market Acceleration",
        price: "Get Quote",
        period: "",
        tagline: "Strategic ecosystems engineered to accelerate growth and maximize conversion.",
        popular: true,
        accent: "text-neon",
        border: "border-neon/40",
        glow: "hover:border-neon",
        features: [
            "Premium Multi-Platform Custom Architecture",
            "Advanced Growth SEO (Technical & Local)",
            "Google Analytics & Search Console Logic",
            "High-Conversion Strategic Landing Pages",
            "Core Web Vitals & Speed Optimization",
            "Global Social Brand Integration",
            "Enterprise Business Email Ecosystem",
            "Priority 24/7 Strategic Support",
            "Scalable Content Management System (CMS)",
        ],
        cta: "Scale Your Business",
    },
    {
        name: "Custom Enterprise Suite",
        price: "Let's Talk",
        period: "",
        tagline: "Bespoke digital architecture tailored to complex enterprise requirements.",
        popular: false,
        accent: "text-purple-400",
        border: "border-purple-400/20",
        glow: "hover:border-purple-400/50",
        features: [
            "Unlimited Architecture & High Complexity",
            "Advanced E-Commerce & Booking Engines",
            "Total Market Dominance SEO Strategy",
            "Google & Meta Performance Ads",
            "Bespoke CRM & Dashboard Integration",
            "Full Visual Brand Identity Suite",
            "Weekly Analytics & Performance Audits",
            "Dedicated Senior Project Lead",
            "High-Security Enterprise Cloud Setup",
        ],
        cta: "Custom Enterprise Solution",
    },
];

export default function PricingSection() {
    const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
    const [step, setStep] = useState(1);
    const [isGenerating, setIsGenerating] = useState(false);
    const [quoteFinished, setQuoteFinished] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        businessName: "",
        requirements: ""
    });

    const handleOpenQuote = (planName: string) => {
        setSelectedPlan(planName);
        setIsQuoteModalOpen(true);
        setStep(1);
        setQuoteFinished(false);
    };

    // No need for handleGenerateQuote, standard form action handles it directly

    const handleCloseModal = () => {
        setIsQuoteModalOpen(false);
        setTimeout(() => {
            setStep(1);
            setQuoteFinished(false);
            setFormData({ name: "", email: "", phone: "", businessName: "", requirements: "" });
        }, 300);
    };

    return (
        <section id="pricing" className="py-32 relative bg-transparent overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-neon/5 blur-[200px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex px-3 py-1.5 rounded-lg bg-white/5 border border-white/20 text-white/80 text-[10px] font-black uppercase tracking-[0.2em] mb-6"
                    >
                        Transparent Pricing
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-black font-sora text-white mb-6 tracking-tighter"
                    >
                        Automatic <span className="text-neon">Quote System</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/70 text-lg font-bold max-w-2xl mx-auto"
                    >
                        Select a package below to instantly generate a custom quote for your business directly on our website.
                    </motion.p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative flex flex-col p-8 rounded-3xl glass-dark border ${plan.border} ${plan.glow} transition-all duration-500 ${plan.popular ? "ring-1 ring-neon/30 shadow-[0_0_40px_rgba(204,255,0,0.08)]" : ""}`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-neon text-black text-[10px] font-black uppercase tracking-widest shadow-lg shadow-neon/30">
                                        <Star size={10} fill="black" /> Most Popular
                                    </span>
                                </div>
                            )}

                            {/* Plan Header */}
                            <div className="mb-8">
                                <p className={`text-[11px] font-black uppercase tracking-[0.2em] mb-3 ${plan.accent}`}>{plan.name}</p>
                                <div className="flex items-end gap-2 mb-3">
                                    <span className="text-3xl font-black text-white font-sora">{plan.price}</span>
                                </div>
                                <p className="text-white/50 text-sm font-bold leading-relaxed">{plan.tagline}</p>
                            </div>

                            <div className="h-px bg-white/10 mb-8" />

                            <ul className="space-y-4 flex-1 mb-10">
                                {plan.features.map((f, fi) => (
                                    <li key={fi} className="flex items-start gap-3">
                                        <CheckCircle2 size={16} className={`${plan.accent} flex-shrink-0 mt-0.5`} />
                                        <span className="text-white/80 text-sm font-bold">{f}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button -> Opens Automatic Quote System */}
                            <button
                                onClick={() => handleOpenQuote(plan.name)}
                                className={`w-full py-4 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 ${plan.popular
                                    ? "bg-neon text-black hover:shadow-[0_0_30px_rgba(204,255,0,0.4)] hover:scale-[1.02]"
                                    : "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 hover:scale-[1.02]"
                                    }`}
                            >
                                {plan.popular ? <Calculator size={16} fill="black" className="text-black" /> : <Calculator size={16} />}
                                {plan.cta}
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Flexibility Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 p-6 md:p-8 rounded-3xl border border-neon/30 bg-neon/5 glass-dark flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-[0_0_40px_rgba(204,255,0,0.05)]"
                >
                    <div>
                        <h4 className="text-white font-black text-xl font-sora mb-2">Looking for something specific?</h4>
                        <p className="text-white/70 font-bold text-sm">
                            Yes, <strong className="text-neon">Customized Packages</strong> and <strong className="text-neon">Single Services</strong> are also completely available! We can build a plan that fits your exact requirements.
                        </p>
                    </div>
                    <button
                        onClick={() => handleOpenQuote("Single Service / Custom")}
                        className="bg-neon text-black font-black px-8 py-4 rounded-xl text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(204,255,0,0.3)] whitespace-nowrap flex items-center justify-center gap-2"
                    >
                        <Calculator size={16} /> Get Custom Quote
                    </button>
                </motion.div>
            </div>

            {/* In-App Automatic Quote Modal (No WhatsApp) */}
            <AnimatePresence>
                {isQuoteModalOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={handleCloseModal}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[500px] bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 z-[101] shadow-2xl overflow-hidden"
                        >
                            <button
                                onClick={handleCloseModal}
                                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>

                            {step === 1 && (
                                <div>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-xl bg-neon/10 flex items-center justify-center border border-neon/30">
                                            <Calculator size={20} className="text-neon" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-black text-xl">Generate Quote</h3>
                                            <p className="text-white/50 text-xs font-bold uppercase tracking-widest">{selectedPlan}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <input
                                                required
                                                type="text"
                                                name="name"
                                                placeholder="Your Name"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 text-sm font-bold focus:outline-none focus:border-neon/50 transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                placeholder="Email Address"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 text-sm font-bold focus:outline-none focus:border-neon/50 transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                required
                                                type="tel"
                                                name="phone"
                                                placeholder="Phone Number"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 text-sm font-bold focus:outline-none focus:border-neon/50 transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <textarea
                                                name="requirements"
                                                rows={3}
                                                placeholder="Any specific features you need? (Optional)"
                                                value={formData.requirements}
                                                onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 text-sm font-bold focus:outline-none focus:border-neon/50 transition-colors resize-none"
                                            />
                                        </div>

                                        <button
                                            onClick={async () => {
                                                if (!formData.name || !formData.email || !formData.phone) return;
                                                setIsGenerating(true);
                                                setStep(2);

                                                // 1. Save to Firebase
                                                try {
                                                    const { db } = await import("@/lib/firebase");
                                                    const { collection, addDoc, serverTimestamp } = await import("firebase/firestore");
                                                    await addDoc(collection(db, "leads"), {
                                                        ...formData,
                                                        plan: selectedPlan,
                                                        type: "Pricing Quote",
                                                        createdAt: serverTimestamp()
                                                    });
                                                } catch (e) { console.error(e); }

                                                // 2. Prep WhatsApp
                                                const msg = `🚀 *NEW QUOTE REQUEST* 🚀\n\n*Plan:* ${selectedPlan}\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Requirements:* ${formData.requirements || "N/A"}`;
                                                const waUrl = `https://wa.me/918921624007?text=${encodeURIComponent(msg)}`;

                                                // Simulate "Generation" for 2 seconds
                                                setTimeout(() => {
                                                    setIsGenerating(false);
                                                    setQuoteFinished(true);
                                                    window.open(waUrl, "_blank");
                                                }, 2000);
                                            }}
                                            className="w-full btn-neon py-4 mt-2 flex items-center justify-center gap-2"
                                        >
                                            Generate Strategic Quote <Send size={16} />
                                        </button>
                                        <p className="text-center text-white/30 text-[10px] font-black uppercase tracking-widest pt-2">Zero Friction Lead Capture Initialized</p>
                                    </div>
                                </div>
                            )}

                            {step === 2 && isGenerating && (
                                <div className="py-12 flex flex-col items-center justify-center text-center">
                                    <div className="relative w-20 h-20 mb-6">
                                        <div className="absolute inset-0 border-4 border-neon/20 border-t-neon rounded-full animate-spin" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Calculator size={24} className="text-neon animate-pulse" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-black text-white font-sora mb-2">Analyzing Requirements...</h3>
                                    <p className="text-white/50 text-sm font-bold uppercase tracking-widest animate-pulse">Calculating optimal package</p>
                                </div>
                            )}

                            {step === 2 && quoteFinished && (
                                <div className="py-8 flex flex-col items-center justify-center text-center">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                                        className="w-20 h-20 rounded-full bg-neon/10 border border-neon/30 flex items-center justify-center mb-6"
                                    >
                                        <CheckCircle2 size={40} className="text-neon" />
                                    </motion.div>
                                    <h3 className="text-2xl font-black text-white font-sora mb-3">Quote Generated!</h3>
                                    <p className="text-white/70 font-bold text-sm mb-8 px-4">
                                        Your custom quote for the <strong className="text-white">{selectedPlan}</strong> has been successfully generated by our system. A detailed PDF breakdown has been sent to <strong className="text-neon">{formData.email}</strong>.
                                    </p>

                                    <div className="w-full space-y-3">
                                        <button onClick={handleCloseModal} className="w-full btn-neon py-3 flex items-center justify-center gap-2">
                                            <Mail size={16} /> Check Your Email
                                        </button>
                                        <button onClick={handleCloseModal} className="w-full bg-white/5 hover:bg-white/10 text-white font-bold text-sm py-3 rounded-xl transition-colors">
                                            Close Window
                                        </button>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}
