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
