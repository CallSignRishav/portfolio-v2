"use client";

import { activeIdAtom } from "@/lib/atoms";
import { experiences, projects, techSkills } from "@/lib/informations";
import { useSetAtom } from "jotai";
import { useEffect } from "react";
import ExperienceCard from "./ExperienceCard";
import ProjectCard from "./ProjectCard";
import SkillCard from "./SkillCard";

const AllSections = () => {
	const setActiveId = useSetAtom(activeIdAtom);

	useEffect(() => {
		const sectionIds = [
			"about",
			"experience",
			"projects",
			"skills",
			"contact",
		];

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const sectionId = entry.target.id;

						setActiveId(sectionId);

						// console.log(sectionId);
					}
				});
			},
			{
				root: null,
				rootMargin: "0% 0% -50% 0%", // Adjust this for earlier/later trigger
				threshold: 0.15, // Trigger when 50% of section is visible
			},
		);

		// Observe all sections
		sectionIds.forEach((id) => {
			const element = document.getElementById(id);
			if (element) {
				observer.observe(element);
			}
		});

		return () => observer.disconnect();
	}, [setActiveId]);

	return (
		<div className="font-inter space-y-28 py-24 text-white/80">
			<section
				id="about"
				className="space-y-5 text-justify">
				<div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
					<h2 className="text-sm font-bold tracking-[.4rem] text-slate-200 uppercase lg:sr-only">
						ABOUT
					</h2>
				</div>

				<div className="hidden bg-slate-900/75 px-6 py-5 backdrop-blur lg:block">
					<h2 className="text-lg font-bold tracking-[.4rem] text-slate-200 uppercase">
						ABOUT
					</h2>
				</div>

				<p className="px-5 text-white/50">
					Hi, I&apos;m{" "}
					<span className="text-white">Rishav Mondal</span>, a
					full-stack web developer who found my way into coding
					through a slightly{" "}
					<span className="text-white">unconventional path</span>.
				</p>

				<p className="px-5 text-white/50">
					I <span className="text-white">graduated</span> with a
					degree in Arts and started my career working with Excel and
					Word in administrative roles. But something was missing.{" "}
					<span className="text-white">I wanted to build things</span>
					, not just manage data. So I took a leap, spent a year and a
					half{" "}
					<span className="text-white">
						teaching myself web development
					</span>{" "}
					from scratch. HTML, CSS, JavaScript, and everything that
					came after. It was intense, but I loved every minute of it.
				</p>

				<p className="px-5 text-white/50">
					That self-learning journey led to my first{" "}
					<span className="text-white">teaching role,</span> where I
					got to share HTML and CSS basics with new students. During
					that time, I also{" "}
					<span className="text-white">
						built my first real-world project
					</span>{" "}
					— a complete website for the institute. Seeing something I
					created actually being used by real people?{" "}
					<span className="text-white">
						That feeling stuck with me.
					</span>
				</p>

				<p className="px-5 text-white/50">
					For the past few months, I&apos;ve been working as a
					full-stack developer with a company on{" "}
					<span className="text-white">client projects</span>,
					building modern web applications with{" "}
					<span className="text-white">
						React, Next.js, TypeScript, Node.js.
					</span>{" "}
					I focus on{" "}
					<span className="text-white">
						writing clean, optimized code
					</span>{" "}
					that solves real problems without unnecessary complexity.
					Whether it&apos;s improving API response times through{" "}
					<span className="text-white">
						better database queries, fixing bugs{" "}
					</span>
					before they become issues, or handling both{" "}
					<span className="text-white">
						frontend and backend work,{" "}
					</span>
					I care about making things work well — not just making them
					work.
				</p>

				<p className="px-5 text-white/50">
					I&apos;m comfortable with the full development cycle — from{" "}
					<span className="text-white">
						designing database schemas
					</span>{" "}
					with{" "}
					<span className="text-white">Prisma and PostgreSQL</span>,
					to building responsive UIs with Tailwind CSS, to deploying{" "}
					<span className="text-white">
						production-ready applications.
					</span>{" "}
					My goal is simple: keep growing as a developer while
					building products that people actually want to use.
				</p>
			</section>

			<section
				className="space-y-10 text-justify"
				id="experience">
				<div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
					<h2 className="text-sm font-bold tracking-[.4rem] text-slate-200 uppercase lg:sr-only">
						EXPERIENCES
					</h2>
				</div>

				<div className="hidden bg-slate-900/75 px-6 py-5 backdrop-blur lg:block">
					<h2 className="text-lg font-bold tracking-[.4rem] text-slate-200 uppercase">
						Experiences
					</h2>
				</div>

				<div className="space-y-8">
					{experiences.map((details, index) => {
						return (
							<ExperienceCard
								key={index}
								company={details.company}
								position={details.position}
								startDate={details.startDate}
								description={details.description}
								technologies={details.technologies}
							/>
						);
					})}
				</div>
			</section>

			<section
				className="space-y-5 text-justify"
				id="projects">
				<div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
					<h2 className="text-sm font-bold tracking-[.4rem] text-slate-200 uppercase lg:sr-only">
						PROJECTS
					</h2>
				</div>

				<div className="hidden bg-slate-900/75 px-6 py-5 backdrop-blur lg:block">
					<h2 className="text-lg font-bold tracking-[.4rem] text-slate-200 uppercase">
						Projects
					</h2>
				</div>

				{projects.map((project, index) => {
					return (
						<ProjectCard
							key={index}
							name={project.name}
							description={project.description}
							url={project.url}
							image={project.image}
							technologies={project.technologies}
						/>
					);
				})}
			</section>

			<section
				className="space-y-5 text-justify"
				id="skills">
				<div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
					<h2 className="text-sm font-bold tracking-[.4rem] text-slate-200 uppercase lg:sr-only">
						SKILLS
					</h2>
				</div>

				<div className="hidden bg-slate-900/75 px-6 py-5 backdrop-blur lg:block">
					<h2 className="text-lg font-bold tracking-[.4rem] text-slate-200 uppercase">
						Skills
					</h2>
				</div>

				{techSkills.map((skill, index) => {
					return (
						<SkillCard
							key={index}
							title={skill.title}
							items={skill.items}
						/>
					);
				})}
			</section>

			<section
				className="min-h-[80dvh] space-y-5 text-justify"
				id="contact">
				<div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
					<h2 className="text-sm font-bold tracking-[.4rem] text-slate-200 uppercase lg:sr-only">
						CONTACT
					</h2>
				</div>

				<div className="hidden bg-slate-900/75 px-6 py-5 backdrop-blur lg:block">
					<h2 className="text-lg font-bold tracking-[.4rem] text-slate-200 uppercase">
						Contact
					</h2>
				</div>

				<p className="">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Ipsam, aut enim velit at aliquid atque veniam optio, animi
					soluta numquam ex ad nobis, natus dolores voluptatum
					quibusdam fugit est? A, fuga consectetur tempore dignissimos
					asperiores voluptates natus quibusdam odit dicta. Fugiat
					natus nisi aspernatur repellendus expedita tenetur porro
					eius, cupiditate ratione laudantium autem. Cum, accusantium!
				</p>

				<p className="">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Ipsam, aut enim velit at aliquid atque veniam optio, animi
					soluta numquam ex ad nobis, natus dolores voluptatum
					quibusdam fugit est? A, fuga consectetur tempore dignissimos
					asperiores voluptates natus quibusdam odit dicta. Fugiat
					natus nisi aspernatur repellendus expedita tenetur porro
					eius, cupiditate ratione laudantium autem. Cum, accusantium!
				</p>

				<p className="">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Ipsam, aut enim velit at aliquid atque veniam optio, animi
					soluta numquam ex ad nobis, natus dolores voluptatum
					quibusdam fugit est? A, fuga consectetur tempore dignissimos
					asperiores voluptates natus quibusdam odit dicta. Fugiat
					natus nisi aspernatur repellendus expedita tenetur porro
					eius, cupiditate ratione laudantium autem. Cum, accusantium!
				</p>

				<p className="">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Ipsam, aut enim velit at aliquid atque veniam optio, animi
					soluta numquam ex ad nobis, natus dolores voluptatum
					quibusdam fugit est? A, fuga consectetur tempore dignissimos
					asperiores voluptates natus quibusdam odit dicta. Fugiat
					natus nisi aspernatur repellendus expedita tenetur porro
					eius, cupiditate ratione laudantium autem. Cum, accusantium!
				</p>
			</section>
		</div>
	);
};

export default AllSections;
