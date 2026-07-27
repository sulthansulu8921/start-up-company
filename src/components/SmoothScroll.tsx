"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: ReactNode }) {
    useEffect(() => {
        // Initialize Lenis smooth scroll
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Premium exponential easing
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1.0,
            touchMultiplier: 1.2,
        });

        // Set Lenis globally on window so GSAP or other components can access it if needed
        (window as any).lenis = lenis;

        // Hook up Lenis scroll events to requestAnimationFrame loop
        let rafId: number;
        function raf(time: number) {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        }
        rafId = requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            cancelAnimationFrame(rafId);
            delete (window as any).lenis;
        };
    }, []);

    return <>{children}</>;
}
