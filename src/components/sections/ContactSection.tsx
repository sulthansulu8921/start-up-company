"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, Send, CheckCircle, Clock, ArrowRight } from "lucide-react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { sendInstantNotification } from "@/lib/notifications";
import { sendLeadEmail } from "@/lib/lead-engine";
import emailjs from "@emailjs/browser";

const services = [
    "Website Design & Development",
    "SEO Optimization",
    "Digital Marketing",
    "Branding & Logo Design",
    "Poster Design",
    "Website Maintenance",
    "UI/UX Design",
    "Other / Not Sure Yet",
];

const quickContacts = [
    {
        icon: MessageCircle,
        label: "WhatsApp",
        sublabel: "Chat with us instantly",
        href: "https://wa.me/918921624007",
        color: "text-green-400",
        bg: "bg-green-400/10",
        border: "border-green-400/30",
        hoverBorder: "hover:border-green-400",
    },
    {
        icon: Phone,
        label: "Call Us",
        sublabel: "+91 89216 24007",
        href: "tel:+918921624007",
        color: "text-sky-400",
        bg: "bg-sky-400/10",
        border: "border-sky-400/30",
        hoverBorder: "hover:border-sky-400",
    },
    {
        icon: Mail,
        label: "Email Us",
        sublabel: "nanorayssolution@gmail.com",
        href: "mailto:nanorayssolution@gmail.com",
        color: "text-neon",
        bg: "bg-neon/10",
        border: "border-neon/30",
        hoverBorder: "hover:border-neon",
    },
];

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage(null);

        const currentData = { ...formData };

        try {
            const fullMessage = `Hi NanoRays,
I submitted an enquiry from your website.

Name: ${currentData.name}
Phone: ${currentData.phone}
Email: ${currentData.email}
Service: ${currentData.service}

Message: 
${currentData.message || "No additional message provided."}`;

            // 1. Send Email via EmailJS
            await emailjs.send(
                "service_lvzyr9e",
                "template_tf3oc6h",
                {
                    name: currentData.name,
                    phone: currentData.phone,
                    email: currentData.email,
                    service: currentData.service,
                    message: fullMessage,
                },
                "XYtwGU4t93z7pm8Oc"
            );

            // 2. Async save to Firestore in background (so it doesn't block UI if Firestore fails)
            (async () => {
                try {
                    await addDoc(collection(db, "leads"), {
                        ...currentData,
                        type: "Contact Form",
                        status: "new",
                        createdAt: serverTimestamp()
                    });
                } catch (dbErr) {
                    console.error("🚨 Firestore backup failed:", dbErr);
                }
            })();

            // 3. UI Updates
            setLoading(false);
            setSubmitted(true);
            setFormData({
                name: "",
                phone: "",
                email: "",
                service: "",
                message: "",
            });
            sendInstantNotification(`Contact Form Lead: ${currentData.name} (${currentData.phone}) interested in ${currentData.service}`);
        } catch (err: any) {
            console.error("🚨 EmailJS Form Submission Error:", err);
            setLoading(false);
            setErrorMessage(err?.text || err?.message || "Failed to send message. Please try again or call us.");
        }
    };

    return (
        <section id="contact" className="py-32 relative bg-transparent overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-neon/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex px-3 py-1.5 rounded-lg bg-white/5 border border-white/20 text-white/80 text-[10px] font-black uppercase tracking-[0.2em] mb-6"
                    >
                        Initiate Consultation
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-black font-sora text-white mb-6 tracking-tighter"
                    >
                        Engineer Your <span className="text-neon">Digital Future</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/70 text-lg font-bold max-w-2xl mx-auto"
                    >
                        Communicate your requirements and our strategic team will respond within 60 minutes. <br className="hidden md:block" />
                        Your first high-level consultation is completely <span className="text-neon">complimentary</span>.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    {/* Left Side — Quick Contact + Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 space-y-6"
                    >
                        <h3 className="text-xl font-black text-white font-sora mb-2">Contact Us Directly</h3>
                        <p className="text-white/50 text-sm font-bold mb-6">Choose whatever is easiest for you.</p>

                        {quickContacts.map((c, i) => (
                            <motion.a
                                key={i}
                                href={c.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ x: 6 }}
                                className={`flex items-center gap-5 p-5 rounded-2xl glass-dark border ${c.border} ${c.hoverBorder} transition-all duration-300 group`}
                            >
                                <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center flex-shrink-0 border ${c.border}`}>
                                    <c.icon size={22} className={c.color} />
                                </div>
                                <div className="flex-1">
                                    <p className={`font-black text-base ${c.color}`}>{c.label}</p>
                                    <p className="text-white/50 text-sm font-bold truncate">{c.sublabel}</p>
                                </div>
                                <ArrowRight size={16} className="text-white/20 group-hover:text-white/60 group-hover:translate-x-1 transition-all" />
                            </motion.a>
                        ))}

                        {/* Response time badge */}
                        <div className="flex items-center gap-3 p-4 rounded-2xl bg-neon/5 border border-neon/20 mt-4">
                            <Clock size={18} className="text-neon flex-shrink-0" />
                            <div>
                                <p className="text-white font-black text-sm">Average reply time: <span className="text-neon">Under 1 Hour</span></p>
                                <p className="text-white/40 text-xs font-bold">Monday to Saturday, 9 AM – 9 PM IST</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side — Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-3"
                    >
                        <div className="glass-dark border border-white/10 rounded-3xl p-8 md:p-10 hover:border-white/20 transition-all duration-500">
                            {submitted ? (
                                <div className="flex flex-col items-center justify-center py-16 text-center gap-6">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 200 }}
                                        className="w-20 h-20 rounded-full bg-neon/10 border border-neon/30 flex items-center justify-center"
                                    >
                                        <CheckCircle size={40} className="text-neon" />
                                    </motion.div>
                                    <h3 className="text-2xl font-black text-white font-sora">Message Sent!</h3>
                                    <p className="text-white/60 font-bold max-w-sm">We have received your enquiry. Our team will contact you shortly.</p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="btn-neon px-8 py-3 text-sm"
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <h3 className="text-xl font-black text-white font-sora mb-6">Send Us a Message</h3>

                                    {errorMessage && (
                                        <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm font-bold">
                                            ⚠️ {errorMessage}
                                        </div>
                                    )}

                                    {/* Row 1 */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-white/50 text-[11px] font-black uppercase tracking-widest">Your Name *</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                placeholder="Ex: Nanorays solution"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 font-bold text-sm focus:outline-none focus:border-neon/50 transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-white/50 text-[11px] font-black uppercase tracking-widest">Phone Number *</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                placeholder="Ex: +91 8921624007"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 font-bold text-sm focus:outline-none focus:border-neon/50 transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Row 2 */}
                                    <div className="space-y-2">
                                        <label className="text-white/50 text-[11px] font-black uppercase tracking-widest">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Ex: nanorayssolution@gmail.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 font-bold text-sm focus:outline-none focus:border-neon/50 transition-all"
                                        />
                                    </div>

                                    {/* Row 3 — Service Dropdown */}
                                    <div className="space-y-2">
                                        <label className="text-white/50 text-[11px] font-black uppercase tracking-widest">Service You Need *</label>
                                        <select
                                            name="service"
                                            required
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white font-bold text-sm focus:outline-none focus:border-neon/50 transition-all appearance-none cursor-pointer"
                                        >
                                            <option value="" className="bg-black">— Select a service —</option>
                                            {services.map((s, i) => (
                                                <option key={i} value={s} className="bg-black">{s}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Row 4 — Message */}
                                    <div className="space-y-2">
                                        <label className="text-white/50 text-[11px] font-black uppercase tracking-widest">Your Message</label>
                                        <textarea
                                            name="message"
                                            rows={4}
                                            placeholder="Tell us about your project or business..."
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 font-bold text-sm focus:outline-none focus:border-neon/50 transition-all resize-none"
                                        />
                                    </div>

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="btn-neon w-full py-4 flex items-center justify-center gap-3 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                                    >
                                        {loading ? (
                                            <><span className="w-5 h-5 rounded-full border-2 border-black/40 border-t-black animate-spin" /> Sending...</>
                                        ) : (
                                            <><Send size={18} /> Send Message via WhatsApp</>
                                        )}
                                    </button>
                                    <p className="text-white/30 text-xs text-center font-bold">
                                        Your information is private and will never be shared.
                                    </p>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
