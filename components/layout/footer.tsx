"use client";
import React, { useState } from "react";
import { Heading, SectionTitle } from "../ui/text";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Tiktok, Youtube } from "../svg";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import cn from "@/utils/cn";
const footerLinks = {
  quickLink: [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Services", link: "/#services" },
    { name: "Blog", link: "/#blog" },
    { name: "FAQ", link: "/#faq" },
    { name: "Contact", link: "/contact" },
  ],
  socials: [
    {
      name: "Facebook",
      link: "https://facebook.com/",
      icon: <Facebook width={22} />,
    },
    {
      name: "X (formerly Twitter)",
      link: "https://x.com/",
      icon: <Facebook width={22} />,
    },
    {
      name: "LinkedIn",
      link: "https://linkedin.com/",
      icon: <Linkedin width={22} />,
    },
    {
      name: "Tiktok",
      link: "https://tiktok.com/",
      icon: <Tiktok width={22} />,
    },
    {
      name: "Youtube",
      link: "https://youtube.com/",
      icon: <Youtube width={22} />,
    },
    {
      name: "Instagram",
      link: "https://instagram.com/",
      icon: <Instagram width={22} />,
    },
  ],
  legal: [
    { name: "Terms of service", link: "/terms" },
    { name: "Order cancellation policy", link: "/order-policy" },
    { name: "Privacy policy", link: "/privacy" },
    { name: "KYC/AML policy", link: "/kyc" },
  ],
};

const FooterLink = ({
  name,
  link,
  icon,
}: {
  name: string;
  link: string;
  icon?: React.ReactElement;
}) => (
  <li className="py-1" key={link}>
    <Link className="text-text flex gap-2 items-center" href={link}>
      {icon}
      {name}
    </Link>
  </li>
);

export default function Footer() {
  const [showPopup, setShowPopup] = useState(false);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <section>
      <footer className="grid grid-cols-6 gap-8 py-12">
        <div
          id="logo"
          className="font-bold text-xl text-primary font-montserrat"
        >
          FlexiPay
        </div>
        <div>
          <Heading className="xl capitalize font-semibold text-text">
            quick links
          </Heading>
          <ul className="pt-4">
            {footerLinks.quickLink.map(({ name, link }) => (
              <FooterLink link={link} name={name} key={link} />
            ))}
          </ul>
        </div>
        <div>
          <Heading className="xl capitalize font-semibold text-text">
            socials
          </Heading>
          <ul className="pt-4">
            {footerLinks.socials.map(({ name, link, icon }) => (
              <FooterLink link={link} name={name} icon={icon} key={link} />
            ))}
          </ul>
        </div>
        <div>
          <Heading className="xl capitalize font-semibold text-text">
            legal
          </Heading>
          <ul className="pt-4">
            {footerLinks.legal.map(({ name, link }) => (
              <FooterLink link={link} name={name} key={link} />
            ))}
          </ul>
        </div>
        <div>
          <Heading className="xl capitalize font-semibold text-text">
            contact
          </Heading>
          <div className="pt-4">
            <p className="text-base">
              Lorem ipsum dolor sit amet, consectetur
              <br /> <Link href="tel:+234 123456789">+234 123456789</Link>
            </p>
          </div>
        </div>
        <div>
          <Heading className="xl capitalize font-semibold text-text">
            Join our newsletter
          </Heading>
          <div className="w-full flex pt-4">
            <Button
              onClick={() => {
                setShowPopup(true);
              }}
            >
              Subscribe
            </Button>
            {showPopup && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div
                  className={cn(
                    "bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 max-w-[500px] w-full",
                    showPopup ? "animate-popup-open" : "animate-popup-close"
                  )}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-xl font-bold mb-4">Subscribe</h2>
                    <Button onClick={handleClosePopup} variant="outline">
                      <X size={20} />
                    </Button>
                  </div>
                  <p className="mb-4">
                    Subscribe to our newsletter for updates.
                  </p>
                  <div className="flex">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      className="p-2.5 pl-4 border rounded-ss-[20px] rounded-es-[20px] w-full"
                    />
                    <Button className="rounded-s-[20px]">Subscribe</Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </footer>
      <hr className=" border-2 border-primary" />
      <div className="space-y-4 pt-4">
        <div className="flex justify-between gap-4 items-center max-sm:flex-col max-sm:items-start">
          <p className="text-sm">
            © 2020 - 2024 FlexiPay, Inc., All rights reserved
          </p>
          <ul className="flex gap-4 text-sm">
            <FooterLink link={"/terms"} name="Terms & conditions" key="terms" />
            <FooterLink link={"/privacy"} name="Privacy policy" key="privacy" />
          </ul>
        </div>
        <p className="text-sm leading-relaxed">
          FlexiPay is a financial technology company making it easier for
          international students and immigrants to pay their tuition and fees in
          minutes. We offer our products and services in partnership with
          licensed transmitters and banking partners in their respective
          jurisdictions. All trademarks, logos, and brand names are the property
          of their respective owners. All company, product, and service names
          used on this website are for identification purposes only. Use of
          these names, trademarks and brands do not imply endorsement.
        </p>
      </div>
    </section>
  );
}
