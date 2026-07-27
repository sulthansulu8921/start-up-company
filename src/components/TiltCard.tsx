"use client";

import React, { ReactNode, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
    children: ReactNode;
    className?: string;
}

export default function TiltCard({ children, className = "" }: TiltCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    // Mouse coordinates relative to card center (-0.5 to 0.5)
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Spring interpolation for fluid movement
    const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), springConfig);
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left - width / 2;
        const mouseY = e.clientY - rect.top - height / 2;
        
        x.set(mouseX / width);
        y.set(mouseY / height);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={`${className} perspective-[1000px] cursor-pointer`}
        >
            <div style={{ transform: "translateZ(30px)" }} className="h-full w-full">
                {children}
            </div>
        </motion.div>
    );
}
