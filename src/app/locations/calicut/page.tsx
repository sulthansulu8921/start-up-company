import { Metadata } from "next";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Best Web Agency in Calicut (Kozhikode) | NanoRays Solution",
    description: "Top-rated website development and digital marketing agency in Calicut (Kozhikode), Kerala. NanoRays Solution helps Calicut startups and businesses rank #1 on Google.",
    keywords: [
        "Web Agency Calicut", "Website Development Kozhikode", "Digital Marketing Calicut",
        "SEO Services Kozhikode", "Affordable Web Design Calicut", "Best Web Developer Calicut",
    ],
    alternates: { canonical: "https://nanorayssolution.com/locations/calicut" },
};

export default function CalicutPage() {
    return (
        <main className="min-h-screen pt-32 pb-16 relative">
            <div className="container mx-auto px-4 max-w-5xl relative z-10">
                <div className="mb-12 text-center">
                    <span className="inline-block bg-sky-400/10 text-sky-400 text-sm font-bold px-4 py-1.5 rounded-full mb-6 border border-sky-400/20 uppercase tracking-wider">
                        📍 Serving Calicut (Kozhikode), Kerala
                    </span>
                    <h1 className="text-4xl md:text-5xl font-sora font-bold text-white mb-6 leading-tight">
                        Best Web Development & <br />Digital Marketing in <span className="text-sky-400">Calicut</span>
                    </h1>
                    <p className="text-lg text-gray-400 font-inter max-w-3xl mx-auto">
                        NanoRays Solution powers Calicut's growing businesses with premium website development, local SEO, and performance digital marketing services starting at just ₹5,000.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                        <h2 className="text-2xl font-sora font-bold text-white mb-6">What We Build for Calicut</h2>
                        <ul className="space-y-4 font-inter text-gray-300">
                            {[
                                "Business Websites for Calicut Startups",
                                "Ecommerce Stores for Kozhikode Merchants",
                                "Local SEO Ranking Calicut",
                                "Social Media Marketing & Ads",
                                "Logo & Branding Services",
                                "WhatsApp Business Integration",
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-sky-400 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-gradient-to-br from-sky-400/10 to-transparent border border-sky-400/20 rounded-2xl p-8 flex flex-col justify-center">
                        <h2 className="text-2xl font-sora font-bold text-white mb-4">Calicut Local Market Experts</h2>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            We understand the Calicut (Kozhikode) market deeply — from textiles to restaurants, we have helped local businesses appear at the top of Google Maps and search results for their exact service area.
                        </p>
                        <Link href="/#contact" className="flex items-center justify-center gap-2 w-full bg-sky-400 text-black px-6 py-4 rounded-full font-bold hover:bg-sky-300 transition-all transform hover:scale-105">
                            Contact Us in Calicut <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

                <div className="text-center bg-white/5 border border-white/10 rounded-2xl p-8">
                    <h2 className="text-2xl font-sora font-bold text-white mb-4">Serving All of North Kerala</h2>
                    <p className="text-gray-400 font-inter">Kozhikode · Calicut Beach · Palayam · Mavoor · Feroke · Koyilandy · Vadakara · Malappuram</p>
                </div>
            </div>
            <div className="absolute top-1/3 left-0 w-96 h-96 bg-sky-400/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        </main>
    );
}
