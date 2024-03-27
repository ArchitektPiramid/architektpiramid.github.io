// 'use client';

// import isDEBUG from '@/utils/helper';
// import { useRouter } from 'next/navigation';
// import { cn } from 'src/lib/utils';

// export default function ProjectsPage() {
// 	const router = useRouter();
// 	const handleClick = () => {
// 		router.back();
// 	};
// 	return (
// 		<div
// 			className={cn(
// 				'flex flex-col max-w-screen-lg w-screen mx-6',
// 				isDEBUG() && 'border-dashed border-2 border-red-500',
// 			)}
// 		>
// 			<h1 className="pt-5">There will be project list</h1>
// 			<button onClick={handleClick}>Back BTN</button>
// 			{/* <ProjectListComponent /> */}
// 		</div>
// 	);
// }

'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { cn } from 'src/lib/utils';
import isDEBUG from 'src/utils/helper';
import ProjectContextComponent from './components/proj-preview/project-preview';
import MoreProductsFadeComp from '../kiosk/pg2/components/more-products';
import { getTestData_v2 } from './test-data';
import { useRouter } from 'next/navigation';
import ProjectsList from './components/list-projects';

const handleScroll = () => {
	const scrollPosition = window.scrollY;
	console.log('scroll y:' + scrollPosition.toFixed(1));
};

function handleResize() {
	const pY = window.innerHeight;
	console.log('window size: ', pY);
}

export default function Page() {
	const router = useRouter();
	let projectsList: ComponentTableProps[] = getTestData_v2();

	const handleClick = () => {
		router.back();
	};

	return (
		<div
			className={cn(
				'flex flex-col justify-center items-center mx-6',
				// isDEBUG() && 'border-2',
			)}
		>
			<h1>PROJECTS: /projects</h1>
			<div
				className={cn(
					'cursor-pointer px-6 py-2 bg-fuchsia-950',
					'rounded-sm hover:bg-fuchsia-800',
				)}
				onClick={handleClick}
			>
				Back BTN
			</div>

			<h1 className="text-3xl font-bold text-center mb-8">
				Project list ({projectsList.length})
			</h1>

			<div
				className={cn(
					'grid grid-cols-1 gap-4',
					'lg:grid-cols-2 2xl:grid-cols-3',
				)}
			>
				<ProjectsList>{projectsList}</ProjectsList>
			</div>

			{/* <button
				type="button"
				className="rounded dark:bg-gray-100 dark:text-gray-800"
				onClick={() => router.back()}
			>
				Back BTN
			</button> */}
		</div>
	);
}
