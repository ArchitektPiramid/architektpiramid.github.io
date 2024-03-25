'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { cn } from 'src/lib/utils';
import isDEBUG from 'src/utils/helper';
import ProjectInfoComponent from './components/ProjectInfo';
import MoreProductsFadeComp from '../kiosk/pg2/components/more-products';
import { getTestData_v2 } from './test-data';

const handleScroll = () => {
	const scrollPosition = window.scrollY;
	console.log('scroll y:' + scrollPosition.toFixed(1));
};

function handleResize() {
	const pY = window.innerHeight;
	console.log('window size: ', pY);
}

export default function Page() {
	//const router = useRouter();
	let projectsList: ComponentTableProps[] = getTestData_v2();

	// useEffect(() => {
	// 	window.addEventListener('resize', handleResize);
	// 	window.addEventListener('scroll', handleScroll);
	// 	return () => {
	// 		window.removeEventListener('resize', handleResize);
	// 		window.removeEventListener('scroll', handleScroll);
	// 	};
	// });
	// useEffect(() => {

	// });

	return (
		<div
			className={cn(
				'flex flex-col justify-center items-center mx-6',
				// isDEBUG() && 'border-2',
			)}
		>
			<h1>About me page. Router: /about</h1>
			<Link href="./">Back BTN</Link>

			<h1 className="text-3xl font-bold text-center mb-8">
				Project list ({projectsList.length})
			</h1>

			<div
				className={cn(
					'grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3',
					'gap-4',
				)}
			>
				{projectsList.map((proj: ComponentTableProps, i) => (
					<ProjectInfoComponent
						key={proj.id + i}
						projectData={proj}
					/>
				))}
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
