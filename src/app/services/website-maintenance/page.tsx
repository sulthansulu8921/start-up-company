import ServiceDetailContent from "@/components/sections/ServiceDetailContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Software Maintenance & Technical Support | NanoRays",
    description: "Ongoing support and maintenance to keep your software and web applications up-to-date and running smoothly.",
    keywords: ["website maintenance", "software support", "Core Web Vitals", "web security"],
    alternates: {
        canonical: "https://nanorayssolution.com/services/website-maintenance",
    }
};

export default function MaintenancePage() {
    return <ServiceDetailContent slug="software-development" />;
}
