"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa6";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-2 w-full justify-between px-6 py-3  bg-white/10 backdrop-blur-3xl border border-white/20 rounded-4xl">
      <div className="flex justify-between items-center px-8 md:px-10 lg:px-20">
        <div className="text-lightGray text-2xl md:text-3xl font-inter-tight">
          Kritsada
        </div>
        <ul className="hidden md:flex justify-center space-x-10">
          {navItems.map((item) => (
            <li key={item.path} className="relative">
              <Link href={item.path}>
                <span
                  className={
                    pathname === item.path
                      ? "font-inter-tight text-lightGray"
                      : "text-gray-400 font-inter-tight"
                  }
                >
                  {item.name}
                </span>
              </Link>
              {pathname === item.path && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full"
                  transition={{ type: "easing" }}
                />
              )}
            </li>
          ))}
        </ul>
        <div className="md:hidden">
          <span className="text-xl text-lightGray" onClick={toggleMenu}>
            <FaBars />
          </span>
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? "max-h-100" : "max-h-0"
        }`}
      >
        <ul className="md:hidden flex flex-col items-center space-y-4 mt-4">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link href={item.path}>
                <span
                  className={
                    pathname === item.path
                      ? "text-lightGray font-inter-tight"
                      : "text-gray-400 font-inter-tight"
                  }
                >
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
