import { medusa } from "@/lib/medusa";
import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Medusa Ecommerce Homepage  ",
	description: "Homepage E-commerce",
};

export default async function Home() {
	const { products } = await medusa.store.product.list();

	return (
		<div>
			{/* Hero */}
			<section className="text-center py-20 mb-12">
				<h1 className="text-5xl font-bold mb-4">Benvenuto su MyStore</h1>
				<p className="text-muted-foreground text-lg">
					Scopri i nostri prodotti
				</p>
			</section>

			{/* Prodotti */}
			<section>
				<h2 className="text-2xl font-semibold mb-6">Prodotti in evidenza</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{products.map((product) => (
						<a href={`/products/${product.id}`} key={product.id}>
							<Card className="hover:shadow-lg transition-shadow cursor-pointer">
								<CardContent className="p-4">
									{product.thumbnail && (
										<img
											src={product.thumbnail}
											alt={product.title}
											width={300}
											height={350}
											className="w-full h-48 object-cover rounded-md mb-4"
										/>
									)}
									<Badge variant="secondary" className="mb-2">
										{product.collection?.title ?? "Generale"}
									</Badge>
									<h3 className="font-semibold text-lg">{product.title}</h3>
									<p className="text-muted-foreground text-sm mt-1 line-clamp-2">
										{product.description}
									</p>
								</CardContent>
							</Card>
						</a>
					))}
				</div>
			</section>
		</div>
	);
}
