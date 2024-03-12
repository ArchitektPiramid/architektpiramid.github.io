import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef, useState } from 'react';
import ButtonMainSidebar from './ButtonMain';

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
						<ButtonMainSidebar
							{...btn}
							key={btn.name}
							isSelected={pathN == btn.href}
							//nav={btn}
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
