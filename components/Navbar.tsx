"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "About", href: "/about" },
  { name: "Loan", href: "/loan" },
  { name: "Careers", href: "/careers" },
  { name: "Service", href: "/service" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const Navbar: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Hide navbar on scroll down
        setShowNavbar(false);
      } else {
        // Show navbar on scroll up
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } bg-white/30 backdrop-blur-md shadow-md`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/">
            <a>Logo</a>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a className="text-gray-800 hover:text-gray-600">{link.name}</a>
            </Link>
          ))}
        </div>

        {/* Apply Button */}
        <div className="hidden md:block">
          <Link href="/apply">
            <a className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Apply for Loan
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
