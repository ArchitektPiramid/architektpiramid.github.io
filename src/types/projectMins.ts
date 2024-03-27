type StatusInfo = {
	id?: number;
	value?: string;
	status?: string;
	backgroundColor?: string;
	fontColor?: string;
};

type VersionInfo = {
	value: string;
	backgroundColor: string;
	fontColor: string;
};

type CategoryInfo = {
	id: number;
	value?: string;
	category?: string;
	color?: string;
};

interface ComponentTableProps {
	id: number;
	title: string;
	description: string;
	imageUrl?: string;
	tags?: string[];
	categoryInfo?: CategoryInfo;
	versionInfo?: VersionInfo;
	statusInfo?: StatusInfo;
}

const testProjectList: ComponentTableProps[] = [
	{
		id: 1,
		title: 'AAAAAAA',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		imageUrl: 'https://via.placeholder.com/150',
	},
	{
		id: 2,
		title: 'AAAA',
		description:
			'Suspendisse potenti. In vel turpis vitae mauris blandit cursus.',
		imageUrl: 'https://via.placeholder.com/150',
	},
	{
		id: 3,
		title: 'A AA',
		description:
			'Vivamus nec urna id justo vestibulum accumsan nec eget elit.',
		imageUrl: 'https://via.placeholder.com/150',
	},
];
