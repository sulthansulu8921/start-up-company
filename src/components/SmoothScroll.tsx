"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: ReactNode }) {
    useEffect(() => {
        // Initialize Lenis smooth scroll
        const lenis = new Lenis({
            duration: 0.6,                                             // was 1.2 — halved for instant feel
            easing: (t) => 1 - Math.pow(1 - t, 3),                    // cubic ease-out: snappy start, smooth finish
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1.4,                                      // faster wheel response
            touchMultiplier: 1.8,                                      // faster touch response
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
