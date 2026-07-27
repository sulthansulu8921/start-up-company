"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "./Logo";

const navLinks = [
    { name: "Home", href: "/" },
    {
        name: "Services",
        href: "/services",
        dropdown: [
            { name: "Web Development", href: "/services/website-development" },
            { name: "Ecommerce Stores", href: "/services/ecommerce-development" },
            { name: "SEO Expert", href: "/services/seo-services" },
            { name: "Google Business", href: "/services/google-business-setup" },
            { name: "Website Maintenance", href: "/services/website-maintenance" },
            { name: "Branding & Design", href: "/services/graphic-design-posters" },
        ]
    },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("Home");
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const [menuHoveredLink, setMenuHoveredLink] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        // High-performance IntersectionObserver to track the active section
        const sections = document.querySelectorAll("section[id]");
        const observerOptions = {
            root: null,
            rootMargin: "-30% 0px -60% 0px", // Triggers active link when section is near top/center
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute("id");
                    if (id === "services") setActiveLink("Services");
                    else if (id === "pricing") setActiveLink("Pricing");
                    else if (id === "contact") setActiveLink("Contact");
                    else if (id === "hero") setActiveLink("Home");
                }
            });
        }, observerOptions);

        sections.forEach((section) => observer.observe(section));

        return () => {
            window.removeEventListener("scroll", handleScroll);
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    const scrollToSection = (e: React.MouseEvent, href: string) => {
        if (href.startsWith("/#")) {
            if (pathname === "/") {
                e.preventDefault();
                const id = href.split("#")[1];
                const element = document.getElementById(id);
                if (element) {
                    const offset = 90;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }
            if (isMobileMenuOpen) setIsMobileMenuOpen(false);
        }
    };

    return (
        <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center p-4 pointer-events-none">
            <motion.nav
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                className={cn(
                    "w-full max-w-6xl rounded-full border transition-all duration-500 pointer-events-auto flex items-center justify-between px-6 md:px-8",
                    isScrolled
                        ? "py-2.5 bg-white/80 dark:bg-black/75 backdrop-blur-xl border-black/5 dark:border-neon/20 shadow-[0_10px_40px_rgba(0,0,0,0.05),_0_0_30px_rgba(0,0,0,0.01)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.5),_0_0_30px_rgba(204,255,0,0.03)]"
                        : "py-4 bg-white/40 dark:bg-black/40 backdrop-blur-md border-black/5 dark:border-white/5"
                )}
            >
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Logo width={120} height={35} className="hover:scale-[1.02] transition-transform duration-300" />
                </Link>

                {/* Desktop Navigation Links */}
                <div 
                    className="hidden md:flex items-center gap-1 bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 rounded-full p-1 relative"
                    onMouseLeave={() => setMenuHoveredLink(null)}
                >
                    {navLinks.map((link) => (
                        <div
                            key={link.name}
                            className="relative"
                            onMouseEnter={() => {
                                setHoveredLink(link.name);
                                setMenuHoveredLink(link.name);
                            }}
                            onMouseLeave={() => setHoveredLink(null)}
                        >
                            <Link
                                href={link.href}
                                className={cn(
                                    "relative px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 flex items-center gap-1.5 z-10",
                                    activeLink === link.name 
                                        ? "text-purple-600 dark:text-neon" 
                                        : "text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white"
                                )}
                                onClick={(e) => {
                                    scrollToSection(e, link.href);
                                    setActiveLink(link.name);
                                }}
                            >
                                <span>{link.name}</span>
                                {link.dropdown && (
                                    <svg className={cn("w-3 h-3 transition-transform duration-300", hoveredLink === link.name ? "rotate-180 text-purple-600 dark:text-neon" : "text-black/40 dark:text-white/40")} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                                    </svg>
                                )}
                            </Link>

                            {/* Hover Pill Background */}
                            {menuHoveredLink === link.name && (
                                <motion.div
                                    layoutId="nav-hover-pill"
                                    className="absolute inset-0 bg-black/5 dark:bg-white/5 rounded-full z-0"
                                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                />
                            )}

                            {/* Active Tab Underline dot */}
                            {activeLink === link.name && (
                                <motion.div
                                    layoutId="nav-active-dot"
                                    className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-purple-600 dark:bg-neon rounded-full"
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                />
                            )}

                            {/* Dropdown Menu */}
                            <AnimatePresence>
                                {link.dropdown && hoveredLink === link.name && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 15, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-white/95 dark:bg-black/95 backdrop-blur-2xl border border-black/5 dark:border-neon/20 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-2 z-50 overflow-hidden"
                                    >
                                        <div className="flex flex-col gap-1">
                                            {link.dropdown.map((item) => (
                                                <Link
                                                    key={item.href}
                                                    href={item.href}
                                                    className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-purple-50 dark:hover:bg-neon/10 group/item transition-colors"
                                                    onClick={() => setHoveredLink(null)}
                                                >
                                                    <span className="text-xs font-bold text-black/80 dark:text-white/80 group-hover/item:text-purple-600 group-hover/item:dark:text-neon transition-colors">{item.name}</span>
                                                    <ArrowRight size={14} className="text-purple-600 dark:text-neon opacity-0 group-hover/item:opacity-100 -translate-x-2 group-hover/item:translate-x-0 transition-all" />
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                {/* Right Side Controls & CTA */}
                <div className="flex items-center gap-3">
                    <Link href="/contact" className="hidden md:block">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative flex items-center gap-2 px-5 py-2.5 bg-neon text-black rounded-full font-black text-[11px] uppercase tracking-wider hover:shadow-[0_0_25px_rgba(204,255,0,0.4)] transition-all duration-300 border border-neon"
                        >
                            <Zap size={12} className="fill-current" />
                            Start Project
                        </motion.button>
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-black dark:text-white hover:text-purple-600 dark:hover:text-neon transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-x-4 top-24 bg-white/95 dark:bg-black/95 backdrop-blur-2xl rounded-3xl p-6 md:hidden border border-black/5 dark:border-neon/20 shadow-[0_30px_60px_rgba(0,0,0,0.1)] dark:shadow-[0_30px_60px_rgba(0,0,0,0.8)] pointer-events-auto"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <div key={link.name} className="flex flex-col gap-3">
                                    <div
                                        className={cn(
                                            "text-lg font-bold transition-colors flex items-center justify-between group cursor-pointer",
                                            activeLink === link.name ? "text-purple-600 dark:text-neon" : "text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white"
                                        )}
                                        onClick={(e) => {
                                            if (!link.dropdown) {
                                                scrollToSection(e, link.href);
                                                setActiveLink(link.name);
                                            } else {
                                                setHoveredLink(hoveredLink === link.name ? null : link.name);
                                            }
                                        }}
                                    >
                                        <Link
                                            href={link.href}
                                            className="flex-grow font-sora font-extrabold uppercase tracking-widest text-sm"
                                            onClick={(e) => {
                                                if (link.dropdown) e.preventDefault();
                                            }}
                                        >
                                            {link.name}
                                        </Link>
                                        {link.dropdown ? (
                                            <div className="p-1">
                                                <svg className={cn("w-4 h-4 transition-transform duration-300", hoveredLink === link.name ? "rotate-180 text-purple-600 dark:text-neon" : "text-black/40 dark:text-white/40")} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        ) : (
                                            <ArrowRight size={16} className="opacity-40 group-hover:opacity-100 transition-all text-purple-600 dark:text-neon" />
                                        )}
                                    </div>

                                    {/* Mobile Dropdown */}
                                    <AnimatePresence>
                                        {link.dropdown && hoveredLink === link.name && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="flex flex-col gap-3 pl-4 border-l border-black/10 dark:border-neon/20 ml-1"
                                            >
                                                {link.dropdown.map((item) => (
                                                    <Link
                                                        key={item.href}
                                                        href={item.href}
                                                        className="text-xs font-black uppercase tracking-wider text-black/50 dark:text-white/50 hover:text-purple-600 dark:hover:text-neon transition-colors py-1"
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                            <Link
                                href="/contact"
                                className="w-full mt-4"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <button className="w-full py-4 bg-neon text-black rounded-full font-black uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg hover:shadow-neon/30 transition-all text-xs font-sora">
                                    Start Project <Zap size={14} fill="black" />
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
