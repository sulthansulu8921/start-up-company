import ServiceDetailContent from "@/components/sections/ServiceDetailContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Digital Marketing & SEO Services | NanoRays",
    description: "Result-driven digital marketing strategies to increase visibility, drive traffic and grow your business online.",
    keywords: ["digital marketing", "SEO services", "SMM", "Google Ads", "Meta Ads", "Content Marketing", "Email Marketing"],
    alternates: {
        canonical: "https://nanorayssolution.com/services/digital-marketing",
    }
};

export default function DigitalMarketingPage() {
    return <ServiceDetailContent slug="digital-marketing" />;
}
