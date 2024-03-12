'use client';

import Link from 'next/link';
import SidebarList from './components/sidebarList';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navProjectLinks: INavSidebarBtn[] = [
	{
		name: 'First Projects',
		href: '/projects/first-apps',
		isEnabled: true,
		testField: false,
	},
	{
		name: 'Home Rack',
		href: '/projects/home-server',
		isEnabled: true,
		testField: false,
	},
	{
		name: 'ElectroDB',
		href: '/projects/major',
		isEnabled: false,
		testField: false,
	},
	{
		name: 'RoboMajor',
		href: '/projects/major',
		isEnabled: true,
		testField: false,
	},
];

type ToggleAside = () => void;

const renderAside = (toggleAside: ToggleAside) => {
	return (
		<aside className="fixed z-60 w-56 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-gray-800 text-gray-300">
			<div className="sticky top-0 h-16 flex items-center justify-center px-4">
				<button
					type="button"
					onClick={toggleAside}
					className="h-6 w-6 bg-transparent rounded-md transition duration-300 ease-in-out transform hover:scale-110 focus:outline-none"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				</button>
			</div>
			<div className="h-screen overflow-auto">
				<SidebarList navigation={navProjectLinks} />
			</div>
		</aside>
	);
};

const renderBody = (children: React.ReactNode) => {
	return <div className="ml-56 transition-margin">{children}</div>;
};

export default function ProjectsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [sidebarVisible, setSidebarVisible] = useState<boolean>(true);

	const toggleAside = () => {
		const asideEl = document.querySelector('aside');
		if (asideEl) {
			asideEl.classList.toggle('-translate-y-full');
			setSidebarVisible(!sidebarVisible);
		}
	};

	return (
		<div className="flex flex-wrap">
			{renderAside(toggleAside)}
			{renderBody(children)}
			<div>
				<button
					className="text-white bg-gray-700 p-2 rounded-md hover:bg-gray-600"
					onClick={toggleAside}
				>
					<h2>{sidebarVisible ? 'HIDE SIDEBAR' : 'SHOW SIDEBAR'}</h2>
				</button>
			</div>
		</div>
	);
}
