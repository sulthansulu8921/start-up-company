import { Metadata } from "next";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Website Development Company in Thiruvananthapuram | NanoRays",
    description: "Best web development and digital marketing services in Thiruvananthapuram (Trivandrum), Kerala. NanoRays Solution builds premium, affordable websites. Call: +91 89216 24007.",
    keywords: [
        "Website Development Thiruvananthapuram", "Web Design Agency Trivandrum", "Digital Marketing Trivandrum",
        "SEO Services Thiruvananthapuram", "Best Web Developer Trivandrum", "Business Website Trivandrum",
    ],
    alternates: { canonical: "https://nanorayssolution.com/locations/thiruvananthapuram" },
};

export default function TrivandrumPage() {
    return (
        <main className="min-h-screen pt-32 pb-16 relative">
            <div className="container mx-auto px-4 max-w-5xl relative z-10">
                <div className="mb-12 text-center">
                    <span className="inline-block bg-rose-400/10 text-rose-400 text-sm font-bold px-4 py-1.5 rounded-full mb-6 border border-rose-400/20 uppercase tracking-wider">
                        📍 Serving the Capital City, Thiruvananthapuram
                    </span>
                    <h1 className="text-4xl md:text-5xl font-sora font-bold text-white mb-6 leading-tight">
                        Premium Web Development in <br /><span className="text-rose-400">Thiruvananthapuram</span>
                    </h1>
                    <p className="text-lg text-gray-400 font-inter max-w-3xl mx-auto">
                        NanoRays Solution brings high-end website development and performance marketing to the capital. We help Trivandrum IT startups and businesses grow with state-of-the-art tech.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                        <h2 className="text-2xl font-sora font-bold text-white mb-6">Our Services in Trivandrum</h2>
                        <ul className="space-y-4 font-inter text-gray-300">
                            {[
                                "Modern Web Applications (Next.js/React)",
                                "Digital Marketing for IT Startups",
                                "SEO Optimization for Local Dominance",
                                "Branding & User Interface Design",
                                "Google Business Profile Management",
                                "E-commerce Platform Development",
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-rose-400 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-gradient-to-br from-rose-400/10 to-transparent border border-rose-400/20 rounded-2xl p-8 flex flex-col justify-center">
                        <h2 className="text-2xl font-sora font-bold text-white mb-4">Partnering with Trivandrum Tech</h2>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            With Technopark as its heart, Thiruvananthapuram is a technology leader. We provide the web infrastructure that helps local tech firms and retail businesses stand out on the global stage.
                        </p>
                        <Link href="/#contact" className="flex items-center justify-center gap-2 w-full bg-rose-400 text-black px-6 py-4 rounded-full font-bold hover:bg-rose-300 transition-all transform hover:scale-105">
                            Get Trivandrum Quote <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

                <div className="text-center bg-white/5 border border-white/10 rounded-2xl p-8">
                    <h2 className="text-2xl font-sora font-bold text-white mb-4">Serving All of Thiruvananthapuram</h2>
                    <p className="text-gray-400 font-inter">Technopark · Kazhakkoottam · Pattom · East Fort · Kowdiar · Peroorkada · Vizhinjam · Neyyattinkara</p>
                </div>
            </div>
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-rose-400/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        </main>
    );
}
