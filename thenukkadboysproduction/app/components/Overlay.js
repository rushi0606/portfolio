"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import React from "react";
import Image from "next/image";
import Carimg from "@/public/images/image1.jpg";

export default function ParallaxScroll() {
  const { scrollY } = useScroll();

  // 🐢 Image: slow movement
  const imageRawY = useTransform(scrollY, [0, 1000], [0, -100]);
  const imageY = useSpring(imageRawY, { stiffness: 100, damping: 20 });

  // 🚀 Text: faster movement
  const textRawY = useTransform(scrollY, [0, 200], [0, -300]);
  const textY = useSpring(textRawY, { stiffness: 100, damping: 20 });

  return (
    <div className="w-screen h-[500vh] overflow-hidden">
      {/* Parallax Image Section */}
      <motion.div
        style={{ y: imageY }}
        className=" h-screen"
      >
        <Image
          src={Carimg}
          alt="car"
         
        />
      </motion.div>

      {/* Parallax Text */}
      <motion.h1
        style={{ y: textY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-6xl leading-tight font-bold z-10 pointer-events-none text-center"
      >
        
      </motion.h1>
    </div>
  );
}
