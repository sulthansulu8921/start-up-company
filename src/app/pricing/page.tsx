import { Metadata } from "next";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Website Packages and Monthly Maintenance Costs | NanoRays",
    description: "Transparent pricing for website development, SEO, and maintenance packages in Kerala, India. No hidden fees. Start growing with NanoRays Solution.",
    alternates: {
        canonical: "https://nanorayssolution.com/pricing",
    }
};

export default function PricingPage() {
    return (
        <main className="min-h-screen pt-32 pb-16 relative">
            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-sora font-bold text-white mb-6 leading-tight">
                        Transparent <span className="text-neon">Pricing Packages</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 font-inter max-w-2xl mx-auto">
                        We believe in value-based pricing. No hidden fees, just high ROI investments for your digital growth in India and beyond.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Starter */}
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col hover:bg-white/10 transition-colors backdrop-blur-sm">
                        <h2 className="text-2xl font-sora font-bold text-white mb-2">Startup Basic</h2>
                        <p className="text-gray-400 mb-6">Perfect for new businesses.</p>
                        <div className="text-4xl font-bold text-white mb-8">₹5,000<span className="text-lg text-gray-500 font-normal">/start</span></div>

                        <ul className="space-y-4 text-gray-300 mb-10 flex-1 font-inter">
                            <li className="flex items-start gap-4"><Check className="w-5 h-5 text-neon shrink-0 mt-0.5" /> 1-Page Landing Website</li>
                            <li className="flex items-start gap-4"><Check className="w-5 h-5 text-neon shrink-0 mt-0.5" /> Mobile Responsive UI</li>
                            <li className="flex items-start gap-4"><Check className="w-5 h-5 text-neon shrink-0 mt-0.5" /> Basic SEO Meta Tags</li>
                            <li className="flex items-start gap-4"><Check className="w-5 h-5 text-neon shrink-0 mt-0.5" /> WhatsApp Integration</li>
                            <li className="flex items-start gap-4"><Check className="w-5 h-5 text-neon shrink-0 mt-0.5" /> 1 Month Free Support</li>
                        </ul>
                        <Link href="#contact" className="block w-full text-center bg-white/10 text-white font-bold px-6 py-4 rounded-full hover:bg-white/20 transition-all">Select Basic</Link>
                    </div>

                    {/* Pro */}
                    <div className="bg-gradient-to-b from-neon/20 to-white/5 border border-neon/50 rounded-3xl p-8 flex flex-col relative transform md:-translate-y-4 shadow-2xl shadow-neon/10 backdrop-blur-sm">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-neon text-black text-sm font-bold px-5 py-1.5 rounded-full uppercase tracking-wider">Most Popular</div>
                        <h2 className="text-2xl font-sora font-bold text-white mb-2">Business Pro</h2>
                        <p className="text-gray-400 mb-6">Scale with full authority.</p>
                        <div className="text-4xl font-bold text-neon mb-8">Custom<span className="text-lg text-gray-500 font-normal">/quote</span></div>

                        <ul className="space-y-4 text-gray-300 mb-10 flex-1 font-inter">
                            <li className="flex items-start gap-4"><Check className="w-5 h-5 text-neon shrink-0 mt-0.5" /> Multi-page Architecture</li>
                            <li className="flex items-start gap-4"><Check className="w-5 h-5 text-neon shrink-0 mt-0.5" /> Advanced Local SEO (Rank #1)</li>
                            <li className="flex items-start gap-4"><Check className="w-5 h-5 text-neon shrink-0 mt-0.5" /> E-commerce / DB Integration</li>
                            <li className="flex items-start gap-4"><Check className="w-5 h-5 text-neon shrink-0 mt-0.5" /> High-speed Premium Hosting</li>
                            <li className="flex items-start gap-4"><Check className="w-5 h-5 text-neon shrink-0 mt-0.5" /> Google My Business Setup</li>
                        </ul>
                        <Link href="#contact" className="block w-full text-center bg-neon text-black font-bold px-6 py-4 rounded-full hover:bg-[#b3ff00] transition-all transform hover:scale-105">Get Custom Quote</Link>
                    </div>

                    {/* Maintenance */}
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col hover:bg-white/10 transition-colors backdrop-blur-sm">
                        <h2 className="text-2xl font-sora font-bold text-white mb-2">Monthly Maintenance</h2>
                        <p className="text-gray-400 mb-6">Zero downtime guarantees.</p>
                        <div className="text-4xl font-bold text-white mb-8">₹2,000<span className="text-lg text-gray-500 font-normal">/mo</span></div>

                        <ul className="space-y-4 text-gray-300 mb-10 flex-1 font-inter">
                            <li className="flex items-start gap-4"><Check className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" /> 24/7 Security Monitoring</li>
                            <li className="flex items-start gap-4"><Check className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" /> Monthly Content Updates</li>
                            <li className="flex items-start gap-4"><Check className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" /> Cloud Backup Management</li>
                            <li className="flex items-start gap-4"><Check className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" /> Site Speed Optimization</li>
                            <li className="flex items-start gap-4"><Check className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" /> priority Technical Support</li>
                        </ul>
                        <Link href="#contact" className="block w-full text-center bg-white/10 text-white font-bold px-6 py-4 rounded-full hover:bg-white/20 transition-all">Start Maintenance</Link>
                    </div>
                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-neon/5 rounded-full blur-[150px] -z-10 mix-blend-screen pointer-events-none"></div>
        </main>
    )
}
