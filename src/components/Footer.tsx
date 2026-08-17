"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, ArrowRight, Heart, MapPin, Zap } from "lucide-react";
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
    Company: [
        { name: "About Us", href: "/#about" },
        { name: "Pricing", href: "/pricing" },
        { name: "Our Process", href: "/#process" },
        { name: "Testimonials", href: "/#testimonials" },
        { name: "FAQ", href: "/#faq" },
    ],
    Legal: [
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms of Service", href: "/terms-of-service" },
        { name: "Cookie Policy", href: "/cookie-policy" },
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
    { icon: MessageCircle, href: "https://wa.me/919497669317", label: "WhatsApp", custom: false },
    { icon: null, href: "https://www.instagram.com/nanorays_/", label: "Instagram", custom: true, CustomIcon: InstagramIcon },
    { icon: null, href: "https://www.linkedin.com/company/nanorayssolution", label: "LinkedIn", custom: true, CustomIcon: LinkedinIcon },
    { icon: Mail, href: "mailto:nanorayssolution@gmail.com", label: "Email", custom: false },
];

export default function Footer() {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        try {
            const { db } = await import("@/lib/firebase");
            const { collection, addDoc, serverTimestamp } = await import("firebase/firestore");
            await addDoc(collection(db, "newsletter"), {
                email,
                createdAt: serverTimestamp()
            });
            setSubscribed(true);
            setEmail("");
        } catch (error) {
            console.error("Newsletter failed:", error);
        }
    };

    return (
        <motion.footer
            initial={{ opacity: 0.9, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative overflow-hidden bg-[#FAFBFF] text-slate-700 rounded-t-[2.5rem] md:rounded-t-[3.5rem] shadow-[0_-25px_60px_rgba(0,0,0,0.06)] border-t border-slate-200/90 pt-20 pb-10 z-70"
        >
            {/* Dedicated High-Res Global Cyber Network Photo Background */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#FAFBFF] via-[#F0F5FF] to-[#FAFBFF] pointer-events-none" />
            
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-indigo-500/5 blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Top row */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-5 gap-16 mb-16"
                >
                    {/* Brand column */}
                    <div className="lg:col-span-2">
                        <Logo className="mb-6" />
                        <p className="text-slate-600 text-sm leading-relaxed mb-8 max-w-sm font-medium">
                            We&apos;re a premium full-service digital agency architecting powerful online presences and driving measurable growth for the modern enterprise.
                        </p>

                        {/* Contact */}
                        <div className="space-y-3 mb-8">
                            {[
                                { icon: Mail, text: "nanorayssolution@gmail.com" },
                                { icon: Phone, text: "+91 94976 69317 / +91 89216 24007" },
                                { icon: MapPin, text: "India" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-slate-700 text-sm font-semibold">
                                    <item.icon size={15} className="text-blue-600 flex-shrink-0" />
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
                                    whileHover={{ scale: 1.08, y: -2 }}
                                    className="w-10 h-10 rounded-xl bg-white border border-slate-200/90 shadow-sm flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50/50 transition-all"
                                >
                                    {s.custom && s.CustomIcon ? <s.CustomIcon /> : s.icon && <s.icon size={16} />}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation columns */}
                    {Object.entries(nav).map(([col, links]) => (
                        <div key={col}>
                            <h4 className="text-slate-900 font-black text-xs uppercase tracking-[0.25em] mb-6">{col}</h4>
                            <ul className="space-y-3.5">
                                {links.map(link => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-slate-600 text-xs font-semibold hover:text-blue-600 transition-colors flex items-center group gap-2"
                                        >
                                            <ArrowRight size={10} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-blue-600" />
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
                    className="bg-white border border-indigo-100 rounded-3xl p-8 mb-14 flex flex-col md:flex-row items-center gap-6 justify-between shadow-lg shadow-indigo-500/5 hover:border-indigo-200 transition-all duration-500"
                >
                    <div>
                        <h3 className="text-slate-900 font-black font-sora text-xl mb-1">Stay Updated</h3>
                        <p className="text-slate-500 text-sm font-medium">Get monthly tips on websites, SEO, and business growth — no spam.</p>
                    </div>
                    {subscribed ? (
                        <div className="flex items-center gap-3 text-emerald-700 font-bold text-sm bg-emerald-50 px-6 py-4 rounded-2xl border border-emerald-200 w-full md:w-auto">
                            <Zap size={15} className="text-emerald-600 animate-pulse" />
                            Subscribed Successfully!
                        </div>
                    ) : (
                        <form onSubmit={handleSubscribe} className="flex gap-3 w-full md:w-auto flex-shrink-0">
                            <input
                                required
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your@email.com"
                                className="bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 rounded-2xl px-5 py-3.5 text-sm font-semibold focus:outline-none focus:border-indigo-500 focus:bg-white transition-all w-full md:w-64"
                            />
                            <button className="flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] hover:from-[#1d4ed8] hover:to-[#6d28d9] text-white rounded-2xl font-extrabold text-xs uppercase tracking-widest shadow-md shadow-blue-500/20 transition-all whitespace-nowrap">
                                Subscribe <ArrowRight size={14} />
                            </button>
                        </form>
                    )}
                </motion.div>

                {/* Bottom bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-200">
                    <p className="text-slate-500 text-[11px] font-bold uppercase tracking-wider">
                        © {new Date().getFullYear()} NanoRays Solution. Digital Excellence Initialized.
                    </p>
                    <div className="flex items-center gap-2 text-slate-500 text-[11px] font-bold uppercase tracking-wider">
                        Crafted for <Heart size={13} className="text-rose-500 fill-rose-500 animate-pulse" /> the Bold
                    </div>
                </div>
            </div>
        </motion.footer>
    );
}
