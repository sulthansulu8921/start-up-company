"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Award, Globe2, Users, Zap, TrendingUp } from "lucide-react";

const stats = [
    { value: 200, suffix: "+", label: "Projects Delivered", icon: Globe2, color: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-100" },
    { value: 50, suffix: "+", label: "Happy Clients", icon: Users, color: "text-sky-600", bg: "bg-sky-50", border: "border-sky-100" },
    { value: 99, suffix: "%", label: "Satisfaction", icon: Award, color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-100" },
    { value: 300, suffix: "%", label: "Avg. ROI Growth", icon: TrendingUp, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
];

const brands = [
    "TechFlow", "NovaBrand", "CloudAxis", "PixelForge", "VelocityX",
    "StellarIO", "ApexDigital", "FuseMedia", "CyberNest", "PulseWeb",
    "TechFlow", "NovaBrand", "CloudAxis", "PixelForge", "VelocityX",
    "StellarIO", "ApexDigital", "FuseMedia", "CyberNest", "PulseWeb",
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const duration = 2000;
        const increment = Math.ceil(target / (duration / 16));
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(start);
        }, 16);
        return () => clearInterval(timer);
    }, [inView, target]);

    return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
    return (
        <section className="py-20 relative overflow-hidden bg-transparent">
            <div className="max-w-7xl mx-auto px-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {stats.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="relative group p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-indigo-300 shadow-md shadow-indigo-500/5 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 text-center"
                        >
                            <div className={`w-12 h-12 rounded-2xl ${s.bg} border ${s.border} flex items-center justify-center mb-5 mx-auto group-hover:scale-110 transition-transform`}>
                                <s.icon size={22} className={s.color} />
                            </div>

                            <div className="text-3xl md:text-4xl font-black text-slate-900 font-sora mb-2 tracking-tight">
                                <AnimatedCounter target={s.value} suffix={s.suffix} />
                            </div>
                            <p className="text-[11px] text-slate-600 font-black uppercase tracking-[0.2em]">{s.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Brand Ticker */}
                <div className="relative">
                    <div className="flex items-center gap-6 mb-8">
                        <div className="h-px flex-1 bg-slate-200" />
                        <p className="text-[10px] font-black uppercase tracking-[0.35em] text-slate-500 whitespace-nowrap">
                            Strategic Growth Partners
                        </p>
                        <div className="h-px flex-1 bg-slate-200" />
                    </div>

                    <div className="flex animate-ticker whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity">
                        {brands.map((brand, i) => (
                            <span
                                key={i}
                                className="inline-flex items-center gap-3 mx-8 text-xs font-extrabold text-slate-700 uppercase tracking-[0.25em]"
                            >
                                <Zap size={11} className="text-indigo-600 fill-current" />
                                {brand}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
