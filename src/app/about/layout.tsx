import GroupList from './components/groupList';

export default function DashboardLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return (
		<section>
			{/* Include shared UI here e.g. a header or sidebar */}
			<h2>About layout</h2>
			<GroupList />
			{children}
		</section>
	);
}
