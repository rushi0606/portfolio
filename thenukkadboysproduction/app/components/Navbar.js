"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Menu as MenuIcon } from "lucide-react";
import Menu from "./Menu";
import logo from "@/public/images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMenuButton, setShowMenuButton] = useState(false);
  const [hideNavLinks, setHideNavLinks] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setHideNavLinks(scrollY > 200); // hide nav links instantly after 200px
      setShowMenuButton(scrollY > 500); // show menu button instantly after 500px
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50">
        <nav className="flex justify-between items-center px-6 pt-10 pb-4 pr-12 bg-transparent">
          {/* Logo */}
          <Image
            src={logo}
            alt="Logo"
            width={70}
            height={30}
            className="object-contain pl-2"
          />

          {/* Desktop Nav Links */}
          <div
            className={`hidden md:flex gap-8 text-white capitalize ${
              hideNavLinks ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
            }`}
          >
            {["Work", "Studio", "News", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="relative group text-white hover:text-[#F0EAD6] hover:scale-105"
              >
                <span>{link}</span>
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#F0EAD6] group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* Floating Menu Button */}
      <div
        className={`fixed top-12 right-7 z-50
          ${showMenuButton ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <button
          onClick={() => setMenuOpen(true)}
          className="flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-black shadow-md hover:scale-105 hover:bg-[#F0EAD6] hover:text-black hover:shadow-xl"
        >
          <span className="text-sm font-medium tracking-wide">Menu</span>
          <MenuIcon className="w-3 h-3" />
        </button>
      </div>

      {/* Overlay Menu */}
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
};

export default Navbar;
