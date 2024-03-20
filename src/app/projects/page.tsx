'use client';

import isDEBUG from '@/utils/helper';
import { useRouter } from 'next/navigation';
import { cn } from 'src/lib/utils';

export default function ProjectsPage() {
	const router = useRouter();
	const handleClick = () => {
		router.back();
	};
	return (
		<div
			className={cn(
				'flex flex-col max-w-screen-lg w-screen mx-6',
				isDEBUG() && 'border-dashed border-2 border-red-500',
			)}
		>
			<h1 className="pt-5">There will be project list</h1>
			<button onClick={handleClick}>Back BTN</button>
			{/* <ProjectListComponent /> */}
		</div>
	);
}
