'use client';

import { useRouter } from 'next/navigation';

export default function ProjectsPage() {
	const router = useRouter();
	const handleClick = () => {
		router.back();
	};
	return (
		<div>
			<h1 className="pt-5">There will be project list</h1>
			<button onClick={handleClick}>Back BTN</button>
		</div>
	);
}
