import ContactSection from "@/components/sections/ContactSection";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact NanoRays Solution | Professional Website Development & SEO",
    description: "Get in touch with NanoRays Solution. Start your complimetary consultation for high-performance websites, local SEO, and digital marketing. Call or WhatsApp +91 94976 69317.",
    keywords: [
        "Contact NanoRays", "Hire Web Developer Kerala", "Web Agency Consultation", "Website Enquiries India"
    ],
    alternates: { canonical: "https://nanorayssolution.com/contact" },
};

export default function ContactPage() {
    return (
        <main className="min-h-screen pt-12 relative overflow-hidden bg-background">
            <ContactSection />
        </main>
    );
}
