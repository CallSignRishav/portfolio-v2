import AboutSection from "@/components/AboutSection";
import MainHeader from "@/components/Header/MainHeader";

const page = () => {
	return (
		<>
			<div className="px-5">
				<div className="max-w-7xl mx-auto lg:flex lg:justify-between lg:gap-4 py-16 lg:py-0">
					<MainHeader />

					<AboutSection />
				</div>
			</div>
		</>
	);
};

export default page;
