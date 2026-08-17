import { services, slugAliases } from "@/data/serviceData";
import { notFound } from "next/navigation";
import ServiceDetailContent from "@/components/sections/ServiceDetailContent";
import { Metadata } from "next";

interface PageProps {
    params: Promise<{ slug: string }>;
}

// Unique, keyword-targeted SEO metadata per service page (India, Kerala, Dubai/UAE, USA)
const serviceMetadata: Record<string, { title: string; description: string; keywords: string[] }> = {
    "website-development": {
        title: "Websites & Ecommerce Development Services | NanoRays Solution",
        description: "Custom, high-performance websites and online store development for businesses in Kerala, India, Dubai/UAE, and the USA. Built with Next.js for speed, security, and search visibility.",
        keywords: ["website development", "ecommerce development", "custom web applications", "online store design", "Next.js development", "responsive website development", "global digital agency"],
    },
    "ecommerce-development": {
        title: "Ecommerce Store Development & Commerce Solutions | NanoRays Solution",
        description: "High-conversion online stores and digital commerce platforms with payment gateway integrations, catalog management, and fast checkout flows.",
        keywords: ["ecommerce development", "online store development", "custom shopping cart", "payment gateway integration", "digital commerce India", "UAE ecommerce agency"],
    },
    "mobile-app-development": {
        title: "Mobile App Development (iOS & Android) | NanoRays Solution",
        description: "Native and cross-platform mobile app development for iPhone, iPad, and Android. Engineered with React Native and Flutter for speed and scalability.",
        keywords: ["mobile app development", "iOS app development", "Android app development", "React Native agency", "Flutter mobile app", "mobile UI UX design"],
    },
    "ai-platform-development": {
        title: "AI Platforms & Intelligent Autonomous Agents | NanoRays Solution",
        description: "Turn your AI concept into a real digital product. We build custom AI platforms, SaaS applications, autonomous AI agents, and 24/7 chatbots.",
        keywords: ["AI platform development", "custom AI SaaS", "AI chatbots", "autonomous AI agents", "LLM application development", "AI dashboard design", "WhatsApp AI bot"],
    },
    "business-software": {
        title: "Business Software & Custom Management Systems | NanoRays Solution",
        description: "Bespoke web applications, internal operational tools, CRM software, and administrative dashboards tailored directly to your business processes.",
        keywords: ["custom business software", "internal tools development", "B2B SaaS development", "web portal development", "operational software systems"],
    },
    "ai-chatbots-agents": {
        title: "Custom AI Chatbots & Autonomous AI Agents | NanoRays Solution",
        description: "Deploy 24/7 AI chatbots and autonomous agents trained on your business data to handle support, lead qualification, and customer enquiries.",
        keywords: ["AI chatbots", "AI support agents", "WhatsApp AI bot", "custom knowledge base bot", "lead qualification bot", "conversational AI"],
    },
    "business-automation": {
        title: "Business Process & Workflow Automation Services | NanoRays Solution",
        description: "Eliminate repetitive manual admin tasks. We build automated workflow pipelines connecting your website, CRM, messaging channels, and payment systems.",
        keywords: ["business automation", "workflow automation", "webhook integration", "API automation", "CRM automation", "lead capture automation"],
    },
    "digital-marketing": {
        title: "Digital Marketing & Performance Advertising | NanoRays Solution",
        description: "Targeted Google Search Ads and Meta ad campaigns engineered to generate high-intent business leads and optimize customer acquisition costs.",
        keywords: ["digital marketing agency", "Google Ads management", "Meta ad campaigns", "lead generation ads", "performance marketing", "retargeting campaigns"],
    },
    "seo-services": {
        title: "SEO, AEO & Search Visibility Optimization | NanoRays Solution",
        description: "Improve search engine visibility and Generative AI search citations (ChatGPT, Gemini, Perplexity) with technical, local, and semantic schema SEO.",
        keywords: ["SEO services", "AEO services", "Generative Engine Optimization", "ChatGPT search ranking", "Google Gemini SEO", "technical SEO audit", "search visibility"],
    },
    "aeo-geo-optimization": {
        title: "AEO & GEO Optimization Services | ChatGPT & Gemini Search | NanoRays",
        description: "Generative & Answer Engine Optimization. Structure your business data so AI search engines like ChatGPT, Google Gemini, and Perplexity cite your brand.",
        keywords: ["AEO services", "GEO optimization", "Generative Engine Optimization", "ChatGPT search optimization", "Gemini search ranking", "structured data schema"],
    },
    "social-media-management": {
        title: "Social Media Management & Brand Content Strategy | NanoRays Solution",
        description: "Build a stronger digital presence with strategic social media calendars, custom visual content, reel assets, and proactive community engagement.",
        keywords: ["social media management", "brand content strategy", "Instagram growth agency", "social media content calendar", "corporate branding"],
    },
    "branding-creative-design": {
        title: "Branding, Creative Design & Social Media | NanoRays Solution",
        description: "Custom visual identity systems, corporate logos, social media management, typography guidelines, and marketing collateral.",
        keywords: ["branding agency", "logo design services", "visual identity design", "brand style guide", "social media management", "marketing collateral design"],
    },
    "website-maintenance": {
        title: "Proactive Website Maintenance & Technical Support | NanoRays Solution",
        description: "Keep your business website fast, secure, and up to date with continuous security surveillance, regular backups, speed checks, and technical support.",
        keywords: ["website maintenance services", "web security monitoring", "website update support", "Core Web Vitals maintenance", "cloud backup service"],
    },
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const resolvedSlug = slugAliases[slug] || slug;
    const meta = serviceMetadata[slug] || serviceMetadata[resolvedSlug];

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
            canonical: `https://nanorayssolution.com/services/${resolvedSlug}`,
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
    const primarySlugs = services.map((s) => ({ slug: s.slug }));
    const aliasSlugs = Object.keys(slugAliases).map((alias) => ({ slug: alias }));
    return [...primarySlugs, ...aliasSlugs];
}

export default async function ServiceDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const targetSlug = slugAliases[slug] || slug;
    const service = services.find(s => s.slug === targetSlug);

    if (!service) {
        notFound();
    }

    return <ServiceDetailContent slug={targetSlug} />;
}
