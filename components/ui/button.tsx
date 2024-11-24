import React from 'react';
import clsx from 'clsx';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, onClick }) => {
  const baseStyles = 'flex flex-row items-center justify-center uppercase px-4 py-2 focus:outline-none font-monextRegular text-sm font-bold tracking-wider duration-100';
  const variantStyles = {
    primary: 'bg-primary text-foreground hover:bg-foreground hover:text-background border border-primary',
    secondary: 'bg-transparent text-foreground hover:bg-foreground hover:text-background border border-foreground',
    tertiary: 'bg-transparent border border-primary text-primary hover:bg-primary hover:text-foreground',
  };

  return (
    <button
      className={clsx(baseStyles, variantStyles[variant])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;