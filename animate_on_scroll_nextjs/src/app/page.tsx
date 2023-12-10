'use client';
import AnimateOnScrollFunction from '@/utils/AnimateOnScrollFunction';
import React from 'react';

const MyPage = () => {
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
			<section>
				<h1>Scroll Down to Reveal Elements &#8595;</h1>
			</section>
			<section>
				<div className="container reveal fade-bottom">
					<h2>Caption</h2>
					<div className="text-container">
						<div className="text-box">
							<h3>Section Text</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
								eius molestiae perferendis eos provident vitae iste.
							</p>
						</div>
						<div className="text-box">
							<h3>Section Text</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
								eius molestiae perferendis eos provident vitae iste.
							</p>
						</div>
						<div className="text-box">
							<h3>Section Text</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
								eius molestiae perferendis eos provident vitae iste.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className="container reveal fade-left">
					<h2>Caption</h2>
					<div className="text-container">
						<div className="text-box">
							<h3>Section Text</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
								eius molestiae perferendis eos provident vitae iste.
							</p>
						</div>
						<div className="text-box">
							<h3>Section Text</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
								eius molestiae perferendis eos provident vitae iste.
							</p>
						</div>
						<div className="text-box">
							<h3>Section Text</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
								eius molestiae perferendis eos provident vitae iste.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className="container reveal fade-right">
					<h2>Caption</h2>
					<div className="text-container">
						<div className="text-box">
							<h3>Section Text</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
								eius molestiae perferendis eos provident vitae iste.
							</p>
						</div>
						<div className="text-box">
							<h3>Section Text</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
								eius molestiae perferendis eos provident vitae iste.
							</p>
						</div>
						<div className="text-box">
							<h3>Section Text</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
								eius molestiae perferendis eos provident vitae iste.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default MyPage;
