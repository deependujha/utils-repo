'use client';
import React, { useState } from 'react';
import FullScreenNavbar from './FullScreenNavbar';
import style from '@/components/Navbar.module.css';

const ToggleNavbar = () => {
	const [toggle, setToggle] = useState(false);

	const toggleNavbar = () => {
		setToggle(!toggle);
	};

	return (
		<>
			<div className={`hover:cursor-pointer`} onClick={toggleNavbar}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className="w-8 h-8"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</div>
			{toggle && <FullScreenNavbar toggleNavbar={toggleNavbar} />}
		</>
	);
};

export default ToggleNavbar;
