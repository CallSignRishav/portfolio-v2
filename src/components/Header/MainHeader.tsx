import Link from "next/link";

const MainHeader = () => {
	return (
		<header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24 bg-blue-600">
			<div className="flex flex-col gap-10">
				<div className="flex flex-col gap-5">
					<p className="text-4xl">RISHAV MONDAL</p>

					<p className="text-2xl">WEB DEVELOPER</p>
				</div>

				<nav className="hidden lg:block">
					<ul>
						<li>ABOUT</li>

						<li>PROJECTS</li>

						<li>SKILLS</li>

						<li>CONTACT</li>
					</ul>
				</nav>
			</div>

			<div className="flex items-center gap-4">
				<Link href={""}>GitHub</Link>

				<Link href={""}>LinkedIn</Link>

				<Link href={""}>Instagram</Link>
			</div>
		</header>
	);
};

export default MainHeader;
