import { Code2, Bot, Smartphone, Target, Workflow, Layers, MapPin, LucideIcon } from "lucide-react";

export interface RoadmapStep {
    day: string;
    topic: string;
    details: string;
}

export interface WhatWeOfferItem {
    title: string;
    desc: string;
}

export interface Service {
    num: string;
    slug: string;
    title: string;
    desc: string;
    icon: LucideIcon;
    accent: string;
    bg: string;
    image: string;
    fullDesc: string;
    whatWeOffer: WhatWeOfferItem[];
    benefits: string[];
    bottomHighlights: string[];
    bottomBanner?: string;
    roadmap: RoadmapStep[];
}

export const services: Service[] = [
    {
        num: "01",
        slug: "website-development",
        title: "Website Development",
        desc: "Modern, responsive and high-performance websites that help your business grow online and convert visitors into customers.",
        icon: Code2,
        accent: "text-blue-600",
        bg: "rgba(37, 99, 235, 0.05)",
        image: "/service-01-website-development.jpg",
        fullDesc: "Modern, responsive and high-performance websites that help your business grow online and convert visitors into customers.",
        whatWeOffer: [
            { title: "Business Websites", desc: "Professional websites to build your brand and establish a strong online presence." },
            { title: "E-commerce Solutions", desc: "Secure and scalable online stores that drive sales and grow your business." },
            { title: "Landing Pages", desc: "High-converting landing pages designed to generate leads and boost conversions." },
            { title: "Responsive Design", desc: "Mobile-friendly and responsive websites that look perfect on all devices." },
            { title: "Speed & Performance", desc: "Optimized websites for fast loading speed and better user experience." },
            { title: "SEO Friendly", desc: "Built with clean code and SEO best practices to rank higher on search engines." }
        ],
        benefits: [
            "Modern & Creative Designs",
            "Fully Responsive on All Devices",
            "Secure & Reliable Architecture",
            "Built for Fast Page Speed & High Conversions"
        ],
        bottomHighlights: [
            "Modern & Creative Designs",
            "Fully Responsive on All Devices",
            "Secure & Reliable",
            "Built for Results",
            "Let's Build a Website That Works for You!"
        ],
        roadmap: [
            { day: "STEP 01", topic: "Discovery & Blueprint", details: "Defining site goals, audience targets, key pages, and architecture." },
            { day: "STEP 02", topic: "UI/UX & Storefront Design", details: "Creating intuitive wireframes, responsive layouts, and conversion triggers." },
            { day: "STEP 03", topic: "Full-Stack Development", details: "Engineering fast Next.js components, database feeds, and secure APIs." },
            { day: "STEP 04", topic: "Speed Audit & Launch", details: "Conducting Core Web Vitals checks, SEO checks, and live domain deployment." }
        ]
    },
    {
        num: "02",
        slug: "ai-solutions-chatbots",
        title: "AI Solutions & Chatbots",
        desc: "Smart AI solutions and intelligent chatbots that automate conversations, improve customer experience and drive business growth.",
        icon: Bot,
        accent: "text-indigo-600",
        bg: "rgba(99, 102, 241, 0.05)",
        image: "/service-02-ai-solutions-chatbots.jpg",
        fullDesc: "Smart AI solutions and intelligent chatbots that automate conversations, improve customer experience and drive business growth.",
        whatWeOffer: [
            { title: "AI Chatbots", desc: "Intelligent chatbots that engage visitors, answer queries and provide 24/7 support." },
            { title: "AI Agents", desc: "Autonomous AI agents that handle tasks, follow-up and assist your team efficiently." },
            { title: "Multi-language Support", desc: "AI solutions that understand and communicate in multiple languages." },
            { title: "Custom AI Solutions", desc: "Tailored AI solutions designed to solve your business challenges." },
            { title: "Seamless Integrations", desc: "We integrate AI with your existing tools, CRM, website and platforms." },
            { title: "Analytics & Insights", desc: "Track conversations, performance and get insights to improve customer interactions." }
        ],
        benefits: [
            "24/7 Availability & Instant Answers",
            "Save Time & Reduce Operational Costs",
            "Omni-channel Web & WhatsApp Deployments",
            "Boost Efficiency & Business Growth"
        ],
        bottomHighlights: [
            "24/7 Availability",
            "Save Time & Reduce Costs",
            "Better Customer Experience",
            "Boost Efficiency & Growth",
            "Smarter Conversations. Stronger Relationships."
        ],
        roadmap: [
            { day: "STEP 01", topic: "AI Scope & Knowledge Setup", details: "Gathering business FAQs, user intents, and conversation flows." },
            { day: "STEP 02", topic: "Model Calibration & RAG Pipeline", details: "Training customized AI agents and setting response safety guardrails." },
            { day: "STEP 03", topic: "Channel Integration", details: "Connecting AI engines into web widgets, WhatsApp APIs, and CRMs." },
            { day: "STEP 04", topic: "Live Monitor & Tuning", details: "Inspecting logs, calibrating intent accuracy, and continuous updates." }
        ]
    },
    {
        num: "03",
        slug: "mobile-app-development",
        title: "Mobile App Development",
        desc: "High-performance iOS & Android applications built for modern businesses and real users.",
        icon: Smartphone,
        accent: "text-sky-500",
        bg: "rgba(14, 165, 233, 0.05)",
        image: "/service-03-mobile-app-development.jpg",
        fullDesc: "High-performance iOS & Android applications built for modern businesses and real users.",
        whatWeOffer: [
            { title: "Custom Mobile Apps", desc: "Tailored mobile applications built to solve your unique business problems." },
            { title: "iOS & Android Development", desc: "Native and cross-platform development for iOS and Android devices." },
            { title: "User-Friendly UI/UX", desc: "Beautiful, intuitive and easy-to-use designs that users love." },
            { title: "High Performance & Secure", desc: "Fast, reliable and secure apps built with best coding practices." },
            { title: "Backend Integration", desc: "Seamless integration with APIs, databases and third-party services." },
            { title: "Support & Maintenance", desc: "Ongoing support and updates to keep your app running at its best." }
        ],
        benefits: [
            "Scalable Cross-Platform Solutions (iOS & Android)",
            "Intuitive UI/UX Built for Maximum Retention",
            "High Performance & Secure Architecture",
            "App Store & Google Play Publishing Support"
        ],
        bottomHighlights: [
            "Scalable Solutions",
            "Secure & Reliable",
            "Better User Experience",
            "Boost Business Growth",
            "Powerful Apps. Stronger Business."
        ],
        roadmap: [
            { day: "STEP 01", topic: "App Wireframing & Tech Spec", details: "Mapping user journeys, native features, and backend database schemas." },
            { day: "STEP 02", topic: "Mobile UI/UX Prototyping", details: "Designing intuitive mobile screens adhering to iOS and Android guidelines." },
            { day: "STEP 03", topic: "App Development", details: "Building cross-platform codebases with React Native & Flutter." },
            { day: "STEP 04", topic: "Testing & Store Launch", details: "Executing QA, security checks, and publishing to Apple App Store & Google Play." }
        ]
    },
    {
        num: "04",
        slug: "digital-marketing",
        title: "Digital Marketing & SEO",
        desc: "Result-driven digital marketing strategies to increase visibility, drive traffic and grow your business online.",
        icon: Target,
        accent: "text-rose-500",
        bg: "rgba(244, 63, 94, 0.05)",
        image: "/service-04-digital-marketing-seo.jpg",
        fullDesc: "Result-driven digital marketing strategies to increase visibility, drive traffic and grow your business online.",
        whatWeOffer: [
            { title: "Search Engine Optimization (SEO)", desc: "Improve your website ranking, increase organic traffic and get found by the right audience." },
            { title: "Social Media Marketing (SMM)", desc: "Engage your audience, build your brand and grow your presence on social media." },
            { title: "Paid Advertising (Google & Meta Ads)", desc: "Targeted ad campaigns that bring quality leads and maximize your ROI." },
            { title: "Content Marketing", desc: "High-quality content that attracts, engages and converts your target audience." },
            { title: "Email Marketing", desc: "Build strong relationships and drive repeat business with email campaigns." },
            { title: "Analytics & Reporting", desc: "Track performance, measure results and optimize strategies for better growth." }
        ],
        benefits: [
            "Higher Organic Search Visibility & Google Rankings",
            "High-Quality Lead Generation with Google & Meta Ads",
            "Engaging Social Media & Content Marketing Funnels",
            "Transparent ROI Analytics & Monthly Performance Reports"
        ],
        bottomHighlights: [
            "More Traffic & Better Visibility",
            "Quality Leads & Higher Conversions",
            "Better ROI & Lower Cost",
            "Stronger Brand & Loyal Customers",
            "Grow Your Business With Smart Marketing!"
        ],
        roadmap: [
            { day: "STEP 01", topic: "Audit & Strategy", details: "Analyzing current search rankings, ad opportunities, and audience intent." },
            { day: "STEP 02", topic: "On-Page SEO & Ad Creatives", details: "Optimizing website keywords, meta titles, copy, and visual ad banners." },
            { day: "STEP 03", topic: "Campaign Launch", details: "Executing targeted Google Search Ads and social media marketing campaigns." },
            { day: "STEP 04", topic: "Optimization & Scaling", details: "A/B testing campaign variables to maximize lead volume and lower acquisition costs." }
        ]
    },
    {
        num: "05",
        slug: "business-automation",
        title: "Business Automation",
        desc: "Automate workflows, streamline operations and use smart systems to save time, reduce costs and grow your business.",
        icon: Workflow,
        accent: "text-purple-600",
        bg: "rgba(168, 85, 247, 0.05)",
        image: "/service-05-business-automation.jpg",
        fullDesc: "Automate workflows, streamline operations and use smart systems to save time, reduce costs and grow your business.",
        whatWeOffer: [
            { title: "Workflow Automation", desc: "Automate repetitive tasks and business processes to improve efficiency." },
            { title: "CRM Automation", desc: "Manage leads, follow-ups, and customer interactions automatically." },
            { title: "System Integrations", desc: "Integrate your tools and apps to work together seamlessly." },
            { title: "Email & Notification Automation", desc: "Setup automated emails, reminders and alerts to keep everything on track." },
            { title: "Data Management", desc: "Organize, sync and manage your data for better business decisions." },
            { title: "Smart Business Systems", desc: "Custom automation solutions and smart systems designed for your unique business needs." }
        ],
        benefits: [
            "Drastically Reduce Manual Tasks & Operational Bottlenecks",
            "Seamless Integrations Across Apps, CRMs, & Webhooks",
            "Eliminate Costly Data Entry Human Errors",
            "Focus Team Energy on High-Value Growth Activities"
        ],
        bottomHighlights: [
            "Save Time",
            "Increase Productivity",
            "Reduce Operational Costs",
            "Minimize Errors",
            "Automate Today, Grow Tomorrow! Smarter processes. Stronger business."
        ],
        roadmap: [
            { day: "STEP 01", topic: "Workflow Audit", details: "Mapping manual tasks, data handoffs, and software integration gaps." },
            { day: "STEP 02", topic: "Automation Architecture", details: "Designing webhooks, API triggers, and automated logic flows." },
            { day: "STEP 03", topic: "Build & Integration", details: "Connecting apps, email servers, CRM pipelines, and notification bots." },
            { day: "STEP 04", topic: "Testing & Rollout", details: "Validating automated executions and training staff on new workflows." }
        ]
    },
    {
        num: "06",
        slug: "software-development",
        title: "Software Development",
        desc: "Custom software solutions that are reliable, scalable and built to solve real business problems and drive growth.",
        icon: Layers,
        accent: "text-indigo-600",
        bg: "rgba(79, 70, 229, 0.05)",
        image: "/service-06-software-development.jpg",
        fullDesc: "Custom software solutions that are reliable, scalable and built to solve real business problems and drive growth.",
        whatWeOffer: [
            { title: "Custom Software Development", desc: "Tailored software solutions built to meet your unique business requirements." },
            { title: "Web Application Development", desc: "Robust, secure and scalable web applications that deliver great user experience." },
            { title: "Mobile Application Development", desc: "High-performance Android and iOS apps that engage users and grow your business." },
            { title: "Cloud Solutions", desc: "Cloud-based applications and migration for scalability, flexibility and security." },
            { title: "Quality & Security", desc: "We follow best practices to deliver secure, reliable and bug-free software." },
            { title: "Support & Maintenance", desc: "Ongoing support and maintenance to keep your software up-to-date and running smoothly." }
        ],
        benefits: [
            "Tailored Enterprise Software & Custom SaaS Architecture",
            "Built with Modern Stack (Python, JS, React, Node.js, PHP, Postgres)",
            "Cloud Security & Bug-Free Quality Assurance",
            "Long-Term Maintenance & Dedicated Helpdesk"
        ],
        bottomHighlights: [
            "Scalable Solutions",
            "User-Centric Design",
            "High Performance",
            "Clean & Maintainable Code",
            "Secure Development",
            "Smart Solutions. Stronger Business. Better Tomorrow."
        ],
        roadmap: [
            { day: "STEP 01", topic: "Requirements Blueprint", details: "Defining software features, database models, security, and scalability specs." },
            { day: "STEP 02", topic: "UX & System Architecture", details: "Designing intuitive admin panels, control dashboards, and REST API contracts." },
            { day: "STEP 03", topic: "Full-Stack Development", details: "Coding robust backend systems, databases, and responsive frontend UI." },
            { day: "STEP 04", topic: "QA & Cloud Deployment", details: "Conducting vulnerability testing, load tests, and deploying to cloud infrastructure." }
        ]
    },
    {
        num: "07",
        slug: "google-business-setup",
        title: "Google Business Profile Setup",
        desc: "Get found on Google. Build trust, attract local customers and grow your business with a powerful Google Business Profile.",
        icon: MapPin,
        accent: "text-amber-500",
        bg: "rgba(245, 158, 11, 0.05)",
        image: "/service-07-google-business-setup.jpg",
        fullDesc: "Get found on Google. Build trust, attract local customers and grow your business with a powerful Google Business Profile.",
        whatWeOffer: [
            { title: "Profile Creation", desc: "Complete Google Business Profile setup with accurate business information." },
            { title: "Profile Optimization", desc: "Optimize your profile with relevant keywords, categories, services and attributes." },
            { title: "Photos & Videos", desc: "Add high-quality photos and videos to showcase your business and attract more customers." },
            { title: "Review Management", desc: "Get more positive reviews and improve your online reputation." },
            { title: "Google Posts", desc: "Publish updates, offers and announcements to engage your audience." },
            { title: "Maps & Local SEO", desc: "Improve local search ranking and get found by more nearby customers." },
            { title: "Performance Insights", desc: "Track views, calls, messages and direction requests to measure results." }
        ],
        benefits: [
            "Top 3 Google Maps Local Pack Visibility",
            "Drive Direct Customer Phone Calls & Directions",
            "Verified Google Business Listing & Review Management",
            "Monthly Local SEO Search Insights & Ranking Reports"
        ],
        bottomHighlights: [
            "Increase Visibility",
            "More Customers",
            "Build Credibility",
            "Better Engagement",
            "Get Found. Get Trusted. Grow Your Business!"
        ],
        roadmap: [
            { day: "STEP 01", topic: "Profile Audit & Verification", details: "Claiming, verifying, and setting up official NAP business credentials." },
            { day: "STEP 02", topic: "Category & Keyword Optimization", details: "Adding target local service categories, descriptions, and business tags." },
            { day: "STEP 03", topic: "Visuals & Products", details: "Uploading geo-tagged high-res photos, cover images, and service items." },
            { day: "STEP 04", topic: "Local SEO & Monitoring", details: "Configuring review request triggers, publishing posts, and tracking map insights." }
        ]
    }
];

// Slug Aliases Map for seamless URL redirection / compatibility
export const slugAliases: Record<string, string> = {
    "ecommerce-development": "website-development",
    "ai-platform-development": "ai-solutions-chatbots",
    "ai-chatbots-agents": "ai-solutions-chatbots",
    "seo-services": "digital-marketing",
    "aeo-geo-optimization": "digital-marketing",
    "social-media-management": "digital-marketing",
    "branding-creative-design": "digital-marketing",
    "business-software": "software-development",
    "website-maintenance": "software-development",
};
