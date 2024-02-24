import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
	title: 'ArchitektPiramid page',
	description: 'Page containing blog/portfolio. Belongs to Dominik Nowak',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head></head>
			<body>
				{/* Layout UI */}
				<main>{children}</main>
				<Footer />
				{/* Layout UI */}
			</body>
		</html>
	);
}
