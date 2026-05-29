import Services from "@/components/sections/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Digital Services | Web Development, SEO & Marketing | NanoRays Solution",
    description: "Explore our comprehensive digital services including high-performance website development, local SEO, ecommerce solutions, and digital marketing tailored for business growth.",
    keywords: [
        "Digital Services", "Web Development Services", "SEO Services", "Digital Marketing", "Ecommerce Development"
    ],
    alternates: { canonical: "https://nanorayssolution.com/services" },
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen pt-12 relative overflow-hidden bg-background">
            {/* The Services component has its own padding and styling */}
            <Services />
        </main>
    );
}
