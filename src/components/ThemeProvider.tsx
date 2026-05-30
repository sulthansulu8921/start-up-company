"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect, useState } from "react";

// Suppress React 19 false-positive script tag warnings in development
if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
    const originalConsoleError = console.error;
    console.error = (...args: any[]) => {
        if (typeof args[0] === "string" && args[0].includes("Encountered a script tag")) return;
        originalConsoleError.apply(console, args);
    };
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <>{children}</>;
    }

    return (
        <NextThemesProvider
            attribute="class"
            defaultTheme="dark"
            forcedTheme="dark"
            enableSystem={false}
        >
            {children}
        </NextThemesProvider>
    );
}
