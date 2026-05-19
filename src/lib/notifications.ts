/**
 * Utility for sending real-time notifications to the business owner.
 * Designed for zero-cost using free webhooks (e.g. CallMeBot, FormSubmit, etc.)
 */

export async function sendInstantNotification(message: string) {
    try {
        // Option 1: FormSubmit AJAX (Email)
        await fetch("https://formsubmit.co/ajax/nanorayssolution@gmail.com", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                _subject: "🚀 NEW LEAD: NanoRays Solution",
                message: message
            })
        });

        // Option 2: WhatsApp (Via CallMeBot - Optional for user to setup)
        // If the user sets up CallMeBot, they can add their API key here.
        // For now, email is the robust free default.
        console.log("Instant notification dispatched:", message);
    } catch (error) {
        console.error("Notification failed:", error);
    }
}
