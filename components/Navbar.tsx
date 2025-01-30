"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import TopBar from "./TopBar";
import { Icon } from "@iconify/react";

const navLinks = [
  { name: "Loan", href: "/loan" },
  { name: "Careers", href: "/careers" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "Service", href: "/features" },
];

const Navbar: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY < lastScrollY || window.scrollY < 50);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } bg-white/30 backdrop-blur-sm`}
    >
      <TopBar />
      <nav className="border-y border-gray-400">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          {/* Mobile Menu Button (Left) */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(true)}>
              <Icon icon="mdi:menu" width={28} />
            </button>
          </div>

          {/* Logo - Left on Desktop, Centered in Mobile Menu */}
          <div className="md:w-auto w-full flex justify-end md:justify-start">
            <Link href="/">
              <img src="/images/logo.avif" alt="logo" className="w-20" />
            </Link>
          </div>

          {/* Desktop Menu */}
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

          {/* Apply Button - Desktop */}
          <div className="hidden md:block border-2 border-blu py-2 px-6 rounded-md">
            <Link href="/apply" className="flex items-center gap-3">
              Apply for Loan <Icon icon="formkit:arrowright" />
            </Link>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div className="fixed inset-0 bg-white z-50 flex flex-col justify-start pt-20 items-center h-screen overflow-y-auto text-blu">
            {/* Close Button (X) - Left */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 left-6 text-blu"
            >
              <Icon icon="mdi:close" width={30} />
            </button>

            <img
              src="/images/logo.avif"
              alt="logo"
              className="w-20 mx-auto mb-5"
            />

            <div className="w-full max-w-sm px-4">
              {navLinks.map((link, index) => (
                <React.Fragment key={link.name}>
                  <Link
                    href={link.href}
                    className="text-blu text-lg py-3 block transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {index < navLinks.length - 1 && (
                    <div className="border-t border-blu w-full mx-auto"></div>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="w-full px-6 mt-6">
              <Link
                href="/apply"
                className="block w-full text-center text-blu border-blu border py-3 rounded-lg transition hover:bg-white/10"
                onClick={() => setMenuOpen(false)}
              >
                Apply for Loan →
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
