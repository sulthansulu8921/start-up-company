"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Zap, ArrowRight, Star, X, Calculator, Mail, Send } from "lucide-react";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

const plans = [
    {
        name: "Starter Website",
        price: "Custom Quote",
        period: "",
        tagline: "Ideal for startups and local businesses establishing a high-impact digital presence.",
        popular: false,
        accent: "text-blue-600",
        border: "border-slate-200",
        glow: "hover:border-blue-300",
        features: [
            "Modern Responsive Web Design",
            "Fast Performance Architecture",
            "SEO Setup & Indexing",
            "Lead Capture & Contact Forms",
            "Google Business Profile Setup",
            "WhatsApp & Social Integration",
            "30-Day Launch Support",
        ],
        cta: "Get Custom Quote",
    },
    {
        name: "Business Website",
        price: "Custom Quote",
        period: "",
        tagline: "Custom digital solutions built to scale corporate authority and capture qualified leads.",
        popular: true,
        accent: "text-indigo-600",
        border: "border-indigo-500/40",
        glow: "hover:border-indigo-600",
        features: [
            "Custom Multi-Page Web Application",
            "Advanced Technical & Local SEO",
            "Core Web Vitals Optimization",
            "CMS Content Management",
            "Analytics & Search Console Setup",
            "Priority Support & Strategy",
        ],
        cta: "Request Proposal",
    },
    {
        name: "Ecommerce & AI Platform",
        price: "Custom Quote",
        period: "",
        tagline: "Bespoke online stores, AI SaaS applications, dashboards, and custom software systems.",
        popular: false,
        accent: "text-purple-600",
        border: "border-slate-200",
        glow: "hover:border-purple-300",
        features: [
            "Custom AI SaaS or Ecommerce Architecture",
            "Payment Gateway & Checkout Flows",
            "AI Agent / Chatbot Integration",
            "Custom Management Dashboard",
            "API & Webhook Workflow Automation",
            "Dedicated Development Team",
        ],
        cta: "Consult AI Architect",
    },
];

