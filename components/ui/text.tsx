// components/ui/text.tsx

import React from "react";
import cn from "@/utils/cn";

type TextProps = {
  children: React.ReactNode;
  className?: string;
};
export function SectionTitle({ children, className }: TextProps) {
  return (
    <h1
      className={cn(
        className,
        "text-base uppercase font-semibold tracking-widest"
      )}
    >
      {children}
    </h1>
  );
}

export function Heading({ children, className }: TextProps) {
  return <h3 className={cn(className)}>{children}</h3>;
}

