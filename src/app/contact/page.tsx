'use client';

import { FormEvent } from 'react';
import ContactForm from './components/contact-form';
import AboutMe from './components/about-me';

export default function PageContact() {
	async function onSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const formData: FormData = new FormData(event.currentTarget);
		const response = await fetch('/api/submit', {
			method: 'POST',
			body: formData,
		});

		// Handle response if necessary
		const data = await response.json();
		// ...
	}
	return (
		<div className="container mx-auto py-10 mb-16">
			<div className="flex flex-col md:flex-row md:space-x-6">
				{/* left section - my contact*/}
				<div className="w-full md:w-1/3">
					<AboutMe />
				</div>
				{/* right section - form */}
				<div className="bg-gray-900 w-2/3">
					<ContactForm onSubmit={onSubmit} />
				</div>
			</div>
		</div>
	);
}
