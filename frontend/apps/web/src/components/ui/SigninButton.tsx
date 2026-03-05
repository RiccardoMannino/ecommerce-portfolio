import { signIn } from "@/auth";
import Image from "next/image";

export function SigninButton() {
	return (
		<form
			action={async () => {
				"use server";
				await signIn("google", { redirectTo: "/account" });
			}}
		>
			<button type="submit" className="border-2 p-4 hover:cursor-pointer">
				Accedi con google{" "}
				<Image
					src="/google.svg"
					alt="Google logo"
					width={20}
					height={20}
					className="inline-block ml-2"
				/>
			</button>
		</form>
	);
}
