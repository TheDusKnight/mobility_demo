import React from 'react';
import { Line } from '@ant-design/charts';
import MyJson from '../data/small.json';

const myObject = JSON.parse(MyJson);

const Page = () => {
  const data = myObject;

  const config = {
    data,
    title: {
      visible: true,
      text: '带数据点的折线图',
    },
    description: {
      visible: true,
      text: '将数据按照某一字段进行分组，用于比对不同类型数据的趋势。',
    },
    xField: 'date',
    yField: 'value',
    seriesField: 'type',
    responsive: true,
  };
  return <Line {...config} />;
};

export default Page;
