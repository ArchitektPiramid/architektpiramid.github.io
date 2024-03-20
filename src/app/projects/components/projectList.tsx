'use client';

import React, { useState } from 'react';
import * as R from 'react';

const ProjectListComponent: React.FC = () => {
	const [showAll, setShowAll] = useState(false);
	const [shoes, setShoes] = useState<ComponentTableProps[]>(testProjectList);

	const toggleShowAll = () => {
		setShowAll((prevState) => !prevState);
	};

	return (
		<div className="container">
			<h1 className="text-3xl font-bold text-center mb-8">
				Project list
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{shoes.slice(0, showAll ? shoes.length : 3).map((shoe) => (
					<div key={shoe.id} className="bg-gray-100 p-4 rounded-lg">
						<img
							src={shoe.imageUrl}
							alt={shoe.name}
							className="mx-auto"
						/>
						<h2 className="text-lg font-semibold mt-4">
							{shoe.name}
						</h2>
						<p className="text-gray-600">{shoe.description}</p>
					</div>
				))}
			</div>
			<div
				className={`overflow-hidden transition-max-h ease-in-out duration-500 ${showAll ? 'max-h-full' : 'max-h-0'}`}
			>
				<div className="max-w-screen-xl mx-auto p-8">
					<h2 className="text-2xl font-semibold mb-4">
						More Products
					</h2>
					<div className="grid grid-cols-5 gap-4">
						{Array.from({ length: 30 }).map((_, index) => (
							<div
								key={index}
								className="bg-gray-100 p-2 rounded-lg"
							>
								<img
									src={shoes[0].imageUrl}
									alt={shoes[0].name}
									className="mx-auto"
								/>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="text-center mt-8">
				<button
					onClick={toggleShowAll}
					className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
				>
					{showAll ? 'Show Less' : 'Show More'}
				</button>
			</div>
		</div>
	);
};

export default ProjectListComponent;
