import HeaderNavbarComponent from './headerNavbar';
import HeaderLogoComponent from './headerLogo';
import isDEBUG from 'src/utils/helper';
import { cn } from 'src/lib/utils';

const navHeaderLinks: IHeaderNavLinks[] = [
	{ name: 'Home', href: '/' },
	{ name: 'Projects', href: '/projects' },
	{ name: 'About me', href: '/about' },
	{ name: 'Contact', href: '/contact' },
];

// sticky IN HEADER
const RootHeader: React.FC = () => {
	return (
		<header
			className={cn(
				'top-0 bg-gray-950 flex flex-wrap items-center justify-between mx-auto pt-4 pb-2 border-b-2 z-20 border-gray-600',
				isDEBUG() && 'border-dashed border-2 border-sky-500',
			)}
		>
			{/* <div>
					<h1>#01</h1>
					<h2>#02</h2>
					<h3>#03</h3>
				</div> */}
			<HeaderLogoComponent />
			<HeaderNavbarComponent valuesList={navHeaderLinks} />
		</header>
		// <header className="flex flex-wrap items-center mx-auto justify-between pt-4 border-b-2 border-gray-600 bg-gray-950">
		// 	<LogoComp />
		// 	<NavbarComp valuesList={navHeaderLinks} />
		// </header>
	);
};

export default RootHeader;
