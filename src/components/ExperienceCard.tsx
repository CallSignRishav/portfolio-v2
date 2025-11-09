import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

type PropsType = {
	company: string;
	position: string;
	startDate: string;
	description: string;
	technologies: string[];
};

const ExperienceCard = ({
	company,
	position,
	startDate,
	description,
	technologies,
}: PropsType) => {
	return (
		<Card className="rounded-none border-none border-white/10 bg-slate-900/50 shadow-none shadow-gray-950/40 hover:bg-slate-800/50 hover:shadow-lg">
			<CardContent className="space-y-3">
				<div className="space-y-1">
					<div className="flex flex-col items-start justify-center gap-1">
						<p className="text-xs text-white/50">{startDate}</p>

						<h2 className="text-xl font-bold text-white">
							{position}
						</h2>
					</div>

					<p className="text-xs text-white/50">{company}</p>
				</div>

				<div className="space-y-5">
					<p className="text-base text-white/50">{description}</p>

					<div className="flex flex-wrap items-start justify-start gap-4">
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
			</CardContent>
		</Card>
	);
};

export default ExperienceCard;
