// Formspree Lead Engine — Professional Lead Capture for Static Hosting
// Primary Endpoint: https://formspree.io/f/xaqkeznr

export async function sendLeadEmail(params: {
    from_name: string;
    from_email: string;
    from_phone: string;
    message: string;
    plan?: string;
    subject: string;
}) {
    console.log("📨 Lead Engine: Preparing submission for...", params.from_email);

    try {
        const response = await fetch('https://formspree.io/f/xaqkeznr', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                _subject: params.subject,
                name: params.from_name,
                email: params.from_email,
                phone: params.from_phone,
                service_requested: params.plan || "Direct Contact",
                message: params.message,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            console.log("✅ Lead Engine: Submission Successful!", data);
        } else {
            console.error("❌ Lead Engine: Formspree Error", {
                status: response.status,
                text: response.statusText,
                data: data
            });

            // Helpful alert for the user during debugging
            if (typeof window !== 'undefined' && data.errors) {
                console.warn("Formspree says:", data.errors.map((e: any) => e.message).join(", "));
            }
        }
    } catch (error) {
        console.error("🚨 Lead Engine: Critical Network/System Error", error);
    }
}
