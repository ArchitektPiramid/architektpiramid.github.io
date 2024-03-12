import clsx from 'clsx';
import Link from 'next/link';

interface PropsProjCat {
	nav: INavSidebarBtn;
	isSelected: boolean;
}

const ButtonMainSidebar = (props: PropsProjCat) => {
	const sClass = props.isSelected ? '+' : '-';
	const btnOn = props.nav.enabled;
	const styleSelected = clsx(
		'border-b py-2',
		btnOn && ' hover:bg-gray-600 hover:border-b-4',
		!btnOn && 'bg-gray-900 cursor-not-allowed',
	);
	// disabled:  cursor-not-allowed, aria-disabled={true}
	return (
		<Link aria-disabled={btnOn} href={props.nav.href}>
			<li className={styleSelected}>
				{sClass} {props.nav.name}{' '}
				<span className="inline-flex items-center justify-center w-1 h-3 p-2.5 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
					3
				</span>
				<span className="inline-flex items-center justify-center px-2 ml-2 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
					New
				</span>
			</li>
		</Link>
	);
};

export default ButtonMainSidebar;
