import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Tag } from "lucide-react";
import { notFound } from "next/navigation";

interface Props {
    params: Promise<{ slug: string }>;
}

const posts: Record<string, {
    title: string; category: string; date: string; readTime: string; color: string;
    content: { heading: string; body: string }[];
}> = {
    "website-development-kerala": {
        title: "Why Kerala Businesses Need a Website in 2025",
        category: "Web Development", date: "May 20, 2025", readTime: "4 min", color: "text-neon",
        content: [
            { heading: "The Reality of Business in Kerala Today", body: "Over 85% of Kerala's consumers now search online before making a purchase decision — whether they are looking for a restaurant in Kochi, a carpenter in Calicut, or a startup service provider in Malappuram. If your business does not have a website, you are effectively invisible to all of these potential clients." },
            { heading: "Why a Social Media Page Is Not Enough", body: "Many Mallu business owners think a Facebook page or an Instagram profile is enough. It is not. Social media pages are rented land — the platform can change its algorithm or ban your account any day. Your own website is a permanent, 24/7 sales representative that you own entirely. Google also cannot rank your Instagram posts in its search results, but it can rank your website's pages." },
            { heading: "What a Professional Business Website Does For You", body: "A proper website builds instant trust, captures client enquiries at 3 AM while you sleep, and ranks on Google for searches like \"Best electrician in Thrissur\" or \"Cheap tiffin service Kozhikode.\" This is 24/7 automated lead generation." },
            { heading: "Affordable Website Packages for Kerala Businesses", body: "NanoRays Solution builds professional, mobile-responsive business websites starting from just ₹5,000 — including your domain, hosting, WhatsApp integration, and Google-ready SEO setup. Ready to get started? Call us at +91 94976 69317." },
        ],
    },
    "local-seo-kerala": {
        title: "How to Rank #1 on Google in Kerala (Local SEO Guide)",
        category: "SEO Tips", date: "May 18, 2025", readTime: "6 min", color: "text-sky-400",
        content: [
            { heading: "What Is Local SEO and Why It Matters for Kerala", body: "Local SEO is the process of optimizing your online presence so your business appears when someone nearby searches for your service. When someone in Ernakulam types \"restaurants near me\" or \"web designer Kochi,\" Google uses its local ranking signals to show the most relevant, nearby businesses. Without local SEO, you will never appear in these searches." },
            { heading: "Step 1: Claim Your Google Business Profile", body: "This is the single most impactful thing you can do. Go to business.google.com, claim your listing, fill every section completely, add your exact NAP (Name, Address, Phone), upload at least 10 photos, and link it directly to your website. This costs nothing and directly impacts your placement on Google Maps." },
            { heading: "Step 2: NAP Consistency", body: "Your business Name, Address, and Phone number must be 100% identical across your website footer, your Google Business Profile, and every other directory listing. Even small differences like '94976 69317' vs '+91 94976 69317' confuse Google's algorithm and hurt your local ranking." },
            { heading: "Step 3: Collect 5-Star Reviews with Keywords", body: "Google ranks local businesses heavily based on reviews. Ask every satisfied client to leave a Google review that naturally mentions your service and location. For example: \"NanoRays Solution made an amazing website for my startup in Kochi. Highly recommended digital agency in Kerala!\" Each keyword-rich review is powerful free SEO." },
        ],
    },
    "digital-marketing-india": {
        title: "Top 5 Digital Marketing Strategies That Actually Work in India",
        category: "Digital Marketing", date: "May 15, 2025", readTime: "5 min", color: "text-rose-400",
        content: [
            { heading: "Strategy 1: WhatsApp Marketing Automation", body: "India has the world's largest WhatsApp user base. WhatsApp Business allows you to create automated greeting messages, a product catalog, and quick replies. For Kerala businesses, sending festival offers, new product announcements, and payment reminders via WhatsApp delivers open rates of over 90% — far above email marketing." },
            { heading: "Strategy 2: Instagram Reels for Organic Reach", body: "Instagram Reels are the most powerful free marketing tool available for Indian businesses right now. Short, vertical videos of your work, behind-the-scenes content, or client testimonials can reach thousands of potential local clients for zero rupees. Post consistently (3-5 Reels per week) using local hashtags like #keralabusiness #webdesignkerala." },
            { heading: "Strategy 3: Google Ads for High-Intent Leads", body: "While organic SEO takes months, Google Ads can put you at the top of search results immediately. The key for Indian businesses is to target highly specific local keywords (\"website designer Malappuram\") rather than broad terms. This keeps your cost-per-click low while attracting high-intent buyers ready to spend." },
            { heading: "Strategy 4: YouTube (The Untapped Kerala Channel)", body: "YouTube is the second largest search engine in the world, and it is heavily underused by Kerala businesses. Creating simple, informative videos in Malayalam or English about your services positions you as the local expert, builds massive trust, and drives consistent enquiries for years — long after the video is published." },
        ],
    },
    "affordable-website-packages": {
        title: "What Should a Business Website Cost in India? (Honest Breakdown)",
        category: "Pricing", date: "May 10, 2025", readTime: "4 min", color: "text-amber-400",
        content: [
            { heading: "Why Website Pricing Is So Confusing in India", body: "You can get quotes anywhere from ₹999 to ₹2,00,000 for a \"website\" in India. The extreme variance is because \"website\" can mean wildly different things — a template-based page with no SEO, to a custom-coded, fully optimized platform designed to rank on Google and convert visitors." },
            { heading: "The 3 Tiers of Website Pricing", body: "Tier 1 (₹999–₹5,000): Freelancer template work. Typically no SEO, poor mobile design, and no Google indexing. Fine if you just need a link. Tier 2 (₹5,000–₹30,000): Professional agency-grade website. Custom design, mobile responsive, built with an SEO foundation, WhatsApp integration, and proper hosting. This is the sweet spot for most Indian small businesses. Tier 3 (₹30,000+): Enterprise-grade platforms with e-commerce, custom apps, and ongoing monthly maintenance." },
            { heading: "What NanoRays Solution Offers", body: "Our Startup Basic package starts at ₹5,000 and includes a fully custom, mobile-responsive website with built-in SEO, WhatsApp integration, your domain, hosting, and 1 month of free support. This is Tier 2 quality at the best pricing for Kerala businesses." },
            { heading: "The Hidden Cost Nobody Tells You About", body: "The most expensive website is the one that doesn't generate leads. A ₹999 template that ranks nowhere and gets zero traffic has effectively cost you your entire lost revenue. Always ask the agency: \"Will this website rank on Google?\" If they can't answer confidently, move on." },
        ],
    },
};

