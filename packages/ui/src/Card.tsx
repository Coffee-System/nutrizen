import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'bordered' | 'gamification';
  onClick?: () => void;
}

export function Card({
  children,
  className = '',
  variant = 'default',
  onClick,
}: CardProps) {
  const baseClasses = 'rounded-3xl transition-all duration-300';

  const variantClasses = {
    default: 'bg-s2/50 border border-s3/30',
    elevated: 'bg-s2 shadow-lg hover:shadow-xl transform hover:scale-[1.02]',
    bordered: 'bg-s2/30 border-2 border-s3/50 hover:border-s4/70',
    gamification:
      'bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200 shadow-lg shadow-yellow-100/50',
  };

  const interactiveClasses = onClick ? 'cursor-pointer hover:shadow-lg' : '';

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${interactiveClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
