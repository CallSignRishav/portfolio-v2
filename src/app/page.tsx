import AboutSection from "@/components/AboutSection";
import MainHeader from "@/components/Header/MainHeader";

const page = () => {
	return (
		<>
			<div className="px-5">
				<div className="mx-auto max-w-7xl py-16 lg:flex lg:justify-between lg:gap-4 lg:py-0">
					<MainHeader />

					<main className="lg:w-[52%]">
						<AboutSection />
					</main>
				</div>
			</div>
		</>
	);
};

export default page;
