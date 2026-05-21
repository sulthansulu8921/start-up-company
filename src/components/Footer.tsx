"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, ArrowRight, Heart, MapPin } from "lucide-react";
import Logo from "./Logo";

const nav = {
    Services: [
        { name: "Website Development", href: "/services/website-development" },
        { name: "Ecommerce Stores", href: "/services/ecommerce-development" },
        { name: "SEO Expert Services", href: "/services/seo-services" },
        { name: "Google Business", href: "/services/google-business-setup" },
        { name: "Website Maintenance", href: "/services/website-maintenance" },
        { name: "Digital Marketing", href: "/services/digital-marketing" },
        { name: "Branding & Posters", href: "/services/graphic-design-posters" },
    ],
    Locations: [
        { name: "All Kerala (Master)", href: "/locations/kerala" },
        { name: "Dubai (Global Hub)", href: "/locations/dubai" },
        { name: "Kochi (Ernakulam)", href: "/locations/kochi" },
        { name: "Calicut (Kozhikode)", href: "/locations/calicut" },
        { name: "Trivandrum (Capital)", href: "/locations/thiruvananthapuram" },
        { name: "Thrissur & Palakkad", href: "/locations/thrissur" },
    ],
    Company: [
        { name: "About Us", href: "/#about" },
        { name: "Pricing", href: "/pricing" },
        { name: "Our Process", href: "/#process" },
        { name: "Testimonials", href: "/#testimonials" },
        { name: "FAQ", href: "/#faq" },
    ],
    Legal: [
        { name: "Privacy Policy", href: "/coming-soon" },
        { name: "Terms of Service", href: "/coming-soon" },
        { name: "Cookie Policy", href: "/coming-soon" },
        { name: "Refund Policy", href: "/coming-soon" },
    ],
};

const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={16} height={16}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
);

const LinkedinIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={16} height={16}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const socials = [
    { icon: MessageCircle, href: "https://wa.me/918921624007", label: "WhatsApp", custom: false },
    { icon: null, href: "https://www.instagram.com/nanorays_/", label: "Instagram", custom: true, CustomIcon: InstagramIcon },
    { icon: null, href: "https://www.linkedin.com/company/nanorayssolution", label: "LinkedIn", custom: true, CustomIcon: LinkedinIcon },
    { icon: Mail, href: "mailto:nanorayssolution@gmail.com", label: "Email", custom: false },
];

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-transparent pt-24 pb-10">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-neon/5 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-sky-500/5 blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.02]"
                style={{
                    backgroundImage: `radial-gradient(rgba(255,255,255,1) 1px, transparent 1px)`,
                    backgroundSize: "32px 32px",
                }}
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Top row */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-5 gap-16 mb-20"
                >
                    {/* Brand column */}
                    <div className="lg:col-span-2">
                        <Logo className="mb-6" />
                        <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-sm font-bold">
                            We&apos;re a premium full-service digital agency architecting powerful online presences and driving measurable growth for the modern enterprise.
                        </p>

                        {/* Contact */}
                        <div className="space-y-3 mb-8">
                            {[
                                { icon: Mail, text: "nanorayssolution@gmail.com" },
                                { icon: Phone, text: "+91 89216 24007" },
                                { icon: MapPin, text: "India" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-white/50 text-sm font-bold">
                                    <item.icon size={14} className="text-neon flex-shrink-0" />
                                    {item.text}
                                </div>
                            ))}
                        </div>

                        {/* Social icons */}
                        <div className="flex gap-3">
                            {socials.map((s, i) => (
                                <motion.a
                                    key={i}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-neon hover:bg-neon/10 hover:border-neon/30 transition-all"
                                >
                                    {s.custom && s.CustomIcon ? <s.CustomIcon /> : s.icon && <s.icon size={16} />}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation columns */}
                    {Object.entries(nav).map(([col, links]) => (
                        <div key={col}>
                            <h4 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-8">{col}</h4>
                            <ul className="space-y-4">
                                {links.map(link => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-white/40 text-xs font-black uppercase tracking-widest hover:text-neon transition-colors flex items-center group gap-2"
                                        >
                                            <ArrowRight size={10} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-neon" />
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </motion.div>

                {/* Newsletter */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-14 flex flex-col md:flex-row items-center gap-6 justify-between group hover:border-neon/20 transition-all duration-500"
                >
                    <div>
                        <h3 className="text-white font-black font-sora text-xl mb-1 group-hover:text-neon transition-colors">Stay Updated</h3>
                        <p className="text-white/40 text-sm font-bold">Get monthly tips on websites, SEO, and business growth — no spam.</p>
                    </div>
                    <form className="flex gap-3 w-full md:w-auto flex-shrink-0">
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="bg-white/5 border border-white/10 text-white placeholder:text-white/20 rounded-2xl px-5 py-3.5 text-sm font-bold focus:outline-none focus:border-neon/40 transition-all w-full md:w-64"
                        />
                        <button className="flex items-center gap-2 px-6 py-3.5 bg-neon text-black rounded-2xl font-black text-xs uppercase tracking-widest hover:shadow-[0_0_20px_rgba(204,255,0,0.4)] transition-all whitespace-nowrap">
                            Subscribe <ArrowRight size={14} />
                        </button>
                    </form>
                </motion.div>

                {/* Bottom bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
                    <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.2em]">
                        © {new Date().getFullYear()} NanoRays Solution. Digital Excellence Initialized.
                    </p>
                    <div className="flex items-center gap-2 text-white/20 text-[10px] font-black uppercase tracking-[0.2em]">
                        Crafted for <Heart size={12} className="text-neon fill-neon animate-pulse" /> the Bold
                    </div>
                </div>
            </div>
        </footer>
    );
}
