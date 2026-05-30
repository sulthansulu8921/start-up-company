import { Metadata } from "next";
import { Globe, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Website Development Company Dubai | NanoRays Solution India",
    description: "Looking to hire affordable web developers from India for your Dubai business? NanoRays Solution offers premium website development, SEO & digital marketing for Dubai & UAE clients.",
    keywords: [
        "Website Development Company Dubai", "Web Design Services UAE", "Digital Marketing Agency Dubai",
        "Hire Web Developers India for Dubai", "Affordable Web Design Dubai", "SEO Company UAE",
        "Business Website Dubai from India", "Outsource Web Development UAE",
    ],
    alternates: { canonical: "https://nanorayssolution.com/locations/dubai" },
};

export default function DubaiPage() {
    return (
        <main className="min-h-screen pt-32 pb-16 relative">
            <div className="container mx-auto px-4 max-w-5xl relative z-10">
                <div className="mb-12 text-center">
                    <span className="inline-block bg-amber-400/10 text-amber-400 text-sm font-bold px-4 py-1.5 rounded-full mb-6 border border-amber-400/20 uppercase tracking-wider">
                        🌍 Serving Dubai & UAE Clients
                    </span>
                    <h1 className="text-4xl md:text-5xl font-sora font-bold text-white mb-6 leading-tight">
                        Professional Website Development <br />for <span className="text-amber-400">Dubai & UAE</span>
                    </h1>
                    <p className="text-lg text-gray-400 font-inter max-w-3xl mx-auto">
                        NanoRays Solution, based in India, provides world-class web development, digital marketing, and branding for businesses in Dubai, Abu Dhabi, and across the UAE — at Indian prices.
                    </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-10 backdrop-blur-sm">
                    <h2 className="text-2xl font-sora font-bold text-white mb-6 text-center">Why Dubai Businesses Outsource to India</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: "80% Cost Savings", desc: "Get a premium AED 15,000+ website for a fraction of the cost — built to the exact same standard." },
                            { title: "English-Speaking Team", desc: "Clear, professional communication in English throughout the entire project — no language barrier." },
                            { title: "Enterprise-Quality Code", desc: "Built with Next.js, React, and modern standards. Fast, secure, and scalable for UAE market growth." },
                        ].map((item) => (
                            <div key={item.title} className="text-center">
                                <div className="bg-amber-400/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <Globe className="w-6 h-6 text-amber-400" />
                                </div>
                                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                                <p className="text-gray-400 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                        <h2 className="text-2xl font-sora font-bold text-white mb-6">Services for Dubai Clients</h2>
                        <ul className="space-y-4 font-inter text-gray-300">
                            {[
                                "Business Website Design (Dubai & UAE)",
                                "E-commerce Development (UAE Market)",
                                "Google Ads for Dubai Businesses",
                                "Local SEO & Google Maps UAE",
                                "Multi-language Website Support",
                                "Brand Identity & Corporate Design",
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-amber-400 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-gradient-to-br from-amber-400/10 to-transparent border border-amber-400/20 rounded-2xl p-8 flex flex-col justify-center">
                        <h2 className="text-2xl font-sora font-bold text-white mb-4">Start Your Dubai Project Today</h2>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            Contact us via WhatsApp for instant communication. We work across UAE time zones and provide projects with fast turnaround — typically 7-14 business days from design to launch.
                        </p>
                        <Link href="https://wa.me/919497669317?text=Hello%20NanoRays!%20I%20need%20a%20website%20for%20my%20Dubai%20business." target="_blank" className="flex items-center justify-center gap-2 w-full bg-amber-400 text-black px-6 py-4 rounded-full font-bold hover:bg-amber-300 transition-all transform hover:scale-105">
                            WhatsApp for Dubai Quote <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-amber-400/8 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        </main>
    );
}
