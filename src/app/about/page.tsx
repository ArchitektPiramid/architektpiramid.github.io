'use client';
import { useRouter } from 'next/navigation';

export default function Page() {
	const router = useRouter();
	return (
		<div className='className="flex min-h-screen flex-col items-center justify-between p-24"'>
			<h1>About me page. Router: /about</h1>
			<button
				type="button"
				className="rounded dark:bg-gray-100 dark:text-gray-800"
				onClick={() => router.back()}
			>
				Back BTN
			</button>
		</div>
	);
}
