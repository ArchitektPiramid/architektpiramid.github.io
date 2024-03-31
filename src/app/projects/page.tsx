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

import { useEffect } from 'react';
import { cn } from 'src/lib/utils';
import isDEBUG from 'src/utils/helper';
import { getTestData_v2 } from './test-data';
import { useRouter } from 'next/navigation';
import ProjectListContainer from './components/project-list/project-list-container';

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
			<h1 className="pt-4 text-3xl font-bold text-center mb-8">
				Project list ({projectsList.length})
			</h1>

			<ProjectListContainer>{projectsList}</ProjectListContainer>
			<div
				className={cn(
					'cursor-pointer px-6 py-2 my-8 bg-fuchsia-950',
					'rounded-sm hover:bg-fuchsia-800',
				)}
				onClick={handleClick}
			>
				Back BTN
			</div>
		</div>
	);
}
