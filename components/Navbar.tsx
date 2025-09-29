"use client";
import React, { useEffect, useState } from "react";

import { navLinks } from "../constants";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // 滚动 50px 后触发
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img src="logo2.png" alt="logo" className="w-8 h-8" />
          <p className="text-xl font-bold tracking-wide text-gray-800">
            Super Handbag
          </p>
        </a>

        {/* Nav Links - hidden on small screens */}
        <ul className="hidden lg:inline-flex gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                // pseudo-element after for underline effect
                // relative <a> + after:absolute
                className="text-gray-600 hover:text-black transition duration-300 text-sm font-medium uppercase tracking-wide relative ms-10 font-general after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100  cursor-pointer"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
