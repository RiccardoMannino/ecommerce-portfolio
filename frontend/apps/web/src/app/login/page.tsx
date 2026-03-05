import { auth } from "@/auth";
import { SigninButton } from "@/components/ui/SigninButton";

export default async function LoginPage() {
	const session = await auth();

	console.log(session);

	return (
		<div>
			{(session?.user?.name && <p>Bentornato, {session.user.name}! </p>) || (
				<SigninButton />
			)}
		</div>
	);
}
