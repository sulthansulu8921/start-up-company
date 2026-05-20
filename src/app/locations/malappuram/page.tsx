import { Metadata } from "next";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Website Development Company in Malappuram | NanoRays Solution",
    description: "Best website development, digital marketing, and SEO services in Malappuram, Kerala. NanoRays Solution helps Malappuram businesses rank #1 on Google. Call: +91 89216 24007.",
    keywords: [
        "Website Development Malappuram", "Web Design Agency Malappuram", "Digital Marketing Malappuram",
        "SEO Services Malappuram", "Web Designer Malappuram", "Business Website Malappuram",
        "Affordable Web Design Malappuram", "Website Company Malappuram Kerala",
    ],
    alternates: { canonical: "https://nanorayssolution.com/locations/malappuram" },
};

export default function MalappuramPage() {
    return (
        <main className="min-h-screen pt-32 pb-16 relative">
            <div className="container mx-auto px-4 max-w-5xl relative z-10">
                <div className="mb-12 text-center">
                    <span className="inline-block bg-purple-400/10 text-purple-400 text-sm font-bold px-4 py-1.5 rounded-full mb-6 border border-purple-400/20 uppercase tracking-wider">
                        📍 Serving Malappuram, Kerala
                    </span>
                    <h1 className="text-4xl md:text-5xl font-sora font-bold text-white mb-6 leading-tight">
                        Professional Website Development <br />in <span className="text-purple-400">Malappuram</span>
                    </h1>
                    <p className="text-lg text-gray-400 font-inter max-w-3xl mx-auto">
                        NanoRays Solution brings big-city digital expertise to Malappuram businesses. We build affordable, fast websites and deliver powerful digital marketing to help you dominate local Google searches.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                        <h2 className="text-2xl font-sora font-bold text-white mb-6">Services in Malappuram</h2>
                        <ul className="space-y-4 font-inter text-gray-300">
                            {[
                                "Business Website Design Malappuram",
                                "Google My Business Setup & SEO",
                                "Social Media Marketing Malayalam",
                                "Festival Poster Design (Onam, Eid, etc.)",
                                "WhatsApp Business Integration",
                                "Startup Branding & Logo Design",
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-purple-400 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-gradient-to-br from-purple-400/10 to-transparent border border-purple-400/20 rounded-2xl p-8 flex flex-col justify-center">
                        <h2 className="text-2xl font-sora font-bold text-white mb-4">Growing Malappuram Businesses</h2>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            From Tirur to Manjeri, we understand the Malappuram market. Our locally-aware digital strategies ensure your business shows up when nearby customers search for your services in Malayalam and English.
                        </p>
                        <Link href="/#contact" className="flex items-center justify-center gap-2 w-full bg-purple-400 text-black px-6 py-4 rounded-full font-bold hover:bg-purple-300 transition-all transform hover:scale-105">
                            Get Malappuram Quote <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

                <div className="text-center bg-white/5 border border-white/10 rounded-2xl p-8">
                    <h2 className="text-2xl font-sora font-bold text-white mb-4">Areas We Serve in Malappuram</h2>
                    <p className="text-gray-400 font-inter">Tirur · Manjeri · Perinthalmanna · Kondotty · Ponnani · Tanur · Kottakkal · Tirurrangadi · Wandoor</p>
                </div>
            </div>
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-400/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        </main>
    );
}
