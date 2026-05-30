"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="w-9 h-9 rounded-xl border border-white/5 bg-white/5 animate-pulse" />
        );
    }

    const currentTheme = theme === "system" ? resolvedTheme : theme;
    const isDark = currentTheme === "dark";

    const toggleTheme = () => {
        setTheme(isDark ? "light" : "dark");
    };

    return (
        <button
            onClick={toggleTheme}
            className="relative w-9.5 h-9.5 rounded-full flex items-center justify-center border border-white/10 dark:border-white/10 light:border-black/10 bg-white/5 dark:bg-white/5 light:bg-black/5 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10 backdrop-blur-md transition-colors shadow-lg hover:shadow-neon/20 outline-none group cursor-pointer"
            aria-label="Toggle Theme"
        >
            {/* Ambient hover glow */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md bg-neon/20 pointer-events-none" />
            
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={isDark ? "dark" : "light"}
                    initial={{ y: -10, opacity: 0, rotate: -45 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: 10, opacity: 0, rotate: 45 }}
                    transition={{ duration: 0.25 }}
                    className="relative z-10 flex items-center justify-center"
                >
                    {isDark ? (
                        <Sun className="w-4.5 h-4.5 text-neon" />
                    ) : (
                        <Moon className="w-4.5 h-4.5 text-black" />
                    )}
                </motion.div>
            </AnimatePresence>
        </button>
    );
}
