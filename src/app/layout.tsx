import { inter } from "@/lib/fonts";
import { ReactNode } from "react";
import { Toaster } from "sonner";
import "./globals.css";

const RootLayout = ({
	children,
}: Readonly<{
	children: ReactNode;
}>) => {
	return (
		<html
			lang="en"
			className={`${inter.variable} scroll-smooth`}
			data-scroll-behavior="smooth">
			<body className="min-h-screen bg-linear-to-tr from-slate-950 via-gray-900 to-blue-950 bg-fixed">
				{children}

				<Toaster
					position="top-center"
					richColors
				/>
			</body>
		</html>
	);
};

export default RootLayout;
