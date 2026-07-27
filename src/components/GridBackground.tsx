"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function GridBackground() {
    const { scrollY } = useScroll();
    
    // Parallax scrolling: move the background grid slightly slower than scroll (y-translation)
    const y = useTransform(scrollY, [0, 5000], [0, -300]);
    // Subtle scale shift to create depth perception
    const scale = useTransform(scrollY, [0, 2000], [1, 1.03]);

    return (
        <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none bg-background">
            {/* Slow Floating Luxury Ambient Glow Blobs */}
            <div className="absolute inset-0 overflow-hidden opacity-45 dark:opacity-30 pointer-events-none">
                {/* Purple Glow */}
                <motion.div 
                    animate={{
                        x: [0, 80, -40, 0],
                        y: [0, -60, 50, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -top-[20%] -left-[10%] w-[65%] aspect-square rounded-full bg-gradient-to-tr from-purple-400/20 to-purple-600/5 blur-[130px] will-change-transform"
                />
                {/* Gold/Amber Glow */}
                <motion.div 
                    animate={{
                        x: [0, -100, 60, 0],
                        y: [0, 80, -40, 0],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-[30%] -right-[10%] w-[55%] aspect-square rounded-full bg-gradient-to-tr from-amber-300/15 to-yellow-500/5 blur-[130px] will-change-transform"
                />
                {/* Royal/Cyan Glow */}
                <motion.div 
                    animate={{
                        x: [0, 50, -50, 0],
                        y: [0, 50, -50, 0],
                    }}
                    transition={{
                        duration: 28,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -bottom-[10%] left-[20%] w-[60%] aspect-square rounded-full bg-gradient-to-tr from-cyan-400/15 to-blue-600/5 blur-[130px] will-change-transform"
                />
            </div>

            {/* Parallax Grid */}
            <motion.div 
                style={{ y, scale }}
                className="absolute inset-x-0 -top-80 -bottom-80 cyber-grid will-change-transform"
            />
            {/* Subtle Vignette Gradient to blend grid edges near borders */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/90" />
        </div>
    );
}
