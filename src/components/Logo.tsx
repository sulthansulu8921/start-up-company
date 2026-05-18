"use client";

import Image from "next/image";

interface LogoProps {
    className?: string;
    width?: number;
    height?: number;
}

export default function Logo({ className = "", width = 240, height = 65 }: LogoProps) {
    return (
        <div className={`flex items-center logo-container bg-white px-4 py-2 rounded-xl shadow-lg border border-white/20 ${className}`}>
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
