"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (typeof window !== "undefined" && window.history.scrollRestoration !== 'manual') {
            window.history.scrollRestoration = 'manual';
        }

        document.body.style.overflow = "hidden";
        window.scrollTo(0, 0);

        // Smooth percentage counter
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 10;  // faster fill
            });
        }, 10);

        // Hide preloader fast — 200ms max
        const timer = setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = "auto";
        }, 200);

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    key="preloader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.99, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
                    className="fixed inset-0 z-[9999] bg-[#030712] flex flex-col items-center justify-center pointer-events-none overflow-hidden"
                >
                    {/* Atmospheric Ambient Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-[#2563EB]/20 via-[#0284C7]/15 to-[#06B6D4]/20 blur-[180px] rounded-full pointer-events-none" />
                    <div className="absolute inset-0 cyber-grid opacity-[0.04] pointer-events-none" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                            filter: [
                                "drop-shadow(0 0 15px rgba(37,99,235,0.2))",
                                "drop-shadow(0 0 35px rgba(6,182,212,0.45))",
                                "drop-shadow(0 0 15px rgba(37,99,235,0.2))"
                            ]
                        }}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut",
                            filter: { duration: 2, repeat: Infinity }
                        }}
                        className="flex flex-col items-center relative z-10 px-6 text-center"
                    >
                        <Logo width={320} height={90} className="mb-10 max-w-[280px] sm:max-w-[340px] h-auto" />

                        {/* Executive Dual-Tone Loading Bar */}
                        <div className="w-64 sm:w-80 h-1.5 bg-white/10 rounded-full overflow-hidden relative border border-white/5 backdrop-blur-sm">
                            <motion.div
                                initial={{ width: "0%" }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.05 }}
                                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#2563EB] via-[#0284C7] to-[#06B6D4] shadow-[0_0_20px_rgba(6,182,212,0.6)] rounded-full"
                            />
                        </div>

                        {/* Progress Percentage & Status */}
                        <div className="mt-6 flex flex-col items-center gap-1.5">
                            <span className="text-3xl font-black font-sora text-white tracking-tight">
                                {progress}<span className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">%</span>
                            </span>
                            <motion.div
                                animate={{ opacity: [0.4, 1, 0.4] }}
                                transition={{ duration: 1.2, repeat: Infinity }}
                                className="text-cyan-400/90 text-[10px] font-black uppercase tracking-[0.4em]"
                            >
                                Executive System Ready
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
