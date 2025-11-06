"use client";

import Link from "next/link";

const NameLink = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
		// Clear hash after scroll completes
		setTimeout(() => {
			if (history.pushState) {
				history.pushState(null, "", " ");
			}
		}, 100);
	};

	return (
		<>
			<Link
				href={"/"}
				onClick={scrollToTop}
				className="cursor-pointer">
				Rishav Mondal
			</Link>
		</>
	);
};

export default NameLink;
