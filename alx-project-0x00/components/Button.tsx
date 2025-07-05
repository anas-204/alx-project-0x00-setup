import React from 'react';

interface ButtonProps {
  title: string;
  styles?: string;
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  title, 
  styles = '', 
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

  // Shape classes
  const shapeClasses = {
    'rounded-sm': 'rounded-sm',
    'rounded-md': 'rounded-md',
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