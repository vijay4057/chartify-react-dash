
import React from 'react';
import ReactECharts from 'echarts-for-react';

interface HeatMapChartProps {
  data: number[][];
  xAxisLabels?: string[];
  yAxisLabels?: string[];
  title?: string;
  centerText?: {
    value: string | number;
  };
}

const HeatMapChart: React.FC<HeatMapChartProps> = ({ 
  data, 
  xAxisLabels, 
  yAxisLabels, 
  title,
  centerText
}) => {
  const defaultXLabels = Array(data[0]?.length || 0).fill('').map((_, index) => `0.00`);
  const defaultYLabels = Array(data.length || 0).fill('').map((_, index) => `0.00`);

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
      position: 'top'
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
      data: xAxisLabels || defaultXLabels,
      splitArea: {
        show: true
      }
    },
    yAxis: {
      type: 'category',
      data: yAxisLabels || defaultYLabels,
      splitArea: {
        show: true
      }
    },
    visualMap: {
      show: false,
      min: 0,
      max: Math.max(...data.map(row => Math.max(...row))),
      calculable: true,
      inRange: {
        color: ['#313695', '#4575b4', '#74add1', '#abd9e9']
      }
    },
    series: [
      {
        name: 'Value',
        type: 'heatmap',
        data: data.flatMap((row, i) => 
          row.map((value, j) => [j, i, value])
        ),
        label: {
          show: true,
          formatter: (params: any) => {
            return params.data[2];
          },
          color: '#fff'
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ],
    graphic: centerText ? [
      {
        type: 'text',
        left: 'center',
        top: 'center',
        style: {
          text: centerText.value.toString(),
          fontSize: 24,
          fontWeight: 'bold',
          textAlign: 'center',
        }
      }
    ] : undefined
  };

  return <ReactECharts option={options} style={{ height: '100%', width: '100%' }} />;
};

export default HeatMapChart;
