"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, ArrowRight, Bot, LayoutDashboard, Database, Workflow, BarChart3, CreditCard, Sparkles, Send, RefreshCw } from "lucide-react";
import Link from "next/link";

interface Message {
    id: string;
    sender: "bot" | "user";
    text: string;
    choices?: string[];
}

function ChatSimulator() {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            sender: "bot",
            text: "Welcome! 👋 I am the NanoRays Lead Agent. Let's design a custom package for your business. What is your name?"
        }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [step, setStep] = useState(0); // 0: Name, 1: Project Type, 2: Contact, 3: Completed
    const [leadData, setLeadData] = useState({
        name: "",
        projectType: "",
        contact: ""
    });
    const [isTyping, setIsTyping] = useState(false);
    const chatEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to the bottom of the messages list
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isTyping]);

    const simulateBotTyping = (text: string, delay = 1000, nextAction?: () => void) => {
        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            setMessages(prev => [
                ...prev,
                { id: Math.random().toString(), sender: "bot", text }
            ]);
            if (nextAction) nextAction();
        }, delay);
    };

    const handleChoiceClick = (choice: string) => {
        // Add User message
        setMessages(prev => [
            ...prev,
            { id: Math.random().toString(), sender: "user", text: choice }
        ]);

        setLeadData(prev => ({ ...prev, projectType: choice }));
        setStep(2);

        simulateBotTyping(
            `Excellent selection! Custom ${choice} will elevate your operations. Lastly, what is your Email or WhatsApp number so we can reach you?`
        );
    };

    const handleSendText = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const text = inputValue.trim();
        setInputValue("");

        // Add User message
        setMessages(prev => [
            ...prev,
            { id: Math.random().toString(), sender: "user", text }
        ]);

        if (step === 0) {
            setLeadData(prev => ({ ...prev, name: text }));
            setStep(1);
            simulateBotTyping(
                `Nice to meet you, ${text}! What type of tech solution does your business need most?`,
                1200,
                () => {
                    // Update the last bot message to include multiple-choice buttons
                    setMessages(prev => {
                        const updated = [...prev];
                        if (updated.length > 0) {
                            updated[updated.length - 1].choices = [
                                "Websites & Custom Apps",
                                "AI Chatbots & Agent Platform",
                                "CRM & Management Software",
                                "Business Workflow Automation"
                            ];
                        }
                        return updated;
                    });
                }
            );
        } else if (step === 2) {
            setLeadData(prev => ({ ...prev, contact: text }));
            setStep(3);
            simulateBotTyping(
                `Perfect! I have generated your custom package details. Click the button below to send this directly to our team via WhatsApp!`
            );
        }
    };

    const handleReset = () => {
        setMessages([
            {
                id: "1",
                sender: "bot",
                text: "Welcome! 👋 I am the NanoRays Lead Agent. Let's design a custom package for your business. What is your name?"
            }
        ]);
        setInputValue("");
        setStep(0);
        setLeadData({ name: "", projectType: "", contact: "" });
    };

    // Construct custom pre-filled message URL for WhatsApp
    const getWhatsAppUrl = () => {
        const text = `Hi NanoRays! I used your Interactive Lead Gen AI Agent on your website. Here are my details:
- Name: ${leadData.name}
- Project Need: ${leadData.projectType}
- Contact Details: ${leadData.contact}
Please get in touch with me to discuss our project!`;
        return `https://wa.me/919497669317?text=${encodeURIComponent(text)}`;
    };

    return (
        <div className="flex flex-col h-[400px] bg-slate-900/60">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
                {messages.map((msg) => (
                    <div key={msg.id} className="flex flex-col">
                        <div className={`flex ${msg.sender === "bot" ? "justify-start" : "justify-end"} items-start gap-2.5`}>
                            {msg.sender === "bot" && (
                                <div className="w-7 h-7 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center font-bold text-purple-300 text-[10px] shrink-0 mt-0.5">
                                    NR
                                </div>
                            )}
                            <div
                                className={`max-w-[80%] rounded-2xl px-4 py-2.5 font-medium leading-relaxed ${
                                    msg.sender === "bot"
                                        ? "bg-slate-800/80 text-slate-100 border border-slate-700/50 rounded-tl-none"
                                        : "bg-purple-600 text-white rounded-tr-none shadow-lg shadow-purple-500/20"
                                }`}
                            >
                                {msg.text}
                            </div>
                        </div>

                        {/* Render Multiple Choices if present */}
                        {msg.sender === "bot" && msg.choices && (
                            <div className="ml-9 mt-3 flex flex-wrap gap-2">
                                {msg.choices.map((choice) => (
                                    <button
                                        key={choice}
                                        onClick={() => handleChoiceClick(choice)}
                                        className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-purple-950/80 hover:text-purple-300 border border-slate-700 hover:border-purple-500/40 text-xs font-bold text-slate-300 transition-all active:scale-95"
                                    >
                                        {choice}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                ))}

                {/* Animated Typing Indicator */}
                {isTyping && (
                    <div className="flex justify-start items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center font-bold text-purple-300 text-[10px] shrink-0">
                            NR
                        </div>
                        <div className="bg-slate-800/80 border border-slate-700/50 rounded-2xl rounded-tl-none px-4 py-3 flex gap-1">
                            <span className="w-2 h-2 rounded-full bg-purple-400 animate-bounce [animation-delay:-0.3s]" />
                            <span className="w-2 h-2 rounded-full bg-purple-400 animate-bounce [animation-delay:-0.15s]" />
                            <span className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" />
                        </div>
                    </div>
                )}

                <div ref={chatEndRef} />
            </div>

            {/* Input & Call-to-Actions Area */}
            <div className="p-4 border-t border-slate-800/80 bg-slate-950/40">
                {step === 3 ? (
                    <div className="flex flex-col sm:flex-row gap-2.5 w-full">
                        <a
                            href={getWhatsAppUrl()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-emerald-500/10"
                        >
                            Send Lead to WhatsApp 🚀
                        </a>
                        <button
                            onClick={handleReset}
                            className="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-95"
                        >
                            <RefreshCw size={14} /> Reset
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSendText} className="flex gap-2">
                        <input
                            type="text"
                            disabled={step === 1 || isTyping}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder={
                                step === 1
                                    ? "Select an option above..."
                                    : step === 0
                                    ? "Enter your name..."
                                    : "Enter your phone or email..."
                            }
                            className="flex-1 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white text-sm placeholder-slate-500 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                        <button
                            type="submit"
                            disabled={!inputValue.trim() || step === 1 || isTyping}
                            className="p-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:bg-slate-800 text-white disabled:text-slate-500 transition-colors flex items-center justify-center shrink-0"
                        >
                            <Send size={16} />
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}

const modules = [
    { name: "AI Agent", icon: Bot, desc: "Autonomous 24/7 client assistant & lead qualifier", color: "text-[#7C3AED]", bg: "bg-purple-50", border: "border-purple-100" },
    { name: "Dashboard", icon: LayoutDashboard, desc: "Real-time analytics & business control panel", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
    { name: "CRM Engine", icon: Database, desc: "Centralized customer data & pipeline management", color: "text-cyan-600", bg: "bg-cyan-50", border: "border-cyan-100" },
    { name: "Automation", icon: Workflow, desc: "Instant trigger-action workflow pipelines", color: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-100" },
    { name: "Analytics", icon: BarChart3, desc: "Predictive insights & operational reporting", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
    { name: "Payments", icon: CreditCard, desc: "Automated billing & SaaS subscription gateways", color: "text-rose-600", bg: "bg-rose-50", border: "border-rose-100" },
];

const exampleApps = [
    "AI SaaS Platforms",
    "AI Business Platforms",
    "AI Dashboards",
    "AI Assistants & Agents",
    "AI-Powered Web Applications",
    "AI Workflow Automation Platforms"
];

export default function AIPlatformSpotlight() {
    return (
        <motion.section
            initial={{ opacity: 0.9, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            id="ai-platform"
            className="dark py-24 relative overflow-hidden bg-[#0A0F1E] text-white rounded-t-[3rem] md:rounded-t-[4rem] shadow-[0_-30px_70px_rgba(0,0,0,0.4)] border-t border-purple-500/30 z-35"
        >
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-600/15 blur-[160px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-600/15 blur-[160px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header Badge */}
                <div className="flex flex-col items-center text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-[11px] font-black uppercase tracking-[0.25em] mb-4 backdrop-blur-md shadow-lg shadow-purple-500/10">
                        <Sparkles size={14} className="text-purple-400" />
                        Signature Core Capability
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-sora tracking-tight text-white mb-6 max-w-4xl">
                        AI Platform Development — <br className="hidden md:block" />
                        <span className="bg-gradient-to-r from-purple-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
                            Turn your AI idea into a real digital product.
                        </span>
                    </h2>

                    <p className="text-slate-300 text-base md:text-lg font-medium max-w-3xl leading-relaxed">
                        Build AI-powered platforms, SaaS products, business applications, dashboards, and intelligent workflows designed specifically around your operational requirements.
                    </p>
                </div>

                {/* Animated Connection Flow Architecture */}
                <div className="mb-20 p-8 md:p-12 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
                    <div className="text-center mb-10">
                        <span className="text-xs font-black uppercase tracking-widest text-purple-400">
                            Transformation Pipeline
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
                        {[
                            { step: "01", title: "IDEA", sub: "Concept & Logic", color: "from-blue-500 to-indigo-600" },
                            { step: "02", title: "AI ENGINE", sub: "LLM & Custom Models", color: "from-purple-500 to-fuchsia-600" },
                            { step: "03", title: "PLATFORM", sub: "UI/UX & Dashboard", color: "from-cyan-500 to-blue-600" },
                            { step: "04", title: "BUSINESS", sub: "Growth & Automation", color: "from-emerald-500 to-teal-600" },
                        ].map((item, idx) => (
                            <div key={idx} className="relative group">
                                <div className="p-6 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-purple-400/50 transition-all duration-300 flex flex-col items-center text-center">
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">
                                        STAGE {item.step}
                                    </span>
                                    <h3 className={`text-2xl font-black font-sora bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-1`}>
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-slate-400 font-medium">{item.sub}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Interactive Chatbot Automation Simulator ───────────────────────────── */}
                <div className="mb-20">
                    <div className="text-center mb-10">
                        <span className="text-xs font-black uppercase tracking-widest text-cyan-400 block mb-2">
                            Interactive Live Experience
                        </span>
                        <h3 className="text-3xl font-black font-sora text-white">
                            Try Our Live Lead Generation AI Agent
                        </h3>
                        <p className="text-slate-400 text-sm max-w-2xl mx-auto mt-2 font-medium">
                            Experience firsthand how we automate customer acquisition. Complete the short interactive chat below to send your project details directly to our WhatsApp.
                        </p>
                    </div>

                    <div className="max-w-xl mx-auto rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-xl">
                        {/* Chat Header */}
                        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800/80 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-cyan-500 flex items-center justify-center font-black text-white text-sm">
                                        NR
                                    </div>
                                    <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-slate-950" />
                                </div>
                                <div>
                                    <div className="text-sm font-black text-white flex items-center gap-1.5">
                                        NanoRays AI Agent <span className="text-[9px] bg-purple-500/20 text-purple-300 px-1.5 py-0.5 rounded-full font-black uppercase tracking-wider">Lead Gen</span>
                                    </div>
                                    <div className="text-[10px] text-slate-400 font-medium">Active & qualifying leads 24/7</div>
                                </div>
                            </div>
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                        </div>

                        {/* Chat Body */}
                        <ChatSimulator />
                    </div>
                </div>

                {/* Floating Interactive Modules Grid */}
                <div className="mb-16">
                    <h3 className="text-2xl font-black font-sora text-white text-center mb-10">
                        Modular AI Capabilities We Build
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {modules.map((m, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-purple-500/40 hover:bg-white/[0.07] transition-all duration-300 group cursor-pointer"
                            >
                                <div className="flex items-center gap-4 mb-3">
                                    <div className={`p-3 rounded-xl ${m.bg} ${m.border} border ${m.color}`}>
                                        <m.icon size={22} />
                                    </div>
                                    <h4 className="text-lg font-black font-sora text-white group-hover:text-purple-300 transition-colors">
                                        {m.name}
                                    </h4>
                                </div>
                                <p className="text-slate-400 text-sm font-medium leading-relaxed">
                                    {m.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Example Product Pills & CTA */}
                <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-r from-purple-950/60 via-blue-950/60 to-purple-950/60 border border-purple-500/30 flex flex-col lg:flex-row items-center justify-between gap-8 backdrop-blur-xl">
                    <div className="max-w-2xl">
                        <h4 className="text-xl font-black font-sora text-white mb-3">
                            What AI Product Are You Planning To Build?
                        </h4>
                        <div className="flex flex-wrap gap-2.5">
                            {exampleApps.map((app, idx) => (
                                <span key={idx} className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-slate-200 text-xs font-bold">
                                    {app}
                                </span>
                            ))}
                        </div>
                    </div>

                    <Link
                        href="/contact"
                        className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-extrabold text-xs uppercase tracking-widest shadow-xl shadow-purple-500/25 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 whitespace-nowrap"
                    >
                        <span>Build Your AI Product</span>
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </motion.section>
    );
}
