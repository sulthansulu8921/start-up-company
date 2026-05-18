"use client";

import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Code2, BarChart3, Megaphone, Palette } from "lucide-react";

const FRAME_COUNT = 192;

const features = [
    {
        title: <>HIGH-PERFORMANCE <br className="hidden md:block" /> DIGITAL <span className="text-neon">SOLUTIONS</span></>,
        subtitle: "Web Design • Development • SEO • Digital Growth",
        desc: <>We engineer <span className="text-white font-bold">high-performance websites</span> and <span className="text-white font-bold">strategic digital solutions</span> that empower businesses to <span className="text-neon font-black">scale</span>, build authority, and dominate their market.</>,
        icon: Code2,
        color: "text-neon",
        range: [0, 0.05, 0.2, 0.25]
    },
    {
        title: <>DOMINATE <br className="hidden md:block" /> GOOGLE <span className="text-sky-400">SEARCH</span></>,
        subtitle: "SEO Strategy & Google Ranking Mastery",
        desc: <>We secure <span className="text-sky-400 font-bold">first-page rankings</span> for your business, ensuring your target audience discovers you before they find your competitors.</>,
        icon: BarChart3,
        color: "text-sky-400",
        range: [0.25, 0.3, 0.45, 0.5]
    },
    {
        title: <>ACCELERATE <span className="text-purple-400">LEAD</span> <br className="hidden md:block" /> <span className="text-purple-400">GENERATION</span></>,
        subtitle: "Performance Marketing & Social Media",
        desc: <>We execute <span className="text-purple-400 font-bold">high-conversion campaigns</span> across Instagram, Facebook, and Google to drive qualified leads directly to your sales funnel.</>,
        icon: Megaphone,
        color: "text-purple-400",
        range: [0.5, 0.55, 0.7, 0.75]
    },
    {
        title: <>CRAFTING <br className="hidden md:block" /> <span className="text-amber-400">ICONIC BRANDS</span></>,
        subtitle: "Brand Identity & Visual Storytelling",
        desc: <>We design <span className="text-amber-400 font-bold">premium logos</span> and comprehensive brand identities that command attention and earn instant trust from your audience.</>,
        icon: Palette,
        color: "text-amber-400",
        range: [0.75, 0.8, 0.95, 1]
    }
];

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [imagesLoaded, setImagesLoaded] = useState(0);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const requestRef = useRef<number | undefined>(undefined);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Preload images
    useEffect(() => {
        const loadImages = () => {
            const loadedImages: HTMLImageElement[] = [];
            let loadedCount = 0;

            for (let i = 1; i <= FRAME_COUNT; i++) {
                const img = new Image();
                const seq = i.toString().padStart(3, "0");
                img.src = `/assent/frame_${seq}.gif`;

                img.onload = () => {
                    loadedCount++;
                    setImagesLoaded(loadedCount);
                    if (loadedCount === FRAME_COUNT && canvasRef.current) {
                        drawFrame(1);
                    }
                };

                loadedImages.push(img);
            }
            imagesRef.current = loadedImages;
        };

        loadImages();

        return () => {
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Resize canvas to match window
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                const { innerWidth, innerHeight } = window;
                canvasRef.current.width = innerWidth;
                canvasRef.current.height = innerHeight;
                // Re-draw current frame
                const currentFrame = Math.max(1, Math.min(FRAME_COUNT, Math.floor(scrollYProgress.get() * FRAME_COUNT) + 1));
                drawFrame(currentFrame);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Draw frame on canvas with object-fit: cover logic
    const drawFrame = (frameIndex: number) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        const img = imagesRef.current[frameIndex - 1];

        if (canvas && ctx && img && img.complete) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const canvasRatio = canvas.width / canvas.height;
            const imgRatio = img.width / img.height;

            let renderWidth, renderHeight, xOffset, yOffset;

            if (canvasRatio > imgRatio) {
                renderWidth = canvas.width;
                renderHeight = canvas.width / imgRatio;
                xOffset = 0;
                yOffset = (canvas.height - renderHeight) / 2;
            } else {
                renderWidth = canvas.height * imgRatio;
                renderHeight = canvas.height;
                xOffset = (canvas.width - renderWidth) / 2;
                yOffset = 0;
            }

            ctx.drawImage(img, xOffset, yOffset, renderWidth, renderHeight);
        }
    };

    // Listen to scroll to update frame
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // Map 0-1 to 1-192
        const frameIndex = Math.max(1, Math.min(FRAME_COUNT, Math.floor(latest * FRAME_COUNT) + 1));
        if (requestRef.current) {
            cancelAnimationFrame(requestRef.current);
        }
        requestRef.current = requestAnimationFrame(() => drawFrame(frameIndex));
    });

    return (
        <section ref={containerRef} className="relative h-[200vh] bg-transparent">
            {/* Sticky Container */}
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-black flex items-center justify-center z-20">

                {/* The 3D Sequence Canvas */}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full z-10"
                />

                {/* Dark Gradient Overlays for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-20" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 z-20" />

                {/* Subtitle / Overlay Features */}
                <div className="relative z-30 max-w-7xl mx-auto px-6 w-full h-full flex flex-col justify-center pt-24 md:pt-32">
                    {features.map((feat, i) => {
                        // Create fading animation based on scroll range
                        const opacity = useTransform(scrollYProgress, feat.range, [0, 1, 1, 0]);
                        const y = useTransform(scrollYProgress, feat.range, [50, 0, 0, -50]);

                        return (
                            <motion.div
                                key={i}
                                style={{ opacity, y }}
                                className="absolute left-6 md:left-12 max-w-xl pointer-events-none"
                            >
                                <div className={`inline-flex flex-col items-start`}>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md`}>
                                            <feat.icon size={24} className={feat.color} />
                                        </div>
                                        <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-[10px] font-black uppercase tracking-[0.3em] backdrop-blur-sm shadow-xl">
                                            Phase 0{i + 1}
                                        </div>
                                    </div>

                                    {i === 0 ? (
                                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black font-sora text-white leading-[1.1] tracking-tighter uppercase mb-4 drop-shadow-2xl max-w-4xl">
                                            {feat.title}
                                        </h1>
                                    ) : (
                                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black font-sora text-white leading-[1.1] tracking-tighter uppercase mb-4 drop-shadow-2xl max-w-4xl">
                                            {feat.title}
                                        </h2>
                                    )}

                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 drop-shadow-lg">
                                        {feat.subtitle}
                                    </h3>

                                    <p className="text-white/80 text-base md:text-lg font-medium leading-relaxed drop-shadow-md">
                                        {feat.desc}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    style={{ opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0]) }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3"
                >
                    <div className="w-6 h-10 border-2 border-neon/30 rounded-full flex justify-center p-1 relative shadow-[0_0_15px_rgba(204,255,0,0.1)]">
                        <motion.div
                            animate={{
                                y: [0, 16, 0],
                                opacity: [1, 0.5, 1]
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="w-1.5 h-2 bg-neon rounded-full"
                        />
                    </div>
                    <span className="text-[10px] font-black text-neon uppercase tracking-widest">Scroll Down</span>
                </motion.div>

            </div>
        </section>
    );
}
