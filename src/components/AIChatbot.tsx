"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, MessageCircle } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface Message {
    id: string;
    text: string;
    sender: "ai" | "user";
    timestamp: Date;
    options?: string[];
}

export default function AIChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            text: "Hi! 👋 Welcome to NanoRays. I'm here to help you. What are you looking for today?",
            sender: "ai",
            timestamp: new Date(),
            options: ["View Our Services", "Get a Free Quote", "Talk to Our Team"]
        }
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const addAIMessage = (text: string, options?: string[]) => {
        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            setMessages(prev => [...prev, {
                id: Date.now().toString(),
                text,
                sender: "ai",
                timestamp: new Date(),
                options
            }]);
        }, 1200);
    };

    const handleOptionClick = (option: string) => {
        const userMsg: Message = {
            id: Date.now().toString(),
            text: option,
            sender: "user",
            timestamp: new Date()
        };
        setMessages(prev => [...prev, userMsg]);

        if (option.includes("Services")) {
            addAIMessage(
                "We offer a full range of digital services! Which one interests you?",
                ["Website Design", "SEO & Google Ranking", "Digital Marketing", "Logo & Branding", "Poster Design", "Website Maintenance"]
            );
        } else if (option.includes("Quote") || option.includes("Free")) {
            addAIMessage(
                "Great! To give you the best quote, could you tell us what service you need?",
                ["Website", "SEO", "Marketing", "Branding / Logo", "Poster Design", "Other"]
            );
        } else if (option.includes("Team") || option.includes("Talk") || option.includes("Human")) {
            addAIMessage("Connecting you to our team on WhatsApp right now! 🚀");
            setTimeout(() => {
                window.open("https://wa.me/918921624007?text=Hi+NanoRays!+I+need+more+information.", "_blank");
            }, 1500);
        } else if (option.includes("Website")) {
            addAIMessage(
                "We build professional, fast, mobile-ready websites starting from ₹4,999. Would you like to talk to our team?",
                ["Yes, Contact Team", "See More Services", "Back to Menu"]
            );
        } else if (option.includes("SEO")) {
            addAIMessage(
                "Our SEO service helps your business rank on the first page of Google. Packages start from ₹2,999/month. Interested?",
                ["Yes, Contact Team", "See More Services", "Back to Menu"]
            );
        } else if (option.includes("Marketing")) {
            addAIMessage(
                "We manage Instagram, Facebook, and Google Ads to get you real leads. Packages from ₹3,999/month. Want to know more?",
                ["Yes, Contact Team", "See More Services", "Back to Menu"]
            );
        } else if (option.includes("Branding") || option.includes("Logo")) {
            addAIMessage(
                "We design professional logos and full brand identities. Logo packages from ₹999. Shall we get started?",
                ["Yes, Contact Team", "See More Services", "Back to Menu"]
            );
        } else if (option.includes("Poster")) {
            addAIMessage(
                "We design stunning festival, promotional, and social media posters. Starting from ₹299 per poster. Interested?",
                ["Yes, Contact Team", "See More Services", "Back to Menu"]
            );
        } else if (option.includes("Maintenance")) {
            addAIMessage(
                "We provide monthly website care — updates, backups, and support. Plans from ₹999/month. Want details?",
                ["Yes, Contact Team", "Back to Menu"]
            );
        } else if (option.includes("Contact Team") || option.includes("Yes,")) {
            addAIMessage("Perfect! Opening WhatsApp to connect you with our team. We'll respond within 1 hour! 🎉");
            setTimeout(() => {
                window.open("https://wa.me/918921624007?text=Hi+NanoRays!+I+am+interested+in+your+services.", "_blank");
            }, 1500);
        } else if (option.includes("Back") || option.includes("Menu")) {
            addAIMessage(
                "Sure! What would you like to do next?",
                ["View Our Services", "Get a Free Quote", "Talk to Our Team"]
            );
        } else {
            addAIMessage(
                "Got it! Our team can help you with that. Would you like to connect with us directly?",
                ["Yes, Contact Team", "Back to Menu"]
            );
        }
    };

    const handleSend = () => {
        if (!inputValue.trim()) return;
        const userMsg: Message = {
            id: Date.now().toString(),
            text: inputValue,
            sender: "user",
            timestamp: new Date()
        };
        setMessages(prev => [...prev, userMsg]);
        setInputValue("");
        addAIMessage(
            "Thanks for your message! The best way to get a quick answer is to chat with our team directly on WhatsApp.",
            ["Open WhatsApp", "Back to Menu"]
        );
    };

    return (
        <>
            {/* Toggle Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                initial={{ scale: 0, opacity: 0, y: 0 }}
                animate={{ scale: 1, opacity: 1, y: [0, -12, 0] }}
                transition={{
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                    default: { duration: 0.5 }
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="fixed bottom-8 right-8 z-[100] w-14 h-14 bg-black border border-neon/50 text-neon rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(204,255,0,0.2)] hover:shadow-neon/40 transition-all cursor-pointer overflow-hidden group"
            >
                <div className="absolute inset-0 bg-neon/5 animate-pulse" />
                {isOpen ? <X size={24} /> : <Bot size={24} className="group-hover:rotate-12 transition-transform" />}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20, x: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20, x: 20 }}
                        className="fixed bottom-28 right-8 z-[100] w-[350px] md:w-[400px] h-[550px] glass-dark rounded-[2.5rem] border border-white/10 shadow-2xl flex flex-col overflow-hidden backdrop-blur-3xl"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-white/10 bg-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-neon/20 flex items-center justify-center border border-neon/30">
                                    <MessageCircle size={20} className="text-neon" />
                                </div>
                                <div>
                                    <h3 className="text-white font-black text-sm">NanoRays Support</h3>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                        <span className="text-[10px] font-bold text-green-400/80">Online — Replies in &lt; 1 Hour</span>
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-white/20 hover:text-white transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`flex flex-col ${msg.sender === "ai" ? "items-start" : "items-end"}`}>
                                    <div className={`max-w-[85%] p-4 rounded-2xl text-sm font-medium leading-relaxed ${msg.sender === "ai"
                                        ? "bg-white/5 border border-white/10 text-white/90 rounded-tl-none"
                                        : "bg-neon border border-neon text-black font-black rounded-tr-none shadow-[0_0_20px_rgba(204,255,0,0.2)]"
                                        }`}>
                                        {msg.text}
                                    </div>

                                    {msg.options && (
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {msg.options.map((opt) => (
                                                <button
                                                    key={opt}
                                                    onClick={() => handleOptionClick(opt)}
                                                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/70 text-[11px] font-black hover:bg-neon/10 hover:text-neon hover:border-neon/30 transition-all"
                                                >
                                                    {opt}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}

                            {isTyping && (
                                <div className="flex items-center gap-2 text-white/30 text-[11px] font-bold">
                                    <div className="flex gap-1">
                                        <span className="animate-bounce">●</span>
                                        <span className="animate-bounce" style={{ animationDelay: "0.1s" }}>●</span>
                                        <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>●</span>
                                    </div>
                                    NanoRays is typing...
                                </div>
                            )}
                        </div>

                        {/* Input Area */}
                        <div className="p-4 border-t border-white/10 bg-white/5 flex items-center gap-3">
                            <input
                                type="text"
                                placeholder="Type your question..."
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                                className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-neon/30 transition-all font-bold"
                            />
                            <button
                                onClick={handleSend}
                                className="w-12 h-12 rounded-2xl bg-neon text-black flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-lg shadow-neon/20"
                            >
                                <Send size={18} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
