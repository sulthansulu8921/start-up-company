import { Metadata } from "next";
import { CheckCircle, Search, TrendingUp, BarChart, Globe, ArrowRight, Bot, Cpu, MapPin } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "SEO, GEO & AEO Services Kerala | AI Search Optimization | NanoRays",
    description: "Boost visibility with professional SEO, GEO (Generative Engine Optimization for ChatGPT/Gemini), and AEO (Answer Engine Optimization) in Kerala. Rank #1 on search and AI platforms.",
    keywords: [
        "SEO services Kerala", "Generative Engine Optimization Kochi", "GEO optimization India",
        "Answer Engine Optimization Kerala", "AEO voice search optimization", "ChatGPT optimization business",
        "local SEO expert Kochi", "Google ranking services India", "improve Google ranking for business",
    ],
    alternates: { canonical: "https://nanorayssolution.com/services/seo-services" },
};

export default function SEOServicesPage() {
    return (
        <main className="min-h-screen pt-32 pb-16 relative">
            <div className="container mx-auto px-4 max-w-5xl relative z-10">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl md:text-6xl font-sora font-bold text-white mb-6 leading-tight">
                        Professional <span className="text-neon">SEO, GEO & AEO</span> Services
                    </h1>
                    <p className="text-lg text-gray-400 font-inter max-w-3xl mx-auto">
                        Stop being invisible. Our modern search strategies rank your website on Google's first page and ensure your brand is cited by AI assistants and answer engines 24/7.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {[
                        { icon: <Search className="w-6 h-6 text-neon" />, title: "Keyword Research", desc: "We identify high-intent keywords that your customers are actually searching for to drive ready-to-buy traffic." },
                        { icon: <TrendingUp className="w-6 h-6 text-neon" />, title: "On-Page SEO", desc: "Optimizing content, header structures, internal links, and meta tags for maximum relevance and readability." },
                        { icon: <BarChart className="w-6 h-6 text-neon" />, title: "Technical SEO", desc: "Enhancing core web vitals, speed, mobile responsiveness, SSL security, and schema markups." },
                        { icon: <Bot className="w-6 h-6 text-neon" />, title: "GEO (Generative Engine Optimization)", desc: "Optimizing your site footprint so generative AI search systems like ChatGPT Search, Google Gemini, and Perplexity AI recommend your business." },
                        { icon: <Cpu className="w-6 h-6 text-neon" />, title: "AEO (Answer Engine Optimization)", desc: "Structuring content for quick answers, rich snippets, Google Assistant, Siri, and Alexa to rank as the direct answer to user queries." },
                        { icon: <MapPin className="w-6 h-6 text-neon" />, title: "Local SEO & Maps", desc: "Optimizing your Google Business Profile (GBP) and local maps to dominate search results and capture local buyers." },
                    ].map((item, i) => (
                        <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-neon transition-all">
                            <div className="mb-4">{item.icon}</div>
                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-gray-400 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-12 mb-16">
                    <h2 className="text-3xl font-sora font-bold text-white mb-8">Our SEO Roadmap for Your Success</h2>
                    <div className="grid md:grid-cols-2 gap-10">
                        <ul className="space-y-4">
                            {[
                                "AEO & GEO Strategy (AI Search Engines)",
                                "Local SEO Expert Support in Kerala",
                                "Google Business Profile Optimization",
                                "Competitive Keyword Ranking & Backlinks",
                                "Monthly Search Console & Rank Reports",
                                "AI-era Conversion Optimization",
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle className="w-5 h-5 text-neon" /> {item}
                                </li>
                            ))}
                        </ul>
                        <div className="bg-neon/10 border border-neon/20 rounded-3xl p-8 flex flex-col justify-center">
                            <h3 className="text-2xl font-bold text-white mb-4">Rank Higher Today</h3>
                            <p className="text-gray-400 mb-6 text-sm">Don't let your competitors take your customers. Start your SEO journey with NanoRays Solution.</p>
                            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-neon text-black px-6 py-3 rounded-full font-bold hover:bg-[#b3ff00] transition-all">
                                Get Free SEO Audit <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
