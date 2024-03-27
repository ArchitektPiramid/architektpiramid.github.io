import { useState } from 'react';
import { cn } from 'src/lib/utils';
import { FaExclamationCircle } from 'react-icons/fa';
import isDEBUG from '@/utils/helper';

// #FDE2F3
// #E5BEEC
// #917FB3
// #2A2F4F

// #212121
// #101519

type Props = {
	style?: React.CSSProperties;
	projectData: ComponentTableProps;
};

const DEFAULT_IMAGE_URL =
	'htts://via.placeholder.com/400x300?text=Image+Not+Available';

function projInfo(title: string, description: string) {
	// 	<div
	// 	className={cn(
	// 		'text-center py-2',
	// 		`bg-${project?.versionInfo?.backgroundColor} text-${project?.versionInfo?.fontColor} text-xl font-semibold`,
	// 	)}
	// >
	// 	{project.name}
	// </div>
	// <p className="text-justify text-sm text-gray-100 indent-6 line-clamp-3 hover:line-clamp-none">
	// 	{project.description}
	// </p>
	return (
		<div
			className={cn(
				'px-6 py-4',
				isDEBUG() && 'border-dashed border-2 border-red-500',
			)}
		>
			<div className={cn('mb-2 text-center', `text-xl font-bold`)}>
				{title}
			</div>
			<p
				className={cn(
					'text-justify text-base ',
					'indent-6 line-clamp-3 hover:line-clamp-none',
				)}
			>
				{description}
			</p>
		</div>
	);
}

export default function ProjectContextComponent({
	projectData: project,
}: Props) {
	const [showError, setShowError] = useState<boolean>(false);
	const imageError = project.imageUrl ? null : 'Image not available';

	return (
		<div
			className={cn(
				'min-w-md max-w-lg relative z-10',
				'bg-[#2A2F4F] rounded-lg shadow-lg',
				'border border-gray-800 hover:border-gray-300',
			)}
		>
			{imageError && (
				<div className="absolute top-0 left-0 p-2">
					<FaExclamationCircle
						className={cn('size-6 text-red-500 cursor-pointer')}
						onMouseEnter={() => {
							setShowError(true);
						}}
						onMouseLeave={() => {
							setShowError(false);
						}}
					/>
					{showError && (
						<div
							className={cn(
								'absolute p-2 text-sm top-12 left-0 whitespace-nowrap',
								'bg-gray-900 text-red-400 rounded',
							)}
						>
							{imageError}
						</div>
					)}
				</div>
			)}
			{/* <div className="pt-1">v1</div> */}
			<img
				src={project.imageUrl || DEFAULT_IMAGE_URL}
				alt={project.title}
				className={cn(
					'text-center mx-auto h-48',
					imageError && 'max-w-40',
				)}
			/>
			{projInfo(project.title, project.description)}
			{/* <div className="flex justify-center space-x-4 mt-2">
				<div
					className={`px-2 py-1 bg-${project?.categoryInfo?.color} text-white rounded`}
				>
					{project?.categoryInfo?.category}
				</div>
				<div
					className={`px-2 py-1 bg-${project?.statusInfo?.backgroundColor} text-${project?.statusInfo?.fontColor} rounded`}
				>
					{project?.statusInfo?.status}
				</div>
			</div> */}
		</div>
	);
}
