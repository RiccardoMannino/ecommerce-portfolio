import type { Metadata } from "next";
import Link from "next/link";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Medusa Ecommerce Portfolio ",
	description: "Il mio e-commerce",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="it">
			<body className={`${geist.className} bg-background text-foreground`}>
				<header className="border-b">
					<div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
						<Link href="/" className="font-bold text-xl">
							MyStore
						</Link>
						<nav className="flex items-center gap-6">
							<Link href="/products" className="text-sm hover:underline">
								Prodotti
							</Link>
							<Link href="/login" className="text-sm hover:underline">
								Login
							</Link>
							<Link href="/cart" className="text-sm hover:underline">
								Carrello
							</Link>
						</nav>
					</div>
				</header>
				<main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
				<footer className="border-t mt-16">
					<div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-center">
						<p className="text-sm text-muted-foreground">© 2026 MyStore</p>
					</div>
				</footer>
			</body>
		</html>
	);
}
