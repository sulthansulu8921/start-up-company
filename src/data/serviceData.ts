import { Globe, Target, Megaphone, Palette, BarChart3, Layout, Share2, TrendingUp, MapPin, Wrench, Brain, Code2, LucideIcon } from "lucide-react";

export interface RoadmapStep {
    day: string;
    topic: string;
    details: string;
}

export interface Service {
    slug: string;
    title: string;
    desc: string;
    icon: LucideIcon;
    accent: string;
    bg: string;
    fullDesc: string;
    benefits: string[];
    roadmap: RoadmapStep[];
}

export const services: Service[] = [
    {
        slug: "website-development",
        title: "Website Development",
        desc: "Custom business websites, landing pages, and fast corporate platforms.",
        icon: Code2,
        accent: "text-neon",
        bg: "rgba(204, 255, 0, 0.05)",
        fullDesc: "We design and build high-performance, mobile-responsive websites that are fast, secure, and designed to rank on Google. From startups to established enterprises, we create digital solutions that convert.",
        benefits: [
            "Mobile Responsive Design",
            "Built-in SEO Foundation",
            "Speed & Security Optimization",
            "Modern UI/UX Architecture"
        ],
        roadmap: [
            { day: "STEP 01", topic: "Strategic Planning", details: "Defining site structure, goals, and content hierarchy." },
            { day: "STEP 02", topic: "Design & Prototyping", details: "Creating modern, interactive layouts using visual hierarchy." },
            { day: "STEP 03", topic: "Next-gen Coding", details: "Building your website with fast frameworks like Next.js." },
            { day: "STEP 04", topic: "SEO & Launch", details: "Testing performance, speed, and launching your site." }
        ]
    },
    {
        slug: "ecommerce-development",
        title: "Ecommerce Development",
        desc: "Custom business platforms, high-conversion online stores, and digital shops.",
        icon: Globe,
        accent: "text-sky-400",
        bg: "rgba(56, 189, 248, 0.05)",
        fullDesc: "We develop sophisticated web ecosystems including enterprise-level business sites, seamless E-commerce platforms, and high-performance landing pages optimized for every device.",
        benefits: [
            "Conversion-Focused UI/UX Design",
            "Performance-Optimized Speed",
            "Scalable E-commerce Architecture",
            "Full-Spectrum Responsive Layouts"
        ],
        roadmap: [
            { day: "STEP 01", topic: "Strategic Planning", details: "Defining business objectives and technical requirements." },
            { day: "STEP 02", topic: "Visual Strategy", details: "Crafting a professional and intuitive user interface." },
            { day: "STEP 03", topic: "Engineering", details: "Developing your platform using cutting-edge, secure technologies." },
            { day: "STEP 04", topic: "Global Launch", details: "Deployment and optimization for immediate market entry." }
        ]
    },
    {
        slug: "seo-services",
        title: "SEO Strategy & Ranking",
        desc: "Enhance your search visibility and drive qualified organic traffic.",
        icon: Target,
        accent: "text-sky-400",
        bg: "rgba(56, 189, 248, 0.05)",
        fullDesc: "Scale your organic presence with data-driven Technical SEO, Local Search optimization, and advanced speed enhancements designed to win search engine authority.",
        benefits: [
            "Advanced Technical SEO Audit",
            "Core Web Vitals Optimization",
            "Local Search Domination",
            "In-depth Keyword Research"
        ],
        roadmap: [
            { day: "STEP 01", topic: "Technical Audit", details: "Evaluating current performance and indexing errors." },
            { day: "STEP 02", topic: "Market Analysis", details: "Identifying high-value keywords for your niche." },
            { day: "STEP 03", topic: "On-Page Strategy", details: "Optimizing content architecture and metadata." },
            { day: "STEP 04", topic: "Authority Building", details: "Scaling speed and resolving complex technical issues." }
        ]
    },
    {
        slug: "google-ranking",
        title: "Search Ranking Mastery",
        desc: "Command the first page of Google results for key industry terms.",
        icon: BarChart3,
        accent: "text-purple-400",
        bg: "rgba(168, 85, 247, 0.05)",
        fullDesc: "We specialize in securing top-tier rankings for your core services. Our approach integrates search psychology with technical precision for lasting results.",
        benefits: [
            "First-Page Search Visibility",
            "Search Console Integration",
            "Competitive Rank Tracking",
            "Sustainable Organic Growth"
        ],
        roadmap: [
            { day: "STEP 01", topic: "Competitor Benchmarking", details: "Analyzing top-ranked peers and market gaps." },
            { day: "STEP 02", topic: "Standard Execution", details: "Implementing industry-leading SEO protocols." },
            { day: "STEP 03", topic: "Performance Tracking", details: "Calibrating Google Search Console for precise data." },
            { day: "Ongoing", topic: "Continuous Optimization", details: "Protecting and improving your market position." }
        ]
    },
    {
        slug: "digital-marketing",
        title: "Performance Marketing",
        desc: "Strategic social advertising designed for rapid ROI.",
        icon: Megaphone,
        accent: "text-rose-400",
        bg: "rgba(251, 113, 133, 0.05)",
        fullDesc: "Reach targeted audience segments through precision Instagram, Meta, and Google Ads campaigns engineered for maximum lead quality and brand authority.",
        benefits: [
            "Strategic Meta Ad Campaigns",
            "ROI-Focused Google Ads",
            "High-Quality Lead Generation",
            "Advanced Audience Segmenting"
        ],
        roadmap: [
            { day: "STEP 01", topic: "Funnel Strategy", details: "Modeling your customer journey and conversion goals." },
            { day: "STEP 02", topic: "Creative Asset Design", details: "Producing high-impact visuals and persuasive copy." },
            { day: "STEP 03", topic: "Campaign Activation", details: "Deploying targeted ads across optimized channels." },
            { day: "Ongoing", topic: "Budget Calibration", details: "Monitoring performance to ensure maximum return." }
        ]
    },
    {
        slug: "graphic-design-posters",
        title: "Branding & Posters",
        desc: "Custom branding, visual identity, logos, and high-impact festival posters.",
        icon: Palette,
        accent: "text-purple-400",
        bg: "rgba(168, 85, 247, 0.05)",
        fullDesc: "Your brand is how clients perceive your value. We design premium logos, visual identities, and striking social media collateral to make your business unforgettable.",
        benefits: [
            "Corporate Identity & Logos",
            "Social Media & Festival Posters",
            "UI/UX Interface Design",
            "Marketing Collateral"
        ],
        roadmap: [
            { day: "STEP 01", topic: "Discovery", details: "Understanding brand values and visual style preferences." },
            { day: "STEP 02", topic: "Concept Design", details: "Developing distinct logo and branding directions." },
            { day: "STEP 03", topic: "Collateral Development", details: "Designing social assets, templates, and brochures." },
            { day: "STEP 04", topic: "Brand Launch", details: "Providing all files and style guides for marketing." }
        ]
    },
    {
        slug: "website-maintenance",
        title: "Strategic Maintenance",
        desc: "Technical surveillance, updates, and performance monitoring.",
        icon: Wrench,
        accent: "text-emerald-400",
        bg: "rgba(52, 211, 153, 0.05)",
        fullDesc: "Ensure zero downtime with proactive technical management. We handle security protocols, monthly patches, and full-spectrum performance monitoring.",
        benefits: [
            "Proactive Security Management",
            "Core Infrastructure Updates",
            "Uptime & Performance Tracking",
            "Priority Technical Support"
        ],
        roadmap: [
            { day: "Continuous", topic: "Security Monitoring", details: "Reviewing logs for threat detection." },
            { day: "Weekly", topic: "Redundant Backups", details: "Ensuring data integrity through cloud backups." },
            { day: "Monthly", topic: "Core Optimizations", details: "Upgrading systems for peak speed and security." },
            { day: "On-Call", topic: "Technical Advisory", details: "Direct access for immediate troubleshooting." }
        ]
    },
    {
        slug: "social-media-management",
        title: "Social Ecosystem Setup",
        desc: "Establishing authority across all social touchpoints.",
        icon: Share2,
        accent: "text-amber-400",
        bg: "rgba(251, 191, 36, 0.05)",
        fullDesc: "Build a consistent and professional social presence. We handle profile architecture, content scheduling, and audience interaction strategy.",
        benefits: [
            "Unified Profile Architecture",
            "Strategic Content Calendars",
            "Audience Engagement Plans",
            "Automated Response Systems"
        ],
        roadmap: [
            { day: "STEP 01", topic: "Profile Audit", details: "Optimizing platform bio, links, and visuals." },
            { day: "STEP 02", topic: "Content Roadmap", details: "Engineering a high-value 30-day posting plan." },
            { day: "STEP 03", topic: "Visual Assets", details: "Designing cohesive templates for all platforms." },
            { day: "Ongoing", topic: "Engagement Control", details: "Monitoring community interactions and DMs." }
        ]
    },
    {
        slug: "business-growth",
        title: "Growth Engineering",
        desc: "End-to-end solutions to automate and scale your sales operation.",
        icon: TrendingUp,
        accent: "text-purple-400",
        bg: "rgba(168, 85, 247, 0.05)",
        fullDesc: "Integrate high-conversion sales funnels and business automation. We bridge the gap between marketing and revenue through technical precision.",
        benefits: [
            "Sales Automation Integration",
            "Funnel Conversion Strategies",
            "WhatsApp Business Automation",
            "Reputation Ecosystem Design"
        ],
        roadmap: [
            { day: "STEP 01", topic: "Efficiency Audit", details: "Pinpointing bottlenecks in your current sales flow." },
            { day: "STEP 02", topic: "Automation Design", details: "Architecting automated lead response systems." },
            { day: "STEP 03", topic: "System Integration", details: "Connecting WhatsApp and CRM for seamless flow." },
            { day: "Ongoing", topic: "Scale Optimization", details: "Calibrating systems for significant revenue growth." }
        ]
    },
    {
        slug: "google-business-setup",
        title: "Google Business Setup",
        desc: "Dominating local search through Google Business excellence.",
        icon: MapPin,
        accent: "text-neon",
        bg: "rgba(204, 255, 0, 0.05)",
        fullDesc: "Establish region-wide dominance with specialized Local SEO. We optimize your Google Business Profile for mapping authority and review supremacy.",
        benefits: [
            "Local Map SEO Domination",
            "Reputation Management Systems",
            "Profile Authority Indexing",
            "Real-time Query Management"
        ],
        roadmap: [
            { day: "STEP 01", topic: "Authority Claim", details: "Establishing or claiming your business listing." },
            { day: "STEP 02", topic: "Profile Engineering", details: "Integrating precise data, locations, and assets." },
            { day: "STEP 03", topic: "Verification Shield", details: "Managing successful platform verification." },
            { day: "Ongoing", topic: "Review Stewardship", details: "Nurturing customer sentiment for 5-star authority." }
        ]
    },
    {
        slug: "aeo-geo-optimization",
        title: "AEO & GEO Optimization",
        desc: "Optimize your brand to be cited and recommended by ChatGPT, Gemini, and Siri.",
        icon: Brain,
        accent: "text-purple-400",
        bg: "rgba(168, 85, 247, 0.05)",
        fullDesc: "Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO) are the future of digital visibility. We optimize your website so that AI search engines (like ChatGPT Search, Google Gemini, and Perplexity AI) and answer engines (like voice search, Siri, and Alexa) recommend and cite your business.",
        benefits: [
            "Generative Engine Citations (ChatGPT/Gemini)",
            "Voice Search & Smart Assistant Optimization",
            "Structured Schema & JSON-LD Injection",
            "AI-Friendly Content Architecture"
        ],
        roadmap: [
            { day: "STEP 01", topic: "AI Visibility Audit", details: "Analyzing how current AI engines and LLMs perceive and cite your brand." },
            { day: "STEP 02", topic: "Content Restructuring", details: "Rewriting pages to match natural question-and-answer patterns." },
            { day: "STEP 03", topic: "Technical Schema Setup", details: "Deploying deep semantic JSON-LD metadata for AI scrapers." },
            { day: "STEP 04", topic: "Authority Building", details: "Securing references in high-authority AI training sources." }
        ]
    }
];
