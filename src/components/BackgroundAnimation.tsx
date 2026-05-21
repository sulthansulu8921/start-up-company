"use client";

import { motion } from "framer-motion";

export default function BackgroundAnimation() {
    return (
        <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none bg-background">
            {/* Cyber Grid Base */}
            <div className="absolute inset-0 cyber-grid opacity-[0.05]" />

            {/* Deep Ambient Glows */}
            <div className="absolute inset-0 filter blur-[160px] opacity-20">
                {/* Neon Primary Blob */}
                <motion.div
                    animate={{
                        x: [0, 150, -100, 0],
                        y: [0, -100, 150, 0],
                        scale: [1, 1.3, 0.8, 1],
                        rotate: [0, 45, -45, 0],
                    }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute top-[-10%] left-[-10%] w-[1000px] h-[1000px] bg-neon/10 rounded-full will-change-transform"
                />

                {/* Sky Blue Secondary Blob */}
                <motion.div
                    animate={{
                        x: [0, -200, 150, 0],
                        y: [0, 150, -150, 0],
                        scale: [1, 0.7, 1.2, 1],
                    }}
                    transition={{
                        duration: 45,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute bottom-[-10%] right-[-10%] w-[900px] h-[900px] bg-sky-500/5 rounded-full will-change-transform"
                />
            </div>

            {/* Scanning Line (Global Atmosphere) */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon/5 to-transparent h-[1000px] w-full animate-[scan_15s_linear_infinite] opacity-5" />

            {/* Static Noise Over Black Base */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url(/noise.svg)]" />
        </div>
    );
}
