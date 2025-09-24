import React from 'react';

interface ProgressBarProps {
  progress: number; // 0-100
  variant?: 'default' | 'nutrition' | 'fitness' | 'gamification';
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  label?: string;
}

export function ProgressBar({
  progress,
  variant = 'default',
  size = 'md',
  showLabel = false,
  label,
}: ProgressBarProps) {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  const sizeClasses = {
    sm: 'h-2',
    md: 'h-4',
    lg: 'h-6',
  };

  const variantClasses = {
    default: 'bg-gradient-to-r from-p1 to-p2',
    nutrition: 'bg-gradient-to-r from-green-400 to-green-600',
    fitness: 'bg-gradient-to-r from-blue-400 to-blue-600',
    gamification: 'bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500',
  };

  return (
    <div className="w-full">
      {showLabel && label && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-p4">{label}</span>
          <span className="text-sm text-p5">{clampedProgress.toFixed(0)}%</span>
        </div>
      )}
      <div className={`w-full bg-s3 rounded-full ${sizeClasses[size]}`}>
        <div
          className={`${sizeClasses[size]} rounded-full transition-all duration-500 ${variantClasses[variant]}`}
          style={{ width: `${clampedProgress}%` }}
        />
      </div>
    </div>
  );
}
