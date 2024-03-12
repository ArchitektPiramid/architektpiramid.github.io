'use client';

import { usePathname } from 'next/navigation';

export default function SubcategoryPage({
	params,
}: {
	params: {
		categoryId: string;
		subcategoryId: string;
	};
}) {
	const pathname = usePathname();
	//const searchParams = useSearchParams();

	return (
		<div className="flex flex-row justify-between">
			<h2>
				CETEGORY ID:{' '}
				<b>
					{pathname} - cID: {params.categoryId}, scID:{' '}
					{params.subcategoryId}
				</b>
			</h2>
		</div>
	);
}
