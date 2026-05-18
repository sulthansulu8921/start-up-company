"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
    return (
        <motion.a
            href="https://wa.me/918921624007"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0, y: 0 }}
            animate={{ scale: 1, opacity: 1, y: [0, -12, 0] }}
            transition={{
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                default: { duration: 0.5 }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 left-8 z-[60] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-all cursor-pointer group"
        >
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-[#25D366] rounded-full"
            />
            <MessageCircle size={32} className="relative z-10 fill-white" />

            {/* Tooltip */}
            <div className="absolute left-20 bg-white px-4 py-2 rounded-xl shadow-xl border border-navy/5 text-navy font-bold text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                How can we help?
            </div>
        </motion.a>
    );
}
