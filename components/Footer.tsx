// export default function Footer() {
// 	return (
// 		<footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
// 			<div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
// 				<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
// 				<span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
// 				 20220 Nowak Dominik. All Rights Reserved.
// 				</span>
// 			</div>
// 		</footer>
// 	)
// }

const Footer: React.FC = () => {
	const curr_year: string = '© ' + new Date().getFullYear();
	return (
		<footer className="fixed bottom-0 w-full bg-gray-900 pb-4">
			<hr className="border-0 h-px mb-3 bg-gray-300" />
			<div className="text-xs text-center text-gray-200">
				{curr_year} ArchitektPiramid. All Rights Reserved
			</div>
		</footer>
	);
};

export default Footer;
