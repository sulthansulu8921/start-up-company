"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxSection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

    return (
        <section
            ref={ref}
            className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-navy"
        >
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0 will-change-transform"
            >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072')] bg-cover bg-center opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-b from-navy via-transparent to-navy" />
            </motion.div>

            <div className="relative z-10 text-center px-6">
                <motion.h2
                    style={{ opacity }}
                    className="text-4xl md:text-6xl font-bold font-sora mb-6 max-w-4xl mx-auto leading-tight"
                >
                    Your Business Deserves A <br />
                    <span className="text-cyan">Powerful Online Presence</span>
                </motion.h2>
                <motion.p
                    style={{ opacity }}
                    className="text-lg md:text-xl text-soft-gray/80 max-w-2xl mx-auto"
                >
                    We don't just build websites; we build growth engines.
                </motion.p>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-navy to-transparent" />
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-navy to-transparent" />

            {/* Decorative Particles */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan rounded-full"
                        animate={{
                            y: [0, -100],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                        }}
                        style={{
                            left: `${Math.random() * 100}%`,
                            bottom: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>
        </section>
    );
}
