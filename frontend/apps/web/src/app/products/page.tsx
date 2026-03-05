import { medusa } from "@/lib/medusa";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

export default async function Prodotti() {
	const { products } = await medusa.store.product.list();

	return (
		<div>
			{/* Prodotti */}
			<section>
				<h2 className="text-2xl font-semibold mb-6">Prodotti </h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{products.map((product) => (
						<Link href={`/products/${product.id}`} key={product.id}>
							<Card className="hover:shadow-lg transition-shadow cursor-pointer">
								<CardContent className="p-4">
									{product.thumbnail && (
										<Image
											src={product.thumbnail}
											alt={product.title}
											width={300}
											height={400}
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
						</Link>
					))}
				</div>
			</section>
		</div>
	);
}
