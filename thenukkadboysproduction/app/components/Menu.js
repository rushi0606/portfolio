"use client";
import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import teamImage from "@/public/images/frontpage.jpeg";

const Menu = ({ menuOpen, setMenuOpen }) => {
  const links = [
    { name: "Our Story", href: "#ourstory" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "Instagram", href: "https://instagram.com" },
    { name: "LinkedIn", href: "https://linkedin.com" },
    { name: "Behance", href: "https://behance.net" },
  ];

  const [animate, setAnimate] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer;
    if (menuOpen) {
      setVisible(true);
      document.body.style.overflow = "hidden";
      timer = setTimeout(() => setAnimate(true), 50);
    } else {
      setAnimate(false);
      timer = setTimeout(() => {
        setVisible(false);
        document.body.style.overflow = "auto";
      }, 700);
    }
    return () => clearTimeout(timer);
  }, [menuOpen]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-60 bg-[#0d0e13] flex h-screen overflow-hidden px-12 pt-10 transition-transform duration-700 ease-in-out ${
        animate ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={teamImage}
          alt="Menu Background"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Close Button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-12 right-14 flex items-center gap-1 text-white text-lg font-medium capitalize hover:text-gray-400 transition-colors duration-300"
      >
        <span className="text-[17px] pt-2 ">Close</span>
        <X className="w-7 h-7 pt-2" />
      </button>

      {/* Left Section */}
      <div className="relative flex pl-40 pt-26 w-[60%]">
        {/* Logo */}
        <div className="absolute top-1 left-0">
          <Image src={logo} alt="Logo" width={70} height={30} />
        </div>

        {/* Image */}
        <div className="relative w-[600px] h-[460px]">
          <Image
            src={teamImage}
            alt="Preview"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-center w-[40%] space-y-16">
        
        {/* Main Links */}
        <nav className="flex flex-col items-start text-3xl md:text-5xl capitalize">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="relative group text-white hover:text-[#c1a753] transition-colors duration-300 leading-tight"
            >
              <span className="relative">{link.name}</span>

              <span className="absolute left-0 bottom-0 h-[2px] bg-white
              group-hover:bg-[#c1a753] w-0 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        {/* Social Links */}
        <div className="flex flex-col items-start space-y-2 pt-12">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group text-xl capitalize
              text-white hover:text-[#c1a753] transition-colors duration-300"
            >
              <span className="relative">{social.name}</span>

              <span className="absolute left-0 -bottom-2 h-[2px] bg-white
              group-hover:bg-[#c1a753] w-0 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Menu;
