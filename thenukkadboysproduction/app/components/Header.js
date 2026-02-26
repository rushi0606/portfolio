"use client";
import React from "react";
import Image from "next/image";
import BgImage from "@/public/images/headingphoto.png";

const Header = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src={BgImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover -z-10 opacity-55"
      />

      {/* Centered Text */}
      <div className="relative w-full h-full flex flex-col justify-center items-start px-20">
        {/* Tagline */}
        <p className="text-[25px] max-w-3xl pt-30 text-white mb-15">
          We are a team of passionate friends dedicated to capturing life’s 
          most precious moments with creativity, precision, and heart.
        </p>

        {/* Main Heading / Hero Statement */}
        <h1
          className="text-[70px] leading-[80px] font-extrabold mb-15"
        >
          Crafting Memories Through Vision
        </h1>

        {/* Subtext */}
        <p className="text-[25px] max-w-3xl text-white">
          From cinematic visuals, we tell your story 
          with a personal touch, creating timeless experiences that inspire 
          and resonate.
        </p>
      </div>
    </div>
  );
};

export default Header;
