interface CategoryListProps {
	categories: ICategory[];
}
const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
	return (
		<table className="min-w-full divide-y divide-gray-800">
			<thead className="bg-gray-600">
				<tr>
					<th
						scope="col"
						className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
					>
						Name
					</th>
					<th
						scope="col"
						className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
					>
						Description
					</th>
				</tr>
			</thead>
			<tbody className="bg-gray-800 divide-y divide-gray-600">
				{categories.map((category) => (
					<tr key={category.name} className="text-sn">
						<td className="px-6 py-4 whitespace-nowrap">
							{category.name}
						</td>
						<td className="px-6 py-4 whitespace-nowrap">
							{category.description ?? 'NO DESC'}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default CategoryList;
