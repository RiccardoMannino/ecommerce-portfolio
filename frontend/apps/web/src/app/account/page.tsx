import { auth } from "@/auth";
import Image from "next/image";

export default async function Account() {
	const session = await auth();

	return (
		<div className="flex flex-col ">
			<ul className="grid grid-cols-1 gap-4">
				<li>Nome utente:{session?.user?.name}</li>
				<li>Email:{session?.user?.email}</li>
				<li className="flex gap-2 items-center">
					Immagine:
					<Image
						src={`${session?.user?.image}`}
						alt="Profile Image"
						width={50}
						height={50}
						className="rounded"
					/>
				</li>
			</ul>
		</div>
	);
}
