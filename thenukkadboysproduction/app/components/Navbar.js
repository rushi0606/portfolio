"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Menu as MenuIcon } from "lucide-react";
import Menu from "./Menu";
import logo from "@/public/images/logo.png";

const Navbar = () => {
  const [showMenuButton, setShowMenuButton] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuBlack, setMenuBlack] = useState(false); // menu color state
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = navbarRef.current?.offsetHeight || 0;
      setShowMenuButton(window.scrollY > navbarHeight);

      // Change menu color after scrolling 380px
      setMenuBlack(window.scrollY >= 380);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  

  return (
    <>
      {/* Main Navbar */}
      <div
        ref={navbarRef}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ease-out ${
          showMenuButton || menuOpen
            ? "opacity-0 -translate-y-10 pointer-events-none"
            : "opacity-100 translate-y-0"
        }`}
      >
        <nav className="flex justify-between items-center px-6 pt-10 pb-4 pr-12 bg-transparent text-[15px]">
          {/* Logo */}
          <div>
            <Image
              src={logo}
              alt="Logo"
              width={70}
              height={30}
              className="object-contain pl-2"
            />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 text-[15px] text-white capitalize">
            {["Work", "Studio", "News", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="relative group text-white transition-colors duration-300 hover:text-white"
              >
                <span>{link}</span>
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(true)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-white backdrop-blur-sm hover:scale-105`}
            >
              <span className="text-sm font-medium tracking-wide">Menu</span>
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </div>

      {/* Floating Menu Button */}
      <div
        style={{
          transition: showMenuButton
            ? "opacity 1s ease-in 0.3s, transform 1s ease-in 0.3s"
            : "opacity 0.2s ease-out, transform 0.2s ease-out",
        }}
        className={`fixed top-10 right-12 z-50 ${
          showMenuButton && !menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[-10px] pointer-events-none"
        }`}
      >
        <button
          onClick={() => setMenuOpen(true)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-white backdrop-blur-sm hover:scale-105`}
        >
          <span className="text-sm font-medium tracking-wide text-black">Menu</span>
          <MenuIcon className="w-5 h-5 text-black" />
        </button>
      </div>

      {/* Overlay Menu */}
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
};

export default Navbar;
