import { Metadata } from "next";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Website Development Company in Thrissur | NanoRays Solution",
    description: "Best web design and digital marketing agency in Thrissur, Kerala. NanoRays Solution helps Thrissur businesses and retailers grow with affordable websites. Call: +91 89216 24007.",
    keywords: [
        "Website Development Thrissur", "Web Design Agency Thrissur", "Digital Marketing Thrissur",
        "SEO Services Thrissur", "Best Web Developer Thrissur", "Business Website Thrissur",
    ],
    alternates: { canonical: "https://nanorayssolution.com/locations/thrissur" },
};

export default function ThrissurPage() {
    return (
        <main className="min-h-screen pt-32 pb-16 relative">
            <div className="container mx-auto px-4 max-w-5xl relative z-10">
                <div className="mb-12 text-center">
                    <span className="inline-block bg-orange-400/10 text-orange-400 text-sm font-bold px-4 py-1.5 rounded-full mb-6 border border-orange-400/20 uppercase tracking-wider">
                        📍 Serving Thrissur, the Cultural Capital
                    </span>
                    <h1 className="text-4xl md:text-5xl font-sora font-bold text-white mb-6 leading-tight">
                        Elevate Your Business in <br /><span className="text-orange-400">Thrissur</span>
                    </h1>
                    <p className="text-lg text-gray-400 font-inter max-w-3xl mx-auto">
                        NanoRays Solution provides Thrissur's retailers, jewelers, and startups with professional website development and branding that captures local search intent and drives footfall.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                        <h2 className="text-2xl font-sora font-bold text-white mb-6">Our Services in Thrissur</h2>
                        <ul className="space-y-4 font-inter text-gray-300">
                            {[
                                "Retail & E-commerce Website Design",
                                "Local SEO for Thrissur Markets",
                                "Google My Business (Maps) Optimization",
                                "Festival Poster & Social Media Ads",
                                "WhatsApp Business Lead Systems",
                                "Responsive Mobile-First Websites",
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-orange-400 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-gradient-to-br from-orange-400/10 to-transparent border border-orange-400/20 rounded-2xl p-8 flex flex-col justify-center">
                        <h2 className="text-2xl font-sora font-bold text-white mb-4">Driving Thrissur's Economy</h2>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            Thrissur is a vibrant business hub. We understand how to make your brand visible in the crowded digital space, ensuring you are the first choice for customers in Thrissur and across Kerala.
                        </p>
                        <Link href="/#contact" className="flex items-center justify-center gap-2 w-full bg-orange-400 text-black px-6 py-4 rounded-full font-bold hover:bg-orange-300 transition-all transform hover:scale-105">
                            Contact in Thrissur <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

                <div className="text-center bg-white/5 border border-white/10 rounded-2xl p-8">
                    <h2 className="text-2xl font-sora font-bold text-white mb-4">Serving All of Thrissur District</h2>
                    <p className="text-gray-400 font-inter">Thrissur Town · Kunnamkulam · Guruvayur · Chalakudy · Kodungallur · Irinjalakuda · Chavakkad</p>
                </div>
            </div>
            <div className="absolute top-1/3 left-0 w-96 h-96 bg-orange-400/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        </main>
    );
}
