import ServiceDetailContent from "@/components/sections/ServiceDetailContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "E-Commerce Solutions & Web Development | NanoRays",
    description: "Secure and scalable online stores that drive sales and grow your business.",
    keywords: ["e-commerce development", "online store", "shopping cart", "payment gateway integration"],
    alternates: {
        canonical: "https://nanorayssolution.com/services/ecommerce-development",
    }
};

export default function EcommerceDevelopmentPage() {
    return <ServiceDetailContent slug="website-development" />;
}
