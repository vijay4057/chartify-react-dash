
import React from 'react';

interface MetricsListItemProps {
  title: string;
  value: string | number;
  status: 'passed' | 'warning' | 'failed';
}

const MetricsListItem: React.FC<MetricsListItemProps> = ({ title, value, status }) => {
  const dotColor = status === 'passed' 
    ? 'bg-green-500' 
    : status === 'warning' 
      ? 'bg-yellow-500' 
      : 'bg-red-500';

  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center">
        <div className={`w-2 h-2 rounded-full ${dotColor} mr-2`}></div>
        <span className="text-sm text-gray-600">{title}</span>
      </div>
      <span className="text-sm font-medium">{value}</span>
    </div>
  );
};

interface MetricsListProps {
  items: MetricsListItemProps[];
  showMore?: boolean;
}

const MetricsList: React.FC<MetricsListProps> = ({ items, showMore = false }) => {
  return (
    <div className="space-y-0.5">
      {items.map((item, index) => (
        <MetricsListItem key={index} {...item} />
      ))}
      {showMore && (
        <button className="text-xs text-gray-500 mt-2">+4 more</button>
      )}
    </div>
  );
};

export default MetricsList;
