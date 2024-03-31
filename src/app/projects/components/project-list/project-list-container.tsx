import { cn } from 'src/lib/utils';
import ProjectGridComponent from './project-grid';

export default function ProjectListContainer({
	children,
}: {
	children: ComponentTableProps[];
}) {
	const listItems = children.map((item) => (
		<ProjectGridComponent key={item.id}>{item}</ProjectGridComponent>
	));
	//'grid grid-cols-1 gap-4',
	//'lg:grid-cols-2 2xl:grid-cols-3',
	//flex flex-wrap justify-center gap-4 p-4
	return (
		<div className={cn('flex flex-wrap justify-center', 'gap-6')}>
			{listItems}
		</div>
	);
}
