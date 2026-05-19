export async function sendInstantNotification(message: string, type: "lead" | "visit" = "lead") {
    try {
        // Only send visit alerts once per session to avoid spam
        if (type === "visit") {
            const hasNotified = sessionStorage.getItem("visit_notified");
            if (hasNotified) return;
            sessionStorage.setItem("visit_notified", "true");
        }

        // FormSubmit AJAX (Email)
        await fetch("https://formsubmit.co/ajax/nanorayssolution@gmail.com", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                _subject: type === "visit" ? "👀 SITE VISITOR: NanoRays" : "🚀 NEW LEAD: NanoRays",
                message: message,
                type: type,
                timestamp: new Date().toISOString()
            })
        });

        console.log(`Instant ${type} notification dispatched.`);
    } catch (error) {
        console.error("Notification failed:", error);
    }
}
