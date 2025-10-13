"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const Highlight = () => {
  const highlightRef = useRef(null);

  // Track scroll progress relative to highlight section
  const { scrollYProgress } = useScroll({
    target: highlightRef,
    offset: ["start end", "end start"], // Trigger when section enters viewport
  });

  // Parallax effect: text moves faster, background moves slower
  const textY = useTransform(scrollYProgress, [0, 1], [100, -300]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Optional state to detect if section is in view
  const [inView, setInView] = useState(false);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0 && latest < 1) setInView(true);
    else setInView(false);
  });

 return (
    <div
      ref={highlightRef}
      id="highlight"
      className="relative flex flex-col md:flex-row w-full h-[150vh] overflow-hidden bg-white"
    >
      {/* Moving Background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -z-10 bg-white"
      />

      {/* Right Division */}
      <motion.div
        style={{ y: textY }}
        className="w-full md:w-[56%] h-[50vh] md:h-screen flex items-center justify-center order-1 md:order-1"
      >
        <h1 className="text-3xl md:text-5xl font-medium text-black">
          <h2 className="pb-[170px] text-[200px] pl-9">Work</h2>
        </h1>
      </motion.div>

      {/* Left Division */}
      <motion.div
        style={{ y: textY }}
        className="w-full md:w-[44%] h-[50vh] md:h-screen flex items-center justify-center order-2 md:order-2"
      >
        <h2 className="text-3xl md:text-5xl text-black">
          <h3 className="text-[17px] pt-120">Featured Projects</h3>
          <h2 className="text-[25px] w-90 pt-30">
            Highlights of cases that we passionately built with forward thinking clients and friends over the years
          </h2>
        </h2>
      </motion.div>
    </div>
  );
};

export default Highlight;
