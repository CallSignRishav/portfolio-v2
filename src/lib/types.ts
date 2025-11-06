import { ComponentProps, ReactNode } from "react";

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
