"use client";
import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";

const Menu = ({ menuOpen, setMenuOpen }) => {
  const links = [
    { name: "Work", href: "#work" },
    { name: "Studio", href: "#studio" },
    { name: "News", href: "#news" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "Instagram", href: "https://instagram.com" },
    { name: "LinkedIn", href: "https://linkedin.com" },
  ];

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"; // disable scroll
      const timer = setTimeout(() => setAnimate(true), 50);
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = "auto"; // enable scroll
      setAnimate(false);
    }
  }, [menuOpen]);

  if (!menuOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-60 bg-[#111111] flex flex-row h-screen overflow-hidden px-12 pt-12 transition-transform duration-700 ease-in-out ${
        animate ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* First Div: Logo and Close Button */}
      <div className="flex flex-col items-start w-[60%] mb-12">
        {/* Logo */}
        <div className="mb-12">
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </div>

        {/* Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-8 right-8 flex items-center gap-2 text-white cursor-pointer text-lg font-medium capitalize hover:text-gray-300 transition-colors duration-300"
        >
          <X className="w-8 h-8" />
          Close
        </button>
      </div>

      {/* Second Div: Menu, Socials, Our Story */}
      <div className="flex flex-col items-start w-[40%] space-y-10 md:space-y-8">
        {/* Menu Links */}
        <nav className="flex flex-col items-start text-3xl md:text-5xl capitalize w-full pt-[130px]">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="relative group text-left text-white transition-all duration-300 leading-tight"
            >
              <span className="relative">{link.name}</span>
              <span className="absolute bottom-0 left-0 h-[2px] bg-white w-0 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        {/* Social Buttons */}
        <div className="flex flex-col items-start space-y-3 md:space-y-3 mt-6 w-full">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group   text-xl md:text-[15px] font-medium capitalize text-gray-400 text-left transition-colors duration-300 hover:text-white leading-none"
            >
              <span className="relative">{social.name}</span>
              <span className="absolute bottom-0 left-0 h-[2px] bg-white w-0 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Our Story Button styled like links */}
        <a
          href="#ourstory"
          onClick={() => setMenuOpen(false)}
          className="relative group py-2 text-[15px] md:text-[15px] font-medium capitalize text-gray-400 text-left transition-colors duration-300 hover:text-white leading-tight pt-16"
        >
          <span className="relative">Our story</span>
          <span className="absolute bottom-0 left-0 h-[2px] bg-white w-0 group-hover:w-full transition-all duration-300"></span>
        </a>
      </div>
    </div>
  );
};

export default Menu;
