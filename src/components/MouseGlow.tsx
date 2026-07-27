"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function MouseGlow() {
    const mouseX = useMotionValue(-200);
    const mouseY = useMotionValue(-200);
    const cursorX = useMotionValue(-200);
    const cursorY = useMotionValue(-200);

    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const glowSpring = { damping: 40, stiffness: 100 };
    const cursorSpring = { damping: 25, stiffness: 220 };

    const springGlowX = useSpring(mouseX, glowSpring);
    const springGlowY = useSpring(mouseY, glowSpring);
    const springCursorX = useSpring(cursorX, cursorSpring);
    const springCursorY = useSpring(cursorY, cursorSpring);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);

            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target) {
                const isInteractive = 
                    target.closest("button") || 
                    target.closest("a") || 
                    target.closest("select") || 
                    target.closest("input") || 
                    target.closest("textarea") ||
                    target.closest(".cursor-pointer") ||
                    window.getComputedStyle(target).cursor === "pointer";
                setIsHovered(!!isInteractive);
            }
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        document.addEventListener("mouseover", handleMouseOver, { passive: true });
        document.addEventListener("mouseleave", handleMouseLeave, { passive: true });
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseover", handleMouseOver);
            document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [mouseX, mouseY, cursorX, cursorY, isVisible]);

    return (
        <>
            {/* Ambient Background Glow (GPU Accelerated) */}
            <motion.div
                style={{
                    left: springGlowX,
                    top: springGlowY,
                }}
                className="fixed w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 opacity-30 bg-[radial-gradient(circle_at_center,rgba(204,255,0,0.06)_0%,rgba(59,130,246,0.03)_40%,transparent_70%)] will-change-transform"
            />

            {/* Interactive Trailing Cursor */}
            {isVisible && (
                <motion.div
                    style={{
                        left: springCursorX,
                        top: springCursorY,
                    }}
                    animate={{
                        scale: isHovered ? 1.6 : 1,
                        borderColor: isHovered ? "var(--neon)" : "rgba(255, 255, 255, 0.4)",
                        backgroundColor: isHovered ? "rgba(204, 255, 0, 0.08)" : "rgba(255, 255, 255, 0)",
                    }}
                    transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
                    className="fixed w-6 h-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 pointer-events-none z-[9999] will-change-transform mix-blend-difference hidden md:block"
                />
            )}
        </>
    );
}
