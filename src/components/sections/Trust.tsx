"use client";

import { motion } from "framer-motion";
import { Users, Globe, Headset, Search } from "lucide-react";

const stats = [
    { label: "Projects Completed", value: "50+", icon: Globe },
    { label: "Success Rate", value: "100%", icon: Users },
    { label: "24/7 Support", value: "Support", icon: Headset },
    { label: "SEO Optimized", value: "Friendly", icon: Search },
];

const partners = [
    "TechFlow", "GlobalMart", "Skyline", "MediCore", "EduVibe", "Zenith", "Quantum"
];

export default function Trust() {
    return (
        <section className="py-20 bg-slate-50/80 border-y border-slate-200/80 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black font-sora text-slate-900 mb-3 tracking-tight">
                        Trusted By Growing <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Businesses</span>
                    </h2>
                    <p className="text-slate-600 font-medium">Partnering with innovators to build high-converting platforms.</p>
                </div>

                {/* Counter Section */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-white border border-slate-200/90 text-center shadow-md shadow-indigo-500/5 group hover:border-indigo-300 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mx-auto mb-4 text-indigo-600 group-hover:scale-110 transition-transform border border-indigo-100">
                                <stat.icon size={22} />
                            </div>
                            <h3 className="text-3xl md:text-4xl font-black font-sora text-slate-900 mb-2">{stat.value}</h3>
                            <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Marquee Section */}
                <div className="relative flex overflow-x-hidden group whitespace-nowrap">
                    <div className="flex animate-marquee py-6 items-center">
                        {[...partners, ...partners].map((partner, idx) => (
                            <div
                                key={idx}
                                className="mx-10 text-2xl md:text-3xl font-black font-sora text-slate-300 hover:text-indigo-600 transition-colors cursor-default"
                            >
                                {partner}
                            </div>
                        ))}
                    </div>

                    <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10" />
                    <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10" />
                </div>
            </div>

            <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 12s linear infinite;
        }
      `}</style>
        </section>
    );
}
