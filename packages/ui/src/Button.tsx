// /packages/ui/src/Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'gamification'
    | 'professional';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) {
  const baseClasses =
    'font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2';

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  };

  const variantClasses = {
    // Core variants para o sistema atual
    primary:
      'bg-gradient-to-r from-p1 to-p2 text-s1 hover:from-p1/90 hover:to-p2/90',
    secondary: 'bg-s2 text-p4 border-2 border-s3 hover:border-s4 hover:bg-s3',

    // Futuras variants para as features do NutriZen
    success:
      'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700',
    danger:
      'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700',
    gamification:
      'bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/25',
    professional:
      'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700',
  };

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]}`}
      disabled={isLoading}
      {...props}
    >
      {isLoading && (
        <svg
          className="animate-spin h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {leftIcon && !isLoading && leftIcon}
      {children}
      {rightIcon && !isLoading && rightIcon}
    </button>
  );
}
