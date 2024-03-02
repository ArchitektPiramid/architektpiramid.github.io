import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import todoIcon from '../../public/in_progress.svg';

export default function HomePage() {
	return (
		<main className="flex space-y-12 flex-col items-center justify-between">
			<h1 className="animate-pulse text-3xl font-bold mt-8">
				IN PROGRESS...
			</h1>
			<div>
				<h1 className="font-semibold text-2xl px-24 pb-2">
					Version v0.1
				</h1>
				<ul
					role="list"
					className="marker:text-sky-400 list-disc pl-5 leading-2 text-slate-400"
				>
					<li className="line-through marker:text-lime-400 decoration-stone-200">
						repair and config tailwindcss package
					</li>
					<li className="line-through">add basic layout metadata</li>
					<li>fix Footer component</li>
				</ul>
			</div>
			<div className="py-12 space-x-3">
				<button
					type="button"
					className="uppercase hover:font-black hover:bg-gray-50 px-8 h-12 font-bold rounded dark:bg-gray-100 dark:text-gray-800"
				>
					<Link href="/about">About</Link>
				</button>

				<button
					type="button"
					className="uppercase hover:font-black hover:bg-gray-50 px-8 h-12 font-bold rounded dark:bg-gray-100 dark:text-gray-800"
				>
					<Link href="/projects">Projects</Link>
				</button>

				<button
					type="button"
					disabled
					className="px-8 h-12 disabled:line-through disabled:bg-gray-500 bg-gray-100 text-gray-800 rounded font-bold uppercase"
				>
					Other
				</button>
			</div>
		</main>
	);
}
