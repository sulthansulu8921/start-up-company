"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, MessageCircle } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

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
            options: ["View Our Services", "Contact Details", "Share Website", "Talk to Our Team"]
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

    const saveLead = async (interest: string, message?: string) => {
        try {
            await addDoc(collection(db, "chatbot_leads"), {
                interest,
                message: message || "Clicked quick option",
                status: "new",
                createdAt: serverTimestamp(),
                source: "AIChatbot"
            });
        } catch (error) {
            console.error("Lead capture failed:", error);
        }
    };

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
        }, 400); // Reduced from 1200ms for "Extreme Speed"
    };

    const handleOptionClick = (option: string) => {
        const userMsg: Message = {
            id: Date.now().toString(),
            text: option,
            sender: "user",
            timestamp: new Date()
        };
        setMessages(prev => [...prev, userMsg]);

        // Helper to handle instant redirects safely to avoid popup blocker
        const openLink = (url: string) => {
            window.open(url, "_blank");
        };

        if (option.includes("Services") || option === "Back to Menu") {
            saveLead("General Interest: Services");
            addAIMessage(
                "We offer a full range of digital services! Which one interests you?",
                ["Website Design", "SEO & Google Ranking", "Digital Marketing", "Logo & Branding", "Poster Design", "Website Maintenance"]
            );
        } else if (option.includes("Contact Details")) {
            saveLead("Bot Option: Contact Details");
            addAIMessage(
                "Here are our official contact channels:\n\n📞 Call: +91 94976 69317\n💬 WhatsApp: +91 94976 69317\n📧 Email: nanorayssolution@gmail.com\n\nHow would you like to connect with us?",
                ["Open WhatsApp Chat", "Call Us Directly", "Send Email", "Back to Menu"]
            );
        } else if (option === "Open WhatsApp Chat" || option === "Open WhatsApp") {
            addAIMessage("Opening WhatsApp chat... 💬");
            openLink("https://wa.me/919497669317?text=Hi+NanoRays!+I+want+to+chat+about+your+services.");
        } else if (option === "Call Us Directly") {
            window.location.href = "tel:+919497669317";
        } else if (option === "Send Email") {
            window.location.href = "mailto:nanorayssolution@gmail.com";
        } else if (option.includes("Share Website")) {
            saveLead("Bot Option: Share Website");
            addAIMessage(
                "We would love for you to share NanoRays! You can share directly on WhatsApp or copy our link below:\n\n🔗 Website: https://nanorays.com",
                ["Share on WhatsApp", "Copy Website Link", "Back to Menu"]
            );
        } else if (option === "Share on WhatsApp") {
            addAIMessage("Opening WhatsApp to share... Thank you! 🚀");
            openLink("https://api.whatsapp.com/send?text=Check%20out%20NanoRays%20Solution%20for%20premium%20website%20development%20and%20SEO:%20https://nanorays.com");
        } else if (option === "Copy Website Link") {
            navigator.clipboard.writeText("https://nanorays.com");
            addAIMessage("Link copied to clipboard! 📋 Share it anywhere you like. What can I help you with next?", ["View Our Services", "Contact Details", "Talk to Our Team"]);
        } else if (option.includes("Talk to Our Team") || option.includes("Contact Team") || option.includes("Yes, Contact Team")) {
            addAIMessage("Opening WhatsApp to connect you with our team right now! 🚀");
            openLink("https://wa.me/919497669317?text=Hi+NanoRays!+I+need+to+talk+to+your+team.");
        } else if (option === "Website Design" || option === "Website") {
            addAIMessage(
                "We build professional, fast, mobile-ready websites starting from ₹4,999. This includes custom landing pages, portfolios, and e-commerce stores. Would you like to talk to our team?",
                ["Yes, Contact Team", "See More Services", "Back to Menu"]
            );
        } else if (option === "SEO & Google Ranking" || option === "SEO") {
            addAIMessage(
                "Our SEO service helps your business rank on the first page of Google. Packages start from ₹2,999/month. Interested?",
                ["Yes, Contact Team", "See More Services", "Back to Menu"]
            );
        } else if (option === "Digital Marketing" || option === "Marketing") {
            saveLead("Bot Option: Marketing");
            addAIMessage(
                "We handle end-to-end digital marketing and campaigns to scale your business:\n\n📈 Paid Campaigns: Google Ads, Meta Ads (Instagram/FB)\n🎯 Lead Engines: Funnel creation & landing pages\n📱 Social Media: Daily posting & page care\n\nWhat marketing work would you like to discuss?",
                ["Paid Ads (Google/Meta)", "Lead Generation Funnels", "Social Media Care", "Back to Menu"]
            );
        } else if (option === "Paid Ads (Google/Meta)") {
            addAIMessage(
                "Our Paid Ads management starts at ₹5,000/month. We write ad copies, build custom landing pages, and double your conversions. Ready to run ads?",
                ["Start Paid Ads Campaign", "Back to Menu"]
            );
        } else if (option === "Start Paid Ads Campaign") {
            addAIMessage("Opening WhatsApp to set up your ad campaign budget... 🚀");
            openLink("https://wa.me/919497669317?text=Hi+NanoRays!+I+want+to+start+a+Google/Meta+Paid+Ads+campaign.");
        } else if (option === "Lead Generation Funnels") {
            addAIMessage(
                "We design custom lead captures, setup CRM databases, and write automated follow-up sequences. Shall we design your funnel?",
                ["Start Lead Funnel", "Back to Menu"]
            );
        } else if (option === "Start Lead Funnel") {
            addAIMessage("Opening WhatsApp to configure your new lead capture funnel... 🎯");
            openLink("https://wa.me/919497669317?text=Hi+NanoRays!+I+want+to+setup+a+Lead+Generation+Funnel.");
        } else if (option === "Social Media Care") {
            addAIMessage(
                "Daily graphics, captions, posting, and reels editing to keep your Instagram/FB pages active. Packages start from ₹3,999/month.",
                ["Start Social Media Care", "Back to Menu"]
            );
        } else if (option === "Start Social Media Care") {
            addAIMessage("Opening WhatsApp to start your Social Media Care plan... 📱");
            openLink("https://wa.me/919497669317?text=Hi+NanoRays!+I+want+to+start+Social+Media+Care.");
        } else if (option === "Logo & Branding" || option === "Branding / Logo") {
            addAIMessage(
                "We design professional logos and full brand identities. Logo packages from ₹999. Shall we get started?",
                ["Yes, Contact Team", "See More Services", "Back to Menu"]
            );
        } else if (option === "Poster Design" || option === "Poster") {
            addAIMessage(
                "We design stunning festival, promotional, and social media posters. Starting from ₹299 per poster. Interested?",
                ["Yes, Contact Team", "See More Services", "Back to Menu"]
            );
        } else if (option === "Website Maintenance" || option === "Maintenance") {
            addAIMessage(
                "We provide monthly website care — updates, backups, and support. Plans from ₹999/month. Want details?",
                ["Yes, Contact Team", "Back to Menu"]
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
        const text = inputValue.trim();
        const userMsg: Message = {
            id: Date.now().toString(),
            text,
            sender: "user",
            timestamp: new Date()
        };
        setMessages(prev => [...prev, userMsg]);
        setInputValue("");

        // Check if user is typing an email or phone number to submit lead details
        const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text);
        const isPhone = /^\+?[0-9]{8,15}$/.test(text.replace(/[\s-]/g, ""));

        if (isEmail || isPhone) {
            saveLead("Captured Contact Details", text);
            addAIMessage(
                `Thank you! I've saved your contact information (${text}). Click below to talk to us directly on WhatsApp for an instant response!`,
                ["Open WhatsApp", "Back to Menu"]
            );
            return;
        }

        // Deep service keyword matching Q&A logic
        const lowerText = text.toLowerCase();

        if (lowerText.includes("website") || lowerText.includes("web") || lowerText.includes("ecom") || lowerText.includes("shopify")) {
            saveLead("Q&A: Website Services", text);
            addAIMessage(
                "We build professional, fast, mobile-friendly websites starting from just ₹4,999! This includes portfolios, business sites, and fully functional e-commerce stores. Would you like a custom price quote?",
                ["Yes, Contact Team", "Back to Menu"]
            );
        } else if (lowerText.includes("ai") || lowerText.includes("chatbot") || lowerText.includes("agent") || lowerText.includes("gpt")) {
            saveLead("Q&A: AI Services", text);
            addAIMessage(
                "We develop intelligent AI solutions, custom trained chatbots, and autonomous agents to automate your customer support & lead generation 24/7. Shall we set up a chatbot for your business?",
                ["Yes, Contact Team", "Back to Menu"]
            );
        } else if (lowerText.includes("seo") || lowerText.includes("rank") || lowerText.includes("google search") || lowerText.includes("find")) {
            saveLead("Q&A: SEO Services", text);
            addAIMessage(
                "Our Search Engine Optimization (SEO) campaigns start at ₹2,999/month. We optimize keywords, page speed, and backlinks so your site ranks high on Google. Want to audit your site's SEO?",
                ["Yes, Contact Team", "Back to Menu"]
            );
        } else if (lowerText.includes("marketing") || lowerText.includes("ads") || lowerText.includes("facebook") || lowerText.includes("instagram")) {
            saveLead("Q&A: Marketing Services", text);
            addAIMessage(
                "We run professional ad campaigns (Google/Meta Ads) starting at ₹5,000/month. We design high-converting funnels, write ad copies, and track conversion analytics.",
                ["Paid Ads (Google/Meta)", "Back to Menu"]
            );
        } else if (lowerText.includes("logo") || lowerText.includes("brand") || lowerText.includes("identity")) {
            saveLead("Q&A: Logo Services", text);
            addAIMessage(
                "We create professional logos starting at ₹999 and full brand identity kits. Interested in starting your brand design?",
                ["Yes, Contact Team", "Back to Menu"]
            );
        } else if (lowerText.includes("poster") || lowerText.includes("flyer") || lowerText.includes("graphic")) {
            saveLead("Q&A: Poster Services", text);
            addAIMessage(
                "We design premium promotional posters and festival graphics starting at just ₹299 per poster. Ready to discuss graphic design?",
                ["Yes, Contact Team", "Back to Menu"]
            );
        } else if (lowerText.includes("price") || lowerText.includes("cost") || lowerText.includes("rate") || lowerText.includes("how much")) {
            saveLead("Q&A: Pricing", text);
            addAIMessage(
                "Here is our standard starting pricing:\n\n• Logo: ₹999\n• Posters: ₹299\n• Websites: ₹4,999\n• Monthly SEO: ₹2,999/mo\n\nFor a custom quote, please type your Email or Phone Number below.",
                ["Back to Menu"]
            );
        } else if (lowerText.includes("contact") || lowerText.includes("phone") || lowerText.includes("number") || lowerText.includes("whatsapp")) {
            addAIMessage(
                "Our direct phone/WhatsApp number is +91 94976 69317, and our email is nanorayssolution@gmail.com. Would you like to open a chat on WhatsApp directly?",
                ["Open WhatsApp Chat", "Back to Menu"]
            );
        } else {
            saveLead("Q&A: Other Question", text);
            addAIMessage(
                "Thanks for asking! I'm capturing your inquiry. To receive a detailed custom answer, please enter your Email or Phone/WhatsApp number below so our team can contact you.",
                ["Open WhatsApp Chat", "Back to Menu"]
            );
        }
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
                aria-label="Toggle AI Chatbot"
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
                        className="fixed bottom-24 right-4 left-4 md:left-auto md:right-8 md:w-[400px] h-[500px] md:h-[550px] max-h-[calc(100vh-120px)] z-[100] glass-dark rounded-[2.5rem] border border-white/10 shadow-2xl flex flex-col overflow-hidden backdrop-blur-3xl"
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
                            <button 
                                onClick={() => setIsOpen(false)} 
                                className="text-white/20 hover:text-white transition-colors"
                                aria-label="Close chat window"
                            >
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
                                aria-label="Send message"
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
