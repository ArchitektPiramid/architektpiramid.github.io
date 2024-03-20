'use client';

import { usePathname } from 'next/navigation';

export default function ProjectsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	function showPath(pathArray: string[]): string {
		const str = pathArray.slice(3);
		return str.toString();
	}

	const path = usePathname()?.split('/') ?? [];
	return (
		<div>
			<h1>
				<span className="text-red-500 font-extrabold">PATH:</span>:{' '}
				{showPath(path).toUpperCase()}
			</h1>
			{children}
		</div>
	);
}
