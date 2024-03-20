import { cn } from 'src/lib/utils';

export default function DashboardLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return (
		<section className={cn('')}>
			{/* Include shared UI here e.g. a header or sidebar */}

			{children}
		</section>
	);
}
