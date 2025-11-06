"use client";

import { activeIdAtom } from "@/lib/atoms";
import { useAtomValue } from "jotai";

const NavLinks = () => {
	const activeId = useAtomValue(activeIdAtom);

	return (
		<>
			<ul className="space-y-8 text-white">
				<li>
					<a
						href="#about"
						className={`${activeId === "" ? "scale-105 shadow-md" : ""} ${activeId === "about" ? "scale-105 shadow-md" : ""} bg-slate-900/50 px-6 py-3 shadow-white/10 backdrop-blur-sm transition-all duration-500 ease-in-out`}>
						ABOUT
					</a>
				</li>

				<li>
					<a
						href="#projects"
						className={`${activeId === "projects" ? "scale-105 shadow-md" : ""} bg-slate-900/50 px-6 py-3 shadow-white/10 backdrop-blur-sm transition-all duration-500 ease-in-out`}>
						PROJECTS
					</a>
				</li>

				<li>
					<a
						href="#skills"
						className={`${activeId === "skills" ? "scale-105 shadow-md" : ""} bg-slate-900/50 px-6 py-3 shadow-white/10 backdrop-blur-sm transition-all duration-500 ease-in-out`}>
						SKILLS
					</a>
				</li>

				<li>
					<a
						href="#contact"
						className={`${activeId === "contact" ? "scale-105 shadow-md" : ""} bg-slate-900/50 px-6 py-3 shadow-white/10 backdrop-blur-sm transition-all duration-500 ease-in-out`}>
						CONTACT
					</a>
				</li>
			</ul>
		</>
	);
};

export default NavLinks;
