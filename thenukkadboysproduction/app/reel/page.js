"use client";
import React, { useEffect, useRef } from "react";

const ReelPage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.volume = 1.0; // full sound
      video.play().catch((err) => console.log("Autoplay prevented:", err));
    }
  }, []);

  return (
    <div className="flex items-center justify-center h-182 w-full bg-[#0d0e13]">
      <video
        ref={videoRef}
        src="/videos/thebansuriwala_collectives.mp4"
        controls
        autoPlay
        className="h-full pt-4 pb-4"
      />
    </div>
  );
};

export default ReelPage;
