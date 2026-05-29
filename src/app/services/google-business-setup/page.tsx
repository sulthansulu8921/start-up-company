import { Metadata } from "next";
import { CheckCircle, MapPin, Star, Camera, Phone, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Google Business Profile Setup Kerala | GMB Optimization NanoRays",
    description: "Get your business on Google Maps and Search. NanoRays Solution provides expert Google Business Profile setup and optimization services in Kerala to drive local traffic.",
    keywords: [
        "Google Business Profile optimization Kerala", "Google Business Setup Kochi", "Google Maps ranking services",
        "local SEO Kerala", "visibility on Google Maps", "best GMB agency Kerala",
    ],
    alternates: { canonical: "https://nanorayssolution.com/services/google-business-setup" },
};

export default function GMBPage() {
    return (
        <main className="min-h-screen pt-32 pb-16 relative">
            <div className="container mx-auto px-4 max-w-5xl relative z-10">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl md:text-6xl font-sora font-bold text-white mb-6 leading-tight">
                        Appear on <span className="text-orange-400">Google Maps</span> <br /> & Local Search
                    </h1>
                    <p className="text-lg text-gray-400 font-inter max-w-3xl mx-auto">
                        When customers search for "services near me," make sure your business is the first thing they see. We setup and optimize your Google Business Profile for maximum local reach.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {[
                        { icon: <MapPin className="w-6 h-6 text-orange-400" />, title: "Maps Ranking", desc: "We optimize your profile to appear in the 'Local 3-Pack' for relevant searches." },
                        { icon: <Star className="w-6 h-6 text-orange-400" />, title: "Review Strategy", desc: "Build trust with automated systems to collect and manage 5-star Google reviews." },
                        { icon: <Camera className="w-6 h-6 text-orange-400" />, title: "Visual Catalog", desc: "Professional image uploads and product showcase setup on your Google profile." },
                    ].map((item, i) => (
                        <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-3xl group hover:border-orange-400 transition-all">
                            <div className="mb-4">{item.icon}</div>
                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-gray-400 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white/5 border border-white/10 rounded-[32px] p-10 flex flex-col justify-center">
                        <h2 className="text-3xl font-sora font-bold text-white mb-6">Why Your Business Needs GMB Optimization</h2>
                        <ul className="space-y-4">
                            {[
                                "Increased Local Footfall in Kerala",
                                "Direct Calls from Google Search",
                                "Build Trust with Real Reviews",
                                "Stand Out from Local Competitors",
                                "Accurate Location & Business Hours",
                            ].map(item => (
                                <li key={item} className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle className="w-5 h-5 text-orange-400" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-gradient-to-br from-orange-400/10 to-transparent border border-orange-400/20 rounded-[32px] p-10 flex flex-col justify-center text-center">
                        <h3 className="text-2xl font-bold text-white mb-4">Claim Your Spot on Google</h3>
                        <p className="text-gray-400 mb-8">Professional setup and optimization starting from just ₹2,500. Get verified and start ranking now.</p>
                        <Link href="/contact" className="bg-orange-400 text-black px-10 py-5 rounded-full font-bold hover:bg-orange-300 transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2">
                            Setup My Profile <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
