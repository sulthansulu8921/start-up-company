"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, Send, CheckCircle, Clock, ArrowRight } from "lucide-react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { sendInstantNotification } from "@/lib/notifications";
import { sendLeadEmail } from "@/lib/lead-engine";

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
        sublabel: "+91 94976 69317 / +91 89216 24007",
        href: "https://wa.me/919497669317",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "border-emerald-200/80",
        hoverBorder: "hover:border-emerald-400",
    },
    {
        icon: Phone,
        label: "Call Us",
        sublabel: "+91 94976 69317 / +91 89216 24007",
        href: "tel:+919497669317",
        color: "text-sky-600",
        bg: "bg-sky-50",
        border: "border-sky-200/80",
        hoverBorder: "hover:border-sky-400",
    },
    {
        icon: Mail,
        label: "Email Us",
        sublabel: "nanorayssolution@gmail.com",
        href: "mailto:nanorayssolution@gmail.com",
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        border: "border-indigo-200/80",
        hoverBorder: "hover:border-indigo-400",
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
            await sendLeadEmail({
                from_name: currentData.name,
                from_email: currentData.email,
                from_phone: currentData.phone,
                message: currentData.message || "No additional message provided.",
                plan: currentData.service || "Direct Contact",
                subject: `📞 New Contact Lead: ${currentData.name} — NanoRays Contact Form`,
            });

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
            console.error("🚨 Form Submission Error:", err);
            setLoading(false);
            setErrorMessage(err?.message || "Failed to send message. Please try again or call us.");
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0.9, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            id="contact"
            className="py-20 relative overflow-hidden bg-[#F8FAFC] text-slate-900 rounded-t-[3rem] md:rounded-t-[4rem] shadow-[0_-25px_60px_rgba(0,0,0,0.06)] border-t border-slate-200/90 z-65"
        >
            {/* Dedicated High-Res Global Telecommunications Network Photo Background */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC]/96 via-[#F0F5FF]/90 to-[#F8FAFC]/96 pointer-events-none" />
            
            <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200/80 text-cyan-700 text-[10px] font-black uppercase tracking-[0.25em] mb-4 shadow-sm"
                    >
                        Initiate Consultation
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black font-sora text-slate-900 mb-4 tracking-tight"
                    >
                        Engineer Your <span className="bg-gradient-to-r from-[#2563EB] via-[#0284C7] to-[#06B6D4] bg-clip-text text-transparent">Digital Future</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed"
                    >
                        Communicate your requirements and our strategic team will respond within 60 minutes. <br className="hidden md:block" />
                        Your first high-level consultation is completely <span className="text-[#2563EB] font-bold">complimentary</span>.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    {/* Left Side — Quick Contact + Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 space-y-5"
                    >
                        <h3 className="text-xl font-black text-slate-900 font-sora mb-1">Contact Us Directly</h3>
                        <p className="text-slate-500 text-sm font-medium mb-6">Choose whatever channel is easiest for you.</p>

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
                                className={`flex items-center gap-5 p-5 rounded-2xl bg-white border ${c.border} ${c.hoverBorder} shadow-sm transition-all duration-300 group`}
                            >
                                <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center flex-shrink-0 border ${c.border}`}>
                                    <c.icon size={22} className={c.color} />
                                </div>
                                <div className="flex-1">
                                    <p className={`font-extrabold text-base ${c.color}`}>{c.label}</p>
                                    <p className="text-slate-600 text-sm font-semibold truncate">{c.sublabel}</p>
                                </div>
                                <ArrowRight size={16} className="text-slate-300 group-hover:text-[#2563EB] group-hover:translate-x-1 transition-all" />
                            </motion.a>
                        ))}

                        {/* Response time badge */}
                        <div className="flex items-center gap-3 p-4 rounded-2xl bg-blue-50/80 border border-blue-200/80 mt-4">
                            <Clock size={18} className="text-[#2563EB] flex-shrink-0" />
                            <div>
                                <p className="text-slate-900 font-extrabold text-sm">Average reply time: <span className="text-[#2563EB]">Under 1 Hour</span></p>
                                <p className="text-slate-500 text-xs font-medium">Monday to Saturday, 9 AM – 9 PM IST</p>
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
                        <div className="bg-white border border-blue-100 rounded-3xl p-8 md:p-10 shadow-xl shadow-blue-500/5 hover:border-blue-200 transition-all duration-300">
                            {submitted ? (
                                <div className="flex flex-col items-center justify-center py-16 text-center gap-6">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 200 }}
                                        className="w-20 h-20 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center"
                                    >
                                        <CheckCircle size={40} className="text-emerald-600" />
                                    </motion.div>
                                    <h3 className="text-2xl font-black text-slate-900 font-sora">Message Sent!</h3>
                                    <p className="text-slate-600 font-medium max-w-sm">We have received your enquiry. Our team will contact you shortly.</p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] hover:from-[#1d4ed8] hover:to-[#6d28d9] text-white font-extrabold px-8 py-3.5 rounded-xl text-xs uppercase tracking-widest transition-all shadow-md"
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <h3 className="text-xl font-black text-slate-900 font-sora mb-6">Send Us a Message</h3>

                                    {errorMessage && (
                                        <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-sm font-semibold">
                                            ⚠️ {errorMessage}
                                        </div>
                                    )}

                                    {/* Row 1 */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-slate-700 text-[11px] font-black uppercase tracking-widest">Your Name *</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                placeholder="Ex: Nanorays solution"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 font-semibold text-sm focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-slate-700 text-[11px] font-black uppercase tracking-widest">Phone Number *</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                placeholder="Ex: +91 9497669317"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 font-semibold text-sm focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Row 2 */}
                                    <div className="space-y-2">
                                        <label className="text-slate-700 text-[11px] font-black uppercase tracking-widest">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Ex: nanorayssolution@gmail.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 font-semibold text-sm focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all"
                                        />
                                    </div>

                                    {/* Row 3 — Service Dropdown */}
                                    <div className="space-y-2">
                                        <label htmlFor="contact-service-select" className="text-slate-700 text-[11px] font-black uppercase tracking-widest">Service You Need *</label>
                                        <select
                                            id="contact-service-select"
                                            name="service"
                                            required
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 font-semibold text-sm focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all appearance-none cursor-pointer"
                                        >
                                            <option value="" className="bg-white text-slate-900">— Select a service —</option>
                                            {services.map((s, i) => (
                                                <option key={i} value={s} className="bg-white text-slate-900">{s}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Row 4 — Message */}
                                    <div className="space-y-2">
                                        <label className="text-slate-700 text-[11px] font-black uppercase tracking-widest">Your Message</label>
                                        <textarea
                                            name="message"
                                            rows={4}
                                            placeholder="Tell us about your project or business..."
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 font-semibold text-sm focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all resize-none"
                                        />
                                    </div>

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full py-4 bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED] hover:from-[#1d4ed8] hover:to-[#6d28d9] text-white rounded-xl font-extrabold text-sm uppercase tracking-widest shadow-md shadow-blue-500/20 flex items-center justify-center gap-3 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                                    >
                                        {loading ? (
                                            <><span className="w-5 h-5 rounded-full border-2 border-white/40 border-t-white animate-spin" /> Sending...</>
                                        ) : (
                                            <><Send size={18} /> Send Message</>
                                        )}
                                    </button>
                                    <p className="text-slate-400 text-xs text-center font-medium">
                                        Your information is private and will never be shared.
                                    </p>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}
