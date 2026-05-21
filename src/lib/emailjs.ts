// Formspree Integration — The final solution for static Firebase hosting
// Endpoint: https://formspree.io/f/xzdweqpd

export async function sendLeadEmail(params: {
    from_name: string;
    from_email: string;
    from_phone: string;
    message: string;
    plan?: string;
    subject: string;
}) {
    try {
        const response = await fetch('https://formspree.io/f/xzdweqpd', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                subject: params.subject,
                name: params.from_name,
                email: params.from_email,
                phone: params.from_phone,
                service_requested: params.plan || "Direct Contact",
                message: params.message,
            }),
        });

        if (response.ok) {
            console.log("📧 Lead email sent successfully via Formspree!");
        } else {
            console.warn("⚠️ Formspree reported an error:", response.statusText);
        }
    } catch (error) {
        console.error("Formspree submission failed:", error);
    }
}
