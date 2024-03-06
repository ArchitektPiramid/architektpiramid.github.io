/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const AboutMe: React.FC = () => {
	return (
		<div>
			<h2 className="text-center text-2xl font-bold">About Me</h2>
			<hr className="w-3/4 border-gray-400 mx-auto mt-1 mb-5"></hr>
			<p>
				I'm passionate about software development and hardware
				engineering. With experience in both fields, I enjoy combining
				my knowledge to create innovative solutions.
			</p>
			<p className="pt-4">
				In my free time, I love experimenting with new technologies,
				building projects, and contributing to open-source communities.
			</p>
			<p className="pt-4">
				Feel free to reach out to me at example@example.com. I'd love to
				connect!
			</p>
			<div className="mt-4">
				<h3 className="text-lg font-semibold mb-2">
					Contact Information:
				</h3>
				<ul className="list-disc pl-6">
					<li>Email: example@example.com</li>
					<li>Phone: 123-456-789</li>
					<li>LinkedIn:</li>
				</ul>
			</div>
		</div>
	);
};

export default AboutMe;
