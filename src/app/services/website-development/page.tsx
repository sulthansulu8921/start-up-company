import ServiceDetailContent from "@/components/sections/ServiceDetailContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Website Development Services | NanoRays",
    description: "Modern, responsive and high-performance websites that help your business grow online and convert visitors into customers.",
    keywords: [
        "website design India", "startup website design", "business website Kerala", "affordable website India",
        "web development startup India", "mobile responsive website India", "website design packages Kerala"
    ],
    alternates: {
        canonical: "https://nanorayssolution.com/services/website-development",
    }
};

export default function WebsiteDevelopment() {
    return <ServiceDetailContent slug="website-development" />;
}
