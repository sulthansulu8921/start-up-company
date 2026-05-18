"use client";

import { motion } from "framer-motion";
import { ArrowRight, Send, Phone, Mail, MapPin, Globe, Smartphone, Users, MessageCircle } from "lucide-react";

export function FinalCTA() {
    return (
        <section className="py-24 relative overflow-hidden bg-navy">
            <div className="absolute inset-0 bg-gradient-to-r from-royal/20 to-cyan/20 blur-[120px] -z-10" />
            <div className="max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-12 md:p-20 rounded-[3rem] relative overflow-hidden"
                >
                    {/* Animated Background Particles */}
                    <div className="absolute inset-0 pointer-events-none">
                        {[...Array(10)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-2 h-2 bg-cyan rounded-full opacity-20"
                                animate={{
                                    y: [0, -200],
                                    x: [0, Math.random() * 100 - 50],
                                    opacity: [0, 0.5, 0]
                                }}
                                transition={{
                                    duration: Math.random() * 5 + 5,
                                    repeat: Infinity,
                                    delay: Math.random() * 5
                                }}
                                style={{ left: `${Math.random() * 100}%`, bottom: '-10px' }}
                            />
                        ))}
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold font-sora mb-8 leading-tight">
                        Ready To Grow Your <br />
                        <span className="gradient-text">Business Online?</span>
                    </h2>
                    <p className="text-xl text-soft-gray/70 mb-12 max-w-2xl mx-auto">
                        Let’s create a premium digital experience for your brand. Join 50+ businesses that have transformed their online presence.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <button className="px-12 py-5 bg-royal text-white font-bold rounded-2xl text-lg flex items-center gap-3 transition-all glow-button">
                            Get Started Now <ArrowRight size={24} />
                        </button>
                        <button className="px-12 py-5 bg-white/5 text-white font-bold rounded-2xl text-lg border border-white/10 hover:bg-white/10 transition-all">
                            Contact Us
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export function ContactSection() {
    return (
        <section id="contact" className="py-24 bg-navy">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div>
                        <h2 className="text-4xl font-bold font-sora mb-6">Let's Build Something <span className="text-cyan">Great Together</span></h2>
                        <p className="text-soft-gray/60 mb-12 text-lg">Have a project in mind? We'd love to hear from you. Reach out to us and let's start the conversation.</p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-royal/10 flex items-center justify-center text-cyan shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">Call Us</h4>
                                    <p className="text-soft-gray/70">+91 89216 24007</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-royal/10 flex items-center justify-center text-cyan shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">Email Us</h4>
                                    <p className="text-soft-gray/70">nanorayssolution@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-royal/10 flex items-center justify-center text-cyan shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">Visit Us</h4>
                                    <p className="text-soft-gray/70">123 Tech Park, Digital Valley, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <h4 className="font-bold text-white mb-6">Follow Us</h4>
                            <div className="flex gap-4">
                                {[Globe, Mail, Smartphone, Users].map((Icon, i) => (
                                    <button key={i} className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-soft-gray hover:text-cyan hover:border-cyan transition-all">
                                        <Icon size={20} />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="glass-card p-10 rounded-3xl">
                        <form action="https://formsubmit.co/nanorayssolution@gmail.com" method="POST" className="space-y-6">
                            {/* FormSubmit Configuration */}
                            <input type="hidden" name="_subject" value="New Contact Inquiry | NanoRays" />
                            <input type="hidden" name="_template" value="table" />
                            <input type="hidden" name="_next" value="https://nanorays.in" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-soft-gray/60 uppercase tracking-wider">Full Name</label>
                                    <input required name="Client_Name" type="text" placeholder="John Doe" className="w-full bg-navy border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan transition-all text-white font-bold" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-soft-gray/60 uppercase tracking-wider">Email Address</label>
                                    <input required name="Email_Address" type="email" placeholder="john@example.com" className="w-full bg-navy border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan transition-all text-white font-bold" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-soft-gray/60 uppercase tracking-wider">Service Interested In</label>
                                <select name="Service_Requested" className="w-full bg-navy border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan transition-all text-white font-bold">
                                    <option>Website Development</option>
                                    <option>Digital Marketing</option>
                                    <option>Branding & Poster Design</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-soft-gray/60 uppercase tracking-wider">Your Message</label>
                                <textarea name="Message_Details" rows={4} placeholder="Tell us about your project..." className="w-full bg-navy border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan transition-all text-white font-bold resize-none" />
                            </div>
                            <button type="submit" className="w-full py-4 bg-royal hover:bg-royal/80 text-white font-black uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 transition-all glow-button">
                                Send Message <Send size={20} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Floating WhatsApp Button */}
            <a
                href="https://wa.me/918921624007"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-8 right-8 w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/20 hover:scale-110 transition-all z-50 group"
            >
                <MessageCircle size={32} />
                <span className="absolute right-full mr-4 px-4 py-2 bg-navy border border-white/10 rounded-lg text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    How can we help?
                </span>
            </a>
        </section>
    );
}
