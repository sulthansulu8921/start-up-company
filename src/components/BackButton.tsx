"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
    fallbackUrl?: string;
    label?: string;
    className?: string;
    variant?: "glass" | "dark" | "light";
}

export default function BackButton({
    fallbackUrl = "/#services",
    label = "Back to Services",
    className = "",
    variant = "glass"
}: BackButtonProps) {
    const router = useRouter();

    const handleBack = (e: React.MouseEvent) => {
        e.preventDefault();
        if (typeof window !== "undefined") {
            const targetUrl = fallbackUrl || "/#services";
            const hashIndex = targetUrl.indexOf("#");

            if (hashIndex !== -1) {
                const targetHash = targetUrl.substring(hashIndex + 1);
                router.push(targetUrl);
                
                // Ensure scroll lands directly on the target section element
                const scrollToTarget = () => {
                    const elem = document.getElementById(targetHash);
                    if (elem) {
                        const offset = 80;
                        const elementPosition = elem.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - offset;
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth"
                        });
                    }
                };

                setTimeout(scrollToTarget, 100);
                setTimeout(scrollToTarget, 400);
            } else {
                if (window.history.length > 1) {
                    router.back();
                } else {
                    router.push(targetUrl);
                }
            }
        }
    };

    const variantStyles = {
        glass: "bg-white/10 hover:bg-white/20 border-white/20 text-white shadow-sm hover:shadow-md backdrop-blur-md",
        dark: "bg-slate-900/80 hover:bg-slate-800 border-slate-700/80 text-white shadow-sm",
        light: "bg-white hover:bg-slate-50 border-slate-200 text-slate-700 shadow-sm hover:shadow-md",
    };

    return (
        <button
            onClick={handleBack}
            type="button"
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border font-sora font-bold text-xs sm:text-sm transition-all duration-300 group cursor-pointer active:scale-95 ${variantStyles[variant]} ${className}`}
            aria-label={label}
        >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform text-neon shrink-0" />
            <span>{label}</span>
        </button>
    );
}
