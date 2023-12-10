import React from 'react';
import style from '@/components/Navbar.module.css';
import Link from 'next/link';

type props = {
	toggleNavbar: () => void;
};

const FullScreenNavbar = ({ toggleNavbar }: props) => {
	return (
		<div
			className={`${style.fullScreenNavbar} flex items-center justify-center`}
		>
			<div className={`${style.closeBtn}`} onClick={toggleNavbar}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className="w-8 h-8 hover:cursor-pointer"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			</div>
			<div className="flex flex-col">
				<Link
					href="/"
					onClick={toggleNavbar}
					className="mx-6 text-xl font-bold font-mono text-center py-4 hover:pointer"
				>
					Home
				</Link>
				<Link
					href="/about"
					onClick={toggleNavbar}
					className="mx-6 text-xl font-bold font-mono text-center py-4 hover:pointer"
				>
					About
				</Link>
				<Link
					href="/products"
					onClick={toggleNavbar}
					className="mx-6 text-xl font-bold font-mono text-center py-4 hover:pointer"
				>
					Products
				</Link>
				<Link
					href="/contact"
					onClick={toggleNavbar}
					className="mx-6 text-xl font-bold font-mono text-center py-4 hover:pointer"
				>
					Contact
				</Link>
			</div>
		</div>
	);
};

export default FullScreenNavbar;
