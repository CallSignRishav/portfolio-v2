import { Dot } from "lucide-react";
import { Card, CardContent } from "./ui/card";

type PropsType = {
	title: string;
	items: string[];
};

const SkillCard = ({ title, items }: PropsType) => {
	return (
		<>
			<Card className="rounded-none border-none border-white/10 bg-slate-900/50 shadow-none shadow-gray-950/40 hover:bg-slate-800/50 hover:shadow-lg">
				<CardContent className="flex flex-col items-center justify-center lg:flex-row">
					<div className="flex w-full justify-center lg:w-2/5">
						<p className="flex items-center gap-2 text-slate-200">
							<Dot />
							{title}
							<Dot />
						</p>
					</div>

					<div className="w-full space-y-1.5 pt-5 lg:w-3/5 lg:pt-0 lg:pl-5">
						{/* <div className="w-full bg-slate-900 py-1.5 text-center">
							<p className="text-white/50">JavaScript</p>
						</div> */}

						{items.map((item, index) => {
							return (
								<div
									key={index}
									className="w-full bg-slate-900 py-1.5 text-center">
									<p className="text-white/50">{item}</p>
								</div>
							);
						})}
					</div>
				</CardContent>
			</Card>
		</>
	);
};

export default SkillCard;
