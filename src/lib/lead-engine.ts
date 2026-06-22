// Local Lead Engine — Client-Side Lead Capture using EmailJS (Static Hosting Compatible)
import emailjs from "@emailjs/browser";

export async function sendLeadEmail(params: {
    from_name: string;
    from_email: string;
    from_phone: string;
    message: string;
    plan?: string;
    subject: string;
}) {
    console.log("📨 Lead Engine: Preparing client-side EmailJS submission for...", params.from_email);

    try {
        const fullMessage = `Hi NanoRays,
I submitted an enquiry from your website.

Name: ${params.from_name}
Phone: ${params.from_phone}
Email: ${params.from_email || "Not provided"}
Service/Plan: ${params.plan || "Direct Contact"}

Message: 
${params.message}`;

        await emailjs.send(
            "service_lvzyr9e",
            "template_tf3oc6h",
            {
                name: params.from_name,
                phone: params.from_phone,
                email: params.from_email || "Not provided",
                service: params.plan || "Direct Contact",
                message: fullMessage,
            },
            "XYtwGU4t93z7pm8Oc"
        );

        console.log("✅ Lead Engine: EmailJS Submission Successful!");
    } catch (error) {
        console.error("🚨 Lead Engine: EmailJS Submission Failed", error);
        throw error;
    }
}
