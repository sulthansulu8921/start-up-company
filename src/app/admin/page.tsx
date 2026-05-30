"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
    const router = useRouter();

    useEffect(() => {
        router.replace("/nanorays-portal-hq");
    }, [router]);

    return (
        <div className="min-h-screen bg-black flex items-center justify-center">
            <div className="text-white/60 font-mono text-sm animate-pulse">
                Redirecting to Control Center...
            </div>
        </div>
    );
}
