import ServiceDetailContent from "@/components/sections/ServiceDetailContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "AEO & GEO Optimization Services | NanoRays",
    description: "Generative & Answer Engine Optimization for ChatGPT, Gemini, and AI search engines.",
    keywords: ["AEO services", "GEO optimization", "Generative Engine Optimization", "ChatGPT search ranking"],
    alternates: {
        canonical: "https://nanorayssolution.com/services/aeo-geo-optimization",
    }
};

export default function AeoGeoPage() {
    return <ServiceDetailContent slug="digital-marketing" />;
}
