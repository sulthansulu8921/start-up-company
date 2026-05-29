"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";

const recentPosts = [
    {
        slug: "website-development-kerala",
        title: "Why Kerala Businesses Need a Website in 2025",
        category: "Web Development",
        readTime: "4 min",
        color: "text-emerald-700",
        bg: "bg-emerald-50",
        border: "border-emerald-200",
    },
    {
        slug: "local-seo-kerala",
        title: "How to Rank #1 on Google (Local SEO Guide)",
        category: "SEO Tips",
        readTime: "6 min",
        color: "text-sky-700",
        bg: "bg-sky-50",
        border: "border-sky-200",
    },
    {
        slug: "digital-marketing-india",
        title: "Top 5 Marketing Strategies in India",
        category: "Marketing",
        readTime: "5 min",
        color: "text-rose-700",
        bg: "bg-rose-50",
        border: "border-rose-200",
    },
];

export default function BlogPreview() {
    return (
        <section className="py-24 relative overflow-hidden bg-white">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-royal/10 border border-royal/20 text-royal text-xs font-bold uppercase tracking-widest mb-4">
                            Latest Insights
                        </span>
                        <h2 className="text-4xl md:text-5xl font-sora font-bold text-gray-900 leading-tight">
                            Grow Your Business with <br />Our <span className="text-royal">Expert Tips</span>
                        </h2>
                    </div>
                    <Link
                        href="/blog"
                        className="group flex items-center gap-2 text-royal font-bold hover:text-black transition-colors"
                    >
                        View All Posts <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
                                className="group flex flex-col h-full p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-neon hover:shadow-xl hover:shadow-neon/5 transition-all"
                            >
                                <div className={`inline-flex items-center gap-2 ${post.bg} ${post.border} border rounded-full px-3 py-1 mb-6 w-fit`}>
                                    <Tag className={`w-3 h-3 ${post.color}`} />
                                    <span className={`text-[10px] font-bold uppercase tracking-wider ${post.color}`}>{post.category}</span>
                                </div>

                                <h3 className="text-xl font-sora font-bold text-gray-900 mb-4 group-hover:text-royal transition-colors leading-snug">
                                    {post.title}
                                </h3>

                                <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-200">
                                    <div className="flex items-center gap-3 text-gray-500 text-[11px] font-inter uppercase tracking-wider">
                                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center group-hover:bg-neon group-hover:border-neon transition-all">
                                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
