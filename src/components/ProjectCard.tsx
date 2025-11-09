import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

type PropsType = {
	name: string;
	description: string;
	url: string;
	image: string;
	technologies: string[];
};

const ProjectCard = ({
	name,
	description,
	url,
	image,
	technologies,
}: PropsType) => {
	return (
		<>
			<Card className="rounded-none border-none border-white/10 bg-slate-900/50 shadow-none shadow-gray-950/40 hover:bg-slate-800/50 hover:shadow-lg">
				<CardContent>
					<Link
						href={url}
						target="_blank"
						className="grid grid-cols-5 place-items-start">
						<div className="col-span-2 flex items-center justify-center">
							<Image
								src={image}
								alt={`${name} image`}
								width={480}
								height={270}
								className="aspect-video h-auto w-auto object-cover"
							/>
						</div>

						<div className="col-span-3 space-y-1.5 pl-5">
							<div className="flex items-center gap-3">
								<h2 className="text-xl font-bold text-white">
									{name}
								</h2>

								<ExternalLink className="size-5 text-white" />
							</div>

							<p className="text-base text-white/50">
								{description}
							</p>

							<div className="mt-4 flex flex-wrap items-start justify-start gap-4">
								{technologies.map((tech, index) => {
									return (
										<Badge
											key={index}
											variant={"outline"}
											className="text-white">
											{tech}
										</Badge>
									);
								})}
							</div>
						</div>
					</Link>
				</CardContent>
			</Card>
		</>
	);
};

export default ProjectCard;
