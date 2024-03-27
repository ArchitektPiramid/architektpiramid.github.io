import { useState } from 'react';
import { cn } from 'src/lib/utils';
import { FaExclamationCircle } from 'react-icons/fa';

type Props = {
	style?: React.CSSProperties;
	projectData: ComponentTableProps;
};

const DEFAULT_IMAGE_URL =
	'htts://via.placeholder.com/400x300?text=Image+Not+Available';

export default function ProjectContextComponent({
	projectData: project,
}: Props) {
	const [showError, setShowError] = useState<boolean>(false);
	const imageError = project.imageUrl ? null : 'Image not available';

	return (
		<div
			className={cn(
				'p-4 min-w-md max-w-lg relative z-10',
				'bg-gray-800 rounded-lg',
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
				alt={project.name}
				className={cn(
					'text-center mx-auto h-48',
					imageError && 'max-w-40',
				)}
			/>

			<div
				className={cn(
					'text-center py-2',
					`bg-${project?.versionInfo?.backgroundColor} text-${project?.versionInfo?.fontColor} text-xl font-semibold`,
				)}
			>
				{project.name}
			</div>
			<p className="text-justify text-sm text-gray-100 indent-6 line-clamp-3 hover:line-clamp-none">
				{project.description}
			</p>
			<div className="flex justify-center space-x-4 mt-2">
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
			</div>
		</div>
	);
}
