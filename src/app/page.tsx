import Link from 'next/link';
import React from 'react';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1 className="text-3xl font-bold">IN PROGRESS...</h1>
			<button
				type="button"
				className="px-8 py-3 font-semibold rounded dark:bg-gray-100 dark:text-gray-800"
			>
				<Link href="/about">ABOUT subpage</Link>
			</button>
		</main>
	);
}
