"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Zap, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "./Logo";

const navLinks = [
    { name: "Home", href: "/", sectionId: "hero" },
    {
        name: "Services",
        href: "/services",
        sectionId: "services",
        dropdown: [
            { name: "01. Website Development", href: "/services/website-development" },
            { name: "02. AI Solutions & Chatbots", href: "/services/ai-solutions-chatbots" },
            { name: "03. Mobile App Development", href: "/services/mobile-app-development" },
            { name: "04. Digital Marketing & SEO", href: "/services/digital-marketing" },
            { name: "05. Business Automation", href: "/services/business-automation" },
            { name: "06. Software Development", href: "/services/software-development" },
            { name: "07. Google Business Profile Setup", href: "/services/google-business-setup" },
        ]
    },
    { name: "Pricing", href: "/pricing", sectionId: "pricing" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact", sectionId: "contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const router = useRouter();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
    const [activeLink, setActiveLink] = useState("Home");
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const [menuHoveredLink, setMenuHoveredLink] = useState<string | null>(null);

    // Sync active link with current route pathname
    useEffect(() => {
        if (pathname === "/") {
            setActiveLink("Home");
        } else if (pathname.startsWith("/services")) {
            setActiveLink("Services");
        } else if (pathname.startsWith("/pricing")) {
            setActiveLink("Pricing");
        } else if (pathname.startsWith("/blog")) {
            setActiveLink("Blog");
        } else if (pathname.startsWith("/contact")) {
            setActiveLink("Contact");
        }
    }, [pathname]);

    // Handle scroll shadow and scroll observer for homepage sections
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        let observer: IntersectionObserver | null = null;
        if (pathname === "/") {
            const sections = document.querySelectorAll("section[id]");
            const observerOptions = {
                root: null,
                rootMargin: "-30% 0px -60% 0px",
                threshold: 0
            };

            observer = new IntersectionObserver((entries) => {
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

            sections.forEach((section) => observer?.observe(section));
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (observer) observer.disconnect();
        };
    }, [pathname]);

    // Close mobile menu and restore body scroll
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isMobileMenuOpen]);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setOpenMobileDropdown(null);
    }, [pathname]);

    // Intelligent Click & Scroll Handler
    const handleNavClick = (e: React.MouseEvent, href: string, sectionId?: string) => {
        setIsMobileMenuOpen(false);
        setHoveredLink(null);

        if (pathname === "/" && sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                e.preventDefault();
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
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
                        ? "py-2.5 bg-white/90 dark:bg-[#0B132B]/90 backdrop-blur-xl border-slate-200/80 dark:border-blue-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.08),_0_0_20px_rgba(37,99,235,0.12)]"
                        : "py-3.5 bg-white/70 dark:bg-[#0B132B]/70 backdrop-blur-md border-slate-200/60 dark:border-white/15 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
                )}
            >
                {/* Logo */}
                <Link href="/" onClick={(e) => handleNavClick(e, "/", "hero")} className="flex items-center">
                    <Logo width={120} height={35} className="hover:scale-[1.02] transition-transform duration-300" />
                </Link>

                {/* Desktop Navigation Links */}
                <div
                    className="hidden md:flex items-center gap-1 bg-slate-100/90 dark:bg-white/[0.06] border border-slate-200/70 dark:border-white/10 rounded-full p-1 relative"
                    onMouseLeave={() => setMenuHoveredLink(null)}
                >
                    {navLinks.map((link) => {
                        const isActive = activeLink === link.name;
                        return (
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
                                        isActive
                                            ? "text-white"
                                            : "text-slate-700 dark:text-white/80 hover:text-[#2563EB] dark:hover:text-white"
                                    )}
                                    onClick={(e) => {
                                        handleNavClick(e, link.href, link.sectionId);
                                        setActiveLink(link.name);
                                    }}
                                >
                                    <span>{link.name}</span>
                                    {link.dropdown && (
                                        <ChevronDown
                                            size={12}
                                            className={cn(
                                                "transition-transform duration-300",
                                                hoveredLink === link.name ? "rotate-180 text-[#2563EB] dark:text-blue-400" : "text-slate-400 dark:text-white/40"
                                            )}
                                        />
                                    )}
                                </Link>

                                {/* Hover Pill Background */}
                                {menuHoveredLink === link.name && !isActive && (
                                    <motion.div
                                        layoutId="nav-hover-pill"
                                        className="absolute inset-0 bg-slate-200/70 dark:bg-white/10 rounded-full z-0"
                                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                    />
                                )}

                                {/* Active Pill Highlight */}
                                {isActive && (
                                    <motion.div
                                        layoutId="nav-active-pill"
                                        className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#06B6D4] rounded-full z-0 shadow-md shadow-blue-500/25"
                                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                    />
                                )}

                                {/* Dropdown Menu */}
                                <AnimatePresence>
                                    {link.dropdown && hoveredLink === link.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 12, scale: 0.96 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 12, scale: 0.96 }}
                                            transition={{ duration: 0.2 }}
                                            style={{ backgroundColor: "#0F172A", color: "#FFFFFF" }}
                                            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 backdrop-blur-2xl border border-blue-500/40 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.95)] p-2.5 z-50 overflow-hidden"
                                        >
                                            <div className="flex flex-col gap-1.5">
                                                {link.dropdown.map((item) => (
                                                    <Link
                                                        key={item.href}
                                                        href={item.href}
                                                        style={{ color: "#FFFFFF", backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                                                        className="flex items-center justify-between px-4 py-3 rounded-xl hover:!bg-[#2563EB] !text-white group/item transition-all duration-200 border border-white/10"
                                                        onClick={() => setHoveredLink(null)}
                                                    >
                                                        <span
                                                            style={{ color: "#FFFFFF" }}
                                                            className="text-xs font-extrabold !text-white group-hover/item:!text-white transition-colors"
                                                        >
                                                            {item.name}
                                                        </span>
                                                        <ArrowRight size={14} className="text-blue-400 group-hover/item:!text-white opacity-90 -translate-x-1 group-hover/item:translate-x-0 transition-all" />
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

                {/* Right Side Controls & CTA */}
                <div className="flex items-center gap-3">
                    <Link href="/contact" className="hidden md:block">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#2563EB] via-[#0284C7] to-[#06B6D4] hover:from-[#1d4ed8] hover:to-[#0891b2] text-white rounded-full font-black text-[11px] uppercase tracking-wider shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-cyan-500/35 transition-all duration-300 border border-cyan-400/30"
                        >
                            <Zap size={12} className="fill-current text-white" />
                            Start Project
                        </motion.button>
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-slate-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.98 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        style={{ backgroundColor: "#0F172A", color: "#FFFFFF" }}
                        className="fixed inset-x-4 top-24 max-h-[82vh] overflow-y-auto backdrop-blur-2xl rounded-3xl p-6 md:hidden border border-blue-500/40 shadow-[0_30px_60px_rgba(0,0,0,0.95)] pointer-events-auto"
                    >
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => {
                                const isActive = activeLink === link.name;
                                const isDropdownOpen = openMobileDropdown === link.name;

                                return (
                                    <div key={link.name} className="flex flex-col gap-2 border-b border-white/10 pb-3 last:border-b-0">
                                        <div className="flex items-center justify-between">
                                            <Link
                                                href={link.href}
                                                style={{ color: isActive ? "#60A5FA" : "#FFFFFF" }}
                                                className="font-sora font-extrabold uppercase tracking-widest text-sm py-2 transition-colors flex-grow !text-white"
                                                onClick={(e) => {
                                                    handleNavClick(e, link.href, link.sectionId);
                                                    setActiveLink(link.name);
                                                }}
                                            >
                                                {link.name}
                                            </Link>

                                            {link.dropdown && (
                                                <button
                                                    onClick={() => setOpenMobileDropdown(isDropdownOpen ? null : link.name)}
                                                    className="p-2 text-white/70 hover:text-blue-400 transition-colors focus:outline-none"
                                                    aria-label="Toggle Submenu"
                                                >
                                                    <ChevronDown
                                                        size={18}
                                                        className={cn(
                                                            "transition-transform duration-300",
                                                            isDropdownOpen ? "rotate-180 text-blue-400" : ""
                                                        )}
                                                    />
                                                </button>
                                            )}
                                        </div>

                                        {/* Mobile Submenu Dropdown */}
                                        <AnimatePresence>
                                            {link.dropdown && isDropdownOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="flex flex-col gap-2 pl-4 border-l-2 border-blue-500/40 ml-2 my-1 overflow-hidden"
                                                >
                                                    {link.dropdown.map((item) => (
                                                        <Link
                                                            key={item.href}
                                                            href={item.href}
                                                            style={{ color: "#FFFFFF", backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                                                            className="text-xs font-extrabold uppercase tracking-wider !text-white hover:!bg-[#2563EB] transition-colors p-3 rounded-xl flex items-center justify-between group border border-white/10"
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                        >
                                                            <span style={{ color: "#FFFFFF" }}>{item.name}</span>
                                                            <ArrowRight size={12} className="text-blue-400 group-hover:!text-white opacity-80 transition-opacity" />
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}

                            <Link
                                href="/contact"
                                className="w-full mt-3"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <button className="w-full py-4 bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED] text-white rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all text-xs font-sora">
                                    Start Project <Zap size={14} fill="white" />
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
