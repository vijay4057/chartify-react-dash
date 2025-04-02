
import React from 'react';
import ReactECharts from 'echarts-for-react';

interface BarChartProps {
  data: number[];
  title?: string;
  xAxisLabels?: string[];
  color?: string;
  tooltip?: {
    date: string;
    value: number | string;
  };
}

const BarChart: React.FC<BarChartProps> = ({ 
  data, 
  title, 
  xAxisLabels, 
  color = '#5470c6',
  tooltip
}) => {
  const defaultLabels = Array(data.length).fill('').map((_, index) => `0.00`);
  
  const options = {
    title: title ? {
      text: title,
      left: 'left',
      textStyle: {
        fontSize: 14,
        fontWeight: 'normal'
      }
    } : undefined,
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: tooltip ? `${tooltip.date}<br/>● ${tooltip.value}` : undefined
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '8%',
      top: title ? '15%' : '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: xAxisLabels || defaultLabels,
      axisLabel: {
        interval: 0,
        fontSize: 10,
        rotate: 0
      }
    },
    yAxis: {
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
    },
    series: [
      {
        data: data,
        type: 'bar',
        itemStyle: {
          color: color
        }
      }
    ]
  };

  return <ReactECharts option={options} style={{ height: '100%', width: '100%' }} />;
};

export default BarChart;
