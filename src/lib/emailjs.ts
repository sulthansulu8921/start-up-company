// EmailJS Integration — sends email directly to nanorayssolution@gmail.com
// Setup: https://www.emailjs.com/ → Add your Service ID, Template ID & Public Key below

export const EMAILJS_CONFIG = {
    SERVICE_ID: "YOUR_SERVICE_ID",       // Replace after EmailJS setup
    TEMPLATE_ID: "YOUR_TEMPLATE_ID",     // Replace after EmailJS setup
    PUBLIC_KEY: "YOUR_PUBLIC_KEY",       // Replace after EmailJS setup
};

export async function sendLeadEmail(params: {
    from_name: string;
    from_email: string;
    from_phone: string;
    message: string;
    plan?: string;
    subject: string;
}) {
    try {
        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        });

        const data = await response.json();

        if (data.success) {
            console.log("📧 Lead email sent successfully via internal API!");
        } else {
            console.warn("⚠️ API reported failure:", data.error);
        }
    } catch (error) {
        console.error("Internal Email API call failed:", error);
    }
}
