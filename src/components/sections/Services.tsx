"use client";

import { services } from "@/data/serviceData";
import Link from "next/link";
import { Zap, ArrowRight } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import TiltCard from "@/components/TiltCard";

export default function Services() {
    return (
        <section id="services" className="py-32 relative bg-transparent overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent z-10" />
            <div className="absolute w-[600px] h-[600px] bg-neon/5 blur-[150px] rounded-full -top-48 -right-48 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
                    <ScrollReveal variant="fade-right" className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/80 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                            <Zap size={12} className="text-neon" />
                            Core Capabilities
                        </div>

                        <h2 className="text-5xl md:text-6xl font-black font-sora text-white tracking-tighter">
                            Next-Gen Services for <br />
                            <span className="text-neon">Modern Enterprises</span>
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal variant="fade-left" delay={0.2} className="max-w-sm">
                        <p className="text-white/80 text-lg mb-2">
                            We combine professional design with advanced strategic frameworks to elevate your market presence.
                        </p>
                    </ScrollReveal>
                </div>

                {/* Services Grid */}
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((s, i) => (
                        <StaggerItem key={i} variant="fade-up">
                            <Link href={`/services/${s.slug}`} className="block h-full">
                                <TiltCard className="h-full">
                                    <div className="group relative p-8 rounded-3xl glass-dark border-white/10 hover:border-neon/30 transition-all duration-500 overflow-hidden h-full cursor-pointer flex flex-col justify-between">
                                        {/* Card glow effect */}
                                        <div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                            style={{
                                                background: `radial-gradient(circle at top right, ${s.bg}, transparent 70%)`
                                            }}
                                        />

                                        <div>
                                            {/* Card header */}
                                            <div className="flex justify-between items-start mb-10">
                                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-all">
                                                    <s.icon size={28} className={`${s.accent} group-hover:scale-110 transition-transform`} />
                                                </div>
                                                <div className="text-white/20 group-hover:text-neon transition-colors">
                                                    <Zap size={24} strokeWidth={1} />
                                                </div>
                                            </div>

                                            {/* Text */}
                                            <h3 className="text-xl font-black text-white font-sora mb-4 tracking-tight group-hover:text-neon transition-colors">
                                                {s.title}
                                            </h3>
                                            <p className="text-white/90 text-sm leading-relaxed mb-10 font-bold group-hover:text-white transition-colors">
                                                {s.desc}
                                            </p>
                                        </div>

                                        {/* Action */}
                                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/80 group-hover:text-neon transition-colors mt-auto">
                                            More Details
                                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                        </div>

                                        {/* Bottom accent line */}
                                        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10 group-hover:bg-neon/40 transition-all" />
                                    </div>
                                </TiltCard>
                            </Link>
                        </StaggerItem>
                    ))}

                    {/* CTA Card */}
                    <StaggerItem variant="fade-up">
                        <TiltCard className="h-full">
                            <div className="p-8 rounded-3xl bg-neon border border-neon flex flex-col justify-between items-start group overflow-hidden relative h-full">
                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-all" />
                                <div className="relative z-10 w-14 h-14 rounded-2xl bg-black flex items-center justify-center mb-10">
                                    <span className="text-neon font-black text-xl">N</span>
                                </div>

                                <div className="relative z-10">
                                    <h3 className="text-2xl font-black text-black font-sora mb-2 tracking-tighter">
                                        Not Sure What You Need?
                                    </h3>
                                    <p className="text-black/80 text-sm font-black mb-8">
                                        Talk to our team directly. We will help you choose the right service for your business — for free!
                                    </p>
                                    <a
                                        href="https://wa.me/919497669317?text=Hi+NanoRays!+I+need+help+choosing+a+service."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full py-4 bg-black text-white rounded-xl font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
                                    >
                                        Contact Us Now <ArrowRight size={16} />
                                    </a>
                                </div>
                            </div>
                        </TiltCard>
                    </StaggerItem>
                </StaggerContainer>
            </div>
        </section>
    );
}
