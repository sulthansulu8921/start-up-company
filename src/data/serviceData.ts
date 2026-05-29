import { Globe, Target, Megaphone, Palette, BarChart3, Layout, Share2, TrendingUp, MapPin, Wrench, LucideIcon } from "lucide-react";

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
        slug: "ecommerce-development",
        title: "Ecommerce Development",
        desc: "Custom business platforms, high-conversion online stores, and digital shops.",
        icon: Globe,
        accent: "text-neon",
        bg: "rgba(204, 255, 0, 0.05)",
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
        fullDesc: "Scale your organic presence with cutting-edge AI-era search strategies. We provide data-driven Technical SEO, Generative Engine Optimization (GEO) for AI search recommendations, Answer Engine Optimization (AEO) for voice search, and advanced speed enhancements to win search engine authority.",
        benefits: [
            "GEO (AI Engine Optimization) Setup",
            "AEO & Voice Search Optimization",
            "Advanced Technical SEO Audit",
            "Local Search Domination"
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
        slug: "branding-logo-design",
        title: "Brand Identity Design",
        desc: "Crafting iconic logos and cohesive visual languages.",
        icon: Palette,
        accent: "text-neon",
        bg: "rgba(204, 255, 0, 0.05)",
        fullDesc: "Elevate your market perception with a premium brand voice. We provide comprehensive Logo Design, Visual Style Guides, and professional collateral.",
        benefits: [
            "Custom Icon & Logo Design",
            "Comprehensive Visual Systems",
            "Multi-Platform Asset Kits",
            "Professional Brand Guidelines"
        ],
        roadmap: [
            { day: "STEP 01", topic: "Concept Blueprinting", details: "Exploring visual directions aligned with your mission." },
            { day: "STEP 02", topic: "Design Iterations", details: "Reviewing premium concepts for final selection." },
            { day: "STEP 03", topic: "System Expansion", details: "Extending the brand to cards, headers, and social kits." },
            { day: "STEP 04", topic: "Final Delivery", details: "Providing high-resolution source and production files." }
        ]
    },
    {
        slug: "poster-design",
        title: "Strategic Design",
        desc: "High-impact visual communication for modern brands.",
        icon: Layout,
        accent: "text-sky-400",
        bg: "rgba(56, 189, 248, 0.05)",
        fullDesc: "Drive engagement with masterful graphic communication. We design high-conversion social assets, professional brochures, and corporate event materials.",
        benefits: [
            "High-Conversion Social Graphics",
            "Corporate Brochure Design",
            "Event & Promotional Collateral",
            "Modern Aesthetic Standards"
        ],
        roadmap: [
            { day: "STEP 01", topic: "Visual Objectives", details: "Defining the core message and target audience." },
            { day: "STEP 02", topic: "Structure & Layout", details: "Drafting the primary visual hierarchy." },
            { day: "STEP 03", topic: "Refinement", details: "Polishing details for final brand alignment." },
            { day: "STEP 04", topic: "Production Handoff", details: "Delivering print-ready and digital-optimized files." }
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
    }
];
