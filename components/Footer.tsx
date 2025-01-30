"use client";

import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

const footerLinks = [
  {
    title: "About",
    links: ["Services", "Loan", "Blog"],
  },
  {
    title: "Contact",
    links: ["Services", "About", "Careers", "Blog"],
  },
  {
    title: "Community",
    links: ["Support", "Updates", "Customers"],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0f1e] text-second py-14 px-6">
      <div className="container mx-auto px-4 gap-12">
        {/* Left - Logo & Contact Info */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <img
            src="/images/logo.avif"
            alt="Company Logo"
            className="w-36 mb-6"
          />
          <p className="md:text-4xl text-second md:max-w-lg">
            Cyrus MicroCredit Services is transforming lives.
          </p>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-y-4 w-full">
          <div className="space-y-4 flex-1">
            <ContactItem
              icon="mdi:email-outline"
              title="Email us"
              details="info@cyrusmcs.com"
            />
            <ContactItem
              icon="mdi:phone-outline"
              title="Call us"
              details="+233 553 179 240"
            />
            {/* <ContactItem
              icon="mdi:map-marker-outline"
              title="Visit us"
              details="Ground Floor, Leonardo Hotel Opposite Tema Newtown Post Office, P.O.Box rvt 636, Tema"
            /> */}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">About</h3>
            <ul className="space-y-2">
              <li className="transition">
                <Link href="#" className="text-lg font-bold">
                  Services
                </Link>
              </li>
              <li className="transition ">
                <Link href="#" className="text-lg font-bold">
                  Loans
                </Link>
              </li>
              <li className="transition ">
                <Link href="#" className="text-lg font-bold">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <ul className="space-y-2">
              <li className="transition">
                <Link href="#" className="text-lg font-bold">
                  Services
                </Link>
              </li>
              <li className="transition ">
                <Link href="#" className="text-lg font-bold">
                  About
                </Link>
              </li>
              <li className="transition ">
                <Link href="#" className="text-lg font-bold">
                  Careers
                </Link>
              </li>
              <li className="transition ">
                <Link href="#" className="text-lg font-bold">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Community</h3>
            <ul className="space-y-2">
              <li className="transition">
                <Link href="#" className="text-lg font-bold">
                  Support
                </Link>
              </li>
              <li className="transition ">
                <Link href="#" className="text-lg font-bold">
                  Updates
                </Link>
              </li>
              <li className="transition ">
                <Link href="#" className="text-lg font-bold">
                  Customers
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom - Copyright */}
      <div className="text-center text-gray-500 text-sm mt-12">
        &copy; {new Date().getFullYear()} Cyrus MicroCredit Services. All rights
        reserved.
      </div>
    </footer>
  );
};

// Contact Item Component
const ContactItem: React.FC<{
  icon: string;
  title: string;
  details: string;
}> = ({ icon, title, details }) => (
  <div className="flex items-center gap-3">
    <Icon icon={icon} className="text-2xl text-gray-400" />
    <p className="text-lg max-w-3xl">
      <span className="font-semibold">{title}</span> <br />
      {details}
    </p>
  </div>
);

export default Footer;
