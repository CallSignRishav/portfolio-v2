"use server";

import { env } from "@/lib/env";
import { ContactFormDataType } from "@/lib/types";
import { createTransport } from "nodemailer";

export const sendEmail = async (fData: ContactFormDataType) => {
	// Create a transporter
	const transporter = createTransport({
		host: "smtp.gmail.com",
		port: 465,
		secure: true,
		auth: {
			user: env.user,
			pass: env.pass,
		},
	});

	// HTML template
	const html = `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
	</head>
	<body style="margin:0;padding:0;background-color:#1a1a1a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif">
		<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#1a1a1a;padding:32px 16px">
			<tr>
				<td align="center">
					<table role="presentation" width="100%" style="max-width:520px;background-color:#232323;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.3)">
						<tr>
							<td style="padding:32px 28px 16px">
								<h1 style="margin:0 0 24px;font-size:22px;font-weight:600;color:#f4f4f5;letter-spacing:-0.02em">New contact message</h1>
								<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
									<tr>
										<td style="padding:12px 0 4px;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#a1a1aa">Name</td>
									</tr>
									<tr>
										<td style="padding:0 0 16px;font-size:16px;color:#f4f4f5">${fData.name}</td>
									</tr>
									<tr>
										<td style="padding:12px 0 4px;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#a1a1aa">Email</td>
									</tr>
									<tr>
										<td style="padding:0 0 16px;font-size:16px;color:#f4f4f5">
											<a href="mailto:${fData.email}" style="color:#f4f4f5;text-decoration:underline">${fData.email}</a>
										</td>
									</tr>
									<tr>
										<td style="padding:12px 0 4px;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#a1a1aa">Message</td>
									</tr>
									<tr>
										<td style="padding:0 0 8px;font-size:15px;line-height:1.6;color:#d4d4d8;white-space:pre-wrap">${fData.message}</td>
									</tr>
								</table>
							</td>
						</tr>
						<tr>
							<td style="padding:16px 28px 24px;border-top:1px solid #3f3f46">
								<p style="margin:0;font-size:13px;color:#71717a">Sent from your portfolio contact form</p>
							</td>
						</tr>
					</table>
				</td>
			</tr>
		</table>
	</body>
</html>`;

	// Send email to user
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
