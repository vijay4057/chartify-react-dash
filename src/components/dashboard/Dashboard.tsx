
import React from 'react';
import MetricsList from './MetricsList';
import PerformanceMetric from './PerformanceMetric';
import TopicBadge from './TopicBadge';
import BarChart from './Charts/BarChart';
import PieChart from './Charts/PieChart';
import HeatMapChart from './Charts/HeatMapChart';
import LogsTable from './LogsTable';

const Dashboard: React.FC = () => {
  // Performance metrics data
  const metricsListItems = [
    { title: 'Context Sufficiency: Passed', value: '0.93', status: 'passed' },
    { title: 'Answer Completeness: Passed', value: '0.74', status: 'warning' },
    { title: 'Groundness: Score', value: '0.50', status: 'failed' },
  ];

  // Most common topics data
  const topics = [
    { title: 'History', count: 52, color: 'bg-blue-500' },
    { title: 'Entertainment', count: 47, color: 'bg-green-500' },
    { title: 'Science', count: 31, color: 'bg-orange-500' },
    { title: 'Sports', count: 34, color: 'bg-rose-500' },
    { title: 'Music', count: 12, color: 'bg-red-500' },
    { title: 'Art', count: 5, color: 'bg-gray-500' },
  ];

  // Performance over time data (blue bar chart)
  const performanceData = [28, 22, 28, 19, 17, 24, 35, 28, 11, 10];
  
  // Cost data (pink bar chart)
  const costData = [28, 22, 18, 22, 18, 22, 35, 15, 18, 22];

  // Heatmap data
  const heatmapData = [
    [540, 540, 540, 120, 540],
    [540, 240, 540, 540, 540],
    [240, 540, 540, 540, 120],
    [540, 540, 540, 540, 540],
    [540, 540, 540, 540, 540],
  ];

  // Pie chart data
  const pieData = [
    { value: 60, name: 'History', itemStyle: { color: '#5470c6' } },
    { value: 40, name: 'Media', itemStyle: { color: '#ee6666' } },
  ];

  // Logs data
  const logsData = [
    { id: '1', status: 'passed', timestamp: '2023-06-01T12:00:00Z', prompt: 'Example prompt 1', userQuery: 'Query 1', response: 'Response 1', model: 'GPT-4' },
    { id: '2', status: 'failed', timestamp: '2023-06-01T13:00:00Z', prompt: 'Example prompt 2', userQuery: 'Query 2', response: 'Response 2', model: 'GPT-4' },
    { id: '3', status: 'passed', timestamp: '2023-06-01T14:00:00Z', prompt: 'Example prompt 3', userQuery: 'Query 3', response: 'Response 3', model: 'GPT-4' },
  ];

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Performance Metrics */}
        <div className="md:col-span-3 bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-700 mb-4">Performance Metrics</h2>
          
          <div className="mb-6">
            <div className="text-5xl font-bold">85.9%</div>
            <div className="text-sm text-gray-500">Pass Rate</div>
          </div>
          
          <MetricsList items={metricsListItems} showMore={true} />
        </div>
        
        {/* Most Common Topics */}
        <div className="md:col-span-3 bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-700 mb-4">Most Common Topics</h2>
          <div className="space-y-1">
            {topics.map((topic, index) => (
              <TopicBadge 
                key={index} 
                title={topic.title} 
                count={topic.count} 
                color={topic.color} 
              />
            ))}
          </div>
        </div>
        
        {/* Performance over time */}
        <div className="md:col-span-6 bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-700 mb-2">Performance over time</h2>
          <div className="h-48">
            <BarChart 
              data={performanceData} 
              color="#5470c6"
              tooltip={{
                date: '17/06/2024, 03:33:00',
                value: 'p91'
              }}
            />
          </div>
        </div>
        
        {/* Most Common Topics Pie Chart */}
        <div className="md:col-span-3 bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-700 mb-2">Most Common Topics</h2>
          <div className="h-48">
            <PieChart 
              data={pieData} 
              centerText={{ value: '191', subtitle: 'Total' }}
            />
          </div>
          <div className="grid grid-cols-2 mt-3 text-xs">
            <div className="flex items-center">
              <span className="h-2 w-2 rounded-full bg-blue-500 mr-1"></span>
              <span>History</span>
              <span className="ml-auto">60%</span>
            </div>
            <div className="flex items-center">
              <span className="h-2 w-2 rounded-full bg-red-500 mr-1"></span>
              <span>Media</span>
              <span className="ml-auto">40%</span>
            </div>
          </div>
        </div>
        
        {/* Middle Info Boxes */}
        <div className="md:col-span-3 grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <PerformanceMetric title="# of Inferences" value="1289" />
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <PerformanceMetric title="Average Tokens Used / Inference" value="397" />
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <PerformanceMetric title="Average Cost / 1000 Inference" value="$4.95" />
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <PerformanceMetric title="Average Response Time / Inference" value="256ms" />
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <PerformanceMetric title="Percent Positive Feedback" value="54.5%" />
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <PerformanceMetric title="Average Latency" value="309ms" />
          </div>
        </div>
        
        {/* Cost per day chart */}
        <div className="md:col-span-5 bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-700 mb-2">Total Cost ($) / day</h2>
          <div className="h-48">
            <BarChart 
              data={costData} 
              color="#ee6666"
              tooltip={{
                date: '21/06/2024, 11:15:00',
                value: 'p99'
              }}
            />
          </div>
        </div>
        
        {/* Cost heatmap */}
        <div className="md:col-span-4 bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-700 mb-2">Average Cost / 1000 Inferences</h2>
          <div className="h-48">
            <HeatMapChart 
              data={heatmapData} 
              centerText={{ value: '$4.95' }}
            />
          </div>
        </div>
      </div>
      
      {/* Logs Table */}
      <div className="mt-6 bg-white p-4 rounded-lg shadow">
        <LogsTable 
          logs={logsData}
          dateRange="27 May, 05:30 AM to 27 Jun, 05:30 AM"
        />
      </div>
    </div>
  );
};

export default Dashboard;
