import { Metadata } from "next";
import { TrendingUp, BarChart, Target, Users } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Local SEO & Digital Marketing Agency in India | NanoRays",
    description: "NanoRays Solution offers ROI-focused Digital Marketing and Local SEO services in India. Scale your startup with optimal Google rankings.",
    alternates: {
        canonical: "https://nanorayssolution.com/services/digital-marketing",
    }
};

export default function DigitalMarketing() {
    return (
        <main className="min-h-screen pt-32 pb-16 relative">
            <div className="container mx-auto px-4 max-w-5xl relative z-10">
                <div className="mb-16 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-sora font-bold text-white mb-6 leading-tight">
                        Local SEO & <span className="text-rose-400">Digital Marketing</span> Services in India
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 font-inter max-w-3xl mx-auto">
                        Transform your digital presence into a revenue-generating machine. We specialize in local search dominance and high-ROI ad campaigns tailored for startups.
                    </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 mb-16 backdrop-blur-sm">
                    <h2 className="text-3xl font-sora font-bold text-white mb-10 text-center">Dominate Local Search (Kerala & India Wide)</h2>
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="group">
                            <div className="bg-rose-400/20 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Target className="w-7 h-7 text-rose-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Google Business Profile Optimization</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                We fully optimize your Google Maps listing ensuring maximum Name, Address, Phone (NAP) consistency. Appear in the coveted "Top 3 Local Map Pack" when customers near you search for your services.
                            </p>
                        </div>
                        <div className="group">
                            <div className="bg-rose-400/20 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <TrendingUp className="w-7 h-7 text-rose-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Performance Marketing (Ads)</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Stop wasting ad spend on broad audiences. We engineer Facebook, Instagram, and Google Ads funnels that target high-intent customers who are actively looking to buy what you sell.
                            </p>
                        </div>
                        <div className="group">
                            <div className="bg-rose-400/20 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <BarChart className="w-7 h-7 text-rose-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Technical SEO & Content Strategy</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Beyond just basic meta tags, we build deep-content architectures, optimize site speed (Core Web Vitals), and implement authority-building schemas to guarantee long-term #1 rankings.
                            </p>
                        </div>
                        <div className="group">
                            <div className="bg-rose-400/20 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Users className="w-7 h-7 text-rose-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Social Media Authority</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Turn your Instagram and LinkedIn into a trust-building portfolio. We execute high-velocity social sharing strategies that signal strong audience engagement to Google's ranking algorithm.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <Link href="/contact" className="inline-flex items-center gap-3 bg-rose-400 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-rose-500 transition-all transform hover:scale-105 shadow-lg shadow-rose-400/20">
                        Start Growing Today <TrendingUp className="w-6 h-6" />
                    </Link>
                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-rose-400/10 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none"></div>
        </main>
    )
}
