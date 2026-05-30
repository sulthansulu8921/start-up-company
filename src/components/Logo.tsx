"use client";

import Image from "next/image";

interface LogoProps {
    className?: string;
    width?: number;
    height?: number;
}

export default function Logo({ className = "", width = 140, height = 40 }: LogoProps) {
    return (
        <div className={`flex items-center justify-center transition-all duration-300 dark:bg-white dark:px-4 dark:py-2 dark:rounded-2xl dark:shadow-xl dark:border dark:border-gray-100/50 bg-transparent border-transparent px-0 py-0 shadow-none ${className}`}>
            <Image
                src="/nanorays-logo.png"
                alt="NanoRays Solutions"
                width={width}
                height={height}
                className="object-contain"
                priority
            />
        </div>
    );
}
