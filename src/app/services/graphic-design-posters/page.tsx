import { Metadata } from "next";
import { Palette, PenTool, Image as ImageIcon, Send } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Custom Branding & Festival Poster Design Kerala | NanoRays",
    description: "Get premium graphic design, festival posters, and custom branding services in India. Elevate your startup's visual identity with NanoRays.",
    alternates: {
        canonical: "https://nanorayssolution.com/services/graphic-design-posters",
    }
};

export default function GraphicDesign() {
    return (
        <main className="min-h-screen pt-32 pb-16 relative">
            <div className="container mx-auto px-4 max-w-5xl relative z-10">
                <div className="mb-16 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-sora font-bold text-white mb-6 leading-tight">
                        Custom Branding & <span className="text-purple-400">Festival Poster Design</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 font-inter max-w-3xl mx-auto">
                        Your brand is how clients perceive your value. We design premium logos, visual identities, and striking social media collateral to make your business unforgettable.
                    </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 mb-16 backdrop-blur-sm">
                    <h2 className="text-3xl font-sora font-bold text-white mb-10 text-center">Visual Excellence Services</h2>
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="group">
                            <div className="bg-purple-400/20 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Palette className="w-7 h-7 text-purple-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Corporate Identity & Logos</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Startup logo design, color psychology palettes, and professional brand guidelines that build instant trust with investors and clients.
                            </p>
                        </div>
                        <div className="group">
                            <div className="bg-purple-400/20 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <ImageIcon className="w-7 h-7 text-purple-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Social Media & Festival Posters</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                High-engagement visual graphics tailored for Instagram, Facebook, and local festival promotions in India (Onam, Diwali, Eid, etc.).
                            </p>
                        </div>
                        <div className="group">
                            <div className="bg-purple-400/20 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <PenTool className="w-7 h-7 text-purple-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">UI/UX Interface Design</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Wireframing and prototyping modern, glassmorphic interfaces for tech startups looking for a competitive edge in Kerala and beyond.
                            </p>
                        </div>
                        <div className="group">
                            <div className="bg-purple-400/20 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Send className="w-7 h-7 text-purple-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Marketing Collateral</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Professional brochures, digital business cards, and pitch deck formatting designed to convert high-ticket clients.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <Link href="/contact" className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-200 transition-all transform hover:scale-105 shadow-lg shadow-white/20">
                        Request a Design Quote <Palette className="w-6 h-6" />
                    </Link>
                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-400/10 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none"></div>
        </main>
    )
}
