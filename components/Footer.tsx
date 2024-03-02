const Footer: React.FC = () => {
	const curr_year: string = '© ' + new Date().getFullYear();
	return (
		<footer className="fixed bottom-0 w-full bg-gray-900 pb-5">
			<hr className="border-0 h-px mb-2 bg-gray-300" />
			<div className="inline-flex items-center justify-center w-full">
				<hr className="w-96 h-px bg-gray-200 border-0"></hr>
				<span className="absolute px-2 text-xs text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
					{curr_year} ArchitektPiramid. All Rights Reserved
				</span>
			</div>
		</footer>
	);
};

export default Footer;
