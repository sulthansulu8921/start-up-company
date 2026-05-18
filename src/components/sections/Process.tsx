"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code, CheckCircle, Rocket } from "lucide-react";

const steps = [
    {
        title: "Planning",
        description: "We analyze your business needs and create a strategic roadmap for success.",
        icon: Search,
        color: "bg-blue-500"
    },
    {
        title: "UI/UX Design",
        description: "We craft stunning, user-centric designs that embody your brand identity.",
        icon: PenTool,
        color: "bg-purple-500"
    },
    {
        title: "Development",
        description: "Our experts bring designs to life with clean, high-performance code.",
        icon: Code,
        color: "bg-cyan-500"
    },
    {
        title: "Testing",
        description: "Rigorous quality assurance to ensure everything works perfectly.",
        icon: CheckCircle,
        color: "bg-green-500"
    },
    {
        title: "Launch",
        description: "We deploy your project and ensure a smooth transition to live environment.",
        icon: Rocket,
        color: "bg-orange-500"
    }
];

export default function Process() {
    return (
        <section className="py-24 bg-navy">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold font-sora mb-6">Our <span className="text-royal">Workflow</span></h2>
                    <p className="text-soft-gray/60 max-w-2xl mx-auto">From concept to completion, we follow a meticulous process to ensure the best results.</p>
                </div>

                <div className="relative">
                    {/* Vertical Line for Desktop */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 hidden lg:block" />

                    <div className="space-y-12 lg:space-y-0">
                        {steps.map((step, idx) => (
                            <div key={idx} className={`flex flex-col lg:flex-row items-center gap-12 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                                <motion.div
                                    initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="flex-1 text-center lg:text-left"
                                >
                                    <div className={`lg:contents ${idx % 2 !== 0 ? 'lg:text-right' : ''}`}>
                                        <h3 className="text-2xl font-bold font-sora mb-4 flex items-center justify-center lg:justify-start gap-3 group">
                                            <span className="text-cyan font-mono text-sm">0{idx + 1}.</span>
                                            {step.title}
                                        </h3>
                                        <p className="text-soft-gray/60 leading-relaxed max-w-md mx-auto lg:mx-0">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>

                                <div className="relative flex items-center justify-center">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        className={`w-16 h-16 rounded-full ${step.color} shadow-lg shadow-${step.color.split('-')[1]}-500/20 flex items-center justify-center text-white z-10 relative`}
                                    >
                                        <step.icon size={28} />
                                    </motion.div>
                                    {/* Decorative Radial Glow */}
                                    <div className={`absolute w-12 h-12 ${step.color} rounded-full blur-xl opacity-30 animate-pulse`} />
                                </div>

                                <div className="flex-1" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