export default function PricingSection() {
    const [dynamicPlans, setDynamicPlans] = useState(plans);
    const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
    const [step, setStep] = useState(1);
    const [isGenerating, setIsGenerating] = useState(false);
    const [quoteFinished, setQuoteFinished] = useState(false);

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const docRef = doc(db, "settings", "global");
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    if (data.plans && Array.isArray(data.plans) && data.plans.length > 0) {
                        setDynamicPlans(data.plans);
                    }
                }
            } catch (err: any) {
                console.warn("⚠️ Failed to fetch pricing data (offline or unconfigured):", err.message || err);
            }
        };
        fetchSettings();
    }, []);

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

    const handleCloseModal = () => {
        setIsQuoteModalOpen(false);
        setTimeout(() => {
            setStep(1);
            setQuoteFinished(false);
            setFormData({ name: "", email: "", phone: "", businessName: "", requirements: "" });
        }, 300);
    };

    return (
        <motion.section
            initial={{ opacity: 0.9, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            id="pricing"
            className="relative z-35 py-24 overflow-hidden bg-[#F8FAFC] text-slate-900 rounded-t-[3rem] md:rounded-t-[4rem] shadow-[0_-30px_70px_rgba(0,0,0,0.12)] border-t border-slate-200/90"
        >
            {/* Dedicated High-Res Executive Skyline Corporate Photo Background */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC]/96 via-[#F1F5F9]/92 to-[#F8FAFC]/96 pointer-events-none" />
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/10 blur-[200px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-[10px] font-black uppercase tracking-[0.25em] mb-4 shadow-sm"
                    >
                        <Zap size={12} className="text-[#2563EB]" /> Flexible Investment Plans
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black font-sora text-slate-900 tracking-tight mb-4"
                    >
                        Transparent <span className="bg-gradient-to-r from-[#2563EB] via-[#0284C7] to-[#06B6D4] bg-clip-text text-transparent">Pricing</span> & Estimation
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed"
                    >
                        Select a package below to instantly generate a custom quote for your business directly on our website.
                    </motion.p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {dynamicPlans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative flex flex-col p-8 rounded-3xl bg-white/90 border ${plan.border} ${plan.glow} transition-all duration-300 shadow-lg shadow-blue-500/5 ${plan.popular ? "border-2 border-[#2563EB] ring-4 ring-[#2563EB]/10 shadow-xl shadow-blue-500/15" : ""}`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED] text-white text-[10px] font-black uppercase tracking-widest shadow-md shadow-blue-500/30">
                                        <Star size={10} fill="white" /> Most Popular
                                    </span>
                                </div>
                            )}

                            {/* Plan Header */}
                            <div className="mb-8">
                                <p className="text-[11px] font-black uppercase tracking-[0.2em] mb-3 text-[#2563EB]">{plan.name}</p>
                                <div className="flex items-end gap-2 mb-3">
                                    <span className="text-3xl font-black text-slate-900 font-sora">{plan.price}</span>
                                </div>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed">{plan.tagline}</p>
                            </div>

                            <div className="h-px bg-slate-100 mb-8" />

                            <ul className="space-y-3.5 flex-1 mb-10">
                                {plan.features.map((f, fi) => (
                                    <li key={fi} className="flex items-start gap-3">
                                        <CheckCircle2 size={16} className="text-[#2563EB] flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-700 text-sm font-semibold">{f}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <button
                                onClick={() => handleOpenQuote(plan.name)}
                                className={`w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 ${plan.popular
                                    ? "bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED] text-white shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/40 hover:scale-[1.02]"
                                    : "bg-slate-100 text-slate-800 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 border border-slate-200 hover:scale-[1.02]"
                                    }`}
                            >
                                <Calculator size={16} />
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
                    className="mt-16 p-6 md:p-8 rounded-3xl border border-blue-200/80 bg-gradient-to-r from-blue-50/80 via-indigo-50/50 to-purple-50/80 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-sm"
                >
                    <div>
                        <h4 className="text-slate-900 font-black text-xl font-sora mb-2">Looking for something specific?</h4>
                        <p className="text-slate-600 font-medium text-sm">
                            Yes, <strong className="text-[#2563EB] font-bold">Customized Packages</strong> and <strong className="text-[#7C3AED] font-bold">Single Services</strong> are also completely available! We can build a plan that fits your exact requirements.
                        </p>
                    </div>
                    <button
                        onClick={() => handleOpenQuote("Single Service / Custom")}
                        className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] hover:from-[#1d4ed8] hover:to-[#6d28d9] text-white font-extrabold px-7 py-4 rounded-xl text-xs uppercase tracking-widest transition-all shadow-md shadow-blue-500/20 whitespace-nowrap flex items-center justify-center gap-2"
                    >
                        <Calculator size={16} /> Get Custom Quote
                    </button>
                </motion.div>
            </div>

            {/* In-App Automatic Quote Modal */}
            <AnimatePresence>
                {isQuoteModalOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={handleCloseModal}
                            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100]"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[500px] bg-white border border-indigo-100 rounded-3xl p-8 z-[101] shadow-2xl overflow-hidden"
                        >
                            <button
                                onClick={handleCloseModal}
                                className="absolute top-6 right-6 text-slate-400 hover:text-slate-700 transition-colors"
                            >
                                <X size={20} />
                            </button>

                            {step === 1 && (
                                <div>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center border border-indigo-100">
                                            <Calculator size={20} className="text-indigo-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-slate-900 font-black text-xl font-sora">Generate Quote</h3>
                                            <p className="text-indigo-600 text-xs font-bold uppercase tracking-widest">{selectedPlan}</p>
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
                                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 text-sm font-semibold focus:outline-none focus:border-indigo-500 focus:bg-white transition-colors"
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
                                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 text-sm font-semibold focus:outline-none focus:border-indigo-500 focus:bg-white transition-colors"
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
                                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 text-sm font-semibold focus:outline-none focus:border-indigo-500 focus:bg-white transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <textarea
                                                name="requirements"
                                                rows={3}
                                                placeholder="Any specific features you need? (Optional)"
                                                value={formData.requirements}
                                                onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 text-sm font-semibold focus:outline-none focus:border-indigo-500 focus:bg-white transition-colors resize-none"
                                            />
                                        </div>

                                        <button
                                            onClick={() => {
                                                if (!formData.name || !formData.email || !formData.phone) return;
                                                setIsGenerating(true);
                                                setStep(2);

                                                (async () => {
                                                    try {
                                                        const { sendLeadEmail } = await import("@/lib/lead-engine");
                                                        await sendLeadEmail({
                                                            from_name: formData.name,
                                                            from_email: formData.email,
                                                            from_phone: formData.phone,
                                                            message: formData.requirements || "No specific requirements mentioned.",
                                                            plan: selectedPlan || "Custom",
                                                            subject: `🚀 New Quote Request: ${selectedPlan} — ${formData.name}`,
                                                        });
                                                    } catch (emailErr) {
                                                        console.error("🚨 Quote Email sending failed:", emailErr);
                                                    }

                                                    try {
                                                        const { db } = await import("@/lib/firebase");
                                                        const { collection, addDoc, serverTimestamp } = await import("firebase/firestore");
                                                        await addDoc(collection(db, "leads"), {
                                                            ...formData,
                                                            plan: selectedPlan,
                                                            type: "Pricing Quote",
                                                            createdAt: serverTimestamp()
                                                        });
                                                    } catch (dbErr) {
                                                        console.error("🚨 Quote Firestore backup failed:", dbErr);
                                                    }
                                                })();

                                                setTimeout(() => {
                                                    setIsGenerating(false);
                                                    setQuoteFinished(true);
                                                }, 100);
                                            }}
                                            className="w-full py-4 mt-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-xl font-extrabold text-xs uppercase tracking-widest shadow-md shadow-indigo-500/20 flex items-center justify-center gap-2"
                                        >
                                            Generate Strategic Quote <Send size={15} />
                                        </button>
                                    </div>
                                </div>
                            )}

                            {step === 2 && isGenerating && (
                                <div className="py-12 flex flex-col items-center justify-center text-center">
                                    <div className="relative w-20 h-20 mb-6">
                                        <div className="absolute inset-0 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Calculator size={24} className="text-indigo-600 animate-pulse" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-black text-slate-900 font-sora mb-2">Analyzing Requirements...</h3>
                                    <p className="text-slate-500 text-xs font-bold uppercase tracking-widest animate-pulse">Calculating optimal package</p>
                                </div>
                            )}

                            {step === 2 && quoteFinished && (
                                <div className="py-8 flex flex-col items-center justify-center text-center">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                                        className="w-20 h-20 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-6"
                                    >
                                        <CheckCircle2 size={40} className="text-emerald-600" />
                                    </motion.div>
                                    <h3 className="text-2xl font-black text-slate-900 font-sora mb-3">Quote Generated!</h3>
                                    <p className="text-slate-600 font-medium text-sm mb-8 px-4">
                                        Your custom quote for the <strong className="text-slate-900">{selectedPlan}</strong> has been successfully generated by our system.
                                    </p>

                                    <div className="w-full space-y-3">
                                        <button onClick={handleCloseModal} className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-extrabold py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2 text-xs uppercase tracking-wider">
                                            <Mail size={16} /> Done
                                        </button>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.section>
    );
}
