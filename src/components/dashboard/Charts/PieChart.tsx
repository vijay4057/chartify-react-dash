
import React from 'react';
import ReactECharts from 'echarts-for-react';

interface PieChartDataItem {
  value: number;
  name: string;
  itemStyle?: {
    color: string;
  };
}

interface PieChartProps {
  data: PieChartDataItem[];
  title?: string;
  centerText?: {
    value: string | number;
    subtitle?: string;
  };
}

const PieChart: React.FC<PieChartProps> = ({ data, title, centerText }) => {
  const options = {
    tooltip: {
      trigger: 'item'
    },
    title: title ? {
      text: title,
      left: 'left',
      textStyle: {
        fontSize: 14,
        fontWeight: 'normal'
      }
    } : undefined,
    series: [
      {
        type: 'pie',
        radius: ['55%', '80%'],
        center: ['50%', '50%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 0,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
        },
        emphasis: {
          label: {
            show: false
          }
        },
        data: data,
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
      },
      {
        type: 'text',
        left: 'center',
        top: 'center',
        style: {
          text: centerText.subtitle || 'Total',
          fontSize: 12,
          textAlign: 'center',
          y: 20
        }
      }
    ] : undefined
  };

  return <ReactECharts option={options} style={{ height: '100%', width: '100%' }} />;
};

export default PieChart;
