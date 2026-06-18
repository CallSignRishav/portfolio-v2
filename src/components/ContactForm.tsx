"use client";

import { sendEmail } from "@/Hooks/email";
import { contactFormSchema } from "@/lib/schemas";
import { ContactFormDataType } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "./ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Spinner } from "./ui/spinner";
import { Textarea } from "./ui/textarea";

const ContactForm = () => {
	const rhForm = useForm<ContactFormDataType>({
		resolver: zodResolver(contactFormSchema),
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
		mode: "all",
	});

	const contactFormSubmit = async (fData: ContactFormDataType) => {
		const { success, message } = await sendEmail(fData);

		if (!success) {
			toast.error(message);
		}

		if (success) {
			rhForm.reset();

			toast.success(message);
		}
	};

	return (
		<>
			<Form {...rhForm}>
				<form
					onSubmit={rhForm.handleSubmit(contactFormSubmit)}
					className="space-y-8">
					<FormField
						control={rhForm.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-white/50">
									Name
								</FormLabel>
								<FormControl>
									<Input
										className="rounded-none border border-white/20 text-slate-200 focus-visible:border focus-visible:ring-0"
										placeholder="Enter your name"
										{...field}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={rhForm.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-white/50">
									Email
								</FormLabel>
								<FormControl>
									<Input
										className="rounded-none border border-white/20 text-slate-200 focus-visible:border focus-visible:ring-0"
										placeholder="email@example.com"
										{...field}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={rhForm.control}
						name="message"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-white/50">
									Message
								</FormLabel>
								<FormControl>
									<Textarea
										className="min-h-24 rounded-none border border-white/20 text-slate-200 focus-visible:border focus-visible:ring-0"
										placeholder="Enter your message"
										{...field}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>

					<div className="flex justify-end">
						<Button
							type="submit"
							size={"lg"}
							disabled={rhForm.formState.isSubmitting}
							className="w-28 cursor-pointer rounded-none bg-slate-900/75 text-slate-200 shadow-white/10 transition-all ease-in-out hover:bg-slate-900/50 hover:shadow-md active:scale-95">
							{rhForm.formState.isSubmitting ? (
								<Spinner />
							) : (
								"Submit"
							)}
						</Button>
					</div>
				</form>
			</Form>
		</>
	);
};

export default ContactForm;
