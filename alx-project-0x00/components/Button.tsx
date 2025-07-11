import React from 'react';
import { ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({ 
  title, 
  styles, 
  size = 'medium', 
  shape = 'rounded-md',
  onClick 
}) => {
  // Size classes
  const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  };

  // Shape classes (now including rounded-lg)
  const shapeClasses = {
    'rounded-sm': 'rounded-sm',
    'rounded-md': 'rounded-md',
    'rounded-lg': 'rounded-lg',
    'rounded-full': 'rounded-full'
  };

  return (
    <button
      onClick={onClick}
      className={`
        bg-blue-500 hover:bg-blue-600 text-white font-medium
        transition-colors duration-200
        ${sizeClasses[size]}
        ${shapeClasses[shape]}
        ${styles}
      `}
    >
      {title}
    </button>
  );
};

export default Button;