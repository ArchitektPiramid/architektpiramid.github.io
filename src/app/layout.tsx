import Footer from '@/components/Footer';
import '@/styles/globals.css';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
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
