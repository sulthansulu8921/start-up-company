"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Disable browser's automatic scroll restoration to fix refresh behavior
        if (typeof window !== "undefined" && window.history.scrollRestoration !== 'manual') {
            window.history.scrollRestoration = 'manual';
        }

        document.body.style.overflow = "hidden";
        window.scrollTo(0, 0);

        // Animate percentage manually over 2.2 seconds
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            });
        }, 22);

        // Hide preloader after 2.5 seconds
        const timer = setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = "auto";
            // Final absolute scroll reset on exit
            window.scrollTo(0, 0);
        }, 2500);

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
                    initial={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: "-100%", transition: { duration: 0.8, ease: "easeInOut" } }}
                    className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center pointer-events-none"
                >
                    {/* Background Visuals */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon/10 blur-[180px] rounded-full pointer-events-none" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: 1,
                            scale: [0.8, 1.05, 1],
                            filter: [
                                "drop-shadow(0 0 0px rgba(204,255,0,0))",
                                "drop-shadow(0 0 20px rgba(204,255,0,0.2))",
                                "drop-shadow(0 0 10px rgba(204,255,0,0.1))"
                            ]
                        }}
                        transition={{
                            duration: 1.2,
                            ease: "easeOut",
                            filter: {
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }
                        }}
                        className="flex flex-col items-center relative z-10"
                    >
                        <Logo width={400} height={110} className="mb-12" />

                        {/* Loading Bar Container */}
                        <div className="w-80 h-1 bg-white/10 rounded-full overflow-hidden relative">
                            <motion.div
                                initial={{ width: "0%" }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.1 }}
                                className="absolute top-0 left-0 h-full bg-neon shadow-[0_0_20px_rgba(204,255,0,0.4)] rounded-full"
                            />
                        </div>

                        {/* Percentage & Loading Text */}
                        <div className="mt-8 flex flex-col items-center gap-2">
                            <span className="text-4xl font-black font-sora text-white leading-none">
                                {progress}<span className="text-neon">%</span>
                            </span>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0, 1, 0.5, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em]"
                            >
                                Loading System...
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