export async function generateStaticParams() {
    return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = posts[slug];
    if (!post) return { title: "Blog | NanoRays Solution" };
    return {
        title: `${post.title} | NanoRays Solution Blog`,
        description: post.content[0].body.slice(0, 155) + "...",
        alternates: { canonical: `https://nanorayssolution.com/blog/${slug}` },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = posts[slug];
    if (!post) notFound();

    return (
        <main className="min-h-screen pt-32 pb-16 relative">
            <div className="container mx-auto px-4 max-w-3xl relative z-10">
                <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-10 font-inter text-sm">
                    <ArrowLeft className="w-4 h-4" /> Back to Blog
                </Link>

                <div className={`inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 mb-6 w-fit`}>
                    <Tag className={`w-3 h-3 ${post.color}`} />
                    <span className={`text-xs font-bold uppercase tracking-wider ${post.color}`}>{post.category}</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-sora font-bold text-white mb-6 leading-tight">{post.title}</h1>

                <div className="flex items-center gap-4 text-gray-500 text-sm font-inter mb-12 pb-8 border-b border-white/10">
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{post.readTime} read</span>
                    <span>{post.date}</span>
                    <span>By NanoRays Solution</span>
                </div>

                <div className="space-y-10 font-inter">
                    {post.content.map((section) => (
                        <div key={section.heading}>
                            <h2 className={`text-xl font-sora font-bold text-white mb-4 ${post.color.replace("text-", "border-l-4 pl-4 border-").replace("/", "-")}`}>{section.heading}</h2>
                            <p className="text-gray-300 leading-relaxed text-lg">{section.body}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-gradient-to-br from-neon/10 to-transparent border border-neon/20 rounded-2xl p-8 text-center">
                    <h3 className="text-2xl font-sora font-bold text-white mb-3">Ready to grow your business?</h3>
                    <p className="text-gray-400 mb-6">Talk to NanoRays Solution for a free consultation. Call: +91 94976 69317</p>
                    <Link href="/contact" className="inline-flex items-center gap-2 bg-neon text-black px-8 py-3 rounded-full font-bold hover:bg-[#b3ff00] transition-all">
                        Get Free Consultation
                    </Link>
                </div>
            </div>
        </main>
    );
}
