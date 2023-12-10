'use client';
import AnimateOnScrollFunction from '@/utils/AnimateOnScrollFunction';
import React from 'react';

const NewPage = () => {
	return (
		<div
			style={{
				border: '1px solid black',
				width: '100vw',
				height: '100vh',
				overflow: 'auto',
			}}
			onScroll={AnimateOnScrollFunction}
		>
			<div className="flex h-screen w-screen">
				<div className="m-auto text-3xl font-bold font-mono text-white">
					Scroll Down to Reveal Elements &#8595;
				</div>
			</div>
			<div className="flex h-screen w-screen bg-pink-500">
				<div className="m-auto text-3xl font-bold font-mono text-white reveal fade-right">
					Hello world
				</div>
			</div>
		</div>
	);
};

export default NewPage;
