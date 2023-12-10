'use client';
import React from 'react';
import ReactECharts from 'echarts-for-react';
import { CandleStickOption } from '@/echarts/CandleStick/CandleStick';
import { GaugeOption } from '@/echarts/Gauge/GaugeEcharts';

const MyPage = () => {
	return (
		<div className="pt-20 pb-10">
			<div className="py-5 text-center font-bold text-lg">Apache E-Charts</div>
			<hr />
			<div className="py-5 text-center font-bold text-lg text-pink-600">
				CandleStick
			</div>
			<ReactECharts option={CandleStickOption} />
			<hr />
			<div className="py-5 text-center font-bold text-lg text-pink-600">
				Gauge
			</div>
			<ReactECharts option={GaugeOption} />

			<hr />
		</div>
	);
};

export default MyPage;
