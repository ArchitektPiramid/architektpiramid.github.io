import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Footer from '@/components/Footer';
import '@/styles/globals.css';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'ArchitektPiramid page',
	description: 'Page containing blog/portfolio. Belongs to Dominik Nowak',
};

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
			<body className={inter.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}

// html
//   head
//   body
//     header
//     main
//     footer
//   body
// html
