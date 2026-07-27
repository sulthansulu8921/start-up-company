"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface StorytellingContainerProps {
    children: React.ReactNode;
}

export default function StorytellingContainer({ children }: StorytellingContainerProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const panels = gsap.utils.toArray<HTMLElement>(".story-panel");
        if (panels.length === 0) return;

        const lenis = (window as any).lenis;
        if (lenis) {
            lenis.on("scroll", ScrollTrigger.update);
        }

        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add("(min-width: 768px)", () => {
                // Setup initial positions for stacked panels (slide up from bottom)
                gsap.set(panels.slice(1), { yPercent: 100 });

                // Premium Apple-style storytelling timeline
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: container,
                        start: "top top",
                        end: () => `+=${window.innerHeight * (panels.length - 1) * 1.5}`,
                        scrub: 1.5, // Smooth scrubbing
                        pin: true,
                        anticipatePin: 1,
                    }
                });

                panels.forEach((panel, i) => {
                    if (i === 0) return;
                    const prevPanel = panels[i - 1];

                    tl.to(panel, {
                        yPercent: 0,
                        ease: "power3.out",
                    }, `slide-${i}`)
                    .to(prevPanel, {
                        scale: 0.93,
                        opacity: 0.25,
                        filter: "blur(12px)",
                        ease: "power3.out",
                    }, `slide-${i}`);
                });
            });

            mm.add("(max-width: 767px)", () => {
                // Revert styles for standard mobile scrolling
                gsap.set(panels, { yPercent: 0, scale: 1, opacity: 1, filter: "none" });
            });
        }, container);

        return () => {
            ctx.revert();
            if (lenis) {
                lenis.off("scroll", ScrollTrigger.update);
            }
        };
    }, []);

    return (
        <div ref={containerRef} className="relative w-full md:h-screen md:overflow-hidden bg-background">
            {React.Children.map(children, (child, index) => {
                if (!child) return null;
                return (
                    <div 
                        className="story-panel w-full md:h-screen md:absolute md:inset-0 md:overflow-hidden bg-background"
                        style={{ zIndex: 10 + index }}
                    >
                        <div className="w-full h-full overflow-y-auto no-scrollbar py-24 px-4 md:px-8 flex items-center justify-center">
                            <div className="w-full max-w-7xl mx-auto">
                                {child}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
