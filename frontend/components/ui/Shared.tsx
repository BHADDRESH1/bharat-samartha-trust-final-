import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion, HTMLMotionProps } from 'framer-motion';

// --- Button ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

// Intersect with HTMLMotionProps to allow motion props if needed, though we handle animations internally
export const Button: React.FC<ButtonProps & HTMLMotionProps<"button">> = ({ 
  children, variant = 'primary', size = 'md', isLoading, className = '', ...props 
}) => {
  const baseStyle = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-lg";
  
  const variants = {
    primary: "bg-trust-700 text-white hover:bg-trust-800 focus:ring-trust-500 shadow-md",
    secondary: "bg-saffron-500 text-white hover:bg-saffron-600 focus:ring-saffron-500 shadow-sm",
    outline: "border-2 border-trust-700 text-trust-700 hover:bg-trust-50 focus:ring-trust-500",
    ghost: "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`} 
      disabled={isLoading} 
      {...props}
    >
      {isLoading ? (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : null}
      {children}
    </motion.button>
  );
};

// --- Card ---
export const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <motion.div 
    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className={`bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden ${className}`}
  >
    {children}
  </motion.div>
);

// --- Input ---
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, className = '', ...props }) => (
  <div className="w-full">
    {label && <label className="block text-sm font-medium text-slate-700 mb-1">{label}</label>}
    <input 
      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-trust-500 transition-shadow ${error ? 'border-red-500' : 'border-slate-300'} ${className}`} 
      {...props} 
    />
    {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
  </div>
);

// --- Section Header ---
export const SectionHeader: React.FC<{ title: string; subtitle?: string; centered?: boolean }> = ({ title, subtitle, centered }) => (
  <div className={`mb-10 ${centered ? 'text-center' : ''}`}>
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-3">{title}</h2>
    {subtitle && <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>}
    <div className={`h-1.5 w-20 bg-saffron-500 mt-4 rounded-full ${centered ? 'mx-auto' : ''}`}></div>
  </div>
);

// --- Badge ---
export const Badge: React.FC<{ children: React.ReactNode; variant?: 'success' | 'warning' | 'info' | 'neutral'; className?: string }> = ({ children, variant = 'neutral', className = '' }) => {
  const styles = {
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    info: 'bg-blue-100 text-blue-800',
    neutral: 'bg-slate-100 text-slate-800',
  };
  return <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${styles[variant]} ${className}`}>{children}</span>;
};

// --- Progress Bar ---
export const ProgressBar: React.FC<{ value: number; max: number }> = ({ value, max }) => {
  const percent = Math.min((value / max) * 100, 100);
  return (
    <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${percent}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="bg-trust-500 h-2.5 rounded-full" 
      />
    </div>
  );
};
