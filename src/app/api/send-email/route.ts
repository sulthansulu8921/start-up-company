import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { from_name, from_email, from_phone, message, plan, subject } = body;

        // Verify environment variables
        if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
            console.error('Missing GMAIL credentials in environment variables');
            return NextResponse.json({ success: false, error: 'Server configuration error' }, { status: 500 });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        const mailOptions = {
            from: `NanoRays Lead <${process.env.GMAIL_USER}>`,
            to: 'nanorayssolution@gmail.com',
            subject: subject || `🚀 New Lead: ${from_name}`,
            text: `
                New lead from NanoRays website:
                
                Name: ${from_name}
                Email: ${from_email}
                Phone: ${from_phone}
                Plan/Service: ${plan}
                
                Message:
                ${message}
                
                ---
                System Timestamp: ${new Date().toISOString()}
            `,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                    <h2 style="color: #CCFF00; background: #000; padding: 10px; border-radius: 5px; text-align: center;">🚀 New Lead Captured</h2>
                    <p><strong>Name:</strong> ${from_name}</p>
                    <p><strong>Email:</strong> ${from_email}</p>
                    <p><strong>Phone:</strong> ${from_phone}</p>
                    <p><strong>Plan/Service:</strong> ${plan}</p>
                    <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 10px;">
                        <strong>Message:</strong><br/>
                        ${message.replace(/\n/g, '<br/>')}
                    </div>
                    <hr style="margin-top: 20px;" />
                    <p style="font-size: 10px; color: #888;">System ID: NanoRays-Lead-Engine | ${new Date().toLocaleString()}</p>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);
        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error('Email error:', error);
        return NextResponse.json({
            success: false,
            error: error.message || 'Failed to send email'
        }, { status: 500 });
    }
}
