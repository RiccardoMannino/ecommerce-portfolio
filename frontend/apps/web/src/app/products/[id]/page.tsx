import { Button } from "@/components/ui/button";
import type { Metadata, ResolvingMetadata } from "next";
import { medusa } from "@/lib/medusa";

type Props = {
	params: Promise<{ id: string }>;
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata,
): Promise<Metadata> {
	// read route params
	const { id } = await params;

	const product = await medusa.store.product.retrieve(id);

	const previousImages = (await parent).openGraph?.images || [];

	return {
		title: product.product.title,
		openGraph: {
			images: [`${product.product.thumbnail}`, ...previousImages],
		},
		description: product.product.description,
	};
}

// params deve essere una promise
type Params = { params: Promise<{ id: string }> };

export default async function Prodotto({ params }: Params) {
	//id e` il parametro della pagina cioe` l'id del prodotto singolo cliccato nella pagina precedente
	const { id } = await params;

	//col metodo retrieve ricaviamo , usando l'id del prodotto , il singolo prodotto
	const product = await medusa.store.product.retrieve(id);

	console.log(product.product.id);

	return (
		<div className="grid grid-cols-2 gap-8">
			<img
				src={`${product?.product.thumbnail}`}
				alt={product.product.title}
				className="w-full h-full rounded-2xl"
			/>
			<div className="flex flex-col gap-10">
				<p>{product.product.title}</p>
				<p>{product.product.description}</p>
				<Button>Aggiungi al Carrello</Button>
			</div>
		</div>
	);
}
