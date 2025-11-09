export const env = {
	serverUrl: process.env.SERVER_URL as string,
	publicUrl: process.env.NEXT_PUBLIC_URL as string,

	// Email
	user: process.env.user as string,
	pass: process.env.pass as string,

	// Domain
	DOMAIN_NAME: process.env.DOMAIN_NAME as string,
};
