import { Metadata } from "next";
import { CheckCircle, Search, TrendingUp, BarChart, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Professional SEO Services Kerala | Rank #1 on Google | NanoRays",
    description: "Boost your business with professional SEO services in Kerala. NanoRays Solution offers local SEO expert services, Google ranking, and search engine optimization in Kochi, Calicut & Malappuram.",
    keywords: [
        "SEO services Kerala", "local SEO expert Kochi", "Google ranking services India",
        "search engine optimization services Kerala", "best SEO agency Kochi", "improve Google ranking for business",
        "affordable SEO services Kerala", "Google Business Profile optimization",
    ],
    alternates: { canonical: "https://nanorayssolution.com/services/seo-services" },
};

export default function SEOServicesPage() {
    return (
        <main className="min-h-screen pt-32 pb-16 relative">
            <div className="container mx-auto px-4 max-w-5xl relative z-10">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl md:text-6xl font-sora font-bold text-white mb-6 leading-tight">
                        Professional <span className="text-neon">SEO Services</span> in Kerala
                    </h1>
                    <p className="text-lg text-gray-400 font-inter max-w-3xl mx-auto">
                        Stop being invisible. Our expert SEO strategies help your website rank on the first page of Google, driving organic traffic and high-quality leads to your business 24/7.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {[
                        { icon: <Search className="w-6 h-6 text-neon" />, title: "Keyword Research", desc: "We identify high-intent keywords that your customers are actually searching for." },
                        { icon: <TrendingUp className="w-6 h-6 text-neon" />, title: "On-Page SEO", desc: "Optimizing your content, meta tags, and site structure for maximum visibility." },
                        { icon: <BarChart className="w-6 h-6 text-neon" />, title: "Technical SEO", desc: "Improving site speed, mobile responsiveness, and indexing performance." },
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
                                "Local SEO Expert Support in Kerala",
                                "Google Business Profile Optimization",
                                "Competitive Keyword Ranking",
                                "High-Quality Backlink Building",
                                "Monthly Performance Reports",
                                "Conversion Rate Optimization",
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
