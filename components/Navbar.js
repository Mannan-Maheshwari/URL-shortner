"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-5 bg-[#1e1b77] text-white fixed w-full top-0 z-50">
      <div className="font-bold text-2xl">URLShortner</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-5">
        <Link href="#about"><li className="cursor-pointer hover:underline">About</li></Link>
        <Link href="/"><li className="cursor-pointer hover:underline">Home</li></Link>
        <Link href="/Shorten"><li className="cursor-pointer hover:underline">Shorten</li></Link>
        <Link href="/Contact"><li className="cursor-pointer hover:underline">Contact Us</li></Link>
      </ul>

      {/* Mobile svg */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {/* triple line icon */}
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              /> // X icon
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              /> // Hamburger icon
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 right-5 bg-[#1e1b77] p-5 rounded-md shadow-lg md:hidden">
          <ul className="flex flex-col gap-3">
            <Link href="#about"><li className="cursor-pointer hover:underline">About</li></Link>
            <Link href="/"><li className="cursor-pointer hover:underline">Home</li></Link>
            <Link href="/Shorten"><li className="cursor-pointer hover:underline">Shorten</li></Link>
            <Link href="/Contact"><li className="cursor-pointer hover:underline">Contact Us</li></Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
