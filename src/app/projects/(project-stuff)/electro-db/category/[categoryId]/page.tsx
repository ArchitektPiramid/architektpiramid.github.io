'use client';

import { usePathname, useSearchParams } from 'next/navigation';

export default function CategoryPage({
	params,
}: {
	params: {
		categoryId: string;
	};
}) {
	const pathname = usePathname();
	//const searchParams = useSearchParams();

	return (
		<div className="flex flex-row justify-between">
			<h2>
				CETEGORY ID:{' '}
				<b>
					{pathname} - {params.categoryId}
				</b>
			</h2>
		</div>
	);
}
