"use client";

import Image from "next/image";

interface LogoProps {
    className?: string;
    width?: number;
    height?: number;
}

export default function Logo({ className = "", width = 200, height = 55 }: LogoProps) {
    return (
        <div className={`flex items-center logo-container ${className}`}>
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
