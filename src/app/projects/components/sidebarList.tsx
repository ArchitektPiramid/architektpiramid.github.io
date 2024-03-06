import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef, useState } from 'react';

interface BtnProps {}

// const TestProp = ({
// 	title,
// 	desc = 'empty',
// 	focusOn: isActive = false,
// }: any) => {
// 	const activeStyle: string = isActive ? 'font-normal' : 'font-thin';

// 	return (
// 		<div className="">
// 			<div className={activeStyle}>title: {title}</div>
// 			<div className="font-xs font-thin">desc: {desc}</div>
// 		</div>
// 	);
// };

// function ProjBtn(btnData: INavLinkData, selected: boolean = false) {
// 	const g = selected;
// 	return (
// 		<div>
// 			<h2>hwhw</h2>
// 			{btnData.name} - {g}
// 		</div>
// 	);
// }
interface PropsProjCat {
	nav: INavSidebarBtn;
	isSelected: boolean;
}

const MainProjectCategory = (props: PropsProjCat) => {
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

// const ProjButton = (btnData: INavLinkData) => {
// 	//const isSelected: boolean = props?.selected ?? false;
// 	//console.log(isSelected);
// 	console.log(btnData);
// 	// const btnID: INavSidebarBtn = bb;

// 	return (
// 		<Link href={btnData.href}>
// 			{/* <li className="border-b border-gray-400 hover:bg-gray-400 py-2">
// 				- = {btnData.name} = {isSelected ? '1' : '0'}-
// 			</li> */}
// 		</Link>
// 	);
// };

interface Props {
	navigation: INavSidebarBtn[];
}

const SidebarList = (props: Props) => {
	const [focusOn, setFocusOn] = useState(false);
	const pathN = usePathname();
	const navList = props.navigation;
	return (
		<div className="h-full overflow-y-auto py-4 bg-gray-800">
			<ul className="font-medium">
				{navList.map((btn: INavSidebarBtn) => {
					return (
						<MainProjectCategory
							key={btn.name}
							isSelected={pathN == btn.href}
							nav={btn}
						/>
					);
					//return <ProjButton key={btn.name} />;
				})}

				{/* {TestProp({ title: 'titleeeeee' })}
				<TestProp title={'ebeeeee'} {...navList} /> */}
				{/* {props.navigation.map((btn) => {
					return (
						<TestProp
							key={btn.name}
							title={btn.name}
							desc={'d'}
							focusOn={pathN == btn.href}
							{...navList}
						/>
						// <li
						// 	key={btn.name}
						// 	className="border-b py-1 hover:bg-gray-600"
						// >
						// 	<Link href={btn.href} className="ml-4">
						// 		{btn.name}
						// 	</Link>
						// </li>
					);
				})} */}
			</ul>
		</div>
	);
};

export default SidebarList;
