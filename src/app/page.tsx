'use client';

import React from 'react';
//import Image from 'next/image';
//import todoIcon from '../../public/in_progress.svg';

export default function HomePage() {
	return (
		<div className="flex space-y-12 flex-col items-center justify-between">
			<h1 className="animate-pulse text-3xl font-bold mt-8">
				IN PROGRESS...
			</h1>

			{/* <div>
				<ul
					role="list"
					className="marker:text-sky-400 list-disc pl-5 leading-2 text-slate-400"
				>
					<li className="line-through marker:text-lime-400 decoration-stone-200">
						repair and config tailwinds package
					</li>
					<li className="line-through">add basic layout metadata</li>
					<li>fix Footer component</li>
				</ul>
			</div> */}
		</div>
	);
}
