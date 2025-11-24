import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassCard = ({ children, className = "" }: GlassCardProps) => {
  return (
    <div className={`
      backdrop-blur-md
      bg-white/40
      border border-white/50
      shadow-xl
      rounded-2xl
      p-6
      transition-all duration-300
      hover:bg-white/5
      ${className}
    `}>
      {children}
    </div>
  );
};