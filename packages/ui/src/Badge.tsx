import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'achievement' | 'streak' | 'level' | 'nutrition' | 'fitness';
  size?: 'sm' | 'md' | 'lg';
  count?: number;
}

export function Badge({
  children,
  variant = 'achievement',
  size = 'md',
  count,
}: BadgeProps) {
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-2 text-sm',
    lg: 'px-4 py-3 text-base',
  };

  const variantClasses = {
    achievement:
      'bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg shadow-yellow-500/25',
    streak:
      'bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-lg shadow-red-500/25',
    level:
      'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-500/25',
    nutrition:
      'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/25',
    fitness:
      'bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-lg shadow-blue-500/25',
  };

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full font-semibold ${sizeClasses[size]} ${variantClasses[variant]}`}
    >
      {children}
      {count !== undefined && (
        <span className="bg-white/20 rounded-full px-2 py-0.5 text-xs font-bold">
          {count}
        </span>
      )}
    </div>
  );
}
