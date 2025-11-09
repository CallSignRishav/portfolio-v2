import z from "zod";

export const contactFormSchema = z.object({
	name: z
		.string()
		.min(2, { error: "Name is too short" })
		.max(50, { error: "Name is too long" }),
	email: z.email({ error: "Email is invalid" }),
	message: z
		.string()
		.min(2, { error: "Message is too short" })
		.max(500, { error: "Message is too long" }),
});
