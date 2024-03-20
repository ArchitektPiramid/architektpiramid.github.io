/* eslint-disable @next/next/no-img-element */
import isDEBUG from '@/utils/helper';
import Link from 'next/link';
import LogoIcon from 'src/icons/logo-icon';
import { cn } from 'src/lib/utils';

const HeaderLogoComponent: React.FC = () => {
	const now = new Date();
	const time =
		now.getHours() + ' ' + now.getMinutes() + ':' + now.getSeconds();
	return (
		<div
			className={cn(
				'flex flex-wrap p-4',
				'items-center justify-between mx-auto',
				isDEBUG() && 'border-dashed border-2 border-orange-500',
			)}
		>
			<Link href="/" className="flex items-center space-x-3">
				<LogoIcon
					fill={'white'}
					width={60}
					height={60}
					scale={'4px'}
					className="animate-spin"
				/>
				<span className="self-center text-2xl">Portfolio Page</span>
				<p className="">Test4. Time: {time}</p>
			</Link>
		</div>
	);
};

export default HeaderLogoComponent;
