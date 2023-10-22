import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { name, email, message } = await request.json();

        const transporter = nodemailer.createTransport({
        service: 'gmail', // Use Gmail as per your first example
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
        },
        });

        const mailOption = {
            from: email, // sender address
            to: process.env.EMAIL_USERNAME, // list of receivers
            subject: 'New Message from your website', 
            html: `
                <h2>Message from ${name}</h2>
                <h4>Email: ${email}</h4>
                <br>
                <p>Message: ${message}</p>
            `
        };

        await transporter.sendMail(mailOption);

        return NextResponse.json({ success: true });
    } catch (error) {
    return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 });
  }
}




