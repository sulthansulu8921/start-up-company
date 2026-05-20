import { Metadata } from "next";
import { CheckCircle, ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Website Development Company in Kerala | Best Digital Agency Kerala",
    description: "NanoRays Solution is the best website development company in Kerala. We provide affordable web design, SEO, and digital marketing services across all 14 districts of Kerala.",
    keywords: [
        "Website Development Company Kerala", "Digital Marketing Company Kerala", "Best Web Agency Kerala",
        "Affordable Website Design Kerala", "SEO Services Kerala", "Professional Web Designer Kerala",
        "Website Packages Kerala", "Top Digital Marketing Agency Kerala",
    ],
    alternates: { canonical: "https://nanorayssolution.com/locations/kerala" },
};

const districts = [
    { name: "Kochi (Ernakulam)", href: "/locations/kochi" },
    { name: "Calicut (Kozhikode)", href: "/locations/calicut" },
    { name: "Malappuram", href: "/locations/malappuram" },
    { name: "Palakkad", href: "/locations/palakkad" },
    { name: "Thiruvananthapuram", href: "/locations/thiruvananthapuram" },
    { name: "Thrissur", href: "/locations/thrissur" },
    { name: "Kannur", href: "/locations/kannur" },
    { name: "Kottayam", href: "/#contact" },
    { name: "Kollam", href: "/#contact" },
    { name: "Alappuzha", href: "/#contact" },
    { name: "Idukki", href: "/#contact" },
    { name: "Pathanamthitta", href: "/#contact" },
    { name: "Wayanad", href: "/#contact" },
    { name: "Kasaragod", href: "/#contact" },
];

export default function KeralaPage() {
    return (
        <main className="min-h-screen pt-32 pb-16 relative">
            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="mb-16 text-center">
                    <span className="inline-block bg-neon/10 text-neon text-sm font-bold px-4 py-1.5 rounded-full mb-6 border border-neon/20 uppercase tracking-wider">
                        🤝 Serving All 14 Districts
                    </span>
                    <h1 className="text-4xl md:text-6xl font-sora font-bold text-white mb-6 leading-tight">
                        Best Website Development & <br />Digital Marketing Company in <span className="text-neon">Kerala</span>
                    </h1>
                    <p className="text-xl text-gray-400 font-inter max-w-3xl mx-auto">
                        NanoRays Solution is Kerala's fastest-growing digital agency. We combine world-class design with local expertise to help Kerala startups and small businesses dominate the global market.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-20">
                    <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                        {districts.map((d) => (
                            <Link
                                key={d.name}
                                href={d.href}
                                className="flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-neon hover:bg-white/10 transition-all group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="bg-neon/20 p-2.5 rounded-xl">
                                        <MapPin className="w-5 h-5 text-neon" />
                                    </div>
                                    <span className="text-white font-bold text-lg">{d.name}</span>
                                </div>
                                <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-neon group-hover:translate-x-1 transition-all" />
                            </Link>
                        ))}
                    </div>

                    <div className="space-y-6">
                        <div className="bg-gradient-to-br from-neon/10 to-transparent border border-neon/20 rounded-[32px] p-8">
                            <h2 className="text-2xl font-sora font-bold text-white mb-6">Why Kerala Chooses Us</h2>
                            <ul className="space-y-4 font-inter text-gray-300">
                                {[
                                    "Affordable Startup Packages",
                                    "Expert Regional SEO (Malayalam/English)",
                                    "WhatsApp Lead Generation Systems",
                                    "High-Speed Next.js Websites",
                                    "24/7 Professional Support",
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-neon shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">
                            <h3 className="text-xl font-sora font-bold text-white mb-4">Statewide Consultation</h3>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Whether you are in Trivandrum or Kasaragod, we provide personalized digital strategies for your business.
                            </p>
                            <Link href="/#contact" className="flex items-center justify-center gap-2 w-full bg-white text-black px-6 py-4 rounded-full font-bold hover:bg-gray-200 transition-all">
                                Book a Kerala Expert <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-neon/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>
        </main>
    );
}
