import { ReactNode } from "react";
import "./globals.css";

const RootLayout = ({
	children,
}: Readonly<{
	children: ReactNode;
}>) => {
	return (
		<html lang="en">
			<body>
				<main>{children}</main>
			</body>
		</html>
	);
};

export default RootLayout;
