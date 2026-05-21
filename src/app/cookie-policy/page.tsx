"use client";

import LegalLayout from "@/components/LegalLayout";

export default function CookiePolicy() {
    return (
        <LegalLayout title="Cookie Policy" lastUpdated="May 21, 2026">
            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-black text-white mb-4">1. What are Cookies?</h2>
                    <p className="text-white/70 leading-relaxed">
                        Cookies are small data files stored on your device that help us improve your browsing experience. We use them sparingly to understand site traffic and remember your preferences.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-white mb-4">2. Types of Cookies</h2>
                    <ul className="list-disc list-inside text-white/70 space-y-2 leading-relaxed font-bold">
                        <li><span className="text-neon">Essential:</span> Required for base site functionality.</li>
                        <li><span className="text-sky-400">Analytical:</span> Used to monitor site performance via Google Analytics.</li>
                        <li><span className="text-amber-400">Preference:</span> Remembers your theme and layout settings.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-white mb-4">3. Managing Preferences</h2>
                    <p className="text-white/70 leading-relaxed">
                        Most browsers allow you to block or delete cookies through their settings. Note that disabling essential cookies may impact the performance of our high-speed digital interface.
                    </p>
                </section>
            </div>
        </LegalLayout>
    );
}
