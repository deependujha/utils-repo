# Apache Echarts

- [apache-echarts](https://echarts.apache.org/en/index.html)
- [apache-react-echarts](https://git.hust.cc/echarts-for-react/)

- Install:

```bash
npm install echarts-for-react
```

- Usage:

```js
import React from 'react';
import ReactECharts from 'echarts-for-react';

const Page: React.FC = () => {
  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };

  return <ReactECharts option={options} />;
};

export default Page;
```

- Change Options for chart that you want to display. 😎

- **Just visit official website of apache echarts and select the example chart. Copy the options and use it.** 💹🧑‍💻
