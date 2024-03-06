import NavbarComp from './header/navbar';
import LogoComp from './header/logo';

const navHeaderLinks: INavLinkData[] = [
	{ name: 'Home', href: '/' },
	{ name: 'Projects', href: '/projects' },
	{ name: 'About me', href: '/about' },
	{ name: 'Contact', href: '/contact' },
];

const Header: React.FC = () => {
	return (
		<header className="flex flex-wrap items-center mx-auto justify-between pt-4 border-b-2 border-gray-600 bg-gray-950">
			<LogoComp />
			<NavbarComp valuesList={navHeaderLinks} />
		</header>
	);
};

export default Header;
