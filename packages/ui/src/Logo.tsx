'use client';

import React from 'react';

interface LogoProps {
  src?: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Logo({
  src = '/logo.png',
  alt = 'NutriZen Logo',
  width,
  height,
  className = '',
  size = 'md',
}: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  const finalWidth =
    width ||
    (size === 'xl'
      ? '120'
      : size === 'lg'
        ? '64'
        : size === 'md'
          ? '48'
          : '32');
  const finalHeight = height || finalWidth;

  return (
    <img
      src={src}
      alt={alt}
      width={finalWidth}
      height={finalHeight}
      className={`object-contain ${sizeClasses[size]} ${className}`}
      loading="eager"
    />
  );
}
