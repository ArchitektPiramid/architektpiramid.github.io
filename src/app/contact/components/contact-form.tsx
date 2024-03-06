import React from 'react';

interface ContactFormProps {
	onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
	return (
		<div className="max-w-sm mx-auto pt-4">
			<h2 className="text-center text-2xl font-bold">Contact</h2>
			<p>name, Your Email, Phone number, Topic, Message</p>
			<form className="mx-auto" onSubmit={onSubmit}>
				<div className="mb-4">
					<label
						htmlFor="name"
						className="block text-gray-200 font-bold mb-2"
					>
						Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						placeholder="your-email@gmail.com"
						className="bg-gray-600 rounded-md px-3 py-2 w-full"
					/>
				</div>
				<button
					type="submit"
					className="bg-blue-500 text-gray-100 px-4 py-2 rounded-md hover:bg-blue-600"
				>
					Send Message
				</button>
			</form>
		</div>
	);
};

export default ContactForm;

// export default function ContactForm({ onSubmit }) {
// 	return (
// 		<form className="max-w-md mx-auto" onSubmit={onSubmit}>
// 			<div className="mb-4">
// 				<label
// 					htmlFor="name"
// 					className="block text-gray-700 font-bold mb-2"
// 				>
// 					Name
// 				</label>
// 				<input
// 					type="text"
// 					id="name"
// 					name="name"
// 					className="border rounded-md px-3 py-2 w-full"
// 				/>
// 			</div>
// 			<div className="mb-4">
// 				<label
// 					htmlFor="email"
// 					className="block text-gray-700 font-bold mb-2"
// 				>
// 					Your Email
// 				</label>
// 				<input
// 					type="email"
// 					id="email"
// 					name="email"
// 					className="border rounded-md px-3 py-2 w-full"
// 				/>
// 			</div>
// 			<div className="mb-4">
// 				<label
// 					htmlFor="phone"
// 					className="block text-gray-700 font-bold mb-2"
// 				>
// 					Phone number
// 				</label>
// 				<input
// 					type="tel"
// 					id="phone"
// 					name="phone"
// 					className="border rounded-md px-3 py-2 w-full"
// 				/>
// 			</div>
// 			<div className="mb-4">
// 				<label
// 					htmlFor="topic"
// 					className="block text-gray-700 font-bold mb-2"
// 				>
// 					Topic
// 				</label>
// 				<input
// 					type="text"
// 					id="topic"
// 					name="topic"
// 					className="border rounded-md px-3 py-2 w-full"
// 				/>
// 			</div>
// 			<div className="mb-4">
// 				<label
// 					htmlFor="message"
// 					className="block text-gray-700 font-bold mb-2"
// 				>
// 					Message
// 				</label>
// 				<textarea
// 					id="message"
// 					name="message"
// 					className="border rounded-md px-3 py-2 w-full"
// 				></textarea>
// 			</div>
// 			<button
// 				type="submit"
// 				className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
// 			>
// 				Send Message
// 			</button>
// 		</form>
// 	);
// }
