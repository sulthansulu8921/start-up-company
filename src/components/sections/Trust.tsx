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
        <section className="py-20 bg-navy/50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-sora mb-4">
                        Trusted By Growing <span className="text-cyan">Businesses</span>
                    </h2>
                    <p className="text-soft-gray/60">Partnering with innovators to build the future.</p>
                </div>

                {/* Counter Section */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl glass border border-white/5 text-center group hover:border-royal/50 transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-royal/10 rounded-full flex items-center justify-center mx-auto mb-4 text-cyan group-hover:scale-110 transition-transform">
                                <stat.icon size={24} />
                            </div>
                            <h3 className="text-4xl font-bold font-sora text-white mb-2">{stat.value}</h3>
                            <p className="text-soft-gray/60 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Marquee Section */}
                <div className="relative flex overflow-x-hidden group whitespace-nowrap">
                    <div className="flex animate-marquee py-12 items-center">
                        {[...partners, ...partners].map((partner, idx) => (
                            <div
                                key={idx}
                                className="mx-12 text-3xl font-bold font-sora text-white/20 hover:text-cyan/60 transition-colors cursor-default"
                            >
                                {partner}
                            </div>
                        ))}
                    </div>

                    <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-navy to-transparent z-10" />
                    <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-navy to-transparent z-10" />
                </div>
            </div>

            <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
        </section>
    );
}
