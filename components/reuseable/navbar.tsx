"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="absolute top-0 w-[90%] md:w-[80%] flex justify-between items-center py-8 z-50">
      <div className="w-33 h-[55.67px]">
        <Image src="/logo.png" alt="Logo" width={133} height={56} />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-10 text-[#FFA500]">
        <Link
          href="/"
          className="hover:bg-[#0336FF] hover:text-white hover:px-5 hover:py-2 hover:rounded-md transition-all"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="hover:bg-[#0336FF] hover:text-white hover:px-5 hover:py-2 hover:rounded-md transition-all"
        >
          About us
        </Link>
        <Link
          href="/destination"
          className="hover:bg-[#0336FF] hover:text-white hover:px-5 hover:py-2 hover:rounded-md transition-all"
        >
          Destination
        </Link>
        <Link
          href="/tips"
          className="hover:bg-[#0336FF] hover:text-white hover:px-5 hover:py-2 hover:rounded-md transition-all"
        >
          Tips
        </Link>
        <Link
          href="/contact"
          className="hover:bg-[#0336FF] hover:text-white hover:px-5 hover:py-2 hover:rounded-md transition-all"
        >
          Contact
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-[#FFA500] focus:outline-none">
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-24 left-0 w-full bg-white shadow-lg rounded-md p-5 flex flex-col gap-4 md:hidden z-50">
          <Link
            href="/"
            className="text-[#FFA500] hover:bg-[#0336FF] hover:text-white px-5 py-2 rounded-md transition-all"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-[#FFA500] hover:bg-[#0336FF] hover:text-white px-5 py-2 rounded-md transition-all"
            onClick={toggleMenu}
          >
            About us
          </Link>
          <Link
            href="/destination"
            className="text-[#FFA500] hover:bg-[#0336FF] hover:text-white px-5 py-2 rounded-md transition-all"
            onClick={toggleMenu}
          >
            Destination
          </Link>
          <Link
            href="/tips"
            className="text-[#FFA500] hover:bg-[#0336FF] hover:text-white px-5 py-2 rounded-md transition-all"
            onClick={toggleMenu}
          >
            Tips
          </Link>
          <Link
            href="/contact"
            className="text-[#FFA500] hover:bg-[#0336FF] hover:text-white px-5 py-2 rounded-md transition-all"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
