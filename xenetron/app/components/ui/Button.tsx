import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
}: ButtonProps) {
  // Base classes
  const baseClasses = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300";
  
  // Variant classes
  const variantClasses = {
    primary: "bg-[#ff3366] hover:bg-[#ff4a7a] text-white shadow-lg hover:shadow-xl",
    secondary: "bg-white hover:bg-gray-100 text-[#0a0a0a]",
    outline: "border-2 border-[#ff3366] text-[#ff3366] hover:bg-[#ff3366] hover:bg-opacity-10"
  };
  
  // Size classes
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  
  // Combine classes
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  // Render as link or button
  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link href={href} className={buttonClasses}>
          {children}
        </Link>
      </motion.div>
    );
  }
  
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={buttonClasses}
    >
      {children}
    </motion.button>
  );
}