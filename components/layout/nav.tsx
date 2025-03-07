"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Button } from "../ui/button";
import cn from "@/utils/cn";
import { MenuIcon } from "lucide-react";

type LinkProps = {
  name: string;
  link: string;
};

const links: LinkProps[] = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/#about" },
  { name: "Services", link: "/#services" },
  { name: "Blog", link: "/#blog" },
  { name: "FAQ", link: "/#faqs" },
  { name: "Contact", link: "/contact" },
];

const NavLink = ({
  name,
  link,
  isActive,
}: {
  name: string;
  link: string;
  isActive: boolean;
}) => (
  <li key={link}>
    <Link
      href={link}
      className={cn(
        isActive && "bg-primary text-white",
        "px-6 py-1.5 rounded-full w-fit hover:bg-primary hover:text-white transition-colors"
      )}
    >
      {name}
    </Link>
  </li>
);

export default function Nav() {
  const pathname = usePathname();
  const [menu, setMenu] = useState<boolean | null>(null)

  return (
    <header className="p-8">
      <nav className="max-w-7xl mx-auto h-[40px] flex justify-between items-center">
        {/* Logo Section */}
        <div
          id="logo"
          className="font-bold text-xl text-primary font-montserrat"
        >
          FlexiPay
        </div>

        {/* Links Section */}
        <div
          id="menu"
          className="lg:block hidden px-1.5 py-2 w-fit h-fit bg-primary/20 rounded-full text-text font-normal"
        >
          <ul className="flex gap-4 items-center">
            {links.map((link, index) => (
              <NavLink
                key={link.link}
                name={link.name}
                link={link.link}
                isActive={pathname === link.link}
              />
            ))}
          </ul>
        </div>

        <div id="burger" className="lg:hidden">
          <MenuIcon size={35} className="cursor-pointer"/>
        </div>

        {/* Button Section */}
        <div id="button" className="lg:block hidden ">
          <Button>Download App</Button>
        </div>
      </nav>
    </header>
  );
}
