export async function sendInstantNotification(message: string, type: "lead" | "visit" = "lead") {
    try {
        // Only send visit alerts once per session to avoid spam
        if (type === "visit") {
            const hasNotified = sessionStorage.getItem("visit_notified");
            if (hasNotified) return;
            sessionStorage.setItem("visit_notified", "true");
        }

        // 1. Save Alert to Firestore for Owner
        try {
            const { db } = await import("@/lib/firebase");
            const { collection, addDoc, serverTimestamp } = await import("firebase/firestore");
            await addDoc(collection(db, "system_alerts"), {
                message,
                type,
                timestamp: serverTimestamp()
            });
        } catch (e) {
            console.error("Alert persistence failed:", e);
        }

        console.log(`Instant ${type} notification dispatched to Firestore.`);
    } catch (error) {
        console.error("Notification failed:", error);
    }
}
