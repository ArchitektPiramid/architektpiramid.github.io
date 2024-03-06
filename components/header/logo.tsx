/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const LogoComp: React.FC = () => {
	const now = new Date();
	const time =
		now.getHours() + ' ' + now.getMinutes() + ':' + now.getSeconds();
	return (
		<div className="flex flex-wrap items-center justify-between mx-auto p-4">
			<Link href="/" className="flex items-center space-x-3">
				<img
					className="h-10"
					src="https://flowbite.com/docs/images/logo.svg"
					alt="Portfolio page Logo"
				></img>
				<span className="self-center text-2xl">Portfolio Page</span>
				<p className="">Test4. Time: {time}</p>
			</Link>
		</div>
	);
};

export default LogoComp;
