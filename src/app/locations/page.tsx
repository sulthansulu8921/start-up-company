import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Globe, ArrowRight, Zap, Target, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const locations = [
    {
        city: "Dubai",
        region: "UAE / Global",
        slug: "dubai",
        desc: "Our international hub for luxury branding and global scaling.",
        features: ["Global Markets", "Luxury Branding", "International SEO"],
        accent: "from-amber-400 to-orange-600",
        icon: Globe
    },
    {
        city: "Kochi",
        region: "Ernakulam, Kerala",
        slug: "kochi",
        desc: "The tech heart of Kerala. Specialized in enterprise solutions.",
        features: ["Startup Ecosystem", "E-commerce Hub", "Tech Development"],
        accent: "from-blue-400 to-royal",
        icon: Target
    },
    {
        city: "Calicut",
        region: "Kozhikode, Kerala",
        slug: "calicut",
        desc: "Leading digital transformation for Malabar's growing industries.",
        features: ["Malabar SEO", "Local Authority", "Business Growth"],
        accent: "from-emerald-400 to-teal-600",
        icon: Zap
    },
    {
        city: "Trivandrum",
        region: "Capital City, Kerala",
        slug: "thiruvananthapuram",
        desc: "Strategic solutions for the capital's tech and business sectors.",
        features: ["Government Tech", "Corporate SEO", "Public Scaling"],
        accent: "from-indigo-400 to-purple-600",
        icon: Star
    },
    {
        city: "Malappuram",
        region: "Kerala",
        slug: "malappuram",
        desc: "Empowering businesses in one of India's fastest-growing regions.",
        features: ["Scale-ups", "Local Search", "Retail Growth"],
        accent: "from-rose-400 to-red-600",
        icon: MapPin
    },
    {
        city: "Thrissur",
        region: "Cultural Capital, Kerala",
        slug: "thrissur",
        desc: "Digital excellence for retail, culture, and finance leaders.",
        features: ["Retail SEO", "Financial Branding", "Local Reach"],
        accent: "from-orange-400 to-amber-600",
        icon: Zap
    },
    {
        city: "Palakkad",
        region: "Kerala",
        slug: "palakkad",
        desc: "Bridging the gap for industrial and agricultural business growth.",
        features: ["Industrial SEO", "Agri-Tech Branding", "Regional Authority"],
        accent: "from-green-400 to-emerald-600",
        icon: Target
    },
    {
        city: "Kannur",
        region: "North Kerala",
        slug: "kannur",
        desc: "Precision marketing for North Kerala's emerging export and trade markets.",
        features: ["Trade SEO", "Export Marketing", "Digital Identity"],
        accent: "from-cyan-400 to-blue-600",
        icon: Globe
    }
];

export default function LocationsIndex() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-6 relative overflow-hidden bg-black text-white">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/60 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                        <Globe size={14} className="text-neon" />
                        Global Presence
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black font-sora tracking-tighter mb-8 bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent">
                        Where We <br />
                        <span className="text-neon">Operate</span>
                    </h1>
                    <p className="max-w-2xl text-white/60 text-lg md:text-xl font-bold leading-relaxed">
                        From our international base in Dubai to the tech hubs of Kerala, NanoRays Solution provides world-class digital excellence wherever you are.
                    </p>
                </div>
            </section>

            {/* Locations Grid */}
            <section className="py-24 px-6 bg-white relative">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Master Kerala Page Card */}
                        <Link href="/locations/kerala" className="lg:col-span-2">
                            <div className="group h-full p-10 rounded-[3rem] bg-black text-white border border-white/10 overflow-hidden relative transition-all duration-500 hover:border-neon/40">
                                <div className="absolute inset-0 bg-gradient-to-br from-neon/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative z-10 h-full flex flex-col justify-between">
                                    <div>
                                        <div className="w-16 h-16 rounded-2xl bg-neon flex items-center justify-center text-black mb-10 group-hover:scale-110 transition-transform">
                                            <MapPin size={32} />
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-black font-sora tracking-tighter mb-4">All Kerala Dominance</h2>
                                        <p className="text-white/60 text-lg max-w-xl mb-8 font-bold">
                                            We cover every district in Kerala with specialized digital strategies designed to help local businesses lead their markets.
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3 text-neon font-black uppercase tracking-widest text-xs">
                                        Explore Statewide SEO <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Individual City Cards */}
                        {locations.map((loc, i) => (
                            <Link key={i} href={`/locations/${loc.slug}`}>
                                <div className="group h-full p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 overflow-hidden relative transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-2">
                                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${loc.accent} opacity-[0.03] group-hover:opacity-[0.08] blur-3xl transition-all`} />

                                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-gray-900 mb-8 border border-gray-100 group-hover:border-neon/40 transition-colors">
                                        <loc.icon size={22} className="group-hover:text-neon transition-colors" />
                                    </div>

                                    <h3 className="text-2xl font-black text-gray-900 font-sora tracking-tight mb-1">{loc.city}</h3>
                                    <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-4 group-hover:text-neon transition-colors">{loc.region}</p>

                                    <p className="text-gray-500 text-sm font-bold leading-relaxed mb-8">
                                        {loc.desc}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {loc.features.map((f, j) => (
                                            <span key={j} className="text-[9px] font-black uppercase tracking-tighter px-2.5 py-1 bg-white border border-gray-100 rounded-lg text-gray-400 group-hover:text-black transition-colors">
                                                {f}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-900 group-hover:text-neon transition-colors mt-auto">
                                        View Strategy <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 bg-black text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-black font-sora tracking-tighter mb-8 leading-tight">
                        Not in these cities? We still provide <span className="text-neon">Global Excellence</span> virtually.
                    </h2>
                    <Link href="/#contact">
                        <button className="px-10 py-5 bg-neon text-black rounded-2xl font-black uppercase tracking-[0.2em] text-sm hover:scale-105 active:scale-95 transition-all shadow-xl shadow-neon/20">
                            Start Your Project Today
                        </button>
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
