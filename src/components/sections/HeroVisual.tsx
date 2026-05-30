"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { BarChart3, PieChart, Activity, ShieldCheck, UserCheck, Zap } from "lucide-react";
import { useRef } from "react";

export default function HeroVisual() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Parallax Effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { left, top, width, height } = containerRef.current!.getBoundingClientRect();
        mouseX.set((e.clientX - left) / width - 0.5);
        mouseY.set((e.clientY - top) / height - 0.5);
    };

    const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

    const rotateX = useTransform(springY, [-0.5, 0.5], [15, -15]);
    const rotateY = useTransform(springX, [-0.5, 0.5], [-20, 20]);

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
            className="relative w-full aspect-square max-w-[600px] flex items-center justify-center p-10 perspective-1000"
        >
            {/* Soft Background Glows */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-[400px] h-[400px] bg-sky/20 blur-[100px] rounded-full"
            />

            {/* 3D Dashboard Mockup Container */}
            <motion.div
                style={{ rotateX, rotateY }}
                className="relative w-full h-[450px] bg-card-bg backdrop-blur-2xl border border-glass-border rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] p-8 overflow-hidden transform-gpu"
            >
                {/* Mockup Header */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400/50" />
                        <div className="w-3 h-3 rounded-full bg-green-400/50" />
                    </div>
                    <div className="h-2 w-32 bg-navy/5 rounded-full" />
                </div>

                {/* Dashboard Grid Content */}
                <div className="grid grid-cols-2 gap-4 h-[280px]">
                    {/* Main Chart Area */}
                    <div className="col-span-2 bg-card-bg rounded-3xl p-6 shadow-sm border border-glass-border">
                        <div className="flex items-center justify-between mb-6">
                            <span className="text-xs font-bold text-foreground uppercase tracking-wider">Conversion Analytics</span>
                            <Activity size={16} className="text-royal" />
                        </div>
                        <div className="flex items-end gap-3 h-24">
                            {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h}%` }}
                                    transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
                                    className="flex-1 bg-gradient-to-t from-royal to-sky rounded-full min-w-[8px]"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Small Stats */}
                    <div className="bg-card-bg rounded-3xl p-5 shadow-sm border border-glass-border flex flex-col justify-between">
                        <PieChart size={20} className="text-purple-500" />
                        <div>
                            <p className="text-[10px] uppercase font-bold text-foreground/45">Growth</p>
                            <p className="text-2xl font-black text-foreground">+124%</p>
                        </div>
                    </div>

                    <div className="bg-card-bg rounded-3xl p-5 shadow-sm border border-glass-border flex flex-col justify-between">
                        <BarChart3 size={20} className="text-royal" />
                        <div>
                            <p className="text-[10px] uppercase font-bold text-foreground/45">Active Users</p>
                            <p className="text-2xl font-black text-foreground">5.8k</p>
                        </div>
                    </div>
                </div>

                {/* Reflection Highlight */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
            </motion.div>

            {/* Floating Glassmorphism Cards (Peripheral) */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-48 p-4 glass rounded-3xl shadow-xl z-20 flex items-center gap-3 border-glass-border animate-float"
            >
                <div className="w-10 h-10 bg-green-100 dark:bg-green-950/20 rounded-2xl flex items-center justify-center text-green-600">
                    <ShieldCheck size={20} />
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-foreground/60 uppercase">Secure</span>
                    <span className="text-xs font-black text-foreground">Verified Identity</span>
                </div>
            </motion.div>

            <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-8 w-56 p-5 bg-card-bg rounded-[2rem] shadow-2xl z-20 border border-glass-border flex items-center gap-4"
            >
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-950/20 rounded-2xl flex items-center justify-center text-royal">
                    <Zap size={24} className="fill-royal/10" />
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-foreground/40 uppercase">Performance</span>
                    <span className="text-sm font-black text-foreground">Turbo Speed</span>
                </div>
            </motion.div>

            {/* Floating 3D Dots/Particles */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        x: [0, Math.random() * 40 - 20, 0],
                        y: [0, Math.random() * 40 - 20, 0]
                    }}
                    transition={{ duration: 4 + i, repeat: Infinity }}
                    className={`absolute w-${2 + i} h-${2 + i} bg-royal/20 blur-[1px] rounded-full`}
                    style={{
                        top: `${20 + i * 15}%`,
                        left: `${10 + i * 20}%`,
                    }}
                />
            ))}
        </div>
    );
}
