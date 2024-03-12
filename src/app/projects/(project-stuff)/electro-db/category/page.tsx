import Link from 'next/link';
import CategoryList from './category-list';

const testDB: ICategory[] = [
	{
		id: '1',
		name: 'Kondensator elektrolityczny',
		category: 'Kondensatory elektrolityczne',
		description: 'Przykładowy opis kondensatora',
		price: 1.5,
		purchaseDate: '2023-05-20',
	},
	{
		id: '2',
		name: 'Rezystor o stałej wartości',
		category: 'Rezystory o stałej wartości',
		description: 'Przykładowy opis rezystora',
		price: 0.2,
		purchaseDate: '2023-05-25',
	},
];

export default function ElectroDbMainPage() {
	return (
		<>
			<CategoryList categories={testDB} />
			{/* <Link href="/projects/electro-db">

			DO ROUTER BACK
				<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
					BACK
				</button>
			</Link> */}
		</>
	);
}
