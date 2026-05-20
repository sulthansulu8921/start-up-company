import { Metadata } from "next";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Affordable Website Design Packages for Startups in Kerala | NanoRays",
    description: "Get affordable website design services in Kerala. Premium, mobile-responsive startups packages starting low. NanoRays Solution is the best digital agency.",
    alternates: {
        canonical: "https://nanorayssolution.com/services/website-development",
    }
};

export default function WebsiteDevelopment() {
    return (
        <main className="min-h-screen pt-32 pb-16 relative">
            <div className="container mx-auto px-4 max-w-5xl relative z-10">
                <div className="mb-12 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-sora font-bold text-white mb-6 leading-tight">
                        Affordable Website Design Packages for <span className="text-neon">Startups in Kerala</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 font-inter max-w-3xl">
                        At NanoRays Solution, we build high-performance, mobile-responsive websites designed to rank on Google and convert visitors into long-term clients.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                        <h2 className="text-2xl font-sora font-bold text-white mb-6">Why Startups Need a Premium Website</h2>
                        <ul className="space-y-6 font-inter text-gray-300">
                            <li className="flex gap-4 items-start">
                                <div className="mt-1 bg-neon/20 p-2 rounded-full">
                                    <CheckCircle className="w-5 h-5 text-neon shrink-0" />
                                </div>
                                <div>
                                    <strong className="text-white block mb-1 text-lg">Mobile Responsive Design:</strong>
                                    Over 80% of local searches in Kerala happen on phones. We ensure your site looks perfect on all devices.
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <div className="mt-1 bg-neon/20 p-2 rounded-full">
                                    <CheckCircle className="w-5 h-5 text-neon shrink-0" />
                                </div>
                                <div>
                                    <strong className="text-white block mb-1 text-lg">Built-in SEO Foundation:</strong>
                                    We don't just build sites; we build sites that Google loves, ensuring you rank higher from day one.
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <div className="mt-1 bg-neon/20 p-2 rounded-full">
                                    <CheckCircle className="w-5 h-5 text-neon shrink-0" />
                                </div>
                                <div>
                                    <strong className="text-white block mb-1 text-lg">Speed & Security:</strong>
                                    Gain client trust with lightning-fast load times and secure data encryption included standard.
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col justify-center bg-gradient-to-br from-neon/10 to-transparent border border-neon/20 rounded-2xl p-8 md:p-12">
                        <h2 className="text-3xl font-sora font-bold text-white mb-4">Our Technology Stack</h2>
                        <p className="text-gray-300 mb-8 text-lg">
                            We use modern enterprise technologies like Next.js, React, and targeted architecture. This ensures your website is fast, scalable, and ready to compete globally from Kerala.
                        </p>
                        <div className="space-y-4">
                            <Link href="/pricing" className="flex items-center justify-center gap-2 w-full bg-white text-black px-6 py-4 rounded-full font-bold hover:bg-gray-200 transition-all transform hover:scale-105">
                                View Pricing Packages <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="/services/seo-optimization" className="flex items-center justify-center gap-2 w-full bg-transparent border-2 border-white/20 text-white px-6 py-4 rounded-full font-bold hover:bg-white/5 transition-all">
                                See SEO Services
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-neon/10 rounded-full blur-[100px] -z-10 mix-blend-screen pointer-events-none"></div>
        </main>
    )
}
