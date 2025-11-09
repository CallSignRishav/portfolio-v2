import AllSections from "@/components/AllSections";
import MainHeader from "@/components/Header/MainHeader";
import { env } from "@/lib/env";
import { Metadata } from "next";

export const metadata: Metadata = {
	metadataBase: new URL(`https://${env.DOMAIN_NAME}`),
	title: "Rishav Mondal | Portfolio",
	description:
		"A full-stack web developer who found his way into coding through a slightly unconventional path.",
	keywords:
		"portfolio, rishav mondal, rishav mondal portfolio, developer portfolio website, portfolio website",
	openGraph: {
		images: [`/avira-main-logo-dark.png`],
	},
};

const page = async () => {
	return (
		<>
			<div className="px-5">
				<div className="mx-auto max-w-7xl py-16 lg:flex lg:justify-between lg:gap-4 lg:py-0">
					<MainHeader />

					<main className="lg:w-[52%]">
						<AllSections />
					</main>
				</div>
			</div>
		</>
	);
};

export default page;
