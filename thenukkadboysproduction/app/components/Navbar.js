"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Menu as MenuIcon } from "lucide-react";
import Menu from "./Menu";
import logo from "@/public/images/logo.png";

const Navbar = () => {
  const [showMenuButton, setShowMenuButton] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOnWhiteSection, setIsOnWhiteSection] = useState(false); // track highlight visibility
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = navbarRef.current?.offsetHeight || 0;
      setShowMenuButton(window.scrollY > navbarHeight);

      // Detect highlight section
      const highlightSection = document.getElementById("highlight");
      if (highlightSection) {
        const rect = highlightSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const isVisible = rect.top < windowHeight / 1.5 && rect.bottom > 0;
        setIsOnWhiteSection(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <div
        ref={navbarRef}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ease-out ${
          showMenuButton || menuOpen
            ? "opacity-0 -translate-y-10 pointer-events-none"
            : "opacity-100 translate-y-0"
        }`}
      >
        <nav className="flex justify-between items-center px-6 pt-10 pb-4 pr-12 bg-transparent text-[15px]">
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
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointe
                ${
                  isOnWhiteSection
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
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
        className={`fixed top-12 right-7 z-50 ${
          showMenuButton && !menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[-10px] pointer-events-none"
        }`}
      >
        <button
          onClick={() => setMenuOpen(true)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer`}
        >
          <span className="text-sm font-medium tracking-wide">Menu</span>
          <MenuIcon className="w-4 h-4" />
        </button>
      </div>

      {/* Overlay Menu */}
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
};

export default Navbar;
