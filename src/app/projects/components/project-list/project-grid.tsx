import isDEBUG, { dBorder } from '@/utils/helper';
import { cn } from 'src/lib/utils';
import { isDeepStrictEqual } from 'util';

// #FDE2F3
// #E5BEEC
// #917FB3
// #2A2F4F

// #212121
// #101519

interface Props {
	children: ComponentTableProps;
}

export default function ProjectGridComponent(props: Props) {
	const { children } = props;
	return (
		<div
			className={cn(
				'max-w-md w-full overflow-hidden',
				'justify-center items-center bg-[#2A2F4F] text-[#f9e3ff]',
				'border-2 border-[#7f9099]',
			)}
		>
			<div className={cn('h-3/5 w-full')}>
				<img
					className={cn('h-full w-full object-cover')}
					src={children.imageUrl}
				/>
			</div>

			<div className={cn('my-2 text-center', `text-xl font-bold`)}>
				{children.title}
			</div>
			<div
				className={cn(
					'px-4',
					'indent-6 line-clamp-3 hover:line-clamp-none',
				)}
			>
				{children.description}
			</div>
		</div>
	);
}
