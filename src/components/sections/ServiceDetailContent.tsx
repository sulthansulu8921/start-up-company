"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, CheckCircle2, Download, FileText, Layers, ShieldCheck, Award, Star, TrendingUp, Check, Maximize2, X, Sparkles, HelpCircle } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/serviceData";
import { notFound } from "next/navigation";
import BackButton from "@/components/BackButton";

interface ServiceDetailContentProps {
    slug: string;
}

const designModelSteps = [
    {
        number: "01",
        title: "Discovery & Strategic Blueprint",
        desc: "We audit your business objectives, target audience requirements, and technical prerequisites to engineer a detailed project blueprint.",
        tag: "AUDIT & BLUEPRINT"
    },
    {
        number: "02",
        title: "UX/UI & System Prototyping",
        desc: "Crafting intuitive, conversion-focused user interfaces and interactive prototypes built on modern design systems.",
        tag: "PROTOTYPING & UI/UX"
    },
    {
        number: "03",
        title: "Agile Full-Stack Engineering",
        desc: "Developing high-performance, secure code bases with Next.js, React Native, and AI infrastructure scaled for enterprise loads.",
        tag: "FULL-STACK BUILD"
    },
    {
        number: "04",
        title: "QA Auditing & Production Launch",
        desc: "Rigorously testing speed, security vulnerabilities, Core Web Vitals, and cross-device compatibility prior to live launch.",
        tag: "LAUNCH & SLA SUPPORT"
    }
];

