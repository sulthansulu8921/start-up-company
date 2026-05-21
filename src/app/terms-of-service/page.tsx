"use client";

import LegalLayout from "@/components/LegalLayout";

export default function TermsOfService() {
    return (
        <LegalLayout title="Terms of Service" lastUpdated="May 21, 2026">
            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-black text-white mb-4">1. Acceptance of Terms</h2>
                    <p className="text-white/70 leading-relaxed">
                        By accessing the NanoRays Solution platform, you agree to comply with our professional service standards and terms of engagement.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-white mb-4">2. Service Delivery</h2>
                    <p className="text-white/70 leading-relaxed">
                        We commit to delivering high-performance digital solutions as specified in individual project agreements. Project timelines are estimates and subject to strategic adjustments for quality optimization.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-white mb-4">3. Intellectual Property</h2>
                    <p className="text-white/70 leading-relaxed">
                        Upon final payment, ownership of custom-developed code and designs is transferred to the client, unless otherwise specified in the service agreement.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-white mb-4">4. Strategic Amendments</h2>
                    <p className="text-white/70 leading-relaxed">
                        NanoRays Solution reserves the right to modify these terms to align with evolving digital standards and legal requirements in India and the UAE.
                    </p>
                </section>
            </div>
        </LegalLayout>
    );
}
