'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

// const NavbarComp: React.FC<navLinkData> = (props) => {
// 	const navArray = props;
// 	return <></>;
// };

interface Props {
	valuesList: INavLinkData[];
}

const NavbarComp = (props: Props) => {
	const klik = () => {
		console.warn('KLIK');
	};

	const pathN = usePathname() ?? '';
	//const [state, setState] = useState<string>('none');

	//console.warn('----');
	const navArray = props.valuesList;
	return (
		<div>
			<div className="flex flex-wrap justify-center">
				{navArray.map((navBtn) => {
					const isActive = pathN?.startsWith(navBtn.href);
					//console.log('nav: ' + navBtn.href + ' = ' + state);
					return (
						<div key={navBtn.name}>
							<Link
								className="inline-block bg-gray-800 text-gray-200 hover:border-gray-900 hover:bg-gray-600 p-4 me-2 "
								href={navBtn.href}
								key={navBtn.name}
							>
								{isActive && '> '} {navBtn.name}
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default NavbarComp;
