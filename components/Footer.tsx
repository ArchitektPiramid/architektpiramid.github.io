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
	const curr_year = new Date().getFullYear();
	return (
		<footer className="items-center flex-col bg-white">
			<div className="">
				<hr className="mb-4 w-full" />
				<span className="pt-4 justify-between">
					{curr_year}d Nowak Dominik. All Rights Reserved.
				</span>
			</div>
		</footer>
	);
};

export default Footer;
