import { Metadata } from "next";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Website Development Company in Kannur | NanoRays Solution",
    description: "Best web design and digital marketing services in Kannur, Kerala. NanoRays Solution helps Kannur businesses grow with affordable websites and local SEO. Call: +91 89216 24007.",
    keywords: [
        "Website Development Kannur", "Web Design Agency Kannur", "Digital Marketing Kannur",
        "SEO Services Kannur", "Best Web Developer Kannur", "Business Website Kannur",
    ],
    alternates: { canonical: "https://nanorayssolution.com/locations/kannur" },
};

export default function KannurPage() {
    return (
        <main className="min-h-screen pt-32 pb-16 relative">
            <div className="container mx-auto px-4 max-w-5xl relative z-10">
                <div className="mb-12 text-center">
                    <span className="inline-block bg-teal-400/10 text-teal-400 text-sm font-bold px-4 py-1.5 rounded-full mb-6 border border-teal-400/20 uppercase tracking-wider">
                        📍 Serving Kannur District
                    </span>
                    <h1 className="text-4xl md:text-5xl font-sora font-bold text-white mb-6 leading-tight">
                        Top-Ranked Web Development in <br /><span className="text-teal-400">Kannur</span>
                    </h1>
                    <p className="text-lg text-gray-400 font-inter max-w-3xl mx-auto">
                        NanoRays Solution empowers Kannur's businesses with premium web design and digital identity. We build fast, secure websites that stand out in North Kerala's competitive market.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                        <h2 className="text-2xl font-sora font-bold text-white mb-6">Our Services in Kannur</h2>
                        <ul className="space-y-4 font-inter text-gray-300">
                            {[
                                "Professional Web Design (Kannur)",
                                "Local SEO for North Kerala",
                                "Google Maps & Search Visibility",
                                "Social Media Management & Ads",
                                "E-commerce & WhatsApp Stores",
                                "Logo & Brand Content Design",
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-teal-400 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-gradient-to-br from-teal-400/10 to-transparent border border-teal-400/20 rounded-2xl p-8 flex flex-col justify-center">
                        <h2 className="text-2xl font-sora font-bold text-white mb-4">Kannur's Digital Partner</h2>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            From the looms of Kannur to its modern retail spaces, we have the digital solutions to help your brand connect with customers across Kannur and the rest of the world.
                        </p>
                        <Link href="/#contact" className="flex items-center justify-center gap-2 w-full bg-teal-400 text-black px-6 py-4 rounded-full font-bold hover:bg-teal-300 transition-all transform hover:scale-105">
                            Contact in Kannur <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

                <div className="text-center bg-white/5 border border-white/10 rounded-2xl p-8">
                    <h2 className="text-2xl font-sora font-bold text-white mb-4">Serving All of Kannur District</h2>
                    <p className="text-gray-400 font-inter">Kannur Town · Thalassery · Payyanur · Taliparamba · Iritty · Kuthuparamba · Mattannur</p>
                </div>
            </div>
            <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-teal-400/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        </main>
    );
}
