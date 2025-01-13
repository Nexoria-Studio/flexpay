import React from "react";
import cn from '@/utils/cn'
type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline";
};
export const Button = ({ children, className, variant = "default" }: ButtonProps) => {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-full font-medium transition-all", 
        variant === "default" && "bg-primary text-white",
        variant === "outline" && "bg-white border border-primary text-primary",
        className // Additional classes
      )}
    >
      {children}
    </button>
  );
};
