"use client";

import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

interface ScrollRevealProps {
    children: ReactNode;
    variant?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "scale-up" | "blur-in";
    duration?: number;
    delay?: number;
    className?: string;
    threshold?: number;
    once?: boolean;
}

const revealVariants: Record<string, Variants> = {
    "fade-up": {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0 }
    },
    "fade-down": {
        hidden: { opacity: 0, y: -24 },
        visible: { opacity: 1, y: 0 }
    },
    "fade-left": {
        hidden: { opacity: 0, x: 28 },
        visible: { opacity: 1, x: 0 }
    },
    "fade-right": {
        hidden: { opacity: 0, x: -28 },
        visible: { opacity: 1, x: 0 }
    },
    "zoom-in": {
        hidden: { opacity: 0, scale: 0.94 },
        visible: { opacity: 1, scale: 1 }
    },
    "scale-up": {
        hidden: { opacity: 0, scale: 0.88 },
        visible: { opacity: 1, scale: 1 }
    },
    "blur-in": {
        hidden: { opacity: 0, filter: "blur(8px)", y: 12 },
        visible: { opacity: 1, filter: "blur(0px)", y: 0 }
    }
};

export default function ScrollReveal({
    children,
    variant = "fade-up",
    duration = 0.45,
    delay = 0,
    className = "",
    threshold = 0.12,
    once = true
}: ScrollRevealProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount: threshold }}
            variants={revealVariants[variant]}
            transition={{
                duration,
                delay,
                ease: [0.16, 1, 0.3, 1] // Premium cubic-bezier curve
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

interface StaggerContainerProps {
    children: ReactNode;
    delayChildren?: number;
    staggerChildren?: number;
    className?: string;
    threshold?: number;
    once?: boolean;
}

export function StaggerContainer({
    children,
    delayChildren = 0,
    staggerChildren = 0.1,
    className = "",
    threshold = 0.1,
    once = true
}: StaggerContainerProps) {
    const containerVariants: Variants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren,
                staggerChildren
            }
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount: threshold }}
            variants={containerVariants}
            className={className}
        >
            {children}
        </motion.div>
    );
}

interface StaggerItemProps {
    children: ReactNode;
    variant?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "scale-up" | "blur-in";
    className?: string;
}

export function StaggerItem({
    children,
    variant = "fade-up",
    className = ""
}: StaggerItemProps) {
    return (
        <motion.div
            variants={revealVariants[variant]}
            transition={{
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1]
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
