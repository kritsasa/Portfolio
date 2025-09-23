"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className="fixed top-2 w-full justify-between px-6 py-3  bg-white/10 backdrop-blur-3xl border border-white/20 rounded-full">
            <div className="flex justify-between items-center px-24">
                <div className="text-lightGray text-3xl font-inter-tight">
                    Kritsada
                </div>
                <ul className="flex justify-center space-x-10">
                    <li className="nav-item">
                        <Link href="/" className={`text-lightGray font-inter-tight px-1 py-1 ${pathname === "/" ? "border-b-2 border-white" : ""}`}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/about" className={`text-lightGray font-inter-tight px-1 py-1 ${pathname === "/about" ? "border-b-2 border-white" : ""}`}>
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/skills" className={`text-lightGray font-inter-tight px-1 py-1 ${pathname === "/skills" ? "border-b-2 border-white" : ""}`}>
                            Skills
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a href="/projects" className={`text-lightGray font-inter-tight px-1 py-1 ${pathname === "/projects" ? "border-b-2 border-white" : ""}`}>
                            Projects
                        </a>
                    </li>
                    <li className="nav-item">
                        <Link href="/contact" className={`text-lightGray font-inter-tight px-1 py-1 ${pathname === "/contact" ? "border-b-2 border-white" : ""}`}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;