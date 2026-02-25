import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'luxury' | 'outline' | 'ghost';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'luxury', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "transition-all duration-500 uppercase tracking-widest text-sm font-semibold inline-block text-center";
  
  const variants = {
    luxury: "luxury-button",
    outline: "px-8 py-3 border border-slate-700 text-slate-300 hover:border-gold hover:text-gold",
    ghost: "px-4 py-2 text-slate-400 hover:text-gold"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
