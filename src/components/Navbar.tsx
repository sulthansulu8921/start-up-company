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
    { name: "Services", href: "/#services" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("Home");

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
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 will-change-transform",
                isScrolled
                    ? "py-2 bg-white border-b border-gray-100 px-8 shadow-md"
                    : "py-3 bg-white border-b border-gray-50 px-6"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between font-sora">
                <Link href="/" className="group flex items-center gap-2">
                    <Logo width={140} height={40} />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link, i) => (
                        <motion.div
                            key={link.name}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + i * 0.1 }}
                        >
                            <Link
                                href={link.href}
                                className="relative group py-2"
                                onClick={(e) => {
                                    scrollToSection(e, link.href);
                                    setActiveLink(link.name);
                                }}
                            >
                                <span className={cn(
                                    "text-sm font-bold tracking-tight transition-all duration-300",
                                    activeLink === link.name ? "text-royal" : "text-gray-600 hover:text-black"
                                )}>
                                    {link.name}
                                </span>

                                {/* Animated Underline */}
                                {activeLink === link.name ? (
                                    <motion.div
                                        layoutId="nav-underline"
                                        className="absolute bottom-0 left-0 w-full h-0.5 bg-neon rounded-full"
                                    />
                                ) : (
                                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon/40 rounded-full transition-all duration-300 group-hover:w-full" />
                                )}
                            </Link>
                        </motion.div>
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
                        <div className="flex flex-col gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "text-xl font-bold transition-colors flex flex-row items-center justify-between group",
                                        activeLink === link.name ? "text-royal" : "text-gray-900 hover:text-royal"
                                    )}
                                    onClick={(e) => {
                                        scrollToSection(e, link.href);
                                        setActiveLink(link.name);
                                    }}
                                >
                                    {link.name}
                                    <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0 text-neon" />
                                </Link>
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
