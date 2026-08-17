"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import {
    Rocket, ShieldCheck, ChevronRight, Activity, Cpu, Heart, Lightbulb
} from "lucide-react";
import { useEffect, useRef } from "react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import TiltCard from "@/components/TiltCard";

const stats = [
    {
        id: "projects",
        icon: Rocket,
        number: 300,
        suffix: "+",
        label: "PROJECTS COMPLETED",
        desc: "High-quality digital solutions delivered worldwide.",
        accent: "text-indigo-600",
        bg: "bg-indigo-50",
        border: "border-indigo-100",
    },
    {
        id: "ideas",
        icon: Lightbulb,
        number: 100,
        suffix: "+",
        label: "CREATIVE IDEAS",
        desc: "Trusted alliances with industry-leading companies.",
        accent: "text-sky-600",
        bg: "bg-sky-50",
        border: "border-sky-100",
    },
    {
        id: "satisfaction",
        icon: Heart,
        number: 99,
        suffix: "%",
        label: "CLIENT SATISFACTION",
        desc: "Consistently exceeding expectations with every delivery.",
        accent: "text-purple-600",
        bg: "bg-purple-50",
        border: "border-purple-100",
    },
    {
        id: "support",
        icon: ShieldCheck,
        number: 24,
        suffix: "/7",
        label: "SUPPORT AVAILABILITY",
        desc: "Mission-critical uptime and technical assistance.",
        accent: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "border-emerald-100",
    }
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const spring = useSpring(0, { stiffness: 40, damping: 20 });
    const displayValue = useTransform(spring, (latest) => Math.floor(latest));

    useEffect(() => {
        if (inView) {
            spring.set(value);
        }
    }, [inView, spring, value]);

    return (
        <span ref={ref} className="font-black tabular-nums">
            <motion.span>{displayValue}</motion.span>
            {suffix}
        </span>
    );
}

export default function BusinessStats() {
    return (
        <motion.section
            initial={{ opacity: 0.9, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-20 py-24 overflow-hidden bg-[#FAFBFF] text-slate-900 rounded-t-[3rem] md:rounded-t-[4rem] shadow-[0_-30px_70px_rgba(0,0,0,0.12)] border-t border-blue-200/90"
        >
            {/* Dedicated High-Res Data Center Server Background Photo */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#FAFBFF] via-[#F0F5FF] to-[#FAFBFF] pointer-events-none" />

            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-500/5 blur-[150px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header Area */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl">
                        <ScrollReveal variant="fade-up">
                            <span className="inline-flex px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-[10px] font-black uppercase tracking-[0.25em] mb-4 shadow-sm">
                                Scalability Matrix
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-sora text-slate-900 tracking-tight leading-tight">
                                Numbers That <span className="bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">Speak</span>
                            </h2>
                        </ScrollReveal>
                    </div>

                    <ScrollReveal variant="fade-up">
                        <p className="text-slate-600 font-medium text-base leading-relaxed max-w-md">
                            Proven digital achievements across Kerala, Dubai, and international growth markets.
                        </p>
                    </ScrollReveal>
                </div>

                {/* Stats Grid */}
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat) => (
                        <StaggerItem key={stat.id} variant="fade-up">
                            <TiltCard className="h-full">
                                <div className="group relative h-full">
                                    <div className="relative h-full bg-white border border-slate-200/90 p-8 rounded-3xl flex flex-col justify-between overflow-hidden hover:border-indigo-300 shadow-md shadow-indigo-500/5 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300">
                                        <div>
                                            <div className="flex items-center justify-between mb-6">
                                                <div className={`w-12 h-12 rounded-2xl ${stat.bg} border ${stat.border} flex items-center justify-center transition-transform group-hover:scale-110 duration-300`}>
                                                    <stat.icon size={22} className={stat.accent} />
                                                </div>
                                                <ChevronRight size={16} className="text-slate-300 group-hover:text-indigo-600 transition-colors" />
                                            </div>

                                            <div className="text-xs font-black font-sora text-slate-500 uppercase tracking-widest mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                                                {stat.label}
                                            </div>
                                            <div className="text-4xl xl:text-5xl font-black text-slate-900 mb-4 font-sora tracking-tight">
                                                <Counter value={stat.number} suffix={stat.suffix} />
                                            </div>
                                        </div>

                                        <p className="text-slate-600 text-xs font-medium leading-relaxed">
                                            {stat.desc}
                                        </p>
                                    </div>
                                </div>
                            </TiltCard>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </motion.section>
    );
}
