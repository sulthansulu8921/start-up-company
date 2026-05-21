"use client";

import LegalLayout from "@/components/LegalLayout";

export default function PrivacyPolicy() {
    return (
        <LegalLayout title="Privacy Policy" lastUpdated="May 21, 2026">
            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-black text-white mb-4">1. Data Collection</h2>
                    <p className="text-white/70 leading-relaxed">
                        NanoRays Solution collects minimal personal information required to facilitate our services. This includes names, email addresses, and phone numbers provided through our contact forms and WhatsApp integration.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-white mb-4">2. Use of Information</h2>
                    <p className="text-white/70 leading-relaxed">
                        Your information is used solely to provide consultation, deliver digital services, and communicate project updates. We never sell or share your data with third-party marketing entities.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-white mb-4">3. Security Protcols</h2>
                    <p className="text-white/70 leading-relaxed">
                        We implement industry-standard encryption and security measures to protect your information. Our platform is architected for maximum data integrity.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-white mb-4">4. Contact Information</h2>
                    <p className="text-white/70 leading-relaxed">
                        For any privacy-related inquiries, please contact our data safety team at <span className="text-neon">nanorayssolution@gmail.com</span>.
                    </p>
                </section>
            </div>
        </LegalLayout>
    );
}
