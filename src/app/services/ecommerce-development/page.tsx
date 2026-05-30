import { Metadata } from "next";
import { CheckCircle, ShoppingBag, CreditCard, Layout, Zap, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Ecommerce Website Development Kerala | NanoRays Solution",
    description: "Start your online store today with the best ecommerce website development company in Kerala. We build secure, high-converting online shops with payment gateway integration.",
    keywords: [
        "ecommerce website development Kerala", "online store development India", "ecommerce website with admin panel",
        "best ecommerce agency Kochi", "Shopify alternative Kerala", "sell online India",
    ],
    alternates: { canonical: "https://nanorayssolution.com/services/ecommerce-development" },
};

export default function EcommercePage() {
    return (
        <main className="min-h-screen pt-32 pb-16 relative">
            <div className="container mx-auto px-4 max-w-5xl relative z-10">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl md:text-6xl font-sora font-bold text-white mb-6 leading-tight">
                        Scale Your Sales with <br /> <span className="text-sky-400">Ecommerce</span> Development
                    </h1>
                    <p className="text-lg text-gray-400 font-inter max-w-3xl mx-auto">
                        From local retail shops to global brands, we build online stores that are fast, secure, and designed to convert visitors into loyal customers.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="p-10 bg-white/5 border border-white/10 rounded-[32px] hover:border-sky-400 transition-all group">
                        <div className="bg-sky-400/20 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                            <ShoppingBag className="w-6 h-6 text-sky-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Complete Admin Panel</h3>
                        <p className="text-gray-400 leading-relaxed mb-6">Manage products, track orders, and view sales analytics with an easy-to-use dashboard — no technical skills required.</p>
                        <ul className="space-y-3">
                            {["Inventory Management", "Order Tracking", "Customer Insights"].map(item => (
                                <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                                    <CheckCircle className="w-4 h-4 text-sky-400" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="p-10 bg-white/5 border border-white/10 rounded-[32px] hover:border-sky-400 transition-all group">
                        <div className="bg-sky-400/20 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                            <CreditCard className="w-6 h-6 text-sky-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Secure Payments</h3>
                        <p className="text-gray-400 leading-relaxed mb-6">Accept payments via UPI, Credit/Debit cards, and Net Banking with seamless integration of Razorpay/Instamojo.</p>
                        <ul className="space-y-3">
                            {["UPI & QR Codes", "Automatic Invoicing", "Fraud Protection"].map(item => (
                                <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                                    <CheckCircle className="w-4 h-4 text-sky-400" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-sky-400/10 to-transparent border border-sky-400/20 rounded-[40px] p-8 md:p-12 text-center">
                    <h2 className="text-3xl font-sora font-bold text-white mb-4">Ready to Sell Anything Online?</h2>
                    <p className="text-gray-400 max-w-xl mx-auto mb-10 text-lg">
                        Our ecommerce packages include free domain, hosting, and professional training on how to manage your store.
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <Link href="/contact" className="bg-sky-400 text-black px-8 py-4 rounded-full font-bold hover:bg-sky-300 transition-all w-full md:w-auto">
                            Start Your Online Store
                        </Link>
                        <Link href="https://wa.me/919497669317" className="bg-white/5 border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all w-full md:w-auto">
                            WhatsApp for Demo
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
