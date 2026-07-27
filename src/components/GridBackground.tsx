"use client";

import { useScroll, useTransform, motion } from "framer-motion";

export default function GridBackground() {
    const { scrollY } = useScroll();
    // Lightweight parallax — only transforms, no layout reflow
    const y = useTransform(scrollY, [0, 5000], [0, -150]);

    return (
        <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">

            {/* ── Base Canvas ──────────────────────────────────────────── */}
            <div className="absolute inset-0 bg-[#FAFBFF]" />

            {/* Top radial sweep – pure CSS, zero JS cost */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-5%,_rgba(168,85,247,0.13)_0%,_rgba(99,102,241,0.07)_40%,_transparent_70%)]" />

            {/* ── CSS-only Bokeh Blobs (no JS animation, no layout reflow) ── */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Blob 1 – Violet */}
                <div
                    className="blob-1 absolute -top-[25%] -left-[15%] w-[65%] aspect-square rounded-full"
                    style={{
                        background: "radial-gradient(circle, rgba(168,85,247,0.16) 0%, rgba(139,92,246,0.08) 45%, transparent 70%)",
                        filter: "blur(70px)",
                        willChange: "transform",
                    }}
                />
                {/* Blob 2 – Rose */}
                <div
                    className="blob-2 absolute top-[5%] -right-[10%] w-[55%] aspect-square rounded-full"
                    style={{
                        background: "radial-gradient(circle, rgba(236,72,153,0.12) 0%, rgba(244,114,182,0.06) 50%, transparent 70%)",
                        filter: "blur(75px)",
                        willChange: "transform",
                    }}
                />
                {/* Blob 3 – Cyan */}
                <div
                    className="blob-3 absolute -bottom-[20%] left-[5%] w-[55%] aspect-square rounded-full"
                    style={{
                        background: "radial-gradient(circle, rgba(56,189,248,0.13) 0%, rgba(14,165,233,0.06) 50%, transparent 70%)",
                        filter: "blur(75px)",
                        willChange: "transform",
                    }}
                />
                {/* Blob 4 – Amber */}
                <div
                    className="blob-4 absolute top-[40%] left-[35%] w-[38%] aspect-square rounded-full"
                    style={{
                        background: "radial-gradient(circle, rgba(251,191,36,0.09) 0%, rgba(245,158,11,0.04) 55%, transparent 70%)",
                        filter: "blur(80px)",
                        willChange: "transform",
                    }}
                />
            </div>

            {/* ── Parallax Dot + Line Grid (single motion.div, no blur) ── */}
            <motion.div
                style={{ y }}
                className="absolute inset-x-0 -top-60 -bottom-60 will-change-transform"
            >
                {/* Dot grid */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: "radial-gradient(circle, rgba(99,102,241,0.18) 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                    }}
                />
                {/* Coarser line overlay */}
                <div
                    className="absolute inset-0 opacity-40"
                    style={{
                        backgroundImage: `
                          linear-gradient(rgba(139,92,246,0.07) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(139,92,246,0.07) 1px, transparent 1px)
                        `,
                        backgroundSize: "96px 96px",
                    }}
                />
            </motion.div>

            {/* ── Decorative Rings (CSS rotate, GPU-only) ─────────────── */}
            <div className="ring-spin-slow absolute -top-24 -left-24 w-96 h-96 rounded-full border border-violet-300/20" />
            <div className="ring-spin-reverse absolute -bottom-32 -right-32 w-[480px] h-[480px] rounded-full border border-pink-300/15" />

            {/* ── Shimmer Lines (CSS animation) ───────────────────────── */}
            <div className="shimmer-1 absolute left-0 right-0 h-px top-[15%]"
                style={{ background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.25), rgba(56,189,248,0.15), transparent)" }} />
            <div className="shimmer-2 absolute left-0 right-0 h-px top-[45%]"
                style={{ background: "linear-gradient(90deg, transparent, rgba(236,72,153,0.2), rgba(139,92,246,0.18), transparent)" }} />
            <div className="shimmer-3 absolute left-0 right-0 h-px top-[75%]"
                style={{ background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.2), rgba(251,191,36,0.12), transparent)" }} />

            {/* ── Edge Vignette ────────────────────────────────────────── */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_50%,_transparent_55%,_rgba(250,251,255,0.55)_100%)]" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAFBFF] to-transparent" />
        </div>
    );
}
