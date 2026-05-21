"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Globe, ArrowRight, Zap, Target, Star, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const locations = [
    { city: "Dubai", region: "UAE / Global", slug: "dubai", accent: "from-amber-400 to-orange-600", icon: Globe },
    { city: "Kochi", region: "Ernakulam", slug: "kochi", accent: "from-blue-400 to-blue-700", icon: Target },
    { city: "Calicut", region: "Kozhikode", slug: "calicut", accent: "from-neon to-emerald-600", icon: Zap },
    { city: "Trivandrum", region: "Capital", slug: "thiruvananthapuram", accent: "from-indigo-400 to-purple-600", icon: Star },
    { city: "Malappuram", region: "Kerala", slug: "malappuram", accent: "from-rose-400 to-red-600", icon: MapPin },
    { city: "Thrissur", region: "Cultural Capital", slug: "thrissur", accent: "from-orange-400 to-amber-600", icon: Zap },
    { city: "Palakkad", region: "Kerala", slug: "palakkad", accent: "from-green-400 to-emerald-600", icon: Target },
    { city: "Kannur", region: "North Kerala", slug: "kannur", accent: "from-cyan-400 to-blue-600", icon: Globe },
    { city: "Kollam", region: "South Kerala", slug: "kollam", accent: "from-blue-500 to-indigo-700", icon: MapPin },
    { city: "Alappuzha", region: "Tourism Hub", slug: "alappuzha", accent: "from-teal-400 to-emerald-600", icon: Star },
    { city: "Kottayam", region: "Trade & Ed", slug: "kottayam", accent: "from-purple-400 to-pink-600", icon: Zap },
    { city: "Pathanamthitta", region: "Heritage", slug: "pathanamthitta", accent: "from-orange-500 to-red-700", icon: MapPin },
    { city: "Idukki", region: "High Range", slug: "idukki", accent: "from-green-500 to-teal-700", icon: Globe },
    { city: "Wayanad", region: "North Hill", slug: "wayanad", accent: "from-emerald-300 to-green-600", icon: Star },
    { city: "Kasaragod", region: "North Gate", slug: "kasaragod", accent: "from-cyan-500 to-blue-700", icon: Target }
];

export default function LocationsHub() {
    return (
        <main className="min-h-screen bg-background text-white font-sora">
            <Navbar />

            <section className="pt-40 pb-20 px-6 relative flex items-center justify-center text-center overflow-hidden">
                {/* Background Atmosphere */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]" />
                <div className="absolute top-0 left-0 right-0 h-screen bg-gradient-to-b from-neon/5 via-transparent to-transparent pointer-events-none" />

                <div className="relative z-10 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-neon text-[10px] font-black uppercase tracking-[0.3em] mb-10"
                    >
                        <Globe size={14} className="animate-spin-slow" /> Total Kerala Coverage
                    </motion.div>
                    <h1 className="text-6xl md:text-8xl font-black tracking-tightest mb-10">
                        Our Global <br />
                        <span className="text-neon drop-shadow-[0_0_20px_rgba(204,255,0,0.3)]">Presence</span>
                    </h1>
                    <p className="text-white/60 text-lg md:text-xl font-bold leading-relaxed max-w-2xl mx-auto mb-12">
                        NanoRays Solution dominates the digital landscape from Dubai to every district in Kerala. Discover our localized strategies for your region.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="/locations/kerala">
                            <button className="px-8 py-4 bg-neon text-black rounded-2xl font-black uppercase text-xs hover:scale-105 transition-all shadow-lg shadow-neon/20">Explore All Kerala</button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 bg-transparent relative">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {locations.map((loc, i) => (
                        <Link key={i} href={`/locations/${loc.slug}`}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="group p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-neon/30 transition-all flex flex-col items-center text-center h-full backdrop-blur-md"
                            >
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${loc.accent} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-xl`}>
                                    <loc.icon size={30} />
                                </div>
                                <h3 className="text-xl font-black text-white mb-1">{loc.city}</h3>
                                <p className="text-[10px] font-black uppercase tracking-widest text-white/40 group-hover:text-neon transition-colors mb-4">{loc.region}</p>
                                <div className="mt-auto pt-4 border-t border-white/5 w-full flex items-center justify-center gap-2 text-[10px] font-black uppercase text-white/60 group-hover:text-neon transition-colors">
                                    View Strategy <ArrowRight size={12} />
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
