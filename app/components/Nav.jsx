"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="fixed top-2 w-full justify-between px-6 py-3  bg-white/10 backdrop-blur-3xl border border-white/20 rounded-full">
      <div className="flex justify-between items-center px-24">
        <div className="text-lightGray text-3xl font-inter-tight">Kritsada</div>
        <ul className="flex justify-center space-x-10">
          {navItems.map((item) => (
            <li key={item.path} className="relative">
              <Link href={item.path}>
                <span
                  className={
                    pathname === item.path ? "text-white" : "text-gray-400"
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
      </div>
    </nav>
  );
};

export default Nav;
