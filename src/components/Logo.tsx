"use client";

import Image from "next/image";

interface LogoProps {
    className?: string;
    width?: number;
    height?: number;
}

export default function Logo({ className = "", width = 140, height = 40 }: LogoProps) {
    return (
        <div className={`flex items-center justify-center bg-white px-4 py-2 rounded-2xl shadow-xl border border-gray-100/50 ${className}`}>
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
