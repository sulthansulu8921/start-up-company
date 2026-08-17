import ServiceDetailContent from "@/components/sections/ServiceDetailContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Google Business Profile Setup | NanoRays",
    description: "Get found on Google. Build trust, attract local customers and grow your business with a powerful Google Business Profile.",
    keywords: ["Google Business Profile", "local SEO", "Google Maps optimization", "review management", "Google posts"],
    alternates: {
        canonical: "https://nanorayssolution.com/services/google-business-setup",
    }
};

export default function GoogleBusinessSetupPage() {
    return <ServiceDetailContent slug="google-business-setup" />;
}
