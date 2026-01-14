
import React from 'react';
import { motion } from 'framer-motion';

export const Button: React.FC<{
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}> = ({ children, variant = 'primary', className = '', onClick, type = 'button' }) => {
  const base = "px-8 py-4 rounded-md font-semibold transition-all duration-300 text-sm tracking-wide uppercase flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-orange-brand text-white hover:bg-white hover:text-black",
    secondary: "bg-white text-black hover:bg-orange-brand hover:text-white",
    outline: "border border-white/20 text-white hover:border-orange-brand hover:text-orange-brand bg-transparent"
  };

  return (
    <button type={type} onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export const SectionTitle: React.FC<{
  subtitle?: string;
  title: string;
  centered?: boolean;
}> = ({ subtitle, title, centered = false }) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    {subtitle && (
      <span className="text-orange-brand font-semibold text-sm tracking-[0.2em] uppercase mb-3 block">
        {subtitle}
      </span>
    )}
    <h2 className="text-3xl md:text-5xl font-bold text-white max-w-2xl mx-auto md:mx-0">
      {title}
    </h2>
  </div>
);

export const GlassCard: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`glass p-8 rounded-xl transition-all ${className}`}
  >
    {children}
  </motion.div>
);

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <input 
    {...props} 
    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-orange-brand transition-colors"
  />
);

export const TextArea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => (
  <textarea 
    {...props} 
    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-orange-brand transition-colors min-h-[120px]"
  />
);
