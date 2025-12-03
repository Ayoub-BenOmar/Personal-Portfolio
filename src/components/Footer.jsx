import React from 'react';

export default function Footer() {
	return (
		<footer className="py-6 bg-white border-t">
			<div className="max-w-4xl mx-auto px-4 text-center text-gray-600">
				© {new Date().getFullYear()} Ayoub — Built with React & Tailwind
			</div>
		</footer>
	);
}
