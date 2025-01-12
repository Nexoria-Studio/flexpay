// components/ui/text.tsx

import React from "react";
type TextProps = {
  children: React.ReactNode;
  className?: string;
};
export function SectionTitle({ children, className }: TextProps) {
  return <h1 className={`${className} text-base uppercase font-semibold tracking-widest `}>{children}</h1>;
}

export function Heading({ children, className }: TextProps) {
  return <h3 className={`${className} text-2xl`}>{children}</h3>;
}

// SectionTitle - Should be used for the title of every section

// Heading - Should be used for the heading of every section

// Usage:
// <SectionTitle className=''>
//  The title content
// </SectionTitle>

// <Heading>
//  The title content
// </Heading>
