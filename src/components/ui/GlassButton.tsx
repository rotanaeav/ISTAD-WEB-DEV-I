import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const GlassButton = ({ children, variant = 'primary', className = "", ...props }: ButtonProps) => {
  const baseStyle = "px-6 py-3 rounded-xl font-semibold transition-all duration-300 active:scale-95 shadow-lg backdrop-blur-sm";
  
  const variants = {
    primary: "bg-brand text-white hover:bg-brand-dark border border-brand-light/20 hover:shadow-brand/30",
    secondary: "bg-white/40 text-slate-800 hover:bg-white/60 border border-white/60"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};