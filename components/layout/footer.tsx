import React from "react";
import { Heading } from "../ui/text";
import Link from "next/link";
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
    { name: "Facebook", link: "https://facebook.com/" },
    { name: "X (formerly Twitter)", link: "https://x.com/" },
    { name: "LinkedIn", link: "https://linkedin.com/" },
    { name: "Tiktok", link: "https://tiktok.com/" },
    { name: "Youtube", link: "https://youtube.com/" },
    { name: "Instagram", link: "https://instagram.com/" },
  ],
  legal: [
    { name: "Terms of service", link: "/terms" },
    { name: "Order cancellation policy", link: "/order-policy" },
    { name: "Privacy policy", link: "/privacy" },
    { name: "KYC/AML policy", link: "/kyc" },
  ],
};

const FooterLink = ({ name, link }: { name: string; link: string }) => (
  <li className="py-1" key={link}>
    <Link className="text-text" href={link}>
      {name}
    </Link>
  </li>
);

export default function Footer() {
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
          <ul>
            {footerLinks.quickLink.map(({ name, link }) => (
              <FooterLink link={link} name={name} key={link} />
            ))}
          </ul>
        </div>
        <div>
          <Heading className="xl capitalize font-semibold text-text">
            socials
          </Heading>
          <ul>
            {footerLinks.socials.map(({ name, link }) => (
              <FooterLink link={link} name={name} key={link} />
            ))}
          </ul>
        </div>
        <div>
          <Heading className="xl capitalize font-semibold text-text">
            legal
          </Heading>
          <ul>
            {footerLinks.legal.map(({ name, link }) => (
              <FooterLink link={link} name={name} key={link} />
            ))}
          </ul>
        </div>
        <div>
          <Heading className="xl capitalize font-semibold text-text">
            contact
          </Heading>
          <div>
            <p className="text-base">
              Lorem ipsum dolor sit amet, consectetur
              <br /> <Link href="tel:+234 123456789">+234 123456789</Link>
            </p>
          </div>
        </div>
        <div>
          <Heading className="xl capitalize font-semibold text-text">
            join our newsletter
          </Heading>
          <ul></ul>
        </div>
      </footer>
      <hr className=" border-2 border-primary" />
      <div className="space-y-4 pt-4">
        <div className="flex justify-between gap-4 items-center">
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
