import LegalLayout from "@/components/LegalLayout";

export default function CookiePolicy() {
    return (
        <LegalLayout title="Cookie Policy" lastUpdated="May 17, 2026">
            <h2>1. What are Cookies?</h2>
            <p>
                Cookies are small text files that track your interaction with our digital environment. We use them to
                remember your preferences and improve performance.
            </p>

            <h2>2. Essential Cookies</h2>
            <p>
                These are critical for the platform's basic logic, such as ensuring the cinematic preloader only initializes
                once per session.
            </p>

            <h2>3. Analytics Cookies</h2>
            <p>
                We use anonymous tracking (via Google Analytics or similar) to understand how architects and clients
                interact with our growth matrix and service detail pages.
            </p>

            <h2>4. Managing Cookies</h2>
            <p>
                You can initialize a cookie block via your browser settings, though some cinematic animations may fail
                to render optimally as a result.
            </p>
        </LegalLayout>
    );
}
