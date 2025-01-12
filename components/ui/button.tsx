import React from "react";
type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variance?: "default" | "outline";
};
export const Button = ({
  children,
  className,
  variance = "default",
}: ButtonProps) => {
  return (
    <button
      className={`px-4 py-2 bg-primary text-white rounded-full ${
        variance == "default"
          ? "bg-primary text-white"
          : "bg-white border-primary border !text-primary"
      }`}
    >
      {children}
    </button>
  );
};
