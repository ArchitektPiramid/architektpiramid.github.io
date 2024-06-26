import ProjectContextComponent from './proj-preview/project-preview';

export default function ProjectsList({
	children,
}: {
	children: ComponentTableProps[];
}) {
	const listItems = children.map((item) => (
		<ProjectContextComponent key={item.id} projectData={item} />
	));

	return listItems;
}
