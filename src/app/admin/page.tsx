"use client";

import { useState, useEffect } from "react";
import { auth, db } from "@/lib/firebase";
import {
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword
} from "firebase/auth";
import {
    collection,
    query,
    orderBy,
    getDocs,
    updateDoc,
    doc,
    setDoc,
    getDoc,
    deleteDoc
} from "firebase/firestore";
import {
    Lock,
    LogOut,
    Inbox,
    Settings,
    DollarSign,
    CheckCircle,
    Trash2,
    Eye,
    RefreshCw,
    X,
    Filter,
    Plus,
    Minus,
    AlertCircle,
    UserCheck
} from "lucide-react";
import Link from "next/link";

interface Lead {
    id: string;
    name: string;
    phone: string;
    email: string;
    service?: string;
    message?: string;
    type: string;
    status: string;
    createdAt?: any;
    website?: string;
    keyword?: string;
}

const defaultPlans = [
    {
        name: "Baseline Development",
        price: "Contact Us",
        period: "",
        tagline: "Ideal for emerging brands establishing a high-impact digital presence.",
        popular: false,
        accent: "text-sky-400",
        border: "border-sky-400/20",
        glow: "hover:border-sky-400/50",
        features: [
            "High-Performance 5-Page Platform",
            "100% Cross-Device Responsiveness",
            "Professional Logo & Brand Identity (Basic)",
            "Strategic SEO Indexing & Setup",
            "Secure Lead Acquisition Forms",
            "Direct WhatsApp & Social Integration",
            "Local Map & Business Profile Setup",
            "30-Day Transition Support",
        ],
        cta: "Get Instant Quote",
    },
    {
        name: "Market Acceleration",
        price: "Get Quote",
        period: "",
        tagline: "Strategic ecosystems engineered to accelerate growth and maximize conversion.",
        popular: true,
        accent: "text-neon",
        border: "border-neon/40",
        glow: "hover:border-neon",
        features: [
            "Premium Multi-Platform Custom Architecture",
            "Advanced Growth SEO (Technical & Local)",
            "Google Analytics & Search Console Logic",
            "High-Conversion Strategic Landing Pages",
            "Core Web Vitals & Speed Optimization",
            "Global Social Brand Integration",
            "Enterprise Business Email Ecosystem",
            "Priority 24/7 Strategic Support",
            "Scalable Content Management System (CMS)",
        ],
        cta: "Scale Your Business",
    },
    {
        name: "Custom Enterprise Suite",
        price: "Let's Talk",
        period: "",
        tagline: "Bespoke digital architecture tailored to complex enterprise requirements.",
        popular: false,
        accent: "text-purple-400",
        border: "border-purple-400/20",
        glow: "hover:border-purple-400/50",
        features: [
            "Unlimited Architecture & High Complexity",
            "Advanced E-Commerce & Booking Engines",
            "Total Market Dominance SEO Strategy",
            "Google & Meta Performance Ads",
            "Bespoke CRM & Dashboard Integration",
            "Full Visual Brand Identity Suite",
            "Weekly Analytics & Performance Audits",
            "Dedicated Senior Project Lead",
            "High-Security Enterprise Cloud Setup",
        ],
        cta: "Custom Enterprise Solution",
    },
];

