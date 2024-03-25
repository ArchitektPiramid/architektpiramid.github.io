import { useState } from 'react';
import { cn } from 'src/lib/utils';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { FaExclamationCircle } from 'react-icons/fa';

type Props = {
	style?: React.CSSProperties;
	projectData: ComponentTableProps;
};

const DEFAULT_IMAGE_URL =
	'htts://via.placeholder.com/400x300?text=Image+Not+Available';

export default function ProjectInfoComponent(props: Props) {
	const { projectData, style } = props;
	const [error, setErrorInternal] = useState<string | null>(null);
	const setError = (value: string | null) => {
		if (value !== error) {
			setErrorInternal(value);
		}
	};

	const [showError, SetShowError] = useState<boolean>(false);

	const imageUrl = projectData.imageUrl;
	if (imageUrl == undefined) {
		setError('Image not available');
	}

	const handleImageError = () => {
		setError('Image not available');

		console.warn('ERR: ' + error);
	};

	return (
		<div
			className={cn(
				'p-2 min-w-md max-w-lg relative',
				'bg-gray-800 rounded-lg',
				'border border-gray-800 hover:border-gray-300',
			)}
		>
			{error && (
				<div className="absolute top-0 left-0 p-2">
					{' '}
					<FaExclamationCircle
						className="text-red-500 cursor-pointer"
						onMouseEnter={() => {
							SetShowError(true);
						}}
						onMouseLeave={() => {
							SetShowError(false);
						}}
					/>
					{error && showError && (
						<div className="absolute top-0 left-12 p-2 bg-gray-900 text-white rounded">
							{error}
						</div>
					)}
				</div>
			)}
			<img
				src={imageUrl}
				alt={projectData.name}
				className="mx-auto h-48"
				onError={handleImageError}
			/>

			<div
				className={cn(
					'text-center py-2',
					'text-gray-200 text-xl font-semibold',
				)}
			>
				{projectData.name}
			</div>
			<p
				className={cn(
					'text-justify text-sm text-gray-100',
					'indent-6',
					'line-clamp-3 hover:line-clamp-none',
				)}
			>
				{projectData.description}
			</p>
			{error && <p className="text-sm text-red-500">{error}</p>}
		</div>
	);
}
