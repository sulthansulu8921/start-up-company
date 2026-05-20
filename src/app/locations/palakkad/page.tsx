import { Metadata } from "next";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Website Development Company in Palakkad | NanoRays Solution",
    description: "Best website development, digital marketing, and SEO services in Palakkad, Kerala. NanoRays Solution helps Palakkad businesses grow online with affordable websites. Call: +91 89216 24007.",
    keywords: [
        "Website Development Palakkad", "Web Design Agency Palakkad", "Digital Marketing Palakkad",
        "SEO Services Palakkad", "Best Web Developer Palakkad", "Business Website Palakkad",
        "Affordable Web Design Palakkad", "Website Company Palakkad Kerala",
    ],
    alternates: { canonical: "https://nanorayssolution.com/locations/palakkad" },
};

export default function PalakkadPage() {
    return (
        <main className="min-h-screen pt-32 pb-16 relative">
            <div className="container mx-auto px-4 max-w-5xl relative z-10">
                <div className="mb-12 text-center">
                    <span className="inline-block bg-emerald-400/10 text-emerald-400 text-sm font-bold px-4 py-1.5 rounded-full mb-6 border border-emerald-400/20 uppercase tracking-wider">
                        📍 Serving Palakkad, Kerala
                    </span>
                    <h1 className="text-4xl md:text-5xl font-sora font-bold text-white mb-6 leading-tight">
                        Best Web Development & <br />Digital Marketing in <span className="text-emerald-400">Palakkad</span>
                    </h1>
                    <p className="text-lg text-gray-400 font-inter max-w-3xl mx-auto">
                        NanoRays Solution is Palakkad's choice for professional website development and branding. We help local businesses in Palakkad, Ottapalam, and Shornur capture more clients with high-ranking Google search results.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                        <h2 className="text-2xl font-sora font-bold text-white mb-6">Services in Palakkad</h2>
                        <ul className="space-y-4 font-inter text-gray-300">
                            {[
                                "Professional Website Design Palakkad",
                                "Google Local SEO & Maps Ranking",
                                "Social Media Marketing & Adverts",
                                "Ecommerce Stores for Local Brands",
                                "High-Speed Website Hosting",
                                "WhatsApp API & Lead Automation",
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-gradient-to-br from-emerald-400/10 to-transparent border border-emerald-400/20 rounded-2xl p-8 flex flex-col justify-center">
                        <h2 className="text-2xl font-sora font-bold text-white mb-4">Capturing the Palakkad Market</h2>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            Palakkad is a hub of growing industries and retail. We build websites that don't just look good but are technically optimized to appear at the top when people search for your services in the Palakkad district.
                        </p>
                        <Link href="/#contact" className="flex items-center justify-center gap-2 w-full bg-emerald-400 text-black px-6 py-4 rounded-full font-bold hover:bg-emerald-300 transition-all transform hover:scale-105">
                            Get Free Palakkad Consultation <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

                <div className="text-center bg-white/5 border border-white/10 rounded-2xl p-8">
                    <h2 className="text-2xl font-sora font-bold text-white mb-4">Serving All Areas of Palakkad District</h2>
                    <p className="text-gray-400 font-inter">Palakkad Town · Ottapalam · Shornur · Chittur · Mannarkkad · Alathur · Pattambi · Cherpulassery</p>
                </div>
            </div>
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        </main>
    );
}