export default function AdminPage() {
    // Auth States
    const [user, setUser] = useState<any>(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [loginLoading, setLoginLoading] = useState(false);
    const [authError, setAuthError] = useState("");

    // Active View
    const [activeTab, setActiveTab] = useState<"leads" | "popup" | "pricing" | "database">("leads");

    // Data States
    const [leads, setLeads] = useState<Lead[]>([]);
    const [leadsLoading, setLeadsLoading] = useState(true);
    const [leadFilter, setLeadFilter] = useState<string>("all");
    const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

    // Popup settings state
    const [popupConfig, setPopupConfig] = useState({
        enabled: true,
        showPoster: false,
        posterImage: "/images/special-offer.png"
    });
    const [popupSaving, setPopupSaving] = useState(false);

    // Pricing settings state
    const [pricingPlans, setPricingPlans] = useState<any[]>(defaultPlans);
    const [pricingSaving, setPricingSaving] = useState(false);

    // Database Actions message
    const [dbMessage, setDbMessage] = useState("");

    useEffect(() => {
        const checkSession = () => {
            const activeSession = sessionStorage.getItem("nanorays_admin_session");
            if (activeSession === "active") {
                setUser({ email: "admin@nanorayssolution.com" });
                fetchLeads();
                fetchSettings();
            }
        };
        checkSession();
    }, []);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoginLoading(true);
        setAuthError("");

        try {
            // Fetch settings from Firestore to check against custom credentials
            const docRef = doc(db, "settings", "global");
            const docSnap = await getDoc(docRef);
            let correctPassword = "NanoRays2026!";
            
            if (docSnap.exists()) {
                const data = docSnap.data();
                if (data.adminPassword) {
                    correctPassword = data.adminPassword;
                }
            }

            if (email === "admin@nanorayssolution.com" && password === correctPassword) {
                setUser({ email: "admin@nanorayssolution.com" });
                sessionStorage.setItem("nanorays_admin_session", "active");
                fetchLeads();
                fetchSettings();
            } else {
                setAuthError("Invalid username or password. Please try again.");
            }
        } catch (err: any) {
            console.error("Login verification failed:", err);
            setAuthError("Failed to verify credentials. Please try again.");
        } finally {
            setLoginLoading(false);
        }
    };

    const handleLogout = () => {
        setUser(null);
        sessionStorage.removeItem("nanorays_admin_session");
    };

    const handleChangePassword = async () => {
        if (!newPassword || newPassword.trim().length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }
        try {
            const docRef = doc(db, "settings", "global");
            await setDoc(docRef, { adminPassword: newPassword }, { merge: true });
            alert("Admin password updated successfully! Please use your new password next time.");
            setNewPassword("");
        } catch (err: any) {
            console.error("Failed to update password:", err);
            alert(`Failed to update password: ${err.message}`);
        }
    };

    // Fetch settings/global from Firestore
    const fetchSettings = async () => {
        try {
            const docRef = doc(db, "settings", "global");
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const data = docSnap.data();
                if (data.popup) {
                    setPopupConfig({
                        enabled: data.popup.enabled !== undefined ? data.popup.enabled : true,
                        showPoster: data.popup.showPoster !== undefined ? data.popup.showPoster : false,
                        posterImage: data.popup.posterImage || "/images/special-offer.png"
                    });
                }
                if (data.plans && Array.isArray(data.plans) && data.plans.length > 0) {
                    setPricingPlans(data.plans);
                }
            }
        } catch (err) {
            console.error("Failed to fetch settings doc:", err);
        }
    };

    // Fetch leads list from Firestore
    const fetchLeads = async () => {
        setLeadsLoading(true);
        try {
            const leadsRef = collection(db, "leads");
            const q = query(leadsRef, orderBy("createdAt", "desc"));
            const querySnapshot = await getDocs(q);
            const list: Lead[] = [];
            querySnapshot.forEach((docSnap) => {
                const data = docSnap.data();
                list.push({
                    id: docSnap.id,
                    ...data
                } as Lead);
            });
            setLeads(list);
        } catch (err) {
            console.error("Failed to fetch leads list:", err);
        } finally {
            setLeadsLoading(false);
        }
    };

    const updateLeadStatus = async (leadId: string, newStatus: string) => {
        try {
            const leadRef = doc(db, "leads", leadId);
            await updateDoc(leadRef, { status: newStatus });
            setLeads((prev) =>
                prev.map((l) => (l.id === leadId ? { ...l, status: newStatus } : l))
            );
            if (selectedLead?.id === leadId) {
                setSelectedLead((prev: any) => (prev ? { ...prev, status: newStatus } : null));
            }
        } catch (err) {
            console.error("Failed to update lead status:", err);
        }
    };

    const deleteLead = async (leadId: string) => {
        if (!confirm("Are you sure you want to permanently delete this lead?")) return;
        try {
            await deleteDoc(doc(db, "leads", leadId));
            setLeads((prev) => prev.filter((l) => l.id !== leadId));
            setSelectedLead(null);
        } catch (err) {
            console.error("Failed to delete lead:", err);
        }
    };

    const handleSavePopup = async () => {
        setPopupSaving(true);
        try {
            const docRef = doc(db, "settings", "global");
            await setDoc(docRef, { popup: popupConfig }, { merge: true });
            alert("Special Offer Popup settings saved successfully!");
        } catch (err) {
            console.error("Failed to save popup settings:", err);
            alert("Failed to save popup settings. Check Firestore write rules.");
        } finally {
            setPopupSaving(false);
        }
    };

    const handleSavePricing = async () => {
        setPricingSaving(true);
        try {
            const docRef = doc(db, "settings", "global");
            await setDoc(docRef, { plans: pricingPlans }, { merge: true });
            alert("Pricing plans updated successfully!");
        } catch (err) {
            console.error("Failed to save pricing plans:", err);
            alert("Failed to save pricing plans.");
        } finally {
            setPricingSaving(false);
        }
    };

    const handleInitializeDb = async () => {
        setDbMessage("Initializing database...");
        try {
            const docRef = doc(db, "settings", "global");
            await setDoc(docRef, {
                plans: defaultPlans,
                popup: {
                    enabled: true,
                    showPoster: false,
                    posterImage: "/images/special-offer.png"
                }
            }, { merge: true });
            setPricingPlans(defaultPlans);
            setPopupConfig({
                enabled: true,
                showPoster: false,
                posterImage: "/images/special-offer.png"
            });
            setDbMessage("✅ Settings initialized with default assets! Refresh pages to verify.");
        } catch (err: any) {
            setDbMessage(`❌ Failed initialization: ${err.message}`);
        }
    };

    const updatePricingField = (index: number, field: string, value: any) => {
        setPricingPlans((prev) => {
            const updated = [...prev];
            updated[index] = { ...updated[index], [field]: value };
            return updated;
        });
    };

    const updatePricingFeature = (planIndex: number, featureIndex: number, value: string) => {
        setPricingPlans((prev) => {
            const updated = [...prev];
            const updatedFeatures = [...updated[planIndex].features];
            updatedFeatures[featureIndex] = value;
            updated[planIndex] = { ...updated[planIndex], features: updatedFeatures };
            return updated;
        });
    };

    const addPricingFeature = (planIndex: number) => {
        setPricingPlans((prev) => {
            const updated = [...prev];
            updated[planIndex] = {
                ...updated[planIndex],
                features: [...updated[planIndex].features, "New feature item"]
            };
            return updated;
        });
    };

    const removePricingFeature = (planIndex: number, featureIndex: number) => {
        setPricingPlans((prev) => {
            const updated = [...prev];
            const updatedFeatures = updated[planIndex].features.filter((_: any, idx: number) => idx !== featureIndex);
            updated[planIndex] = { ...updated[planIndex], features: updatedFeatures };
            return updated;
        });
    };

    // Filter Leads
    const filteredLeads = leads.filter((l) => {
        if (leadFilter === "all") return true;
        if (leadFilter === "contact") return l.type === "Contact Form";
        if (leadFilter === "popup") return l.type === "Popup Offer Enquiry";
        if (leadFilter === "audit") return l.type?.toLowerCase().includes("audit") || l.website !== undefined;
        return true;
    });

    if (!user) {
        return (
            <main className="min-h-screen bg-black flex items-center justify-center font-sora px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 blur-[130px] rounded-full" />
                
                <div className="max-w-md w-full bg-neutral-900/60 backdrop-blur-md border border-white/10 rounded-[32px] p-8 md:p-10 relative z-10 shadow-2xl">
                    <div className="text-center mb-8">
                        <div className="inline-flex w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 items-center justify-center text-purple-400 mb-4">
                            <Lock size={22} />
                        </div>
                        <h1 className="text-2xl font-black text-white">NanoRays Admin Control</h1>
                        <p className="text-white/40 text-xs font-bold mt-2 uppercase tracking-widest">Sign in to manage your system</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-white/60 uppercase tracking-wider block">Administrator Email</label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="admin@nanorayssolution.com"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white text-sm focus:border-purple-500/50 outline-none transition-all placeholder:text-white/20"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-white/60 uppercase tracking-wider block">Password</label>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••••••"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white text-sm focus:border-purple-500/50 outline-none transition-all placeholder:text-white/20"
                            />
                        </div>

                        {authError && (
                            <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold rounded-2xl text-center">
                                {authError}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loginLoading}
                            className="w-full py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-lg shadow-purple-600/20 flex items-center justify-center gap-2"
                        >
                            {loginLoading ? "Verifying Keys..." : "Access Dashboard"}
                        </button>
                    </form>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#070707] text-white font-sora flex">
            {/* Sidebar */}
            <aside className="w-72 border-r border-white/5 bg-black/60 backdrop-blur-md flex flex-col justify-between p-6 h-screen sticky top-0">
                <div>
                    {/* Brand */}
                    <div className="flex items-center gap-3 px-3 py-4 mb-8 border-b border-white/5">
                        <div className="w-8 h-8 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                            <Settings size={16} className="text-purple-400" />
                        </div>
                        <div>
                            <h2 className="text-sm font-black tracking-tight leading-none">NanoRays Panel</h2>
                            <span className="text-[9px] font-black text-white/40 uppercase tracking-widest block mt-1">Version 2.0</span>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="space-y-2">
                        <button
                            onClick={() => setActiveTab("leads")}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold transition-all ${
                                activeTab === "leads"
                                    ? "bg-purple-600 text-white"
                                    : "text-white/40 hover:text-white hover:bg-white/5"
                            }`}
                        >
                            <Inbox size={16} /> Leads Inbox
                            {leads.filter(l => l.status === "new").length > 0 && (
                                <span className="ml-auto bg-red-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full">
                                    {leads.filter(l => l.status === "new").length}
                                </span>
                            )}
                        </button>

                        <button
                            onClick={() => setActiveTab("popup")}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold transition-all ${
                                activeTab === "popup"
                                    ? "bg-purple-600 text-white"
                                    : "text-white/40 hover:text-white hover:bg-white/5"
                            }`}
                        >
                            <Settings size={16} /> Promotional Popup
                        </button>

                        <button
                            onClick={() => setActiveTab("pricing")}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold transition-all ${
                                activeTab === "pricing"
                                    ? "bg-purple-600 text-white"
                                    : "text-white/40 hover:text-white hover:bg-white/5"
                            }`}
                        >
                            <DollarSign size={16} /> Pricing Plans
                        </button>

                        <button
                            onClick={() => setActiveTab("database")}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold transition-all ${
                                activeTab === "database"
                                    ? "bg-purple-600 text-white"
                                    : "text-white/40 hover:text-white hover:bg-white/5"
                            }`}
                        >
                            <RefreshCw size={16} /> System Database
                        </button>
                    </nav>
                </div>

                {/* Footer */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-2xl">
                        <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-xs font-black text-white">
                            A
                        </div>
                        <div className="truncate">
                            <span className="text-[10px] font-bold text-white block">Administrator</span>
                            <span className="text-[9px] font-bold text-white/40 block truncate">{user.email}</span>
                        </div>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="w-full py-3 bg-red-950/20 border border-red-500/10 hover:bg-red-900/10 text-red-400 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 transition-all"
                    >
                        <LogOut size={14} /> Terminate Session
                    </button>
                </div>
            </aside>

            {/* View Port */}
            <div className="flex-1 p-8 md:p-12 overflow-y-auto max-h-screen">
                {/* ── LEADS INBOX VIEW ────────────────────────────────────── */}
                {activeTab === "leads" && (
                    <div className="space-y-8">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div>
                                <h1 className="text-3xl font-black font-sora tracking-tight">Leads Inbox</h1>
                                <p className="text-white/40 text-xs font-bold uppercase tracking-widest mt-1">Review contact form entries & AI audit requests</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={fetchLeads}
                                    className="px-4 py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 text-white text-xs font-bold rounded-xl flex items-center gap-2 transition-all"
                                >
                                    <RefreshCw size={12} className={leadsLoading ? "animate-spin" : ""} /> Sync Leads
                                </button>
                                <div className="flex items-center bg-white/5 border border-white/10 rounded-xl px-3 py-1">
                                    <Filter size={12} className="text-white/40 mr-2" />
                                    <select
                                        value={leadFilter}
                                        onChange={(e) => setLeadFilter(e.target.value)}
                                        className="bg-transparent text-xs font-bold outline-none text-white border-none py-1.5 cursor-pointer"
                                    >
                                        <option value="all" className="bg-neutral-900">All Form Sources</option>
                                        <option value="contact" className="bg-neutral-900">Contact Forms Only</option>
                                        <option value="popup" className="bg-neutral-900">Popup Inquiries Only</option>
                                        <option value="audit" className="bg-neutral-900">AI Search Audits Only</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8 items-start">
                            {/* Table */}
                            <div className="lg:col-span-2 glass-dark border border-white/5 rounded-3xl overflow-hidden shadow-xl">
                                {leadsLoading ? (
                                    <div className="p-20 text-center text-white/40 text-xs font-bold flex flex-col items-center gap-3">
                                        <RefreshCw className="animate-spin w-8 h-8 text-purple-500" />
                                        Loading database records...
                                    </div>
                                ) : filteredLeads.length === 0 ? (
                                    <div className="p-20 text-center text-white/40 text-xs font-bold">
                                        No leads found in database.
                                    </div>
                                ) : (
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left border-collapse">
                                            <thead>
                                                <tr className="border-b border-white/5 bg-white/5 text-[10px] font-black uppercase tracking-wider text-white/60">
                                                    <th className="p-5">Sender</th>
                                                    <th className="p-5">Type / Goal</th>
                                                    <th className="p-5">Status</th>
                                                    <th className="p-5 text-right">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {filteredLeads.map((l) => (
                                                    <tr
                                                        key={l.id}
                                                        onClick={() => setSelectedLead(l)}
                                                        className={`border-b border-white/5 hover:bg-white/5 cursor-pointer transition-all ${
                                                            selectedLead?.id === l.id ? "bg-white/5" : ""
                                                        }`}
                                                    >
                                                        <td className="p-5">
                                                            <div className="font-bold text-sm text-white">{l.name}</div>
                                                            <div className="text-white/40 text-xs mt-1 font-bold">{l.phone}</div>
                                                        </td>
                                                        <td className="p-5">
                                                            <span className={`inline-block px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-wider ${
                                                                l.type === "Contact Form"
                                                                    ? "bg-sky-500/10 text-sky-400 border border-sky-500/25"
                                                                    : l.type === "Popup Offer Enquiry"
                                                                    ? "bg-amber-500/10 text-amber-400 border border-amber-500/25"
                                                                    : "bg-purple-500/10 text-purple-400 border border-purple-500/25"
                                                            }`}>
                                                                {l.type === "Contact Form"
                                                                    ? "Contact Form"
                                                                    : l.type === "Popup Offer Enquiry"
                                                                    ? "Promo Offer"
                                                                    : "AI Search Audit"}
                                                            </span>
                                                            <div className="text-white/60 text-xs mt-1 truncate max-w-xs">{l.service || l.website}</div>
                                                        </td>
                                                        <td className="p-5">
                                                            <span className={`inline-block px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest ${
                                                                l.status === "new"
                                                                    ? "bg-red-500/10 text-red-400 border border-red-500/20"
                                                                    : l.status === "contacted"
                                                                    ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                                                                    : "bg-green-500/10 text-green-400 border border-green-500/20"
                                                            }`}>
                                                                {l.status}
                                                            </span>
                                                        </td>
                                                        <td className="p-5 text-right" onClick={(e) => e.stopPropagation()}>
                                                            <div className="flex items-center justify-end gap-2">
                                                                <button
                                                                    onClick={() => setSelectedLead(l)}
                                                                    className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-white/60 hover:text-white transition-all"
                                                                    title="View Details"
                                                                >
                                                                    <Eye size={12} />
                                                                </button>
                                                                <button
                                                                    onClick={() => deleteLead(l.id)}
                                                                    className="p-2 bg-red-500/10 hover:bg-red-500/20 rounded-lg text-red-400 transition-all"
                                                                    title="Delete"
                                                                >
                                                                    <Trash2 size={12} />
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>

                            {/* Details Panel */}
                            <div className="glass-dark border border-white/5 rounded-3xl p-6 shadow-xl space-y-6">
                                <h3 className="text-lg font-black leading-none">Lead Details</h3>
                                
                                {selectedLead ? (
                                    <div className="space-y-6 text-sm">
                                        <div className="space-y-1">
                                            <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Client Name</span>
                                            <div className="font-bold text-white text-base">{selectedLead.name}</div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1">
                                                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Phone Number</span>
                                                <a href={`tel:${selectedLead.phone}`} className="font-bold text-purple-400 block hover:underline">{selectedLead.phone}</a>
                                            </div>
                                            <div className="space-y-1">
                                                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Email Address</span>
                                                <a href={`mailto:${selectedLead.email}`} className="font-bold text-purple-400 block hover:underline truncate">{selectedLead.email}</a>
                                            </div>
                                        </div>

                                        {selectedLead.website && (
                                            <div className="space-y-1">
                                                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Website URL (AI Audit)</span>
                                                <a href={`https://${selectedLead.website}`} target="_blank" rel="noreferrer" className="font-mono text-purple-400 block hover:underline">{selectedLead.website}</a>
                                            </div>
                                        )}

                                        {selectedLead.keyword && (
                                            <div className="space-y-1">
                                                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Target Keyword</span>
                                                <div className="font-bold text-white">{selectedLead.keyword}</div>
                                            </div>
                                        )}

                                        {selectedLead.service && (
                                            <div className="space-y-1">
                                                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Requested Service</span>
                                                <div className="font-bold text-white">{selectedLead.service}</div>
                                            </div>
                                        )}

                                        {selectedLead.message && (
                                            <div className="space-y-1">
                                                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Custom Message</span>
                                                <div className="bg-white/5 border border-white/15 rounded-xl p-4 text-white/80 leading-relaxed font-inter text-xs max-h-40 overflow-y-auto whitespace-pre-wrap">
                                                    {selectedLead.message}
                                                </div>
                                            </div>
                                        )}

                                        <div className="space-y-2 pt-4 border-t border-white/5">
                                            <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block">Update Status</span>
                                            <div className="flex gap-2">
                                                {["new", "contacted", "closed"].map((st) => (
                                                    <button
                                                        key={st}
                                                        onClick={() => updateLeadStatus(selectedLead.id, st)}
                                                        className={`flex-1 py-2 text-[10px] font-black uppercase tracking-wider rounded-lg border transition-all ${
                                                            selectedLead.status === st
                                                                ? "bg-purple-600 border-purple-500 text-white"
                                                                : "bg-white/5 border-white/10 text-white/60 hover:text-white"
                                                        }`}
                                                    >
                                                        {st}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="p-12 text-center text-white/30 text-xs font-bold">
                                        Select a lead from the list to review details.
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* ── POPUP CONFIGURATION VIEW ────────────────────────────────────── */}
                {activeTab === "popup" && (
                    <div className="space-y-8 max-w-2xl">
                        <div>
                            <h1 className="text-3xl font-black font-sora tracking-tight">Promotional Popup</h1>
                            <p className="text-white/40 text-xs font-bold uppercase tracking-widest mt-1">Control the display status, layout type, and images for the special offer pop-up</p>
                        </div>

                        <div className="glass-dark border border-white/5 rounded-3xl p-8 space-y-6 shadow-xl">
                            {/* Enable Checkbox */}
                            <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl">
                                <div>
                                    <span className="text-sm font-bold text-white block">Enable Offer Popup</span>
                                    <span className="text-[10px] font-bold text-white/40 block mt-1">Toggle whether clients see the offer modal</span>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={popupConfig.enabled}
                                        onChange={(e) => setPopupConfig({ ...popupConfig, enabled: e.target.checked })}
                                        className="sr-only peer"
                                    />
                                    <div className="w-11 h-6 bg-neutral-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                                </label>
                            </div>

                            {/* Poster Mode Switch */}
                            <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl">
                                <div>
                                    <span className="text-sm font-bold text-white block">Show Poster Image Directly</span>
                                    <span className="text-[10px] font-bold text-white/40 block mt-1">If enabled, shows the poster first instead of the direct form</span>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={popupConfig.showPoster}
                                        onChange={(e) => setPopupConfig({ ...popupConfig, showPoster: e.target.checked })}
                                        className="sr-only peer"
                                    />
                                    <div className="w-11 h-6 bg-neutral-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                                </label>
                            </div>

                            {/* Poster Image URL */}
                            {popupConfig.showPoster && (
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-white/60 uppercase tracking-wider block">Poster Image Asset Path</label>
                                    <input
                                        type="text"
                                        value={popupConfig.posterImage}
                                        onChange={(e) => setPopupConfig({ ...popupConfig, posterImage: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white text-sm focus:border-purple-500/50 outline-none transition-all"
                                        placeholder="/images/special-offer.png"
                                    />
                                    <span className="text-[10px] font-bold text-white/30 block">Use local path or external URL starting with http:// or https://</span>
                                </div>
                            )}

                            <button
                                onClick={handleSavePopup}
                                disabled={popupSaving}
                                className="px-6 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-lg shadow-purple-600/20 flex items-center justify-center gap-2"
                            >
                                {popupSaving ? "Saving Configuration..." : "Save Config Settings"}
                            </button>
                        </div>
                    </div>
                )}

                {/* ── PRICING PLANS VIEW ────────────────────────────────────── */}
                {activeTab === "pricing" && (
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-3xl font-black font-sora tracking-tight">Pricing Plan Packages</h1>
                            <p className="text-white/40 text-xs font-bold uppercase tracking-widest mt-1">Configure pricing text, tags, and plan feature arrays</p>
                        </div>

                        <div className="space-y-8">
                            {pricingPlans.map((plan, idx) => (
                                <div key={idx} className="glass-dark border border-white/5 rounded-3xl p-8 space-y-6 shadow-xl relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-2 h-full bg-purple-600" />
                                    
                                    <h3 className="text-xl font-black text-purple-400">Package {idx + 1}: {plan.name}</h3>

                                    <div className="grid md:grid-cols-3 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-white/60 uppercase tracking-wider block">Plan Name</label>
                                            <input
                                                type="text"
                                                value={plan.name}
                                                onChange={(e) => updatePricingField(idx, "name", e.target.value)}
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white text-sm focus:border-purple-500/50 outline-none transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-white/60 uppercase tracking-wider block">Price Value</label>
                                            <input
                                                type="text"
                                                value={plan.price}
                                                onChange={(e) => updatePricingField(idx, "price", e.target.value)}
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white text-sm focus:border-purple-500/50 outline-none transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-white/60 uppercase tracking-wider block">Tag / Call To Action text</label>
                                            <input
                                                type="text"
                                                value={plan.cta}
                                                onChange={(e) => updatePricingField(idx, "cta", e.target.value)}
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white text-sm focus:border-purple-500/50 outline-none transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-white/60 uppercase tracking-wider block">Tagline Description</label>
                                        <input
                                            type="text"
                                            value={plan.tagline}
                                            onChange={(e) => updatePricingField(idx, "tagline", e.target.value)}
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white text-sm focus:border-purple-500/50 outline-none transition-all"
                                        />
                                    </div>

                                    {/* Features list */}
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <label className="text-xs font-bold text-white/60 uppercase tracking-wider block">Feature List Details</label>
                                            <button
                                                onClick={() => addPricingFeature(idx)}
                                                className="px-3 py-1 bg-white/5 border border-white/10 hover:bg-white/10 rounded-lg text-white/80 text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 transition-all"
                                            >
                                                <Plus size={10} /> Add Feature
                                            </button>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            {plan.features.map((feature: string, fIdx: number) => (
                                                <div key={fIdx} className="flex items-center gap-2">
                                                    <input
                                                        type="text"
                                                        value={feature}
                                                        onChange={(e) => updatePricingFeature(idx, fIdx, e.target.value)}
                                                        className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white text-xs focus:border-purple-500/50 outline-none transition-all"
                                                    />
                                                    <button
                                                        onClick={() => removePricingFeature(idx, fIdx)}
                                                        className="p-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg transition-all"
                                                    >
                                                        <Minus size={12} />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className="flex justify-end">
                                <button
                                    onClick={handleSavePricing}
                                    disabled={pricingSaving}
                                    className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-lg shadow-purple-600/20 flex items-center justify-center gap-2"
                                >
                                    {pricingSaving ? "Updating Packages..." : "Save Pricing Packages"}
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* ── DATABASE INITIALIZATION VIEW ────────────────────────────────────── */}
                {activeTab === "database" && (
                    <div className="space-y-8 max-w-xl">
                        <div>
                            <h1 className="text-3xl font-black font-sora tracking-tight">System Database</h1>
                            <p className="text-white/40 text-xs font-bold uppercase tracking-widest mt-1">Configure baseline values, reset settings, and manage storage parameters</p>
                        </div>

                        <div className="glass-dark border border-white/5 rounded-3xl p-8 space-y-6 shadow-xl">
                            <div className="flex gap-4 p-4 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-2xl">
                                <AlertCircle size={20} className="shrink-0 mt-0.5" />
                                <div className="text-xs leading-relaxed">
                                    <strong>Database Setup</strong>: If this is your first time loading the website dashboard or if you have modified dynamic modules, use the button below to initialize the Firestore settings documents with their default variables.
                                </div>
                            </div>

                            <div className="space-y-4 pt-4">
                                <button
                                    onClick={handleInitializeDb}
                                    className="w-full py-4 bg-neutral-900 border border-purple-500/20 hover:border-purple-500/40 hover:bg-purple-500/10 text-white rounded-2xl font-black uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2"
                                >
                                    Initialize Settings Data
                                </button>

                                {dbMessage && (
                                    <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-center text-xs font-bold font-mono">
                                        {dbMessage}
                                    </div>
                                )}
                            </div>

                            {/* Password Changer */}
                            <div className="space-y-4 pt-6 border-t border-white/5">
                                <div>
                                    <span className="text-sm font-bold text-white block">Change Admin Password</span>
                                    <span className="text-[10px] font-bold text-white/40 block mt-1">Set a new password for dashboard login access</span>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-white/60 uppercase tracking-wider block">New Password</label>
                                    <input
                                        type="password"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-white text-sm focus:border-purple-500/50 outline-none transition-all placeholder:text-white/20"
                                        placeholder="••••••••••••"
                                    />
                                </div>
                                <button
                                    onClick={handleChangePassword}
                                    className="w-full py-3.5 bg-purple-600 hover:bg-purple-500 text-white rounded-2xl font-black uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2"
                                >
                                    Update Password
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
