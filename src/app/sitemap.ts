import { MetadataRoute } from 'next'

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://nanorayssolution.com';
    const districts = [
        'kochi', 'calicut', 'thiruvananthapuram', 'malappuram', 'thrissur', 'palakkad', 'kannur',
        'kollam', 'alappuzha', 'kottayam', 'pathanamthitta', 'idukki', 'wayanad', 'kasaragod', 'dubai', 'kerala'
    ];
    const servicesList = [
        'website-development', 'digital-marketing', 'graphic-design-posters', 'seo-services',
        'ecommerce-development', 'google-business-setup', 'website-maintenance', 'aeo-geo-optimization'
    ];
    const blogs = [
        'website-development-kerala', 'local-seo-kerala', 'digital-marketing-india', 'affordable-website-packages'
    ];

    const staticRoutes = [
        { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
        { url: `${baseUrl}/locations`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
        { url: `${baseUrl}/pricing`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    ];

    const serviceRoutes = servicesList.map(s => ({
        url: `${baseUrl}/services/${s}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8
    }));

    const locationRoutes = districts.map(d => ({
        url: `${baseUrl}/locations/${d}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9
    }));

    const blogRoutes = blogs.map(b => ({
        url: `${baseUrl}/blog/${b}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7
    }));

    return [
        ...staticRoutes,
        ...serviceRoutes,
        ...locationRoutes,
        ...blogRoutes
    ] as MetadataRoute.Sitemap;
}
