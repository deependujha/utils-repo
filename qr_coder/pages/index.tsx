import React, { useEffect } from 'react';
import QRCode from 'qrcode';

const Index = () => {
	useEffect(() => {
		QRCode.toCanvas(
			document.getElementById('qrcode'),
			'https://imgd.aeplcdn.com/1200x900/n/cw/ec/102895/rc-200-2021-right-front-three-quarter.jpeg?isig=0',
			{
				width: 400,
				color: {
					dark: '#0000ff',
					light: '#ffffff',
				},
				errorCorrectionLevel: 'H',
			}
		);
	}, []);

	return (
		<div>
			<canvas id="qrcode"></canvas>
		</div>
	);
};

export default Index;
