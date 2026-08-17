"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";

const recentPosts = [
    {
        slug: "ai-platform-development",
        title: "How to Build an AI Platform or SaaS Product",
        category: "AI & Innovation",
        readTime: "5 min",
        color: "text-[#7C3AED]",
        bg: "bg-purple-50",
        border: "border-purple-200",
    },
    {
        slug: "website-development-kerala",
        title: "Why Businesses Need a Modern Website in 2026",
        category: "Web Development",
        readTime: "4 min",
        color: "text-[#2563EB]",
        bg: "bg-blue-50",
        border: "border-blue-200",
    },
    {
        slug: "local-seo-kerala",
        title: "How Businesses Can Improve Search Visibility",
        category: "SEO & Search",
        readTime: "6 min",
        color: "text-indigo-700",
        bg: "bg-indigo-50",
        border: "border-indigo-200",
    },
];

export default function BlogPreview() {
    return (
        <motion.section
            initial={{ opacity: 0.9, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            id="blog"
            className="py-20 relative overflow-hidden bg-[#FDF4FF] text-slate-900 rounded-t-[3rem] md:rounded-t-[4rem] shadow-[0_-25px_60px_rgba(0,0,0,0.06)] border-t border-fuchsia-200/90 z-55"
        >
            {/* Dedicated High-Res Creative Workspace Studio Photo Background */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#FDF4FF]/96 via-[#FAE8FF]/90 to-[#FDF4FF]/96 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="inline-flex px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-[10px] font-black uppercase tracking-[0.25em] mb-4 shadow-sm">
                            Latest Insights
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-sora text-slate-900 tracking-tight leading-tight">
                            Grow Your Business with <br />Our <span className="bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">Expert Tips</span>
                        </h2>
                    </div>
                    <Link
                        href="/blog"
                        className="group flex items-center gap-2 text-[#2563EB] font-extrabold text-xs uppercase tracking-widest hover:text-[#7C3AED] transition-colors"
                    >
                        View All Posts <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {recentPosts.map((post, i) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Link
                                href={`/blog/${post.slug}`}
                                className="group flex flex-col h-full p-8 bg-white/90 rounded-3xl border border-slate-200/90 hover:border-blue-300 shadow-md shadow-blue-500/5 hover:shadow-xl hover:shadow-blue-500/15 transition-all duration-300"
                            >
                                <div className={`inline-flex items-center gap-2 ${post.bg} ${post.border} border rounded-full px-3 py-1 mb-6 w-fit`}>
                                    <Tag className={`w-3 h-3 ${post.color}`} />
                                    <span className={`text-[10px] font-black uppercase tracking-wider ${post.color}`}>{post.category}</span>
                                </div>

                                <h3 className="text-xl font-sora font-black text-slate-900 mb-4 group-hover:text-[#2563EB] transition-colors leading-snug">
                                    {post.title}
                                </h3>

                                <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-100">
                                    <div className="flex items-center gap-3 text-slate-500 text-[11px] font-extrabold uppercase tracking-wider">
                                        <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[#2563EB]" /> {post.readTime}</span>
                                    </div>
                                    <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[#2563EB] group-hover:to-[#7C3AED] group-hover:border-[#2563EB] transition-all">
                                        <ArrowRight className="w-4 h-4 text-[#2563EB] group-hover:text-white transition-colors" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
