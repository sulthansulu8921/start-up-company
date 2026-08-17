import { Metadata } from "next";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Website Development Company in Kochi | NanoRays Solution",
    description: "Looking for a top website development company in Kochi? NanoRays Solution builds affordable, mobile-responsive websites and SEO services for Kochi businesses. Call: +91 94976 69317.",
    keywords: [
        "Website Development Company Kochi", "Web Design Agency Kochi", "Affordable Website Design Kochi",
        "Digital Marketing Kochi", "SEO Services Kochi", "Best Web Developer Kochi", "Website Company Kochi",
    ],
    alternates: { canonical: "https://nanorayssolution.com/locations/kochi" },
};

import ScrollReveal from "@/components/ScrollReveal";

export default function KochiPage() {
    return (
        <main className="min-h-screen pt-32 pb-16 relative">
            <div className="container mx-auto px-4 max-w-5xl relative z-10">
                <ScrollReveal variant="fade-up">
                    <div className="mb-12 text-center">
                        <span className="inline-block bg-blue-500/10 text-blue-400 text-sm font-bold px-4 py-1.5 rounded-full mb-6 border border-blue-500/20 uppercase tracking-wider">
                            📍 Serving Kochi, Kerala
                        </span>
                        <h1 className="text-4xl md:text-5xl font-sora font-bold text-white mb-6 leading-tight">
                            Best Website Development <br />Company in <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">Kochi</span>
                        </h1>
                        <p className="text-lg text-gray-400 font-inter max-w-3xl mx-auto">
                            NanoRays Solution is Kochi's trusted partner for professional website development, digital marketing, and branding. We help local businesses in Kochi and Ernakulam grow faster online.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <ScrollReveal variant="fade-right" delay={0.1}>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm h-full">
                            <h2 className="text-2xl font-sora font-bold text-white mb-6">Our Services in Kochi</h2>
                            <ul className="space-y-4 font-inter text-gray-300">
                                {[
                                    "Affordable Website Design Kochi",
                                    "Local SEO for Kochi Businesses",
                                    "E-commerce Website Development",
                                    "Google Business Profile Setup",
                                    "Social Media Marketing Kochi",
                                    "Festival Poster Design Kerala",
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-blue-400 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal variant="fade-left" delay={0.2}>
                        <div className="bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-transparent border border-blue-500/20 rounded-2xl p-8 flex flex-col justify-center h-full">
                            <h2 className="text-2xl font-sora font-bold text-white mb-4">Why Kochi Businesses Choose Us</h2>
                            <p className="text-gray-300 mb-8 leading-relaxed">
                                From Ernakulam startups to established businesses in Kochi, we understand the local market. Our websites are built to rank on Google for Kerala-specific searches and convert local visitors into paying clients.
                            </p>
                            <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED] hover:from-[#1d4ed8] hover:to-[#6d28d9] text-white px-6 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-md">
                                Get Free Kochi Consultation <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>

                <ScrollReveal variant="zoom-in" delay={0.3}>
                    <div className="text-center bg-white/5 border border-white/10 rounded-2xl p-8">
                        <h2 className="text-2xl font-sora font-bold text-white mb-4">Serving All Areas of Kochi</h2>
                        <p className="text-gray-400 font-inter">Ernakulam · Kakkanad · Edapally · Aluva · Thrippunithura · Maradu · Fort Kochi · Mattancherry</p>
                    </div>
                </ScrollReveal>
            </div>
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        </main>
    );
}
