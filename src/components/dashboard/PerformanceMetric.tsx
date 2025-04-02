
import React from 'react';

interface PerformanceMetricProps {
  title: string;
  value: string | number;
  subtitle?: string;
  passed?: boolean;
  score?: number;
}

const PerformanceMetric: React.FC<PerformanceMetricProps> = ({
  title,
  value,
  subtitle,
  passed,
  score,
}) => {
  return (
    <div className="flex flex-col">
      <span className="text-sm text-gray-500">{title}</span>
      <div className="flex items-baseline">
        <span className="text-2xl font-semibold">{value}</span>
        {passed !== undefined && (
          <span className="ml-2 text-sm text-green-500">Passed</span>
        )}
      </div>
      {subtitle && <span className="text-xs text-gray-500">{subtitle}</span>}
      {score !== undefined && (
        <span className="text-sm text-gray-600">{score}</span>
      )}
    </div>
  );
};

export default PerformanceMetric;
