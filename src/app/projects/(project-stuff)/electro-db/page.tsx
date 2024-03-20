import Link from 'next/link';
import { StrictMode } from 'react';
import { Capacitor2, CapacitorIMG } from 'src/icons/hardcodedIcons';

export default function ElectroDbMainPage() {
	return (
		<div className="flex flex-row justify-between">
			<StrictMode>
				<Link href="/projects/electro-db">
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"></button>
				</Link>
				<Link href="/projects/electro-dbs">
					<button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
						Components
					</button>
				</Link>
				<CapacitorIMG
					fill={'blue'}
					width={100}
					height={100}
					scale={'4px'}
				/>
			</StrictMode>
		</div>
	);
}
