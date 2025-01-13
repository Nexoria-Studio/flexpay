"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";

type LinkProps = {
  name: string;
  link: string;
};
const links: LinkProps[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About Us",
    link: "/about",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "FAQ",
    link: "/faq",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

export default function Nav() {
  const path = usePathname().split("/")[1];

  return (
    <header className="p-8">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <div id="logo" className="font-bold text-lg text-primary">
          FlexiPay
        </div>
        <div
          id="menu"
          className="px-1.5 py-2 w-fit h-fit bg-primary/20 rounded-full text-text font-normal"
        >
          <ul className="flex gap-4 items-center">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  className={`${
                    link.link.split("/")[1] == path && "bg-primary text-white"
                  } px-4 py-1.5 rounded-full w-fit`}
                  href={link.link}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div id="button">
          <Button>Download App</Button>
        </div>
      </nav>
    </header>
  );
}
