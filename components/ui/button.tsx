import React from 'react';
import clsx from 'clsx';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', size = 'medium', children, onClick }) => {
  const baseStyles = 'flex flex-row items-center justify-center uppercase focus:outline-none font-monextRegular text-sm font-bold tracking-wider duration-200 gap-2 text-nowrap';
  const variantStyles = {
    primary: 'bg-primary text-foreground hover:bg-foreground hover:text-background border border-primary hover:border-foreground',
    secondary: 'bg-transparent text-foreground hover:bg-foreground hover:text-background border border-foreground',
    outline: 'bg-transparent border border-primary text-foreground hover:bg-primary hover:text-foreground',
  };
  const sizeStyles = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 md:px-7 py-3 md:py-4 text-xs md:text-sm',
    large: 'px-10 py-6 text-lg',
  };

  return (
    <button
      className={clsx(baseStyles, variantStyles[variant], sizeStyles[size])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;