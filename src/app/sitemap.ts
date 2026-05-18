import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://nanorays.in";
    const now = new Date();

    const servicePages = [
        "website-services",
        "seo-optimization",
        "digital-marketing",
        "branding-logo-design",
        "ui-ux-design",
        "poster-design",
        "website-maintenance",
        "google-ads",
        "social-media-management",
    ].map((slug) => ({
        url: `${baseUrl}/services/${slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    return [
        { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
        { url: `${baseUrl}/legal/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
        { url: `${baseUrl}/legal/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
        { url: `${baseUrl}/legal/cookies`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
        { url: `${baseUrl}/legal/refund`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
        ...servicePages,
    ];
}
