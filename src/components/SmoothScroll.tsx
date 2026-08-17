"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: ReactNode }) {
    useEffect(() => {
        // Initialize Lenis smooth scroll - tuned for ultra-fast, zero-delay response
        const lenis = new Lenis({
            duration: 0.35,                                            // fast, instantaneous response
            easing: (t) => 1 - Math.pow(1 - t, 4),                    // quartic ease-out: instant start, crisp stop
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1.8,                                      // high-speed wheel response
            touchMultiplier: 2.2,                                      // high-speed touch response
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
