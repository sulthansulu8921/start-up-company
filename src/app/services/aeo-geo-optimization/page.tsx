import { Metadata } from "next";
import { CheckCircle, Bot, Cpu, Key, Database, Sparkles, ArrowRight, Brain, Milestone } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "AEO & GEO Optimization Services | ChatGPT & Gemini Search SEO | NanoRays",
    description: "Get found in the AI era. Optimize your brand for AI search engines like ChatGPT, Google Gemini, Perplexity, and voice search with NanoRays Solution's AEO & GEO services.",
    keywords: [
        "AEO services India", "GEO optimization Kerala", "Generative Engine Optimization",
        "Answer Engine Optimization Kochi", "ChatGPT search optimization", "Gemini search ranking",
        "Perplexity AI optimization", "voice search SEO Kerala"
    ],
    alternates: { canonical: "https://nanorayssolution.com/services/aeo-geo-optimization" },
};

export default function AEOGEOMasterPage() {
    return (
        <main className="min-h-screen pt-32 pb-16 relative">
            <div className="container mx-auto px-4 max-w-5xl relative z-10">
                <div className="mb-12 text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest mb-4">
                        AI-Era Digital Visibility
                    </span>
                    <h1 className="text-4xl md:text-6xl font-sora font-bold text-white mb-6 leading-tight">
                        AEO & GEO <span className="text-purple-400">Optimization</span>
                    </h1>
                    <p className="text-lg text-gray-400 font-inter max-w-3xl mx-auto">
                        Traditional SEO is no longer enough. Our advanced Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO) ensure your brand is recommended, cited, and answered by ChatGPT, Google Gemini, Perplexity AI, Siri, and Alexa.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {[
                        { 
                            icon: <Bot className="w-6 h-6 text-purple-400" />, 
                            title: "Generative Engine Optimization", 
                            desc: "Structuring and reinforcing your brand presence so Large Language Models (LLMs) cite and recommend your services." 
                        },
                        { 
                            icon: <Cpu className="w-6 h-6 text-purple-400" />, 
                            title: "Answer Engine Optimization", 
                            desc: "Formatting data to target direct answers, featured snippets, and immediate definitions on search engines." 
                        },
                        { 
                            icon: <Brain className="w-6 h-6 text-purple-400" />, 
                            title: "AI Search Readiness Audit", 
                            desc: "Analyzing how AI assistants view and evaluate your brand authority, identifying coverage gaps." 
                        },
                        { 
                            icon: <Database className="w-6 h-6 text-purple-400" />, 
                            title: "JSON-LD & Semantic Schema", 
                            desc: "Injecting rich structured microdata so AI bots and scrapers can effortlessly parse your site." 
                        },
                        { 
                            icon: <Sparkles className="w-6 h-6 text-purple-400" />, 
                            title: "Voice Search Optimization", 
                            desc: "Aligning copy with conversational, natural language patterns used in Siri, Alexa, and Google Assistant." 
                        },
                        { 
                            icon: <Milestone className="w-6 h-6 text-purple-400" />, 
                            title: "Citation & Reference Building", 
                            desc: "Securing listings in high-authority databases and directories referenced directly by AI search engines." 
                        },
                    ].map((item, i) => (
                        <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-purple-500/30 transition-all group">
                            <div className="mb-4 p-3 bg-purple-500/10 rounded-2xl w-fit group-hover:bg-purple-500/20 transition-all">{item.icon}</div>
                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-12 mb-16">
                    <h2 className="text-3xl font-sora font-bold text-white mb-8">Why AEO & GEO Matter in 2026</h2>
                    <div className="grid md:grid-cols-2 gap-10">
                        <ul className="space-y-4">
                            {[
                                "Over 50% of searches now use AI/conversational models",
                                "AI engines rely on clear structure and authority sources",
                                "Voice queries use longer, question-based patterns",
                                "Citations build instant trust for modern buyers",
                                "Be the first answer, not just a link on page 2",
                                "Future-proof your business against algorithm shifts",
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" /> {item}
                                </li>
                            ))}
                        </ul>
                        <div className="bg-purple-500/10 border border-purple-500/20 rounded-3xl p-8 flex flex-col justify-center">
                            <h3 className="text-2xl font-bold text-white mb-4">Be Ready for AI Search</h3>
                            <p className="text-gray-400 mb-6 text-sm">Make sure ChatGPT, Claude, and Gemini recommend your business instead of your competitors. Let our AI search experts audit your site.</p>
                            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-full font-bold hover:bg-purple-500 transition-all">
                                Get AI Search Audit <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
