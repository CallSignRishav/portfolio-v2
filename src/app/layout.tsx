import { inter } from "@/lib/fonts";
import { ReactNode } from "react";
import "./globals.css";

const RootLayout = ({
	children,
}: Readonly<{
	children: ReactNode;
}>) => {
	return (
		<html
			lang="en"
			className={`${inter.variable}`}>
			<body>{children}</body>
		</html>
	);
};

export default RootLayout;
