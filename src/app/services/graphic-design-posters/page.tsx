import ServiceDetailContent from "@/components/sections/ServiceDetailContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Custom Branding & Digital Marketing | NanoRays",
    description: "Result-driven digital marketing, branding, and poster design strategies.",
    keywords: ["graphic design", "branding", "festival posters", "social media graphics"],
    alternates: {
        canonical: "https://nanorayssolution.com/services/graphic-design-posters",
    }
};

export default function GraphicDesignPage() {
    return <ServiceDetailContent slug="digital-marketing" />;
}
