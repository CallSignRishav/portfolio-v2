import { MotionCustomProps } from "@/lib/types";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const LinkAnimate = ({
	children,
	delay,
	duration,
	className,
}: MotionCustomProps) => {
	return (
		<>
			<motion.div
				// initial={{ opacity: 0, translateX: -150 }}
				// whileInView={{ opacity: 1, translateX: 0 }}
				// viewport={{ once: true, margin: "-80px" }}
				// transition={{
				// 	delay: delay || 0.5,
				// 	duration: duration || 0.5,
				// }}

				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: duration || 0.5, delay: delay || 0.5 }}
				viewport={{ once: false, amount: 0.3 }}
				className={cn(className)}>
				{children}
			</motion.div>
		</>
	);
};

export default LinkAnimate;
