"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Award, Globe2, Users, Zap, TrendingUp } from "lucide-react";

const stats = [
    { value: 200, suffix: "+", label: "Projects Delivered", icon: Globe2, color: "text-neon" },
    { value: 50, suffix: "+", label: "Happy Clients", icon: Users, color: "text-sky-400" },
    { value: 99, suffix: "%", label: "Satisfaction", icon: Award, color: "text-purple-400" },
    { value: 300, suffix: "%", label: "Avg. ROI Growth", icon: TrendingUp, color: "text-neon" },
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
        <section className="py-24 relative overflow-hidden bg-transparent">
            {/* Decorative neon lines */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/10 to-transparent" />

            <div className="max-w-7xl mx-auto px-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
                    {stats.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="relative group p-8 rounded-3xl glass-dark border-white/5 hover:border-neon/20 transition-all duration-500 text-center"
                        >
                            <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 mx-auto group-hover:bg-neon/10 transition-colors`}>
                                <s.icon size={22} className={s.color} />
                            </div>

                            <div className="text-4xl font-black text-white font-sora mb-2 tracking-tighter">
                                <AnimatedCounter target={s.value} suffix={s.suffix} />
                            </div>
                            <p className="text-[10px] text-white/80 font-black uppercase tracking-[0.2em]">{s.label}</p>

                            {/* Corner glow */}
                            <div className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-neon/0 group-hover:border-neon/20 transition-all rounded-tr-xl" />
                        </motion.div>
                    ))}
                </div>

                {/* Brand Ticker */}
                <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

                    <div className="flex items-center gap-6 mb-10">
                        <div className="h-px flex-1 bg-white/5" />
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60 whitespace-nowrap">
                            Strategic Growth Partners
                        </p>
                        <div className="h-px flex-1 bg-white/5" />
                    </div>

                    <div className="flex animate-ticker whitespace-nowrap opacity-30 group hover:opacity-100 transition-opacity">
                        {brands.map((brand, i) => (
                            <span
                                key={i}
                                className="inline-flex items-center gap-4 mx-10 text-xs font-black text-white uppercase tracking-[0.3em]"
                            >
                                <Zap size={10} className="text-neon fill-neon" />
                                {brand}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
