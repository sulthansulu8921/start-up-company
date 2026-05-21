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
        href: "/#services",
        dropdown: [
            { name: "Web Development", href: "/services/website-development" },
            { name: "Ecommerce Stores", href: "/services/ecommerce-development" },
            { name: "SEO Expert", href: "/services/seo-services" },
            { name: "Google Business", href: "/services/google-business-setup" },
            { name: "Branding & Design", href: "/services/graphic-design-posters" },
        ]
    },
    {
        name: "Locations",
        href: "/locations",
        dropdown: [
            { name: "All Kerala", href: "/locations/kerala" },
            { name: "Kochi", href: "/locations/kochi" },
            { name: "Calicut", href: "/locations/calicut" },
            { name: "Trivandrum", href: "/locations/thiruvananthapuram" },
            { name: "Malappuram", href: "/locations/malappuram" },
            { name: "Thrissur", href: "/locations/thrissur" },
            { name: "Palakkad", href: "/locations/palakkad" },
            { name: "Kannur", href: "/locations/kannur" },
            { name: "Dubai (Global)", href: "/locations/dubai" },
        ]
    },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("Home");
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Dynamically update active tab based on scroll position
            const sections = document.querySelectorAll("section[id]");
            let current = "Home"; // Default to Home

            if (window.scrollY < 200) {
                current = "Home";
            } else {
                sections.forEach((section) => {
                    const sectionTop = (section as HTMLElement).offsetTop;
                    const sectionHeight = section.clientHeight;
                    // Trigger section change slightly before it hits the top of the viewport
                    if (window.scrollY >= sectionTop - 300 && window.scrollY < sectionTop + sectionHeight - 300) {
                        const id = section.getAttribute("id");
                        if (id === "services") current = "Services";
                        if (id === "pricing") current = "Pricing";
                        if (id === "about") current = "About";
                        if (id === "contact") current = "Contact";
                    }
                });
            }
            setActiveLink(prev => prev !== current ? current : prev);
        };

        window.addEventListener("scroll", handleScroll);
        // Initial setup on mount
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent, href: string) => {
        if (href.startsWith("/#")) {
            if (pathname === "/") {
                e.preventDefault();
                const id = href.split("#")[1];
                const element = document.getElementById(id);
                if (element) {
                    const offset = 80;
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
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 will-change-transform",
                isScrolled
                    ? "py-2 bg-white/90 backdrop-blur-md border-b border-gray-100 px-8 shadow-sm"
                    : "py-3 bg-white border-b border-gray-50 px-6"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between font-sora">
                <Link href="/" className="group flex items-center gap-2">
                    <Logo width={140} height={40} />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, i) => (
                        <div
                            key={link.name}
                            className="relative group py-4"
                            onMouseEnter={() => setHoveredLink(link.name)}
                            onMouseLeave={() => setHoveredLink(null)}
                        >
                            <Link
                                href={link.href}
                                className="relative flex items-center gap-1.5"
                                onClick={(e) => {
                                    scrollToSection(e, link.href);
                                    setActiveLink(link.name);
                                }}
                            >
                                <span className={cn(
                                    "text-xs font-black uppercase tracking-widest transition-all duration-300",
                                    activeLink === link.name ? "text-royal" : "text-gray-500 group-hover:text-black"
                                )}>
                                    {link.name}
                                </span>
                                {link.dropdown && (
                                    <svg className={cn("w-3 h-3 transition-transform duration-300", hoveredLink === link.name ? "rotate-180 text-neon" : "text-gray-400")} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                                    </svg>
                                )}

                                {/* Animated Underline */}
                                {activeLink === link.name && (
                                    <motion.div
                                        layoutId="nav-underline"
                                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-neon rounded-full"
                                    />
                                )}
                            </Link>

                            {/* Dropdown Menu */}
                            <AnimatePresence>
                                {link.dropdown && hoveredLink === link.name && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white border border-gray-100 rounded-2xl shadow-xl p-2 z-50 overflow-hidden"
                                    >
                                        <div className="flex flex-col gap-1">
                                            {link.dropdown.map((item) => (
                                                <Link
                                                    key={item.href}
                                                    href={item.href}
                                                    className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-gray-50 group/item transition-colors"
                                                    onClick={() => setHoveredLink(null)}
                                                >
                                                    <span className="text-xs font-bold text-gray-700 group-hover/item:text-black">{item.name}</span>
                                                    <ArrowRight size={14} className="text-neon opacity-0 group-hover/item:opacity-100 -translate-x-2 group-hover/item:translate-x-0 transition-all" />
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                <div className="flex items-center gap-3 md:gap-6">
                    <Link
                        href="/#contact"
                        className="hidden md:block"
                        onClick={(e) => scrollToSection(e, "/#contact")}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.2 }}
                            className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-2.5 bg-neon text-black rounded-xl font-black text-[10px] md:text-[11px] uppercase tracking-tighter hover:bg-black hover:text-neon transition-all shadow-lg hover:shadow-neon/20 whitespace-nowrap cursor-pointer border border-neon"
                        >
                            <Zap size={12} className="fill-current hidden sm:block" />
                            Start Project
                        </motion.div>
                    </Link>

                    <button
                        className={cn(
                            "md:hidden p-2 transition-colors",
                            "text-gray-900 hover:text-royal"
                        )}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        className="absolute top-full left-0 right-0 mx-6 mt-4 p-8 bg-white/98 backdrop-blur-xl rounded-3xl md:hidden overflow-hidden border border-gray-100 shadow-2xl"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <div key={link.name} className="flex flex-col gap-4">
                                    <div
                                        className={cn(
                                            "text-xl font-bold transition-colors flex flex-row items-center justify-between group cursor-pointer",
                                            activeLink === link.name ? "text-royal" : "text-gray-900 hover:text-royal"
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
                                            className="flex-grow"
                                            onClick={(e) => {
                                                if (link.dropdown) e.preventDefault();
                                            }}
                                        >
                                            {link.name}
                                        </Link>
                                        {link.dropdown ? (
                                            <div className="p-2">
                                                <svg className={cn("w-5 h-5 transition-transform duration-300", hoveredLink === link.name ? "rotate-180 text-neon" : "text-gray-400")} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        ) : (
                                            <ArrowRight size={18} className="opacity-40 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0 text-neon" />
                                        )}
                                    </div>

                                    {/* Mobile Dropdown Items */}
                                    <AnimatePresence>
                                        {link.dropdown && hoveredLink === link.name && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="flex flex-col gap-4 pl-4 border-l-2 border-gray-100 ml-1"
                                            >
                                                {link.dropdown.map((item) => (
                                                    <Link
                                                        key={item.href}
                                                        href={item.href}
                                                        className="text-sm font-bold text-gray-500 hover:text-black transition-colors py-1"
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
                                href="/#contact"
                                className="w-full"
                                onClick={(e) => scrollToSection(e, "/#contact")}
                            >
                                <button className="w-full py-4 bg-neon text-black rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg hover:shadow-neon/30 transition-all font-sora">
                                    Launch Project <Zap size={18} fill="black" />
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
