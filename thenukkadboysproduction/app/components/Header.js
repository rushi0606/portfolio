"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import BgImage from "@/public/images/image1.jpg";

const Header = () => {
  const overlayRef = useRef(null);

  // Track scroll progress
  const { scrollYProgress } = useScroll({
    target: overlayRef,
    offset: ["start start", "end end"],
  });

  // Text moves faster
  const textY = useTransform(scrollYProgress, [0, 1], [0, -500]);

  // Background moves slower (half speed)
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <div ref={overlayRef} className="relative h-[250vh] w-screen">
      {/* Background Image (moves slower) */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src={BgImage}
          alt="Background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </motion.div>

      {/* Animated Text (moves faster) */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 flex flex-col h-screen pt-32 px-10"
      >
        <p className="w-2xl pl-35 pt-[500px] text-[24px]">
          Global digital design studio partnering with brands and businesses that
          create exceptional experiences where people live, work, and unwind.
        </p>
        <h1 className="text-[300px] leading-[250px] w-2xl pl-30 pt-25">
          Building Digital Presence
        </h1>
        <p className="w-2xl pl-35 pt-25 text-[24px] pb-30">
          We help experience-driven companies thrive by making their audience feel
          the refined intricacies of their brand and product in the digital space.
          Unforgettable journeys start with a click.
        </p>
      </motion.div>
    </div>
  );
};

export default Header;
