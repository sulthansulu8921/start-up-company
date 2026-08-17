import ServiceDetailContent from "@/components/sections/ServiceDetailContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Search Engine Optimization (SEO) & Marketing | NanoRays",
    description: "Result-driven digital marketing and SEO strategies to increase visibility and drive organic traffic.",
    keywords: ["SEO services", "search engine optimization", "Google ranking", "organic traffic"],
    alternates: {
        canonical: "https://nanorayssolution.com/services/seo-services",
    }
};

export default function SeoServicesPage() {
    return <ServiceDetailContent slug="digital-marketing" />;
}
