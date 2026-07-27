"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function GridBackground() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 5000], [0, -200]);
    const scale = useTransform(scrollY, [0, 2000], [1, 1.04]);

    return (
        <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">

            {/* ── Base: Premium Gradient Canvas ────────────────────────────── */}
            <div className="absolute inset-0 bg-[#FAFBFF]" />

            {/* Radial light sweep from top-center (signature Apple-esque hero glow) */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,_rgba(168,85,247,0.12)_0%,_rgba(99,102,241,0.07)_40%,_transparent_70%)]" />

            {/* ── Animated Iridescent Bokeh Blobs ─────────────────────────── */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Blob 1 – Violet / Lavender */}
                <motion.div
                    animate={{ x: [0, 60, -30, 0], y: [0, -80, 40, 0] }}
                    transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-[25%] -left-[15%] w-[70%] aspect-square rounded-full will-change-transform"
                    style={{
                        background: "radial-gradient(circle, rgba(168,85,247,0.18) 0%, rgba(139,92,246,0.10) 40%, transparent 70%)",
                        filter: "blur(90px)",
                    }}
                />

                {/* Blob 2 – Rose / Pink */}
                <motion.div
                    animate={{ x: [0, -80, 50, 0], y: [0, 60, -40, 0] }}
                    transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[10%] -right-[10%] w-[55%] aspect-square rounded-full will-change-transform"
                    style={{
                        background: "radial-gradient(circle, rgba(236,72,153,0.13) 0%, rgba(244,114,182,0.07) 45%, transparent 70%)",
                        filter: "blur(100px)",
                    }}
                />

                {/* Blob 3 – Sky / Cyan */}
                <motion.div
                    animate={{ x: [0, 40, -60, 0], y: [0, 40, -40, 0] }}
                    transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-[20%] left-[5%] w-[60%] aspect-square rounded-full will-change-transform"
                    style={{
                        background: "radial-gradient(circle, rgba(56,189,248,0.14) 0%, rgba(14,165,233,0.07) 45%, transparent 70%)",
                        filter: "blur(100px)",
                    }}
                />

                {/* Blob 4 – Warm Gold (center) */}
                <motion.div
                    animate={{ x: [0, -40, 40, 0], y: [0, 60, -60, 0] }}
                    transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[40%] left-[30%] w-[40%] aspect-square rounded-full will-change-transform"
                    style={{
                        background: "radial-gradient(circle, rgba(251,191,36,0.10) 0%, rgba(245,158,11,0.05) 50%, transparent 70%)",
                        filter: "blur(100px)",
                    }}
                />
            </div>

            {/* ── Parallax Geometric Grid ──────────────────────────────────── */}
            <motion.div
                style={{ y, scale }}
                className="absolute inset-x-0 -top-80 -bottom-80 will-change-transform"
                // Fine dot-grid + line-grid layered for premium depth
                css-var=""
                data-grid="true"
            >
                {/* Dot grid */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: "radial-gradient(circle, rgba(99,102,241,0.20) 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                    }}
                />
                {/* Line grid overlay — larger cells */}
                <div
                    className="absolute inset-0 opacity-40"
                    style={{
                        backgroundImage: `
                          linear-gradient(rgba(139,92,246,0.08) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(139,92,246,0.08) 1px, transparent 1px)
                        `,
                        backgroundSize: "96px 96px",
                    }}
                />
            </motion.div>

            {/* ── Floating Geometric Accent Shapes ────────────────────────── */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Top-left diamond ring */}
                <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-24 -left-24 w-96 h-96 rounded-full border border-violet-300/20 will-change-transform"
                />
                <motion.div
                    animate={{ rotate: [360, 0] }}
                    transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-16 -left-16 w-64 h-64 rounded-full border border-indigo-300/15 will-change-transform"
                />

                {/* Bottom-right ring */}
                <motion.div
                    animate={{ rotate: [0, -360] }}
                    transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full border border-pink-300/15 will-change-transform"
                />

                {/* Small floating diamonds */}
                {[
                    { top: "15%", left: "8%", delay: 0, size: 8 },
                    { top: "30%", right: "6%", delay: 2, size: 6 },
                    { top: "65%", left: "12%", delay: 4, size: 5 },
                    { top: "80%", right: "15%", delay: 1, size: 7 },
                    { top: "50%", left: "50%", delay: 3, size: 4 },
                ].map((p, i) => (
                    <motion.div
                        key={i}
                        animate={{ y: [0, -18, 0], opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 5 + i, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
                        className="absolute rotate-45 rounded-sm border border-violet-400/30 bg-violet-100/30 will-change-transform"
                        style={{
                            top: (p as any).top,
                            left: (p as any).left,
                            right: (p as any).right,
                            width: p.size * 4,
                            height: p.size * 4,
                        }}
                    />
                ))}

                {/* Horizontal shimmer lines */}
                {[15, 38, 62, 85].map((pct, i) => (
                    <motion.div
                        key={i}
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: [0, 1, 0], opacity: [0, 0.3, 0] }}
                        transition={{ duration: 8, repeat: Infinity, delay: i * 2.5, ease: "easeInOut" }}
                        className="absolute left-0 right-0 h-px origin-left will-change-transform"
                        style={{
                            top: `${pct}%`,
                            background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.3), rgba(56,189,248,0.2), transparent)",
                        }}
                    />
                ))}
            </div>

            {/* ── Edge Vignette ────────────────────────────────────────────── */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_50%,_transparent_50%,_rgba(250,251,255,0.6)_100%)]" />
            {/* Bottom fade to solid background colour */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#FAFBFF] to-transparent" />
        </div>
    );
}
