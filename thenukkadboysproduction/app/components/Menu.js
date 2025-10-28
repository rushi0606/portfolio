"use client";
import React, { useEffect, useState } from "react";
import { X, Play } from "lucide-react";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import reelImage from "@/public/images/Bansuriwala_collectives.jpg";

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
      className={`fixed inset-0 z-60 bg-[#0d0e13] flex flex-row h-screen overflow-hidden px-12 pt-10 transition-transform duration-700 ease-in-out ${
        animate ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Close Button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-12 right-14 flex items-center gap-1 text-white cursor-pointer text-lg font-medium capitalize hover:text-gray-300 transition-colors duration-300"
      >
        <span className="text-[17px] pt-2">Close</span>
        <X className="w-7 h-7 pt-2" />
      </button>

      {/* Left Section */}
      <div className="relative flex pl-60 pt-26 w-[60%]">
        {/* Logo */}
        <div className="absolute top-1 left-0">
          <Image
            src={logo}
            alt="Logo"
            width={70}
            height={30}
            className="object-contain"
          />
        </div>

        {/* Image Container */}
        <div className="relative w-[400px] h-[450px] flex">
          <Image
            src={reelImage}
            alt="Reel Preview"
            fill
            className=" object-cover opacity-70"
          />
        </div>
        {/* Play Button (bottom-left corner of image) */}
        <button
          onClick={() => (window.location.href = "/reel")}
          className="absolute bottom-7 left-6 group flex items-center gap-2 text-gray-300 text-sm uppercase tracking-wide transition-all duration-300 py-2 hover:text-white"
        >
          <Play className="w-4 h-4" />
          <span className="relative">
            Play Reel
            <span className="absolute -bottom-[2px] left-0 h-[2px] bg-white w-0 group-hover:w-full transition-all duration-300"></span>
          </span>
        </button>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-start justify-center w-[40%] space-y-15 md:space-y-8 pt-18">
        {/* Main Links */}
        <nav className="flex flex-col items-start text-3xl md:text-5xl capitalize w-full">
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

        {/* Social Links */}
        <div className="flex flex-col items-start space-y-3.5 mt-6 w-full pt-25">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group text-[15px] font-medium capitalize text-gray-400 transition-colors duration-300 hover:text-white leading-none"
            >
              <span className="relative">{social.name}</span>
              <span className="absolute bottom-[-4] left-0 h-[2px] bg-white w-0 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Our Story */}
        <div className="w-full flex justify-end pt-14 pr-4">
          <a
            href="#ourstory"
            onClick={() => setMenuOpen(false)}
            className="relative group py-3 text-[15px] font-medium capitalize text-gray-400 transition-colors duration-300 hover:text-white leading-tight"
          >
            <span className="relative">
              Our story
              {/* Underline */}
              <span className="absolute -bottom-[5px] right-0 h-[2px] bg-white w-0 group-hover:w-full transition-all duration-300"></span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
