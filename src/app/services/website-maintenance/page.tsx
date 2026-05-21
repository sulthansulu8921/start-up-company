"use client";
import { services } from "@/data/serviceData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Wrench, Shield, Zap, CheckCircle, ArrowRight, RefreshCw, Lock, BarChart } from "lucide-react";
import Link from "next/link";

export default function WebsiteMaintenancePage() {
    const service = services.find(s => s.slug === "website-maintenance")!;

    return (
        <div className="bg-white min-h-screen font-sora text-gray-900">
            <Navbar />

            <main className="pt-40 pb-20 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-600 text-[10px] font-black uppercase tracking-[0.2em] mb-10"
                    >
                        <Shield size={12} className="animate-pulse" />
                        24/7 Technical Surveillance
                    </motion.div>
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
                        Elite Website <br />
                        <span className="text-emerald-500">Maintenance</span>
                    </h1>
                    <p className="text-gray-600 text-xl font-bold leading-relaxed mb-12 max-w-2xl mx-auto">
                        {service.fullDesc}
                    </p>
                    <div className="flex justify-center gap-4 mb-24">
                        <Link href="/#contact">
                            <button className="px-10 py-5 bg-emerald-500 text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-xl shadow-emerald-500/20">
                                Secure Your Site
                            </button>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                        {service.benefits.map((benefit, i) => (
                            <div key={i} className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100">
                                <CheckCircle className="text-emerald-500 mb-6" size={32} />
                                <h3 className="text-2xl font-black mb-4">{benefit}</h3>
                                <p className="text-gray-500 font-bold leading-relaxed">Continuous optimization and technical surveillance for your platform.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            
        
        </div>
    );
}
