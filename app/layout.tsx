import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/layout/nav";
import { fonts } from "@/data/fonts.data";

export const metadata: Metadata = {
  title: "FlexiPay",
  description:
    "FlexiPay simplifies paying tuition, fees, and more to institutions, businesses, and government agencies worldwide. Experience secure, fast, and reliable transactions tailored to meet the unique needs of international students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fonts} antialiased overflow-x-hidden`}>
        {/* Navigation menu */}
        <Nav />

        {children}
      </body>
    </html>
  );
}
