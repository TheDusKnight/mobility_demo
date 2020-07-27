import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';

const DemoLine = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://raw.githubusercontent.com/TheDusKnight/mobility_demo/test/src/data/mobility_demo_small.json')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => {
        console.log('fetch data failed', error);
      });
  };

  const config = {
    title: {
      visible: true,
      text: 'Transit Stations Rate from 02-15 to 7-20',
    },
    description: {
      visible: true,
      text:
        'Label california, Florida, New Mexico, New York, Texas rate change',
    },
    padding: [20, 100, 30, 80],
    forceFit: true,
    data,
    xField: 'date',
    yField: 'value',
    seriesField: 'name',
    xAxis: {
      type: 'dateTime',
      label: {
        visible: true,
        autoHide: true,
      },
    },
    yAxis: {
      // formatter: v => `${(v / 1000000000).toFixed(1)} Rate Change`,
      formatter: v => `${(v)} Rate Change`,
    },
    legend: {
      visible: false,
    },
    label: {
      visible: true,
      type: 'line',
    },
    animation: {
      appear: {
        animation: 'clipingWithData',
      },
    },
    smooth: false,
  };
  return <Line {...config} />;
};

export default DemoLine;
