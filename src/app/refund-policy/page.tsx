"use client";

import LegalLayout from "@/components/LegalLayout";

export default function RefundPolicy() {
    return (
        <LegalLayout title="Refund Policy" lastUpdated="May 21, 2026">
            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-black text-white mb-4">1. Service Commitment</h2>
                    <p className="text-white/70 leading-relaxed">
                        NanoRays Solution is dedicated to 100% client satisfaction. We provide high-level digital services with a focus on measurable results and ROI.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-white mb-4">2. Milestone Payments</h2>
                    <p className="text-white/70 leading-relaxed">
                        Our billing is structured around project milestones. Payments made for completed and approved milestones are generally non-refundable as they represent delivered professional labor and architectural assets.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-white mb-4">3. Refund Eligibility</h2>
                    <p className="text-white/70 leading-relaxed">
                        Refund requests are analyzed on a case-by-case basis. If a project is cancelled before work commences, a full refund of the initial deposit may be issued, minus any administrative or licensing costs.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-white mb-4">4. Dispute Resolution</h2>
                    <p className="text-white/70 leading-relaxed">
                        We encourage open communication. Our leadership team is always available to resolve any concerns and ensure your project reaches its strategic goals.
                    </p>
                </section>
            </div>
        </LegalLayout>
    );
}
