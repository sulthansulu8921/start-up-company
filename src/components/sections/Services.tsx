"use client";

import { motion } from "framer-motion";
import { services } from "@/data/serviceData";
import Link from "next/link";
import { Zap, ArrowRight, Sparkles } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import TiltCard from "@/components/TiltCard";

export default function Services() {
    return (
        <motion.section
            initial={{ opacity: 0.9, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            id="services"
            className="relative z-30 py-24 overflow-hidden bg-[#F0F5FF] text-slate-900 rounded-t-[3rem] md:rounded-t-[4rem] shadow-[0_-30px_70px_rgba(0,0,0,0.12)] border-t border-indigo-200/90"
        >
            {/* Background elements */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#F0F5FF] via-[#E6EEFF] to-[#F0F5FF] pointer-events-none" />
            <div className="absolute w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full -top-48 -right-48 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
                    <ScrollReveal variant="fade-right" className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-[10px] font-black uppercase tracking-[0.25em] mb-4 shadow-sm">
                            <Zap size={13} className="text-[#2563EB]" />
                            All Services
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-sora text-slate-900 tracking-tight">
                            End-to-End Digital Solutions <br />
                            <span className="bg-gradient-to-r from-[#2563EB] via-[#0284C7] to-[#06B6D4] bg-clip-text text-transparent">To Grow & Scale Your Business</span>
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal variant="fade-left" delay={0.2} className="max-w-md">
                        <p className="text-slate-600 text-base md:text-lg font-medium leading-relaxed">
                            Explore our 7 core digital capabilities built to automate operations, boost search visibility, and increase customer revenue.
                        </p>
                    </ScrollReveal>
                </div>

                {/* Services Grid */}
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((s, i) => (
                        <StaggerItem key={i} variant="fade-up">
                            <Link href={`/services/${s.slug}`} className="block h-full">
                                <TiltCard className="h-full">
                                    <div className="group relative rounded-3xl bg-white/95 border border-slate-200/90 hover:border-blue-400 shadow-md hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 overflow-hidden h-full cursor-pointer flex flex-col justify-between">
                                        
                                        {/* Thumbnail Header Image */}
                                        <div className="relative h-48 w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                                            <img
                                                src={s.image}
                                                alt={`${s.title} Infographic Preview`}
                                                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80" />
                                            
                                            {/* Number Badge */}
                                            <div className="absolute top-4 left-4 px-3 py-1 rounded-xl bg-blue-600 text-white font-black text-xs font-sora shadow-lg tracking-wider">
                                                {s.num}
                                            </div>

                                            {/* Icon Badge */}
                                            <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/90 border border-slate-200 shadow-md backdrop-blur-md flex items-center justify-center">
                                                <s.icon size={20} className="text-blue-600 group-hover:scale-110 transition-transform" />
                                            </div>
                                        </div>

                                        {/* Card Body */}
                                        <div className="p-6 flex-1 flex flex-col justify-between">
                                            <div>
                                                <h3 className="text-xl font-black text-slate-900 font-sora mb-3 tracking-tight group-hover:text-blue-600 transition-colors">
                                                    {s.title}
                                                </h3>
                                                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-medium line-clamp-3">
                                                    {s.desc}
                                                </p>
                                            </div>

                                            {/* Key Offerings Pill Tags */}
                                            {s.whatWeOffer && (
                                                <div className="flex flex-wrap gap-1.5 mb-6">
                                                    {s.whatWeOffer.slice(0, 3).map((item, idx) => (
                                                        <span key={idx} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-blue-50 border border-blue-100 text-blue-700 text-[10px] font-bold">
                                                            <Sparkles size={10} className="text-blue-500" />
                                                            {item.title}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}

                                            {/* Action Link */}
                                            <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs font-black uppercase tracking-wider text-blue-600 group-hover:text-indigo-600 transition-colors">
                                                <span>View Full Specification</span>
                                                <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
                                            </div>
                                        </div>

                                        {/* Bottom Accent Highlight */}
                                        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-slate-200 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 transition-all" />
                                    </div>
                                </TiltCard>
                            </Link>
                        </StaggerItem>
                    ))}

                    {/* CTA Card */}
                    <StaggerItem variant="fade-up">
                        <TiltCard className="h-full">
                            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#2563EB] via-[#4F46E5] to-[#7C3AED] border border-white/20 shadow-xl shadow-blue-500/25 flex flex-col justify-between items-start group overflow-hidden relative h-full">
                                <div className="relative z-10 w-14 h-14 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center mb-8">
                                    <span className="text-white font-black text-xl font-sora">N</span>
                                </div>

                                <div className="relative z-10">
                                    <h3 className="text-2xl font-black text-white font-sora mb-3 tracking-tight">
                                        Need a Custom Package?
                                    </h3>
                                    <p className="text-white/80 text-sm font-medium mb-8 leading-relaxed">
                                        Talk to our technology strategists directly on WhatsApp. We will help you choose or combine the exact services for your business.
                                    </p>
                                    <a
                                        href="https://wa.me/919497669317?text=Hi+NanoRays!+I+need+help+choosing+a+service."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full py-4 bg-white text-[#2563EB] hover:bg-blue-50 rounded-xl font-extrabold text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg"
                                    >
                                        Discuss Your Requirements <ArrowRight size={16} />
                                    </a>
                                </div>
                            </div>
                        </TiltCard>
                    </StaggerItem>
                </StaggerContainer>
            </div>
        </motion.section>
    );
}
