import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";

export const metadata: Metadata = {
    title: "Blog - SEO, Web Design & Digital Marketing Tips | NanoRays Solution",
    description: "Expert tips on website development, digital marketing, SEO, and business growth from NanoRays Solution — Kerala's leading digital agency.",
    alternates: { canonical: "https://nanorayssolution.com/blog" },
};

const posts = [
    {
        slug: "website-development-kerala",
        title: "Why Kerala Businesses Need a Website in 2025",
        excerpt: "In today's digital-first world, not having a website is like being invisible. Learn why every Kerala business — from local shops to startups — must have a professional website to attract clients and rank on Google.",
        category: "Web Development",
        readTime: "4 min",
        date: "May 20, 2025",
        color: "text-neon",
        bg: "bg-neon/10",
        border: "border-neon/20",
    },
    {
        slug: "local-seo-kerala",
        title: "How to Rank #1 on Google in Kerala (Local SEO Guide)",
        excerpt: "Local SEO is your fastest path to new clients in Kerala. This complete guide covers Google Business Profile, NAP consistency, local keywords, and review strategies that top-ranked Kerala businesses use.",
        category: "SEO Tips",
        readTime: "6 min",
        date: "May 18, 2025",
        color: "text-sky-400",
        bg: "bg-sky-400/10",
        border: "border-sky-400/20",
    },
    {
        slug: "digital-marketing-india",
        title: "Top 5 Digital Marketing Strategies That Actually Work in India",
        excerpt: "From WhatsApp marketing to Instagram Reels ads, discover the five digital marketing strategies that are driving real business results across India in 2025 — with zero big-brand budget required.",
        category: "Digital Marketing",
        readTime: "5 min",
        date: "May 15, 2025",
        color: "text-rose-400",
        bg: "bg-rose-400/10",
        border: "border-rose-400/20",
    },
    {
        slug: "affordable-website-packages",
        title: "What Should a Business Website Cost in India? (Honest Breakdown)",
        excerpt: "Confused about pricing? We break down exactly what you should pay for a business website in India in 2025 — covering freelancers, agencies, and DIY platforms — so you never get overcharged again.",
        category: "Pricing",
        readTime: "4 min",
        date: "May 10, 2025",
        color: "text-amber-400",
        bg: "bg-amber-400/10",
        border: "border-amber-400/20",
    },
];

export default function BlogPage() {
    return (
        <main className="min-h-screen pt-32 pb-16 relative">
            <div className="container mx-auto px-4 max-w-5xl relative z-10">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-sora font-bold text-white mb-6">
                        NanoRays <span className="text-neon">Blog</span>
                    </h1>
                    <p className="text-lg text-gray-400 font-inter max-w-2xl mx-auto">
                        Expert insights on website development, SEO, digital marketing, and business growth — written for Kerala and Indian entrepreneurs.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm flex flex-col"
                        >
                            <div className={`inline-flex items-center gap-2 ${post.bg} ${post.border} border rounded-full px-3 py-1 mb-5 w-fit`}>
                                <Tag className={`w-3 h-3 ${post.color}`} />
                                <span className={`text-xs font-bold uppercase tracking-wider ${post.color}`}>{post.category}</span>
                            </div>
                            <h2 className="text-xl font-sora font-bold text-white mb-3 group-hover:text-neon transition-colors leading-snug">{post.title}</h2>
                            <p className="text-gray-400 font-inter text-sm leading-relaxed mb-6 flex-1">{post.excerpt}</p>
                            <div className="flex items-center justify-between mt-auto">
                                <div className="flex items-center gap-4 text-gray-500 text-xs font-inter">
                                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime} read</span>
                                    <span>{post.date}</span>
                                </div>
                                <ArrowRight className={`w-5 h-5 ${post.color} opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all`} />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-neon/5 rounded-full blur-[150px] -z-10 pointer-events-none"></div>
        </main>
    );
}
