"use client";

import { motion } from "framer-motion";
import { ChevronLeft, Shield } from "lucide-react";
import Link from "next/link";

interface LegalLayoutProps {
    title: string;
    lastUpdated: string;
    children: React.ReactNode;
}

export default function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
    return (
        <div className="min-h-screen bg-black pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-12"
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-white/40 hover:text-neon transition-colors font-bold text-xs uppercase tracking-widest"
                    >
                        <ChevronLeft size={14} />
                        Back to Home
                    </Link>
                </motion.div>

                {/* Header */}
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-neon/10 border border-neon/20 text-neon text-[10px] font-black uppercase tracking-[0.3em] mb-6"
                    >
                        <Shield size={14} />
                        Legal Document / v1.0
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black font-sora text-white mb-4 tracking-tighter"
                    >
                        {title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/40 text-sm font-bold uppercase tracking-widest"
                    >
                        Last Updated: {lastUpdated}
                    </motion.p>
                </div>

                {/* Content Area */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="glass-dark p-8 md:p-12 rounded-3xl border border-white/10 prose prose-invert prose-neon max-w-none shadow-2xl"
                >
                    {children}
                </motion.div>

                {/* Footer Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 text-center"
                >
                    <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.2em]">
                        © 2026 NanoRays Solution. All rights reserved. Professional Grade Compliance.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
