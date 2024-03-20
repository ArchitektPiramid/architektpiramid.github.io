import Link from 'next/link';

export default function ElectroDbMainPage() {
	return (
		<div className="flex flex-row justify-between">
			<Link href="/projects/electro-db/category">
				<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
					Category
				</button>
			</Link>
			<Link href="/projects/electro-db/components">
				<button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
					Components
				</button>
			</Link>
		</div>
	);
}
