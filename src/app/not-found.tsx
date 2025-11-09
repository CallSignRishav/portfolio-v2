import Link from "next/link";

const NotFound = () => {
	return (
		<>
			<section className="font-inter flex h-dvh flex-col items-center justify-center space-y-3 text-center">
				<h1 className="text-4xl font-bold text-slate-200 lg:text-6xl">
					404
				</h1>
				<p className="text-xl text-white/50">
					Oops! The page you are looking for does not exist.
				</p>

				<Link
					href="/"
					className="text-blue-500 hover:text-blue-700">
					Go back home
				</Link>
			</section>
		</>
	);
};

export default NotFound;
