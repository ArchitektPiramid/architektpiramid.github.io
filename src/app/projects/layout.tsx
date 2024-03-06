'use client';

import Link from 'next/link';
import SidebarList from './components/sidebarList';
import { usePathname } from 'next/navigation';

const navProjectLinks: INavSidebarBtn[] = [
	{
		name: 'First Projects',
		href: '/projects/first-apps',
		enabled: true,
		testField: false,
	},
	{
		name: 'Home Rack',
		href: '/projects/home-server',
		enabled: true,
		testField: false,
	},
	{
		name: 'ElectroDB',
		href: '/projects/major',
		enabled: false,
		testField: false,
	},
	{
		name: 'RoboMajor',
		href: '/projects/major',
		enabled: true,
		testField: false,
	},
];

export default function ProjectsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	//const [pathName, setPathName] = usePathname() ?? '';
	return (
		<div className="flex flex-wrap">
			<aside className="top-0 left-0 z-60 w-48 h-screen transition-transform -translate-x-full sm:translate-x-0">
				<SidebarList navigation={navProjectLinks} />

				{/* <div className="h-full py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
					<ul className="space-y-2 font-medium">
						<li className="w-full px-4 py-2 border-b border-gray-600">
							TEST TEST 1
						</li>
						<Link
							href="/server"
							className="hover:text-white hover:bg-gray-600"
						>
							<li className="hover:text-white hover:bg-gray-600">
								TEST TEST 2
							</li>
						</Link>

						<li>TEST TEST dddd</li>
					</ul>
				</div> */}
			</aside>
			{/* <ul className="">
				{navProjectLinks.map((link) => {
					return (
						<li
							className="p-4 bg-gray-800 hover:bg-gray-600"
							key={link.name}
						>
							<Link href={link.href}>{link.name}</Link>
						</li>
					);
				})}
			</ul> */}
			{children}
		</div>
	);
}
