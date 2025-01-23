import React from "react";
import cn from "@/utils/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline";
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "default",
  ...props
}) => {
  const baseStyles = "px-4 py-2 rounded-full font-medium transition-all";
  const variantStyles =
    variant === "default"
      ? "bg-primary text-white"
      : "bg-white border border-primary text-primary";

  return (
    <button className={cn(baseStyles, variantStyles, className)} {...props}>
      {children}
    </button>
  );
};
