const RootFooter: React.FC = () => {
	const y: string = '© ' + new Date().getFullYear();
	return (
		<footer className="h-25 w-full bottom-0 bg-gray-950 items-center text-center">
			<hr className="mx-16" />
			<div className="inline-flex items-center justify-center w-full">
				<hr className="w-96 h-px bg-gray-200 border-0"></hr>
				<span className="absolute px-2 py-2 text-sm -translate-x-1/2 bg-gray-950 left-1/2 text-white">
					{y} ArchitektPiramid. All Rights Reserved
				</span>
			</div>
		</footer>
	);
};

export default RootFooter;
