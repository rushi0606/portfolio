"use client";
import React, { useRef, useEffect } from "react";

const ReelPage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current?.play();
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-screen bg-black">
      <video
        ref={videoRef}
        className="w-auto h-full object-contain"
        src="/videos/thebansuriwala_collectives.mp4"
        muted
        autoPlay
        loop
        playsInline
        controls
      ></video>
    </div>
  );
};

export default ReelPage;
