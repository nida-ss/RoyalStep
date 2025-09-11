import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'outline' | 'text';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  onClick
}) => {
  const baseStyles = 'font-montserrat font-medium text-base rounded-full px-6 py-2 transition-all';
  
  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary/90',
    outline: 'border border-primary text-primary hover:bg-primary/10',
    text: 'text-primary hover:bg-primary/10'
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
