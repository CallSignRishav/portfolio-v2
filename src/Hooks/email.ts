"use server";

import { env } from "@/lib/env";
import { ContactFormDataType } from "@/lib/types";
import { createTransport } from "nodemailer";

export const sendEmail = async (fData: ContactFormDataType) => {
	const transporter = createTransport({
		host: "smtp.gmail.com",
		port: 465,
		secure: true,
		auth: {
			user: env.user,
			pass: env.pass,
		},
	});

	const html = ` 
    <div><strong>Name : </strong><span>${fData.name}</span></div>
    <div><strong>Email ID : </strong><span>${fData.email}</span></div>
    <div><strong>Message : </strong><span>${fData.message}</span></div>  
  `;

	try {
		await transporter.sendMail({
			from: env.user,
			to: env.user,
			subject: `Email send by - ${fData.email}`,
			text: `${fData.email}`,
			html: html,
		});

		return {
			success: true,
			message: "Email sent successfully",
		};
	} catch (error) {
		console.log(error);

		return {
			success: false,
			message: "Error sending email",
		};
	}
};
