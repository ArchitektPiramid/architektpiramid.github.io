import Link from 'next/link';
import { cn } from 'src/lib/utils';
import isDEBUG from 'src/utils/helper';

const projectsArray: ComponentTableProps[] = [
	{
		id: 1,
		name: 'AAAAAAA',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		imageUrl: 'https://via.placeholder.com/150',
	},
	{
		id: 2,
		name: 'AAAA',
		description:
			'Suspendisse potenti. In vel turpis vitae mauris blandit cursus. Suspendisse potenti. In vel mauris blandit cursus. Suspendisse vitae mauris blandit cursus. Suspendisse potenti. In vel turpis vitae mauris blandit cursus.',
		imageUrl: 'https://via.placeholder.com/150',
	},
	{
		id: 3,
		name: 'A AA',
		description:
			'Vivamus nec urna id justo vestibulum accumsan nec eget elit.',
		imageUrl: 'https://via.placeholder.com/150',
	},
	{
		id: 1,
		name: 'AAAAAAA',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		imageUrl: 'https://via.placeholder.com/150',
	},
	{
		id: 2,
		name: 'AAAA',
		description:
			'Suspendisse potenti. In vel turpis vitae mauris blandit cursus. Suspendisse potenti. In vel turpis vitae mauris blandit cursus.',
		imageUrl: 'https://via.placeholder.com/150',
	},
	{
		id: 3,
		name: 'A AA',
		description:
			'Vivamus nec urna id justo vestibulum accumsan nec eget elit.',
		imageUrl: 'https://via.placeholder.com/150',
	},
	{
		id: 1,
		name: 'AAAAAAA',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		imageUrl: 'https://via.placeholder.com/150',
	},
	{
		id: 2,
		name: 'AAAA',
		description:
			'Suspendisse potenti. In vel turpis vitae mauris blandit cursus. Suspendisse potenti. In vel turpis vitae mauris blandit cursus. Suspendisse potenti. In vel turpis vitae mauris blandit cursus.',
		imageUrl: 'https://via.placeholder.com/150',
	},
	{
		id: 3,
		name: 'A AA',
		description:
			'Vivamus nec urna id justo vestibulum accumsan nec eget elit.',
		imageUrl: 'https://via.placeholder.com/150',
	},
];

export default function Page() {
	//const router = useRouter();
	const projects = projectsArray;

	return (
		<div
			className={cn(
				'flex flex-col justify-center items-center mx-6',
				isDEBUG() && 'border-2',
			)}
		>
			<h1>About me page. Router: /about</h1>
			<Link href="./">Back BTN</Link>

			<h1 className="text-3xl font-bold text-center mb-8">
				Project list ({projects.length})
			</h1>
			<div
				className={cn(
					'grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3',
					'gap-4',
				)}
			>
				{projects.map((proj) => (
					<div
						key={proj.id}
						className={cn(
							'bg-gray-800 rounded-lg border',
							'p-4 min-w-md max-w-lg border-gray-800',
							'hover:border-gray-600',
						)}
					>
						<img
							src={proj.imageUrl}
							alt={proj.name}
							className="mx-auto"
						/>
						<h2 className="text-gray-200 text-lg font-semibold mt-4">
							{proj.name}
						</h2>
						<p className="indent-6 text-justify text-sm line-clamp-3 hover:line-clamp-none text-gray-100">
							{proj.description}
						</p>
					</div>
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
