
import React from 'react';

interface TopicBadgeProps {
  title: string;
  count: number;
  color?: string;
}

const TopicBadge: React.FC<TopicBadgeProps> = ({ title, count, color = 'bg-blue-500' }) => {
  return (
    <div className="flex items-center mb-2">
      <div className={`px-3 py-1 rounded-md text-white text-sm flex items-center ${color}`}>
        <span>{title}</span>
        <span className="ml-2 bg-white bg-opacity-30 rounded-full w-5 h-5 flex items-center justify-center text-xs">{count}</span>
      </div>
    </div>
  );
};

export default TopicBadge;
