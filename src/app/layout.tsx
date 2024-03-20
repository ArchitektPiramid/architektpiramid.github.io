import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import RootHeader from '@/components/header/RootHeader';
import RootFooter from '@/components/footer/RootFooter';
import { cn } from 'src/lib/utils';
import isDEBUG from '@/utils/helper';

const inter = Inter({ subsets: ['latin'] });

export const meta: Metadata = {
	title: 'ArchitektPiramid - Blog & Portfolio',
	description: 'Personal blog and portfolio',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head></head>
			<body className="${inter.className}">
				<RootHeader />
				<main
					className={cn(
						'mx-auto justify-center bg-gray-950',
						'max-w-screen-2xl',
						isDEBUG() && 'border-dashed border-2 border-blue-300',
					)}
				>
					{children}
				</main>
				<RootFooter />
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
