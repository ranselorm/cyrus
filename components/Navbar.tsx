"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import TopBar from "./TopBar";
import { Icon } from "@iconify/react/dist/iconify.cjs";

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
        setShowNavbar(false);
      } else {
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
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } bg-white/30 backdrop-blur-sm`}
    >
      <TopBar />
      <nav className="border-y border-gray-400">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="text-xl font-bold">
            <Link href="/">
              <p>Logo</p>
            </Link>
          </div>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-blu hover:text-accent transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block border-2 border-blu py-2 px-6 rounded-md">
            <Link href="/apply" className="flex items-center gap-3">
              Apply for Loan <Icon icon="formkit:arrowright" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
