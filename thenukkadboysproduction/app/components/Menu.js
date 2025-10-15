"use client";
import React, { useEffect, useState, useRef } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import logo from "@/public/images/logo.png";

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
  const videoRef = useRef(null);

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

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className={`fixed inset-0 z-60  bg-black bg-grey-900 flex flex-row h-screen overflow-hidden px-12 pt-10 transition-transform duration-700 ease-in-out ${
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
      <div className="flex flex-col justify-between items-start w-[60%] relative">
        {/* Logo */}
        <div className="absolute top-0 left-1">
          <Image
            src={logo}
            alt="Logo"
            width={70}
            height={30}
            className="object-contain"
          />
        </div>

        {/* Video Section */}
        <div className=" flex justify-center overflow-hidden pt-20 h-160 pl-70 hover:scale-101 opacity-70">
          <video
            ref={videoRef}
            className="w-full h-full cursor-pointer transform transition-all duration-500 ease-in-out "
            src="/videos/video1.mp4"
            muted
            loop
            playsInline
            onMouseEnter={() => videoRef.current?.play()}
            onMouseLeave={handleMouseLeave}
          ></video>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-start justify-center w-[40%] space-y-10 md:space-y-8 pt-5">
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
        <div className="flex flex-col items-start space-y-3.5 mt-6 w-full pt-6">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group text-[15px] font-medium capitalize text-gray-400 transition-colors duration-300 hover:text-white leading-none"
            >
              <span className="relative">{social.name}</span>
              <span className="absolute bottom-0 left-0 h-[2px] bg-white w-0 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Our Story */}
        <a
          href="#ourstory"
          onClick={() => setMenuOpen(false)}
          className="relative group py-2 text-[15px] font-medium capitalize text-gray-400 transition-colors duration-300 hover:text-white leading-tight pt-33"
        >
          <span className="relative">Our story</span>
          <span className="absolute bottom-0 left-0 h-[2px] bg-white w-0 group-hover:w-full transition-all duration-300"></span>
        </a>
      </div>
    </div>
  );
};

export default Menu;