export default function ServiceDetailContent({ slug }: ServiceDetailContentProps) {
    const service = services.find(s => s.slug === slug);
    const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);
    const [downloadSubmitted, setDownloadSubmitted] = useState(false);

    if (!service) {
        notFound();
    }

    const handleBrochureDownload = (e: React.FormEvent) => {
        e.preventDefault();
        setDownloadSubmitted(true);
        setTimeout(() => {
            const link = document.createElement("a");
            link.href = service.image;
            link.download = `NanoRays_${service.title.replace(/[^a-zA-Z0-9]/g, "_")}_Infographic.jpg`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }, 800);
    };

    return (
        <main className="relative min-h-screen bg-[#F8FAFC] text-slate-900 pt-28 pb-24 overflow-hidden">

            {/* Top Navigation Bar */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 mb-10">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <BackButton variant="light" fallbackUrl="/#services" label="Back to Services" />

                    <button
                        onClick={() => setIsBrochureModalOpen(true)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold transition-all shadow-sm"
                    >
                        <Download size={14} className="text-blue-600" />
                        <span>Download {service.title} Brochure (PDF)</span>
                    </button>
                </div>
            </section>

            {/* Service Hero Header Section */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-black uppercase tracking-[0.25em] mb-6 shadow-sm"
                        >
                            <Zap size={13} className="text-blue-600" />
                            Service {service.num} Specification
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl sm:text-5xl md:text-6xl font-black font-sora text-slate-900 tracking-tight leading-[1.1] mb-6"
                        >
                            {service.title}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-slate-600 text-base md:text-lg font-medium leading-relaxed max-w-2xl mb-8"
                        >
                            {service.fullDesc}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-wrap items-center gap-4"
                        >
                            <Link
                                href="https://wa.me/919497669317"
                                target="_blank"
                                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#2563EB] via-[#0284C7] to-[#06B6D4] hover:from-[#1d4ed8] hover:to-[#0891b2] text-white font-extrabold text-xs uppercase tracking-widest shadow-lg shadow-blue-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2.5"
                            >
                                <Zap size={15} className="fill-current text-white" /> Start Project Consultation
                            </Link>

                            <button
                                onClick={() => setIsBrochureModalOpen(true)}
                                className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs uppercase tracking-wider border border-slate-200 shadow-sm hover:shadow transition-all duration-300 flex items-center gap-2"
                            >
                                <FileText size={15} className="text-blue-600" />
                                <span>Get Brochure PDF</span>
                            </button>
                        </motion.div>
                    </div>

                    {/* Infographic Image Preview Card */}
                    <div className="lg:col-span-5">
                        <div className="group relative rounded-3xl bg-white p-3 border border-slate-200 shadow-xl overflow-hidden cursor-pointer" onClick={() => setIsImageModalOpen(true)}>
                            <img
                                src={service.image}
                                alt={`${service.title} Infographic - NanoRays`}
                                className="w-full h-auto rounded-2xl object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                            />
                            <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl flex items-center justify-center gap-2 text-white font-bold text-xs uppercase tracking-widest backdrop-blur-[2px]">
                                <Maximize2 size={18} /> Click to Expand Infographic
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Highlights Pill Bar */}
            {service.bottomHighlights && service.bottomHighlights.length > 0 && (
                <section className="relative z-10 max-w-7xl mx-auto px-6 mb-20">
                    <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white shadow-lg flex flex-wrap items-center justify-around gap-4 border border-blue-500/20">
                        {service.bottomHighlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-blue-200">
                                <Sparkles size={14} className="text-cyan-400 shrink-0" />
                                <span>{highlight}</span>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* WHAT WE OFFER Section */}
            {service.whatWeOffer && service.whatWeOffer.length > 0 && (
                <section className="relative z-10 max-w-7xl mx-auto px-6 mb-24">
                    <div className="max-w-3xl mb-12">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-black uppercase tracking-[0.25em] mb-4 shadow-sm">
                            <Zap size={13} className="text-blue-600" />
                            Comprehensive Offerings
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-sora text-slate-900 tracking-tight mb-4">
                            What We Offer
                        </h2>
                        <p className="text-slate-600 text-base font-medium">
                            End-to-end deliverables included within our {service.title} engineering framework.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {service.whatWeOffer.map((offer, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.35, delay: Math.min(idx * 0.04, 0.15) }}
                                className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                            >
                                <div>
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                        <CheckCircle2 size={22} className="text-blue-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold font-sora text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                        {offer.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm font-medium leading-relaxed">
                                        {offer.desc}
                                    </p>
                                </div>

                                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] font-black text-blue-600 uppercase tracking-widest">
                                    <span>INCLUDED MODULE</span>
                                    <Sparkles size={12} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            )}

            {/* Why Choose NanoRays Section */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 mb-24">
                <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl relative overflow-hidden">
                    <div className="max-w-3xl mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-black uppercase tracking-widest mb-4">
                            <Award size={12} className="text-blue-600" />
                            WHY NANORAYS IS THE BEST CHOICE
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black font-sora text-slate-900 tracking-tight mb-4">
                            Why Clients Choose NanoRays for {service.title}
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
                            We don't use slow pre-made templates or generic frameworks. We build robust, custom digital products designed specifically to accelerate your revenue and market authority.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
                            <div>
                                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-4">
                                    <Star size={20} className="text-blue-600" />
                                </div>
                                <h3 className="text-lg font-bold font-sora text-slate-900 mb-2">Tailored Architecture</h3>
                                <p className="text-slate-600 text-xs leading-relaxed font-medium">
                                    Custom code built with Next.js, React Native, and dedicated backend APIs tailored to your specific business logic.
                                </p>
                            </div>
                            <div className="mt-4 pt-3 border-t border-slate-200 text-[10px] font-black text-blue-600 uppercase tracking-widest">
                                ZERO BLOAT CODE
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
                            <div>
                                <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center mb-4">
                                    <TrendingUp size={20} className="text-cyan-600" />
                                </div>
                                <h3 className="text-lg font-bold font-sora text-slate-900 mb-2">High Lead Conversion</h3>
                                <p className="text-slate-600 text-xs leading-relaxed font-medium">
                                    UX/UI layouts engineered with strategic calls-to-action to maximize visitor engagement and sales conversions.
                                </p>
                            </div>
                            <div className="mt-4 pt-3 border-t border-slate-200 text-[10px] font-black text-cyan-600 uppercase tracking-widest">
                                ROI DRIVEN UX
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
                            <div>
                                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-4">
                                    <ShieldCheck size={20} className="text-emerald-600" />
                                </div>
                                <h3 className="text-lg font-bold font-sora text-slate-900 mb-2">Security & Reliability</h3>
                                <p className="text-slate-600 text-xs leading-relaxed font-medium">
                                    Proactive firewall protocols, SSL encryption, SSL gateway testing, and SLA uptime monitoring.
                                </p>
                            </div>
                            <div className="mt-4 pt-3 border-t border-slate-200 text-[10px] font-black text-emerald-600 uppercase tracking-widest">
                                99.9% UPTIME GUARANTEE
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Deliverables & Benefits Matrix */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 mb-24">
                <div className="mb-10">
                    <h2 className="text-2xl sm:text-3xl font-black font-sora text-slate-900 tracking-tight mb-3">
                        Key Capabilities & Enterprise Deliverables
                    </h2>
                    <p className="text-slate-600 text-sm font-medium">
                        What your business achieves with NanoRays service execution architecture.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {service.benefits.map((benefit: string, i: number) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.35, delay: Math.min(i * 0.04, 0.15) }}
                            className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 shadow-md hover:shadow-lg transition-all flex items-start gap-4 group"
                        >
                            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                <CheckCircle2 size={20} className="text-blue-600 group-hover:text-white transition-colors" />
                            </div>
                            <div>
                                <h4 className="text-xs font-black text-blue-600 uppercase tracking-widest mb-1">DELIVERABLE 0{i + 1}</h4>
                                <p className="text-base font-bold font-sora text-slate-900 leading-snug">
                                    {benefit}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Engineering & Design Model Section */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 mb-24">
                <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl backdrop-blur-xl">
                    <div className="max-w-3xl mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-black uppercase tracking-widest mb-4">
                            <Layers size={12} className="text-blue-600" />
                            EXECUTION FRAMEWORK
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black font-sora text-slate-900 tracking-tight mb-4">
                            Our Engineering & Design Model
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
                            A structured 4-phase execution methodology built to eliminate risk, maintain code transparency, and deliver high-performance digital products on schedule.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {designModelSteps.map((step, idx) => (
                            <div key={idx} className="relative p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:border-blue-300 transition-all">
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-3xl font-black font-sora bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">{step.number}</span>
                                        <span className="text-[9px] font-black uppercase tracking-wider text-slate-700 px-2 py-0.5 rounded bg-white border border-slate-200">{step.tag}</span>
                                    </div>
                                    <h3 className="text-lg font-bold font-sora text-slate-900 mb-2">{step.title}</h3>
                                    <p className="text-slate-600 text-xs leading-relaxed font-medium mb-6">
                                        {step.desc}
                                    </p>
                                </div>

                                <div className="pt-3 border-t border-slate-200 flex items-center gap-1.5 text-[10px] font-bold text-blue-600 uppercase tracking-widest">
                                    <Check size={12} /> Milestone Verified
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom Final CTA Section */}
            <section className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-600 text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
                    
                    <h2 className="text-3xl sm:text-4xl font-black font-sora text-white mb-4 tracking-tight">
                        Ready to Build Your Custom {service.title}?
                    </h2>
                    <p className="text-blue-100 text-sm sm:text-base font-medium max-w-xl mx-auto mb-8 leading-relaxed">
                        Consult with our senior technical strategists to discuss requirements, project timelines, and custom implementation plans.
                    </p>

                    <div className="flex flex-wrap justify-center items-center gap-4">
                        <Link
                            href="https://wa.me/919497669317"
                            target="_blank"
                            className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-blue-700 font-extrabold text-xs uppercase tracking-widest shadow-xl transition-all flex items-center gap-2"
                        >
                            <Zap size={16} className="fill-current text-blue-600" />
                            Start Direct WhatsApp Discussion
                        </Link>

                        <button
                            onClick={() => setIsBrochureModalOpen(true)}
                            className="px-7 py-4 rounded-xl bg-blue-900/40 hover:bg-blue-900/60 text-white font-bold text-xs uppercase tracking-wider border border-white/30 backdrop-blur-md transition-all flex items-center gap-2"
                        >
                            <Download size={15} className="text-white" />
                            Download {service.title} Infographic
                        </button>
                    </div>
                </div>
            </section>

            {/* Full Screen Image Modal Lightbox */}
            <AnimatePresence>
                {isImageModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
                        onClick={() => setIsImageModalOpen(false)}
                    >
                        <div className="relative max-w-5xl w-full max-h-[90vh] overflow-auto rounded-3xl bg-slate-900 border border-slate-800 p-2 shadow-2xl" onClick={e => e.stopPropagation()}>
                            <button
                                onClick={() => setIsImageModalOpen(false)}
                                className="absolute top-4 right-4 z-10 p-3 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-all"
                            >
                                <X size={20} />
                            </button>
                            <img
                                src={service.image}
                                alt={`${service.title} Infographic`}
                                className="w-full h-auto rounded-2xl"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Brochure Download Modal */}
            <AnimatePresence>
                {isBrochureModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4"
                        onClick={() => setIsBrochureModalOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            onClick={e => e.stopPropagation()}
                            className="bg-white rounded-3xl border border-slate-200 p-8 max-w-md w-full shadow-2xl relative overflow-hidden"
                        >
                            <button
                                onClick={() => setIsBrochureModalOpen(false)}
                                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all"
                            >
                                <X size={18} />
                            </button>

                            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6">
                                <FileText size={24} className="text-blue-600" />
                            </div>

                            <h3 className="text-2xl font-black font-sora text-slate-900 mb-2">
                                Download {service.title} Infographic
                            </h3>
                            <p className="text-slate-600 text-xs font-medium leading-relaxed mb-6">
                                Click below to immediately download the high-resolution infographic for {service.title}.
                            </p>

                            {downloadSubmitted ? (
                                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
                                    <CheckCircle2 size={36} className="text-emerald-600 mx-auto mb-3" />
                                    <h4 className="text-sm font-bold text-emerald-900 mb-1">Download Initialized!</h4>
                                    <p className="text-xs text-emerald-700">Your high-res specification sheet is now downloading.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleBrochureDownload} className="space-y-4">
                                    <button
                                        type="submit"
                                        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold text-xs uppercase tracking-widest shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2"
                                    >
                                        <Download size={15} /> Instant High-Res Download
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
