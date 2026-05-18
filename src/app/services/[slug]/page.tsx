import { services } from "@/data/serviceData";
import { notFound } from "next/navigation";
import ServiceDetailContent from "@/components/sections/ServiceDetailContent";

interface PageProps {
    params: Promise<{ slug: string }>;
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

    return <ServiceDetailContent service={service} />;
}
