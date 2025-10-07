"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Menu as MenuIcon } from "lucide-react";
import Menu from "./Menu";

const Navbar = () => {
  const [showMenuButton, setShowMenuButton] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        const navbarHeight = navbarRef.current.offsetHeight;
        setShowMenuButton(window.scrollY > navbarHeight);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Navbar (scrolls with page) */}
      <div
        ref={navbarRef}
        className={`w-full z-50 transition-opacity duration-500 ${
          menuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 pt-10 pb-4 pr-12 bg-transparent text-[15px]">
          <div>
            <Image
              src="/logo.png"
              alt="Logo"
              width={100}
              height={40}
              className="object-contain"
            />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 text-[15px] text-white capitalize">
            <a href="#work">Work</a>
            <a href="#studio">Studio</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(true)}
              className="text-white flex items-center gap-2 cursor-pointer"
            >
              <span className="text-sm font-medium tracking-wide">Menu</span>
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </div>

      {/* Floating Menu Button (slow fade-in, fast fade-out) */}
      <div
        style={{
          transition: showMenuButton
            ? "opacity 1s ease-in" // fade-in slower
            : "opacity 0s ease-out", // fade-out faster
        }}
        className={`fixed top-10 right-8.5 z-50 ${
          showMenuButton ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setMenuOpen(true)}
          className="flex items-center gap-2 text-white bg-transparent px-6 py-2 cursor-pointer"
        >
          <span className="text-sm font-medium tracking-wide">Menu</span>
          <MenuIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Overlay Menu */}
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
};

export default Navbar;
