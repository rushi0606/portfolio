"use client";
import React from "react";

const Highlight = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-[150vh] bg-white ">
      {/* Right Division (first visually, 55%) */}
      <div className="w-full md:w-[56%] h-[50vh] md:h-screen bg-white flex items-center justify-center order-1 md:order-1">
        <h1 className="text-3xl md:text-5xl font-medium text-black">
          <h2 className="pb-[170px] text-[200px] pl-9">Work</h2>
        </h1>
      </div>

      {/* Left Division (second, 45%) */}
      <div className="w-full md:w-[44%] h-[50vh] md:h-screen bg-white flex items-center justify-center order-2 md:order-2">
        <h2 className="text-3xl md:text-5xl text-black">
          <h3 className="text-[17px] pt-120">Featured Projects</h3>
          <h2 className="text-[25px] w-90 pt-30">Highlights of cases that we passionately built with forward thinking clients and friends over the years</h2>
        </h2>
      </div>
    </div>
  );
};

export default Highlight;

