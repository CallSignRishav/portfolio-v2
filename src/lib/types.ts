import { ComponentProps, ReactNode } from "react";
import z from "zod";
import { contactFormSchema } from "./schemas";

export type MotionCustomProps = Omit<
	ComponentProps<"div">,
	| "onDrag"
	| "onDragEnd"
	| "onDragStart"
	| "onDragEnter"
	| "onDragExit"
	| "onDragLeave"
	| "onDragOver"
	| "onDrop"
	| "onAnimationStart"
	| "onAnimationEnd"
	| "onAnimationIteration"
	| "onTransitionEnd"
	| "onTransitionStart"
	| "onTransitionRun"
	| "onTransitionCancel"
> & {
	children?: ReactNode;
	delay?: number;
	duration?: number;
	className?: string;
};

export type ContactFormDataType = z.infer<typeof contactFormSchema>;
