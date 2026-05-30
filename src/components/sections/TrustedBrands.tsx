"use client";

import { motion } from "framer-motion";

const brands = [
    "Google", "Amazon", "Microsoft", "Meta", "Apple", "Netflix", "Stripe", "Framer"
];

export default function TrustedBrands() {
    return (
        <div className="py-20 bg-background border-y border-glass-border overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/40">Industry Leaders we partner with</p>
            </div>

            <div className="flex overflow-hidden relative">
                <motion.div
                    animate={{ x: [0, -1920] }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="flex gap-20 items-center justify-around min-w-full"
                >
                    {brands.concat(brands).map((brand, i) => (
                        <span
                            key={i}
                            className="text-3xl md:text-5xl font-extrabold text-foreground/10 whitespace-nowrap hover:text-royal/30 transition-colors cursor-default select-none tracking-tighter"
                        >
                            {brand.toUpperCase()}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
