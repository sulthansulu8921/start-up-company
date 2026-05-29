import { services } from "@/data/serviceData";
import { notFound } from "next/navigation";
import ServiceDetailContent from "@/components/sections/ServiceDetailContent";
import { Metadata } from "next";

interface PageProps {
    params: Promise<{ slug: string }>;
}

// Unique, keyword-targeted SEO metadata per service page
const serviceMetadata: Record<string, { title: string; description: string; keywords: string[] }> = {
    "website-development": {
        title: "Professional Website Development & Design | NanoRays Solution",
        description: "High-performance, mobile-friendly business websites and custom web solutions starting from ₹5,000. NanoRays builds modern responsive web systems.",
        keywords: ["website design India", "business web design", "responsive web design", "custom website builder"],
    },
    "ecommerce-development": {
        title: "E-Commerce Website Development Services | NanoRays Solution",
        description: "Scale your online sales with custom e-commerce web applications, Shopify, and WooCommerce integration by NanoRays Solution.",
        keywords: ["ecommerce website builder", "WooCommerce developer Kerala", "Shopify developer India", "online store builder"],
    },
    "seo-services": {
        title: "SEO, GEO & AEO Strategy Services | AI Search Optimization | NanoRays",
        description: "Rank #1 on Google and optimize your site to be recommended by AI assistants (ChatGPT, Gemini, Perplexity) with NanoRays SEO/GEO/AEO services.",
        keywords: ["SEO services Kerala", "Generative Engine Optimization Kochi", "GEO optimization India", "Answer Engine Optimization Kerala", "AEO voice search optimization"],
    },
    "google-ranking": {
        title: "Google First Page Ranking Services India | NanoRays Solution",
        description: "Dominate Google search results with NanoRays Solution. We specialize in first-page Google rankings for businesses in India through data-driven SEO strategies and competitive analysis.",
        keywords: ["Google ranking India", "rank first page Google India", "Google SEO services India", "search engine optimization India", "Google rank #1 India"],
    },
    "digital-marketing": {
        title: "Digital Marketing Agency for Startups in India | NanoRays Solution",
        description: "Scale your business with performance-driven digital marketing. NanoRays Solution runs high-ROI Instagram, Facebook, and Google Ads campaigns for startups and businesses across India.",
        keywords: ["digital marketing agency India", "Instagram marketing India", "Facebook ads India", "Google Ads India startup", "performance marketing Kerala", "social media ads India"],
    },
    "branding-logo-design": {
        title: "Professional Logo & Brand Identity Design India | NanoRays Solution",
        description: "Create a stunning brand identity with NanoRays Solution. We design premium logos, visual systems, and brand guidelines for startups and businesses in India starting from ₹2,000.",
        keywords: ["logo design India", "brand identity India", "startup logo design Kerala", "professional logo design India", "branding agency India", "logo design Kerala"],
    },
    "poster-design": {
        title: "Social Media Graphic Design Services India | NanoRays Solution",
        description: "High-impact social media graphics, festival posters, and promotional materials for businesses in India. NanoRays Solution delivers modern, conversion-focused visual designs.",
        keywords: ["social media design India", "poster design India", "festival poster design Kerala", "graphic design agency India", "promotional poster India", "Instagram post design India"],
    },
    "website-maintenance": {
        title: "Website Maintenance & Support Services India | NanoRays Solution",
        description: "Keep your website secure and performing at its peak. NanoRays Solution offers proactive monthly maintenance, security monitoring, updates, and 24/7 technical support in India.",
        keywords: ["website maintenance India", "website support India", "web maintenance Kerala", "website security India", "monthly website maintenance", "website update services India"],
    },
    "social-media-management": {
        title: "Social Media Management Services India | NanoRays Solution",
        description: "Build a powerful social media presence for your business. NanoRays Solution manages your Instagram, Facebook, and LinkedIn with strategic content calendars and audience engagement.",
        keywords: ["social media management India", "Instagram management Kerala", "Facebook page management India", "social media agency India", "content creation India"],
    },
    "business-growth": {
        title: "Business Growth & Sales Automation India | NanoRays Solution",
        description: "Automate your sales funnel and scale your revenue with NanoRays Solution. We implement WhatsApp Business automation, CRM integration, and conversion-optimized growth strategies.",
        keywords: ["business growth India", "sales automation India", "WhatsApp business automation", "lead generation India", "CRM integration India", "startup growth Kerala"],
    },
    "google-business-setup": {
        title: "Google Business Profile Setup & Local SEO India | NanoRays Solution",
        description: "Appear in Google Maps and local search results with NanoRays Solution's Google Business Profile optimization. We help businesses across India attract local customers online.",
        keywords: ["Google Business Profile India", "local SEO Kerala", "Google Maps listing India", "Google My Business setup Kerala", "local business SEO India"],
    },
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const meta = serviceMetadata[slug];

    if (!meta) {
        return {
            title: "Service | NanoRays Solution",
            description: "Professional digital agency services in India.",
        };
    }

    return {
        title: meta.title,
        description: meta.description,
        keywords: meta.keywords,
        alternates: {
            canonical: `https://nanorayssolution.com/services/${slug}`,
        },
        openGraph: {
            title: meta.title,
            description: meta.description,
            url: `https://nanorayssolution.com/services/${slug}`,
            siteName: "NanoRays Solution",
            locale: "en_IN",
            type: "website",
        },
    };
}

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServiceDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const service = services.find(s => s.slug === slug);

    if (!service) {
        notFound();
    }

    return <ServiceDetailContent slug={slug} />;
}
