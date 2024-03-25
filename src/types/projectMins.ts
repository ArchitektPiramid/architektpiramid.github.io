interface ComponentTableProps {
	id: number;
	category?: string;
	name: string;
	description: string;
	imageUrl?: string;
	tags?: string[];
}

const testProjectList: ComponentTableProps[] = [
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
			'Suspendisse potenti. In vel turpis vitae mauris blandit cursus.',
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
