"use client";

import Image from "next/image";

interface LogoProps {
    className?: string;
    width?: number;
    height?: number;
}

export default function Logo({ className = "", width = 180, height = 50 }: LogoProps) {
    return (
        <div className={`flex items-center justify-center bg-white px-6 py-3 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100/50 ${className}`}>
            <Image
                src="/nanorays-logo.jpeg"
                alt="NanoRays Solutions"
                width={width}
                height={height}
                className="object-contain"
                priority
            />
        </div>
    );
}
